import { Dot } from "../../../Assets";
import Badge from "../../../components/comingSoon";
import { Fade, Zoom } from "react-reveal";
import { useMediaQueries } from "../../../HOC/useMediaQuery";
import { Grid, Typography } from "@material-ui/core";

const Store = ({ title, body, src, alt, data }) => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <>
      <Grid container alignItems="center" spacing={2}>
        <Grid item className="" md={6}>
          <Fade left>
            <Typography variant="h3" className={isMobile ? "mb-3 text-capitalize" : "mb-3 text-capitalize w-75"}>
              {title}
            </Typography>
            <Typography variant="body1" className={isMobile ? "mb-4" : "mb-4 w-75"}>
              {body}
            </Typography>
            <div className="mb-4">
              {data.map((item) => (
                <div className="d-flex align-items-center">
                  <img className="img-fluid" src={Dot} alt="" />
                  <div>
                    <Typography
                      variant="body1"
                      className="feature-paragraph ml-3"
                    >
                      {" "}
                      {item.body}{" "}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <Badge label="coming soon" />
          </Fade>
        </Grid>
        <Grid item md={6} className="position-relative">
          <Zoom>
            {/* <img
              className="img-fluid black-circle-reverse"
              src={blackCircle}
              alt="black circle"
            /> */}
            <img className="img-fluid" src={src} alt={alt} />
          </Zoom>
        </Grid>
      </Grid>
    </>
  );
};

export default Store;
