import RegionSidebarFooter from "@components/organisms/Regions/RegionSidebar/children/RegionSidebarFooter";
import RegionSidebarHeader from "@components/organisms/Regions/RegionSidebar/children/RegionSidebarHeader";
import RegionSidebarMenu from "@components/organisms/Regions/RegionSidebar/children/RegionSidebarMenu";
import RegionSidebarSearch from "@components/organisms/Regions/RegionSidebar/children/RegionSidebarSearch";
import useSidebarContext from "@hooks/useSidebarContext";
import MenuIcon from "@rsuite/icons/Menu";
import { clsx } from "clsx";
import { memo, useMemo } from "react";
import { Button, Divider } from "rsuite";

const RegionSidebar = memo(() => {
	const { sidebarIsOpened, handleSidebarOpen } = useSidebarContext();

	const sidebarClassNames = useMemo(
		() =>
			clsx(
				"sidebar flex-col h-screen absolute z-10 w-full bg-custom-400 p-4",
				"md:flex md:h-full md:gap-3 md:basis-64 md:static",
				sidebarIsOpened ? "flex" : "hidden"
			),
		[sidebarIsOpened]
	);

	return (
		<>
			<div className="sidebar-mobile flex items-center justify-between p-4 md:hidden">
				<RegionSidebarHeader />

				<Button className="p-2" appearance="link" onClick={handleSidebarOpen}>
					<MenuIcon className="h-8 w-8" />
				</Button>
			</div>

			<div className={sidebarClassNames}>
				<RegionSidebarHeader />
				<Divider />
				<RegionSidebarSearch />
				<RegionSidebarMenu />
				<RegionSidebarFooter />
			</div>
		</>
	);
});

export default RegionSidebar;
