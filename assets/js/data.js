/* =========================================================================
   Portfolio content - single source of truth.
   Keep this file in sync with the resumes in /assets/resume.
   ========================================================================= */

window.profileData = {
  name: 'Kush Rajesh Shah',
  title: 'Software Engineer — AI, Full Stack & ServiceNow',
  location: 'United States',
  email: 'kushs2511@gmail.com',
  phone: '+1 (571) 587-5328',
  linkedin: 'https://www.linkedin.com/in/kushshah1025/',
  github: 'https://github.com/Kush1025',

  headline: 'I build AI systems that survive contact with production.',
  subheadline: 'Software Engineer with 3+ years across enterprise platforms and AI-driven backends — shipping Claude-powered automation, Spring Boot microservices, and ServiceNow workflows that replace manual work instead of adding to it.',

  about: 'I am a software engineer with a Master of Science in Computer Science from George Mason University. I work across the full stack, and I spend most of my time where artificial intelligence meets everyday business software: taking a process that people currently run by hand and turning it into something a system can carry on its own.',
  about2: 'What I enjoy is the whole arc of a problem. Sitting with the people who feel it, designing something that fits the way they already work, building it carefully, and then watching the manual version of the job quietly disappear. I care about software that holds up once real users and real data arrive, which means thinking about reliability, security, and cost long before anyone calls it finished. Outside of work I keep building, usually reading about new tooling, rewriting something I made last year, and looking for the next process that does not need a person sitting in the middle of it.',

  education: 'Master of Science in Computer Science, George Mason University',
  experience_years: 'Over three years of professional engineering experience',
  projects_count: 'More than ten projects shipped, from intelligent assistants to distributed backends',
  certifications_line: 'Certified by ServiceNow and Microsoft, with published research',
  languages: 'Fluent in English, Spanish, Hindi, and Gujarati',
  profilePhoto: 'image/profile.jpg'
};

/* Headline metrics shown under the hero. Value + label must read as one plain
   sentence a non-engineer understands on first glance — no internal jargon.
   The context line names the work it came from. */
window.stats = [
  { value: '80%',  label: 'of insurance paperwork now processed without a human', context: 'Stateable · Claude API' },
  { value: '70%',  label: 'less time spent sorting IT support tickets',           context: 'ServiceNow · LLM' },
  { value: 'Zero', label: 'double-booked seats, even under peak traffic',         context: 'Spring Boot · MongoDB' },
  { value: '30+',  label: 'career skills mapped by an AI advisor I built',        context: 'FastAPI · RAG pipeline' }
];

/* Role-targeted resumes available for download */
window.resumes = [
  { label: 'Software Engineer',         file: 'assets/resume/Kush%20Rajesh%20Shah%20-%20Resume.pdf',                 name: 'Kush Rajesh Shah - Software Engineer.pdf' },
  { label: 'AI Engineer',               file: 'assets/resume/Kush%20Shah%20-%20Resume.pdf',                          name: 'Kush Rajesh Shah - AI Engineer.pdf' },
  { label: 'Forward Deployed Engineer', file: 'assets/resume/Kush%20Rajesh%20Shah%20-%20FDE.pdf',                    name: 'Kush Rajesh Shah - FDE.pdf' },
  { label: 'ServiceNow Developer',      file: 'assets/resume/Kush%20Rajesh%20Shah%20-%20ServiceNow%20Developer.pdf', name: 'Kush Rajesh Shah - ServiceNow Developer.pdf' }
];

/* =========================== Skills ===================================== */
/* icon = inner markup of a 24x24 stroke SVG */
window.skillGroups = [
  {
    key: 'ai',
    label: 'AI & Automation',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.7-6.7l-1.4 1.4M7.7 16.3l-1.4 1.4m12.4 0l-1.4-1.4M7.7 7.7L6.3 6.3M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
    items: ['Claude API', 'LLM Integration', 'AI Agents', 'RAG Pipelines', 'Prompt Engineering', 'Spring AI', 'ETL Pipelines']
  },
  {
    key: 'backend',
    label: 'Languages & Backend',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-14-4h.01M7 16h.01"/>',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Spring Boot', 'Spring Security', 'FastAPI', 'Node.js', 'REST APIs', 'JWT / RBAC', 'Microservices']
  },
  {
    key: 'frontend',
    label: 'Frontend',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
    items: ['ReactJS', 'Next.js', 'Vue.js', 'HTML / CSS', 'Tailwind CSS']
  },
  {
    key: 'data',
    label: 'Data & Messaging',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 7c0 1.66 3.58 3 8 3s8-1.34 8-3M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3m0 5c0 1.66-3.58 3-8 3s-8-1.34-8-3"/>',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Apache Kafka']
  },
  {
    key: 'cloud',
    label: 'Cloud, DevOps & Tooling',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 001-7.87A6 6 0 006.08 10 4 4 0 003 15z"/>',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitLab CI/CD', 'Jenkins', 'Git', 'JUnit 5', 'Pytest', 'Postman', 'Jira']
  },
  {
    key: 'servicenow',
    label: 'ServiceNow Platform',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
    items: ['REST APIs', 'Business Rules', 'Client Scripts', 'UI Policies', 'ACLs', 'Flow Designer', 'Transform Maps', 'ITSM']
  }
];

