//   Require Libraries //
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//   Require Components //
import Home from 'components/homePage';
import LoginOrRegister from 'components/loginOrRegister';

const app = document.getElementById('app');

render(<Router history={hashHistory}>
        <Route path="/" component={Home}>
          <Route path="loginOrRegister" component={LoginOrRegister}>
          </Route>
        </Route>
       </Router>, app);