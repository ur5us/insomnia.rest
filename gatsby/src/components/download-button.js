import React from 'react';
import {links} from '../config';
import Link from './link';

const DownloadButton = ({children}) => {
  children = children || 'Get the App';

  let href = links.download;
  let platform = null;

  if (navigator.platform.toLowerCase().indexOf('mac') !== -1) {
    platform = 'Mac';
    href = '/download/#mac';
  } else if (navigator.platform.toLowerCase().indexOf('win') !== -1) {
    platform = 'Windows';
    href = '/download/#windows';
  } else if (navigator.platform.toLowerCase().indexOf('linux') !== -1) {
    platform = 'Linux';
    href = '/download/#ubuntu';
  }

  const message = children ? children : `Download for ${platform}`;

  return (
    <Link to={href} className="button">
      {message}
    </Link>
  );
};

export default DownloadButton
