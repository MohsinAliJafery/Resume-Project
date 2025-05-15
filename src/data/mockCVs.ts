import { CV } from './jobTypes';
import { allSkills } from './skills';

// Helper function to get random skills
const getRandomSkills = (count: number): string[] => {
  const shuffled = [...allSkills].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(skill => skill.id);
};

// Helper function to generate a random date within a range
const getRandomDate = (start: Date, end: Date): string => {
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split('T')[0];
};

// Helper function to get a random boolean
const getRandomBoolean = (): boolean => Math.random() > 0.5;

// Helper function to get a random element from an array
const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Helper function to get a random number within a range
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Common universities
const universities = [
  { name: "Massachusetts Institute of Technology", location: "Cambridge, MA" },
  { name: "Stanford University", location: "Stanford, CA" },
  { name: "Harvard University", location: "Cambridge, MA" },
  { name: "California Institute of Technology", location: "Pasadena, CA" },
  { name: "University of Oxford", location: "Oxford, UK" },
  { name: "University of Cambridge", location: "Cambridge, UK" },
  { name: "ETH Zurich", location: "Zurich, Switzerland" },
  { name: "University of California, Berkeley", location: "Berkeley, CA" },
  { name: "Imperial College London", location: "London, UK" },
  { name: "University of Chicago", location: "Chicago, IL" },
  { name: "National University of Singapore", location: "Singapore" },
  { name: "Tsinghua University", location: "Beijing, China" },
  { name: "University of Toronto", location: "Toronto, Canada" },
  { name: "University of Michigan", location: "Ann Arbor, MI" },
  { name: "Cornell University", location: "Ithaca, NY" },
  { name: "University of Washington", location: "Seattle, WA" },
  { name: "New York University", location: "New York, NY" },
  { name: "University of Texas at Austin", location: "Austin, TX" },
  { name: "Georgia Institute of Technology", location: "Atlanta, GA" },
  { name: "University of Illinois at Urbana-Champaign", location: "Champaign, IL" }
];

// Common companies
const companies = [
  { name: "Google", location: "Mountain View, CA" },
  { name: "Microsoft", location: "Redmond, WA" },
  { name: "Apple", location: "Cupertino, CA" },
  { name: "Amazon", location: "Seattle, WA" },
  { name: "Meta", location: "Menlo Park, CA" },
  { name: "Netflix", location: "Los Gatos, CA" },
  { name: "Tesla", location: "Palo Alto, CA" },
  { name: "IBM", location: "Armonk, NY" },
  { name: "Intel", location: "Santa Clara, CA" },
  { name: "Oracle", location: "Redwood City, CA" },
  { name: "Salesforce", location: "San Francisco, CA" },
  { name: "Adobe", location: "San Jose, CA" },
  { name: "Twitter", location: "San Francisco, CA" },
  { name: "Uber", location: "San Francisco, CA" },
  { name: "Airbnb", location: "San Francisco, CA" },
  { name: "LinkedIn", location: "Sunnyvale, CA" },
  { name: "Spotify", location: "Stockholm, Sweden" },
  { name: "Samsung", location: "Seoul, South Korea" },
  { name: "Sony", location: "Tokyo, Japan" },
  { name: "Siemens", location: "Munich, Germany" },
  { name: "Accenture", location: "Dublin, Ireland" },
  { name: "Deloitte", location: "New York, NY" },
  { name: "KPMG", location: "Amsterdam, Netherlands" },
  { name: "PwC", location: "London, UK" },
  { name: "EY", location: "London, UK" }
];

// Common job titles
const jobTitles = [
  "Software Engineer",
  "Senior Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Product Manager",
  "Project Manager",
  "UX Designer",
  "UI Designer",
  "QA Engineer",
  "Systems Architect",
  "Cloud Engineer",
  "Mobile Developer",
  "iOS Developer",
  "Android Developer",
  "Database Administrator",
  "Network Engineer",
  "Security Engineer",
  "Technical Lead",
  "Engineering Manager",
  "CTO",
  "VP of Engineering"
];

// Common degrees
const degrees = [
  "Bachelor of Science",
  "Bachelor of Arts",
  "Bachelor of Engineering",
  "Master of Science",
  "Master of Arts",
  "Master of Engineering",
  "Master of Business Administration",
  "Doctor of Philosophy",
  "Associate's Degree"
];

