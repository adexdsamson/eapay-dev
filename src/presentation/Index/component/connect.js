/* eslint-disable react/jsx-no-target-blank */
import { Col, Row, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import Subscribe from '../../../components/floatingInput';

const ConnectWithUs = ({ title, body, src, alt, inputValue, onChange }) => {
  return (
    <div id="section" className="">
      <Row className="align-items-center">
        <Col lg={6} md={6} sm={12}>
          <Fade left>
            <h2 className="connect-title text-white">{title}</h2>
            <p className="connect-paragraph text-second-white "> {body} </p>
          </Fade>
        </Col>
        <Col lg={6} md={6} sm={12} className="text-right">
          <Fade right>
            {/* <Button variant='primary-eapay'> Get Notified When We Launch</Button> */}
            <Subscribe />
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default ConnectWithUs;
