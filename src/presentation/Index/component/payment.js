import { blackCircle, qr } from "../../../Assets";
import Badge from "../../../components/comingSoon";
import { useMediaQueries } from "../../../HOC/useMediaQuery";
import { Grid, Typography } from "@material-ui/core";
import { Fade, Zoom } from "react-reveal";

const Payments = () => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <Grid container direction='row-reverse' alignItems="center" spacing={2}>
      <Grid item className="" md={6}>
        <Fade left>
          <Typography variant="h3" className="mb-3 text-capitalize">
            seamless payment
          </Typography>
          <Typography variant='body1' className={isMobile ? "mb-4" : "mb-4 w-75"}> 
            Get paid offline and online easily without hassle. Simplify all options into a single channel for your customers.  With Eapay QR, your customers can pay with different payment options through a single channel.
          </Typography>
          <Badge label="coming soon" />
        </Fade>
      </Grid>
      <Grid item md={6} className='position-relative'>
      <Zoom>
          <img
            className="img-fluid black-circle-reverse"
            src={blackCircle}
            alt='black circle'
          />
          <img className="img-fluid " src={qr} alt='qr code' />
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default Payments;