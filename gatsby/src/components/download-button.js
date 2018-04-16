import React from 'react';
import {links} from '../config';
import Link from './link';

class DownloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: '__UNSET__'
    };
  }

  componentDidMount() {
    this.setState({
      platform: navigator.platform.toLowerCase()
    });
  }

  render() {
    const {platform} = this.state;

    let href = links.download;

    let platformName = 'Desktop';
    if (platform.indexOf('mac') !== -1) {
      platformName = 'Mac';
      href = '/download/#mac';
    } else if (platform.indexOf('win') !== -1) {
      platformName = 'Windows';
      href = '/download/#windows';
    } else if (platform.indexOf('linux') !== -1) {
      platformName = 'Linux';
      href = '/download/#ubuntu';
    }

    const message = this.props.children || `Download for ${platformName}`;

    return (
      <Link to={href} className="button">
        {message}
      </Link>
    );
  }
}

export default DownloadButton
