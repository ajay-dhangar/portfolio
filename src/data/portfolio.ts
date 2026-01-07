import { Project, Skill, Mission, Contribution } from '../types';

export const skills: Skill[] = [
  {
    category: 'Programming',
    items: [
      { name: 'JavaScript/TypeScript', level: 95, description: 'Full-stack weapon of choice' },
      { name: 'Python', level: 90, description: 'Automation & exploitation scripts' },
      { name: 'C++', level: 85, description: 'Low-level system manipulation' },
      { name: 'MERN Stack', level: 92, description: 'Modern web architecture' },
      { name: 'REST APIs', level: 93, description: 'Backend infiltration protocols' },
    ],
  },
  {
    category: 'Cyber Security',
    items: [
      { name: 'Penetration Testing', level: 88, description: 'Network & web exploitation' },
      { name: 'OWASP Top 10', level: 90, description: 'Vulnerability assessment expert' },
      { name: 'Linux Administration', level: 92, description: 'System hardening & exploitation' },
      { name: 'Network Security', level: 87, description: 'Traffic analysis & bypass' },
      { name: 'Cryptography', level: 83, description: 'Encryption & decryption protocols' },
    ],
  },
  {
    category: 'Tools & Arsenal',
    items: [
      { name: 'Git/GitHub', level: 94, description: 'Version control mastery' },
      { name: 'Docker', level: 89, description: 'Containerized deployment' },
      { name: 'Kali Linux', level: 91, description: 'Offensive security toolkit' },
      { name: 'Burp Suite', level: 86, description: 'Web application testing' },
      { name: 'Wireshark', level: 84, description: 'Network protocol analysis' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'Sentinel Network Scanner',
    description: 'Advanced port scanner with vulnerability detection and OS fingerprinting capabilities. Built for ethical reconnaissance.',
    tags: ['Python', 'Security', 'Network'],
    status: 'ACTIVE',
    tech: ['Python', 'Scapy', 'Nmap', 'SQLite'],
    threat_level: 'HIGH',
  },
  {
    id: 'proj-002',
    title: 'CodeArena Platform',
    description: 'Real-time collaborative coding platform with integrated compiler, chat system, and code execution sandbox.',
    tags: ['MERN', 'WebSockets', 'Docker'],
    status: 'OPEN-SOURCE',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    threat_level: 'MEDIUM',
  },
  {
    id: 'proj-003',
    title: 'XSS Hunter Pro',
    description: 'Automated XSS vulnerability scanner with payload generator and blind XSS detection capabilities.',
    tags: ['Security', 'JavaScript', 'Automation'],
    status: 'EXPERIMENTAL',
    tech: ['JavaScript', 'Puppeteer', 'Express'],
    threat_level: 'CRITICAL',
  },
  {
    id: 'proj-004',
    title: 'Cipher Vault',
    description: 'Secure password manager with end-to-end encryption, zero-knowledge architecture, and biometric authentication.',
    tags: ['Security', 'Encryption', 'React'],
    status: 'ACTIVE',
    tech: ['React', 'AES-256', 'IndexedDB', 'WebAuthn'],
    threat_level: 'HIGH',
  },
  {
    id: 'proj-005',
    title: 'API Fortress',
    description: 'GraphQL & REST API security testing framework with automated vulnerability scanning and rate limiting bypass.',
    tags: ['Security', 'APIs', 'Testing'],
    status: 'CLASSIFIED',
    tech: ['Python', 'GraphQL', 'JWT', 'OAuth'],
    threat_level: 'CRITICAL',
  },
  {
    id: 'proj-006',
    title: 'DevOps Pipeline',
    description: 'Automated CI/CD pipeline with security scanning, container orchestration, and zero-downtime deployment.',
    tags: ['DevOps', 'Docker', 'Automation'],
    status: 'OPEN-SOURCE',
    tech: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    threat_level: 'LOW',
  },
];

export const missions: Mission[] = [
  {
    id: 'mission-001',
    code_name: 'Operation Phoenix',
    objective: 'Developed enterprise-grade security audit system for financial institution',
    tech_stack: ['Python', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
    outcome: 'Identified 47 critical vulnerabilities, prevented potential $2M+ breach',
    duration: '6 months',
    status: 'COMPLETED',
  },
  {
    id: 'mission-002',
    code_name: 'Operation Blackout',
    objective: 'Penetration testing engagement for e-commerce platform with 100K+ users',
    tech_stack: ['Burp Suite', 'SQLMap', 'Metasploit', 'Python'],
    outcome: 'Secured payment gateway, fixed authentication bypass, enhanced rate limiting',
    duration: '3 months',
    status: 'COMPLETED',
  },
  {
    id: 'mission-003',
    code_name: 'Operation Nexus',
    objective: 'Building open-source security education platform for ethical hackers',
    tech_stack: ['React', 'Node.js', 'MongoDB', 'Docker', 'WebRTC'],
    outcome: 'Platform serving 5K+ security enthusiasts, 200+ CTF challenges',
    duration: 'Ongoing',
    status: 'ONGOING',
  },
];

export const contributions: Contribution[] = [
  {
    id: 'contrib-001',
    repo: 'OWASP/CheatSheetSeries',
    type: 'PR',
    description: 'Added comprehensive guide on JWT security best practices',
    date: '2024-03-15',
    impact: 'HIGH',
  },
  {
    id: 'contrib-002',
    repo: 'nodejs/node',
    type: 'ISSUE',
    description: 'Reported critical security vulnerability in crypto module',
    date: '2024-02-28',
    impact: 'HIGH',
  },
  {
    id: 'contrib-003',
    repo: 'facebook/react',
    type: 'COMMIT',
    description: 'Fixed XSS vulnerability in dangerouslySetInnerHTML',
    date: '2024-01-20',
    impact: 'MEDIUM',
  },
  {
    id: 'contrib-004',
    repo: 'docker/cli',
    type: 'PR',
    description: 'Improved container security documentation',
    date: '2023-12-10',
    impact: 'MEDIUM',
  },
  {
    id: 'contrib-005',
    repo: 'torvalds/linux',
    type: 'COMMIT',
    description: 'Kernel module security patch for privilege escalation',
    date: '2023-11-05',
    impact: 'HIGH',
  },
];

export const systemStats = {
  uptime: '99.94%',
  exploits_found: 247,
  commits: 1842,
  projects: 34,
  contributions: 156,
};
