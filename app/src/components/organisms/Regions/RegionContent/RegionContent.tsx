import { clsx } from "clsx";
import { Outlet } from "react-router-dom";

const RegionContent = () => (
	<div className="region-content relative flex-1 overflow-y-auto p-6 sm:p-8">
		<div
			className={clsx(
				"content-container w-full pb-16",
				"xl:absolute xl:ml-[50%] xl:max-w-[800px] xl:-translate-x-[calc(50%+8rem)]"
			)}
		>
			<Outlet />
		</div>
	</div>
);

export default RegionContent;
