import { Col, Row } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import { blackCircle } from "../Assets";
import Badge from "./comingSoon";
import { Fade, Zoom } from "react-reveal";

const Feature = ({ src, alt, reverse, title, body }) => {
  let reversedRow = (
    <>
      <Col className="" md={6}>
        <Fade left>
          <Typography variant="h3" className="mb-3 text-capitalize">
            {title}
          </Typography>
          <Typography variant='body1' className="mb-4"> {body} </Typography>
          <Badge label="coming soon" />
        </Fade>
      </Col>
      <Col data-aos="fade-up" md={6}>
        <Zoom>
          <img
            className="img-fluid black-circle-reverse"
            src={blackCircle}
            alt={alt}
          />
          <img className="img-fluid image-circle-reverse" src={src} alt={alt} />
        </Zoom>
      </Col>
    </>
  );
  return (
    <Row className="h-100 align-items-center">
      {reverse ? (
        reversedRow
      ) : (
        <>
          <Col md={6}>
            <Zoom>
              <img
                className="img-fluid black-circle"
                src={blackCircle}
                alt={alt}
              />
              <img className="img-fluid image-circle" src={src} alt={alt} />
            </Zoom>
          </Col>
          <Col md={6}>
            <Fade right>
              <Typography variant="h3" className="mb-3 text-capitalize">
                {title}
              </Typography>
              <Typography variant='body1' className="mb-4"> {body} </Typography>
              <Badge label="coming soon" />
            </Fade>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Feature;