import Pagination from "@components/molecules/Pagination/Pagination.tsx";
import PostTeaser from "@components/post/PostTeaser";
import useTitle from "@hooks/useTitle";
import PostsClient from "@http/clients/postsClient";
import SubrequestsClient from "@http/clients/subrequestsClient";
import { JsonApiResponse } from "@interfaces/api/response";
import Post from "@interfaces/post/post";
import { Taxonomy } from "@interfaces/taxonomy";
import Page from "@pages/Page";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, InputGroup, InputPicker, Message } from "rsuite";
import { InputItemDataType } from "rsuite/InputPicker";
import { useDebounce } from "use-debounce";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

interface PageState {
  posts: Post[];
  postsTotal: number;
  tags: Tag[];
  initialized: boolean;
}

interface FormData {
  title: string | null;
  tags: string | null;
  sort: SortOptionsEnum | null;
}

type Tag = InputItemDataType<string | number>;

enum SortOptionsEnum {
  "asc" = "title",
  "desc" = "-title",
  "recent" = "-changed",
  "oldest" = "created"
}

const sortOptions: InputItemDataType<string | number>[] = [
  {
    label: "Title ASC",
    value: SortOptionsEnum.asc
  },
  {
    label: "Title Desc",
    value: SortOptionsEnum.desc
  },
  {
    label: "Recent",
    value: SortOptionsEnum.recent
  },
  {
    label: "Oldest",
    value: SortOptionsEnum.oldest
  }
];

const Posts = () => {
  const { page } = useParams();

  const {
    control,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      title: null,
      tags: null,
      sort: null
    }
  });

  const updateTitle = useTitle();

  const [searchTextDebounce] = useDebounce(watch("title", null), 500);

  const [currentPage, setCurrentPage] = useState<number>(page ? +page : 1);
  const [pageState, setPageState] = useState<PageState>({
    posts: [],
    postsTotal: 0,
    tags: [],
    initialized: false
  });
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const searchTagsWatch = watch("tags", null);
  const searchSortWatch = watch("sort", SortOptionsEnum.recent);

  const onPageChange = useCallback(
    (page: number) => {
      if (page === 1) {
        navigate("/posts");
      } else {
        navigate(`/posts/${page}`);
      }

      setCurrentPage(page);
    },
    [navigate]
  );

  useEffect(() => {
    updateTitle("Posts");
  }, [updateTitle]);

  useEffect(() => {
    if (!pageState.initialized) {
      return;
    }

    let params = {};
    let offset: number;

    if (searchTextDebounce) {
      const textValue = searchTextDebounce.trim();

      if (textValue !== "") {
        params = {
          ...params,
          ...{
            "filter[fulltext]": textValue
          }
        };
      }
    }

    if (searchTagsWatch) {
      params = {
        ...params,
        ...{
          "filter[tag]": searchTagsWatch
        }
      };
    }

    if (searchSortWatch) {
      params = {
        ...params,
        ...{
          sort: searchSortWatch
        }
      };
    }

    // If params were not specified.
    if (Object.keys(params).length === 0) {
      offset = (currentPage - 1) * pageLimit;
    } else {
      offset = 0;
      onPageChange(1);
    }

    PostsClient.getPosts(offset, params)
      .then(({ data }) => {
        setPageState({
          ...pageState,
          posts: data.data,
          postsTotal: data.meta.count
        });
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      });
  }, [
    currentPage,
    searchTextDebounce,
    searchTagsWatch,
    searchSortWatch,
    pageState.initialized,
    onPageChange
  ]);

  useEffect(() => {
    SubrequestsClient.getPostsAndAllTags()
      .then(response => {
        if (
          response.data.requestPosts.headers.status[0] !== "200" ||
          response.data.requestTags.headers.status[0] !== "200"
        ) {
          return setError("Something went wrong. Please try again later.");
        }

        const posts: JsonApiResponse<Post[]> = JSON.parse(
          response.data.requestPosts.body
        );
        const tags: JsonApiResponse<Taxonomy[]> = JSON.parse(
          response.data.requestTags.body
        );

        setPageState({
          posts: posts.data,
          postsTotal: posts.meta.count,
          tags: tags.data.map(tag => {
            return {
              label: tag.name,
              value: tag.name.toLowerCase()
            };
          }),
          initialized: true
        });
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      });
  }, []);

  if (error) {
    return (
      <Message type="error" showIcon>
        {error}
      </Message>
    );
  }

  if (!pageState.initialized) {
    return <>Loading</>;
  }

  return (
    <Page page="posts" title="Posts">
      <div className="posts-header">
        <Form className="mb-8 flex flex-wrap gap-4 md:flex-nowrap md:gap-2">
          <Form.Group
            className="!mb-0 basis-full md:basis-1/3"
            controlId="query"
          >
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <InputGroup className="!w-full">
                  <Input
                    className="w-full"
                    id={field.name}
                    value={field.value ?? ""}
                    onChange={value => field.onChange(value)}
                    placeholder="Search"
                  />

                  <Form.ErrorMessage
                    show={!!errors.title}
                    placement="bottomStart"
                  >
                    {errors.title?.message}
                  </Form.ErrorMessage>
                </InputGroup>
              )}
            />
          </Form.Group>

          <Form.Group
            className="!mb-0 basis-full md:basis-1/3"
            controlId="tags"
          >
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <InputPicker
                  className="w-full"
                  data={pageState.tags}
                  id={field.name}
                  value={field.value ?? ""}
                  onChange={value => field.onChange(value)}
                  placeholder="Tags"
                />
              )}
            />
          </Form.Group>

          <Form.Group
            className="!mb-0 basis-full md:basis-1/3"
            controlId="sort"
          >
            <Controller
              name="sort"
              control={control}
              render={({ field }) => (
                <InputPicker
                  className="w-full"
                  data={sortOptions}
                  id={field.name}
                  value={field.value}
                  defaultValue={SortOptionsEnum.recent}
                  onChange={value => field.onChange(value)}
                  placeholder="Sort by"
                />
              )}
            />
          </Form.Group>
        </Form>

        <div className="header-info mb-4">
          <div className="posts-count">
            <small>Results:</small> <strong>{pageState.postsTotal}</strong>
          </div>
        </div>

        {error && (
          <Message className="mb-8" type="error" showIcon>
            {error}
          </Message>
        )}
      </div>

      <div className="posts-items">
        {pageState.posts.map(post => (
          <PostTeaser key={post.id} limitTags post={post} />
        ))}
      </div>

      <div className="posts-footer">
        <Pagination
          total={pageState.postsTotal}
          activePage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </Page>
  );
};

export default Posts;
