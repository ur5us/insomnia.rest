import React from 'react';
import * as session from '../../../lib/session';
import {trackEvent} from '../../../lib/analytics';

class CancelLink extends React.Component {
  _handleClick = async e => {
    e.preventDefault();

    const confirmed = confirm(
      'Are you sure? Your subscription will remain active ' +
      'until the end of your current billing period'
    );

    if (!confirmed) {
      trackEvent('Account', 'Cancel Cancelled');
      return;
    }

    await session.cancelAccount();
    trackEvent('Account', 'Cancel');
    window.location.reload();
  };

  render () {
    return <a href="#" onClick={this._handleClick}>Cancel Subscription</a>
  }
}

CancelLink.propTypes = {};

export default CancelLink;
