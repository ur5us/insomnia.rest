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
    url: '/pricing/'
  }, {
    name: 'Account',
    key: 'account',
    url: '/app/account/',
    loggedIn: true
  }, {
    name: 'Signup',
    key: 'signup',
    url: '/app/signup/',
    loggedIn: false,
  }],
  footer: [{
    name: 'Support',
    key: 'support',
    url: '/support/',
  }, {
    name: 'Slack',
    key: 'slack',
    url: 'https://chat.insomnia.rest'
  }, {
    name: 'GitHub',
    key: 'github',
    url: 'https://github.com/getinsomnia/insomnia'
  }, {
    name: 'Twitter',
    key: 'twitter',
    url: 'https://twitter.com/GetInsomnia'
  }, {
    name: 'Blog',
    key: 'blog',
    url: '/blog/'
  }, {
    name: 'Transparency',
    key: 'transparency',
    url: '/transparency/',
  }, {
    name: 'Changelog',
    key: 'changelog',
    url: '/changelog/',
  }, {
    name: 'Download',
    key: 'download',
    url: '/download/',
  }, {
    name: 'Terms',
    key: 'terms',
    url: '/terms/',
  }, {
    name: 'License',
    key: 'license',
    url: 'https://github.com/getinsomnia/insomnia/blob/develop/LICENSE'
  }]
};
