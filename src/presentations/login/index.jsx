import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { reduxForm, Field } from "redux-form";
import { Logo } from "../../Assets";
import Sidebar from "../../parts/sidebar/authSidebar";
import FloatingLabel from "../../components/floatingLabel";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
import { REGISTER_ROUTE, RESET_ROUTE } from "../../routes";
import MediaQuery from "../../hooks/useMediaQuery";
import Button from "../../components/button";
import { validateNumEmail } from '../../utils/formVaidation'; 
import Loader from "../../components/loader";
import Notification from "../../components/notification";

const LoginPresentation = ({
  handleSubmit,
  loading,
  notify,
  onNotificationCancel,
}) => {
  const isMobile = MediaQuery("down", "md");
  return (
    <div className="login-top-container">
      <Notification
        content={notify}
        onCancel={onNotificationCancel}
        notify={notify}
      />
      {loading ? (
        <Loader />
      ) : (
        <Row className="h-100">
          {isMobile ? null : (
            <Col md={4}>
              <Sidebar />
            </Col>
          )}
          <Col md={12} lg={8}>
            <Container className="d-flex flex-column justify-content-center h-100 ">
              <Slide right>
                <form onSubmit={handleSubmit}>
                  <div
                    className={`container-div ${
                      isMobile ? "w-100 text-center" : "w-75"
                    } mx-auto`}
                  >
                    {isMobile ? (
                      <img src={Logo} alt="logo" className="mb-4" />
                    ) : null}
                    <h5 className={`mb-4 ${isMobile ? "text-center welcome-message" : ""}`}>
                      Welcome back, let start today’s business
                    </h5>
                    <Field
                      name="email"
                      type="text"
                      label="Email address or Phone number"
                      validate={validateNumEmail}
                      component={FloatingLabel}
                    />
                    <Field
                      name="password"
                      label="Password"
                      type="password"
                      className="mt-4"
                      component={FloatingLabel}
                    />
                    <Row className="mt-3 align-items-center">
                      <Col md={5}>
                        <Button
                          variant="primary"
                          className="w-100"
                          label="Login"
                        />
                      </Col>
                      <Col className="mt-lg-0 mt-4 auth-links">
                        <Link to={REGISTER_ROUTE}>
                          <span className="text-dark">
                            I don’t have an account?{"   "}
                          </span>
                          Register
                        </Link>
                      </Col>
                    </Row>
                    <div className="mt-3 auth-links">
                      <Link to={RESET_ROUTE}>Forgot password</Link>
                    </div>
                  </div>
                </form>
              </Slide>
            </Container>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default reduxForm({ form: "login" })(LoginPresentation);
