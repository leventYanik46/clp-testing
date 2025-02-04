import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/en/about'),
    },
    {
      text: 'Practice Areas',
      links: [
        {
          text: 'General Counsel Services',
          href: getPermalink('/en/practices/general-counsel-services'),
        },

        {
          text: 'Corporate Law',
          href: getPermalink('/en/practices/corporate-law'),
        },
      
        {
          text: 'Business Litigation',
          href: getPermalink('/en/practices/business-litigation'),
        },
        {
          text: 'Business Immigration Law',
          href: getPermalink('/en/practices/business-immigration'),
        },
        {
          text: 'Immigration Law',
          href: getPermalink('/en/practices/immigration-law'),
        },
      ]
    },
    {
      text: 'Our Team',
      links: [
        {
          text: 'Cagatay Ersoy',
          href: getPermalink('/en/our-team/cagatay'),
        },
        {
          text: 'Sena Sahin',
          href: getPermalink('/en/our-team/sena'),
        },
        {
          text: 'Shafeek Seddiq',
          href: getPermalink('/en/our-team/shafeek'),
        },
        {
          text: 'Murat Yanik',
          href: getPermalink('/en/our-team/murat/murat'),
        },
      ]
    },
    {
      text: 'Our Locations',
      href: getPermalink('/en/locations'),
    },  
    {
      text: 'Contact Us',
      href: getPermalink('/en/contact'),
    },
  ],
  actions: [{ text: "Contact Us", href: '/en/contact',variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/capitollawpartners/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/CapitolLaw/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/capitollawpartners' },
  ],
  footNote: `
    <strong>
    Attorney Advertising. Content on this website is designed for general information only,<br> and not to be construed as
    formal legal advice or establishment of a lawyer/client relationship. 
    </strong> 
    <br>
    <br>
    © Copyright Capitol Law Partners LLC · All Rights Reserved.
  `,
};
