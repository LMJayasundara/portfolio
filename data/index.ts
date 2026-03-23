export type ExperienceRole = {
  title: string;
  period: string;
  highlights: string[];
};

export type Experience = {
  company: string;
  workMode?: string;
  roles: ExperienceRole[];
  technologies: string[];
  image?: string;
  link?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export type HeroContent = {
  bio: string;
};

export type ContactContent = {
  heading: string;
  description: string;
};

export const heroContent: HeroContent = {
  bio: [
    'Results-oriented Software Engineer with 4+ years of experience specializing in full-stack development, AWS serverless architecture, and AI agent integration.',
    'Proficient in JavaScript, TypeScript, and Python with deep expertise in Node.js, Next.js, React, and NestJS. Experienced in building production-grade AI-powered applications using Amazon Bedrock, LangChain, and Hugging Face models.',
    'Strong background in cloud-native development, WebRTC real-time communication, cross-platform desktop application development, and cost-effective serverless AWS deployments.',
  ].join(' '),
};

export const contactContent: ContactContent = {
  heading: 'Contact me',
  description:
    'Feel free to reach out to me for questions, inquiries, or collaborations. Open to new opportunities and challenges.',
};

export const experiences: Experience[] = [
  {
    company: 'Vega Innovations — Colombo, Sri Lanka',
    workMode: 'Hybrid',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Nov 2024 – Present',
        highlights: [
          'Leading architecture decisions for scalable, maintainable cloud-native solutions across AI and IoT product lines.',
          'Building remote device management software with secure terminal access, file management, and real-time system monitoring.',
          'Developing OCPP-compliant fast charger and home charger software on the device side using Node.js and TypeScript.',
          'Implementing a NestJS-based OCPP server to securely connect and manage EV chargers at scale.',
          'Cross-compiling a TypeScript codebase for Linux (Raspberry Pi, BuildRoot), Windows, and macOS deployments.',
        ],
      },
      {
        title: 'Software Engineer',
        period: 'Dec 2021 – Nov 2024',
        highlights: [
          'Built full-stack web applications using Next.js, React, Tailwind CSS, and AWS serverless services.',
          'Deployed AWS Amplify Gen2 apps with Cognito authentication, GraphQL APIs, Lambda functions, and CI/CD pipelines.',
          'Collaborated with a team of developers to build and test features for React-based web applications.',
          'Mentored junior developers and conducted code reviews to maintain code quality standards.',
        ],
      },
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'Next.js',
      'React',
      'AWS',
      'Bedrock',
      'WebRTC',
      'WebSocket',
      'OCPP 1.6',
      'Amplify Gen2',
      'GraphQL',
      'Cognito',
      'Tailwind CSS',
    ],
    link: 'https://github.com/LMJayasundara',
  },
  {
    company: 'Atlas Axillia Co. (Pvt) Ltd — Colombo, Sri Lanka',
    workMode: 'On-site',
    roles: [
      {
        title: 'IoT Developer Intern',
        period: 'Apr 2021 – Oct 2021',
        highlights: [
          'Developed an IoT interface to monitor and analyze production processes in real time.',
          'Built an AI-based system to detect and count damaged books, improving inventory accuracy.',
          'Integrated an AWS Cloud IoT platform with PLCs for centralized monitoring and control of industrial equipment.',
        ],
      },
    ],
    technologies: ['IoT', 'Python', 'Node.js', 'AWS IoT', 'PLC', 'Dashboards'],
    link: 'https://github.com/LMJayasundara',
  },
];

