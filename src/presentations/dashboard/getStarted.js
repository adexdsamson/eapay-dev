import { Fragment } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Card from "../../components/Card/small";
import { Company, AirplaneIcon, HomeIcon, Setup } from "../../Assets";
import Header from "../../parts/header";
import { Typography } from "@material-ui/core";

const GetStartedPresentation = ({ setDrawer, user }) => {
  const isMobile = useMediaQuery("down", "md");
  return (
    <Fragment>
      {isMobile ? <Header onMenu={setDrawer} isMobile={isMobile} /> : null}
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <Typography variant="h4" className="text-center">
          Hi ShopTight, Welcome on board
        </Typography>
        <Typography variant='body2' className="text-center getStarted-p mt-2">
          You have the folowing task to complete before your customers begin to
          pay you and also get accustom to your dashboard
        </Typography>
        <div className="mt-5">
          <div className="row justify-content-center mt-0 mt-lg-5">
            <div className="col-md-5 col-sm-12">
              <Card
                src={HomeIcon}
                title="Activate startup business "
                body="Verify your business as a small, medium account."
                button='Continue'
              />
            </div>
            <div className="col-md-5 col-sm-12">
              <Card
                src={Company}
                title="Activate registered business"
                body="Verify your business as a registered coperate account."
                button='Continue'
              />
            </div>
          </div>
          <div className="row justify-content-center mt-0 mt-lg-5">
            <div className="col-md-5 col-sm-12">
              <Card
                src={Setup}
                title="API Documentation"
                body="Access our Libraries, APIs to integrate with your website and app."
                button='view'
              />
            </div>
            <div className="col-md-5 col-sm-12">
              <Card
                src={AirplaneIcon}
                title="Dashboard Tour"
                body="Take a tour on eapay dashboard, understand important functionalities"
                button='Tour'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GetStartedPresentation;
