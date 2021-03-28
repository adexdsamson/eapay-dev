import "./index.css";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import { Bell, BellOutline, Menu } from "heroicons-react";

const Header = ({ title, src, children, isMobile, isNotification, onMenu }) => {
  return (
    <div className="page-header d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        {isMobile ? <Menu size={35} onClick={onMenu} /> : null}
        <h4 className="mb-0 ml-2">Dashboard</h4>
      </div>
      <div className="pr-4 d-flex align-items-center">
        {isMobile ? null : (
          <p className="ml-3 mr-3 mb-0 text-danger">Test mode</p>
        )}
        {isNotification ? (
          <Bell className="ml-3 mr-3 mb-0 text-eapay" />
        ) : (
          <BellOutline  className="ml-3 mr-3 mb-0 text-muted" />
        )}
        <Avatar src={src} />
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
