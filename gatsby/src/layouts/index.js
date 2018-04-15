import React from 'react';
import './simple-grid.min.css';
import './base.less';
import './index.less';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import Title from '../partials/title';

export default class extends React.Component {
  _updateBodyAttrs() {
    const {location} = this.props;
    document.body.setAttribute('data-pathname', location.pathname);
  }

  componentDidMount() {
    this._updateBodyAttrs();
  }

  componentDidUpdate() {
    this._updateBodyAttrs();
  }

  render() {
    const {children, location} = this.props;
    return (
      <React.Fragment>
        <Title/>
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
