import React, {Component, PropTypes} from 'react';
import SignOutLink from './stuff/sign-out';
import CancelLink from './stuff/cancel';

class Home extends Component {
  render () {
    const {whoami} = this.props;
    return (
      <div>
        <h1>Hello {whoami.firstName}!</h1>
        <p>Your current plan is <code>{whoami.planName}</code></p>
        <ul>
          {/*<li>*/}
            {/*<a href="/app/team/">Manage Team</a>*/}
          {/*</li>*/}
          <li>
            <a href="/app/subscribe/">Change Plan</a>
          </li>
          <li>
            <CancelLink/>
          </li>
          <li>
            <SignOutLink/>
          </li>
        </ul>
      </div>
    )
  }
}

Home.propTypes = {
  whoami: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    planName: PropTypes.string.isRequired,
  }).isRequired
};

export default Home;
