import {
	ControllerRenderProps,
	FieldError,
	FieldValues,
	Path
} from "react-hook-form";
import { Form, InputGroup, SelectPicker } from "rsuite";
import { ItemDataType } from "rsuite/CascadeTree";
import { SelectPickerProps } from "rsuite/SelectPicker";

interface FormSelectPickerFieldProps<TFieldValues extends FieldValues>
	extends SelectPickerProps {
	data: ItemDataType[];
	field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
	error?: FieldError | undefined;
}

function FormSelectPickerField<TFieldValues extends FieldValues>({
	data,
	field,
	error,
	...fieldProps
}: FormSelectPickerFieldProps<TFieldValues>) {
	return (
		<InputGroup className="!w-full">
			<SelectPicker
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

export default FormSelectPickerField;
