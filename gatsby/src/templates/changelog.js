import React from 'react';
import ChangelogListItem from '../components/changelog-list-item';
import DownloadButton from '../components/download-button';
import Link from '../components/link';
import SocialCards from '../components/social-cards';


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
          <p className="subtle">
            Share this post &#128522; &#128640;
          </p>
          <div className="share-buttons">
            <a
              href="http://twitter.com/share?url={{ .Permalink | safeURL }}&text={{ .Title | safeURL }}&via={{ .Site.Params.twitter }}"
              onClick={e => {
                e.preventDefault();
                window.open(e.currentTarget.href, 'twitter-share', 'width=800,height=600');
              }}
              title="Share on Twitter"
              className="button--share button twitter">
              <i className="fa fa-twitter"/>
            </a>

            <a href="https://plus.google.com/share?url={{ .Permalink | safeURL }}"
               onClick={e => {
                 e.preventDefault();
                 window.open(e.currentTarget.href, 'google-plus-share');
               }}
               title="Share on Google+"
               className="button--share button google-plus">
              <i className="fa fa-google-plus"/>
            </a>

            <a href="http://reddit.com/submit?url={{ .Permalink | safeURL }}&title={{ .Title | safeURL }}"
               onClick={e => {
                 e.preventDefault();
                 window.open(e.currentTarget.href, 'reddit-share', 'width=900,height=600');
               }}
               title="Post to Reddit"
               className="button--share button reddit">
              <i className="fa fa-reddit"/>
            </a>

            <a href="http://www.facebook.com/sharer/sharer.php?u={{ .Permalink | safeURL }}"
               onClick={e => {
                 e.preventDefault();
                 window.open(e.currentTarget.href, 'facebook-share', 'width=800,height=600');
               }}
               title="Share on Facebook"
               className="button--share button facebook">
              <i className="fa fa-facebook"/>
            </a>

            <a
              href="http://www.stumbleupon.com/submit?url={{ .Permalink | safeURL }}&title={{ .Title | safeURL }}"
              onClick={e => {
                e.preventDefault();
                window.open(e.currentTarget.href, 'stumbleupon-share', 'width=800,height=600');
              }}
              title="Post to StumbleUpon"
              className="button--share button stumbleupon">
              <i className="fa fa-stumbleupon"/>
            </a>

            <a
              href="http://www.linkedin.com/shareArticle?url={{ .Permalink | safeURL }}&title={{ .Title | safeURL }}"
              onClick={e => {
                e.preventDefault();
                window.open(e.currentTarget.href, 'linkedin-share', 'width=800,height=600');
              }}
              title="Share on LinkedIn"
              className="button--share button linkedin">
              <i className="fa fa-linkedin"/>
            </a>

            <a href="mailto:?subject={{ .Title | safeURL }}"
               target="_blank"
               title="Share via email"
               onClick={e => {
                 e.preventDefault();
                 window.open(e.currentTarget.href, 'email-share', 'width=800,height=600');
               }}
               className="button--share button email">
              <i className="fa fa-envelope"/>
            </a>
          </div>
        </section>
        <section className="comments">
          <div className="container">
            <div id="disqus_thread">Loading comments...</div>
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
