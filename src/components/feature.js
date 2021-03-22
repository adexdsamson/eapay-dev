import { Col, Row } from "react-bootstrap";
import { blackCircle } from "../assets";
import Badge from "./comingSoon";
import { Fade, Zoom } from "react-reveal";

const Feature = ({ src, alt, reverse, title, body }) => {
  let reversedRow = (
    <>
      <Col className="" md={6}>
        <Fade left>
          <h2 className="feature-title mb-3">{title}</h2>
          <p className="feature-paragraph mb-4"> {body} </p>
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
              <h2 className="feature-title mb-3">{title}</h2>
              <p className="feature-paragraph mb-4"> {body} </p>
              <Badge label="coming soon" />
            </Fade>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Feature;
