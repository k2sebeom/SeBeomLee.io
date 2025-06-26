export interface WorkInfo {
  company: string;
  position: string;
  icon: string;
  date: string;
  color: string;
  description: string;
  technologies: string[];
}

export const workList: WorkInfo[] = [
  {
    company: 'LUXROBO Co., Ltd.',
    position: 'Python Development Intern',
    icon: './work/lux.png',
    date: 'May 2020 - Aug 2020',
    color: '#FFF',
    description:
      'Developed Python applications for robotics and automation systems. Worked on computer vision algorithms and machine learning models for intelligent robotic behaviors.',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'Robotics'],
  },
  {
    company: 'Amazon Web Services',
    position: 'Solutions Architect Intern',
    icon: './work/aws.png',
    date: 'May 2021 - Feb 2022',
    color: '#262E3B',
    description:
      'Designed and implemented cloud architectures for enterprise clients. Developed proof-of-concepts for AI/ML workloads and contributed to customer success through technical guidance and best practices.',
    technologies: ['AWS', 'Cloud Architecture', 'AI/ML', 'Serverless'],
  },
  {
    company: 'Pumpkin Inc.',
    position: 'Software Developer',
    icon: './work/pumpkin.png',
    date: 'Mar 2022 - Aug 2022',
    color: '#FECA00',
    description:
      "Developed full-stack applications using modern web technologies. Built scalable backend services and responsive frontend interfaces, contributing to the company's digital transformation initiatives.",
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    company: 'Amazon Web Services',
    position: 'Solutions Architect',
    icon: './work/aws.png',
    date: 'Jan 2025 - Present',
    color: '#262E3B',
    description:
      'Currently architecting cloud solutions for enterprise clients across Korea and the Asia-Pacific region. Specializing in AI/ML workloads, serverless architectures, and helping organizations leverage the latest wave of artificial intelligence technologies to transform their businesses.',
    technologies: [
      'AWS',
      'AI/ML',
      'Cloud Architecture',
      'Serverless',
      'SageMaker',
      'Bedrock',
    ],
  },
];
