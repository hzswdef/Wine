import RegionSidebarMenuItem from "@components/organisms/Regions/RegionSidebar/children/RegionSidebarMenuItem";
import { memo } from "react";
import { Nav } from "rsuite";

interface MenuItem {
	to: string;
	eventKey: string;
	label: string;
}

const menuItems: MenuItem[] = [
	{
		to: "/",
		eventKey: "home",
		label: "Home"
	},
	{
		to: "/posts",
		eventKey: "posts",
		label: "Posts"
	},
	{
		to: "/tags",
		eventKey: "tags",
		label: "Tags"
	},
	{
		to: "/contacts",
		eventKey: "contacts",
		label: "Contacts"
	},
	{
		to: "/author",
		eventKey: "author",
		label: "Author"
	}
];

const RegionSidebarMenu = memo(() => (
	<Nav vertical>
		{menuItems.map(menuItem => (
			<RegionSidebarMenuItem key={menuItem.eventKey} {...menuItem} />
		))}
	</Nav>
));

export default RegionSidebarMenu;
