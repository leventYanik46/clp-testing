export const languages = {
  en: 'English',
  tr: 'Türkçe',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.practiceAreas': 'Practice Areas',
    'nav.practice.generalCounsel': 'General Counsel & Advisory Services',
    'nav.practice.businessCorporate': 'Business & Corporate Law',
    'nav.practice.trustsEstates': 'Trusts & Estates',
    'nav.practice.realEstate': 'Real Estate',
    'nav.practice.ipLaw': 'Intellectual Property Law',
    'nav.practice.immigration': 'Immigration Law',
    'nav.team': 'Our Team',
    'nav.team.meet': 'Meet Our Team',
    'nav.team.cagatay': 'Cagatay Ersoy',
    'nav.team.sena': 'Sena Sahin',
    'nav.team.shafeek': 'Shafeek Seddiq',
    'nav.team.kemal': 'Kemal Sahin',
    'nav.team.selman': 'S. Selman Kilic',
    'nav.team.esra': 'Esra Nur Bulan',
    'nav.locations': 'Our Locations',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact Us',
    'footer.information': 'Information',
    'footer.freeEvaluation': 'Free Evaluation',
  },
  tr: {
    'lang.label': 'Dil',
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.practiceAreas': 'Çalışma Alanları',
    'nav.practice.generalCounsel': 'Genel Hukuk ve Danışmanlık',
    'nav.practice.businessCorporate': 'İş ve Şirketler Hukuku',
    'nav.practice.trustsEstates': 'Vasiyet ve Miras Hukuku',
    'nav.practice.realEstate': 'Gayrimenkul Hukuku',
    'nav.practice.ipLaw': 'Fikri Mülkiyet Hukuku',
    'nav.practice.immigration': 'Göçmenlik Hukuku',
    'nav.team': 'Ekibimiz',
    'nav.team.meet': 'Ekibimizle Tanışın',
    'nav.team.cagatay': 'Çağatay Ersoy',
    'nav.team.sena': 'Sena Şahin',
    'nav.team.shafeek': 'Shafeek Seddiq',
    'nav.team.kemal': 'Kemal Şahin',
    'nav.team.selman': 'S. Selman Kılıç',
    'nav.team.esra': 'Esra Nur Bulan',
    'nav.locations': 'Lokasyonlar',
    'nav.blog': 'Blog',
    'nav.contact': 'Bize Ulaşın',
    'footer.information': 'Bilgiler',
    'footer.team': 'Ekibimiz',
    'footer.practiceAreas': 'Çalışma Alanları',
    'footer.resources': 'Kaynaklar',
    'footer.terms': 'Koşullar',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.contact': 'Bize Ulaşın',
    'footer.freeEvaluation': 'Ücretsiz Değerlendirme',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];


