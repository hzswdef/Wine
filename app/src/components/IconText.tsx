import { IconProps } from "@rsuite/icons/Icon";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface IconTextProps {
  text: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGElement>>;
}

const IconText = ({ icon: Icon, text }: IconTextProps) => (
  <div>
    <Icon className="mr-1.5 h-4 w-4" />

    <div className="inline text-xs">{text}</div>
  </div>
);

export default IconText;
