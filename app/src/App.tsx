import Router from "@routes/Router";
import { CustomProvider } from "rsuite";

const App = () => (
	<CustomProvider theme="dark">
		<Router />
	</CustomProvider>
);

export default App;
