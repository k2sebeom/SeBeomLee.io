import {
  Award,
  BrainCircuit,
  Cloud,
  CodeXml,
  Languages,
  Waves,
  type LucideIcon,
} from 'lucide-react';

interface SkillGroup {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI/ML Systems',
    items: [
      'Amazon Bedrock',
      'Amazon SageMaker',
      'PyTorch',
      'NVIDIA FLARE',
      'MLflow',
      'LLM Serving',
      'Federated Learning',
    ],
    icon: BrainCircuit,
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      'AWS',
      'Amazon EKS/ECS',
      'Amazon SQS',
      'Transit Gateway',
      'Kubernetes',
      'Terraform',
      'Argo CD',
    ],
    icon: Cloud,
  },
  {
    category: 'Data & Streaming',
    items: ['Kafka', 'Flink', 'Iceberg', 'Trino', 'Amazon S3', 'MQTT'],
    icon: Waves,
  },
  {
    category: 'Programming',
    items: ['Python', 'Java', 'TypeScript/Node.js', 'Go', 'C++', 'C#'],
    icon: CodeXml,
  },
  {
    category: 'Certifications',
    items: ['AWS Certified Solutions Architect - Professional'],
    icon: Award,
  },
  {
    category: 'Languages',
    items: ['Korean (Native)', 'English (Professional)'],
    icon: Languages,
  },
];
