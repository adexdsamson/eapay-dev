import { Fragment } from "react";
import Header from "../../parts/header";
import useMediaQuery from "../../hooks/useMediaQuery";

const DashboardPresentation = ({ setDrawer, user }) => {
  const isMobile = useMediaQuery("down", "md");
  return (
    <Fragment>
      <Header
        title="Dashboard"
        onMenu={setDrawer}
        isMobile={isMobile}
        avatarSrc={user?.avatar}
        mode={user?.mode}
        isNotification
      />
    </Fragment>
  );
};

export default DashboardPresentation;
