import LogoImage from "@assets/images/logo.png";
import useSidebarContext from "@hooks/useSidebarContext";
import CloseIcon from "@rsuite/icons/Close";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "rsuite";

const RegionSidebarHeader = memo(() => {
	const { sidebarIsOpened, handleSidebarClose } = useSidebarContext();

	return (
		<div className="info flex items-center gap-3">
			<div className="logo">
				<Link to="/" replace>
					<img className="h-16 w-16" src={LogoImage} alt="Wine" />
				</Link>
			</div>

			<div className="text h-fit">
				<div className="site-name text-xl font-extrabold">
					<Link
						className="duration-250 transition-colors hover:text-blue-300"
						to="/"
						replace
					>
						Wine
					</Link>
				</div>

				<div className="additional-info text-xs font-medium">
					Web-Developer blog
				</div>
			</div>

			{sidebarIsOpened && (
				<Button
					className="ml-auto block bg-transparent p-2 md:hidden"
					onClick={handleSidebarClose}
				>
					<CloseIcon className="h-8 w-8" />
				</Button>
			)}
		</div>
	);
});

export default RegionSidebarHeader;
