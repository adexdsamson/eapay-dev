/* eslint-disable react/jsx-no-target-blank */
import { Col, Row } from "react-bootstrap";
import {
  circle1,
} from "../../../Assets";
import Navbar from "../../../components/navbar";
import Badge from "../../../components/comingSoon";
import Input from "../../../components/floatingInput";
import { Fade, Zoom } from "react-reveal";
import { Typography } from "@material-ui/core";
import { useMediaQueries } from "../../../HOC/useMediaQuery";
import Card from "../../../components/card";

const IndexPage = () => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <header id="home" className="pt-3">
      <Navbar />
      <Row className="d-flex h-90 align-items-center">
        <Col md={6}>
          <Fade left>
            <div className="mb-3">
              <Badge label="Coming soon" />
            </div>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              className="text-capitalize mb-2"
            >
              More in one payment platform
            </Typography>
            <Typography variant="body1" className="">
              Help vendors and customers experience seamless transactions; get
              payment in more ways, easy delivery and tax audit.
            </Typography>
            <Input />
          </Fade>
        </Col>
        <Col md={6} className="d-none d-sm-block d-md-block">
          <Zoom>
          <Card src={circle1} />
          </Zoom>
        </Col>
      </Row>
    </header>
  );
};

export default IndexPage;
