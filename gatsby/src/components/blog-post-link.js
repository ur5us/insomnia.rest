import React from 'react';
import Link from './link';

const BlogPostLink = ({post}) => (
  <Link to={`/blog/${post.frontmatter.slug}`}>
    {post.frontmatter.title} ({post.frontmatter.date})
  </Link>
);

export default BlogPostLink
