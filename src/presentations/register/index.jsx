import { Container, Row, Col } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import { Logo } from "../../Assets";
import Sidebar from "../../parts/sidebar/authSidebar";
import FloatingLabel from "../../components/floatingLabel";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
import MediaQuery from "../../hooks/useMediaQuery";
import Button from "../../components/button";
import { LOGIN_ROUTE } from "../../routes";
import Loader from "../../components/loader";
import Notification from "../../components/notification";

const RegisterPresentation = ({
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
                    <h5 className={`mb-4 ${isMobile ? "text-center" : ""}`}>
                      Welcome to Eapay, let’s build your business together
                    </h5>
                    <Field
                      name="email"
                      type="text"
                      label="Email or Phone"
                      component={FloatingLabel}
                    />
                    <Field
                      name="password"
                      label="Password"
                      type="password"
                      inputContainerClassName="mt-4"
                      component={FloatingLabel}
                    />
                    <Row className="mt-3 align-items-center">
                      <Col md={5}>
                        <Button
                          variant="primary"
                          className="w-100"
                          label="Register"
                        />
                      </Col>
                      <Col className="mt-lg-0 mt-4">
                        <Link to={LOGIN_ROUTE}>
                          <span className="text-dark">
                            Aleady have an account?{"   "}
                          </span>
                          click here
                        </Link>
                      </Col>
                    </Row>
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

export default reduxForm({ form: "register" })(RegisterPresentation);
