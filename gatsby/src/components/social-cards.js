import React from 'react';
import Helmet from 'react-helmet';
import {withPrefix} from 'gatsby-link';
import cardIconSrc from '../assets/card-icon.png';

export default ({title, summary}) => (
  <Helmet>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@GetInsomnia"/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={summary}/>
    <meta name="twitter:image" content={cardIconSrc}/>

    <meta property="og:type" content="article"/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={summary}/>
    <meta property="og:image" content={cardIconSrc}/>
  </Helmet>
);
