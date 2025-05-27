import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Practice Areas',
      links: [
        {
          text: 'General Counsel & Advisory Services',
          href: getPermalink('/practices/general-counsel-services'),
        },
        {
          text: 'Business & Corporate Law',
          href: getPermalink('/practices/corporate-law'),
        },

        {
          text: 'Trust & Estates',
          href: getPermalink('/practices/estate-planning'),
        },
        {
          text: 'Real Estate',
          href: getPermalink('/practices/real-estate'),
        },
        {
          text: 'Intellectual Property Law',
          href: getPermalink('/practices/real-estate'),
        },
        {
          text: 'Immigration Law',
          href: getPermalink('/practices/immigration-law'),
        },
      ],
    },
    {
      text: 'Our Team',
      links: [
        {
          text: 'Cagatay Ersoy',
          href: getPermalink('/our-team/cagatay'),
        },
        {
          text: 'Sena Sahin',
          href: getPermalink('/our-team/sena'),
        },
        { text: 'Shafeek Seddiq', 
          href: getPermalink('/our-team/shafeek') 
        },
      
      ],
    },
    {
      text: 'Our Locations',
      href: getPermalink('/locations'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'Contact Us', href: '/contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Information',
      links: [
        { text: 'About Us',  href: getPermalink('/about') },
        { text: 'Our Locations', href: getPermalink('/locations') },
      ],
    },
    {
      title: 'Our Team',
      links: [
        { text: 'Cagatay Ersoy', href: getPermalink('/our-team/cagatay') },
        { text: 'Sena Sahin', href: getPermalink('/our-team/sena') },
        { text: 'Shafeek Seddiq', href: getPermalink('/our-team/shafeek') },
      ],
    },
    {
      title: 'Practice Areas',
      links: [
        { text: 'General Counsel Services', href: getPermalink('/practices/general-counsel-services') },
        { text: 'Corporate Law', href: getPermalink('/practices/corporate-law') },
        { text: 'Business Litigation', href: getPermalink('/practices/business-litigation') },
        { text: 'Business Immigration Law', href: getPermalink('/practices/business-immigration') },
        { text: 'Immigration Law', href: getPermalink('/practices/immigration-law') },
        { text: 'Estate Planning', href: getPermalink('/practices/estate-planning') },
        { text: 'Real Estate', href: getPermalink('/practices/real-estate') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Free Evaluations', href: getPermalink('/contact') },
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
