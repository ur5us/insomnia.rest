import React from 'react';
import * as session from '../session';
import Link from '../../components/link';

class SignOutLink extends React.Component {
  async _handleClick(e) {
    e.preventDefault();
    await session.logout();
    window.location = '/app/logout/';
  };

  render() {
    return (
      <Link to="#" onClick={this._handleClick.bind(this)}>
        Sign Out
      </Link>
    );
  }
}

SignOutLink.propTypes = {};

export default SignOutLink;
