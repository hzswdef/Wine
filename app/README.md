# Storybook

Before you start making your custom components, check the specific things for this project below.

### Components

For the components that use a React context, you have to modify the story configuration.
To make the component work properly, you must include the `BasicRouter` decorator.
The example:

#### `Component.stories.tsx`

```tsx
import { Meta, StoryObj } from "@storybook/react";
import BasicRouter from "@storybook-local/decorators/BasicRouter/BasicRouter";

export default {
  title: "Atoms/Component",
  component: Component,
  // "BasicRouter" decorator.
  decorators: [BasicRouter]
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Example: Story = {};
```

### Pages

The **Page** requires a slightly different story configuration.
It is recommended that the following example be used as a template.
In other words, you must specify the `parameters` and `decorators` story properties
to include the `AppRouter` to consume the `<Outlet />` from the `react-router-dom` module,
otherwise, the pages will display not properly or the error will appear.

#### `Page.stories.tsx`

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
