import React, {Component, PropTypes} from 'react';
import * as session from '../../session';

class SignOutLink extends Component {
  _handleClick = async e => {
    e.preventDefault();
    await session.logout();
    window.location = '/app/logout/';
  };

  render () {
    return <a href="#" onClick={this._handleClick}>Sign Out</a>
  }
}

SignOutLink.propTypes = {};

export default SignOutLink;
