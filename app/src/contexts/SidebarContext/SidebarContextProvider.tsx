import SidebarContext, {
	SidebarContextInterface
} from "@contexts/SidebarContext/SidebarContext";
import { PropsWithChildren, useCallback, useState } from "react";

const SidebarContextProvider = ({ children }: PropsWithChildren) => {
	const [sidebarIsOpened, setSidebarIsOpened] =
		useState<SidebarContextInterface["sidebarIsOpened"]>(false);

	const handleSidebarOpen = useCallback(() => {
		setSidebarIsOpened(true);
	}, []);

	const handleSidebarClose = useCallback(() => {
		setSidebarIsOpened(false);
	}, []);

	const context: SidebarContextInterface = {
		sidebarIsOpened: sidebarIsOpened,
		setSidebarIsOpened: setSidebarIsOpened,
		handleSidebarOpen: handleSidebarOpen,
		handleSidebarClose: handleSidebarClose
	};

	return (
		<SidebarContext.Provider value={context}>
			{children}
		</SidebarContext.Provider>
	);
};

export default SidebarContextProvider;
