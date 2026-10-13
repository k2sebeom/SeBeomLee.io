export interface ProjectCategory {
  id: string;
  label: string;
  keywords: string[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'all',
    label: 'All Projects',
    keywords: [],
  },
  {
    id: 'ai',
    label: 'AI/ML',
    keywords: ['ai', 'machine learning', 'neural', 'deep learning', 'gpt'],
  },
  {
    id: 'game',
    label: 'Games',
    keywords: ['game', 'unity', 'multiplayer'],
  },
  {
    id: 'cloud',
    label: 'Cloud/AWS',
    keywords: ['aws', 'cloud', 'ec2', 'serverless'],
  },
  {
    id: 'physics',
    label: 'Physics',
    keywords: ['physics', 'numerical', 'simulation', 'calculus'],
  },
  {
    id: 'web',
    label: 'Web/Mobile',
    keywords: ['web', 'react', 'ios', 'mobile', 'electron'],
  },
];

export const galleryConfig = {
  description: 'Highlighting some of my most impactful and innovative projects',
};

export const projectsConfig = {
  categoryTitle: 'All Projects',
  noProjectsFound: {
    title: 'No projects found in this category',
  },
  pagination: {
    initialCount: 6,
    loadMoreCount: 6,
    loadMoreText: 'Load More Projects',
  },
};