export const projects: Project[] = [
  {
    title: 'AWS Amplify Gen2 Full-Stack Application Platform',
    description:
      'Architected and delivered scalable full-stack web applications on AWS Amplify Gen2 with Cognito-based authentication, Bedrock AI integration, S3 file management, and GraphQL APIs. Implemented serverless Lambda functions and configured CI/CD pipelines for isolated dev and prod environments.',
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'shadcn/ui',
      'AWS Amplify Gen2',
      'Amazon Bedrock',
      'Cognito',
      'Lambda',
      'GraphQL',
      'S3',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'Multi-Modal AI Conversational Chatbot Suite',
    description:
      'Built a serverless AI chatbot platform supporting multi-regional model routing, voice interaction via LiveKit agents, and knowledge base–driven Q&A from uploaded PDF, DOCX, and text files. Enabled real-time voice conversations and document-grounded responses in a unified interface.',
    tech: [
      'Next.js',
      'React',
      'Python 3',
      'LangChain',
      'AWS Amplify Gen2',
      'Amazon Bedrock',
      'LiveKit',
      'Lambda',
      'S3',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'AWS Bedrock AgentCore Runtime & Memory Gateway',
    description:
      'Developed a custom serverless chatbot backend leveraging AWS Bedrock AgentCore runtime with persistent memory and gateway configuration, enabling stateful multi-turn AI conversations with low-latency serverless execution.',
    tech: ['Python 3', 'Amazon Bedrock', 'AWS AgentCore', 'AWS Lambda', 'Serverless'],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'Swagger-Integrated API-Aware AI Chatbot',
    description:
      'Created an AI chatbot capable of understanding custom Swagger/OpenAPI documentation and dynamically invoking defined API endpoints to answer user queries with live data. Deployed on a serverless AWS stack with Amplify Gen2 AI toolkit.',
    tech: [
      'Next.js',
      'React',
      'Python 3',
      'AWS Amplify Gen2 AI Toolkit',
      'Amazon Bedrock',
      'Lambda',
      'S3',
      'OpenAPI/Swagger',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'AI-Powered Interview Agent Platform',
    description:
      'Engineered an end-to-end interview automation platform that conducts real-time AI interviews via WebRTC and generates comprehensive structured candidate reports. Deployed on AWS with container-based and serverless services.',
    tech: [
      'Next.js',
      'Python 3',
      'WebRTC',
      'Amazon Bedrock',
      'AWS ECR',
      'ECS',
      'S3',
      'Lambda',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'Intelligent Automated Recruitment Platform',
    description:
      'Built a full-cycle recruitment automation system that parses uploaded CVs against job descriptions, generates AI-driven match scores, triggers automated candidate interviews, and populates a Kanban board to support manual hiring workflows.',
    tech: [
      'Next.js',
      'React',
      'Python 3',
      'LangChain',
      'Amazon Bedrock',
      'Lambda',
      'S3',
      'AWS Amplify Gen2',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'Secure Remote Device Management Platform',
    description:
      'Developed a remote device management solution providing secure terminal access, file manager, real-time system performance monitoring, log management, and configurable alarms — over WebRTC and WebSocket with enterprise user management.',
    tech: [
      'Next.js',
      'NestJS',
      'AWS Amplify Gen2',
      'Cognito',
      'ECS',
      'WebRTC',
      'WebSocket',
      'S3',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'Custom Open-Source Text-to-Speech Engine for AI Agents',
    description:
      'Implemented a TTS pipeline integrating Hugging Face Supertone models with LiveKit for real-time voice synthesis, enabling AI agents to deliver natural-sounding speech responses via AWS Bedrock model orchestration.',
    tech: [
      'Python 3',
      'Hugging Face',
      'Supertone TTS',
      'LiveKit',
      'Amazon Bedrock',
      'AWS Lambda',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
  {
    title: 'Production-Grade Serverless Next.js Website with WAF & SEO',
    description:
      'Delivered a high-performance serverless website with AWS WAF security integration, domain configuration, Open Graph metadata, Google Search Console and Analytics instrumentation — ensuring enterprise-grade security and search visibility.',
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'AWS Amplify Gen2',
      'AWS WAF',
      'CloudFront',
      'Google Analytics',
      'Open Graph',
      'Serverless',
    ],
    github: 'https://github.com/LMJayasundara',
    demo: 'https://github.com/LMJayasundara',
  },
];