/* =========================== Education ================================== */
window.education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'George Mason University',
    location: 'Fairfax, Virginia, USA',
    period: 'Aug 2023 – May 2025',
    detail: '',
    coursework: [
      'Analysis of Algorithms',
      'Computer Systems and System Programming',
      'Mathematical Foundations of CS',
      'Computer Communication and Networking',
      'Object Oriented Specs and Constructions',
      'Theory of Computation',
      'Information Security',
      'Wireless and Mobile Computing',
      'Component Based Software Development'
    ]
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Sinhgad Institute of Technology',
    location: 'Pune, Maharashtra, India',
    period: 'Aug 2017 – Jul 2021',
    detail: '',
    coursework: [
      'Data Structures and Algorithms',
      'Object Oriented Programming',
      'Operating Systems',
      'Web Technology',
      'DBMS',
      'Software Testing and Quality Assurance',
      'Machine Learning',
      'AI and Robotics',
      'Software Engineering and Project Management',
      'Data Analytics'
    ]
  }
];

/* =========================== Experience ================================= */
window.experience = [
  {
    title: 'Software Engineer',
    company: 'Stateable',
    location: 'Remote, USA',
    period: 'Nov 2025 – Jun 2026',
    summary: 'Owned an AI deployment end-to-end for insurance operations — from unstructured document ingestion through to a production pipeline running inside the client quote and commission workflow.',
    highlights: [
      'Shipped a production Claude API and AI agent pipeline directly into the quote and commission workflow, achieving <strong>80% straight-through processing</strong> with zero manual intervention.',
      'Solved unstructured data ingestion at client scale by building ETL pipelines and regex-based cleaning and validation into MongoDB and DynamoDB, standardizing <strong>100+ real-world document types at 95% extraction accuracy</strong>.',
      'Combined AI agents with deterministic parsing logic to normalize noisy, inconsistent multi-format inputs into a single standardized schema for policy, commission, and quote data.',
      'Reduced deployment risk in a live production environment by containerizing services with Docker and deploying on AWS Lambda via the AWS CLI, automating test and release cycles through GitLab CI/CD.'
    ],
    technologies: ['Python', 'Claude API', 'AI Agents', 'MongoDB', 'DynamoDB', 'AWS Lambda', 'Docker', 'GitLab CI/CD', 'Ubuntu']
  },
  {
    title: 'Technology and Software Development Intern',
    company: 'WoMen of Connections Ministry Inc.',
    location: 'Remote, USA',
    period: 'Jul 2025 – Nov 2025',
    summary: 'Rebuilt a static organizational website into a dynamic, accessible full-stack product.',
    highlights: [
      'Rebuilt a static platform into a dynamic full-stack application using ReactJS and Spring Boot REST APIs, cutting <strong>page load time by 30%</strong> and <strong>API latency by 20%</strong> for 20+ tested users.',
      'Applied data-structure and algorithmic optimizations across backend APIs to improve data delivery speed and guarantee cross-device consistency.',
      'Implemented accessibility-first design using AI-powered Figma plugins for WCAG compliance checks, with usability testing across 20+ participants that lifted successful task completion by ~12%.'
    ],
    technologies: ['Java', 'Spring Boot', 'ReactJS', 'REST APIs', 'Figma', 'WCAG']
  },
  {
    title: 'Software Engineering — Application Development Associate',
    company: 'Accenture',
    location: 'Pune, Maharashtra, India',
    period: 'Aug 2021 – Aug 2023',
    summary: 'Embedded with enterprise business units to design, build, and roll out ServiceNow applications and ITSM automation.',
    highlights: [
      'Embedded with <strong>3+ business units</strong> to design and deploy ServiceNow REST APIs automating outbound ITSM notifications, freeing a 10+ engineer team from manual status updates and <strong>cutting response time by ~30%</strong>.',
      'Built Client Scripts and UI Policies across <strong>5+ custom Tables and Forms</strong> to enforce dynamic field validation and streamline data entry, reducing user input errors by ~40%.',
      'Developed Business Rules and ACLs enforcing role-based data access across 3+ ServiceNow applications, with <strong>zero unauthorized access incidents</strong> during tenure.',
      'Designed Flow Designer workflows automating multi-step approval escalations across <strong>4+ enterprise service operation teams</strong>, reducing manual intervention in approvals by ~50%.',
      'Built Transform Maps to auto-generate ITSM tickets from client-supplied Excel data across 10+ data sources at <strong>99% accuracy</strong>, replacing a fully manual triage process and improving SLA compliance.',
      'Automated SFTP file transfer workflows with programmatic ticket generation, and designed ServiceNow email templates that increased communication efficiency by ~25%.',
      'Authored comprehensive test suites with the Automated Test Framework (ATF), cutting manual testing effort by ~40%.'
    ],
    technologies: ['ServiceNow', 'REST APIs', 'Business Rules', 'Client Scripts', 'UI Policies', 'ACLs', 'Flow Designer', 'Transform Maps', 'ATF', 'SFTP', 'ITSM']
  }
];

