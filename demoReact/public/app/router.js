import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayout from './components/layouts/search-layout';

// Pages
import Home from './components/home';


import  Page from './components/containers/defaultPage'
import  OrederPage from './components/containers/orderPage'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="defaultPage">
          <Route component={SearchLayout}>
            <IndexRoute component={Page} />
         </Route>
        </Route>
        <Route path="orders">
          <Route component={SearchLayout}>
            <IndexRoute component={OrederPage} />
          </Route>
        </Route>

    </Route>
  </Router>
);