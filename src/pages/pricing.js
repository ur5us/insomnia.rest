import React from 'react';
import SocialCards from '../components/social-cards';
import Contributors from '../partials/contributors';
import Title from '../partials/title';
import Link from '../components/link';

export default () => (
  <React.Fragment>
    <article>
      <Title>Pricing</Title>
      <SocialCards title="Insomnia" summary="Enhance the power of the app" isBanner/>
      <header className="container header--big">
        <div className="row">
          <div className="col-12">
            <h1>Insomnia Addons</h1>
            <p className="text-lg">Enhance the power of the app &#x1f680;</p>
          </div>
        </div>
      </header>
      <section className="container">
        <div className="row pricing padding-bottom">
          <section className="col-6 pricing__column">
            <header className="pricing__column__header">
              <h1>Free</h1>
            </header>
            <div className="pricing__column__body">
              <h2>
                Free<br/>
                <span className="subtle small">forever</span>
              </h2>
              <ul>
                <li>Mac/Windows/Linux App</li>
                <li>Unlimited installations</li>
                <li>Future updates</li>
                <li><Link to="https://github.com/getinsomnia/insomnia">Open source</Link></li>
              </ul>
            </div>
            <footer className="pricing__column__footer">
              <Link to="/download/" className="button button">
                Download Free App
              </Link>
            </footer>
          </section>

          <section className="col-6 pricing__column pricing__column--best">
            <header className="pricing__column__header">
              <h1>Plus</h1>
            </header>
            <div className="pricing__column__body">
              <h2>
                $5 / month<br/>
                <span className="subtle small">or $50 / year</span>
              </h2>
              <ul>
                <li><strong>All Free features</strong></li>
                <li><Link to="/documentation/security/">E2EE</Link> Data Sync &#128272;</li>
                <li>Unlimited devices</li>
                <li>Premium color themes</li>
                <li><strong>Support future dev &#x1f4bb;</strong></li>
              </ul>
            </div>
            <footer className="pricing__column__footer">
              <Link to="/app/subscribe/#plus" className="button">
                Start Free Trial
              </Link>
            </footer>
          </section>

          <section className="col-6 pricing__column pricing__column--better">
            <header className="pricing__column__header">
              <h1>Teams</h1>
            </header>
            <div className="pricing__column__body">
              <h2>
                $8 / user / month<br/>
                <span className="subtle small">or $80 / user / year</span>
                <br/>
              </h2>
              <ul>
                <li><strong>All Plus features</strong></li>
                <li>Workspace sharing &#x1f64c;</li>
                <li>Team management</li>
                <li>Priority email support</li>
              </ul>
            </div>
            <footer className="pricing__column__footer">
              <Link to="/app/subscribe/#teams" className="button">
                Start Free Trial
              </Link>
            </footer>
          </section>
        </div>
        <div className="padding-top-sm center">
          <small><em className="subtle">*All prices listed in US dollars</em></small>
        </div>
      </section>
      <section className="container padding-top">
        <div className="row">
          <div className="col-6">
            <p>
              <strong>Can I add and remove team members?</strong><br/>
              Yes, at any time you can adjust your plan limits to add or remove team members and
              your next invoice will be adjusted accordingly.
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong>Do team members receive any benefits?</strong><br/>
              All members of a paying team automatically receive the benefits included in
              the Plus plan.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>
              <strong>Can I switch plans after subscribing?</strong><br/>
              Yes, at any time. When upgrading or downgrading your plan, you will
              receive either a pro-rated charge or refund, depending on the cost of your new plan.
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong>Is there a discount for subscribing annually?</strong><br/>
              Yes, annual subscriptions include two free months of service per year, which is
              roughly a 15% discount.
            </p>
          </div>
        </div>
        <div className="row padding-top">
          <section className="col-12 center small">
            <p>
              Please send any questions to&nbsp;
              <Link to="/documentation/support-and-feedback">support@insomnia.rest</Link>
            </p>
          </section>
        </div>
      </section>
    </article>
    <Contributors/>
  </React.Fragment>
);
