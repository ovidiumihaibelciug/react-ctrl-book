import React from "react";
// import PropTypes from 'prop-types'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./views/Home";
import Profile from "./views/Profile";
import { create } from "domain";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/page/:page",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/:genre",
    component: Home
  },
  {
    path: "/:genre/:page",
    component: Home
  },
  {
    path: "/profile/:username",
    component: Profile
  }
];

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        {routes.map(route => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </React.Fragment>
    </Router>
  </Provider>
);

export default Root;
