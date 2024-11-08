import { Nav } from "rsuite";

const SidebarMenu = () => {
  return (
    <Nav className="!w-full" vertical style={{ width: 100 }}>
      <Nav.Item eventKey="home">Home</Nav.Item>
      <Nav.Item eventKey="news">Posts</Nav.Item>
      <Nav.Item eventKey="products">Contacts</Nav.Item>
      <Nav.Item eventKey="solutions">Author</Nav.Item>
    </Nav>
  );
};

export default SidebarMenu;
