import React from 'react';
import * as session from './session';
import {setUserId} from './analytics';

let stateCache = null;

class App extends React.Component {
  state = {
    initialized: false,
    loading: false,
    whoami: null,
    billingDetails: null,
    teams: [],
  };

  componentDidMount() {
    if (stateCache) {
      this.setState(stateCache);
    } else {
      this.init();
    }
  }

  componentDidUpdate(prevProps, prevStat, snapshot) {
    stateCache = this.state;
  }

  async init(isReloading) {
    if (this.props.noAuth) {
      this.setState({initialized: true});
      return;
    }

    if (!isReloading) {
      this.setState({initialized: true, loading: true});
    }

    let whoami;

    const whoamiTask = session.whoami();
    const billingDetailsTask = session.billingDetails();
    const teamsTask = session.listTeams();

    // Fetch Account info
    try {
      whoami = await whoamiTask;
    } catch (err) {
      // If not logged in, logout and redirect to login page
      if (err.statusCode === 403) {
        await session.logout();
      }

      localStorage.setItem('login.next', window.location.href);
      window.location = '/app/signup/';
      return;
    }

    setUserId(whoami.accountId);

    // Fetch the things
    const teams = await teamsTask;
    const billingDetails = await billingDetailsTask;

    this.setState({whoami, teams, billingDetails, loading: false});
  };

  render() {
    if (!this.state.initialized || this.state.loading) {
      return (
        <div className="center text-lg subtle">
          Loading...
        </div>
      );
    }

    return (
      <section className="container container--skinny">
        {this.props.children({
          whoami: this.state.whoami,
          billingDetails: this.state.billingDetails,
          teams: this.state.teams,
          handleReload: this.init.bind(this, true)
        })}
      </section>
    );
  }
}

export default App;
