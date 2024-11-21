import AnimationContentBlur from "@components/atoms/Animations/AnimationContentBlur/AnimationContentBlur";
import CKEditorTagCode from "@components/atoms/CKEditorTags/CKEditorTagCode/CKEditorTagCode";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Atoms/Animations/AnimationContentBlur",
	component: AnimationContentBlur
} as Meta<typeof AnimationContentBlur>;

type Story = StoryObj<typeof AnimationContentBlur>;

export const Example: Story = {
	args: {
		stateIn: true,
		children: (
			<>
				<p className="mb-8">
					Change the <CKEditorTagCode>stateIn</CKEditorTagCode> prop with
					Storybook control to see the thing.
				</p>
			</>
		)
	}
};
