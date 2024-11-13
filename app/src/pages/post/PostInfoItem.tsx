import IconText from "@components/IconText";
import { IconProps } from "@rsuite/icons/Icon";
import {
  ForwardRefExoticComponent,
  memo,
  ReactNode,
  RefAttributes,
} from "react";
import { Popover, Whisper } from "rsuite";

interface PostInfoItemProps {
  text: string;
  popover: ReactNode;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGElement>>;
}

const PostInfoItem = memo(({ text, popover, icon }: PostInfoItemProps) => (
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
));

export default PostInfoItem;
