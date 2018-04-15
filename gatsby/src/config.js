export const site = {
  shortName: 'Insomnia',
  name: 'Insomnia REST Client',
  copyright: 'Floating Keyboard Software',
  copyrightURL: 'https://floatingkeyboard.com',
  stripePubKey: process.env.NODE_ENV === 'production'
    ? 'pk_live_lntbVSXY3v1RAytACIQJ5BBH'
    : 'pk_test_MbOhGu5jCPvr7Jt4VC6oySdH'
};

export const links = {
  download: '/download',
  rss: '/blog/index.xml'
};

export const menus = {
  main: [{
    name: 'Docs',
    key: 'docs',
    url: 'https://support.insomnia.rest'
  }, {
    name: 'Pricing',
    key: 'pricing',
    url: '/pricing'
  }, {
    name: 'Blog',
    key: 'blog',
    url: '/blog'
  }, {
    name: 'GitHub',
    key: 'github',
    url: 'https://github.com/getinsomnia/insomnia'
  }, {
    name: 'Account',
    key: 'account',
    url: '/app/account',
    loggedIn: true
  }, {
    name: 'Signup',
    key: 'signup',
    url: '/app/signup',
  }],
  footer: [{
    name: 'Contact',
    key: 'support',
    url: '/support',
  }, {
    name: 'Transparency',
    key: 'transparency',
    url: '/transparency',
  }, {
    name: 'Changelog',
    key: 'changelog',
    url: '/changelog',
  }, {
    name: 'Terms',
    key: 'terms',
    url: '/terms',
  }, {
    name: 'License',
    key: 'license',
    url: 'https://github.com/getinsomnia/insomnia/blob/develop/LICENSE'
  }]
};
