import React from 'react';
import classnames from 'classnames';
import Link from '../components/link';
import DownloadButton from '../components/download-button';
import {site, menus} from '../config';
import iconSrc from '../assets/icon-small.png';

class Navbar extends React.Component {
  static defaultProps = {
    floating: false,
    loggedIn: false
  };

  render () {
    const {floating, loggedIn} = this.props;
    return (
      <nav className={classnames('navbar', {
        'navbar--floating': floating
      })}>
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
                {menus.main.map(item => (
                  <li key={item.key} data-menu-item={item.key}>
                    {!item.loggedIn || (item.loggedIn && loggedIn) ? (
                      <Link to={item.url}>{item.name}</Link>
                    ) : null}
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

export default Navbar
