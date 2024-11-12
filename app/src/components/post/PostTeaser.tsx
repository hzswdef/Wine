import CKEditor from "@components/ckeditor/CKEditor";
import Tags from "@components/post/Tags";
import Post from "@interfaces/post/post";
import PostInfoItem from "@pages/post/PostInfoItem";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import dayjs from "dayjs";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Divider, Heading } from "rsuite";

interface PostTeaserProps {
  post: Post;
  limitTags?: boolean | number;
}

const PostTeaser = memo(({ post, limitTags }: PostTeaserProps) => (
  <div className="post-teaser mb-6">
    <Link to={`/post/${post.id}`} replace>
      <Heading level={2}>{post.title}</Heading>
    </Link>

    <div className="post-summary mb-3 mt-2">
      <CKEditor body={post.summary.processed} />
    </div>

    <div className="post-teaser-footer flex flex-col gap-4 xl:flex-row">
      <PostInfoItem
        text={dayjs(post.created).format("MM/DD/YYYY")}
        popover={<>{dayjs(post.created).format("MMMM D, YYYY")}</>}
        icon={CalenderDateIcon}
      />

      {post.tags && (
        <Tags appearance="secondary" limitTags={limitTags} tags={post.tags} />
      )}
    </div>

    <Divider />
  </div>
));

export default PostTeaser;
