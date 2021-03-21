import { Col, Row, Button } from "react-bootstrap";
import Input from "../../../components/floatingInput";
import { Fade } from "react-reveal";

const ConnectWithUs = ({ title, body, src, alt }) => {
  return (
    <section id='section' className="">
      <Row className="align-items-center">
        <Col lg={6} md={6} sm={12}>
          <Fade left>
            <h4 className="connect-title text-white">{title}</h4>
            <p className="connect-paragraph text-second-white "> {body} </p>
          </Fade>
        </Col>
        <Col lg={6} md={6} sm={12} className="text-right">
          <Fade right>
            <Input label="Email Address" name="email" type="email" />
            <Button
              className="rounded text-capitalize mt-3"
              variant="primary-eapay"
            >
              subscribe
            </Button>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default ConnectWithUs;
