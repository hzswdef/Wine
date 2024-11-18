import "@/index.scss";
import "@storybook-local/styles/storybook.scss";

import { Preview } from "@storybook/react";
import RSuiteProviderDecorator from "@storybook-local/decorators/RSuiteProviderDecorator/RSuiteProviderDecorator";

export const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			default: "dark"
		}
	},
	decorators: [RSuiteProviderDecorator]
};

export default preview;
