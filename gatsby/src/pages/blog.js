import React from 'react';
import Link from '../components/link';

export default ({data: {allMarkdownRemark: {edges}}}) => (
  edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <article key={edge.node.id} className="article--preview container">
        <header className="row">
          <div className="col-12">
            <a href="{{ .Permalink }}">
              <h1>{edge.node.frontmatter.title}</h1>
            </a>
            <div className="meta">
              <time dateTime='{{ .Date.Format "02 January 2006" }}'>
                {edge.node.frontmatter.date}}
              </time>
              {edge.node.frontmatter.series && edge.node.frontmatter.series[0] && (
                <a href={`/series/${edge.node.frontmatter.series[0]}`}
                   title={`This post is part of the ${edge.node.frontmatter.series[0]} series`}>
                  {edge.node.frontmatter.series[0]}
                </a>
              )}
            </div>
          </div>
        </header>
        <section>
          <div className="row">
            <div className="col-12 article--preview__content">
              <p>{edge.node.excerpt}</p>
            </div>
          </div>
          <div className="row article--preview__footer">
            <div className="col-8">
              {(edge.node.frontmatter.tags || []).map(tag => (
                <Link key={tag} className="button tags__tag" to={`tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="col-4 article--preview__read-more">
              <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                Continue Reading &raquo;
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 article--preview__separator"/>
          </div>
        </section>
      </article>
    ))
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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
