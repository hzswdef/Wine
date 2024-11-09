import { Link } from "react-router-dom";

const SidebarFooter = () => {
  return (
    <div className="sidebar-footer mt-auto text-xs">
      Content is published under a
      <Link
        className="duration-250 text-xs text-blue-400 transition-colors hover:text-blue-300"
        to="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
      >
        {" "}
        CC-BY-SA 4.0{" "}
      </Link>
      license.
    </div>
  );
};

export default SidebarFooter;
