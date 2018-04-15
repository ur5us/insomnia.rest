import React from 'react';
import DownloadButton from '../components/download-button';
import SocialCards from '../components/social-cards';
import Contributors from '../partials/contributors';
import Img from 'gatsby-image';

export default ({data}) => (
  <React.Fragment>
    {console.log('DATA', data)}
    <SocialCards title="Insomnia" summary="Debug APIs like a human, not a robot" isBanner />
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
                Powerful HTTP toolbelt, in one intuitive app
              </h2>
              <p className="text-lg" style={{maxWidth: '35rem', margin: 'auto'}}>
                <strong>Free</strong> and <strong>open source</strong> on Mac, Windows, and Linux
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 padding-top-lg">
              <div className="img--promo">
                <Img sizes={data.templateImg.childImageSharp.sizes} alt="Request Templating"/>
              </div>
              <h3>Create HTTP requests</h3>
              <p>
                Specify URL, payload, headers, and authorization all in one place. Then
                just hit send.
              </p>
            </div>
            <div className="col-4 padding-top-lg">
              <div className="img--promo">
                <Img sizes={data.responsesImg.childImageSharp.sizes} alt="Response Details"/>
              </div>
              <h3>View entire transaction</h3>
              <p>
                Get all the details on every response. View status code, body,
                headers, cookies, and more!
              </p>
            </div>
            <div className="col-4 padding-top-lg">
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
              <h2 className="text-xxl">Get more done, faster</h2>
              <p className="text-lg" style={{maxWidth: '35rem', margin: 'auto'}}>
                Insomnia is more than <i>just</i> an HTTP client
                <br/>
                <br/>
                <DownloadButton/>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="no-margin padding-top-lg padding-bottom-lg">
        <div className="container">
          <div className="row row-center-y">
            <div className="col-5">
              <h3 className="text-xl">Never repeat yourself</h3>
              <p>
                <strong>Reuse common values</strong> like API keys or
                session IDs. Define environment variables globally or
                switch between sub-environments for a seamless
                development/production workflow.
              </p>
            </div>
            <div className="col-7">
              <Img sizes={data.environmentsImg.childImageSharp.sizes} alt="Environments"/>
            </div>
          </div>
          <div className="row row-center-y padding-top-lg">
            <div className="col-5">
              <h3 className="text-xl">Write less code</h3>
              <p>
                <strong>Generate code snippets</strong> for over thirty
                language libraries, including Curl, NodeJS, Go, Swift,
                Python, Java, C, and others.
              </p>
            </div>
            <div className="col-7">
              <Img sizes={data.codeImg.childImageSharp.sizes} alt="Code Generation"/>
            </div>
          </div>
          <div className="row row-center-y padding-top-lg">
            <div className="col-5">
              <h3 className="text-xl">Love the experience</h3>
              <p>
                <strong>Get started quickly</strong> with Insomnia's
                intuitive interface, and choose from nine unique color themes
                to tailor the experience to <i>you</i>.
              </p>
            </div>
            <div className="col-7">
              <Img sizes={data.themesImg.childImageSharp.sizes} alt="Color Themes"/>
            </div>
          </div>
        </div>
      </section>

      <section className="light no-margin padding-bottom-lg padding-top-lg">
        <div className="container center">
          <div className="row">
            <div className="col-12">
              <h2>Insomnia is for <i>everyone</i> &#10084;</h2>
              <p style={{maxWidth: '35rem', margin: 'auto'}} className="padding-bottom">
                Insomnia is collaborative, free,
                <a href="https://github.com/getinsomnia/insomnia">open source</a>, and
                cross-platform – making it the perfect companion for both individuals and teams.
              </p>
              <DownloadButton/>
              &nbsp;
              <a href="/teams" className="button button--no-outline">Learn About Teams</a>
            </div>
          </div>
        </div>
      </section>

      <section className="dark no-margin padding-bottom-lg padding-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <h2 className="text-xl">Still not convinced?</h2>
              <p>Maybe this big ol' list of features will help</p>
            </div>
          </div>
          <div className="row feature-list">
            <div className="col-6">
              <ul>
                <li>OAuth 2.0 authentication</li>
                <li>GraphQL editor</li>
                <li>Multipart form builder</li>
                <li>Query parameter builder</li>
                <li>SSL client certificates</li>
                <li>JSONPath and XPath</li>
                <li>Response history</li>
                <li>Data import/export</li>
                <li>Rendered HTML preview</li>
                <li>Image and SVG preview</li>
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
                <li>Request filtering</li>
                <li>Toggle SSL validation</li>
                <li>Keyboard shortcuts</li>
                <li>Usable at almost all sizes</li>
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
            <DownloadButton/>
          </div>
          <br/>
        </div>
      </section>
      <Contributors/>
    </main>
  </React.Fragment>
);

export const pageQuery = graphql`
  query GatsbyImageQuery {
    mainImg: file(relativePath: { eq: "screens/main.png" }) {
      childImageSharp { sizes(maxWidth: 880) { ...GatsbyImageSharpSizes_noBase64 } }
    }
    templateImg: file(relativePath: { eq: "screens/template.png" }) {
      childImageSharp { sizes(maxWidth: 880) { ...GatsbyImageSharpSizes_noBase64 } }
    }
    responsesImg: file(relativePath: { eq: "screens/responses.png" }) {
      childImageSharp { sizes(maxWidth: 500) { ...GatsbyImageSharpSizes_noBase64 } }
    }
    dragImg: file(relativePath: { eq: "screens/drag.png" }) {
      childImageSharp { sizes(maxWidth: 500) { ...GatsbyImageSharpSizes_noBase64 } }
    }
    environmentsImg: file(relativePath: { eq: "screens/big/environments.png" }) {
      childImageSharp { sizes(maxWidth: 500) { ...GatsbyImageSharpSizes_noBase64 } }
    }
    codeImg: file(relativePath: { eq: "screens/big/code.png" }) {
      childImageSharp { sizes(maxWidth: 500) { ...GatsbyImageSharpSizes_noBase64 } }
    }
    themesImg: file(relativePath: { eq: "screens/big/themes.png" }) {
      childImageSharp { sizes(maxWidth: 500) { ...GatsbyImageSharpSizes_noBase64 } }
    }
  }
`;
