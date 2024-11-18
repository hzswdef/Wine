import { StoryFn } from "@storybook/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const BasicRouter = (Story: StoryFn) => (
	<Router>
		<Routes>
			<Route path="/*" element={<Story />} />
		</Routes>
	</Router>
);

export default BasicRouter;
