import { Col, Row, Button } from "react-bootstrap";
import Input from "../../../components/floatingInput";
import { Fade } from "react-reveal";

const ConnectWithUs = ({ title, body, src, alt, inputValue, onChange }) => {
  return (
    <div id='section' className="">
      <Row className="align-items-center">
        <Col lg={6} md={6} sm={12}>
          <Fade left>
            <h4 className="connect-title text-white">{title}</h4>
            <p className="connect-paragraph text-second-white "> {body} </p>
          </Fade>
        </Col>
        <Col lg={6} md={6} sm={12} className="text-right">
          <Fade right>
            <Input label="Email Address" name="email" type="email" inputValue={inputValue} onChange={onChange} />
            <Button
              className="rounded text-capitalize mt-3 pr-5 pl-5 pt-2 pb-2"
              variant="primary-eapay"
            >
              subscribe
            </Button>
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default ConnectWithUs;
