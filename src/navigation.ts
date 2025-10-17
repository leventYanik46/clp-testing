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
          text: 'General Counsel & Advisory Services',
          href: getPermalink('/en/practice-area/general-counsel-services'),
        },
        {
          text: 'Business & Corporate Law',
          href: getPermalink('/en/practice-area/business-corporate-law'),
        },

        {
          text: 'Trusts & Estates',
          href: getPermalink('/en/practice-area/estate-planning'),
        },
        {
          text: 'Real Estate',
          href: getPermalink('/en/practice-area/real-estate'),
        },
        {
          text: 'Intellectual Property Law',
          href: getPermalink('/en/practice-area/ip-law'),
        },
        {
          text: 'Immigration Law',
          href: getPermalink('/en/practice-area/immigration-law'),
        },
      ],
    },
    {
      text: 'Our Team',
      links: [
        {
          text: 'Meet Our Team',
          href: getPermalink('/en/team'),
        },
        {
          text: 'Cagatay Ersoy',
          href: getPermalink('/en/our-team/cagatay'),
        },
        {
          text: 'Sena Sahin',
          href: getPermalink('/en/our-team/sena'),
        },
        { text: 'Shafeek Seddiq', 
          href: getPermalink('/en/our-team/shafeek') 
        },
        { text: 'Kemal Sahin', 
          href: getPermalink('/en/our-team/kemal') },

        { text: 'S. Selman Kilic', 
          href: getPermalink('/en/our-team/selman') },
        { text: 'Esra Nur Bulan', 
          href: getPermalink('/en/our-team/esra') },
      ],
    },
    {
      text: 'Our Locations',
      href: getPermalink('/en/locations'),
    },
    {
      text: 'Blog',
      href: getPermalink('/en/blog'),
    },
  ],
  actions: [{ text: 'Contact Us', href: '/en/contact', variant: 'primary' }],
};
export const headerDataTr = {
  links: [
    {
      text: 'Hakkımızda',
      href: getPermalink('/tr/about'),
    },
    {
      text: 'Uygulama Alanları',
      links: [
        {
          text: 'Genel Hukuk Danışmanlığı ve Danışmanlık Hizmetleri',
          href: getPermalink('/tr/practice-area/general-counsel-services'),
        },
        {
          text: 'Ticaret ve Şirketler Hukuku',
          href: getPermalink('/tr/practice-area/business-corporate-law'),
        },
        {
          text: 'Vasiyet ve Miras Hukuku',
          href: getPermalink('/tr/practice-area/estate-planning'),
        },
        {
          text: 'Gayrimenkul Hukuku',
          href: getPermalink('/tr/practice-area/real-estate'),
        },
        {
          text: 'Fikri Mülkiyet Hukuku',
          href: getPermalink('/tr/practice-area/ip-law'),
        },
        {
          text: 'Göçmenlik Hukuku',
          href: getPermalink('/tr/practice-area/immigration-law'),
        },
      ],
    },
    {
      text: 'Ekibimiz',
      links: [
        {
          text: 'Ekibimizle Tanışın',
          href: getPermalink('/tr/team'),
        },
        {
          text: 'Çağatay Ersoy',
          href: getPermalink('/tr/our-team/cagatay'),
        },
        {
          text: 'Sena Şahin',
          href: getPermalink('/tr/our-team/sena'),
        },
        { 
          text: 'Shafeek Seddiq', 
          href: getPermalink('/tr/our-team/shafeek'),
        },
        { 
          text: 'Kemal Şahin', 
          href: getPermalink('/tr/our-team/kemal'),
        },
        { 
          text: 'S. Selman Kılıç', 
          href: getPermalink('/tr/our-team/selman'),
        },
        { 
          text: 'Esra Nur Bulan', 
          href: getPermalink('/tr/our-team/esra'),
        },
      ],
    },
    {
      text: 'Ofislerimiz',
      href: getPermalink('/tr/locations'),
    },
    {
      text: 'Blog',
      href: getPermalink('/tr/blog'),
    },
  ],
  actions: [
    { text: 'Bize Ulaşın', href: '/tr/contact', variant: 'primary' },
  ],
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
        { text: 'Meet Our Team', href: getPermalink('/team')},
        { text: 'Cagatay Ersoy', href: getPermalink('/our-team/cagatay') },
        { text: 'Sena Sahin', href: getPermalink('/our-team/sena') },
        { text: 'Kemal Sahin', href: getPermalink('/our-team/kemal') },
        { text: 'S. Selman Kilic', href: getPermalink('/our-team/selman') },

      ],
    },
    {
      title: 'Practice Areas',
      links: [
        { text: 'General Counsel Services', href: getPermalink('/practice-area/general-counsel-services') },
        { text: 'Business & Corporate Law', href: getPermalink('/practice-area/business-corporate-law') },
        { text: 'Trusts & Estates', href: getPermalink('/practice-area/estate-planning') },
        { text: 'Real Estate', href: getPermalink('/practice-area/real-estate') },
        { text: 'Intellectual Property Law', href: getPermalink('/practice-area/ip-law') },
        { text: 'Immigration Law', href: getPermalink('/practice-area/immigration-law') },
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
export const footerDataTr = {
  links: [
    {
      title: 'Bilgi',
      links: [
        { text: 'Hakkımızda', href: getPermalink('/about') },
        { text: 'Ofislerimiz', href: getPermalink('/locations') },
      ],
    },
    {
      title: 'Ekibimiz',
      links: [
        { text: 'Ekibimizle Tanışın', href: getPermalink('/team') },
        { text: 'Çağatay Ersoy', href: getPermalink('/our-team/cagatay') },
        { text: 'Sena Şahin', href: getPermalink('/our-team/sena') },
        { text: 'Kemal Şahin', href: getPermalink('/our-team/kemal') },
        { text: 'S. Selman Kılıç', href: getPermalink('/our-team/selman') },
      ],
    },
    {
      title: 'Uygulama Alanları',
      links: [
        { text: 'Genel Hukuk Danışmanlığı Hizmetleri', href: getPermalink('/practice-area/general-counsel-services') },
        { text: 'Ticaret ve Şirketler Hukuku', href: getPermalink('/practice-area/business-corporate-law') },
        { text: 'Vasiyet ve Miras Hukuku', href: getPermalink('/practice-area/estate-planning') },
        { text: 'Gayrimenkul Hukuku', href: getPermalink('/practice-area/real-estate') },
        { text: 'Fikri Mülkiyet Hukuku', href: getPermalink('/practice-area/ip-law') },
        { text: 'Göçmenlik Hukuku', href: getPermalink('/practice-area/immigration-law') },
      ],
    },
    {
      title: 'Kaynaklar',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Bize Ulaşın', href: getPermalink('/contact') },
        { text: 'Ücretsiz Değerlendirme', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Şartlar', href: getPermalink('/terms') },
    { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
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
    Avukat Reklamı. Bu web sitesindeki içerik yalnızca genel bilgilendirme amacıyla hazırlanmıştır,<br>
    ve resmi bir hukuki tavsiye veya avukat/müvekkil ilişkisi kurulması olarak yorumlanmamalıdır.
    </strong> 
    <br>
    <br>
    © Telif Hakkı Capitol Law Partners LLC · Tüm Hakları Saklıdır.
  `,
};