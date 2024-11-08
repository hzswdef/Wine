import IconText from "@components/IconText";
import { IconProps } from "@rsuite/icons/Icon";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { Popover, Whisper } from "rsuite";

interface PostInfoItemProps {
  text: string;
  popover: ReactNode;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGElement>>;
}

const PostInfoItem = ({ text, popover, icon }: PostInfoItemProps) => {
  return (
    <div className="post-info-item w-fit">
      <Whisper
        placement="bottom"
        controlId="post-info-item-date"
        trigger="hover"
        speaker={<Popover className="text-xs">{popover}</Popover>}
      >
        <>
          <IconText text={text} icon={icon} />
        </>
      </Whisper>
    </div>
  );
};

export default PostInfoItem;
