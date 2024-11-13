import { IconProps } from "@rsuite/icons/Icon";
import { ForwardRefExoticComponent, memo, RefAttributes } from "react";

interface IconTextProps {
  text: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGElement>>;
}

const IconText = memo(({ icon: Icon, text }: IconTextProps) => (
  <div className="flex items-center p-0.5">
    <Icon className="my-0.5 mr-1.5 h-4 w-4" />

    <div className="inline text-xs">{text}</div>
  </div>
));

export default IconText;
