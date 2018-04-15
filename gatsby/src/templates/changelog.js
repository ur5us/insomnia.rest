import React from 'react';
import ChangelogListItem from '../components/changelog-list-item';
import DownloadButton from '../components/download-button';
import Link from '../components/link';
import SocialCards from '../components/social-cards';
import ShareButtons from '../partials/share-buttons';
import Title from '../partials/title';


export default class BlogTemplate extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      const s = document.createElement('script');
      s.src = 'https://insomnia-rest.disqus.com/embed.js';
      s.setAttribute('data-timestamp', Date.now());
      document.body.appendChild(s);
    }
  }
  render () {
    const {data: {markdownRemark: {frontmatter, html}}} = this.props;
    const title = `Insomnia v${frontmatter.slug}`;
    const summary = `Release notes for version ${frontmatter.slug}`;
    return (
      <React.Fragment>
        <Title>{title}</Title>
        <article>
          <SocialCards title={title} summary={summary}/>
          <header>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>{title}</h1>
                  <div className="meta">
                    <time dateTime={frontmatter.date}>
                      {frontmatter.date}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="content container">
            <div className="row">
              <div className="col-12">
                {html
                  ? <p dangerouslySetInnerHTML={{__html: html}}/>
                  : <p>{`Version ${frontmatter.slug} is here!`}</p>
                }
                <p className="center">
                  <DownloadButton/>
                  {' '}
                  <Link to={`https://github.com/getinsomnia/insomnia/releases/v${frontmatter.slug}`}
                        className="button button--no-outline"
                        target="_blank">
                    View on GitHub
                  </Link>
                </p>
                {frontmatter.major && (
                  <React.Fragment>
                    <p><strong>Major Changes</strong></p>
                    <ul className="ul--decorated">
                      {frontmatter.major.map(c => (
                        <li key={c} className="li--major">
                          <ChangelogListItem text={c}/>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
                {frontmatter.fixes && (
                  <React.Fragment>
                    <p><strong>Bug Fixes</strong></p>
                    <ul className="ul--decorated">
                      {frontmatter.fixes.map(c => (
                        <li key={c} className="li--fix">
                          <ChangelogListItem text={c}/>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
                {frontmatter.minor && (
                  <React.Fragment>
                    <p><strong>Minor Tweaks</strong></p>
                    <ul className="ul--decorated">
                      {frontmatter.minor.map(c => (
                        <li key={c} className="li--minor">
                          <ChangelogListItem text={c}/>
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                )}
              </div>
            </div>
          </section>
        </article>
        <section className="section--bordered container share">
          <p>
            Share this post &#128522; &#128640;
          </p>
          <ShareButtons title={title}/>
        </section>
        <section className="comments">
          <div className="container">
            <div id="disqus_thread"/>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query ChangelogBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        major
        minor
        fixes
        link
        summary
      }
    }
  }
`;
