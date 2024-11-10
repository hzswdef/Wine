import CKEditor from "@components/ckeditor/CKEditor";
import Post from "@interfaces/post/post";
import PostInfoItem from "@pages/post/PostInfoItem";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { Divider, Heading } from "rsuite";

interface PostTeaserProps {
  post: Post;
}

const PostTeaser = ({ post }: PostTeaserProps) => {
  return (
    <div className="post-teaser mb-6">
      <Link to={`/post/${post.id}`} replace>
        <Heading level={2}>{post.title}</Heading>
      </Link>

      <div className="post-summary mb-3 mt-2">
        <CKEditor body={post.summary.processed} />
      </div>

      <PostInfoItem
        text={moment(post.created).format("MM/DD/YYYY")}
        popover={<>{moment(post.created).format("LL")}</>}
        icon={CalenderDateIcon}
      />

      <Divider />
    </div>
  );
};

export default PostTeaser;
