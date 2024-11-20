import PageTag from "@components/pages/PageTag/PageTag";
import Layout from "@components/templates/Layout/Layout";
import { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const TagPageRouter = (Story: StoryFn, context: StoryContext) => {
	const { tag, page } = context.args;

	let path = "/tag";

	if (tag) {
		path += `/${tag}`;
	}

	if (page) {
		path += `/${page}`;
	}

	console.log(tag, page);

	return (
		<Router>
			<Routes location={path}>
				<Route element={<Layout />}>
					<Route path="/tag/:tag/:page?" element={<Story />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default {
	title: "Pages/Tag",
	component: PageTag,
	argTypes: {
		tag: {
			type: "string",
			control: "select",
			options: [
				"Drupal",
				"Frontend",
				"Backend",
				"React",
				"React State Management"
			]
		},
		page: {
			type: "number",
			control: "number"
		}
	},
	parameters: {
		layout: "fullscreen"
	},
	decorators: [TagPageRouter]
} as Meta<typeof PageTag>;

type Story = StoryObj<typeof PageTag>;

export const Example: Story = {
	args: {
		tag: "React",
		page: 1
	}
};
