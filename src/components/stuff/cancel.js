import React, {Component, PropTypes} from 'react';
import * as session from '../../session';

class CancelLink extends Component {
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
    return <a href="#" onClick={this._handleClick}>Cancel Subscription</a>
  }
}

CancelLink.propTypes = {};

export default CancelLink;
