import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import { useClientWidth } from "../hooks";

const navBarConfig = {
  landing: "Landing",
  shoes: "Shoes",
  accessories: "Accessories",
  paintings: "Paintings",
  support: "Support",
  aboutUs: "About Us",
};

export default function NavBar() {
  const width = useClientWidth();
  const renderResponsiveNavBar = () => {
    if (width > 576) {
      return (
        <Nav>
          <Nav.Item>
            <Nav.Link href="/landing">{navBarConfig.landing}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/shoes">{navBarConfig.shoes}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/accessories">{navBarConfig.accessories}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/paintings">{navBarConfig.paintings}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/support">{navBarConfig.support}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/aboutus">{navBarConfig.aboutUs}</Nav.Link>
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
          <Dropdown.Item href="/landing">{navBarConfig.landing}</Dropdown.Item>
          <Dropdown.Item href="/shoes">{navBarConfig.shoes}</Dropdown.Item>
          <Dropdown.Item href="/accessories">
            {navBarConfig.accessories}
          </Dropdown.Item>
          <Dropdown.Item href="/paintings">
            {navBarConfig.paintings}
          </Dropdown.Item>
          <Dropdown.Item href="/support">{navBarConfig.support}</Dropdown.Item>
          <Dropdown.Item href="/aboutus">{navBarConfig.aboutUs}</Dropdown.Item>
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
