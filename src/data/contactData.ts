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
    icon: '📧',
    title: 'Email',
    value: 'slee5@oberlin.edu',
    link: 'mailto:slee5@oberlin.edu',
    description: 'Primary communication channel',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'Connect with me',
    link: 'https://linkedin.com/in/sebeom-lee',
    description: 'Professional networking',
  },
  {
    icon: '🐙',
    title: 'GitHub',
    value: 'k2sebeom',
    link: 'https://github.com/k2sebeom',
    description: 'Code repositories & projects',
  },
  {
    icon: '🌐',
    title: 'Portfolio',
    value: 'sebeom.dev',
    link: 'https://sebeom.dev',
    description: 'Personal website',
  },
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    icon: '🚀',
    text: 'Cloud Architecture & AWS Solutions',
  },
  {
    icon: '🤖',
    text: 'AI/ML Implementation & Strategy',
  },
  {
    icon: '⚛️',
    text: 'Physics-Based Computational Solutions',
  },
  {
    icon: '🎮',
    text: 'Game Development & Interactive Experiences',
  },
];

export const contactIntro = {
  title: 'Ready to Launch Something Amazing?',
  text: "Whether you're looking to build the next breakthrough AI application, architect scalable cloud solutions, or explore the intersection of physics and technology, I'm here to help turn your vision into reality.",
};

export const footerInfo: FooterInfo = {
  quote:
    'Not only is the Universe stranger than we think, it is stranger than we can think.',
  author: 'Werner Heisenberg',
  location: 'Currently based in Seoul, South Korea 🇰🇷',
  availability: 'Available for collaboration across Asia-Pacific and beyond 🌏',
  responseTime: 'Response time: Usually within 24 Earth hours ⏰',
};
