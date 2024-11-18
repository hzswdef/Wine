import {
	ControllerRenderProps,
	FieldError,
	FieldValues,
	Path
} from "react-hook-form";
import { Form, InputGroup, InputPicker, InputPickerProps } from "rsuite";
import { InputItemDataType } from "rsuite/InputPicker";

interface FormFieldInputFieldProps<TFieldValues extends FieldValues>
	extends InputPickerProps {
	data: InputItemDataType<string | number>[];
	field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
	error?: FieldError | undefined;
}

function FormSelectField<TFieldValues extends FieldValues>({
	data,
	field,
	error,
	...fieldProps
}: FormFieldInputFieldProps<TFieldValues>) {
	return (
		<InputGroup className="!w-full">
			<InputPicker
				className="w-full"
				data={data}
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

export default FormSelectField;
