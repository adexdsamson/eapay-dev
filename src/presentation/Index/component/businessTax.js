import Badge from "../../../components/comingSoon";
import { Tax as img } from "../../../Assets";
import { useMediaQueries } from "../../../HOC/useMediaQuery";
import { Fade, Zoom } from "react-reveal";
import { Grid, Typography } from "@material-ui/core";
import Card from '../../../components/card';

const BusinessTax = () => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <Grid container alignItems="center" spacing={isMobile ? 2 : 9}>
      <Grid item className="" md={6}>
        <Fade left>
          <Typography variant="h3" className={isMobile ? "mb-3 text-capitalize" :"mb-3 text-capitalize w-75"}>
            Tax audit guide and report
          </Typography>
          <Typography variant="body1" className={isMobile ? 'mb-4' : 'mb-4 w-75'}>
            We help you find the best solution to get your tax paid while also
            generating your annual tax report{" "}
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

export default BusinessTax;
