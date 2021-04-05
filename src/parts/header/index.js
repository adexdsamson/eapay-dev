import "./index.css";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import { Bell, BellOutline, Menu } from "heroicons-react";
import { Typography } from '@material-ui/core';

const Header = ({
  title,
  avatarSrc,
  accountStatus,
  isMobile,
  isNotification,
  onMenu,
  className
}) => {
  const status = accountStatus ? (
    <p className="ml-3 mr-3 mb-0 text-success">live</p>
  ) : (
    <p className="ml-3 mr-3 mb-0 text-danger">Test</p>
  );
  return (
    <div className={`page-header d-flex align-items-center justify-content-between ${className}`}>
      <div className="d-flex align-items-center">
        {isMobile ? <Menu size={35} onClick={onMenu} /> : null}
        <Typography variant='h4' className="mb-0">{title}</Typography>
      </div>
      <div className=" d-flex align-items-center">
        {isMobile ? null : status}
        {isNotification ? (
          <Bell className="ml-3 mr-3 mb-0 text-eapay" />
        ) : (
          <BellOutline className="ml-3 mr-3 mb-0 text-muted" />
        )}
        <Avatar src={avatarSrc} />
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  avatarSrc: PropTypes.string,
  accountStatus: PropTypes.string,
  isMobile: PropTypes.bool,
  isNotification: PropTypes.bool,
  onMenu: PropTypes.func,
};

export default Header;
