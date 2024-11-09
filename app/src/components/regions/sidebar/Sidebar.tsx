import SidebarFooter from "@components/regions/sidebar/SidebarFooter";
import SidebarHeader from "@components/regions/sidebar/SidebarHeader";
import SidebarMenu from "@components/regions/sidebar/SidebarMenu";
import SidebarSearch from "@components/regions/sidebar/SidebarSearch";
import CloseIcon from "@rsuite/icons/Close";
import MenuIcon from "@rsuite/icons/Menu";
import { clsx } from "clsx";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Button, Divider } from "rsuite";

const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);
  const classNames = clsx(
    "sidebar h-full flex flex-col gap-3 basis-64 bg-custom-400 p-4",
    isMobile && (show ? "h-screen absolute z-10 w-full" : "hidden"),
  );

  return (
    <>
      {isMobile && (
        <div className="mobile flex items-center justify-between p-4">
          <SidebarHeader />

          <Button
            className="p-2"
            appearance="link"
            onClick={() => setShow(true)}
          >
            <MenuIcon className="h-8 w-8" />
          </Button>
        </div>
      )}

      <div className={classNames}>
        {isMobile && show && (
          <Button
            className="absolute right-4 top-4 bg-transparent p-2"
            onClick={() => setShow(false)}
          >
            <CloseIcon className="h-8 w-8" />
          </Button>
        )}

        <SidebarHeader />
        <Divider />
        <SidebarSearch />
        <SidebarMenu />
        <SidebarFooter />
      </div>
    </>
  );
};

export default Sidebar;
