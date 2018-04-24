import React from 'react';
import DownloadButton from '../components/download-button';
import SocialCards from '../components/social-cards';
import Img from 'gatsby-image';
import Link from '../components/link';
import Companies from '../partials/companies';
import Helmet from 'react-helmet';

export default ({data}) => (
  <React.Fragment>
    <Helmet>
      <body data-navbar="floating"/>
    </Helmet>
    <SocialCards title="Insomnia" summary="Debug APIs like a human, not a robot" isBanner/>
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <h1>
              Debug APIs like a <span className="jumbotron__undie">human</span>, not a robot
            </h1>
            <p className="font-light text-xl no-margin-bottom">
              Finally, a REST client you'll <i>love</i>
            </p>
            <DownloadButton/>
          </div>
        </div>
        <div className="jumbotron__img-container">
          <Img sizes={data.mainImg.childImageSharp.sizes} className="jumbotron__img" alt="Insomnia REST Client"/>
        </div>
      </div>
    </div>
    <main role="main">
      <section className="no-margin padding-top-lg padding-bottom-lg">
        <div className="container center">
          <div className="row">
            <div className="col-12">
              <h2 className="text-xxl">
                Powerful HTTP and GraphQL tool belt
              </h2>
              <p className="text-lg" style={{maxWidth: '35rem', margin: 'auto'}}>
                <strong>Free</strong> and <strong>open source</strong> on Mac, Windows, and Linux
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 padding-top">
              <div className="img--promo">
                <Img sizes={data.templateImg.childImageSharp.sizes} alt="Request Templating"/>
              </div>
              <h3>Create HTTP requests</h3>
              <p>
                Specify URL, payload, headers, and authorization all in one place. Then
                just hit send.
              </p>
            </div>
            <div className="col-4 padding-top">
              <div className="img--promo">
                <Img sizes={data.responsesImg.childImageSharp.sizes} alt="Response Details"/>
              </div>
              <h3>View entire transaction</h3>
              <p>
                Get all the details on every response. View status code, body,
                headers, cookies, and more!
              </p>
            </div>
            <div className="col-4 padding-top">
              <div className="img--promo">
                <Img sizes={data.dragImg.childImageSharp.sizes} alt="Request Organization"/>
              </div>
              <h3>Organize everything</h3>
              <p>
                Create workspaces or folders, drag-and-drop requests, and easily
                import and export your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark no-margin padding-bottom-lg padding-top-lg">
        <div className="container center">
          <div className="row">
            <div className="col-12">
              <h2 className="text-xxl">
                Much more than an HTTP client
              </h2>
              <p className="text-lg" style={{maxWidth: '35rem', margin: 'auto'}}>
                Advanced authentication helpers, templating, and request chaining help
                get things done faster.
                <br/>
                <br/>
                <DownloadButton className="button--big"/>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="no-margin padding-top-lg padding-bottom-lg">
        <div className="container">
          <div className="row row-center-y">
            <div className="col-5">
              <h3 className="text-xl">Reusable Values</h3>
              <p>
                Reuse API keys or session IDs. <strong>Define environment
                variables</strong> globally or switch between sub-environments for a seamless
                development/production workflow.
              </p>
            </div>
            <div className="col-7">
              <Img sizes={data.environmentsImg.childImageSharp.sizes} alt="Environments"/>
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-5">
              <h3 className="text-xl">Code Snippet Generation</h3>
              <p>
                Generate http code for <strong>over thirty
                language libraries</strong>, including Curl, NodeJS, Go, Swift,
                Python, Java, C, and others.
              </p>
            </div>
            <div className="col-7">
              <Img sizes={data.codeImg.childImageSharp.sizes} alt="Code Generation"/>
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-5">
              <h3 className="text-xl">Beautiful Interface</h3>
              <p>
                Get started quickly with Insomnia's
                intuitive interface, and choose from <strong>nine unique
                themes</strong> to tailor the experience to <i>you</i>.
              </p>
            </div>
            <div className="col-7">
              <Img sizes={data.themesImg.childImageSharp.sizes} alt="Color Themes"/>
            </div>
          </div>
        </div>
      </section>
      <section className="dark no-margin padding-bottom padding-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <h2>More than 300,000 developers trust Insomnia</h2>
              <div className="padding-top">
                <Companies/>
                <br/>
                <br/>
                <DownloadButton className="button--big">
                  Download App
                </DownloadButton>
                &nbsp;&nbsp;
                <Link to="/teams" className="button button--big button--no-outline">
                  Team Edition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark no-margin padding-bottom-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <div className="subtle padding-top padding-bottom">&#9675;</div>
              <div className="subtle padding-top padding-bottom">&#9675;</div>
              <div className="subtle padding-top padding-bottom">&#9675;</div>
              <div className="subtle padding-top padding-bottom">&#9675;</div>
              <div className="subtle padding-top padding-bottom">&#9675;</div>
              <div className="subtle padding-top padding-bottom">&#9675;</div>
              <div className="subtle padding-top padding-bottom">&#9675;</div>
              <br/>
              <h2 className="text-xl">Still not convinced?</h2>
              <p>Maybe this big ol' list of features will help</p>
            </div>
          </div>
          <div className="row feature-list">
            <div className="col-6">
              <ul>
                <li><Link to="/graphql/">GraphQL</Link> support</li>
                <li>OAuth 1.0 and 2.0 auth</li>
                <li>Multipart form builder</li>
                <li>Query parameter builder</li>
                <li>Plugin System</li>
                <li>SSL client certificates</li>
                <li>JSONPath and XPath</li>
                <li>Response history</li>
                <li>Data import/export</li>
                <li>Rendered HTML preview</li>
                <li>Image and SVG preview</li>
                <li>AWS authentication</li>
                <li>Configurable proxy</li>
                <li>Color themes</li>
                <li>Cloud sync and sharing</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Import from <code style={{color: '#333'}}>curl</code></li>
                <li>Digest, Basic, NTLM Auth</li>
                <li>Nunjucks templating</li>
                <li>Configurable timeout</li>
                <li>HAR import</li>
                <li>Swagger import</li>
                <li>Request filtering</li>
                <li>Toggle SSL validation</li>
                <li>Keyboard shortcuts</li>
                <li>Usable at almost all sizes</li>
                <li>NTLM authentication</li>
                <li>Responsive interface</li>
                <li>Autocomplete Hints</li>
                <li>Redirect chain visualization</li>
                <li>Mac, Windows and Linux</li>
              </ul>
            </div>
          </div>
          <br/>
          <div className="center">
            <p>Go on, give it a try. You won't regret it.</p>
            <br/>
            <DownloadButton className="button--big"/>
          </div>
          <br/>
        </div>
      </section>
    </main>
  </React.Fragment>
);

export const pageQuery = graphql`
  query GatsbyImageQuery {
    mainImg: file(relativePath: { eq: "screens/main.png" }) {
      childImageSharp { sizes(maxWidth: 880) { ...GatsbyImageSharpSizes_withWebp } }
    }
    templateImg: file(relativePath: { eq: "screens/template.png" }) {
      childImageSharp { sizes(maxWidth: 250) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
    responsesImg: file(relativePath: { eq: "screens/responses.png" }) {
      childImageSharp { sizes(maxWidth: 250) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
    dragImg: file(relativePath: { eq: "screens/drag.png" }) {
      childImageSharp { sizes(maxWidth: 250) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
    environmentsImg: file(relativePath: { eq: "screens/big/environments.png" }) {
      childImageSharp { sizes(maxWidth: 400) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
    codeImg: file(relativePath: { eq: "screens/big/code.png" }) {
      childImageSharp { sizes(maxWidth: 400) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
    themesImg: file(relativePath: { eq: "screens/big/themes.png" }) {
      childImageSharp { sizes(maxWidth: 400) { ...GatsbyImageSharpSizes_withWebp_tracedSVG } }
    }
  }
`;
