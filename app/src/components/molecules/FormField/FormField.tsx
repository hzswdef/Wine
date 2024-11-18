import { memo, ReactNode } from "react";
import { Form } from "rsuite";

interface FormFieldProps {
	name: string;
	controller: ReactNode;
	wrapperClassName?: string;
}

const FormField = memo(
	({ name, controller, wrapperClassName }: FormFieldProps) => (
		<Form.Group className={wrapperClassName} controlId={name}>
			{controller}
		</Form.Group>
	)
);

export default FormField;
