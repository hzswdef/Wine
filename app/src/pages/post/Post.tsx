import CKEditor from "@components/ckeditor/CKEditor";
import CodeParagraph from "@components/paragraphs/CodeParagraph";
import LinksParagraph from "@components/paragraphs/LinksParagraph";
import SectionParagraph from "@components/paragraphs/SectionParagraph";
import TextParagraph from "@components/paragraphs/TextParagraph";
import usePostContext from "@hooks/usePostContext";
import Posts from "@http/clients/posts";
import { Post as IPost } from "@interfaces/post/post";
import PostInfoItem from "@pages/post/PostInfoItem";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { anchors } = usePostContext();

  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Posts.getPost(id ?? "")
      .then(response => {
        setPost(response.data.data);
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      });
  }, [id]);

  if (!post) {
    if (!error) {
      return <>Loading</>;
    } else {
      return <>{error}</>;
    }
  }

  return (
    <div className="post relative">
      <div className="anchors z-10 w-0 h-0 sticky right-0 top-0 ml-[calc(100%+1.5rem)] translate-x-full hidden 2xl:block">
        <div className="anchors-title text-xl font-bold">Content</div>

        <div className="anchors-items mt-2">
          {anchors &&
            Object.entries(anchors).length !== 0 &&
            Object.entries(anchors).map(([paragraphId, anchor]) => (
              <div
                key={paragraphId}
                className="cursor-pointer py-0.5 text-nowrap"
                onClick={() => anchor.onClick()}
              >
                {anchor.title}
              </div>
            ))}
        </div>
      </div>

      <div className="post-title mb-8 text-5xl font-bold">{post.title}</div>

      <div className="post-summary my-4 text">
        <CKEditor body={post.summary.value} />
      </div>

      <div className="post-info">
        <PostInfoItem
          text={moment(post.created).format("MM/DD/YYYY")}
          popover={
            <>
              {moment(post.created).format("LL")}
            </>
          }
          icon={CalenderDateIcon}
        />
      </div>

      <div className="post-paragraphs">
        {post.paragraphs.map(paragraph => {
          switch (paragraph.type) {
            case "Paragraph - Section":
              return (
                <SectionParagraph key={paragraph.id} paragraph={paragraph} />
              );
            case "Paragraph - Text":
              return <TextParagraph key={paragraph.id} paragraph={paragraph} />;
            case "Paragraph - Code":
              return <CodeParagraph key={paragraph.id} paragraph={paragraph} />;
            case "Paragraph - Links":
              return (
                <LinksParagraph key={paragraph.id} paragraph={paragraph} />
              );
          }
        })}
      </div>
    </div>
  );
};

export default Post;
