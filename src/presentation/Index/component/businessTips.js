import Badge from "../../../components/comingSoon";
import { Tips as img } from "../../../Assets";
import { Grid, Typography } from "@material-ui/core";
import { Fade, Zoom } from "react-reveal";
import { useMediaQueries } from "../../../HOC/useMediaQuery";
import Card from "../../../components/card";

const BusinessTip = () => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <Grid
      container
      direction="row-reverse"
      alignItems="center"
      spacing={isMobile ? 2 : 9}
    >
      <Grid item className="" md={6}>
        <Fade left>
          <Typography
            variant="h3"
            className={
              isMobile ? "mb-3 text-capitalize" : "mb-3 text-capitalize w-75"
            }
          >
            Keep up with business world
          </Typography>
          <Typography
            variant="body1"
            className={isMobile ? "mb-4" : "mb-4 w-75"}
          >
            To have a successful business requires excellent business
            information. Get business articles on your dashboard everyday from
            our partners.
          </Typography>
          <Badge label="coming soon" />
        </Fade>
      </Grid>
      <Grid item md={6} className="w-100">
        <Zoom>
          <Card src={img} />
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default BusinessTip;
