interface SkillGroup {
  category: string;
  items: string[];
  icon: string;
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
    icon: '🤖',
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
    icon: '☁️',
  },
  {
    category: 'Data & Streaming',
    items: ['Kafka', 'Flink', 'Iceberg', 'Trino', 'Amazon S3', 'MQTT'],
    icon: '🌊',
  },
  {
    category: 'Programming',
    items: ['Python', 'Java', 'TypeScript/Node.js', 'Go', 'C++', 'C#'],
    icon: '💻',
  },
  {
    category: 'Certifications',
    items: ['AWS Certified Solutions Architect - Professional'],
    icon: '🏅',
  },
  {
    category: 'Languages',
    items: ['Korean (Native)', 'English (Professional)'],
    icon: '🌐',
  },
];
