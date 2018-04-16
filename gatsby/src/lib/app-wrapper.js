import React from 'react';
import PropTypes from 'prop-types';
import * as session from './session';
import {setUserId} from './analytics';
import Link from '../components/link';

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

    // Fetch Account info
    let whoami;
    try {
      whoami = await session.whoami();
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
    const billingDetails = await session.billingDetails();
    const teams = await session.listTeams();

    this.setState({whoami, teams, billingDetails, loading: false});
  };

  renderBody() {
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

  render() {
    return (
      <React.Fragment>
        <article style={{minHeight: '25rem'}}>
          <header className="container container--skinny header--big">
            <h1>{this.props.title}</h1>
            <p className="text-lg">{this.props.subTitle}</p>
          </header>
          {this.renderBody()}
        </article>
        {!this.props.hideFooter && (
          <footer className="dark padding-bottom padding-top">
            <div className="container container--skinny">
              <Link to="/app/account/">&laquo; Back to Account</Link>
            </div>
          </footer>
        )}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  noAuth: PropTypes.bool,
  hideFooter: PropTypes.bool,
};

export default App;
