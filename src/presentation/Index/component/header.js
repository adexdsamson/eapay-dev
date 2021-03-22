import { Col, Row, Button } from "react-bootstrap";
import {
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  circle6,
} from "../../../assets";
import Navbar from "../../../components/navbar";
import Badge from "../../../components/comingSoon";
import Input from "../../../components/floatingInput";
import { Fade, Zoom } from "react-reveal";

const IndexPage = ({ inputValue, onChange }) => {
  return (
    <header className="pt-3">
      <Navbar />
      <Row className="d-flex h-90 align-items-center">
        <Col md={6}>
          <Fade left>
            <div data-aos="fade-up">
              <div className="mb-3">
                <Badge label="Coming soon" />
              </div>
              <h2 className="header-title">More in one payment platform</h2>
              <p className="header-paragraph">
                Help vendors and customers experience seamless transactions; get
                payment in more ways, easy delivery and tax audit.
              </p>
              <Input
                label="Email Address"
                name="email"
                type="email"
                inputContainerClassName="header-input mb-3 "
                value={inputValue}
                onChange={onChange}
              />
              <Button
                className="rounded text-capitalize"
                variant="primary-eapay"
              >
                Get notified when we launch
              </Button>
              <div className="header-notification mt-2">
                <span>*Don’t worry we will not spam you</span>
              </div>
            </div>
          </Fade>
        </Col>
        <Col md={6} className="d-none d-sm-block d-md-block">
          <Zoom>
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              className="img-fluid circle1"
              src={circle1}
              alt="women"
            />
            <img className="img-fluid circle2" src={circle2} alt="women" />
            <img className="img-fluid circle3" src={circle3} alt="women" />
            <img className="img-fluid circle6" src={circle6} alt="women" />
            <img className="img-fluid circle4" src={circle4} alt="women" />
            <img className="img-fluid circle5" src={circle5} alt="women" />
          </Zoom>
        </Col>
      </Row>
    </header>
  );
};

export default IndexPage;
