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
    company: 'Amazon Web Services',
    position: 'Solutions Architect Intern',
    icon: './work/aws.png',
    date: 'May 2020 - Mar 2021',
    color: '#262E3B',
    description:
      'Built a data platform with a national public-safety agency to analyze ambulance arrival times, and contributed to a content management demo for VOD and live-streaming workflows.',
    technologies: [
      'Amazon Athena',
      'Amazon QuickSight',
      'AWS Elemental MediaConvert',
    ],
  },
  {
    company: 'Curv Company Inc. (acquired by GC Holdings)',
    position: 'Lead Backend Developer',
    icon: '',
    date: 'Mar 2021 - Dec 2024',
    color: '#FFF',
    description:
      'Led the backend for an IMU-powered smart dog collar, building a streaming lakehouse sized for 60K devices sending telemetry every second and turning sensor streams into hourly, daily, and monthly behavior reports. Redesigned motion classification with a university research lab, using gravity-vector calibration and Fourier analysis to raise throughput more than 12x.',
    technologies: [
      'Kubernetes',
      'Kafka',
      'Flink',
      'Iceberg',
      'Trino',
      'Argo CD',
      'MQTT',
    ],
  },
  {
    company: 'Amazon Web Services',
    position: 'Solutions Architect',
    icon: './work/aws.png',
    date: 'Jan 2025 - Present',
    color: '#262E3B',
    description:
      'Architect and build AI and infrastructure solutions for Korean public-sector and enterprise customers: agentic investment research for 500+ investment managers, sovereign cloud architecture for regulated government workloads, serving feasibility for a 236B-parameter LLM on GPU instances, and federated ML across 20+ regulated data providers.',
    technologies: [
      'Amazon Bedrock',
      'Agentic AI',
      'Amazon EKS',
      'Amazon ECS',
      'GPU Inference',
      'NVIDIA FLARE',
      'SageMaker',
    ],
  },
];
