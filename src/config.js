export const site = {
  shortName: 'Insomnia',
  name: 'Insomnia REST Client',
  description: 'Insomnia is a cross-platform GraphQL and REST client, available for Mac, Windows, and Linux',
  copyright: 'Floating Keyboard Software Inc.',
  copyrightURL: 'https://floatingkeyboard.com'
};

export const links = {
  download: '/download',
  rss: '/blog/index.xml'
};

export const menus = {
  main: [
    {
      name: 'Docs',
      key: 'docs',
      url: 'https://support.insomnia.rest'
    }, {
      name: 'Store',
      key: 'store',
      url: 'https://store.insomnia.rest'
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
    }
  ],
  footer: [
    {
      name: 'Store',
      key: 'store',
      url: 'https://store.insomnia.rest'
    }, {
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
      name: 'Changelog',
      key: 'changelog',
      url: '/changelog/',
    }, {
      name: 'Open',
      key: 'open',
      url: '/open/',
    }, {
      name: 'Terms',
      key: 'terms',
      url: '/terms/',
    }, {
      name: 'Privacy',
      key: 'privacy',
      url: '/privacy/',
    }
  ]
};
