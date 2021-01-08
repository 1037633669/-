//首页登录页

import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom'
import entry from '../../img/Entry.png';
class login extends Component {
  render () {
    return (
      <div>
        <Router>
          <Link to='/Pageone'>
            <img className='homeimg' src={entry}></img>
          </Link>
        </Router>
      </div>
    );
  }
}
export default login;