import { StoryFn } from "@storybook/react";
import { CustomProvider } from "rsuite";

const RSuiteProviderDecorator = (Story: StoryFn) => (
	<CustomProvider theme="dark">
		<Story />
	</CustomProvider>
);

export default RSuiteProviderDecorator;
