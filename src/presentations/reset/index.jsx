import { Container, Row, Col } from "react-bootstrap";
import { Logo } from '../../Assets'; 
import Sidebar from "../../components/sidebar/authSidebar";
import FloatingLabel from "../../components/floatingLabel";
import { Slide } from "react-reveal";
import MediaQuery from "../../hooks/useMediaQuery";
import Button from "../../components/button";

const RegisterPresentation = () => {
  const isMobile = MediaQuery("down", "md");
  return (
    <div className="login-top-container">
      <Row className="h-100">
        {isMobile ? null : (
          <Col md={4}>
            <Sidebar />
          </Col>
        )}
        <Col md={12} lg={8}>
          <Container className="d-flex flex-column justify-content-center h-100 ">
            <Slide right>
              <form>
                <div className={`container-div ${isMobile ? 'w-100 text-center' : 'w-75'} mx-auto`}>
                 {isMobile ? <img src={Logo} alt="logo" className='mb-4' /> : null }
                  <h5 className={`mb-4 ${isMobile ? 'text-center' : ''}`}>
                  Enter your account email address or phone number to reset your password
                  </h5>
                  <FloatingLabel
                    name="email"
                    label="Email or Phone"
                    meta={{ visited: false }}
                  />
                  <Row className="mt-3 align-items-center">
                    <Col md={5}>
                      <Button
                        variant="primary"
                        className="w-100"
                        label="Reset"
                      />
                    </Col>
                    <Col className='mt-lg-0 mt-4'>
                    </Col>
                  </Row>
                </div>
              </form>
            </Slide>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPresentation;
