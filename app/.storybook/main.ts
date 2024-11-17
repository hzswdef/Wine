import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-links",
		"storybook-addon-remix-react-router",
		"storybook-addon-sass-postcss"
	],
	framework: {
		name: "@storybook/react-vite",
		options: {}
	},
	docs: {
		autodocs: "tag"
	},
	core: {
		disableWhatsNewNotifications: true
	}
};

export default config;
