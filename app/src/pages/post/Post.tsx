import CKEditor from "@components/ckeditor/CKEditor";
import CodeParagraph from "@components/paragraphs/CodeParagraph";
import LinksParagraph from "@components/paragraphs/LinksParagraph";
import SectionParagraph from "@components/paragraphs/SectionParagraph";
import TextParagraph from "@components/paragraphs/TextParagraph";
import Tags from "@components/post/Tags";
import Share from "@components/Share";
import usePostContext from "@hooks/usePostContext";
import useTitle from "@hooks/useTitle";
import PostsClient from "@http/clients/postsClient";
import { Post as IPost } from "@interfaces/post/post";
import Page from "@pages/Page";
import PostInfoItem from "@pages/post/PostInfoItem";
import CalenderDateIcon from "@rsuite/icons/CalenderDate";
import { clsx } from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "rsuite";

const Post = () => {
  const { id } = useParams();
  const { anchors } = usePostContext();

  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateTitle = useTitle();

  useEffect(() => {
    PostsClient.getPost(id ?? "")
      .then(response => {
        setPost(response.data.data);
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      });
  }, [id]);

  useEffect(() => {
    if (post) {
      updateTitle(post.title);
    }
  }, [post, updateTitle]);

  if (!post) {
    if (!error) {
      return <>Loading</>;
    } else {
      return (
        <Message type="error" showIcon>
          {error}
        </Message>
      );
    }
  }

  return (
    <Page page="post" className="post relative" title={post.title}>
      {anchors && (
        <div
          className={clsx(
            "anchors sticky right-0 top-0 z-10 ml-[calc(100%+1.5rem)] hidden h-0 w-0 translate-x-full 2xl:block",
          )}
        >
          <div className="anchors-title text-xl font-bold">Content</div>

          <div className="anchors-items mt-2">
            {Object.entries(anchors).length !== 0 &&
              Object.entries(anchors).map(([paragraphId, anchor]) => (
                <div
                  key={paragraphId}
                  className="cursor-pointer text-nowrap py-0.5"
                  onClick={() => anchor.onClick()}
                >
                  {anchor.title}
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="post-header">
        <div className="post-summary text my-4">
          <CKEditor body={post.summary.value} />
        </div>

        <div className="post-info">
          <PostInfoItem
            text={moment(post.created).format("MM/DD/YYYY")}
            popover={<>{moment(post.created).format("LL")}</>}
            icon={CalenderDateIcon}
          />
        </div>
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

      <div className="post-footer">
        {post.tags && <Tags tags={post.tags} />}

        <Share title={post.title} />
      </div>
    </Page>
  );
};

export default Post;
