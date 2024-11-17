import "../src/index.scss";

import type { Preview } from "@storybook/react";
import { CustomProvider } from "rsuite";
import {
  reactRouterParameters,
  withRouter
} from "storybook-addon-remix-react-router";

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    reactRouter: reactRouterParameters({
      location: {
        path: "/"
      }
    }),
    backgrounds: {
      default: "dark"
    }
  },
  decorators: [
    withRouter,
    Story => (
      <CustomProvider theme="dark">
        <Story />
      </CustomProvider>
    )
  ]
};

export default preview;
