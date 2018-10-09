import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import NotFoundPage from './pages/NotFound'
import ExpensesPage from './pages/Expenses'
import NavBar from './components/NavBar'
import Loader from './components/Loader';


class App extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <Loader />
        {user ?  (
          <Fragment>
            <NavBar/>
            <Switch>
              <Route path="/expenses" component={ExpensesPage} />
              <Redirect exact from="/" to="/expenses"/>
              <Route path="*" component={NotFoundPage}/>
            </Switch>
           </Fragment>

        ) : (
        <Switch>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
          <Redirect to='/login'/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        )}
      </div>
    );
  }
}

export default App;
