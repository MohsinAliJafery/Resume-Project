// data/candidates.ts
export interface Candidate {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  matchScore: number;
  summary: string;
  cvUrl: string;
  skills: string[];
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Senior Full Stack Developer",
    email: "jane@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    matchScore: 87,
    summary: "Jane has 5 years of full-stack experience with strong React and Node.js background. She has led multiple teams in agile environments and specializes in building scalable web applications.",
    cvUrl: "/mock-cvs/jane-doe.pdf",
    skills: ["React", "Node.js", "TypeScript", "AWS", "GraphQL"],
    experience: [
      {
        role: "Lead Developer",
        company: "TechCorp",
        duration: "2020 - Present",
        description: "Led a team of 5 developers to build a SaaS platform serving 10k+ users."
      },
      {
        role: "Full Stack Developer",
        company: "WebSolutions",
        duration: "2018 - 2020",
        description: "Developed and maintained multiple client projects using MERN stack."
      }
    ],
    education: [
      {
        degree: "MSc Computer Science",
        institution: "Stanford University",
        year: "2018"
      }
    ]
  },
  {
    id: 2,
    name: "John Smith",
    title: "Backend Engineer",
    email: "john@example.com",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    matchScore: 72,
    summary: "John is a backend-focused engineer with Python and Django expertise. He has extensive experience in building RESTful APIs and microservices architecture.",
    cvUrl: "/mock-cvs/john-smith.pdf",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "Kubernetes"],
    experience: [
      {
        role: "Backend Engineer",
        company: "DataSystems",
        duration: "2019 - Present",
        description: "Developed core APIs for data processing platform handling 1M+ requests daily."
      }
    ],
    education: [
      {
        degree: "BSc Software Engineering",
        institution: "MIT",
        year: "2019"
      }
    ]
  },
  // Add more candidates with similar expanded details
];