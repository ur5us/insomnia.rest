const _ = require('lodash');
const path = require('path');

module.exports.onCreateNode = ({node, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators;

  // Add slug to Node so we can query on it
  if (node.internal.type === 'MarkdownRemark') {
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
  const blogPost = path.resolve('./src/templates/blog.js');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              series
              tags
              title
              slug
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
  for (const edge of result.data.allMarkdownRemark.edges) {
    // console.log('__NODE', edge);
    createPage({
      path: `/blog/${edge.node.frontmatter.slug}`,
      component: blogPost,
      context: {
        // So we can use the $slug variable in GraphQL queries
        slug: edge.node.frontmatter.slug
      },
    })
  }
};
