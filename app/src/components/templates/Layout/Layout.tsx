import RegionContent from "@components/organisms/Regions/RegionContent/RegionContent";
import RegionSidebar from "@components/organisms/Regions/RegionSidebar/RegionSidebar";
import SidebarContextProvider from "@contexts/SidebarContext/SidebarContextProvider";

const Layout = () => (
	<div className="flex h-full w-full flex-col bg-custom-100 md:flex-row">
		<SidebarContextProvider>
			<RegionSidebar />
		</SidebarContextProvider>

		<RegionContent />
	</div>
);

export default Layout;
