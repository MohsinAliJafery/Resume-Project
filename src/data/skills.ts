// data/skills.ts
import { Skill } from './jobTypes';

export const technicalSkills: Skill[] = [
  { id: "skill-1", name: "JavaScript", category: "Technical" },
  { id: "skill-2", name: "TypeScript", category: "Technical" },
  { id: "skill-3", name: "React", category: "Technical" },
  { id: "skill-4", name: "Next.js", category: "Technical" },
  { id: "skill-5", name: "Node.js", category: "Technical" },
  { id: "skill-6", name: "Express", category: "Technical" },
  { id: "skill-7", name: "MongoDB", category: "Technical" },
  { id: "skill-8", name: "PostgreSQL", category: "Technical" },
  { id: "skill-9", name: "GraphQL", category: "Technical" },
  { id: "skill-10", name: "REST API", category: "Technical" },
  { id: "skill-11", name: "HTML5", category: "Technical" },
  { id: "skill-12", name: "CSS3", category: "Technical" },
  { id: "skill-13", name: "Tailwind CSS", category: "Technical" },
  { id: "skill-14", name: "Redux", category: "Technical" },
  { id: "skill-15", name: "Jest", category: "Technical" },
];

export const softSkills: Skill[] = [
  { id: "skill-16", name: "Communication", category: "Soft" },
  { id: "skill-17", name: "Teamwork", category: "Soft" },
  { id: "skill-18", name: "Problem Solving", category: "Soft" },
  { id: "skill-19", name: "Time Management", category: "Soft" },
  { id: "skill-20", name: "Leadership", category: "Soft" },
  { id: "skill-21", name: "Adaptability", category: "Soft" },
  { id: "skill-22", name: "Critical Thinking", category: "Soft" },
  { id: "skill-23", name: "Creativity", category: "Soft" },
];

export const toolSkills: Skill[] = [
  { id: "skill-24", name: "Git", category: "Tool" },
  { id: "skill-25", name: "GitHub", category: "Tool" },
  { id: "skill-26", name: "VS Code", category: "Tool" },
  { id: "skill-27", name: "Docker", category: "Tool" },
  { id: "skill-28", name: "AWS", category: "Tool" },
  { id: "skill-29", name: "CI/CD", category: "Tool" },
  { id: "skill-30", name: "Jira", category: "Tool" },
  { id: "skill-31", name: "Figma", category: "Tool" },
];

export const languageSkills: Skill[] = [
  { id: "skill-32", name: "English", category: "Language" },
  { id: "skill-33", name: "Spanish", category: "Language" },
  { id: "skill-34", name: "French", category: "Language" },
  { id: "skill-35", name: "German", category: "Language" },
  { id: "skill-36", name: "Mandarin", category: "Language" },
];

// Combine all skills for easy access
export const allSkills: Skill[] = [
  ...technicalSkills,
  ...softSkills,
  ...toolSkills,
  ...languageSkills,
];

// Helper function to get skills by IDs
export const getSkillsByIds = (ids: string[]): Skill[] => {
  return allSkills.filter(skill => ids.includes(skill.id));
};
