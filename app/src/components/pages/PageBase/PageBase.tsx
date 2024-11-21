import { clsx } from "clsx";
import { PropsWithChildren, ReactNode, useMemo } from "react";
import { Heading } from "rsuite";

interface PageProps extends PropsWithChildren {
	page: string;
	title?: ReactNode;
	className?: string;
}

const PageBase = ({ children, page, title, className }: PageProps) => {
	const _className = useMemo(() => {
		if (className) {
			return clsx(`page-${page}`, className);
		} else {
			return `page-${page}`;
		}
	}, [page, className]);

	return (
		<div className={_className}>
			{title && (
				<Heading level={1} className="mb-8 font-bold xl:text-5xl">
					{title}
				</Heading>
			)}

			{children}
		</div>
	);
};

export default PageBase;
