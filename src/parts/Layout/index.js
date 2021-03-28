// import {} from 'react';
import "./index.css";
import SIdebar from "../sidebar";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-body-wrapper">
        <div className="page-sidebar">
          <SIdebar />
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
