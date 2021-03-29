import { Fragment } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const GetStartedPresentation = ({ setDrawer, user }) => {
  const isMobile = useMediaQuery("down", "md");
  return (
    <Fragment>
      <div style={{ height: '100vh' }} className='d-flex flex-column align-items-center justify-content-center'>
        <h3>Hi ShopTight, Welcome on board</h3>
        <p>You have the folowing task to complete before your customers begin to pay you and also get accustom to your dashboard</p>
      </div>
    </Fragment>
  );
};

export default GetStartedPresentation;