/* =========================== Projects =================================== */
window.projects = [
  {
    title: 'AI-Powered IT Help Desk',
    period: 'Jun 2026 – Present',
    category: 'Enterprise AI',
    featured: true,
    image: '🛠️',
    description: 'A custom ServiceNow application that eliminates manual IT incident triage by putting an LLM in front of every inbound ticket.',
    highlights: [
      'Integrated an LLM via outbound REST API to auto-categorize incidents, suggest resolutions, and assign priority levels — reducing triage time by ~70%.',
      'Automated ticket routing across employees, agents, and managers with Flow Designer workflows and ACL-based access, backed by Business Rules for stage notifications.'
    ],
    technologies: ['ServiceNow', 'Flow Designer', 'Business Rules', 'ACLs', 'REST API', 'LLM']
  },
  {
    title: 'AI-Powered Career Skill Navigator',
    period: 'Nov 2025 – Dec 2025',
    category: 'LLM + RAG',
    featured: true,
    image: '🧭',
    description: 'A full-stack RAG career advisor that helps software engineers explore skills, dependencies, and learning paths through chat and searchable skill cards.',
    highlights: [
      'Built a RAG pipeline with FastAPI, sentence-transformers, and Pinecone over a 30+ skill knowledge base, grounding Claude API responses to eliminate hallucinations.',
      'Added a Redis semantic caching layer with 92%+ similarity thresholding to cut redundant LLM calls, and shipped the Next.js chat frontend end-to-end.'
    ],
    technologies: ['Python', 'FastAPI', 'Claude API', 'Pinecone', 'Redis', 'Next.js', 'TypeScript']
  },
  {
    title: 'Online Event Booking Platform',
    period: 'Jan 2026 – Feb 2026',
    category: 'Microservices',
    featured: true,
    image: '🎟️',
    description: 'A production-grade, high-concurrency booking backend built as five independent Spring Boot services with AI-assisted discovery.',
    highlights: [
      'Eliminated overbooking under high concurrency with atomic MongoDB operations and optimistic locking, while Redis caching cut repeated queries by ~60%.',
      'Secured five Spring Boot services with JWT and Spring Security RBAC, integrated Stripe payments and Kafka messaging, and added AI search via Spring AI with Groq LLaMA 3.3.'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring AI', 'Apache Kafka', 'Redis', 'MongoDB', 'JWT', 'Stripe']
  },
  {
    title: 'Microservices Based Survey Management System',
    period: 'Mar 2025 – Apr 2025',
    category: 'Cloud Migration',
    featured: false,
    image: '🏢',
    description: 'Migrated a monolithic enterprise survey system to Spring Boot microservices, resolving scalability bottlenecks and enabling modular releases.',
    highlights: [
      'Decomposed a monolith into independently owned Spring Boot services, reducing survey deployment cycle time by 60%.',
      'Containerized with Docker and Kubernetes, cutting deployment time by 70% through AWS CodePipeline CI/CD.'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'AWS CodePipeline']
  },
  {
    title: 'Modern Survey Management System',
    period: 'Apr 2025 – May 2025',
    category: 'Cloud Migration',
    featured: false,
    image: '📊',
    description: 'A modular FastAPI microservices rebuild of the same survey domain with a Vue.js front end and zero-downtime delivery.',
    highlights: [
      'Rebuilt the survey domain as FastAPI microservices with a Vue.js front end, reducing deployment cycle time by 60%.',
      'Orchestrated services with Docker and Kubernetes to deliver zero-downtime releases across development, staging, and production.'
    ],
    technologies: ['Python', 'FastAPI', 'Vue.js', 'MySQL', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    title: 'Movie Review Application',
    period: 'Jan 2025 – Feb 2025',
    category: 'Full Stack',
    featured: false,
    image: '🎬',
    description: 'A responsive full-stack movie exploration app built on ReactJS and Spring Boot REST APIs with MongoDB.',
    highlights: [
      'Improved user session engagement by 25% through an interactive, responsive ReactJS interface over Spring Boot REST APIs.',
      'Reduced page load time by 40% via dynamic rendering and efficient state management for 100+ active users.'
    ],
    technologies: ['ReactJS', 'Java', 'Spring Boot', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Real-Time Cryptocurrency Price Tracker',
    period: '2025',
    category: 'Automation',
    featured: false,
    image: '₿',
    description: 'A full-stack tracker streaming live cryptocurrency prices out of TradingView using Playwright browser automation.',
    highlights: [
      'Streamed live TradingView price data using Playwright browser automation in headed mode for full extraction transparency.',
      'Built a WSL-compatible fallback to mock mode, ensuring the demo runs in any development environment.'
    ],
    technologies: ['TypeScript', 'Next.js', 'Playwright', 'Tailwind CSS']
  },
  {
    title: 'Alpha Programming Language',
    period: '2023',
    category: 'Systems',
    featured: false,
    image: '🔤',
    description: 'A beginner-friendly interpreted programming language and interpreter engineered in Python — published research.',
    highlights: [
      'Engineered a Python interpreter translating a purpose-designed beginner syntax into executable instructions.',
      'Published as "Self-made Programming Language: Alfa" in the International Research Journal of Engineering and Technology (IRJET).'
    ],
    technologies: ['Python', 'Interpreter Design', 'Language Processing']
  },
  {
    title: 'Gesture Recognition using Wearable Sensors',
    period: '2022',
    category: 'Machine Learning',
    featured: false,
    image: '👋',
    description: 'A smartphone-based gesture recognition system using wrist-worn accelerometer, gyroscope, and magnetometer data.',
    highlights: [
      'Captured wrist-worn accelerometer, gyroscope, and magnetometer time-series data for predefined gestures.',
      'Trained a Random Forest classifier delivering real-time classification at high accuracy and low latency.'
    ],
    technologies: ['Machine Learning', 'Random Forest', 'Sensor Data', 'Real-Time Processing']
  },
  {
    title: 'Digital K-Map Minimization',
    period: '2021',
    category: 'Tools',
    featured: false,
    image: '🔧',
    description: 'A browser-based logic circuit minimization tool with real-time visualization for digital design students.',
    highlights: [
      'Implemented real-time visualization of Karnaugh map simplification to improve learning outcomes for digital design students.',
      'Extended the tool with code converters including Binary to Gray and BCD.'
    ],
    technologies: ['JavaScript', 'HTML / CSS', 'C++']
  }
];

/* ===================== Certifications & Publications ==================== */
window.certifications = [
  { title: 'Certified Application Developer (CAD)', issuer: 'ServiceNow', year: '2023', image: '🧩', type: 'Certification' },
  { title: 'Certified System Administrator (CSA)',  issuer: 'ServiceNow', year: '2022', image: '⚙️', type: 'Certification' },
  { title: 'Azure AI Fundamentals (AI-900)',        issuer: 'Microsoft',  year: '2024', image: '🤖', type: 'Certification' },
  { title: 'Power Platform Fundamentals (PL-900)',  issuer: 'Microsoft',  year: '2024', image: '⚡', type: 'Certification' },
  { title: 'Self-made Programming Language: Alfa',  issuer: 'International Research Journal of Engineering and Technology (IRJET)', year: '2024', image: '📄', type: 'Publication' }
];
