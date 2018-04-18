import React from 'react';
import Helmet from 'react-helmet';
import mainSrc from '../assets/screens/sharing.png';
import Link from '../components/link';
import Companies from '../partials/companies';

export default () => (
  <React.Fragment>
    <Helmet>
      <body data-template="skinny" data-navbar="floating"/>
    </Helmet>
    <div className="jumbotron">
      <div className="container container--skinny">
        <div className="row">
          <div className="col-12 center">
            <h1>Insomnia for Teams</h1>
            <h2 className="font-light">
              Share API workspaces, stay in sync
            </h2>
            <Link to="/pricing/" className="button">Start Free Trial</Link>
          </div>
        </div>
        <div className="jumbotron__img-container">
          <img src={mainSrc} className="jumbotron__img" alt="Insomnia for Teams"/>
        </div>
      </div>
    </div>
    <section className="center no-margin padding-bottom padding-top">
      <div className="container container--skinny">
        <h2 id="sync-your-api-workspaces-across-devices">
          Collaborate on APIs with your team
        </h2>
        <p>
          Create a team, invite coworkers, and stay in sync. Any changes will seamlessly and securely transfer between
          all members, making collaboration a breeze.
          <br/><br/>
        </p>
        <p><strong>Automatic or manual sync</strong> 🕰 choose when to sync</p>
        <p><strong>End-to-end encryption</strong> 🔐 know your data is safe</p>
        <p><strong>Sync unlimited data</strong> 🚀 share unlimited API workspaces</p>
        <hr/>
        <h2 id="start-using-teams-for-free">
          Start using Teams for free
        </h2>
        <p>
          Sign up to start a 14-day free trial (no credit card required).
        </p>
        <p className="center">
          <br/>
          <Link className="button button--big" to="/pricing/">Start Free Trial</Link>
        </p>
      </div>
    </section>
    <section className="dark no-margin padding-top padding-bottom center">
      <h2>Hundreds of teams trust Insomnia</h2>
      <br/>
      <Companies/>
      <br/>
      <Link to="/pricing/" className="button button--big">Get Started</Link>
    </section>
  </React.Fragment>
);
