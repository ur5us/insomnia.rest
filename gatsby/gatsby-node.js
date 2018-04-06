const path = require('path');

module.exports.onCreateNode = ({node, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators;

  // Add slug to Node so we can query on it
  if (node.internal.type === 'MarkdownRemark') {
    // console.log('__NODE', node);
    createNodeField({
      node,
      name: 'slug',
      value: node.frontmatter.slug,
    });
  }
};

module.exports.createPages = async function (data) {
  const {graphql, boundActionCreators} = data;
  const {createPage} = boundActionCreators;
  const templateBlogPost = path.resolve('./src/templates/blog.js');
  const templateChangelog = path.resolve('./src/templates/changelog.js');
  const templatePage = path.resolve('./src/templates/page.js');

  const result = await graphql(`
    {
      allFile(filter: {sourceInstanceName: {regex: "/blog|changelog|page/"}}) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                date_iso: date
                slug
                series
                tags
                title
                major
                minor
                fixes
                link
                summary
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log('ERROR:', JSON.stringify(result.errors, null, 2));
    process.exit(1);
  }

  // Create blog posts pages.
  for (const edge of result.data.allFile.edges) {
    const {frontmatter} = edge.node.childMarkdownRemark;
    let urlPath;
    let template = templatePage;
    if (edge.node.sourceInstanceName === 'blog') {
      urlPath = `/blog/${frontmatter.slug}`;
      template = templateBlogPost;
    } else if (edge.node.sourceInstanceName === 'changelog') {
      urlPath = `/changelog/${frontmatter.slug}`;
      template = templateChangelog;
    } else if (edge.node.sourceInstanceName === 'page') {
      urlPath = `/${frontmatter.slug}`;
      template = templatePage;
    }

    // console.log('Added page', urlPath, frontmatter.title);

    createPage({
      path: frontmatter.url || urlPath,
      component: template,
      context: {
        // So we can use the $slug variable in GraphQL queries
        slug: frontmatter.slug || ''
      },
    })
  }
};
