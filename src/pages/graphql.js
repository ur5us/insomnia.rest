import React from 'react';
import Helmet from 'react-helmet';
import mainSrc from '../assets/screens/graphql.png';
import screen1Src from '../assets/screens/graphql-autocomplete.png';
import screen2Src from '../assets/screens/graphql-errors.png';
import screen3Src from '../assets/screens/graphql-variables.png';
import Link from '../components/link';
import Companies from '../partials/companies';
import DownloadButton from '../components/download-button';
import Title from '../partials/title';

export default () => (
  <React.Fragment>
    <Title>GraphQL IDE</Title>
    <Helmet>
      <body data-navbar="floating"/>
    </Helmet>
    <div className="jumbotron">
      <div className="container container--skinny">
        <div className="row">
          <div className="col-12 center">
            <h1>GraphQL + Insomnia</h1>
            <h2 className="font-light">
              The most advanced open source HTTP client just learned GraphQL
            </h2>
            <DownloadButton/>
          </div>
        </div>
        <div className="jumbotron__img-container">
          <img src={mainSrc} className="jumbotron__img" alt="Insomnia for Teams"/>
        </div>
      </div>
    </div>
    <section className="center padding-bottom-lg padding-top no-margin">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-xxl">
              Way more than just GraphQL 🚀
            </h2>
            <p className="text-lg">
              GraphQL <strong>Autocomplete</strong> and <strong>linting</strong>, with
              Insomnia's HTTP tool belt
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 padding-top">
            <div className="img--promo">
              <img src={screen1Src} alt="GraphQL Autocomplete"/>
            </div>
            <h3>Query Completion</h3>
            <p>
              Autocompletion of field names and arguments makes constructing GraphQL queries
              a breeze.
            </p>
          </div>
          <div className="col-4 padding-top">
            <div className="img--promo">
              <img src={screen2Src} alt="GraphQL Autocomplete"/>
            </div>
            <h3>Error Checking</h3>
            <p>
              Schema-based error checking prevents you from making mistakes before you even realize it.
            </p>
          </div>
          <div className="col-4 padding-top">
            <div className="img--promo">
              <img src={screen3Src} alt="GraphQL Autocomplete"/>
            </div>
            <h3>Advanced Features</h3>
            <p>
              Access Insomnia's existing features like template tags, environment variables, and plugins.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="light no-margin">
      <div className="container">
        <div className="row padding-top padding-bottom-lg">
          <div className="col-12 center">
            <h2 className="text-xxl">Get Started Today</h2>
            <p className="text-lg">Insomnia is free, open source, and cross-platform</p>
            <div className="padding-top">
              <DownloadButton className="button--big"/>
              &nbsp;&nbsp;
              <Link to="/teams" className="button button--big button--no-outline">
                Team Edition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="dark no-margin padding-top padding-bottom center">
      <h2>Over 300,000 developers trust Insomnia</h2>
      <br/>
      <Companies/>
    </section>
  </React.Fragment>
);
