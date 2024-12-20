import FormField from "@components/molecules/FormField/FormField";
import FormInputPickerField from "@components/molecules/FormInputPickerField/FormInputPickerField";
import { Meta } from "@storybook/react";
import { Controller, FieldError, useForm } from "react-hook-form";

export default {
	title: "Molecules/FormInputPickerField",
	component: FormInputPickerField
} as Meta<typeof FormInputPickerField>;

interface FormData {
	option: string | null;
}

const exampleSelectOptions = [
	{
		label: "Frontend",
		value: "frontend"
	},
	{
		label: "Backend",
		value: "backend"
	},
	{
		label: "Drupal",
		value: "drupal"
	},
	{
		label: "React",
		value: "react"
	},
	{
		label: "Vue",
		value: "vue"
	},
	{
		label: "Option with Error",
		value: "error"
	}
];

export const Example = () => {
	const { control, watch } = useForm<FormData>({
		defaultValues: {
			option: exampleSelectOptions[0].value
		}
	});

	let error: FieldError | undefined = undefined;

	const watchOption = watch("option");

	if (watchOption === "error") {
		error = {
			type: "required",
			message: "Error example"
		};
	}

	return (
		<>
			<div className="mb-8">
				Value: <code>{watchOption}</code>
			</div>

			<FormField
				name="option"
				controller={
					<Controller
						name="option"
						control={control}
						render={({ field }) => (
							<FormInputPickerField<FormData>
								data={exampleSelectOptions}
								field={field}
								placeholder="Options"
								error={error}
							/>
						)}
					/>
				}
			/>
		</>
	);
};
