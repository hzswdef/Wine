import PageBase from "@components/pages/PageBase/PageBase";
import useTitle from "@hooks/useTitle";
import { useEffect } from "react";

const PageHome = () => {
	const updateTitle = useTitle();

	useEffect(() => {
		updateTitle("Home");
	}, [updateTitle]);

	return (
		<PageBase page="home" title="PageHome">
			PageHome
		</PageBase>
	);
};

export default PageHome;
