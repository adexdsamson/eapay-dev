import { Fragment } from "react";
import Loader from "../../components/loader";
import Header from "../../parts/header";
import Notification from "../../components/notification";
import useMediaQuery from "../../hooks/useMediaQuery";
import Card from "../../components/Card/news";
import Empty from '../../components/Empty';

const BusinessTips = ({
  loading,
  setDrawer,
  user,
  notify,
  onNotificationCancel,
  data
}) => {
  const isMobile = useMediaQuery("down", "md");
  const newsList = data.map(item => (
    <Card title={item.title} body={item.description} src={item.img} alt={item.alt} />
  ))
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Header
            title="Business Tips"
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
          <div className="mt-5">
            {data?.length ? newsList : <Empty />}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default BusinessTips;
