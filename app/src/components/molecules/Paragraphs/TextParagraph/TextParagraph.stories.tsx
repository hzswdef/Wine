import TextParagraph from "@components/molecules/Paragraphs/TextParagraph/TextParagraph";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Molecules/Paragraphs/TextParagraph",
  component: TextParagraph
} as Meta<typeof TextParagraph>;

type Story = StoryObj<typeof TextParagraph>;

export const Example: Story = {
  args: {
    paragraph: {
      type: "Paragraph - Text",
      id: "68b31e69-50fc-4f10-85a8-d68c258fa2a9",
      drupal_internal__id: 14,
      status: true,
      created: "2024-11-08T06:12:53+00:00",
      parent_id: 2,
      anchor_title: "Understanding the Need for Context in React",
      body: {
        value:
          "<p>Let's look at a basic example in which we have a <code>ParentComponent</code> that holds some <code>count</code> state, and you need to pass that state down to a deeply nested <code>GrandchildComponent</code>. Here's the <code>ParentComponent</code> that holds the state and <code>setState</code> but not using them:</p>",
        format: "full_html",
        processed:
          "<p>Let's look at a basic example in which we have a <code>ParentComponent</code> that holds some <code>count</code> state, and you need to pass that state down to a deeply nested <code>GrandchildComponent</code>. Here's the <code>ParentComponent</code> that holds the state and <code>setState</code> but not using them:</p>"
      }
    }
  }
};
