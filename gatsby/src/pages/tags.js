import React from 'react';
import Link from '../components/link';

export default ({data: {allBlogTag: {edges}}}) => (
  <React.Fragment>
    <header className="container">
      <h1>Blog Post Tags</h1>
    </header>
    <article className="container">
      {edges
        .map(({node: {tag, count}}) => (
          <Link key={tag} className="button tags__tag" to={`/tags/${tag}/`}>
            {tag} ({count})
          </Link>
        ))}
      <footer>
        <Link to="/blog/">&laquo; All Blog Posts</Link>
      </footer>
    </article>
  </React.Fragment>
);

export const pageQuery = graphql`
  query TagsQuery {
    allBlogTag {
      edges {
        node {
          tag
          count
        }
      }
    }
  }
`;
