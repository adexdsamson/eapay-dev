import { Dispatch as img } from "../../../Assets";
import { useMediaQueries } from "../../../HOC/useMediaQuery";
import { Grid, Typography } from "@material-ui/core";
import { Fade, Zoom } from "react-reveal";
import Badge from "../../../components/comingSoon";
import Card from '../../../components/card';

const Logistics = () => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <Grid container direction='row-reverse' alignItems="center" spacing={isMobile ? 2 : 9}>
      <Grid item className="" md={6}>
        <Fade left>
          <Typography variant="h3" className="mb-3 text-capitalize">
          Eapay Logistics
          </Typography>
          <Typography variant='body1' className={isMobile ? "mb-4" : "mb-4 w-75"}> 
            With Shopfront, manage deliveries of orders effectively without hassle, as the deliveries of products are covered with our partners. 
          </Typography>
          <Badge label="coming soon" />
        </Fade>
      </Grid>
      <Grid item md={6} className='w-100'>
      <Zoom>
          <Card src={img} />
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default Logistics;