// Common fields of study
const fields = [
  "Computer Science",
  "Software Engineering",
  "Information Technology",
  "Data Science",
  "Artificial Intelligence",
  "Electrical Engineering",
  "Computer Engineering",
  "Mathematics",
  "Statistics",
  "Business Administration",
  "Information Systems",
  "Cybersecurity",
  "Network Engineering",
  "Web Development",
  "Mobile Development",
  "Game Development",
  "Human-Computer Interaction",
  "Digital Media",
  "Graphic Design",
  "User Experience Design"
];

// Common cities
const cities = [
  { city: "New York", country: "United States" },
  { city: "San Francisco", country: "United States" },
  { city: "Seattle", country: "United States" },
  { city: "Boston", country: "United States" },
  { city: "Austin", country: "United States" },
  { city: "Chicago", country: "United States" },
  { city: "Los Angeles", country: "United States" },
  { city: "Denver", country: "United States" },
  { city: "Toronto", country: "Canada" },
  { city: "Vancouver", country: "Canada" },
  { city: "Montreal", country: "Canada" },
  { city: "London", country: "United Kingdom" },
  { city: "Berlin", country: "Germany" },
  { city: "Paris", country: "France" },
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Stockholm", country: "Sweden" },
  { city: "Zurich", country: "Switzerland" },
  { city: "Sydney", country: "Australia" },
  { city: "Melbourne", country: "Australia" },
  { city: "Singapore", country: "Singapore" },
  { city: "Tokyo", country: "Japan" },
  { city: "Seoul", country: "South Korea" },
  { city: "Bangalore", country: "India" },
  { city: "Mumbai", country: "India" },
  { city: "Tel Aviv", country: "Israel" }
];

// Common languages
const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Japanese",
  "Korean",
  "Russian",
  "Arabic",
  "Hindi",
  "Portuguese",
  "Italian",
  "Dutch",
  "Swedish",
  "Hebrew"
];

