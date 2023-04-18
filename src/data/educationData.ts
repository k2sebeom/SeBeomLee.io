export interface EducationInfo {
  title: string;
  degrees: string[];
  thumbnail: string;
}

export const educationList: EducationInfo[] = [
  {
    title: 'Oberlin College, Ohio',
    degrees: ['B.A. in Computer Science', 'B.A. in Physics', 'Minor in Mathematics'],
    thumbnail: './education/Oberlin.png',
  },
  {
    title: 'Korean Minjok Leadership Academy',
    degrees: ['Graduated'],
    thumbnail: './education/KMLA.png',
  },
];
