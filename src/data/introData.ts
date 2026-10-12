import { contactEmail } from './contactData';

export const portfolioIdentities = [
  'Solutions Architect',
  'AI/ML Enthusiast',
  'Physics Scholar',
  'Game Developer',
];

export interface HeroContent {
  greeting: string;
  name: string;
  description: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  contact: {
    email: string;
  };
  floatingElements: string[];
  scrollText: string;
}

export const heroContent: HeroContent = {
  greeting: "Hello, I'm",
  name: 'SeBeom Lee',
  description:
    'Solutions Architect at AWS with a passion for AI, container orchestration, and accelerated computing. I love getting hands-on, building everything from PoCs and agentic systems to personal projects.',
  buttons: {
    primary: 'View My Work',
    secondary: 'Get in Touch',
  },
  contact: {
    email: contactEmail,
  },
  floatingElements: [],
  scrollText: 'scroll',
};
