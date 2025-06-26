export interface EducationInfo {
  title: string;
  degrees: string[];
  thumbnail: string;
  link: string;
}

export const educationList: EducationInfo[] = [
  {
    title: 'Oberlin College, Ohio',
    degrees: [
      'B.A. in Computer Science',
      'B.A. in Physics',
      'Minor in Mathematics',
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
