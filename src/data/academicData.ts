interface AcademicArea {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

export const academicAreas: AcademicArea[] = [
  {
    icon: '💻',
    title: 'Computer Science',
    description: 'Algorithms, Data Structures, Software Engineering, AI/ML',
  },
  {
    icon: '⚛️',
    title: 'Physics',
    description: 'Computational Physics, Quantum Mechanics, Numerical Methods',
  },
  {
    icon: '📐',
    title: 'Mathematics',
    description: 'Calculus, Linear Algebra, Differential Equations, Statistics',
  },
];

export const learningPhilosophy: PhilosophyItem[] = [
  {
    icon: '🌌',
    title: 'Interdisciplinary Approach',
    description:
      'Bridging the gap between theoretical physics and practical computer science to solve complex problems.',
  },
  {
    icon: '🔬',
    title: 'Research-Driven Learning',
    description:
      'Applying scientific methodology to software development and exploring computational solutions to physical phenomena.',
  },
  {
    icon: '🚀',
    title: 'Innovation Through Education',
    description:
      'Leveraging academic knowledge to drive technological innovation and create meaningful impact in the industry.',
  },
];

export const degreeIcons = {
  computerScience: '💻',
  physics: '⚛️',
  mathematics: '📐',
  default: '🎓',
};

export const getDegreeIcon = (degree: string): string => {
  if (degree.includes('Computer Science')) return degreeIcons.computerScience;
  if (degree.includes('Physics')) return degreeIcons.physics;
  if (degree.includes('Mathematics')) return degreeIcons.mathematics;
  return degreeIcons.default;
};
