// Profile & page content that you may tweak freely
window.profileData = {
  name: 'Kush Rajesh Shah',
  title: 'Full Stack Software Engineer',
  location: 'United States',
  email: 'kushs2511@gmail.com',
  phone: '+1 (571) 587-5328',
  linkedin: 'https://www.linkedin.com/in/kushshah1025/',
  github: 'https://github.com/Kush1025',
  headline: 'Full-Stack Engineer | Turning Ideas into Reliable Systems',
  subheadline: 'Passionate full-stack developer with 2+ years of experience creating scalable web applications and innovative digital solutions that drive business growth.',
  about: "A Full Stack Software Engineer with my Master’s in Computer Science. With experience at Accenture and startups, I’ve built scalable applications using Java, Python, React, Spring Boot, and cloud-native tools like AWS and Kubernetes.",
  about2: "I enjoy solving real-world problems by designing efficient, user-friendly systems, from microservices-based applications platforms to real-time data streaming. My goal is to create software that is innovative, reliable, and impactful, while constantly learning and exploring new technologies. Beyond the code, I’m driven by curiosity, always experimenting with new frameworks, integrating AI tools into workflows, and exploring how technology can simplify everyday life. Whether it’s optimizing systems or designing seamless user experiences, I aim to build software that makes an impact",
  education: 'M.S. Computer Science, George Mason University',
  experience_years: '2+ years professional experience',
  projects_count: '7+ projects completed',
  languages: 'Fluent in English, Spanish, Hindi, Gujarati',
  profilePhoto: 'image/profile.jpg'
};

window.skills = {
  frontend: [
    { name: 'ReactJS' }, { name: 'Vue' }, { name: 'NextJS' },
    { name: 'HTML/CSS' }, { name: 'Tailwind CSS' },
    { name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'Swift' }
  ],
  backend: [
    { name: 'Python' }, { name: 'Java' }, { name: 'C/C++' }, { name: 'C#' }, { name: '.NET' },
    { name: 'Node.js' }, { name: 'Spring Boot' }, { name: 'FastAPI' }, { name: 'RESTful API' }
  ],
  database: [
    { name: 'SQL' }, { name: 'MySQL' }, { name: 'MongoDB' }, { name: 'NoSQL' }, { name: 'GraphQL' }
  ],
  devops: [
    { name: 'Git' }, { name: 'GitLab' }, { name: 'Docker' }, { name: 'Kubernetes' },
    { name: 'Jenkins' }, { name: 'Kafka' }, { name: 'Azure DevOps' },
    { name: 'AWS Cloud (EC2)' }, { name: 'Terraform' }, { name: 'GCP' }, { name: 'Rancher' }, { name: 'Jira' }
  ],
  tools: [
    { name: 'ServiceNow' }, { name: 'Eclipse' }, { name: 'Visual Studio' }, { name: 'IntelliJ' },
    { name: 'Figma' }, { name: 'WordPress' }, { name: 'LLM' }, { name: 'Playwright' }
  ],
  competencies: [
    { name: 'Data Structures & Algorithms' }, { name: 'OO Design' }, { name: 'Agile Methodology' },
    { name: 'Full Stack Development' }, { name: 'SDLC' }, { name: 'Duolingo (Streak: 500+)' }
  ]
};

window.education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "George Mason University",
    period: "Aug 2023 – May 2025",
    coursework: [
      "Analysis of Algorithms",
      "Computer Systems and System Programming",
      "Mathematical Foundations of CS",
      "Computer Communication and Networking",
      "Object Oriented Specs and Constructions",
      "Theory of Computation",
      "Information Security",
      "Wireless and Mobile Computing",
      "Component Based Software Development"
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Sinhgad Institute of Technology",
    period: "Aug 2017 – Jul 2021",
    coursework: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Web Technology",
      "DBMS",
      "Software Testing and Quality Assurance",
      "Machine Learning",
      "AI and Robotics",
      "Software Engineering and Project Management",
      "Data Analytics"
    ]
  }
];


window.experience = [
  {
    title: 'Technology and Software Development Intern',
    company: 'WoMen of Connections Ministry Inc.',
    period: 'July 2025 - Present',
    description: 'Designed and developed responsive web applications using Java, ReactJS, and REST APIs in Spring Boot, improving load times by ~30% and ensuring cross-device consistency. Applied data structures and algorithmic optimizations in backend APIs to improve data delivery speed by ~20%. Implemented accessibility-first design by leveraging AI-powered Figma plugins (Magician) for WCAG compliance checks and usability testing with 20+ participants, leading to a ~12% increase in successful task completions.',
    technologies: ['Java', 'ReactJS', 'Spring Boot', 'REST APIs', 'Figma', 'WCAG']
  },
  {
    title: 'Software Engineering - Application Development Associate',
    company: 'Accenture',
    period: 'Aug 2021 - Aug 2023',
    description: 'Developed and integrated REST APIs to send outbound status messages to clients and offices, reducing response time by 30%. Facilitated SFTP integration by creating tickets using existing files. Designed and implemented email templates within ServiceNow for streamlined communication, increasing communication efficiency by 25%. Utilized Transform Map to create tickets and requests from Excel sheets, achieving 99% accuracy in data processing. Experienced in using the Automated Test Framework (ATF) in ServiceNow to create comprehensive test cases, resulting in a 40% reduction in manual testing efforts.',
    technologies: ['ServiceNow', 'REST APIs', 'SFTP', 'ATF', 'UI Builder', 'Transform Map']
  }
];

