import {
	ControllerRenderProps,
	FieldError,
	FieldValues,
	Path
} from "react-hook-form";
import { Form, Input, InputGroup, InputProps } from "rsuite";

interface FormFieldInputFieldProps<TFieldValues extends FieldValues>
	extends InputProps {
	field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
	error?: FieldError | undefined;
}

function FormInputField<TFieldValues extends FieldValues>({
	field,
	error,
	...fieldProps
}: FormFieldInputFieldProps<TFieldValues>) {
	return (
		<InputGroup className="!w-full">
			<Input
				className="w-full"
				id={field.name}
				value={field.value ?? ""}
				onChange={value => field.onChange(value)}
				{...fieldProps}
			/>

			{!!error && error?.message && (
				<Form.ErrorMessage show={!!error} placement="bottomStart">
					{error.message}
				</Form.ErrorMessage>
			)}
		</InputGroup>
	);
}

export default FormInputField;
