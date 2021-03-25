import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/loader';

const Login = lazy(() => import('./containers/Login'));


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Suspense>
  );
}

export default App;
