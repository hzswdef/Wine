import "@components/paragraphs/Paragraph.scss";

import usePostContext from "@hooks/usePostContext";
import { ParagraphsUnion } from "@interfaces/post/paragraphs";
import { clsx } from "clsx";
import {
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { Heading } from "rsuite";
import { useDebouncedCallback } from "use-debounce";

interface ParagraphProps {
  paragraph: ParagraphsUnion;
  anchorTitle?: string;
}

const Paragraph = ({
  children,
  paragraph,
  anchorTitle,
}: PropsWithChildren<ParagraphProps>) => {
  const { pushAnchor } = usePostContext();

  const [classNames, setClassNames] = useState<string>();
  const [anchorIsClicked, setAnchorIsClicked] = useState<boolean>(false);

  const anchorRef = useRef<HTMLDivElement | null>(null);

  // Remove the animation classes within 1600 ms after the anchor is pressed.
  const anchorClickDebounce = useDebouncedCallback(
    () => {
      setAnchorIsClicked(false);
    },
    1600
  );

  const onAnchorClick = () => {
    setAnchorIsClicked(!anchorIsClicked);

    if (anchorRef?.current) {
      anchorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    anchorClickDebounce();
  };

  useEffect(() => {
    if (anchorTitle && anchorRef.current) {
      pushAnchor({
        id: paragraph.id,
        title: anchorTitle,
        ref: anchorRef as MutableRefObject<HTMLDivElement>,
        onClick: onAnchorClick,
      });
    }
  }, [anchorRef, anchorTitle, paragraph.id]);

  const paragraphTypeName = paragraph.type.split(" ").pop();
  const mainClassNames = clsx(
    `paragraph-${paragraphTypeName}`,
    "my-6 scroll-mt-48",
  );

  // Do animation things on anchor click.
  useEffect(() => {
    setClassNames(
      clsx(
        "anchor-title w-full font-extrabold mb-2",
        anchorIsClicked && "animate-anchor-pulse",
      ),
    );
  }, [anchorIsClicked]);

  return (
    <div className={mainClassNames} ref={anchorRef}>
      {anchorTitle && (
        <Heading level={2} className={classNames}>
          {anchorTitle}
        </Heading>
      )}

      {children}
    </div>
  );
};

export default Paragraph;
