import { Dot, blackCircle } from "../../../assets";
import { Col, Row } from "react-bootstrap";
import Badge from "../../../components/comingSoon";
import { Fade, Zoom } from "react-reveal";
import { useMediaQueries } from "../../../HOC/useMediaQuery";

const Store = ({ title, body, src, alt, data }) => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <>
      {isMobile ? (
        <Row className="h-100 align-items-center">
          <Col lg={6} md={6} sm={12}>
            <Fade right>
              <h2 className="feature-title mb-4">{title}</h2>
              <p className="feature-paragraph mb-4"> {body} </p>
              <div className="mb-4 ml-3">
                {data.map((item) => (
                  <div className="d-flex align-items-center">
                    <img className="img-fluid" src={Dot} alt="" />
                    <div>
                      <p className="feature-paragraph ml-3"> {item.body} </p>
                    </div>
                  </div>
                ))}
              </div>
              <Badge label="coming soon" />
            </Fade>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Zoom>
              <img
                className="img-fluid store-black-circle"
                src={blackCircle}
                alt={alt}
              />
            </Zoom>
            <Fade left>
              <img className="img-fluid store-imag" src={src} alt={alt} />
            </Fade>
          </Col>
        </Row>
      ) : (
        <Row className="h-100 align-items-center">
          <Col lg={6} md={6} sm={12}>
            <Zoom>
              <img
                className="img-fluid store-black-circle"
                src={blackCircle}
                alt={alt}
              />
            </Zoom>
            <Fade left>
              <img className="img-fluid store-imag" src={src} alt={alt} />
            </Fade>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Fade right>
              <h2 className="feature-title mb-4">{title}</h2>
              <p className="feature-paragraph mb-4"> {body} </p>
              <div className="mb-4 ml-3">
                {data.map((item, index) => (
                  <div key={index} className="d-flex align-items-center">
                    <img className="img-fluid" src={Dot} alt="dot" />
                    <div className="mb-1">
                      <p className="feature-paragraph ml-3 m-0"> {item.body} </p>
                    </div>
                  </div>
                ))}
              </div>
              <Badge label="coming soon" />
            </Fade>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Store;
