import React from 'react';
import Link from '../components/link';

export default ({data: {allBlogSeries: {edges}}}) => (
  <React.Fragment>
    <header className="container">
      <h1>Blog Post Series</h1>
    </header>
    <article className="container">
      {edges
        .map(({node: {series, count}}) => (
          <Link key={series} className="button tags__tag" to={`/series/${series}/`}>
            {series} ({count})
          </Link>
        ))}
      <footer>
        <Link to="/blog/">&laquo; All Blog Posts</Link>
      </footer>
    </article>
  </React.Fragment>
);

export const pageQuery = graphql`
  query SeriesQuery {
    allBlogSeries {
      edges {
        node {
          series
          count
        }
      }
    }
  }
`;
