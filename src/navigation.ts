import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },

    {
      text: 'Method',
      href: getPermalink('/method'),
    },
    {
      text: 'Start',
      href: getPermalink('/start'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'TL;DR',
      href: getPermalink('/tldr'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/Services' },
        { text: 'The Method', href: '/method' },
        { text: 'Start', href: '/start' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'General Development', href: '/services#development-packages' },
        { text: 'MVP in 10 weeks', href: '/services#MVP' },
        { text: 'Technical Advisor', href: '/services#development-packages' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/careers' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/augmented-devs/' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/augmented-developers' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://augmented-devs.com/assets/icons/favicon-32x32.png)]"></span>
    Augmented Developers is service by <a class="text-blue-600 underline dark:text-muted" href="https://dakic.com/"> Dakic OnLine LLC</a> · All rights reserved.
  `,
};
