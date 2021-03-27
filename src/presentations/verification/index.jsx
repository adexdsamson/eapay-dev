import { Container, Row, Col } from "react-bootstrap";
import { Logo } from "../../Assets";
import { reduxForm, Field } from "redux-form";
import Sidebar from "../../parts/sidebar/authSidebar";
import FloatingLabel from "../../components/floatingLabel";
import { Slide } from "react-reveal";
import MediaQuery from "../../hooks/useMediaQuery";
import Button from "../../components/button";
import Notification from "../../components/notification";
import Loader from "../../components/loader";

const VerificationPresentation = ({
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
                      A verification code is sent to either your email address
                      or phone number
                    </h5>
                    <Field
                      name="email"
                      type="text"
                      label="Verification"
                      component={FloatingLabel}
                    />
                    <Row className="mt-3 align-items-center">
                      <Col md={5}>
                        <Button
                          variant="primary"
                          className="w-100"
                          label="Verify"
                        />
                      </Col>
                      <Col className="mt-lg-0 mt-4"></Col>
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

export default reduxForm({ form: "verify" })(VerificationPresentation);
