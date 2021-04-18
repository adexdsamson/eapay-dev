/* eslint-disable jsx-a11y/img-redundant-alt */
import Navbar from "../../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Grid, Typography } from "@material-ui/core";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import Footer from "../../components/footer";
import useMediaQuery from "../../HOC/useMediaQuery";
import { Fade, Zoom } from "react-reveal";
import { Whoweare, Passion } from "../../Assets";
import Card from "../../components/card";

const About = () => {
  const isMobile = useMediaQuery("down", "md");
  return (
    <div>
      <div className="header-container">
        <Container id="about">
          <header className="h-100 pt-3">
            <Navbar />
            <Row className="align-items-center h-90">
              <Col md={9}>
                <Fade left>
                  {isMobile ? (
                    <Typography variant="h5" className="mb-2 text-capitalize">
                      Powering and transforming payment platform for business in
                      Africa
                    </Typography>
                  ) : (
                    <Typography variant="h3" className="mb-2 text-capitalize">
                      Powering and transforming payment platform for business in
                      Africa
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    className={isMobile ? "" : "w-75"}
                  >
                    Eapay is a technology company that aims to promote financial
                    inclusivity by solving payment problems for ambitious
                    businesses
                  </Typography>
                </Fade>
              </Col>
            </Row>
          </header>
        </Container>
      </div>
      <Container>
        <section
          style={{ height: "100%", marginTop: "8rem", marginBottom: "6rem" }}
          className=""
        >
          <Grid
            container
            direction="row-reverse"
            className="align-items-center h-100"
            spacing={isMobile ? 1 : 9}
          >
            <Grid item md={6}>
              <Fade right>
                <Typography variant="h4" className="mb-2 text-capitalize">
                  Who We are
                </Typography>
                <Typography
                  variant="body1"
                  className={isMobile ? "mb-3" : "mb-3 w-75"}
                >
                  We are beyond just a payment company. We believe businesses
                  (especially small and medium size) should not be limited in
                  resources to enjoy growth.
                </Typography>
                <Typography
                  variant="body1"
                  className={isMobile ? "mb-3" : "mb-3 w-75"}
                >
                  Eapay is a technology designed to help businesses grow from
                  small, medium, to large enterprise, it’s built to help
                  business handle dispatch riders, inventory management system,
                  business content and tax audit.
                </Typography>
              </Fade>
            </Grid>
            <Grid item md={6} className='w-100'>
              <Zoom>
                <Card
                  src={Whoweare}
                  alt='Photo by <a href="https://unsplash.com/@heylagostechie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">heylagostechie</a> on <a href="https://unsplash.com/s/photos/human-business-work?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
                />
              </Zoom>
            </Grid>
          </Grid>
        </section>
        <section
          style={{ height: "100%", marginTop: "8rem", marginBottom: "6rem" }}
          className=""
        >
          <Grid
            container
            spacing={isMobile ? 1 : 9}
            className="align-items-center h-100"
          >
            <Grid item md={6}>
              <Fade left>
                <Typography variant="h4" className="mb-2 text-capitalize">
                  Our values
                </Typography>
                <Typography
                  variant="body1"
                  className={isMobile ? "mb-3" : "mb-3 w-75"}
                >
                  What makes us great team are the following values:
                </Typography>
                <div p={2}>
                  <div className="mb-3">
                    <TextInfoContent
                      useStyles={useN01TextInfoContentStyles}
                      heading={"Diverse Team"}
                      body={
                        "We are an amazing team of diverse culture with a united course to deliver the best service everyday."
                      }
                    />
                  </div>
                  <Box className="mb-3">
                    <TextInfoContent
                      useStyles={useN01TextInfoContentStyles}
                      heading={"Innovative"}
                      body={
                        "As businesses and its environment evolve, we stand to provide innovations that would make transactions  easier and faster for all businesses."
                      }
                    />
                  </Box>
                </div>
              </Fade>
            </Grid>
            <Grid item sm={12} md={6} className='w-100'>
              <Zoom>
                <Card
                  src={Passion}
                  alt='Photo by <a href="https://unsplash.com/@goian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ian Schneider</a> on <a href="https://unsplash.com/s/photos/values?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
                />
              </Zoom>
            </Grid>
          </Grid>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
