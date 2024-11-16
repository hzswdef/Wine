import "@components/molecules/Paragraphs/ParagraphBase/ParagraphBase.scss";

import usePostContext from "@hooks/usePostContext.ts";
import { ParagraphsUnion } from "@interfaces/post/paragraphs.ts";
import { clsx } from "clsx";
import {
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Heading } from "rsuite";
import { useDebouncedCallback } from "use-debounce";

interface ParagraphProps {
  paragraph: ParagraphsUnion;
  anchorTitle?: string;
}

const ParagraphBase = ({
  children,
  paragraph,
  anchorTitle,
}: PropsWithChildren<ParagraphProps>) => {
  // @TODO Move the anchors somewhere else cause that logic here result in multiple re-renders.

  const { pushAnchor } = usePostContext();

  const [classNames, setClassNames] = useState<string>();
  const [anchorIsClicked, setAnchorIsClicked] = useState<boolean>(false);

  const anchorRef = useRef<HTMLDivElement | null>(null);

  // Remove the animation classes within 1600 ms after the anchor is pressed.
  const anchorClickDebounce = useDebouncedCallback(() => {
    setAnchorIsClicked(false);
  }, 1600);

  const onAnchorClick = useCallback(() => {
    setAnchorIsClicked(!anchorIsClicked);

    if (anchorRef?.current) {
      anchorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    anchorClickDebounce();
  }, [anchorClickDebounce, anchorIsClicked]);

  // @TODO Investigate the issue. Probably should rewrite with useCallback.
  useEffect(() => {
    if (anchorTitle && anchorRef.current) {
      pushAnchor({
        id: paragraph.id,
        title: anchorTitle,
        ref: anchorRef as MutableRefObject<HTMLDivElement>,
        onClick: onAnchorClick,
      });
    }
  }, [anchorRef, anchorTitle, onAnchorClick, paragraph.id]);

  const paragraphTypeName = useMemo(
    () => paragraph.type.split(" ").pop(),
    [paragraph.type],
  );
  const mainClassNames = useMemo(
    () => clsx(`paragraph-${paragraphTypeName}`, "my-6 scroll-mt-48"),
    [paragraphTypeName],
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

export default ParagraphBase;
