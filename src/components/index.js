import React, {Component, PropTypes} from 'react';
import Home from './home';
import Login from './login';
import SignUp from './signup';
import Subscribe from './subscribe';
import Teams from './teams';
import * as session from '../session';

class App extends Component {
  state = {loading: true};
  component = null;

  _handleReload = async () => {
    let whoami;

    const whoamiTask = session.whoami();
    const billingDetailsTask = session.billingDetails();
    const teamsTask = session.listTeams();

    try {
      whoami = await whoamiTask;
    } catch (err) {
      // If not logged in, logout and redirect to login page
      await session.logout();
      window.location = '/app/login/';
      return;
    }

    const teams = await teamsTask;
    let billingDetails;
    try {
      billingDetails = await billingDetailsTask;
    } catch (err) {
      // That's OK. That just means the account is Free
    }

    const path = window.location.pathname;
    if (path.match(/^\/app\/$/)) {
      this.component = <Home whoami={whoami} billingDetails={billingDetails}/>
    } else if (path.match(/^\/app\/subscribe\/$/)) {
      this.component = <Subscribe whoami={whoami} billingDetails={billingDetails}/>
    } else if (path.match(/^\/app\/teams\/$/)) {
      this.component = (
        <Teams
          whoami={whoami}
          billingDetails={billingDetails}
          teams={teams}
          handleReload={this._handleReload}
        />
      )
    }

    // Give some time for components waiting on this to finish to update their
    // state before we refresh on them.
    setTimeout(() => {
      this.setState({loading: false});
    }, 0)
  };

  componentWillMount () {
    const {path} = this.props;

    // Routes that don't require session
    if (path === '/app/login/') {
      this.component = <Login/>;
    } else if (path === '/app/signup/') {
      this.component = <SignUp/>;
    }

    // Show one of the above components
    if (this.component) {
      this.setState({loading: false});
    } else {
      this._handleReload();
    }
  }

  render () {
    if (this.component) {
      return (
        <div className="app-container">
          {this.component}
        </div>
      );
    }

    if (this.state.loading) {
      return (
        <div className="app-container">
          <div className="center text-lg subtle">
            Loading...
          </div>
        </div>
      )
    } else {
      return (
        <div className="app-container">
          Page Not Found
        </div>
      )
    }
  }
}

App.propTypes = {
  path: PropTypes.string.isRequired
};

export default App;
