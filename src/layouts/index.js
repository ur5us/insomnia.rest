import React from 'react';
import Helmet from 'react-helmet';
import './simple-grid.min.css';
import './base.less';
import './index.less';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import Title from '../partials/title';
import { isLoggedIn } from '../lib/session';
import { site } from '../config';
import { parse as urlParse } from 'url';

export default class extends React.Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    this.setState({ isLoggedIn: isLoggedIn() });
    this.trackSignupSource();
  }

  trackSignupSource() {
    const url = urlParse(document.location.href, true);

    const src = url.query.ref || document.referrer;

    if (!src) {
      return;
    }

    // Don't track self-referrals
    if (src.indexOf('https://insomnia.rest') === 0) {
      return;
    }

    // Always keep the original source
    if (localStorage.signupSource) {
      return;
    }

    localStorage.signupSource = src;
  }

  render() {
    const { children, location } = this.props;
    const { isLoggedIn } = this.state;
    return (
      <React.Fragment>
        <Title/>
        <Helmet>
          <meta name="description" content={site && site.description}/>
          <body data-pathname={location.pathname}/>
        </Helmet>
        <Navbar loggedIn={isLoggedIn}/>
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
