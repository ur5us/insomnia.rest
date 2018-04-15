import React from 'react';
import SocialCards from '../components/social-cards';

export default () => (
  <article>
    <SocialCards title="Insomnia" summary="Enhance the power of the app" isBanner />
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
              <li><a href="https://github.com/getinsomnia/insomnia">Open source</a></li>
            </ul>
          </div>
          <footer className="pricing__column__footer">
            <a href="/download/" className="button button">
              Download Free App
            </a>
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
              <li><a href="/documentation/security/">E2EE</a> Data Sync &#128272;</li>
              <li>Unlimited devices</li>
              <li>Premium color themes</li>
              <li><strong>Support future dev &#x1f4bb;</strong></li>
            </ul>
          </div>
          <footer className="pricing__column__footer">
            <a href="/app/subscribe/#teams" className="button">
              Start Free Trial
            </a>
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
            <a href="/app/subscribe/#teams" className="button">
              Start Free Trial
            </a>
          </footer>
        </section>
      </div>

      <div className="row">
        <section className="col-12 center small">
          <p>
            Please send any questions to&nbsp;
            <a href="/documentation/support-and-feedback">support@insomnia.rest</a>
          </p>
        </section>
      </div>
    </section>
  </article>
);
