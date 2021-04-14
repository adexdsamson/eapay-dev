import { Navbar, Nav, Button } from "react-bootstrap";
import { Logo } from "../../Assets";
import {withRouter} from 'react-router-dom'

const Navigation = ({ location }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Navbar.Brand href="/">
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
        <Nav activeKey={location.pathname}>
          <Nav.Item>
            <Nav.Link href="/about">About Eapay</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button disabled variant="outline-primary-eapay">Coming Soon</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
