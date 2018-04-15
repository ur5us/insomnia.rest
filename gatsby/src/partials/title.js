import React from 'react';
import Helmet from 'react-helmet';
import {site as config} from '../config';

const Title = ({children}) => (
  <Helmet>
    {children ? (
      <title>{children} | {config.name}</title>
    ) : (
      <title>{config.name}</title>
    )}
  </Helmet>
);

export default Title;
