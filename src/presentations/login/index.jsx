import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../../components/sidebar/authSidebar";
import FloatingLabel from "../../components/floatingLabel";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";

const LoginePresentation = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Row className="h-100">
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <Container className="d-flex flex-column justify-content-center h-100 ">
            <Slide right>
              <div className="w-75 mx-auto">
                <h5 className="mb-4 text-muted">
                  Welcome back, let start today’s business
                </h5>
                <FloatingLabel
                  name="email"
                  label="Email or Phone"
                  meta={{ visited: false }}
                />
                <FloatingLabel
                  name="password"
                  label="Password"
                  inputContainerClassName="mt-4"
                  meta={{ visited: false }}
                />
                <Button className="mt-3 w-50">Login</Button>
                <div className="mt-3 mb-3">
                  <Link to="/">
                    <span
                      style={{ cursor: "none", textDecoration: "none" }}
                      className="text-dark "
                    >
                      Don’t have an account? click{" "}
                    </span>
                    here
                  </Link>
                </div>
                <div>
                  <Link to="/">Forgot password</Link>
                </div>
              </div>
            </Slide>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default LoginePresentation;
