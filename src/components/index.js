import React, {Component, PropTypes} from 'react';
import Home from './home';
import Login from './login';
import SignUp from './signup';
import Subscribe from './subscribe';
import Team from './team';
import Teams from './teams';
import * as session from '../session';

class App extends Component {
  state = {loading: true};
  component = null;

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
      return;
    }

    // Now, try to load the user's info
    (async () => {
      let whoami;

      const whoamiTask = session.whoami();
      const billingDetailsTask = session.billingDetails();
      const teamsTask = session.listTeams();

      try {
        whoami = await whoamiTask;
      } catch (err) {
        // If not logged in, redirect to login page
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

      if (path.match(/^\/app\/$/)) {
        this.component = <Home whoami={whoami} billingDetails={billingDetails}/>
      } else if (path.match(/^\/app\/subscribe\/$/)) {
        this.component = <Subscribe whoami={whoami} billingDetails={billingDetails}/>
      } else if (path.match(/^\/app\/teams\/$/)) {
        this.component = <Teams whoami={whoami} billingDetails={billingDetails} teams={teams}/>
      }

      this.setState({loading: false});
    })();
  }

  render () {
    if (this.component) {
      return this.component;
    }

    if (this.state.loading) {
      return (
        <div className="center text-lg subtle">
          Loading...
        </div>
      )
    } else {
      return (
        <div>
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
