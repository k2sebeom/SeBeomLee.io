interface SkillGroup {
  category: string;
  items: string[];
  icon: string;
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud & Architecture',
    items: ['AWS', 'Solutions Architecture', 'Serverless', 'Microservices'],
    icon: '☁️',
  },
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
    icon: '🤖',
  },
  {
    category: 'Physics & Simulation',
    items: [
      'Computational Physics',
      'Numerical Methods',
      'Quantum Computing',
      'Modeling',
    ],
    icon: '⚛️',
  },
  {
    category: 'Game Development',
    items: ['Unity', 'C#', 'Game Design', 'Graphics Programming'],
    icon: '🎮',
  },
  {
    category: 'Full-Stack Development',
    items: ['React', 'TypeScript', 'Node.js', 'Python'],
    icon: '💻',
  },
  {
    category: 'Blockchain & Web3',
    items: ['Smart Contracts', 'Solidity', 'DeFi', 'Ethereum'],
    icon: '⛓️',
  },
];
