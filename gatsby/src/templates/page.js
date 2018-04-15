import React from 'react';
import Title from '../partials/title';
import Contributors from '../partials/contributors';

export default ({data: {markdownRemark: {frontmatter, html}}}) => (
  <React.Fragment>
    <Title>{frontmatter.title}</Title>
    <article>
      <header className="container header--big">
        <div className="row">
          <div className="col-12">
            <h1>{frontmatter.title}</h1>
            {frontmatter.subTitle && (
              <p className="text-lg">{frontmatter.subTitle}</p>
            )}
          </div>
        </div>
      </header>
      {frontmatter.series && frontmatter.series.length && (
        <section className="container">
          <div className="row">
            <div className="col-12">
              <p className="notice">
                This post is part of the&nbsp;
                <a href="{{ $.Site.BaseURL }}series/{{ index . 0 | urlize }}">
                  {frontmatter.series[0]}
                </a> series
              </p>
            </div>
          </div>
        </section>
      )}
      <section className="content container">
        <div className="row">
          <div className="col-12" dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      </section>
    </article>
    <Contributors/>
  </React.Fragment>
);

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        subTitle
      }
    }
  }
`;
