import LogoImage from "@assets/images/logo.png";
import { Link } from "react-router-dom";

const SidebarHeader = () => (
  <div className="info flex gap-3">
    <div className="logo">
      <Link to="/" replace>
        <img className="h-16 w-16" src={LogoImage} alt="Wine" />
      </Link>
    </div>

    <div className="text">
      <div className="site-name text-xl font-extrabold">
        <Link
          className="duration-250 transition-colors hover:text-blue-300"
          to="/"
          replace
        >
          Wine
        </Link>
      </div>

      <div className="additional-info font-medium text-xs">Web-Developer blog</div>
    </div>
  </div>
);

export default SidebarHeader;
