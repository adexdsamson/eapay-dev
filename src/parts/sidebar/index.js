// import {} from 'react';
import "./index.css";
import { Logo } from "../../Assets";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import {
  DotsCircleHorizontalOutline,
  ViewGridAddOutline,
  MenuAlt3,
  UserGroupOutline,
  ShoppingBag,
  Bookmark,
} from "heroicons-react";
import { Storefront } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";
import { GET_STARTED_DASHBOARD_ROUTE, DASHBOARD_ROUTE, DASHBOARD_ECOMMERCE_ROUTE } from "../../routes";

const sidebarMenu = [
  {
    id: 1,
    icon: <DotsCircleHorizontalOutline />,
    text: "Get started",
    link: GET_STARTED_DASHBOARD_ROUTE,
  },
  {
    id: 2,
    icon: <ViewGridAddOutline />,
    text: "Dashboard",
    link: DASHBOARD_ROUTE,
  },
  {
    id: 3,
    icon: <MenuAlt3 />,
    text: "Transactions",
    link: "",
  },
  {
    id: 4,
    icon: <UserGroupOutline />,
    text: "Customers",
    link: "",
  },
  {
    id: 5,
    icon: <ShoppingBag />,
    text: "E-commerce",
    link: DASHBOARD_ECOMMERCE_ROUTE,
  },
  {
    id: 6,
    icon: <Storefront />,
    text: "Store",
    link: "",
  },
  {
    id: 7,
    icon: <Bookmark />,
    text: "Business Tips",
    link: "",
  },
];

const Sidebar = ({ isMobile, user, location }) => {
  function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />;
  }
  const menus = sidebarMenu.map((menu) => (
    <ListItemLink
      key={menu.id}
      selected={menu.link === location?.pathname}
      to={menu.link}
    >
      <ListItemIcon
        className={
          menu.link === location?.pathname ? "text-white" : "sidebar-text-color"
        }
      >
        {menu.icon}
      </ListItemIcon>
      <ListItemText
        className={
          menu.link === location?.pathname ? "text-white" : "sidebar-text-color"
        }
        primary={menu.text}
      />
    </ListItemLink>
  ));
  return (
    <aside className="sidebar position-relative">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="eapays logo" />
        <Typography variant='h5'>Eapay</Typography>
      </div>
      <List className="list-menu" component="nav">
        {menus}
      </List>
      {isMobile ? (
        <div className="bottom text-white">
          <p className="text-center">
            Account mode:{" "}
            <span
              className={
                user?.mode === "Live mode" ? "text-success" : "text-danger"
              }
            >
              {user?.mode}
            </span>
          </p>
        </div>
      ) : null}
    </aside>
  );
};

export default withRouter(Sidebar);
