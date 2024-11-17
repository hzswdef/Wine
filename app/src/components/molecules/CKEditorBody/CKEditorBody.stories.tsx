import CKEditorBody from "@components/molecules/CKEditorBody/CKEditorBody";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Molecules/CKEditorBody",
	component: CKEditorBody
} as Meta<typeof CKEditorBody>;

type Story = StoryObj<typeof CKEditorBody>;

export const Example: Story = {
	args: {
		body:
			"<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. " +
			"<em>Lorem Ipsum</em> has been the <s>industry's standard</s> dummy text ever since the 1500s, when an " +
			"<sup>unknown</sup> printer <sub>took</sub> a galley of type and " +
			'<a href="https://wine.ddev.site/">scrambled it to make</a> a type specimen book. ' +
			"It has survived not only five centuries, but also the leap into electronic typesetting, " +
			"remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets " +
			"containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker " +
			"including versions of Lorem Ipsum. " +
			"</p><hr><blockquote><p>Block quote</p></blockquote>" +
			"<ul><li>List 1</li><li>List 2</li><li>List 3</li></ul>" +
			"<ol><li>List 1</li><li>List 2</li><li>List 3</li></ol>" +
			"<h1>Heading 1</h1><h2>Heading 2</h2><h3>heading 3</h3>" +
			"<h4>heading 4</h4><h5>heading 5</h5><p><strong>heading 6</strong></p>"
	}
};
