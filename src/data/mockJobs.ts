// data/mockJobs.ts
import { JobPost } from './jobTypes';
import { companies } from './companies';

export const mockJobs: JobPost[] = [
  {
    id: "job-001",
    title: "Senior Frontend Developer",
    company: "company-1", // TechNova Solutions
    location: "San Francisco, CA",
    locationType: "Hybrid",
    postedDate: "2025-05-01",
    description: "We are looking for a Senior Frontend Developer to join our team at TechNova Solutions. You will be responsible for building high-quality user interfaces for our web applications using modern frontend technologies. You will work closely with our design and backend teams to create seamless user experiences.",
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in JavaScript, TypeScript, and React",
      "Experience with Next.js and state management libraries like Redux",
      "Knowledge of modern CSS frameworks like Tailwind CSS",
      "Understanding of responsive design principles",
      "Experience with testing frameworks like Jest",
      "Bachelor's degree in Computer Science or related field (or equivalent experience)"
    ],
    skills: ["skill-1", "skill-2", "skill-3", "skill-4", "skill-13", "skill-14", "skill-15", "skill-18", "skill-24"],
    salary: {
      min: 120000,
      max: 150000,
      currency: "USD"
    },
    experienceLevel: "Senior",
    employmentType: "Full-time",
    applicationUrl: "https://technova-solutions.com/careers/senior-frontend-developer",
    applicationDeadline: "2025-06-15",
    contactEmail: "careers@technova-solutions.com",
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible work schedule",
      "Remote work options",
      "Professional development budget",
      "Unlimited PTO"
    ]
  },
  {
    id: "job-002",
    title: "Data Scientist",
    company: "company-2", // DataSphere Analytics
    location: "Boston, MA",
    locationType: "On-site",
    postedDate: "2025-05-03",
    description: "DataSphere Analytics is seeking a talented Data Scientist to join our growing team. In this role, you will analyze complex datasets, develop machine learning models, and extract actionable insights to help our clients make data-driven decisions. You will collaborate with cross-functional teams to solve challenging business problems.",
    requirements: [
      "3+ years of experience in data science or related field",
      "Strong background in statistics, mathematics, and machine learning",
      "Proficiency in Python and data analysis libraries (NumPy, Pandas, scikit-learn)",
      "Experience with data visualization tools (Matplotlib, Seaborn, Tableau)",
      "Knowledge of SQL and database systems",
      "Master's degree or PhD in Computer Science, Statistics, or related field"
    ],
    skills: ["skill-18", "skill-22", "skill-24", "skill-25", "skill-32"],
    salary: {
      min: 110000,
      max: 140000,
      currency: "USD"
    },
    experienceLevel: "Mid",
    employmentType: "Full-time",
    applicationUrl: "https://datasphere-analytics.com/careers/data-scientist",
    contactEmail: "hiring@datasphere-analytics.com",
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "401(k) plan",
      "Paid time off",
      "Professional development opportunities",
      "Collaborative work environment"
    ]
  },
  {
    id: "job-003",
    title: "DevOps Engineer",
    company: "company-3", // CloudWave Systems
    location: "Seattle, WA",
    locationType: "Remote",
    postedDate: "2025-05-05",
    description: "CloudWave Systems is looking for a skilled DevOps Engineer to help us build and maintain our cloud infrastructure. You will be responsible for implementing CI/CD pipelines, managing cloud resources, and ensuring the reliability and scalability of our systems. You will work with our development team to streamline deployment processes and improve system performance.",
    requirements: [
      "4+ years of experience in DevOps or similar role",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with containerization technologies (Docker, Kubernetes)",
      "Proficiency in infrastructure as code (Terraform, CloudFormation)",
      "Experience with CI/CD tools (Jenkins, GitHub Actions, GitLab CI)",
      "Knowledge of monitoring and logging systems",
      "Bachelor's degree in Computer Science or related field (or equivalent experience)"
    ],
    skills: ["skill-5", "skill-24", "skill-25", "skill-27", "skill-28", "skill-29", "skill-18", "skill-21"],
    salary: {
      min: 115000,
      max: 145000,
      currency: "USD"
    },
    experienceLevel: "Mid",
    employmentType: "Full-time",
    applicationUrl: "https://cloudwave-systems.com/careers/devops-engineer",
    applicationDeadline: "2025-06-30",
    contactEmail: "jobs@cloudwave-systems.com",
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "401(k) with company match",
      "Remote work flexibility",
      "Professional development budget",
      "Home office stipend",
      "Generous PTO policy"
    ]
  },
  {
    id: "job-004",
    title: "AI Research Scientist",
    company: "company-4", // Quantum Innovations
    location: "Austin, TX",
    locationType: "Hybrid",
    postedDate: "2025-05-07",
    description: "Quantum Innovations is seeking an AI Research Scientist to join our cutting-edge research team. In this role, you will conduct research in artificial intelligence, develop novel algorithms, and contribute to the advancement of AI technology. You will collaborate with a team of talented researchers to solve complex problems and publish your findings in academic journals and conferences.",
    requirements: [
      "PhD in Computer Science, Machine Learning, or related field",
      "Strong background in machine learning, deep learning, and AI algorithms",
      "Experience with neural networks and deep learning frameworks (TensorFlow, PyTorch)",
      "Publication record in top-tier AI conferences or journals",
      "Excellent programming skills in Python",
      "Ability to translate research into practical applications"
    ],
    skills: ["skill-18", "skill-22", "skill-23", "skill-24", "skill-25", "skill-32"],
    salary: {
      min: 140000,
      max: 180000,
      currency: "USD"
    },
    experienceLevel: "Senior",
    employmentType: "Full-time",
    applicationUrl: "https://quantum-innovations.com/careers/ai-research-scientist",
    contactEmail: "research@quantum-innovations.com",
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Flexible work arrangements",
      "Research budget",
      "Conference attendance support",
      "Publication incentives",
      "Collaborative research environment"
    ]
  },
  {
    id: "job-005",
    title: "Digital Marketing Specialist",
    company: "company-5", // Digital Frontier
    location: "New York, NY",
    locationType: "On-site",
    postedDate: "2025-05-10",
    description: "Digital Frontier is looking for a Digital Marketing Specialist to help our clients grow their online presence. You will be responsible for creating and implementing digital marketing strategies, managing social media campaigns, and analyzing marketing performance. You will work with a team of creative professionals to deliver exceptional results for our clients.",
    requirements: [
      "3+ years of experience in digital marketing",
      "Knowledge of SEO, SEM, and social media marketing",
      "Experience with marketing analytics tools (Google Analytics, Facebook Insights)",
      "Proficiency in content creation and management",
      "Understanding of email marketing campaigns",
      "Bachelor's degree in Marketing, Communications, or related field"
    ],
    skills: ["skill-16", "skill-17", "skill-19", "skill-23", "skill-32"],
    salary: {
      min: 70000,
      max: 90000,
      currency: "USD"
    },
    experienceLevel: "Mid",
    employmentType: "Full-time",
    applicationUrl: "https://digital-frontier.com/careers/digital-marketing-specialist",
    applicationDeadline: "2025-06-10",
    contactEmail: "careers@digital-frontier.com",
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) plan",
      "Paid time off",
      "Professional development opportunities",
      "Creative work environment"
    ]
  },
  {
    id: "job-006",
    title: "Cybersecurity Analyst",
    company: "company-6", // SecureNet Cybersecurity
    location: "Washington, DC",
    locationType: "Hybrid",
    postedDate: "2025-05-12",
    description: "SecureNet Cybersecurity is seeking a Cybersecurity Analyst to help protect our clients from cyber threats. You will be responsible for monitoring security systems, detecting and responding to security incidents, and implementing security measures. You will work with our security team to ensure the confidentiality, integrity, and availability of our clients' data.",
    requirements: [
      "3+ years of experience in cybersecurity or related field",
      "Knowledge of security frameworks and best practices (NIST, ISO 27001)",
      "Experience with security tools and technologies (SIEM, IDS/IPS, firewalls)",
      "Understanding of network security and threat intelligence",
      "Security certifications (CISSP, CEH, Security+) preferred",
      "Bachelor's degree in Computer Science, Cybersecurity, or related field"
    ],
    skills: ["skill-18", "skill-21", "skill-22", "skill-24", "skill-25", "skill-32"],
    salary: {
      min: 95000,
      max: 120000,
      currency: "USD"
    },
    experienceLevel: "Mid",
    employmentType: "Full-time",
    applicationUrl: "https://securenet-cyber.com/careers/cybersecurity-analyst",
    contactEmail: "jobs@securenet-cyber.com",
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Certification reimbursement",
      "Paid time off"
    ]
  },
  {
    id: "job-007",
    title: "Mobile App Developer",
    company: "company-7", // MobileFirst Technologies
    location: "Chicago, IL",
    locationType: "Remote",
    postedDate: "2025-05-15",
    description: "MobileFirst Technologies is looking for a talented Mobile App Developer to join our team. You will be responsible for developing high-quality mobile applications for iOS and Android platforms. You will work with our design and backend teams to create intuitive and engaging mobile experiences for our clients.",
    requirements: [
      "3+ years of experience in mobile app development",
      "Proficiency in Swift for iOS development",
      "Proficiency in Kotlin for Android development",
      "Experience with React Native or Flutter for cross-platform development",
      "Knowledge of mobile app architecture and design patterns",
      "Understanding of RESTful APIs and JSON",
      "Bachelor's degree in Computer Science or related field (or equivalent experience)"
    ],
    skills: ["skill-1", "skill-3", "skill-10", "skill-18", "skill-24", "skill-25"],
    salary: {
      min: 100000,
      max: 130000,
      currency: "USD"
    },
    experienceLevel: "Mid",
    employmentType: "Full-time",
    applicationUrl: "https://mobilefirst-tech.com/careers/mobile-app-developer",
    applicationDeadline: "2025-07-01",
    contactEmail: "careers@mobilefirst-tech.com",
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "401(k) plan",
      "Remote work flexibility",
      "Professional development opportunities",
      "Home office stipend",
      "Flexible PTO policy"
    ]
  },
  {
    id: "job-008",
    title: "IT Project Manager",
    company: "company-8", // GlobalTech Enterprises
    location: "Remote",
    locationType: "Remote",
    postedDate: "2025-05-18",
    description: "GlobalTech Enterprises is seeking an experienced IT Project Manager to lead our technology initiatives. You will be responsible for planning, executing, and closing IT projects, ensuring they are delivered on time, within scope, and within budget. You will work with cross-functional teams to coordinate project activities and manage stakeholder expectations.",
    requirements: [
      "5+ years of experience in IT project management",
      "PMP or other project management certification preferred",
      "Experience with Agile and Waterfall methodologies",
      "Strong leadership and communication skills",
      "Knowledge of IT infrastructure and software development lifecycle",
      "Bachelor's degree in Computer Science, Business, or related field"
    ],
    skills: ["skill-16", "skill-17", "skill-19", "skill-20", "skill-21", "skill-22", "skill-30", "skill-32"],
    salary: {
      min: 110000,
      max: 140000,
      currency: "USD"
    },
    experienceLevel: "Senior",
    employmentType: "Full-time",
    applicationUrl: "https://globaltech-enterprises.com/careers/it-project-manager",
    contactEmail: "hr@globaltech-enterprises.com",
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "401(k) with company match",
      "Remote work flexibility",
      "Professional development budget",
      "Home office stipend",
      "Generous PTO policy"
    ]
  },
  {
    id: "job-009",
    title: "Frontend Developer Intern",
    company: "company-1", // TechNova Solutions
    location: "San Francisco, CA",
    locationType: "On-site",
    postedDate: "2025-05-20",
    description: "TechNova Solutions is offering an internship opportunity for a Frontend Developer. As an intern, you will assist our development team in building user interfaces for web applications. You will gain hands-on experience with modern frontend technologies and work on real-world projects under the guidance of experienced developers.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with React or similar frontend frameworks",
      "Eagerness to learn and grow as a developer",
      "Strong problem-solving skills",
      "Good communication and teamwork abilities"
    ],
    skills: ["skill-1", "skill-3", "skill-11", "skill-12", "skill-17", "skill-18", "skill-32"],
    experienceLevel: "Entry",
    employmentType: "Internship",
    applicationUrl: "https://technova-solutions.com/careers/frontend-developer-intern",
    applicationDeadline: "2025-06-15",
    contactEmail: "internships@technova-solutions.com",
    benefits: [
      "Paid internship",
      "Mentorship from experienced developers",
      "Hands-on experience with modern technologies",
      "Networking opportunities",
      "Possibility of full-time employment after internship"
    ]
  },
  {
    id: "job-010",
    title: "Backend Engineer",
    company: "company-3", // CloudWave Systems
    location: "Seattle, WA",
    locationType: "Hybrid",
    postedDate: "2025-05-22",
    description: "CloudWave Systems is looking for a Backend Engineer to join our development team. You will be responsible for designing, implementing, and maintaining server-side applications and APIs. You will work with our frontend team to ensure seamless integration between frontend and backend systems.",
    requirements: [
      "4+ years of experience in backend development",
      "Strong proficiency in Node.js, Python, or Java",
      "Experience with RESTful API design and implementation",
      "Knowledge of database systems (SQL and NoSQL)",
      "Understanding of microservices architecture",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Bachelor's degree in Computer Science or related field (or equivalent experience)"
    ],
    skills: ["skill-5", "skill-6", "skill-7", "skill-8", "skill-10", "skill-18", "skill-24", "skill-25", "skill-28"],
    salary: {
      min: 110000,
      max: 140000,
      currency: "USD"
    },
    experienceLevel: "Mid",
    employmentType: "Full-time",
    applicationUrl: "https://cloudwave-systems.com/careers/backend-engineer",
    applicationDeadline: "2025-07-15",
    contactEmail: "jobs@cloudwave-systems.com",
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "401(k) with company match",
      "Hybrid work model",
      "Professional development budget",
      "Generous PTO policy",
      "Team building events"
    ]
  }
];

