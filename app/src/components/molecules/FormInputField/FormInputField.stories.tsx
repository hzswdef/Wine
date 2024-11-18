import FormField from "@components/molecules/FormField/FormField";
import FormInputField from "@components/molecules/FormInputField/FormInputField";
import { Meta } from "@storybook/react";
import { Controller, FieldError, useForm } from "react-hook-form";

export default {
	title: "Molecules/FormInputField",
	component: FormInputField
} as Meta<typeof FormInputField>;

interface FormData {
	query: string;
}

export const Example = () => {
	const { control, watch } = useForm<FormData>({
		defaultValues: {
			query: ""
		}
	});

	let error: FieldError | undefined = undefined;

	const queryWatch = watch("query");

	if (queryWatch === "error") {
		error = {
			type: "required",
			message: "Error example"
		};
	}

	return (
		<>
			<div className="mb-1">Value: {queryWatch}</div>

			<div className="mb-8">
				<small>
					Type <code>error</code> to get an error message example.
				</small>
			</div>

			<FormField
				name="query"
				controller={
					<Controller
						name="query"
						control={control}
						render={({ field }) => (
							<FormInputField<FormData>
								field={field}
								error={error}
								placeholder="Query"
							/>
						)}
					/>
				}
			/>
		</>
	);
};
