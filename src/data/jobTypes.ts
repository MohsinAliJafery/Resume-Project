// data/jobTypes.ts

/**
 * Represents a CV/Resume of a person
 */
export interface CV {
  id: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
    city: string;
    country: string;
    postalCode?: string;
    linkedIn?: string;
    github?: string;
    website?: string;
    summary: string;
  };
  education: {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate?: string;
    gpa?: number;
    location: string;
    achievements?: string[];
  }[];
  experience: {
    company: string;
    position: string;
    location: string;
    locationType: "Remote" | "Hybrid" | "On-site";
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
    achievements: string[];
  }[];
  skills: string[]; // References to skill IDs
  languages: {
    language: string;
    proficiency: "Native" | "Fluent" | "Intermediate" | "Basic";
  }[];
   certifications?: {
    name: string;
    issuer: string;
    date: string;
    expiryDate?: string;
    credentialId?: string;
    url?: string;
  }[];
  projects?: {
    name: string;
    description: string;
    url?: string;
    startDate: string;
    endDate?: string;
    technologies: string[];
  }[];
  references?: {
    name: string;
    position: string;
    company: string;
    email?: string;
    phone?: string;
    relationship: string;
  }[];
  preferredJobTypes?: ("Full-time" | "Part-time" | "Contract" | "Internship")[];
  preferredLocations?: string[];
  preferredLocationTypes?: ("Remote" | "Hybrid" | "On-site")[];
  preferredIndustries: string[];
  preferredSalary?: {
    min: number;
    max: number;
    currency: string;
  };
  availability: "Immediate" | "2 weeks" | "1 month" | "3 months" | "Custom";
  customAvailability?: string;
  lastUpdated: string;
}

/**
 * Represents a job posting with detailed information
 */
export interface JobPost {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  postedDate: string;
  description: string;
  requirements: string[];
  skills: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  experienceLevel: "Entry" | "Mid" | "Senior" | "Lead";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
  applicationUrl?: string;
  applicationDeadline?: string;
  contactEmail?: string;
  benefits?: string[];
}

/**
 * Represents a company that posts job listings
 */
export interface Company {
  id: string;
  name: string;
  industry: string;
  description: string;
  website: string;
  logoUrl?: string;
  location: string;
  size: "Startup" | "Small" | "Medium" | "Large" | "Enterprise";
  founded?: number;
}

/**
 * Represents a skill that can be required for a job
 */
export interface Skill {
  id: string;
  name: string;
  category: "Technical" | "Soft" | "Domain" | "Tool" | "Language";
}
