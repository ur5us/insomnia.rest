import React from 'react';
import DownloadButton from '../components/download-button';
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

  render() {
    const {data: {markdownRemark: {frontmatter, html, excerpt}}} = this.props;
    return (
      <React.Fragment>
        <Title>{frontmatter.title}</Title>
        <SocialCards title={frontmatter.title} summary={excerpt}/>
        <article>
          <header className="container">
            <h1>{frontmatter.title}</h1>
            {frontmatter.subtitle && (
              <p className="text-lg">{frontmatter.subtitle}</p>
            )}
            {frontmatter.date && (
              <div className="meta">
                <time dateTime={frontmatter.date}>
                  {frontmatter.date}
                </time>
              </div>
            )}
          </header>
          {frontmatter.series && frontmatter.series.length && (
            <section className="container">
              <p className="notice">
                This post is part of the&nbsp;
                <a href={`/series/${frontmatter.series[0]}`}>
                  {frontmatter.series[0]}
                </a> series
              </p>
            </section>
          )}
          <section className="content container" dangerouslySetInnerHTML={{__html: html}}/>
          <section className="section--bordered container share">
            <p>
              Share this post &#128522; &#128640;
            </p>
            <ShareButtons title={frontmatter.title}/>
          </section>
        </article>
        <section className="comments">
          <div className="container">
            <div id="disqus_thread"/>
          </div>
        </section>
        <section className="dark no-margin padding-bottom padding-top">
          <div className="container">
            <div className="row center">
              <div className="col-8">
                <p className="no-margin" style={{margin: '0.6rem'}}>
                  Need a better way to test APIs?
                </p>
              </div>
              <div className="col-4">
                <DownloadButton>
                  Try Insomnia
                </DownloadButton>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      excerpt(pruneLength: 240)
      frontmatter {
        title
        slug
        series
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
