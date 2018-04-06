import React from 'react';
import Link from './link';

const BlogPostLink = ({children, frontmatter}) => (
  <Link to={`/blog/${frontmatter.slug}`}>
    {children || frontmatter.title}
  </Link>
);

export default BlogPostLink
