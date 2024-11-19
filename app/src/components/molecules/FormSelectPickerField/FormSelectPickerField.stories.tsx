import FormField from "@components/molecules/FormField/FormField";
import FormSelectPickerField from "@components/molecules/FormSelectPickerField/FormSelectPickerField";
import { Meta } from "@storybook/react";
import { Controller, FieldError, useForm } from "react-hook-form";

export default {
	title: "Molecules/FormSelectPickerField",
	component: FormSelectPickerField
} as Meta<typeof FormSelectPickerField>;

interface FormData {
	option: string;
}

const exampleSelectOptions = [
	{
		label: "Title ASC",
		value: "title"
	},
	{
		label: "Title DESC",
		value: "-title"
	},
	{
		label: "Recent",
		value: "-changed"
	},
	{
		label: "Oldest",
		value: "created"
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
							<FormSelectPickerField<FormData>
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
