import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Dashboard from './layouts/dashboard/Dashboard'
import Profile from './user/layouts/profile/Profile'
// import Test from './components/Test'
import SignTransaction from './components/SignTransaction'
// <Route path="verification" component={UserIsAuthenticated(SignTransaction)} />

// Redux Store
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
          <Route path="verification" component={UserIsAuthenticated(SignTransaction)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
