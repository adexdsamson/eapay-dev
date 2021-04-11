import { Fragment } from "react";
import Loader from "../../components/loader";
import Header from "../../parts/header";
import Notification from "../../components/notification";
import useMediaQuery from "../../hooks/useMediaQuery";


const CheckOutPresentation = ({
  loading,
  setDrawer,
  user,
  notify,
  onNotificationCancel,
}) => {
  const isMobile = useMediaQuery("down", "md");
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Header
            title="CheckOut"
            className="mt-3"
            onMenu={setDrawer}
            isMobile={isMobile}
            avatarSrc={user?.avatar}
            mode={user?.mode}
            // isNotification
          />
          <Notification
            content={notify}
            onCancel={onNotificationCancel}
            notify={notify}
          />
          <div className='mt-5'>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CheckOutPresentation;
