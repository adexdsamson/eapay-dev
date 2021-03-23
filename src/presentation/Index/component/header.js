/* eslint-disable react/jsx-no-target-blank */
import { Col, Row } from "react-bootstrap";
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

const IndexPage = () => {
  return (
    <header id="home" className="pt-3">
      <Navbar />
      <Row className="d-flex h-90 align-items-center">
        <Col md={6}>
          <Fade left>
            <div className="mb-3">
              <Badge label="Coming soon" />
            </div>
            <h1 className="header-title">More in one payment platform</h1>
            <p className="header-paragraph">
              Help vendors and customers experience seamless transactions; get
              payment in more ways, easy delivery and tax audit.
            </p>
            <Input />
          </Fade>
        </Col>
        <Col md={6} className="d-none d-sm-block d-md-block">
          <Zoom>
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              className="img-fluid circle1"
              src={circle1}
              alt="woman thinking"
            />
            <img
              className="img-fluid circle2"
              src={circle2}
              alt="woman with bag"
            />
            <img className="img-fluid circle3" src={circle3} alt="black dot" />
            <img
              className="img-fluid circle6"
              src={circle6}
              alt="small black dot"
            />
            <img
              className="img-fluid circle4"
              src={circle4}
              alt="small white dot"
            />
            <img
              className="img-fluid circle5"
              src={circle5}
              alt="large white dot"
            />
          </Zoom>
        </Col>
      </Row>
    </header>
  );
};

export default IndexPage;
