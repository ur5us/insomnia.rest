import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from '../components/link';
import Companies from '../partials/companies';
import DownloadButton from '../components/download-button';
import Title from '../partials/title';

export default ({data: {mainImg, errorsImg, autocompleteImg, variablesImg}}) => (
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
          <Img sizes={mainImg.childImageSharp.sizes} className="jumbotron__img" alt="Insomnia GraphQL IDE"/>
        </div>
      </div>
    </div>
    <section className="center padding-bottom-lg padding-top no-margin">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-xxl">
              GraphQL and Beyond 🚀
            </h2>
            <p className="text-lg">
              GraphQL <strong>autocomplete</strong> and <strong>linting</strong> plus
              Insomnia's HTTP tool belt
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 padding-top">
            <div className="img--promo">
              <Img sizes={autocompleteImg.childImageSharp.sizes} alt="GraphQL Autocomplete"/>
            </div>
            <h3>Query Completion</h3>
            <p>
              Autocomplete of field names and arguments makes constructing GraphQL queries
              a breeze.
            </p>
          </div>
          <div className="col-4 padding-top">
            <div className="img--promo">
              <Img sizes={errorsImg.childImageSharp.sizes} alt="GraphQL Error Checking"/>
            </div>
            <h3>Error Checking</h3>
            <p>
              Schema-based error checking prevents you from making mistakes before you even realize it.
            </p>
          </div>
          <div className="col-4 padding-top">
            <div className="img--promo">
              <Img sizes={variablesImg.childImageSharp.sizes} alt="GraphQL with Insomnia's Features"/>
            </div>
            <h3>Advanced Features</h3>
            <p>
              Insomnia's existing features like template tags, environments, and plugins improve productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="light no-margin">
      <div className="container">
        <div className="row padding-top padding-bottom-lg">
          <div className="col-12 center">
            <div style={{width: '5rem', margin: '0 auto 2rem auto'}}>
              {graphql}
            </div>
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

const graphql = (
  <svg viewBox="0 0 400 400" width="100%" height="100%">
    <rect x="122" y="-0.4" transform="matrix(-0.866 -0.5 0.5 -0.866 163.3196 363.3136)" fill="#E535AB"
          width="16.6" height="320.3"/>
    <rect x="39.8" y="272.2" fill="#E535AB" width="320.3" height="16.6"/>
    <rect x="37.9" y="312.2" transform="matrix(-0.866 -0.5 0.5 -0.866 83.0693 663.3409)" fill="#E535AB"
          width="185" height="16.6"/>
    <rect x="177.1" y="71.1" transform="matrix(-0.866 -0.5 0.5 -0.866 463.3409 283.0693)" fill="#E535AB"
          width="185" height="16.6"/>
    <rect x="122.1" y="-13" transform="matrix(-0.5 -0.866 0.866 -0.5 126.7903 232.1221)" fill="#E535AB"
          width="16.6" height="185"/>
    <rect x="109.6" y="151.6" transform="matrix(-0.5 -0.866 0.866 -0.5 266.0828 473.3766)" fill="#E535AB"
          width="320.3" height="16.6"/>
    <rect x="52.5" y="107.5" fill="#E535AB" width="16.6" height="185"/>
    <rect x="330.9" y="107.5" fill="#E535AB" width="16.6" height="185"/>
    <rect x="262.4" y="240.1" transform="matrix(-0.5 -0.866 0.866 -0.5 126.7953 714.2875)" fill="#E535AB"
          width="14.5" height="160.9"/>
    <path fill="#E535AB" d="M369.5,297.9c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C373.5,259.9,379.2,281.2,369.5,297.9"/>
    <path fill="#E535AB" d="M90.9,137c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C94.8,99,100.5,120.3,90.9,137"/>
    <path fill="#E535AB" d="M30.5,297.9c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C61.4,320.3,40.1,314.6,30.5,297.9"/>
    <path fill="#E535AB" d="M309.1,137c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C340.1,159.4,318.7,153.7,309.1,137"/>
    <path fill="#E535AB" d="M200,395.8c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,380.1,219.3,395.8,200,395.8"/>
    <path fill="#E535AB" d="M200,74c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,58.4,219.3,74,200,74"/>
  </svg>
);

export const pageQuery = graphql`
  query GraphQLImageQuery {
    mainImg: file(relativePath: { eq: "screens/graphql.png" }) {
      childImageSharp { sizes(maxWidth: 880) { ...GatsbyImageSharpSizes_withWebp } }
    }
    autocompleteImg: file(relativePath: { eq: "screens/graphql-autocomplete.png" }) {
      childImageSharp { sizes(maxWidth: 250) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
    errorsImg: file(relativePath: { eq: "screens/graphql-errors.png" }) {
      childImageSharp { sizes(maxWidth: 250) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
    variablesImg: file(relativePath: { eq: "screens/graphql-variables.png" }) {
      childImageSharp { sizes(maxWidth: 250) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
  }
`;
