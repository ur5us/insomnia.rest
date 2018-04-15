import React from 'react';
import Helmet from 'react-helmet';
import {withPrefix} from 'gatsby-link';

export default ({title, summary}) => (
  <Helmet>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@GetInsomnia"/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={summary}/>
    <meta name="twitter:image" content={withPrefix('/images/twitter-card-icon.png')}/>

    <meta property="og:type" content="article"/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={summary}/>
    <meta property="og:image" content={withPrefix('/images/twitter-card-icon.png')}/>
  </Helmet>
);
