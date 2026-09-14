export const portfolioData = {
  profile: {
    name: 'Thanuja M',
    title: 'Full Stack Developer',
    tagline: 'Building production-ready web apps with React, Node.js, NestJS, PostgreSQL, MongoDB, AWS & AI',
    email: 'thanuja.m87@gmail.com',
    phone: '+91 7736188057',
    location: 'Kollam, Kerala, India',
    linkedin: 'https://linkedin.com/in/thanuja-m-mangalan',
    github: 'https://github.com/THANUJA87',
    resumeUrl: '/Resume.pdf',
    avatar: '/thanuja.jpg',
    availableForHire: true,
    summary:
      'Full Stack Developer with 1+ year of experience building web applications using React.js, Node.js, NestJS, PostgreSQL, MongoDB, TypeScript, and AWS. Experienced in developing responsive user interfaces, designing RESTful APIs, implementing authentication and authorization with JWT, and integrating third-party services. Strong understanding of frontend and backend development with hands-on experience delivering production-ready applications. Familiar with AWS services including Lambda, S3, API Gateway, and CloudWatch.',
    highlights: [
      { label: 'Experience', value: '1+ Years' },
      { label: 'Stack', value: 'React · Node · Nest' },
      { label: 'Databases', value: 'PostgreSQL · MongoDB' },
      { label: 'Cloud & AI', value: 'AWS · Bedrock AI' },
    ],
  },

  skillCategories: [
    {
      name: 'Programming Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C'],
      color: 'teal',
    },
    {
      name: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Responsive Design'],
      color: 'cyan',
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'Serverless Architecture'],
      color: 'indigo',
    },
    {
      name: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'Firestore', 'TypeORM'],
      color: 'amber',
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS Lambda', 'API Gateway', 'Amazon S3', 'CloudWatch', 'AWS SAM'],
      color: 'orange',
    },
    {
      name: 'AI / ML',
      skills: ['Amazon Bedrock', 'RAG', 'Vector Embeddings', 'Semantic Search', 'Knowledge Bases'],
      color: 'violet',
    },
    {
      name: 'Tools & Practices',
      skills: ['Git', 'GitHub', 'Axios', 'Postman', 'Google Maps API', 'JWT Auth'],
      color: 'rose',
    },
  ],

  projects: [
    {
      id: 'field-pulse',
      title: 'Field Pulse',
      subtitle: 'Canvassing & Voter Management Platform',
      description:
        'Full-stack canvassing and voter-management platform with map-integrated workflows, analytics modules, and production-grade NestJS backend architecture.',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'NestJS',
        'TypeORM',
        'PostgreSQL',
        'Google Maps API',
        'JWT',
      ],
      highlights: [
        'Led backend-heavy development across Persons, Household, and Analytics modules',
        'Designed REST APIs, service logic, and PostgreSQL operations with NestJS & TypeORM',
        'Built Google Maps integration for location-based canvassing workflows',
        'Delivered end-to-end features integrated with React frontend flows',
      ],
      github: 'https://github.com/THANUJA87',
      featured: true,
    },
    {
      id: 'careerhive',
      title: 'CareerHive',
      subtitle: 'Job Portal Platform',
      description:
        'Full-stack job portal with separate candidate and recruiter dashboards, JWT authentication, role-based access, and complete application lifecycle management.',
      technologies: ['React.js', 'JavaScript', 'Express.js', 'Node.js', 'MongoDB', 'JWT'],
      highlights: [
        'Implemented JWT auth and role-based access for candidates and recruiters',
        'Built job browsing, applications tracking, and recruiter job management flows',
        'Designed RESTful APIs and optimized MongoDB schemas for users, jobs, and applications',
        'Created application management workflows for end-to-end hiring process',
      ],
      github: 'https://github.com/THANUJA87',
      featured: true,
    },
    {
      id: 'ai-assistant',
      title: 'AI-Powered Asset Assistant',
      subtitle: 'Generative AI & RAG Integration',
      description:
        'AI assistant for asset management using Amazon Bedrock with Knowledge Base-driven RAG, S3 document grounding, and streaming token-by-token responses.',
      technologies: [
        'React',
        'TypeScript',
        'Amazon Bedrock',
        'AWS S3',
        'Knowledge Base',
        'Streaming Responses',
      ],
      highlights: [
        'Integrated Amazon Bedrock for generative AI inference in production',
        'Built RAG-style retrieval flow for context-aware answers from domain documents',
        'Used Amazon S3 as document source layer for AI grounding',
        'Implemented streaming responses with robust error handling and fallbacks',
      ],
      github: 'https://github.com/THANUJA87',
      featured: true,
    },
    {
      id: 'firstcry',
      title: 'FirstCry Shopping Site',
      subtitle: 'E-Commerce Application',
      description:
        'Responsive e-commerce web app with CRUD operations, JSON Server REST API, and mobile-friendly React-Bootstrap UI.',
      technologies: ['React', 'React-Bootstrap', 'Axios', 'JSON Server', 'CSS'],
      highlights: [
        'Full CRUD product management with Axios API integration',
        'JSON Server configured as REST API backend',
        'Mobile-first responsive UI with dynamic state management',
      ],
      github: 'https://github.com/THANUJA87',
      featured: false,
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      subtitle: 'Real-Time Weather Dashboard',
      description:
        'Weather application with OpenWeatherMap API integration displaying temperature, humidity, and conditions with responsive UI.',
      technologies: ['React', 'JavaScript', 'CSS', 'OpenWeatherMap API'],
      highlights: [
        'Real-time weather data fetching via OpenWeatherMap API',
        'Responsive design for mobile and desktop devices',
      ],
      github: 'https://github.com/THANUJA87',
      featured: false,
    },
    {
      id: 'cyberbullying',
      title: 'Cyberbullying Detection',
      subtitle: 'LSTM NLP Model',
      description:
        'Machine learning model detecting cyberbullying in social media posts using LSTM neural networks and NLP preprocessing.',
      technologies: ['Python', 'TensorFlow/Keras', 'LSTM', 'NLP'],
      highlights: [
        'LSTM-based text classification pipeline',
        'Data collection and text preprocessing workflow',
      ],
      github: 'https://github.com/THANUJA87',
      featured: false,
    },
  ],

  experience: [
    {
      id: 'geesesquads-jse',
      company: 'Geesesquads Software Service Pvt. Ltd.',
      role: 'Associate Software Engineer',
      period: 'Aug 2025 – Aug 2026',
      type: 'Full-time',
      current: false,
      description:
        'Developing production-grade full-stack applications with React, NestJS, AWS serverless architecture, and Amazon Bedrock AI integrations across frontend, backend, and cloud infrastructure.',
      achievements: [
        'Built scalable REST APIs using NestJS and Node.js across multiple application modules',
        'Integrated Google Maps for location pinning, map visualization, and geolocation features',
        'Developed serverless applications with AWS Lambda and API Gateway',
        'Integrated Amazon Bedrock for AI assistants, RAG solutions, and conversational AI',
        'Managed file storage and document workflows using Amazon S3',
        'Monitored and optimized cloud apps with Amazon CloudWatch',
      ],
      skills: ['React', 'NestJS', 'TypeScript', 'AWS', 'Bedrock', 'Firebase', 'PostgreSQL'],
    },
    {
      id: 'geesesquads-intern',
      company: 'Geesesquads Software Service Pvt. Ltd.',
      role: 'Software Developer Intern',
      period: 'Mar 2025 – Aug 2025',
      type: 'Internship',
      current: false,
      description:
        'Contributed to full-stack web application development with hands-on experience in REST APIs, PostgreSQL, Firebase, and Agile team workflows.',
      achievements: [
        'Developed full-stack features using React.js and Node.js',
        'Built RESTful APIs and database operations with PostgreSQL and Firebase',
        'Participated in debugging, testing, and performance optimization',
        'Collaborated using Git and Agile development practices',
      ],
      skills: ['React', 'Node.js', 'PostgreSQL', 'Firebase', 'Git'],
    },
    {
      id: 'luminar',
      company: 'Luminar Technolab',
      role: 'MERN Full Stack Developer',
      period: 'Aug 2024 – Mar 2025',
      type: 'Training',
      current: false,
      description:
        'Completed intensive MERN Stack training with hands-on full-stack project development, authentication, CRUD operations, and collaborative workflows.',
      achievements: [
        'Built responsive React frontends integrated with RESTful APIs',
        'Developed server-side apps with Node.js, Express.js, and MongoDB',
        'Implemented authentication and database-driven features in real-world projects',
        'Used Git and GitHub for version control and team collaboration',
      ],
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology (BTech)',
      institution: 'APJ Abdul Kalam Technological University',
      year: '2024',
      score: 'CGPA: 8.27',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'MSM Higher Secondary School',
      year: '2020',
      score: '91.5%',
    },
    {
      degree: 'SSLC (10th)',
      institution: 'MSM Higher Secondary School',
      year: '2018',
      score: '95%',
    },
  ],

  certificates: [
    { name: 'Cloud Computing', issuer: 'NPTEL' },
    { name: 'Python for Data Science', issuer: 'IBM Developer Skills Network' },
    { name: 'Data Analytics on Power BI', issuer: 'ICT Academy' },
  ],
}
