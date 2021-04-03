import { Fragment } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Card from "../../components/Card/small";
import { Company, AirplaneIcon, HomeIcon, Setup } from "../../Assets";
import Header from '../../parts/header';

const GetStartedPresentation = ({ setDrawer, user }) => {
  const isMobile = useMediaQuery("down", "md");
  return (
    <Fragment>
      {isMobile ? <Header onMenu={setDrawer} isMobile={isMobile} /> : null}
      <div
        className="d-flex flex-column align-items-center justify-content-center mt-5 pt-5 mb-4"
      >
        <h3 className="text-center">Hi ShopTight, Welcome on board</h3>
        <p className="text-center getStarted-p">
          You have the folowing task to complete before your customers begin to
          pay you and also get accustom to your dashboard
        </p>
          <div className=''>

          <div className="row justify-content-between mt-0 mt-lg-5">
            <div className="col-md-5 col-sm-12">
              <Card src={HomeIcon} title='Activate startup business ' body="Verify your Bvn to activate for small, medium business" />
            </div>
            <div className="col-md-6 col-sm-12">
              <Card src={Company} title="Activate registered business" body="Verify your Bvn to activate for small, medium business" />
            </div>
          </div>
          <div className="row justify-content-between mt-0 mt-lg-5">
            <div className="col-md-6 col-sm-12">
              <Card src={Setup} title="Eapay setup" body="Verify your Bvn to activate for small, medium business"  />
            </div>
            <div className="col-md-6 col-sm-12">
              <Card src={AirplaneIcon} title="Dashboard Tour" body="Verify your Bvn to activate for small, medium business"  />
            </div>
          </div>
          </div>
        </div>
    </Fragment>
  );
};

export default GetStartedPresentation;