window.projects = [
  {
    title: 'Real-Time Cryptocurrency Price Tracker',
    description: 'Built a full-stack application streaming live cryptocurrency prices from TradingView using Playwright browser automation with headed mode for transparency and real-time data extraction. Developed WSL-compatible solution with automatic fallback to mock mode, ensuring 100% demonstration availability across different development environments.',
    technologies: ['TypeScript', 'Next.js', 'Playwright', 'TailwindCSS'],
    image: '₿'
  },
  {
    title: 'Movie Review Application',
    description: 'Developed an interactive, responsive UI in ReactJS, improving navigation flow and engagement for 100+ active users. Implemented dynamic rendering and efficient state management, reducing page load time by 40% and improving perceived performance.',
    technologies: ['ReactJS', 'Java', 'Spring Boot', 'MongoDB'],
    image: '🎬'
  },
  {
    title: 'LLM Optimization via Small Model Integration',
    description: 'Reimplemented and advanced the SuperICL framework by integrating black-box LLMs with fine-tuned models. Attained 80% MRPC and 75% SST-2 accuracy via RoBERTa-GPT-4 integration across 50K+ GLUE benchmark samples.',
    technologies: ['LLM', 'PyTorch', 'Hugging Face', 'GLUE'],
    image: '🤖'
  },
  {
    title: 'Enterprise Survey Management Platform',
    description: 'Spearheaded a microservices-based survey management system using Java and Spring Boot, resolving monolithic scalability issues and enabling modular updates—resulting in a 60% faster survey deployment cycle. Orchestrated and containerized services using Docker and Kubernetes, implementing CI/CD pipelines with AWS CodePipeline and CodeDeploy, cutting deployment time by 70% and eliminating human error in manual releases.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'AWS CodePipeline'],
    image: '🏢'
  },
  {
    title: 'Modern Survey Management System',
    description: 'Developed a modular survey management system using FastAPI microservices with a Vue.js front end, replacing a monolithic architecture and reducing deployment cycle time by 60%. Integrated microservices with a MySQL database for secure data storage and retrieval, enabling real-time survey updates. Containerized services using Docker and orchestrated them with Kubernetes, implementing automated CI/CD pipelines that ensured zero-downtime deployments across development, staging, and production environments.',
    technologies: ['Python', 'FastAPI', 'Vue.js', 'MySQL', 'AWS', 'Docker', 'Kubernetes'],
    image: '📊'
  },
  {
    title: 'Alpha Programming Language',
    description: 'Engineered an interpreter using Python to translate user input code into a computer-understandable language. Ensured the programming language featured easy-to-understand syntaxes and semantics suitable for beginners. Achieved a 60% increase in user adoption due to the language\'s simplicity and beginner-friendly features, evidenced by positive feedback from user testing.',
    technologies: ['Python', 'VS Code', 'Interpreter Design', 'Language Processing'],
    image: '🔤'
  },
  {
    title: 'Gesture Recognition using Wearable Sensors',
    description: 'Developed a smartphone-based gesture recognition system using accelerometer, gyroscope, and magnetometer sensors worn on the wrist to capture data for predefined gestures. Implemented machine learning model (Random Forest) for real-time gesture classification with high accuracy and low latency, offering a practical, low-cost solution for enhancing user interactions.',
    technologies: ['Machine Learning', 'Random Forest', 'Sensor Data', 'Real-time Processing'],
    image: '👋'
  },
  {
    title: 'Digital K-Map Minimization',
    description: 'Built a responsive, browser-based tool for logic circuit minimization using C++, JavaScript and HTML/CSS. Implemented real-time visualization of logic simplification, enhancing learning outcomes for digital design students. Added multiple code converters (Binary to Gray, BCD) to expand functionality.',
    technologies: ['JavaScript', 'HTML/CSS', 'C++'],
    image: '🔧'
  }
];

window.certifications = [
  { title: 'Microsoft Azure AI Fundamentals (AI-900)', issuer: 'Microsoft', year: '2024', image: '🤖' },
  { title: 'Microsoft Power Platform Fundamentals (PL-900)', issuer: 'Microsoft', year: '2024', image: '⚡' },
  { title: 'Certified Application Developer (CAD)', issuer: 'ServiceNow', year: '2023', image: '🔧' },
  { title: 'Self-made Programming Language: Alfa', issuer: 'International Research Journal of Engineering and Technology (IRJET)', year: '2024', image: '📄' }
];
