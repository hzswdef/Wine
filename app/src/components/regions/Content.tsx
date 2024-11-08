import { clsx } from "clsx";
import { Outlet } from "react-router-dom";

const Content = () => (
  <div className="region-content relative flex-1 overflow-y-auto p-8">
    <div
      className={clsx(
        "content-container w-full",
        "xl:absolute xl:ml-[50%] xl:max-w-[800px] xl:-translate-x-[calc(50%+8rem)]",
      )}
    >
      <Outlet />
    </div>
  </div>
);

export default Content;
