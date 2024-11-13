import LogoImage from "@assets/images/logo.png";
import { memo } from "react";
import { Link } from "react-router-dom";

const SidebarHeader = memo(() => (
  <div className="info flex items-center gap-3">
    <div className="logo">
      <Link to="/" replace>
        <img className="h-16 w-16" src={LogoImage} alt="Wine" />
      </Link>
    </div>

    <div className="text h-fit">
      <div className="site-name text-xl font-extrabold">
        <Link
          className="duration-250 transition-colors hover:text-blue-300"
          to="/"
          replace
        >
          Wine
        </Link>
      </div>

      <div className="additional-info text-xs font-medium">
        Web-Developer blog
      </div>
    </div>
  </div>
));

export default SidebarHeader;
