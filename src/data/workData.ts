export interface WorkInfo {
  company: string;
  position: string;

  icon: string;
  date: string;
}

export const workList: WorkInfo[] = [
  {
    company: 'LUXROBO Co., Ltd.',
    position: 'Python Development Intern',
    icon: './work/lux.jpg',
    date: 'May 2020 - Aug 2020',
  },
  {
    company: 'Amazon Web Services',
    position: 'Solutions Architect Intern',
    icon: './work/aws.png',
    date: 'May 2021 - Feb 2022',
  },
  {
    company: 'Pumpkin Inc.',
    position: 'Software Developer',
    icon: './work/pumpkin.jpg',
    date: 'Mar 2022 - Aug 2022',
  },
];
