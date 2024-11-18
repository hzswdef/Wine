import Layout from "@components/templates/Layout/Layout";
import { StoryFn } from "@storybook/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = (Story: StoryFn) => (
	<Router>
		<Routes>
			<Route element={<Layout />}>
				<Route path="/*" element={<Story />} />
			</Route>
		</Routes>
	</Router>
);

export default AppRouter;
