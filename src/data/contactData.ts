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

export const contactEmail = 'k2sebeom@gmail.com';

export const contactMethods: ContactMethod[] = [
  {
    icon: '\u2709\uFE0F',
    title: 'Email',
    value: contactEmail,
    link: `mailto:${contactEmail}`,
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
    text: 'Agentic AI & LLM Systems',
  },
  {
    icon: '\uD83D\uDC33',
    text: 'Container Orchestration on Kubernetes',
  },
  {
    icon: '\u26A1',
    text: 'Accelerated Computing & GPU Inference',
  },
];

export const contactIntro = {
  title: 'Let\u2019s Work Together',
  text: "Whether you're building agentic AI applications, scaling containerized platforms, or serving large models on GPUs, I'd love to get hands-on and build it with you.",
};

export const footerInfo: FooterInfo = {
  quote:
    'Not only is the Universe stranger than we think, it is stranger than we can think.',
  author: 'Werner Heisenberg',
  location: 'Based in Seoul, South Korea',
  availability: 'Available for collaboration across Asia-Pacific and beyond',
  responseTime: 'Response time: Usually within 24 hours',
};
