import PageBase from "@components/pages/PageBase/PageBase";
import PagePostsContent from "@components/pages/PagePosts/children/PagePostsContent";
import PagePostsFooter from "@components/pages/PagePosts/children/PagePostsFooter";
import PagePostsHeader from "@components/pages/PagePosts/children/PagePostsHeader";
import { SortOptionsEnum } from "@constants/sortOptions";
import useTitle from "@hooks/useTitle";
import PostsClient from "@http/clients/postsClient";
import SubrequestsClient from "@http/clients/subrequestsClient";
import { JsonApiResponse } from "@interfaces/api/response";
import Post from "@interfaces/post/post";
import { Taxonomy } from "@interfaces/taxonomy";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState
} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputItemDataType } from "rsuite/InputPicker";
import { useDebounce } from "use-debounce";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

export interface PageState {
	posts: Post[];
	postsTotal: number;
	tags: Tag[];
	loading: boolean;
}

export interface FormData {
	title: string | null;
	tags: string | null;
	sort: SortOptionsEnum | null;
}

type Tag = InputItemDataType<string | number>;

const PagePosts = () => {
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

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pageState, setPageState] = useState<PageState>({
		posts: [],
		postsTotal: 0,
		tags: [],
		loading: true
	});
	const [error, setError] = useState<string | undefined>();
	const didInitialFetch = useRef<boolean>(false);

	const [searchTextDebounce] = useDebounce(watch("title", null), 500);

	const navigate = useNavigate();
	const updateTitle = useTitle();

	const searchTagsWatch = watch("tags", null);
	const searchSortWatch = watch("sort", SortOptionsEnum.recent);

	// @TODO Fix <Outlet /> re-render on page change.
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
		navigate("/posts");
	}, [navigate]);

	// Search posts.
	useLayoutEffect(() => {
		if (!didInitialFetch.current) {
			return;
		}

		setPageState(prevState => {
			return {
				...prevState,
				loading: true
			};
		});

		let params = {};

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

		let offset: number;
		if (Object.keys(params).length === 0) {
			offset = (currentPage - 1) * pageLimit;
		} else {
			offset = 0;
		}

		PostsClient.searchPosts(offset, params)
			.then(({ data }) => {
				setPageState(prevState => {
					return {
						...prevState,
						posts: data.data,
						postsTotal: data.meta.count,
						loading: false
					};
				});
			})
			.catch(() => {
				setError("Something went wrong. Please try again later.");
				setPageState(prevState => {
					return {
						...prevState,
						loading: false
					};
				});
			});
	}, [
		currentPage,
		searchTextDebounce,
		searchTagsWatch,
		searchSortWatch,
		onPageChange
	]);

	// Initial PagePosts & Tags fetch.
	useEffect(() => {
		SubrequestsClient.getPostsAndAllTags()
			.then(({ data }) => {
				if (
					data.requestPosts.headers.status[0] !== "200" ||
					data.requestTags.headers.status[0] !== "200"
				) {
					return setError("Something went wrong. Please try again later.");
				}

				const posts: JsonApiResponse<Post[]> = JSON.parse(
					data.requestPosts.body
				);
				const tags: JsonApiResponse<Taxonomy[]> = JSON.parse(
					data.requestTags.body
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
					loading: false
				});
				didInitialFetch.current = true;
			})
			.catch(() => {
				setError("Something went wrong. Please try again later.");
				setPageState(prevState => {
					return {
						...prevState,
						loading: false
					};
				});
			});
	}, []);

	return (
		<PageBase page="posts" title="Posts">
			<PagePostsHeader
				control={control}
				errors={errors}
				pageStateTags={pageState.tags}
				pageStatePostsTotal={pageState.postsTotal}
				pageError={error}
			/>
			<PagePostsContent
				didInitialFetch={didInitialFetch.current}
				pageStateLoading={pageState.loading}
				posts={pageState.posts}
			/>
			<PagePostsFooter
				postsTotal={pageState.postsTotal}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>
		</PageBase>
	);
};

export default PagePosts;
