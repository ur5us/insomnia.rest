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

export default class extends React.Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    this.setState({ isLoggedIn: isLoggedIn() });
  }

  render() {
    const { children, location } = this.props;
    const { isLoggedIn } = this.state;
    return (
      <React.Fragment>
        <Title/>
        <Helmet>
          <meta name="description" content={site.description}/>
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
