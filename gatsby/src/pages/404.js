import React from 'react';
import Link from '../components/link';

export default () => (
  <div className="row">
    <div className="col-12 center">
      <h1 className="post-title">
        Page Not Found
      </h1>
      <p>
        <Link to="/" className="button">Take me Home</Link>
      </p>
    </div>
  </div>
);
