import { Link } from "react-router-dom";

const SidebarFooter = () => {
  return (
    <div className="sidebar-footer text-xs mt-auto">
      Content is published under a
      <Link
        className="text-xs text-blue-400 hover:text-blue-300 duration-250 transition-colors"
        to="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
      >
        {" "} CC-BY-SA 4.0 {" "}
      </Link>
      license.
    </div>
  );
};

export default SidebarFooter;
