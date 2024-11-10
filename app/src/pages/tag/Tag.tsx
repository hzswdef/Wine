import CustomPagination from "@components/CustomPagination";
import PostTeaser from "@components/post/PostTeaser";
import useTitle from "@hooks/useTitle";
import Posts from "@http/clients/posts";
import Post from "@interfaces/post/post";
import NotFound from "@pages/error/NotFound.tsx";
import Page from "@pages/Page";
import { createRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

const Tag = () => {
  const { tag, page } = useParams();

  const updateTitle = useTitle();

  const [posts, setPosts] = useState<Post[] | null>(null);
  const [postsTotal, setPostsTotal] = useState<number | null>(null);

  const anchorRef = createRef<HTMLDivElement>();

  const navigate = useNavigate();

  const currentPage: number = page ? +page : 1;

  useEffect(() => {
    if (tag) {
      updateTitle(tag.charAt(0).toUpperCase() + tag.slice(1));

      const offset: number = (currentPage - 1) * pageLimit;

      Posts.getPostsByTag(tag, offset)
        .then(response => {
          setPosts(response.data.data);
          setPostsTotal(response.data.meta.count);
        })
        .catch(() => {});
    }
  }, [tag, page, currentPage]);

  const onPageChange = (page: number) => {
    navigate(`/tag/${tag}/${page}`);

    if (anchorRef?.current) {
      anchorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!tag) {
    return <>Error</>;
  }

  if (!posts && !postsTotal) {
    return <>Loading</>;
  }

  if (posts?.length === 0) {
    return <NotFound />;
  }

  return (
    <Page page="tag" title={`"${tag}" Tag`} className="capitalize">
      <div ref={anchorRef} className="tag-anchor scroll-mt-48"></div>

      {posts &&
        posts.length > 0 &&
        posts.map(post => <PostTeaser key={post.id} post={post} />)}

      <CustomPagination
        total={postsTotal || 0}
        activePage={currentPage}
        onPageChange={onPageChange}
      />
    </Page>
  );
};

export default Tag;
