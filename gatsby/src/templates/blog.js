import React from 'react';
import DownloadButton from '../components/download-button';
import Link from '../components/link';

export default ({data: {markdownRemark: {frontmatter, html}}}) => (
  <React.Fragment>
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
      <section className="section--bordered share">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
            </div>
          </div>
        </div>
      </section>
      <section className="comments">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {process.env.NODE_ENV === 'development' ? (
                'Hiding comments in dev mode'
              ) : (
                <div>
                  // Comments
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
    <section className="dark no-margin padding-bottom padding-top">
      <div className="container">
        <div className="row center">
          <div className="col-8">
            <p className="no-margin" style={{margin: '0.6rem'}}>
              Ready to speed up your API testing workflow?
            </p>
          </div>
          <div className="col-4">
            {/*{{partial "download-button"}}*/}
            <DownloadButton/>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
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
