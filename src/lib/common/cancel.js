import React from 'react';
import * as session from '../session';
import Link from '../../components/link';

class CancelLink extends React.Component {
  _handleClick = async e => {
    e.preventDefault();

    const confirmed = confirm(
      'Are you sure? Your subscription will remain active ' +
      'until the end of your current billing period'
    );

    if (!confirmed) {
      return;
    }

    await session.cancelAccount();
    window.location.reload();
  };

  render () {
    return <Link to="#" onClick={this._handleClick}>Cancel Subscription</Link>
  }
}

CancelLink.propTypes = {};

export default CancelLink;
