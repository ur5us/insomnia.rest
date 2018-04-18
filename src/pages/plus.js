import React from 'react';
import mainSrc from '../assets/screens/main.png';
import Helmet from 'react-helmet';
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
            <h1>Insomnia Plus</h1>
            <h2 className="font-light">
              Your API workspaces, backed up and in sync
            </h2>
            <Link to="/pricing/" className="button">Start Free Trial</Link>
          </div>
        </div>
        <div className="jumbotron__img-container">
          <img src={mainSrc} className="jumbotron__img" alt="Insomnia Plus"/>
        </div>
      </div>
    </div>
    <section className="center no-margin padding-bottom padding-top">
      <div className="container container--skinny">
        <h2 id="sync-your-api-workspaces-across-devices">
          Sync your API workspaces across devices
        </h2>
        <p>
          Create an account, log in, and relax. With Plus, your application data will be automatically
          backed on the cloud and synced across all your devices.
          <br/><br/>
        </p>
        <p><strong>Automatic or manual sync</strong> 🕰 choose when to sync</p>
        <p><strong>End-to-end encryption</strong> 🔐 know your data is safe</p>
        <p><strong>Sync unlimited data</strong> 🚀 never worry about limits</p>
        <hr/>
        <h2 id="start-using-plus-for-free">
          Start using Plus for free
        </h2>
        <p>
          Sign up to start a 14-day free trial (no
          credit card required).
        </p>
        <p className="center">
          <br/>
          <Link className="button" to="/pricing/">Start Free Trial</Link>
        </p>
      </div>
    </section>
    <section className="dark no-margin padding-top padding-bottom center">
      <h2>Over 300,000 developers trust Insomnia</h2>
      <br/>
      <Companies/>
      <br/>
      <Link to="/pricing/" className="button button--big">Get Started</Link>
    </section>
  </React.Fragment>
);

