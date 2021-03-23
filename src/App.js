import React, { lazy, Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Aos from 'aos'
import Loader from './components/loader';
import { Switch, Route } from 'react-router-dom';

const IndexPage = lazy(() => import('./containers/Index'));

Aos.init();

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path='/' component={IndexPage} />
      </Switch>
    </Suspense>
  );
}

export default App;