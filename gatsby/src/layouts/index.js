import React from 'react';
import Helmet from 'react-helmet';
import './base.less';
import './simple-grid.min.css';
import './index.less';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import DownloadButton from "../components/download-button";

export default class extends React.Component {
  _updateBodyAttrs() {
    const {location} = this.props;
    document.body.setAttribute('data-pathname', location.pathname);
  }

  componentDidMount() {
    this._updateBodyAttrs();
    this.setupGA();
  }

  componentDidUpdate() {
    this._updateBodyAttrs();
  }

  setupGA() {
    let disableGA = window.localStorage['disableGA'] ||
      window.location.hostname === 'localhost';

    const s = window.location.search;
    if (s.indexOf('state=') >= 0 && s.indexOf('code=') >= 0) {
      // Disable GA for those using insomnia.rest for OAuth2 callback
      disableGA = true;
    }

    if (!disableGA) {
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
      ga('create', 'UA-86416787-1', 'auto');
      ga('set', 'transport', 'beacon');
      ga('send', 'pageview');
    } else {
      console.log('-- Google Analytics Disabled for ' + window.location.hostname + ' --');
      window.ga = function () {
        console.log('GA', arguments);
      };
    }
  }

  render() {
    const {children, location} = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <script src="https://use.fontawesome.com/93839bed07.js" async/>
        </Helmet>
        <Navbar floating={location.pathname === '/'}/>
        <main role="main">
          {children()}
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
query MetadataQuery {
  site {
    siteMetadata {
      title
      author
    }
  }
}
`;
