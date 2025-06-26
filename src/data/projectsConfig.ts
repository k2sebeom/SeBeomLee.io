export interface ProjectCategory {
  id: string;
  label: string;
  icon: string;
  keywords: string[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'all',
    label: 'All Projects',
    icon: '🌌',
    keywords: []
  },
  {
    id: 'ai',
    label: 'AI/ML',
    icon: '🤖',
    keywords: ['ai', 'machine learning', 'neural', 'deep learning', 'gpt']
  },
  {
    id: 'game',
    label: 'Games',
    icon: '🎮',
    keywords: ['game', 'unity', 'multiplayer']
  },
  {
    id: 'cloud',
    label: 'Cloud/AWS',
    icon: '☁️',
    keywords: ['aws', 'cloud', 'ec2', 'serverless']
  },
  {
    id: 'physics',
    label: 'Physics',
    icon: '⚛️',
    keywords: ['physics', 'numerical', 'simulation', 'calculus']
  },
  {
    id: 'web',
    label: 'Web/Mobile',
    icon: '💻',
    keywords: ['web', 'react', 'ios', 'mobile', 'electron']
  }
];

export const projectStats = {
  categories: projectCategories.length,
  ideasBrewing: '∞',
  brewingLabel: 'Ideas Brewing'
};

export const galleryConfig = {
  title: 'Featured Missions',
  description: 'Highlighting some of my most impactful and innovative projects'
};

export const projectsConfig = {
  title: 'Project Galaxy',
  categoryTitle: 'Explore All Projects',
  noProjectsFound: {
    icon: '🔍',
    title: 'No projects found in this category',
    description: 'Try selecting a different category'
  }
};
