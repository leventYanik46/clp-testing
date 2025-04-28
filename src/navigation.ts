import { getPermalink, getBlogPermalink } from './utils/permalinks';

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
        {
          text: 'Estate Planning',
          href: getPermalink('/en/practices/estate-planning'),
        },
        {
          text: 'Real Estate',
          href: getPermalink('/en/practices/real-estate'),
        },
        {
          text: 'Asset Protection',
          href: getPermalink('/en/practices/asset-protection'),
        },
        {
          text: 'Corporate Transparency Act',
          href: getPermalink('/en/practices/corporate-transparency-act'),
        },
      ],
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
      ],
    },
    {
      text: 'Our Locations',
      href: getPermalink('/en/locations'),
    },
  ],
  actions: [{ text: 'Contact Us', href: '/en/contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'About Us',
      links: [
        { text: 'Our Story', href: getPermalink('/en/about') },
        { text: 'Our Locations', href: getPermalink('/en/locations') },
      ],
    },
    {
      title: 'Our Team',
      links: [
        { text: 'Cagatay Ersoy', href: getPermalink('/en/our-team/cagatay') },
        { text: 'Sena Sahin', href: getPermalink('/en/our-team/sena') },
        { text: 'Shafeek Seddiq', href: getPermalink('/en/our-team/shafeek') },
      ],
    },
    {
      title: 'Practice Areas',
      links: [
        { text: 'General Counsel Services', href: getPermalink('/en/practices/general-counsel-services') },
        { text: 'Corporate Law', href: getPermalink('/en/practices/corporate-law') },
        { text: 'Business Litigation', href: getPermalink('/en/practices/business-litigation') },
        { text: 'Business Immigration Law', href: getPermalink('/en/practices/business-immigration') },
        { text: 'Immigration Law', href: getPermalink('/en/practices/immigration-law') },
        { text: 'Estate Planning', href: getPermalink('/en/practices/estate-planning') },
        { text: 'Real Estate', href: getPermalink('/en/practices/real-estate') },
        { text: 'Asset Protection', href: getPermalink('/en/practices/asset-protection') },
        { text: 'Corporate Transparency Act', href: getPermalink('/en/practices/corporate-transparency-act') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact Us', href: getPermalink('/en/contact') },
        { text: 'Free Evaluations', href: getPermalink('/en/contact') },
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
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/capitollawpartners',
    },
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
