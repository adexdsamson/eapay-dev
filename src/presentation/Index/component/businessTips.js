import Badge from "../../../components/comingSoon";
import { blackCircle, Tips as img } from "../../../Assets";
import { Grid, Typography } from "@material-ui/core";
import { Fade, Zoom } from "react-reveal";
import { useMediaQueries } from "../../../HOC/useMediaQuery";

const BusinessTip = ({ title, body, src, alt }) => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <Grid container direction="row-reverse" alignItems="center" spacing={2}>
      <Grid item className="" md={6}>
        <Fade left>
          <Typography variant="h3" className={isMobile ? "mb-3 text-capitalize" : "mb-3 text-capitalize w-75"}>
            Keep up with business world
          </Typography>
          <Typography variant="body1" className={isMobile ? "mb-4" : "mb-4 w-75"}>
            To have a successful business requires excellent business information. Get business articles on your dashboard everyday from our partners.
          </Typography>
          <Badge label="coming soon" />
        </Fade>
      </Grid>
      <Grid item md={6} className="position-relative">
        <Zoom>
          <img
            className="img-fluid black-circle-reverse"
            src={blackCircle}
            alt="black circle"
          />
          <img className="img-fluid " src={img} alt="context to business tips" />
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default BusinessTip;
