import React from 'react';
import ChangelogListItem from "../components/changelog-list-item";
import DownloadButton from "../components/download-button";
import Link from "../components/link";

export default ({data: {markdownRemark: {frontmatter, html}}}) => (
  <article>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Insomnia v{frontmatter.slug}</h1>
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
);

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
