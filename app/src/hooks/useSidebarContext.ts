import SidebarContext, {
	SidebarContextInterface
} from "@contexts/SidebarContext/SidebarContext";
import { useContext } from "react";

const useSidebarContext = (): SidebarContextInterface => {
	return useContext<SidebarContextInterface>(SidebarContext);
};

export default useSidebarContext;
