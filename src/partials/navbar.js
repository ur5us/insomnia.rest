import React from 'react';
import Link from '../components/link';
import DownloadButton from '../components/download-button';
import {site, menus} from '../config';
import iconSrc from '../assets/icon.svg';

class Navbar extends React.Component {
  static defaultProps = {
    loggedIn: false
  };

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-12 navbar__container">
              <Link to="/" className="navbar__icon">
                <img src={iconSrc} alt="Insomnia REST Client"/>
              </Link>
              <Link to="/" className="navbar__title">
                <h1>{site.shortName}</h1>
              </Link>

              <ul className="navbar__items">
                {menus.main.filter(({loggedIn}) => {
                  if (typeof loggedIn !== 'boolean') {
                    return true;
                  }

                  return loggedIn === this.props.loggedIn;
                }).map(item => (
                  <li key={item.key} data-menu-item={item.key}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
                <li data-menu-item="download">
                  <div><DownloadButton>Download</DownloadButton></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
