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
import {parse as urlParse } from  'url';

export default class extends React.Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    this.setState({ isLoggedIn: isLoggedIn() });
    const url = urlParse(document.location.href, true);

    if (url.query && url.query.ref) {
      localStorage.signupSource = url.query.ref;
    } else if (!localStorage.signupSourcee && document.referrer) {
      localStorage.signupSource = document.referrer;
    }
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
