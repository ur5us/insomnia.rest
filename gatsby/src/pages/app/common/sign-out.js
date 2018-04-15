import React from 'react';
import * as session from '../../../lib/session';
import {trackEvent} from '../../../lib/analytics';

class SignOutLink extends React.Component {
  _handleClick = async e => {
    e.preventDefault();
    await session.logout();
    trackEvent('Account', 'Logout');
    window.location = '/app/logout/';
  };

  render () {
    return <a href="#" onClick={this._handleClick}>Sign Out</a>
  }
}

SignOutLink.propTypes = {};

export default SignOutLink;
