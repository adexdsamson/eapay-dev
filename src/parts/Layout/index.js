// import {} from 'react';
import "./index.css";
import Sidebar from "../sidebar";
import Header from "../header";
import UseMediaQuery from '../'

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-body-wrapper">
        <div className="page-sidebar">
          <Sidebar />
        </div>
        <div className="page-body">
          <div className="container">
            <Header />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
