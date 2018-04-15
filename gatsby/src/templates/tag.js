import React from 'react';
import DownloadButton from '../components/download-button';
import SocialCards from '../components/social-cards';
import ShareButtons from '../partials/share-buttons';
import Title from '../partials/title';
import {links} from '../config';
import BlogPostLink from '../components/blog-post-link';
import Link from '../components/link';

export default class TagTemplate extends React.Component {
  render() {
    const {data: {allMarkdownRemark: {edges}}, pathContext: {tag, count}} = this.props;
    return (
      <React.Fragment>
        <header className="header--big container">
          <h1>Blog Tag: <code>{tag}</code></h1>
          <p className="text-lg">{count} blog post{count === 1 ? '' : 's'}</p>
        </header>
        {edges
          .sort((a, b) => {
            const tsA = new Date(a.node.frontmatter.date_iso).getTime();
            const tsB = new Date(b.node.frontmatter.date_iso).getTime();
            return tsB - tsA;
          })
          .map(({node: {frontmatter, excerpt}}) => (
            <article key={frontmatter.slug} className="article--preview container">
              <header>
                <BlogPostLink frontmatter={frontmatter}>
                  <h1>{frontmatter.title}</h1>
                </BlogPostLink>
                <div className="meta">
                  <time dateTime={frontmatter.date}>
                    {frontmatter.date}
                  </time>
                  {frontmatter.series && frontmatter.series[0] && (
                    <React.Fragment>
                      &nbsp;–&nbsp;
                      <Link to={`/series/${frontmatter.series[0]}`}
                            title={`This post is part of the ${frontmatter.series[0]} series`}>
                        {frontmatter.series[0]}
                      </Link>
                    </React.Fragment>
                  )}
                </div>
              </header>
              <section>
                <div className="article--preview__content">
                  <p>{excerpt}</p>
                </div>
                <div className="article--preview__footer">
                  <div className="tags">
                    {(frontmatter.tags || []).map(tag => (
                      <Link key={tag} className="button tags__tag" to={`/tags/${tag}`}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="article--preview__read-more">
                    <BlogPostLink frontmatter={frontmatter}>
                      Continue Reading &raquo;
                    </BlogPostLink>
                  </div>
                </div>
                <div className="article--preview__separator"/>
              </section>
            </article>
          ))}
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
      edges {
        node {
          excerpt(pruneLength: 240)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            date_iso: date
            tags
            series
            slug
            title
          }
        }
      }
    }
  }
`;
