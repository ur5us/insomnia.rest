import React from 'react';
import SocialCards from '../components/social-cards';

export default () => (
  <article>
    <SocialCards title="Insomnia" summary="Download the Insomnia app" isBanner />
    <header className="container header--big">
      <div className="row">
        <div className="col-12">
          <h1>Download Insomnia</h1>
          <p className="text-lg">
            So you can finally <code>GET</code> some <code>REST</code> 😴
          </p>
        </div>
      </div>
    </header>
    <section className="container">
      <div className="row center">
        <div className="col-4 platform-download">
          <i className="fa fa-apple platform-download__icon bg-mac"/>
          <p>
            <a href="https://builds.insomnia.rest/downloads/mac/latest"
               data-ga="Download:Mac"
               onClick={onClickDownload}
               className="button">
              <i className="fa fa-download"/>
              {' '}
              OS X 10.9+
            </a>
          </p>
          <p className="subtle small" style={{maxWidth: '12rem', margin: 'auto'}}>
            or <code>brew cask install insomnia</code>
          </p>
        </div>
        <div className="col-4 platform-download">
          <i className="fa fa-windows platform-download__icon bg-windows"/>
          <p>
            <a href="https://builds.insomnia.rest/downloads/windows/latest"
               data-ga="Download:Windows"
               onClick={onClickDownload}
               className="button">
              <i className="fa fa-download"/>
              {' '}
              Windows 7+
            </a>
          </p>
          <p className="subtle small" style={{maxWidth: '12rem', margin: 'auto'}}>
            (64-bit only)
          </p>
        </div>
        <div className="col-4 platform-download">
          <i className="fa fa-linux platform-download__icon bg-linux"/>
          <p>
            <a href="https://support.insomnia.rest/article/23-installation#ubuntu"
               data-ga="Download:Linux:Ubuntu"
               onClick={onClickDownload}
               className="button">
              <i className="fa fa-download"/>
              {' '}
              Ubuntu 14.04+
            </a>
          </p>
          <p className="subtle small" style={{maxWidth: '12rem', margin: 'auto'}}>
            or
            {' '}
            <a href="https://support.insomnia.rest/article/23-installation#linux"
               onClick={onClickDownload}
               data-ga="Download:Linux:AUR">
              Other Linux Distros
            </a>
          </p>
        </div>
      </div>
      <div className="row center">
        <div className="col-12">
          <hr/>
        </div>
      </div>
      <div className="row center">
        <div className="col-3">
        </div>
        <div className="col-6">
          <h2>Thanks for choosing Insomnia</h2>
          <p>
            Help out by spreading the word &#128522;
          </p>
          <a title="Share on Twitter"
             href="http://twitter.com/share?url=https://insomnia.rest&text=I+just+downloaded+Insomnia+REST+Client&via=GetInsomnia&"
             onClick={e => {
               e.preventDefault();
               window.open(e.currentTarget.href, 'twitter-share', 'width=800,height=600');
             }}
             className="button--share button twitter">
            <i className="fa fa-twitter"/>
          </a>
          <a title="Share on Facebook"
             href="http://www.facebook.com/sharer/sharer.php?u=https://insomnia.rest&"
             onClick={e => {
               e.preventDefault();
               window.open(e.currentTarget.href, 'facebook-share', 'width=800,height=600');
             }}
             className="button--share button facebook">
            <i className="fa fa-facebook"/>
          </a>
        </div>
      </div>
    </section>
  </article>
);

function onClickDownload (e) {
  const args = e.currentTarget.getAttribute('data-ga').split(':');
  ga('send', 'event', args[0], args[1], args[2]);
}
