import { Navbar, Nav, Button } from "react-bootstrap";
import { Logo } from "../../assets";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#">About Eapay</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button disabled variant="outline-primary-eapay">Coming Soon</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
