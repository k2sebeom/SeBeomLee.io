export interface WorkInfo {
  company: string;
  position: string;

  icon: string;
  date: string;
  color: string;
}

export const workList: WorkInfo[] = [
  {
    company: 'LUXROBO Co., Ltd.',
    position: 'Python Development Intern',
    icon: './work/lux.png',
    date: 'May 2020 - Aug 2020',
    color: '#FFF',
  },
  {
    company: 'Amazon Web Services',
    position: 'Solutions Architect Intern',
    icon: './work/aws.png',
    date: 'May 2021 - Feb 2022',
    color: '#262E3B',
  },
  {
    company: 'Pumpkin Inc.',
    position: 'Software Developer',
    icon: './work/pumpkin.png',
    date: 'Mar 2022 - Aug 2022',
    color: '#FECA00',
  },
  {
    company: 'Amazon Web Services',
    position: 'Solutions Architect',
    icon: './work/aws.png',
    date: 'Jan 2025 - Present',
    color: '#262E3B',
  },
];
