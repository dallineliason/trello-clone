import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch, Route } from 'react-router-dom';
import App from '../src/components/App';
import "./style/main.scss";
import * as serviceWorker from './serviceWorker';
import Board from './components/board';
import history from './components/history';

ReactDOM.render(
    <Router history={history}>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/b/:id" component={Board} />
          </Switch>
    </Router>,
    document.getElementById("root")
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
