import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/NotFoundPage';


function AppRoutingFinal() {
  const [loggedIn, setLoggedIn] = useState(true);

  // TODO: Change to value from sessionStorage (or something dinamic)

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Redirect to='/dashboard' />)
           :
           (<Redirect to='/login' /> )
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' component={LoginPage} />
         {/* Register Route */}
         <Route exact path='/register' component={RegisterPage} />
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<Dashboardpage onLogout={() => setLoggedIn(false)} />)
           :
           (<Redirect to='/login' /> )
          }
        </Route>
        <Route component={Notfoundpage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
