import { createContext } from "react";

export interface SidebarContextInterface {
	sidebarIsOpened: boolean;
	setSidebarIsOpened: (state: boolean) => void;
	handleSidebarOpen: () => void;
	handleSidebarClose: () => void;
}

const SidebarContext = createContext<SidebarContextInterface>({
	sidebarIsOpened: false,
	setSidebarIsOpened: () => {},
	handleSidebarOpen: () => {},
	handleSidebarClose: () => {}
});

export default SidebarContext;
