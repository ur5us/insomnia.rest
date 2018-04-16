import React from 'react';
import Link from './link';

const ChangelogLink = ({children, frontmatter}) => (
  <Link to={`/changelog/${frontmatter.slug}`}>
    {children || frontmatter.title}
  </Link>
);

export default ChangelogLink
