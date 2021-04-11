import { lazy } from "react";
import { Switch } from "react-router-dom";
import Layout from "./parts/Layout";
import {
  GET_STARTED_DASHBOARD_ROUTE,
  DASHBOARD_ROUTE,
  DASHBOARD_ECOMMERCE_ROUTE,
} from "./routes";
import Private from './routes/private';

const GetStarted = lazy(() => import("./containers/Dashboard/GetStarted.jsx"));
const DashboardPage = lazy(() => import("./containers/Dashboard"));
const Ecommerce = lazy(() => import("./containers/Dashboard/Shopfront.jsx"));

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
      </Switch>
    </Layout>
  );
};

export default Dashboard;
