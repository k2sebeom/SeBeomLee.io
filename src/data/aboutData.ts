export interface AboutInfo {
  statement: string;
  bio: string;
}

export const aboutMeData: AboutInfo = {
  statement:
    "I'm a Solutions Architect at AWS Korea, passionate about AI, container orchestration, and accelerated computing.",
  bio: "I'm a Solutions Architect at AWS, bringing my background as a startup developer into how I architect. I love getting hands-on, so I build PoCs to bring designs to life. My work centers on AI/ML and agentic systems, from architecting solutions to building them end to end. Outside of work, I keep building through personal projects and open-source contributions across AI, games, and developer tools. My academic background in Computer Science and Physics from Oberlin College still shapes how I approach complex problems.",
};

export interface StatInfo {
  value: number;
  suffix: string;
  label: string;
}

export const aboutStats: StatInfo[] = [
  {
    value: 500,
    suffix: '+',
    label: 'investment managers served by research agents',
  },
  { value: 236, suffix: 'B', label: 'parameter LLM validated for serving' },
  { value: 60, suffix: 'K', label: 'IoT devices streaming every second' },
  { value: 12, suffix: 'x', label: 'ML classification throughput gain' },
];
