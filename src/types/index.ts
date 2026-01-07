export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'ACTIVE' | 'OPEN-SOURCE' | 'EXPERIMENTAL' | 'CLASSIFIED';
  tech: string[];
  github?: string;
  demo?: string;
  threat_level?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    description: string;
  }[];
}

export interface Mission {
  id: string;
  code_name: string;
  objective: string;
  tech_stack: string[];
  outcome: string;
  duration: string;
  status: 'COMPLETED' | 'ONGOING' | 'ARCHIVED';
}

export interface Contribution {
  id: string;
  repo: string;
  type: 'COMMIT' | 'PR' | 'ISSUE' | 'RELEASE';
  description: string;
  date: string;
  impact: 'LOW' | 'MEDIUM' | 'HIGH';
}
