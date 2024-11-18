import useSidebarContext from "@hooks/useSidebarContext";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItemProps } from "rsuite";

interface RegionSidebarMenuItemProps extends NavItemProps {
	to: string;
	label: string;
}

const RegionSidebarMenuItem = memo(
	({ to, eventKey, label }: RegionSidebarMenuItemProps) => {
		const { handleSidebarClose } = useSidebarContext();

		return (
			<Nav.Item
				as={Link}
				to={to}
				eventKey={eventKey}
				onClick={handleSidebarClose}
			>
				{label}
			</Nav.Item>
		);
	}
);

export default RegionSidebarMenuItem;
