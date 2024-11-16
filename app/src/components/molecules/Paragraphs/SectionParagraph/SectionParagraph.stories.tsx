import SectionParagraph from "@components/molecules/Paragraphs/SectionParagraph/SectionParagraph";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Molecules/Paragraphs/SectionParagraph",
  component: SectionParagraph,
} as Meta<typeof SectionParagraph>;

type Story = StoryObj<typeof SectionParagraph>;

export const Example: Story = {
  args: {
    paragraph: {
      "type": "Paragraph - Section",
      "id": "bfb5501f-7828-4e99-b1a8-26b8b7dfbf1f",
      "drupal_internal__id": 9,
      "status": true,
      "created": "2024-11-07T08:20:12+00:00",
      "parent_id": 1,
      "anchor_title": "Paragraph - Section",
      "paragraphs": [
        {
          "type": "Paragraph - Code",
          "id": "a1041e9f-a295-4b6e-a61d-b6bc0c4314e0",
          "drupal_internal__id": 7,
          "status": true,
          "created": "2024-11-07T08:21:46+00:00",
          "parent_id": 8,
          "body": "import CKEditor from \"@components/ckeditor/CKEditor\";\r\nimport { TextParagraph as ITextParagraph } from \"@interfaces/post/paragraphs\";\r\n\r\ninterface TextParagraphProps {\r\n  paragraph: ITextParagraph;\r\n}\r\n\r\nconst TextParagraph = (props: TextParagraphProps) => {\r\n  const { paragraph } = props;\r\n\r\n  return (\r\n    <div className=\"text-paragraph my-6\">\r\n      <CKEditor body={paragraph.body.value} />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default TextParagraph;",
          "language": "typescript",
          "title": "src/components/Thing.tsx",
        },
        {
          "type": "Paragraph - Text",
          "id": "03f1567e-a88f-49f0-91e7-0a0303bc2c99",
          "drupal_internal__id": 6,
          "status": true,
          "created": "2024-11-07T08:20:59+00:00",
          "parent_id": 8,
          "anchor_title": "Paragraph - Text",
          "body": {
            "value": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
            "format": "full_html",
            "processed": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
          },
        },
        {
          "type": "Paragraph - Text",
          "id": "70fcb3bc-7c86-48fd-ada7-132c1743c648",
          "drupal_internal__id": 5,
          "status": true,
          "created": "2024-11-07T08:20:18+00:00",
          "parent_id": 9,
          "anchor_title": "Paragraph - Text",
          "body": {
            "value": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>",
            "format": "full_html",
            "processed": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>"
          },
        }
      ]
    }
  }
};
