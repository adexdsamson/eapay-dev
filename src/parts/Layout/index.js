import { useState } from "react";
import "./index.css";
import Sidebar from "../sidebar";
import Header from "../header";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Fade } from "react-reveal";

const Layout = ({ children }) => {
  const isMobile = useMediaQuery("down", "md");
  const [drawer, setDrawer] = useState(false);
  const openDrawer = drawer ? "d-block" : "d-none";
  return (
    <div className="page-wrapper">
      <div className="page-body-wrapper">
        <div
          onClick={() => setDrawer(false)}
          className={`page-sidebar ${isMobile ? openDrawer : "d-block"}`}
        >
          {isMobile ? null : <Sidebar />}
          {isMobile ? (
            <Fade when={drawer} left>
              <Sidebar />
            </Fade>
          ) : null}
        </div>
        <div className="page-body">
          <div className="container">
            <Header onMenu={() => setDrawer(true)} isMobile={isMobile} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
