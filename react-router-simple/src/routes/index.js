import React, {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Book from '../components/Book';
import Admin from '../components/Admin';
import Login, {fakeAuth} from '../components/Login';

export default class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Book} />
            <Route path="/login" component={Login} />
            <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)