import { lazy } from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from './parts/Layout';
import { GET_STARTED_DASHBOARD_ROUTE } from './routes';


const GetStarted = lazy(() => import('./containers/Dashboard/GetStarted'));


const Dashboard = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={GET_STARTED_DASHBOARD_ROUTE} component={GetStarted} />
      </Switch>
    </Layout>
  )
}

export default Dashboard;