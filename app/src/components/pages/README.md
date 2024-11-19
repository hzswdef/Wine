## Pages

The **Page** requires a slightly different story configuration.
It is recommended that the following example be used as a template.
In other words, you must specify the `parameters` and `decorators` story properties
to include the `AppRouter` to consume the `<Outlet />` from the `react-router-dom` module,
otherwise, the pages will display not properly or the error will appear.

### `Page.stories.tsx`

```tsx
import { Meta, StoryObj } from "@storybook/react";
import AppRouter from "@storybook-local/decorators/AppRouter/AppRouter";

export default {
  title: "Pages/Page",
  component: Page,
  parameters: {
    layout: "fullscreen"
  },
  decorators: [AppRouter]
} as Meta<typeof Page>;

type Story = StoryObj<typeof Page>;

export const Example: Story = {};
```
