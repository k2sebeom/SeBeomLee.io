interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
  description: string;
}

interface ServiceHighlight {
  icon: string;
  text: string;
}

interface FooterInfo {
  quote: string;
  author: string;
  location: string;
  availability: string;
  responseTime: string;
}

export const contactMethods: ContactMethod[] = [
  {
    icon: '\u2709\uFE0F',
    title: 'Email',
    value: 'slee5@oberlin.edu',
    link: 'mailto:slee5@oberlin.edu',
    description: 'Primary communication channel',
  },
  {
    icon: '\uD83D\uDCBC',
    title: 'LinkedIn',
    value: 'Connect with me',
    link: 'https://linkedin.com/in/sebeom-lee',
    description: 'Professional networking',
  },
  {
    icon: '\uD83D\uDC19',
    title: 'GitHub',
    value: 'k2sebeom',
    link: 'https://github.com/k2sebeom',
    description: 'Code repositories & projects',
  },
  {
    icon: '\uD83C\uDF10',
    title: 'Portfolio',
    value: 'sebeomlee.com',
    link: 'https://sebeomlee.com',
    description: 'Personal website',
  },
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    icon: '\u2601\uFE0F',
    text: 'Cloud Architecture & AWS Solutions',
  },
  {
    icon: '\uD83E\uDD16',
    text: 'AI/ML Implementation & Strategy',
  },
  {
    icon: '\u269B\uFE0F',
    text: 'Physics-Based Computational Solutions',
  },
  {
    icon: '\uD83C\uDFAE',
    text: 'Game Development & Interactive Experiences',
  },
];

export const contactIntro = {
  title: 'Let\u2019s Work Together',
  text: "Whether you're looking to build the next breakthrough AI application, architect scalable cloud solutions, or explore the intersection of physics and technology, I'm here to help turn your vision into reality.",
};

export const footerInfo: FooterInfo = {
  quote:
    'Not only is the Universe stranger than we think, it is stranger than we can think.',
  author: 'Werner Heisenberg',
  location: 'Based in Seoul, South Korea',
  availability: 'Available for collaboration across Asia-Pacific and beyond',
  responseTime: 'Response time: Usually within 24 hours',
};