// Common certifications
const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "AWS Certified Developer", issuer: "Amazon Web Services" },
  { name: "AWS Certified DevOps Engineer", issuer: "Amazon Web Services" },
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft" },
  { name: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft" },
  { name: "Google Cloud Professional Cloud Architect", issuer: "Google Cloud" },
  { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud" },
  { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation" },
  { name: "Certified Kubernetes Application Developer", issuer: "Cloud Native Computing Foundation" },
  { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC²" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council" },
  { name: "Project Management Professional (PMP)", issuer: "Project Management Institute" },
  { name: "Scrum Master Certified (SMC)", issuer: "Scrum Alliance" },
  { name: "Professional Scrum Master (PSM)", issuer: "Scrum.org" },
  { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance" },
  { name: "Oracle Certified Professional, Java SE Programmer", issuer: "Oracle" },
  { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco" },
  { name: "CompTIA Security+", issuer: "CompTIA" },
  { name: "Salesforce Certified Administrator", issuer: "Salesforce" },
  { name: "Salesforce Certified Developer", issuer: "Salesforce" }
];

// Common project names
const projectNames = [
  "E-commerce Platform",
  "Social Media App",
  "Content Management System",
  "Inventory Management System",
  "Customer Relationship Management System",
  "Task Management Tool",
  "Real-time Chat Application",
  "Video Streaming Service",
  "Online Learning Platform",
  "Financial Dashboard",
  "Data Visualization Tool",
  "Mobile Fitness App",
  "Recipe Sharing Platform",
  "Travel Planning App",
  "Job Board",
  "Portfolio Website",
  "Blog Platform",
  "Event Management System",
  "Weather App",
  "Music Streaming Service"
];

// Generate mock CVs
const generateMockCVs = (): { cvs: CV[] } => {
  const mockCVs: CV[] = Array.from({ length: 100 }, (_, index) => {
    // Generate personal info
    const firstName = `FirstName${index + 1}`;
    const lastName = `LastName${index + 1}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    const phone = `+1-${getRandomNumber(100, 999)}-${getRandomNumber(100, 999)}-${getRandomNumber(1000, 9999)}`;
    const location = getRandomElement(cities);
    const city = location.city;
    const country = location.country;
    
    // Generate education (1-3 entries)
    const educationCount = getRandomNumber(1, 3);
    const education = Array.from({ length: educationCount }, () => {
      const university = getRandomElement(universities);
      const degree = getRandomElement(degrees);
      const field = getRandomElement(fields);
      const startYear = getRandomNumber(2005, 2020);
      const endYear = startYear + getRandomNumber(2, 5);
      const gpa = parseFloat((getRandomNumber(30, 40) / 10).toFixed(1));
      
      return {
        institution: university.name,
        degree,
        field,
        startDate: `${startYear}-09-01`,
        endDate: `${endYear}-06-30`,
        gpa,
        location: university.location,
        achievements: [
          `${getRandomElement(["Dean's List", "Honor Roll", "Scholarship Recipient", "Academic Excellence Award"])} (${startYear + 1}-${endYear})`,
          `${getRandomElement(["Research Assistant", "Teaching Assistant", "Student Representative", "Club President"])} for ${getRandomElement(["1 year", "2 years", "3 years"])}`
        ]
      };
    });
    
    // Sort education by end date (most recent first)
    education.sort((a, b) => new Date(b.endDate || "").getTime() - new Date(a.endDate || "").getTime());
    
    // Generate experience (1-5 entries)
    const experienceCount = getRandomNumber(1, 5);
    const experience = Array.from({ length: experienceCount }, (_, i) => {
      const company = getRandomElement(companies);
      const position = getRandomElement(jobTitles);
      const isCurrent = i === 0 && getRandomBoolean();
      const startYear = getRandomNumber(2010, 2023);
      const startMonth = getRandomNumber(1, 12);
      const endYear = isCurrent ? undefined : startYear + getRandomNumber(1, 3);
    const endMonth = endYear ? getRandomNumber(1, 12) : undefined;
    const locationType: "Remote" | "Hybrid" | "On-site" = getRandomElement(["Remote", "Hybrid", "On-site"]);
    
    return {
        company: company.name,
        position,
        location: company.location,
        locationType,
        startDate: `${startYear}-${String(startMonth).padStart(2, '0')}-01`,
        endDate: endYear ? `${endYear}-${String(endMonth).padStart(2, '0')}-01` : undefined,
        current: isCurrent,
        description: `Worked as a ${position} at ${company.name}, responsible for developing and maintaining software applications.`,
        achievements: [
          `Led a team of ${getRandomNumber(2, 10)} developers to deliver ${getRandomElement(["a new feature", "a product update", "a critical fix"])} that ${getRandomElement(["increased user engagement by", "improved performance by", "reduced bugs by"])} ${getRandomNumber(10, 50)}%`,
          `Implemented ${getRandomElement(["a new CI/CD pipeline", "automated testing", "performance optimizations"])} that ${getRandomElement(["reduced deployment time by", "increased test coverage by", "improved load times by"])} ${getRandomNumber(20, 70)}%`,
          `${getRandomElement(["Designed", "Developed", "Architected"])} ${getRandomElement(["a new API", "a microservice", "a database schema"])} that ${getRandomElement(["supported", "enabled", "facilitated"])} ${getRandomElement(["faster development", "better scalability", "improved reliability"])}`
        ]
      };
    });
    
    // Sort experience by start date (most recent first)
    experience.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    
    // Generate skills (5-15 skills)
    const skillCount = getRandomNumber(5, 15);
    const skills = getRandomSkills(skillCount);
    
    // Generate languages (1-3 languages)
    const languageCount = getRandomNumber(1, 3);
    const languagesList = Array.from({ length: languageCount }, () => {
      const language = getRandomElement(languages);
      const proficiency: "Native" | "Fluent" | "Intermediate" | "Basic" = getRandomElement(["Native", "Fluent", "Intermediate", "Basic"]);
      
      return {
        language,
        proficiency
      };
    });
    
    // Generate certifications (0-3 certifications)
    const certificationCount = getRandomNumber(0, 3);
    const certificationsList = Array.from({ length: certificationCount }, () => {
      const certification = getRandomElement(certifications);
      const year = getRandomNumber(2015, 2025);
      const month = getRandomNumber(1, 12);
      const day = getRandomNumber(1, 28);
      
      return {
        name: certification.name,
        issuer: certification.issuer,
        date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        credentialId: `CRED-${getRandomNumber(10000, 99999)}`,
        url: `https://example.com/verify/${getRandomNumber(1000000, 9999999)}`
      };
    });
    
    // Generate projects (0-3 projects)
    const projectCount = getRandomNumber(0, 3);
    const projectsList = Array.from({ length: projectCount }, () => {
      const projectName = getRandomElement(projectNames);
      const startYear = getRandomNumber(2015, 2023);
      const startMonth = getRandomNumber(1, 12);
      const endYear = getRandomBoolean() ? startYear + getRandomNumber(0, 2) : undefined;
      const endMonth = endYear ? getRandomNumber(1, 12) : undefined;
      const technologies = getRandomSkills(getRandomNumber(3, 6));
      
      return {
        name: projectName,
        description: `A ${getRandomElement(["web-based", "mobile", "desktop"])} ${projectName.toLowerCase()} built with ${getRandomElement(["modern technologies", "a focus on user experience", "scalability in mind"])}.`,
        url: getRandomBoolean() ? `https://github.com/${firstName.toLowerCase()}${lastName.toLowerCase()}/${projectName.toLowerCase().replace(/\s+/g, '-')}` : undefined,
        startDate: `${startYear}-${String(startMonth).padStart(2, '0')}-01`,
        endDate: endYear ? `${endYear}-${String(endMonth).padStart(2, '0')}-01` : undefined,
        technologies
      };
    });
  
  // Generate preferred job types
  const preferredJobTypes: ("Full-time" | "Part-time" | "Contract" | "Internship")[] = getRandomBoolean() ? 
    [getRandomElement(["Full-time", "Part-time", "Contract", "Internship"])] : 
    ["Full-time", getRandomElement(["Part-time", "Contract"])];
  
  // Generate preferred locations
    const preferredLocationCount = getRandomNumber(1, 3);
    const preferredLocations = Array.from({ length: preferredLocationCount }, () => 
      getRandomElement(cities).city
    );
    
    // Generate preferred location types
    const preferredLocationTypes: ("Remote" | "Hybrid" | "On-site")[] = getRandomBoolean() ? 
      [getRandomElement(["Remote", "Hybrid", "On-site"])] : 
      ["Remote", getRandomElement(["Hybrid", "On-site"])];
    
    // Generate preferred industries
    const industries = ["Technology", "Finance", "Healthcare", "Education", "E-commerce", "Entertainment", "Manufacturing", "Retail", "Consulting", "Energy"];
    const preferredIndustryCount = getRandomNumber(1, 3);
    const preferredIndustries = Array.from({ length: preferredIndustryCount }, () => 
      getRandomElement(industries)
    );
    
    // Generate preferred salary
    const baseSalary = getRandomNumber(5, 15) * 10000;
    const preferredSalary = {
      min: baseSalary,
      max: baseSalary + getRandomNumber(2, 5) * 10000,
      currency: "USD"
    };
    
    // Generate availability
    const availability: "Immediate" | "2 weeks" | "1 month" | "3 months" | "Custom" = getRandomElement(["Immediate", "2 weeks", "1 month", "3 months", "Custom"]);
    const customAvailability = availability === "Custom" ? `${getRandomNumber(1, 6)} months` : undefined;
    
    // Generate last updated date
    const lastUpdated = getRandomDate(new Date(2024, 0, 1), new Date());
    
    return {
      id: `cv-${index + 1}`,
      personalInfo: {
        firstName,
        lastName,
        email,
        phone,
        city,
        country,
        postalCode: `${getRandomNumber(10000, 99999)}`,
        linkedIn: `https://linkedin.com/in/${firstName.toLowerCase()}${lastName.toLowerCase()}`,
        github: getRandomBoolean() ? `https://github.com/${firstName.toLowerCase()}${lastName.toLowerCase()}` : undefined,
        website: getRandomBoolean() ? `https://${firstName.toLowerCase()}${lastName.toLowerCase()}.com` : undefined,
        summary: `${getRandomElement(["Experienced", "Skilled", "Dedicated", "Passionate"])} ${getRandomElement(jobTitles)} with ${getRandomNumber(1, 15)} years of experience in ${getRandomElement(fields)}. ${getRandomElement(["Specializing in", "Focused on", "Passionate about"])} ${getRandomElement(["building scalable applications", "creating user-friendly interfaces", "solving complex problems", "optimizing system performance"])}.`
      },
      education,
      experience,
      skills,
      languages: languagesList,
      certifications: certificationsList.length > 0 ? certificationsList : undefined,
      projects: projectsList.length > 0 ? projectsList : undefined,
      preferredJobTypes,
      preferredLocations,
      preferredLocationTypes,
      preferredIndustries,
      preferredSalary,
      availability,
      customAvailability,
      lastUpdated
    };
  });

  return { cvs: mockCVs };
};

export default generateMockCVs;
