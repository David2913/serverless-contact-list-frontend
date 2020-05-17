import React from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Auth from './auth/Auth';
import withAuth from './withAuth';

import Callback from './Callback';
import Main from './Main';
import Contacts from './Contacts';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();
const auth = new Auth(history);


const handleAuthentication = (props) => {
  const location = props.location;
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props)
            return <Callback />
          }}
        />
        <Route
          path="/contacts"
          exact
          render={withAuth(Contacts, auth)}
        />
        <Route
          path="/"
          render={props => {
            auth.routeIfAuthenticated();
            return <Main auth={auth} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
