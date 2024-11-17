import Content from "@components/regions/Content";
import Sidebar from "@components/regions/sidebar/Sidebar";
import { clsx } from "clsx";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";

const Base = () => {
	const classNames = useMemo(
		() => clsx("flex h-full w-full bg-custom-100", isMobile && "flex-col"),
		[]
	);

	return (
		<div className={classNames}>
			<Sidebar />
			<Content />
		</div>
	);
};

export default Base;
