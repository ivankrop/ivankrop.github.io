import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRoute from './containers/PrivateRoute';
import HomeRoute from './containers/HomeRoute';
import HomeContainer from './containers/Home';
import TodoContainer from './containers/Todo';
import {PATHS} from "./constants/routes";
import store from './store';
import './styles/index.css'; 

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <Switch>
            <HomeRoute exact path={PATHS.INDEX} component = {HomeContainer}/>
            <PrivateRoute exact path={PATHS.TODO} component={TodoContainer}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
