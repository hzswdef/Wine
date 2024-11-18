import { PropsWithChildren } from "react";
import { Message } from "rsuite";

const ErrorMessage = ({ children }: PropsWithChildren) => (
	<Message type="error" showIcon>
		{children}
	</Message>
);

export default ErrorMessage;
