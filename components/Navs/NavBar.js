import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import { useClientWidth } from "../hooks";
export default function NavBar() {
  const width = useClientWidth();
  const renderResponsiveNavBar = () => {
    if (width > 576) {
      return (
        <Nav>
          <Nav.Item>
            <Nav.Link href="/landing">Landing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/shoes">Shoes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/accessories">Accessories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/paintings">Paintings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/support">Support</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav.Item>
        </Nav>
      );
    }
    if (width <= 576) {
      return (
        <DropdownButton
          drop="down"
          variant="secondary"
          title="Menu"
          navbar="true"
          key="up"
        >
          <Dropdown.Item href="/landing">Landing</Dropdown.Item>
          <Dropdown.Item href="/shoes">Shoes</Dropdown.Item>
          <Dropdown.Item href="/accessories">Accessories</Dropdown.Item>
          <Dropdown.Item href="/paintings">Paintings</Dropdown.Item>
          <Dropdown.Item href="/support">Support</Dropdown.Item>
          <Dropdown.Item href="/aboutus">About Us</Dropdown.Item>
        </DropdownButton>
      );
    }
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      className="justify-content-center"
    >
      {renderResponsiveNavBar()}
    </Navbar>
  );
}
