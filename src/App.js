import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";
import Loader from "./components/loader";
import {
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  VERIFICATION_ROUTE,
  RESET_ROUTE,
} from "./routes";
import DashboardRoute from './dashboard'

const Login = lazy(() => import("./containers/Login"));
const Register = lazy(() => import("./containers/Register"));
const Verification = lazy(() => import("./containers/Verification"));
const Reset = lazy(() => import("./containers/Reset"));



function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={LOGIN_ROUTE} component={Login} />
        <Route exact path={REGISTER_ROUTE} component={Register} />
        <Route exact path={VERIFICATION_ROUTE} component={Verification} />
        <Route exact path={RESET_ROUTE} component={Reset} />
        <Route path="/dashboard">
          <DashboardRoute />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
