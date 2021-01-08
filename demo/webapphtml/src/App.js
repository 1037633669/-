// 根组件
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from './pages/loginPage';
import Pageone from './pages/page1';

class App extends Component {
  render () {
    return (
      <div className="homeimg">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Pageone' component={Pageone} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}
export default App;
