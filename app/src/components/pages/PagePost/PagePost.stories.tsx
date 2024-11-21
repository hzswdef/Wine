import PagePost from "@components/pages/PagePost/PagePost";
import Layout from "@components/templates/Layout/Layout";
import { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PostPageRouter = (Story: StoryFn, context: StoryContext) => {
	const { id } = context.args;

	return (
		<Router>
			<Routes location={`/post/${id}`}>
				<Route element={<Layout />}>
					<Route path="/post/:id" element={<Story />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default {
	title: "Pages/Post",
	component: PagePost,
	argTypes: {
		id: {
			control: "select",
			options: ["React Context API"],
			mapping: {
				"React Context API": "4b493065-6578-46e0-9dc6-e4ed51acddaf"
			}
		}
	},
	parameters: {
		layout: "fullscreen"
	},
	decorators: [PostPageRouter]
} as Meta<typeof PagePost>;

type Story = StoryObj<typeof PagePost>;

export const Example: Story = {
	args: {
		id: "React Context API"
	}
};
