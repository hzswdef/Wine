import SidebarFooter from "@components/regions/sidebar/SidebarFooter";
import SidebarHeader from "@components/regions/sidebar/SidebarHeader";
import SidebarMenu from "@components/regions/sidebar/SidebarMenu";
import SidebarSearch from "@components/regions/sidebar/SidebarSearch";
import { Divider } from "rsuite";

const Sidebar = () => {
  return (
    <div className="sidebar flex h-full basis-64 flex-col gap-3 bg-custom-400 p-4">
      <SidebarHeader />
      <Divider />
      <SidebarSearch />
      <SidebarMenu />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