// Helper function to get a job by ID
export const getJobById = (id: string): JobPost | undefined => {
  return mockJobs.find(job => job.id === id);
};

// Helper function to get jobs by company ID
export const getJobsByCompany = (companyId: string): JobPost[] => {
  return mockJobs.filter(job => job.company === companyId);
};

// Helper function to get jobs by experience level
export const getJobsByExperienceLevel = (level: JobPost['experienceLevel']): JobPost[] => {
  return mockJobs.filter(job => job.experienceLevel === level);
};

// Helper function to get jobs by employment type
export const getJobsByEmploymentType = (type: JobPost['employmentType']): JobPost[] => {
  return mockJobs.filter(job => job.employmentType === type);
};

// Helper function to get jobs by location type
export const getJobsByLocationType = (type: JobPost['locationType']): JobPost[] => {
  return mockJobs.filter(job => job.locationType === type);
};

// Helper function to get jobs by skill
export const getJobsBySkill = (skillId: string): JobPost[] => {
  return mockJobs.filter(job => job.skills.includes(skillId));
};

// Helper function to get recent jobs (posted within the last n days)
export const getRecentJobs = (days: number): JobPost[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return mockJobs.filter(job => {
    const postedDate = new Date(job.postedDate);
    return postedDate >= cutoffDate;
  });
};
