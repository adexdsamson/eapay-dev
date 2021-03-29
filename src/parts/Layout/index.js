import "./index.css";
import Sidebar from "../sidebar";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Fade } from "react-reveal";
import { connect } from 'react-redux';
import { getDrawerState } from "../../store/selector";
import { drawer } from "../../store/actionTypes";

const Layout = ({ children, drawer, onDrawer }) => {
  const isMobile = useMediaQuery("down", "md");
  const openDrawer = drawer ? "d-block" : "d-none";
  return (
    <div className="page-wrapper">
      <div className="page-body-wrapper">
        <div
          onClick={() => onDrawer(false)}
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    drawer: getDrawerState(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDrawer: (data) => dispatch(drawer(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
