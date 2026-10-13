import {
  Atom,
  CodeXml,
  GraduationCap,
  Sigma,
  type LucideIcon,
} from 'lucide-react';

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

export const getDegreeIcon = (degree: string): LucideIcon => {
  if (degree.includes('Computer Science')) return CodeXml;
  if (degree.includes('Physics')) return Atom;
  if (degree.includes('Mathematics')) return Sigma;
  return GraduationCap;
};
