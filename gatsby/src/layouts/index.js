import React from 'react';
import './simple-grid.min.css';
import './base.less';
import './index.less';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import Title from '../partials/title';
import {isLoggedIn} from '../lib/session';

export default class extends React.Component {
  state = {
    isLoggedIn: false
  };

  _updateBodyAttrs() {
    const {location} = this.props;
    document.body.setAttribute('data-pathname', location.pathname);
  }

  componentDidMount() {
    this._updateBodyAttrs();
    this.setState({isLoggedIn: isLoggedIn()})
  }

  componentDidUpdate() {
    this._updateBodyAttrs();
  }

  render() {
    const {children, location} = this.props;
    const {isLoggedIn} = this.state;
    return (
      <React.Fragment>
        <Title/>
        <Navbar
          loggedIn={isLoggedIn}
          floating={location.pathname.match(/^\/(|plus|teams)\/?$/)}
        />
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
