import { memo } from "react";
import { Link } from "react-router-dom";
import { Nav } from "rsuite";

const SidebarMenu = memo(() => (
	<Nav vertical>
		<Nav.Item as={Link} to="/" eventKey="home">
			Home
		</Nav.Item>
		<Nav.Item as={Link} to="/posts" eventKey="posts">
			Posts
		</Nav.Item>
		<Nav.Item as={Link} to="/tags" eventKey="tags">
			Tags
		</Nav.Item>
		<Nav.Item as={Link} to="/contacts" eventKey="contacts">
			Contacts
		</Nav.Item>
		<Nav.Item as={Link} to="/author" eventKey="author">
			Author
		</Nav.Item>
	</Nav>
));

export default SidebarMenu;
