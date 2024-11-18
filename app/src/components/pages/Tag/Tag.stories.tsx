import Tag from "@components/pages/Tag/Tag";
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
	component: Tag,
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
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Example: Story = {
	args: {
		tag: "React",
		page: 1
	}
};
