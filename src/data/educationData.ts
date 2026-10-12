export interface EducationInfo {
  title: string;
  date?: string;
  degrees: string[];
  honors?: string[];
  thumbnail: string;
  link: string;
}

export const educationList: EducationInfo[] = [
  {
    title: 'Oberlin College, Ohio',
    date: 'Sep 2016 - May 2023',
    degrees: [
      'B.A. in Computer Science',
      'B.A. in Physics',
      'Minor in Mathematics',
    ],
    honors: [
      "Robert Weinstock Prize (Physics Department's highest student award)",
      'The Phi Beta Kappa Society',
    ],
    thumbnail: './education/Oberlin.png',
    link: 'https://www.oberlin.edu/',
  },
  {
    title: 'Korean Minjok Leadership Academy',
    degrees: ['Graduated'],
    thumbnail: './education/KMLA.png',
    link: 'http://www.minjok.hs.kr/',
  },
];

const degreeIcons = {
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
