import React from 'react';

export default ({data: {markdownRemark: {frontmatter, html}}}) => (
  <article>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{frontmatter.title}</h1>
            {/*{{if isset.Params "subtitle"}}*/}
            {/*<p className="text-lg">{{.Params.subtitle}}</p>*/}
            {/*{{end}}*/}
            <div className="meta">
              {/*{{if not.Date.IsZero}}*/}
              <time dateTime='{{ .Date.Format "January 2, 2006" }}'>
                {frontmatter.date}
              </time>
              {/*{{end}}*/}
            </div>
          </div>
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
);

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
