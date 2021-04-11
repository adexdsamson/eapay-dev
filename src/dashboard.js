import { lazy } from "react";
import { Switch } from "react-router-dom";
import Layout from "./parts/Layout";
import {
  GET_STARTED_DASHBOARD_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_ECOMMERCE_ROUTE,
  DASHBOARD_BUSINESSTIPS_ROUTE,
  DASHBOARD_CUSTOMERS_ROUTE,
  DASHBOARD_TRANSACTION_ROUTE,
  DASHBOARD_CHECKOUT_ROUTE
} from "./routes";
import Private from "./routes/private";

const GetStarted = lazy(() => import("./containers/GetStarted"));
const DashboardPage = lazy(() => import("./containers/Dashboard"));
const Ecommerce = lazy(() => import("./containers/Shopfront"));
const BusinessTips = lazy(() => import("./containers/BusinessTips"));
const Customers = lazy(() => import("./containers/Customers"));
const Transactions = lazy(() => import("./containers/Transactions"));
const CheckOut = lazy(() => import("./containers/CheckOut"));

const Dashboard = () => {
  return (
    <Layout>
      <Switch>
        <Private
          exact
          path={GET_STARTED_DASHBOARD_ROUTE}
          component={GetStarted}
        />
        <Private exact path={DASHBOARD_ROUTE} component={DashboardPage} />
        <Private exact path={DASHBOARD_ECOMMERCE_ROUTE} component={Ecommerce} />
        <Private
          exact
          path={DASHBOARD_BUSINESSTIPS_ROUTE}
          component={BusinessTips}
        />
        <Private
          exact
          path={DASHBOARD_TRANSACTION_ROUTE}
          component={Transactions}
        />
        <Private
          exact
          path={DASHBOARD_CUSTOMERS_ROUTE}
          component={Customers}
        />
        <Private
          exact
          path={DASHBOARD_CHECKOUT_ROUTE}
          component={CheckOut}
        />
      </Switch>
    </Layout>
  );
};

export default Dashboard;
