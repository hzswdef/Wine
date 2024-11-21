import usePostContext from "@hooks/usePostContext";
import { clsx } from "clsx";
import { memo } from "react";

const PagePostAnchors = memo(() => {
	const { anchors } = usePostContext();

	if (Object.keys(anchors).length === 0) {
		return <></>;
	}

	return (
		<div
			className={clsx(
				"anchors sticky right-0 top-0 z-10 ml-[calc(100%+1.5rem)]",
				"hidden h-0 w-0 translate-x-full 2xl:block"
			)}
		>
			<div className="anchors-title text-xl font-bold">Content</div>

			<div className="anchors-items mt-2">
				{Object.entries(anchors).length !== 0 &&
					Object.entries(anchors).map(([paragraphId, anchor]) => (
						<div
							key={paragraphId}
							className="cursor-pointer text-nowrap py-0.5"
							onClick={() => anchor.onClick()}
						>
							{anchor.title}
						</div>
					))}
			</div>
		</div>
	);
});

export default PagePostAnchors;
