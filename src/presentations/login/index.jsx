import { Container, Row, Col } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import { Logo } from "../../Assets";
import Sidebar from "../../parts/sidebar/authSidebar";
import FloatingLabel from "../../components/floatingLabel";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
import { REGISTER_ROUTE, RESET_ROUTE } from "../../routes";
import MediaQuery from "../../hooks/useMediaQuery";
import { validateNumEmail } from "../../utils/formVaidation";
import Loader from "../../components/loader";
import Notification from "../../components/notification";
import { Typography, Button } from "@material-ui/core";

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
          <Col md={12} lg={7}>
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
                    <Typography
                      variant="subtitle2"
                      className={`mb-4 ${isMobile ? "text-center" : ""}`}
                    >
                      Welcome back, let start today’s business
                    </Typography>
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
                          variant="contained"
                          color='primary'
                          className="w-100"
                          type='submit'
                        >
                          Login
                        </Button>
                      </Col>
                      <Col className="mt-lg-0 mt-4 auth-links">
                        <Link to={REGISTER_ROUTE}>
                          <Typography color='primary' variant="subtitle2">
                            <span className="text-dark">
                              I don’t have an account?{"   "}
                            </span>
                            Register
                          </Typography>
                        </Link>
                      </Col>
                    </Row>
                    <div className="mt-3">
                      <Link to={RESET_ROUTE}>
                        <Typography color="primary" variant="caption">
                          Forgot password
                        </Typography>
                      </Link>
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
