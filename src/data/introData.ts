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
    'Solutions Architect at AWS with a passion for Physics, AI, and Game Development. I build innovative solutions that bridge the gap between cutting-edge technology and real-world applications.',
  buttons: {
    primary: 'Explore My Universe',
    secondary: 'Contact Mission Control',
  },
  contact: {
    email: 'slee5@oberlin.edu',
  },
  floatingElements: ['⚛️', '🚀', '🎮', '🤖', '☁️'],
  scrollText: 'Scroll to explore',
};
