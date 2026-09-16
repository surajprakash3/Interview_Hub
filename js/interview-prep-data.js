/**
 * INTERVIEW_PREP_DATA: Chapters 7, 8 and Appendix A
 * Source: Placement Preparation Booklet & Core Technical Interviews
 *
 * 1. INTERVIEW_STRATEGIES_DATA: Chapter 7 - 10 Core Interview Preparation Strategies
 * 2. HR_FAQ_DATA: Chapter 8 - All 50 Frequently Asked HR & Technical Behavioral Questions
 * 3. APPENDIX_ALGORITHMS_DATA: Appendix A - Complete Master Pseudocode Library (Algorithms 9 to 33)
 */

// =============================================================================
// CHAPTER 7: INTERVIEW PREPARATION STRATEGIES (10 STRATEGIES)
// =============================================================================
const INTERVIEW_STRATEGIES_DATA = [
  {
    id: 1,
    title: '1. Research the Company',
    icon: 'ri-building-4-line',
    color: '#3b82f6',
    desc: 'Learn about the company’s history, mission, values, culture, products, services, and recent news. Understanding the company’s background demonstrates genuine interest and helps tailor your responses during the interview.',
    checklist: [
      'Study core business model, key clients, and revenue drivers',
      'Read latest quarterly press releases and leadership updates',
      'Understand their engineering culture and primary tech stack',
      'Identify their competitors and market positioning'
    ]
  },
  {
    id: 2,
    title: '2. Understand the Job Role',
    icon: 'ri-briefcase-4-line',
    color: '#10b981',
    desc: 'Analyze the job description thoroughly to understand the requirements, responsibilities, and qualifications for the position. Identify key skills and experiences that align with the role and be prepared to discuss them during the interview.',
    checklist: [
      'Deconstruct required vs. preferred technical qualifications',
      'Map your past academic and personal projects directly to key requirements',
      'Prepare 2-3 specific technical stories that prove your capability for this exact role',
      'Identify domain-specific jargon or tools mentioned in the JD'
    ]
  },
  {
    id: 3,
    title: '3. Practice Commonly Asked Questions',
    icon: 'ri-question-answer-line',
    color: '#f59e0b',
    desc: 'Prepare responses to commonly asked interview questions, such as "Tell me about yourself," "What are your strengths and weaknesses," and "Why do you want to work for this company?" Practicing responses helps articulate your thoughts clearly and confidently during the interview.',
    checklist: [
      'Master the 90-second "Elevator Pitch" using Present-Past-Future',
      'Formulate honest, growth-oriented answers for strengths and weaknesses',
      'Use the STAR framework for all behavioral questions',
      'Rehearse out loud to avoid filler words (e.g. "um", "like")'
    ]
  },
  {
    id: 4,
    title: '4. Highlight Achievements and Experiences',
    icon: 'ri-trophy-line',
    color: '#8b5cf6',
    desc: 'Identify relevant achievements, experiences, and skills from your past roles or projects that demonstrate your qualifications for the job. Prepare specific examples and anecdotes to illustrate your abilities and accomplishments.',
    checklist: [
      'Quantify results with metrics (e.g., "reduced latency by 35%", "handled 10k requests")',
      'Emphasize your individual contribution within team efforts',
      'Highlight problem-solving ingenuity when facing technical roadblocks',
      'Bring concrete artifacts (GitHub links, live demo URLs, portfolio)'
    ]
  },
  {
    id: 5,
    title: '5. Develop a Personal Brand',
    icon: 'ri-user-star-line',
    color: '#ec4899',
    desc: 'Define your unique strengths, values, and career goals to create a compelling personal brand. Communicate your brand consistently throughout your resume, cover letter, online profiles, and interview responses to showcase your professional identity.',
    checklist: [
      'Align your LinkedIn profile, GitHub repository, and resume typography',
      'Position yourself with a clear niche (e.g., "Java Backend Engineer with Cloud focus")',
      'Maintain an active GitHub portfolio with clean README documentation',
      'Demonstrate a consistent narrative across all interview rounds'
    ]
  },
  {
    id: 6,
    title: '6. Mock Interviews and Role-playing',
    icon: 'ri-group-line',
    color: '#06b6d4',
    desc: 'Conduct mock interviews with friends, family members, or career counselors to simulate real interview scenarios. Practice answering questions, receiving feedback, and refining your responses to improve confidence and performance.',
    checklist: [
      'Simulate high-pressure whiteboard and live coding sessions',
      'Record yourself on video to analyze posture, eye contact, and pacing',
      'Undergo peer reviews with fellow engineering candidates',
      'Practice thinking out loud while solving algorithmic challenges'
    ]
  },
  {
    id: 7,
    title: '7. Stay Updated on Industry Trends',
    icon: 'ri-line-chart-line',
    color: '#14b8a6',
    desc: 'Stay informed about industry trends, developments, and emerging technologies relevant to your field. Follow industry publications, blogs, forums, and social media to stay abreast of current topics and demonstrate your industry knowledge during the interview.',
    checklist: [
      'Follow AI/ML, Cloud Native (Kubernetes, Serverless), and DevOps evolution',
      'Read engineering blogs from Netflix, Uber, Google, and Meta',
      'Understand how recent tech shifts impact the hiring company’s products',
      'Prepare informed perspectives on ethical AI, data privacy, and cloud scale'
    ]
  },
  {
    id: 8,
    title: '8. Improve Communication and Body Language',
    icon: 'ri-user-voice-line',
    color: '#f97316',
    desc: 'Work on verbal and non-verbal communication skills, such as clarity, tone, articulation, and body language. Practice active listening, maintain eye contact, and exhibit confidence and enthusiasm during the interview to make a positive impression.',
    checklist: [
      'Maintain upright, open posture and direct webcam eye contact',
      'Speak at a measured pace with deliberate pauses before answering',
      'Listen attentively without interrupting the interviewer',
      'Convey genuine energy, curiosity, and professional enthusiasm'
    ]
  },
  {
    id: 9,
    title: '9. Research Interviewers',
    icon: 'ri-search-eye-line',
    color: '#6366f1',
    desc: 'If possible, research the interviewers’ backgrounds, roles, and interests to tailor your responses and questions accordingly. Demonstrating knowledge about the interviewers and their areas of expertise can facilitate rapport-building and meaningful conversations during the interview.',
    checklist: [
      'Look up their LinkedIn profiles for technical background and tenure',
      'Check if they authored tech articles, open-source projects, or conference talks',
      'Tailor technical depth to their seniority (Architect vs. HR Manager vs. Senior Dev)',
      'Find shared alma maters, technologies, or professional communities'
    ]
  },
  {
    id: 10,
    title: '10. Prepare Questions to Ask',
    icon: 'ri-chat-check-line',
    color: '#84cc16',
    desc: 'Prepare thoughtful questions to ask the interviewer about the company, the team, the role, and career development opportunities. Asking insightful questions demonstrates your interest, engagement, and initiative in the interview process.',
    checklist: [
      'Ask about the team’s current architectural roadmap or scaling bottlenecks',
      'Inquire about engineering mentorship and onboarding for fresh graduates',
      'Ask: "What does success look like for someone in this role over the first 6 months?"',
      'Never ask questions easily answered on the company homepage'
    ]
  }
];

// =============================================================================
// CHAPTER 8: FAQ — ALL 50 HR & TECHNICAL BEHAVIORAL INTERVIEW QUESTIONS
// =============================================================================
const HR_FAQ_DATA = [
  {
    id: 1,
    q: "Tell me about yourself.",
    category: "Personal & Background",
    framework: "Present → Past → Future (90 Seconds)",
    tips: "This question is often asked to assess your communication skills and to understand your background, experiences, and interests. Structure: 1. Present (current degree/status & primary tech stack) → 2. Past (key academic projects, internships, leadership) → 3. Future (why this company/role is your ideal next step).",
    sampleAns: "I am a Computer Science graduate specializing in full-stack Java development and cloud architectures. Currently, I focus on building resilient RESTful microservices with Spring Boot and PostgreSQL. In my final year capstone, I led a 4-member team developing an automated resource tracking portal that decreased database query latency by 35% through indexing and caching. I have solved 350+ DSA problems across LeetCode and GeeksforGeeks. Looking ahead, I am eager to contribute to enterprise-scale client systems here at your organization while learning industry-grade distributed systems practices from your senior engineers."
  },
  {
    id: 2,
    q: "Why do you want to work for our company?",
    category: "Company & Role Fit",
    framework: "Values & Tech Alignment",
    tips: "Interviewers want to gauge your interest in the company and your understanding of its products, services, culture, and values. Connect specific company achievements or initiatives with your personal career aspirations.",
    sampleAns: "I have closely tracked your company's digital transformation initiatives for Fortune 500 clients, particularly your recent breakthroughs in multi-cloud enterprise modernization. What resonates most with me is your proven culture of continuous learning, demonstrated by your structured initial training bootcamps for campus hires. My background in core computer science, relational databases, and Java OOP aligns directly with your project demands, and I want to build a long-term engineering career where my code impacts global enterprise users."
  },
  {
    id: 3,
    q: "What do you know about our company?",
    category: "Company & Role Fit",
    framework: "3-Pillar Research (Scale, Innovation, Culture)",
    tips: "This question tests your research skills and how well you've prepared for the interview. Be ready to discuss the company's history, mission, recent projects, and any notable achievements.",
    sampleAns: "Your company is a global technology leader founded with the mission to drive innovation across banking, healthcare, retail, and manufacturing sectors. With a workforce spanning over 40+ countries and consistent Fortune World's Most Admired rankings, you recently delivered cloud-native migration frameworks that reduced client operating overheads significantly. Furthermore, I admire your sustainability commitments and proactive community initiatives in STEM education."
  },
  {
    id: 4,
    q: "What are your strengths and weaknesses?",
    category: "Personal & Background",
    framework: "Strengths with Proof + Weakness with Improvement Plan",
    tips: "Interviewers ask this to understand your self-awareness, humility, and ability to adapt. Focus on strengths relevant to the job and show how you're working on improving your weaknesses.",
    sampleAns: "Strength: My biggest strength is systematic analytical troubleshooting. When faced with complex bugs, I isolate variables, analyze execution logs, and design reproducible unit tests rather than making blind code changes. Weakness: Early in my degree, I hesitated to delegate tasks during group projects, fearing quality inconsistencies. I realized this created bottlenecks, so I adopted Agile task-board workflows (Trello/Jira) with transparent milestone reviews, which greatly improved our team velocity and my delegation skills."
  },
  {
    id: 5,
    q: "Describe a challenging project you've worked on.",
    category: "Technical Projects",
    framework: "STAR Method (Situation, Task, Action, Result)",
    tips: "This question assesses your problem-solving skills, technical expertise, teamwork, and ability to handle challenges under pressure. Be prepared to discuss the project, your role, and the outcome.",
    sampleAns: "Situation: In our college e-commerce portal project, our server crashed during load tests when concurrent simulated checkouts exceeded 500 users. Task: As backend lead, I was tasked with eliminating database lockups and bringing checkout response time under 1 second. Action: I identified N+1 query antipatterns in our ORM layer, replaced them with batch SQL joins, and integrated Redis as an in-memory inventory reservation cache to prevent dirty reads. Result: Checkout throughput increased 4x, response latency dropped from 3.2s to 240ms, and our final demo passed load testing with zero dropped transactions."
  },
  {
    id: 6,
    q: "How do you stay updated with the latest technologies?",
    category: "Work Ethic & Growth",
    framework: "Curated Learning Habit",
    tips: "IT companies value candidates who are proactive about learning and staying current with industry trends. Share your sources for learning, such as online courses, forums, blogs, or conferences.",
    sampleAns: "I dedicate 4 to 5 hours each week to structured continuous learning. I read engineering blogs from companies like Netflix TechBlog, Uber Engineering, and AWS Architecture monthly. For hands-on technical skills, I build small proof-of-concept repositories on GitHub whenever a new stable framework feature drops (e.g. Java 21 Virtual Threads). I also follow Hacker News, r/programming, and newsletters like TLDR Tech to track broader software engineering paradigms."
  },
  {
    id: 7,
    q: "Can you explain [specific technical concept or project] in detail?",
    category: "Technical Deep-Dive",
    framework: "Concept → Analogy → Implementation → Trade-off",
    tips: "Be ready to discuss technical topics mentioned in your resume or relevant to the job role. Explain the concept clearly, using examples if possible, and demonstrate your understanding.",
    sampleAns: "Let's take Database Indexing, which I heavily utilized in my project. Concept: An index is an auxiliary B+ Tree data structure that allows the query engine to locate records without scanning the entire table. Analogy: It functions exactly like an index at the back of a textbook. Implementation: By creating composite B-Tree indexes on commonly queried fields (e.g. customer_id, order_date), query lookup dropped from O(n) full-table scan to O(log n). Trade-off: While read queries become orders of magnitude faster, write/insert operations incur minor overhead because the B+ Tree must be updated on every write."
  },
  {
    id: 8,
    q: "How do you handle tight deadlines or conflicting priorities?",
    category: "Workplace Scenarios",
    framework: "Eisenhower Matrix & Stakeholder Communication",
    tips: "Employers want to know how you manage time, prioritize tasks, and handle stress. Provide examples of situations where you successfully managed deadlines or resolved conflicts.",
    sampleAns: "When facing overlapping deadlines, I apply the Eisenhower Matrix to categorize tasks into Urgent vs. Important. During semester exams while finalizing our capstone software submission, I broke tasks into atomic milestones, identified the non-negotiable critical path deliverables, and negotiated timeline buffers for secondary UI polish with our faculty advisor. Transparent daily standups and prioritizing high-risk technical integrations first ensured both academic excellence and on-time software deployment."
  },
  {
    id: 9,
    q: "Tell me about a time you faced a difficult team member or client. How did you handle it?",
    category: "Teamwork & Conflict",
    framework: "STAR Method with Empathy & Professionalism",
    tips: "This question assesses your interpersonal skills, conflict resolution abilities, and professionalism. Describe the situation, how you addressed the issue, and the outcome.",
    sampleAns: "Situation: During an inter-college hackathon, a teammate strongly insisted on using an unfamiliar graph database that none of us had worked with, despite our 24-hour limit. Task: I needed to align the team around a dependable architecture without causing friction or demotivating my peer. Action: Instead of dismissing their idea, I suggested a timeboxed 45-minute spike test: if we could establish basic schema operations and write CRUD endpoints within 45 minutes, we would proceed; otherwise, we'd fall back to PostgreSQL. The test revealed critical driver compatibility issues, and my teammate willingly agreed to our familiar stack. Result: We finished the prototype 2 hours before the deadline and won 2nd place."
  },
  {
    id: 10,
    q: "Where do you see yourself in 5 years?",
    category: "Career Goals",
    framework: "Growth, Contribution & Technical Leadership",
    tips: "Interviewers want to understand your career goals, aspirations, and long-term plans. Show that you're ambitious, but also realistic and committed to growing within the company.",
    sampleAns: "Over the next 2 to 3 years, my goal is to master enterprise software development, achieve deep domain expertise in your team's tech stack, and deliver robust production features with minimal supervision. By year 5, I envision myself growing into a Senior Software Engineer / Technical Lead, mentoring junior developers, driving system architecture decisions, and collaborating directly with product stakeholders to solve critical business problems."
  },
  {
    id: 11,
    q: "How do you handle working in a team environment?",
    category: "Teamwork & Collaboration",
    framework: "Collaboration, Clear Contracts & Shared Ownership",
    tips: "This question assesses your teamwork and collaboration skills. Provide examples of successful teamwork experiences, how you contribute to a team, and how you handle conflicts within a team.",
    sampleAns: "I thrive in collaborative teams by emphasizing clear interface contracts, psychological safety, and shared ownership. In our college robotics club software sub-team, I established API documentation using Swagger and GitHub pull request templates so frontend and backend members could develop in parallel without blocking each other. I believe that active listening, code review empathy, and celebrating collective milestones are the keys to sustained high performance."
  },
  {
    id: 12,
    q: "What programming languages and technologies are you proficient in?",
    category: "Technical Background",
    framework: "Tiered Proficiency (Primary, Secondary, Tools)",
    tips: "Interviewers want to gauge your technical skills and expertise. List the programming languages, frameworks, and tools you're comfortable with and provide examples of projects where you've used them.",
    sampleAns: "My primary language is Java, which I use for Core DSA, Object-Oriented Design, and Spring Boot REST microservices. I am also proficient in Python for scripting, automated data scraping, and machine learning prototypes. On the database tier, I have strong working experience with SQL (PostgreSQL, MySQL) including index optimization, normalization, and ACID transaction guarantees. For tooling, I use Git, Docker, Maven, and Linux command-line utilities daily."
  },
  {
    id: 13,
    q: "Describe a time when you had to learn a new technology or tool quickly.",
    category: "Work Ethic & Growth",
    framework: "Accelerated Learning Workflow",
    tips: "This question evaluates your ability to adapt and learn new technologies on the job. Provide an example of a situation where you had to quickly acquire a new skill or tool and how you successfully did so.",
    sampleAns: "During an industrial internship, our team had to containerize legacy monolithic services using Docker within 5 days, a technology I hadn't used in production. I read official Docker documentation, completed targeted tutorials on multi-stage builds, and analyzed existing Dockerfiles in open-source repositories. By day 3, I created an optimized multi-stage build that reduced our production container image size from 850MB to 140MB, enabling automated CI/CD pipeline deployments ahead of schedule."
  },
  {
    id: 14,
    q: "How do you handle constructive criticism?",
    category: "Work Ethic & Growth",
    framework: "Detach Ego → Extract Value → Implement & Validate",
    tips: "Interviewers want to assess your ability to receive feedback and improve. Share an example of a time when you received constructive criticism, how you responded to it, and what you learned from the experience.",
    sampleAns: "I view constructive criticism as the fastest accelerator for engineering growth. During a code review, a senior peer pointed out that my service layer was overly tightly coupled to database entities, violating clean separation of concerns. Instead of being defensive, I thanked them, studied the Data Transfer Object (DTO) and Mapper patterns, refactored my pull request, and created unit tests to verify decoupling. Today, writing clean, decoupled code is standard in all my projects."
  },
  {
    id: 15,
    q: "What motivates you in your work?",
    category: "Personal & Background",
    framework: "Intrinsic Curiosity + Tangible Real-World Impact",
    tips: "Employers want to understand your driving factors and what keeps you engaged and productive. Discuss your personal motivations, such as learning new things, solving challenging problems, or making a positive impact.",
    sampleAns: "Two primary things motivate me: the intellectual thrill of solving complex algorithmic puzzles, and knowing that my software solves real human problems. There is immense satisfaction in transforming an ambiguous user requirement into a high-performance, fault-tolerant system that operates seamlessly 24/7. Continuous learning and collaborating with brilliant peers keep me energized every day."
  },
  {
    id: 16,
    q: "How do you prioritize tasks and manage your time effectively?",
    category: "Workplace Scenarios",
    framework: "Time-Boxing & Critical Path Identification",
    tips: "This question evaluates your organizational and time management skills. Describe your approach to prioritizing tasks, setting deadlines, and managing your time efficiently to meet project goals.",
    sampleAns: "I start each morning by identifying the top 3 high-impact objectives that directly advance project milestones. I use time-boxing—dedicating uninterrupted 90-minute blocks for deep technical problem-solving and coding, while batching communication, emails, and syncs into specific windows. I also track tasks using Kanban boards with explicit 'Definition of Done' criteria to maintain visibility and steady velocity."
  },
  {
    id: 17,
    q: "Can you discuss a recent technology trend that interests you?",
    category: "Industry Awareness",
    framework: "Trend → Architectural Driver → Industry Impact",
    tips: "Interviewers want to gauge your interest and passion for technology. Choose a recent technology trend or innovation that excites you and discuss its potential impact on the industry and society.",
    sampleAns: "I am fascinated by the emergence of Edge AI and WebAssembly (Wasm). Traditionally, heavy machine learning inference required sending data over high-latency networks to cloud GPU clusters. By compiling lightweight inference runtimes to WebAssembly and running them directly on client devices and CDN edge nodes, companies achieve near-zero latency, robust offline capability, and superior user data privacy. This architectural shift will redefine mobile and IoT experiences."
  },
  {
    id: 18,
    q: "How do you handle stress in the workplace?",
    category: "Workplace Scenarios",
    framework: "Root-Cause Deconstruction + Stress Resilience Habits",
    tips: "Stress management is crucial in high-pressure IT environments. Describe your strategies for coping with stress, such as taking breaks, practicing mindfulness, or seeking support from colleagues.",
    sampleAns: "When under high pressure, I prevent stress from escalating by deconstructing overwhelming situations into discrete, actionable steps. If a production release experiences an unforeseen bug, I step back, breathe, outline a triage checklist, and focus on the immediate next action. Outside of work, I maintain resilience through regular physical exercise, jogging, and getting quality sleep, which keeps my mental clarity sharp under pressure."
  },
  {
    id: 19,
    q: "What do you consider your greatest professional achievement so far?",
    category: "Personal & Background",
    framework: "STAR Method with Quantifiable Impact",
    tips: "This question allows you to showcase your accomplishments and strengths. Choose a significant professional achievement, explain its importance, and highlight the skills and qualities that contributed to your success.",
    sampleAns: "My proudest achievement was leading the technical build of our college campus placement portal, used by over 1,200 students and 45 visiting recruiting companies. We replaced a chaotic manual spreadsheet process with a secure, role-based web application with automated email notifications and resume parsers. Over 98% of campus drives were administered through our platform with zero data loss or downtime during peak application rushes."
  },
  {
    id: 20,
    q: "How do you stay organized and keep track of your tasks and deadlines?",
    category: "Workplace Scenarios",
    framework: "Digital Tools + Daily Retrospective",
    tips: "Interviewers want to know how you stay on top of your responsibilities. Discuss tools or methods you use for task management, such as to-do lists, project management software, or time-blocking techniques.",
    sampleAns: "I combine Notion for project documentation and technical notes with Jira/GitHub Projects for granular task tracking. Every task has an assigned priority, estimated hours, and test criteria. At the end of every workday, I spend 10 minutes conducting a personal retrospective: reviewing what was completed, moving pending items, and structuring the following day's schedule."
  },
  {
    id: 21,
    q: "How do you handle working under tight deadlines?",
    category: "Workplace Scenarios",
    framework: "Triage, MVP Focus & Frequent Syncs",
    tips: "This question evaluates your ability to work efficiently and effectively under pressure. Provide examples of times when you successfully met deadlines and how you managed your time and resources to do so.",
    sampleAns: "Under tight deadlines, I focus on ruthless prioritization: identifying the Minimum Viable Product (MVP) features that fulfill core business needs. I eliminate scope creep, maintain constant communication with project leads regarding technical trade-offs, and conduct continuous integration testing so that unexpected merge issues do not derail release day. This disciplined approach enabled our team to deliver our hackathon submission on time with high stability."
  },
  {
    id: 22,
    q: "What is your approach to troubleshooting technical issues?",
    category: "Problem Solving",
    framework: "Hypothesis-Driven Scientific Debugging",
    tips: "Interviewers want to assess your problem-solving skills and technical knowledge. Describe your systematic approach to diagnosing and resolving technical issues, including any tools or methodologies you use.",
    sampleAns: "I employ hypothesis-driven debugging: 1. Reproduce the bug consistently in an isolated sandbox environment. 2. Inspect application logs, stack traces, and monitoring metrics to isolate the exact component. 3. Formulate a hypothesis of the root cause and test it using debuggers, breakpoints, or targeted unit tests. 4. Implement the fix, verify regression tests pass, and write automated tests so the issue never resurfaces."
  },
  {
    id: 23,
    q: "Can you discuss a challenging problem you encountered and how you solved it?",
    category: "Problem Solving",
    framework: "STAR Method on Algorithmic/System Challenge",
    tips: "This question assesses your critical thinking and problem-solving abilities. Choose a specific problem you faced, explain the steps you took to analyze and address it, and discuss the outcome.",
    sampleAns: "Situation: While implementing an automated timetable scheduling algorithm for our department, our initial backtracking algorithm suffered combinatorial explosion, exceeding 15 minutes for 60 classes. Task: Reduce execution time under 10 seconds. Action: I remodeled the problem as a Graph Coloring problem and implemented Constraint Satisfaction Programming (CSP) with Minimum Remaining Values (MRV) heuristic and forward checking to prune dead branches early. Result: Schedule generation dropped from 15 minutes to 3.4 seconds."
  },
  {
    id: 24,
    q: "How do you keep up-to-date with industry news and trends?",
    category: "Industry Awareness",
    framework: "Multi-Channel Information Diet",
    tips: "Employers value candidates who stay informed about developments in the IT industry. Describe your methods for staying updated, such as reading tech blogs, attending conferences, or following industry influencers on social media.",
    sampleAns: "I subscribe to weekly newsletters like ByteByteGo (System Design) and Architecture Notes. I listen to podcasts like Software Engineering Daily during commutes and actively follow open-source maintainers and tech leaders on LinkedIn and GitHub. Participating in developer meetups and hackathons also keeps me connected to industry best practices."
  },
  {
    id: 25,
    q: "What role do you typically take in a team project?",
    category: "Teamwork & Leadership",
    framework: "Adaptive Team Player / Technical Anchor",
    tips: "Interviewers want to understand your teamwork dynamics and leadership potential. Describe your usual role in team projects, whether it's taking a leadership role, contributing technical expertise, or facilitating communication and coordination.",
    sampleAns: "I naturally gravitate toward being the Technical Anchor and Facilitator. I enjoy defining technical architecture, designing clean REST APIs, and writing automated test harnesses. However, I am flexible: if a project lacks organizational leadership, I gladly coordinate sprints, assign milestone deadlines, and ensure seamless communication across frontend and backend contributors."
  },
  {
    id: 26,
    q: "Describe a time when you had to resolve a conflict within a team.",
    category: "Teamwork & Conflict",
    framework: "Objective Metrics Over Opinions",
    tips: "Conflict resolution skills are essential for effective teamwork. Share an example of a conflict you mediated or resolved within a team, the steps you took to address it, and the outcome.",
    sampleAns: "In our final year project, two developers strongly disagreed on whether to use React or Angular for the client interface. The debate was delaying sprint progress. I convened an objective decision session where we evaluated both frameworks against 4 objective criteria: team familiarity, bundle size, component reusability, and project deadline. Since 3 of the 4 members already had React experience, the data clearly indicated React was the lower-risk choice, resolving the conflict peacefully."
  },
  {
    id: 27,
    q: "How do you approach learning a new programming language or framework?",
    category: "Work Ethic & Growth",
    framework: "Core Syntax → Idiomatic Patterns → Build Real Project",
    tips: "IT professionals often need to learn new technologies quickly. Describe your approach to learning new programming languages or frameworks, including any resources or strategies you use to accelerate the learning process.",
    sampleAns: "I use a 3-step immersive approach: 1. Master fundamental syntax, memory model, and concurrency primitives using official documentation. 2. Learn idiomatic design patterns (e.g. Goroutines in Go, or Streams in Java). 3. Build a non-trivial CRUD project integrating database persistence and authentication within 7 days. Building real code reveals subtle runtime edge cases that reading alone never exposes."
  },
  {
    id: 28,
    q: "What is your experience with Agile development methodologies?",
    category: "Methodologies & Tools",
    framework: "Scrum Ceremonies & Iterative Value Delivery",
    tips: "Agile methodologies are common in IT projects. Discuss your experience with Agile practices, such as Scrum or Kanban, and how you've contributed to Agile teams or projects.",
    sampleAns: "In our academic group projects and internship, we worked in 2-week Scrum sprints. We held daily 15-minute standups covering what we completed, planned next, and any blockers. We utilized Jira for sprint backlogs, defined story points using planning poker, and conducted sprint retrospectives to analyze what worked well and what needed improvement. Agile helped us pivot quickly based on mentor feedback."
  },
  {
    id: 29,
    q: "How do you handle feedback from code reviews?",
    category: "Work Ethic & Growth",
    framework: "Ego-Free Learning & Code Quality Standards",
    tips: "Code reviews are integral to maintaining code quality and fostering collaboration. Describe your approach to receiving and incorporating feedback from code reviews, including how you address constructive criticism and suggestions for improvement.",
    sampleAns: "I treat code reviews as free masterclasses. When a reviewer leaves comments on naming conventions, edge cases, or potential memory leaks, I evaluate the architectural rationale, engage in respectful technical dialogue if clarifications are needed, and push updated commits promptly. I also maintain personal checklists of review comments to ensure I never repeat the same mistake in subsequent PRs."
  },
  {
    id: 30,
    q: "What do you consider the biggest challenge facing the IT industry today?",
    category: "Industry Awareness",
    framework: "Cybersecurity, Data Privacy & Rapid AI Integration",
    tips: "Interviewers want to gauge your awareness of industry challenges and your ability to think critically about them. Discuss a current issue or trend in the IT industry that you believe poses significant challenges and how you would address it.",
    sampleAns: "The biggest challenge is balancing rapid AI-driven feature delivery with robust Cybersecurity and Data Privacy. As distributed microservices and LLM integrations multiply attack surfaces, securing sensitive data, preventing prompt injections, and adhering to strict compliance regulations (GDPR, HIPAA) without choking developer velocity is critical. Teams must shift security left by adopting automated DevSecOps scanners in their CI/CD pipelines."
  },
  {
    id: 31,
    q: "What do you enjoy most about working in the IT industry?",
    category: "Personal & Background",
    framework: "Pace of Innovation + Global Scale Leverage",
    tips: "Interviewers want to understand your passion for technology and your motivations for pursuing a career in IT. Discuss the aspects of the industry that excite you and keep you engaged.",
    sampleAns: "What thrills me most is the leverage of software: an elegant algorithm written today can run billions of times across global cloud servers, serving millions of people instantly. The fact that the industry continually reinvents itself means stagnation is impossible; there is always a new architectural pattern or paradigm to master."
  },
  {
    id: 32,
    q: "How do you handle conflicting priorities in your work?",
    category: "Workplace Scenarios",
    framework: "Transparent Communication with Business Impact",
    tips: "IT professionals often juggle multiple tasks and projects simultaneously. Describe your approach to managing conflicting priorities, including how you prioritize tasks, communicate with stakeholders, and adjust deadlines if necessary.",
    sampleAns: "When conflicting high-priority requests emerge, I avoid making assumptions in isolation. I document the estimated time and resource demands of both tasks, evaluate their respective business impacts with my engineering manager, and align on which deliverable provides greater strategic value. Proactive transparency eliminates missed expectations."
  },
  {
    id: 33,
    q: "Can you describe a successful project you contributed to and your role in it?",
    category: "Technical Projects",
    framework: "STAR Method with End-to-End Ownership",
    tips: "This question allows you to showcase your accomplishments and contributions to projects. Choose a successful project you were part of, describe your role and responsibilities, and discuss the impact of the project.",
    sampleAns: "In our third-year software engineering lab, I co-developed an automated Hospital Resource Management System. My responsibility was architecting the backend REST APIs, database schema, and JWT authentication layer. I ensured full ACID compliance for bed reservations and appointment bookings. The system achieved sub-150ms response times and was adopted by our campus health center to coordinate over 200 daily clinic visits."
  },
  {
    id: 34,
    q: "What is your experience with cloud computing technologies?",
    category: "Technical Background",
    framework: "Cloud Fundamentals (IaaS, PaaS, Serverless, Storage)",
    tips: "Cloud computing is a fundamental aspect of modern IT infrastructure. Discuss your experience with cloud platforms, such as AWS, Azure, or Google Cloud, and any projects you've worked on involving cloud technologies.",
    sampleAns: "I have hands-on experience deploying containerized applications to AWS. I have configured EC2 instances for server hosting, S3 buckets for media asset storage, and RDS PostgreSQL databases with automated backups and security groups. I understand core cloud concepts including VPC networking, Elastic Load Balancers, IAM security policies, and horizontal auto-scaling groups."
  },
  {
    id: 35,
    q: "How do you ensure the security of your code and applications?",
    category: "Technical & Quality",
    framework: "OWASP Top 10 Defense-in-Depth",
    tips: "Security is a critical concern in IT development. Describe your approach to writing secure code, conducting security assessments, and implementing security best practices in your applications.",
    sampleAns: "I implement security defense-in-depth adhering to the OWASP Top 10: 1. Prevent SQL Injection by using PreparedStatements and ORM parameterized queries. 2. Protect against XSS and CSRF using strict input sanitization, CSP headers, and HTTP-only SameSite cookies. 3. Hash passwords with salted bcrypt. 4. Never commit API keys or credentials to Git repositories by enforcing environment variables (.env)."
  },
  {
    id: 36,
    q: "What steps do you take to optimize the performance of your code or applications?",
    category: "Technical & Quality",
    framework: "Measure First → Algorithmic Complexity → DB & Cache Optimization",
    tips: "Performance optimization is essential for ensuring that software applications run efficiently. Discuss your methods for identifying and addressing performance bottlenecks, optimizing code, and improving application performance.",
    sampleAns: "I follow the rule: 'Never optimize without profiling.' First, I identify bottlenecks using profilers and database query analysis (EXPLAIN ANALYZE). Second, I inspect algorithmic complexity (e.g. replacing an O(n²) nested loop with an O(n) hash map). Third, on the persistence tier, I add database indexes to eliminate table scans, batch bulk operations, and introduce Redis caching for read-heavy static datasets."
  },
  {
    id: 37,
    q: "Can you discuss a time when you had to overcome a technical challenge?",
    category: "Problem Solving",
    framework: "STAR Method on Deadlock / Concurrency Issue",
    tips: "Interviewers want to assess your problem-solving skills and resilience in the face of challenges. Describe a technical challenge you encountered, the steps you took to overcome it, and the lessons you learned from the experience.",
    sampleAns: "Situation: During load testing of an online ticket booking module, simultaneous seat reservation requests caused race conditions where two users were assigned the same seat. Task: Prevent double-booking without severely impacting booking throughput. Action: I investigated transaction isolation levels and implemented pessimistic locking (`SELECT ... FOR UPDATE`) on the specific seat record within an atomic database transaction. Result: The race condition was completely resolved with zero double-bookings under 2,000 concurrent simulated requests."
  },
  {
    id: 38,
    q: "How do you approach documenting your code and projects?",
    category: "Methodologies & Tools",
    framework: "Self-Documenting Code + OpenAPI + Comprehensive README",
    tips: "Documentation is crucial for maintaining code quality and facilitating collaboration among team members. Describe your approach to documenting code, including writing clear comments, creating user manuals, and maintaining project documentation.",
    sampleAns: "I prioritize clean, self-documenting code with meaningful variable and method names that minimize the need for trivial comments. For APIs, I use Swagger/OpenAPI annotations to generate interactive live documentation. For repositories, I maintain a comprehensive README including architecture diagrams, prerequisites, local setup commands, environment variables, and sample curl requests."
  },
  {
    id: 39,
    q: "What is your experience with version control systems like Git?",
    category: "Methodologies & Tools",
    framework: "Git Workflows (Branching, Rebasing, PRs)",
    tips: "Version control systems are essential tools for managing code repositories and collaborating with other developers. Discuss your experience with Git, including how you use it for version control, branching, merging, and collaboration.",
    sampleAns: "Git is central to my daily development. I adhere to standard GitFlow practices: maintaining a protected main branch, cutting short-lived feature branches, and writing descriptive, conventional commit messages. I am comfortable with branching, resolving merge conflicts, cherry-picking, interactive rebasing, and creating detailed pull requests with test validation screenshots."
  },
  {
    id: 40,
    q: "How do you handle continuous integration and continuous deployment (CI/CD) in your projects?",
    category: "Methodologies & Tools",
    framework: "Automated Build, Lint, Test & Deploy Pipelines",
    tips: "CI/CD practices are integral to modern software development workflows. Describe your experience with CI/CD tools and processes, such as Jenkins, Travis CI, or GitLab CI, and how you integrate them into your development workflow to automate testing and deployment.",
    sampleAns: "I use GitHub Actions to automate pipeline stages. On every pull request, the CI workflow triggers: checking out code, running linter checks, compiling the project, and executing automated unit/integration tests with Maven. If tests pass, the CD workflow builds a Docker container image, pushes it to a container registry, and deploys it to our cloud staging environment."
  },
  {
    id: 41,
    q: "How do you approach debugging when encountering errors in your code?",
    category: "Problem Solving",
    framework: "Binary Search Debugging & Stack Trace Analysis",
    tips: "Debugging skills are essential for identifying and resolving issues in software development. Describe your approach to debugging, including using debugging tools, analyzing error messages, and troubleshooting techniques.",
    sampleAns: "I read error messages and stack traces attentively from the bottom up to locate the exact file and line number where the exception originated. I use IDE debuggers to step through execution, inspect variable state changes, and verify assumptions. If a bug is intermittent, I write a failing unit test that reproduces the error before touching production code."
  },
  {
    id: 42,
    q: "What is your experience with database management systems (DBMS)?",
    category: "Technical Background",
    framework: "Relational Modeling, Normalization, ACID & Indexing",
    tips: "Database management systems are critical components of many IT projects. Discuss your experience with DBMS technologies, such as SQL Server, MySQL, or PostgreSQL, and your proficiency in database design, querying, and administration.",
    sampleAns: "I have strong proficiency with relational databases, specifically PostgreSQL and MySQL. I design schemas normalized up to 3NF/BCNF to prevent data anomalies, enforce foreign key integrity constraints, and write complex queries involving window functions, subqueries, and multi-table joins. I understand ACID properties and use transaction isolation levels to prevent dirty and non-repeatable reads."
  },
  {
    id: 43,
    q: "Can you discuss a time when you had to work on a project with a tight budget or limited resources?",
    category: "Problem Solving",
    framework: "Resourcefulness & Open-Source Optimization",
    tips: "Projects often face constraints such as budget limitations or resource shortages. Describe a project you worked on under such constraints, how you managed resources effectively, and any creative solutions you implemented to meet project goals.",
    sampleAns: "For our college technical fest web app, we had zero hosting budget. Rather than purchasing expensive cloud servers, I architected a serverless, cost-free stack: frontend hosted on Vercel CDN, serverless backend functions, and a free-tier MongoDB Atlas cluster. We served over 5,000 active students during the fest with zero downtime and zero hosting expenditure."
  },
  {
    id: 44,
    q: "How do you approach code reviews and provide constructive feedback to your peers?",
    category: "Teamwork & Collaboration",
    framework: "Kindness, Objective Guidance & Knowledge Sharing",
    tips: "Code reviews are essential for maintaining code quality and fostering collaboration within development teams. Describe your approach to code reviews, including providing constructive feedback, addressing code quality issues, and promoting best practices.",
    sampleAns: "I approach reviews with empathy, focusing on the code rather than the person. I praise clean solutions and frame suggestions inquisitively: 'Have we considered what happens if the input is null here?' rather than 'You forgot to check null.' I explain the architectural reasoning behind suggestions and link relevant documentation or patterns to foster learning."
  },
  {
    id: 45,
    q: "What strategies do you use to ensure the scalability and performance of your applications?",
    category: "Technical & Quality",
    framework: "Stateless Services, Horizontal Scaling & Asynchronous Queues",
    tips: "Scalability and performance are critical considerations in developing robust and high-performing applications. Discuss your strategies for designing scalable architectures, optimizing application performance, and planning for future growth.",
    sampleAns: "1. Build stateless services so application nodes can scale horizontally behind a load balancer. 2. Implement caching layers (Redis) for high-frequency read requests to shield the primary database. 3. Offload intensive, long-running background tasks (e.g. email dispatch, report generation) to asynchronous message queues like RabbitMQ or Kafka."
  },
  {
    id: 46,
    q: "How do you stay organized and manage your tasks in a remote or distributed team environment?",
    category: "Workplace Scenarios",
    framework: "Over-Communication, Async Documentation & Ownership",
    tips: "Remote work and distributed teams are increasingly common in the IT industry. Describe your methods for staying organized, communicating effectively with remote team members, and managing tasks and deadlines in a remote work environment.",
    sampleAns: "In remote settings, I practice clear asynchronous communication: writing detailed PR descriptions, updating ticket statuses in real time, and recording short Loom video walkthroughs for complex pull requests. I ensure my commitments are transparent, attend virtual standups on time, and proactively notify leads if blockers emerge."
  },
  {
    id: 47,
    q: "Can you discuss a time when you had to learn a new technology or tool to complete a project?",
    category: "Work Ethic & Growth",
    framework: "STAR Method on Rapid Framework Adoption",
    tips: "Learning new technologies and tools is a common requirement in IT projects. Describe a project where you had to acquire new skills or knowledge, how you approached the learning process, and how you applied the new technology to the project.",
    sampleAns: "During a hackathon, our project required a real-time collaborative whiteboard, requiring WebSocket communication which I hadn't implemented before. I spent the first 2 hours reading Socket.io documentation and building a simple chat room proof-of-concept. I then adapted the pattern into our main app, successfully broadcasting canvas vector events to multiple connected browser clients within 8 hours."
  },
  {
    id: 48,
    q: "What is your experience with software testing and quality assurance processes?",
    category: "Technical & Quality",
    framework: "Test Pyramid (Unit, Integration, E2E)",
    tips: "Testing and quality assurance are essential for delivering high-quality software products. Discuss your experience with software testing methodologies, test automation tools, and ensuring the quality and reliability of software applications.",
    sampleAns: "I follow the Test Pyramid methodology: writing comprehensive Unit Tests with JUnit and Mockito to test isolated business logic, Integration Tests using test databases to verify API endpoint contracts, and Postman regression test suites. Testing gives me the confidence to refactor code aggressively without breaking existing functionality."
  },
  {
    id: 49,
    q: "How do you handle ambiguity and uncertainty in project requirements or specifications?",
    category: "Problem Solving",
    framework: "Clarifying Questions, Wireframes & Early Feedback Loops",
    tips: "Projects often encounter ambiguity or uncertainty in requirements or specifications. Describe your approach to clarifying requirements, seeking clarification from stakeholders, and adapting to changing project conditions to ensure project success.",
    sampleAns: "I view ambiguity as an invitation to ask clarifying questions early. Rather than guessing and building the wrong feature, I write down assumptions, sketch a quick wireframe or API contract, and present it to stakeholders: 'Here is my understanding of the user flow; does this meet your expectations?' Fast feedback loops eliminate costly late-stage rework."
  },
  {
    id: 50,
    q: "What do you consider the most important qualities for a successful IT professional?",
    category: "Personal & Background",
    framework: "T-Shaped Engineer (Deep Technical Skill + Adaptability + Empathy)",
    tips: "Interviewers want to understand your perspective on the qualities and attributes that contribute to success in the IT industry. Discuss the qualities you believe are most important, such as technical expertise, problem-solving skills, teamwork, and adaptability.",
    sampleAns: "I believe the three vital qualities are: 1. Continuous Adaptability—because frameworks and tools evolve every few years, an engineer must love learning. 2. First-Principles Problem Solving—deconstructing complex issues to their algorithmic and architectural fundamentals. 3. Collaborative Empathy—software engineering is a team sport; listening actively, communicating clearly, and uplifting teammates creates enduring, high-impact software."
  }
];

// =============================================================================
// APPENDIX A: IMPORTANT ALGORITHMS MASTER PSEUDOCODE LIBRARY (ALGORITHMS 9 TO 33)
// =============================================================================
const APPENDIX_ALGORITHMS_DATA = [
  // ── CPU Scheduling Algorithms (Alg 9 to 16) ──
  {
    id: 9,
    number: "Algorithm 9",
    name: "First-Come-First-Serve (FCFS) CPU Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n) | Space: O(n)",
    type: "Non-preemptive",
    pseudocode: `1: Initialize the queue to store processes.
2: Insert all processes into the queue in the order they arrive.
3: Initialize the current_time variable to 0.
4: while the queue is not empty do
5:     Dequeue the process from the front of the queue.
6:     Set the start_time of the process as the maximum of its arrival time and the current_time.
7:     Update the current_time to the end_time of the dequeued process.
8:     Execute the process until completion.
9: Calculate the turnaround time and waiting time for each process:
10:    Turnaround Time (TAT) = Completion Time - Arrival Time
11:    Waiting Time (WT) = Turnaround Time - Burst Time
12: Calculate the average turnaround time and average waiting time for all processes.
13: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Executes processes strictly in arrival order using a FIFO queue. Simple and fair, but prone to the 'Convoy Effect' where short processes wait behind a CPU-heavy process."
  },
  {
    id: 10,
    number: "Algorithm 10",
    name: "Shortest Job Next (SJN) or Shortest Job First (SJF) CPU Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n log n) | Space: O(n)",
    type: "Non-preemptive (or Preemptive SRTF)",
    pseudocode: `1: Initialize the queue to store processes.
2: Insert all processes into the queue.
3: while the queue is not empty do
4:     Sort the queue based on the burst time of each process in ascending order.
5:     Dequeue the process with the shortest burst time.
6:     Set the start_time of the process as the maximum of its arrival time and the current time.
7:     Execute the process until completion.
8:     Update the current time to the end time of the dequeued process.
9: Calculate the turnaround time and waiting time for each process:
10:    Turnaround Time (TAT) = Completion Time - Arrival Time
11:    Waiting Time (WT) = Turnaround Time - Burst Time
12: Calculate the average turnaround time and average waiting time for all processes.
13: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Selects the process with the minimum CPU burst time. Mathematically optimal for minimizing average waiting time, but can cause starvation for longer jobs."
  },
  {
    id: 11,
    number: "Algorithm 11",
    name: "Priority Scheduling CPU Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n log n) | Space: O(n)",
    type: "Preemptive or Non-preemptive",
    pseudocode: `1: Initialize the queue to store processes.
2: Insert all processes into the queue.
3: while the queue is not empty do
4:     Sort the queue based on the priority of each process in descending order.
5:     Dequeue the process with the highest priority.
6:     Set the start_time of the process as the maximum of its arrival time and the current time.
7:     Execute the process until completion.
8:     Update the current time to the end time of the dequeued process.
9: Calculate the turnaround time and waiting time for each process:
10:    Turnaround Time (TAT) = Completion Time - Arrival Time
11:    Waiting Time (WT) = Turnaround Time - Burst Time
12: Calculate the average turnaround time and average waiting time for all processes.
13: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Allocates CPU to the highest priority process. Suffers from starvation for low-priority processes; solved using Aging (gradually increasing priority over time)."
  },
  {
    id: 12,
    number: "Algorithm 12",
    name: "Round Robin (RR) CPU Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n) | Space: O(n)",
    type: "Preemptive",
    pseudocode: `1: Initialize the queue to store processes.
2: Insert all processes into the queue.
3: Initialize the time quantum (slice) for each process.
4: while the queue is not empty do
5:     Dequeue the process from the front of the queue.
6:     Set the start_time of the process as the maximum of its arrival time and the current time.
7:     Execute the process for the time quantum.
8:     Update the current time to the end time of the executed process.
9:     if the process is not completed then
10:        Enqueue the process back to the end of the queue.
11: Calculate the turnaround time and waiting time for each process:
12:    Turnaround Time (TAT) = Completion Time - Arrival Time
13:    Waiting Time (WT) = Turnaround Time - Burst Time
14: Calculate the average turnaround time and average waiting time for all processes.
15: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Time-sliced scheduling where each process gets CPU time up to quantum q. Highly responsive for time-sharing systems; performance depends on optimal quantum size."
  },
  {
    id: 13,
    number: "Algorithm 13",
    name: "Multilevel Queue Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n) | Space: O(n)",
    type: "Static Priority Partitions",
    pseudocode: `1: Initialize multiple queues, each representing a different priority level.
2: while there are processes in any of the queues do
3:     Dequeue the process from the highest priority queue.
4:     Set the start_time of the process as the maximum of its arrival time and the current time.
5:     Execute the process until completion.
6:     Update the current time to the end time of the executed process.
7:     if the process is not completed then
8:         Enqueue the process into the next lower priority queue.
9: Calculate the turnaround time and waiting time for each process:
10:    Turnaround Time (TAT) = Completion Time - Arrival Time
11:    Waiting Time (WT) = Turnaround Time - Burst Time
12: Calculate the average turnaround time and average waiting time for all processes.
13: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Partitions the ready queue into distinct queues (e.g. Foreground interactive vs. Background batch), each with its own scheduling algorithm and fixed priority."
  },
  {
    id: 14,
    number: "Algorithm 14",
    name: "Multilevel Feedback Queue Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n log n) | Space: O(n)",
    type: "Adaptive Dynamic Priority",
    pseudocode: `1: Initialize multiple queues with different priority levels.
2: Assign a time quantum (slice) to each queue, where lower priority queues have longer time slices.
3: while there are processes in any of the queues do
4:     Dequeue the process from the highest priority queue.
5:     Set the start_time of the process as the maximum of its arrival time and the current time.
6:     Execute the process until completion or the end of its time quantum.
7:     Update the current time to the end time of the executed process.
8:     if the process is not completed then
9:         if the process used the entire time quantum then
10:            Enqueue the process into the same or lower priority queue.
11:        else
12:            Enqueue the process into the next higher priority queue.
13: Calculate the turnaround time and waiting time for each process:
14:    Turnaround Time (TAT) = Completion Time - Arrival Time
15:    Waiting Time (WT) = Turnaround Time - Burst Time
16: Calculate the average turnaround time and average waiting time for all processes.
17: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Allows processes to move between queues based on CPU burst history. I/O-bound processes stay in high-priority short-quantum queues; CPU-bound jobs drop to lower tiers."
  },
  {
    id: 15,
    number: "Algorithm 15",
    name: "Highest Response Ratio Next (HRRN) CPU Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n²) | Space: O(n)",
    type: "Non-preemptive",
    pseudocode: `1: Initialize the queue to store processes.
2: while the queue is not empty do
3:     Calculate the response ratio for each process in the queue.
       Response Ratio = (Waiting Time + Burst Time) / Burst Time
4:     Sort the queue based on the response ratio in descending order.
5:     Dequeue the process with the highest response ratio.
6:     Set the start_time of the process as the maximum of its arrival time and the current time.
7:     Execute the process until completion.
8:     Update the current time to the end time of the executed process.
9: Calculate the turnaround time and waiting time for each process:
10:    Turnaround Time (TAT) = Completion Time - Arrival Time
11:    Waiting Time (WT) = Turnaround Time - Burst Time
12: Calculate the average turnaround time and average waiting time for all processes.
13: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Prevents starvation in SJF by factoring in waiting time: Response Ratio = (W + S) / S. As waiting time W increases, response ratio climbs, ensuring execution."
  },
  {
    id: 16,
    number: "Algorithm 16",
    name: "Lottery Scheduling",
    category: "CPU Scheduling",
    complexity: "Time: O(n) | Space: O(n)",
    type: "Probabilistic Proportional-Share",
    pseudocode: `1: Initialize a lottery pool containing tickets.
2: Assign a number of tickets to each process based on its priority or other criteria.
3: while there are processes in the system do
4:     Draw a winning ticket randomly from the lottery pool.
5:     Select the process associated with the winning ticket for execution.
6:     Set the start_time of the process as the maximum of its arrival time and the current time.
7:     Execute the process until completion.
8:     Update the current time to the end time of the executed process.
9:     Return the winning ticket to the lottery pool.
10: Calculate the turnaround time and waiting time for each process:
11:    Turnaround Time (TAT) = Completion Time - Arrival Time
12:    Waiting Time (WT) = Turnaround Time - Burst Time
13: Calculate the average turnaround time and average waiting time for all processes.
14: Display the turnaround time, waiting time, and average values for analysis.`,
    explanation: "Randomized proportional-share scheduling where processes receive lottery tickets; CPU time allocated is proportional to the percentage of tickets held."
  },

  // ── Sorting Algorithms (Alg 17 to 23) ──
  {
    id: 17,
    number: "Algorithm 17",
    name: "Bubble Sort Algorithm",
    category: "Sorting Algorithms",
    complexity: "Time: Best O(n), Avg/Worst O(n²) | Space: O(1)",
    type: "Comparison-Based • Stable • In-Place",
    pseudocode: `1: procedure BUBBLESORT(A)
2:     n → length of A
3:     for i → 1 to n − 1 do
4:         for j → 1 to n − i do
5:             if A[j] > A[j + 1] then
6:                 Swap A[j] with A[j + 1]`,
    explanation: "Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Largest unsorted element bubbles up to the end in each pass."
  },
  {
    id: 18,
    number: "Algorithm 18",
    name: "Insertion Sort Algorithm",
    category: "Sorting Algorithms",
    complexity: "Time: Best O(n), Avg/Worst O(n²) | Space: O(1)",
    type: "Comparison-Based • Stable • In-Place",
    pseudocode: `1: procedure INSERTIONSORT(A)
2:     n → length of A
3:     for i → 1 to n − 1 do
4:         key → A[i]
5:         j → i − 1
6:         while j ≥ 0 and A[j] > key do
7:             A[j + 1] → A[j]
8:             j → j − 1
9:         A[j + 1] → key`,
    explanation: "Builds sorted array one item at a time by consuming one input element each repetition and inserting it into its correct relative position among previously sorted items."
  },
  {
    id: 19,
    number: "Algorithm 19",
    name: "Selection Sort Algorithm",
    category: "Sorting Algorithms",
    complexity: "Time: O(n²) in all cases | Space: O(1)",
    type: "Comparison-Based • Unstable • In-Place",
    pseudocode: `1: procedure SELECTIONSORT(A)
2:     n → length of A
3:     for i → 0 to n − 1 do
4:         minIndex → i
5:         for j → i + 1 to n − 1 do
6:             if A[j] < A[minIndex] then
7:                 minIndex → j
8:         Swap A[i] with A[minIndex]`,
    explanation: "Divides the array into sorted and unsorted subarrays. Repeatedly finds the minimum element from the unsorted subarray and swaps it with the first unsorted element. At most n − 1 swaps."
  },
  {
    id: 20,
    number: "Algorithm 20",
    name: "Quick Sort Algorithm",
    category: "Sorting Algorithms",
    complexity: "Time: Best/Avg O(n log n), Worst O(n²) | Space: O(log n)",
    type: "Divide & Conquer • Unstable • In-Place",
    pseudocode: `1: procedure QUICKSORT(A, start, end)
2:     if start < end then
3:         p → PARTITION(A, start, end)
4:         QUICKSORT(A, start, p − 1)
5:         QUICKSORT(A, p + 1, end)

6: procedure PARTITION(A, start, end)
7:     pivot → A[end]
8:     i → start − 1
9:     for j → start to end − 1 do
10:        if A[j] ≤ pivot then
11:            i → i + 1
12:            Swap A[i] with A[j]
13:    Swap A[i + 1] with A[end]
14:    return i + 1`,
    explanation: "Lomuto partition scheme picks A[end] as pivot and rearranges elements so smaller elements precede pivot and larger elements follow. Highly cache-efficient in practice."
  },
  {
    id: 21,
    number: "Algorithm 21",
    name: "Merge Sort Algorithm",
    category: "Sorting Algorithms",
    complexity: "Time: O(n log n) guaranteed | Space: O(n)",
    type: "Divide & Conquer • Stable • Out-of-Place",
    pseudocode: `1: procedure MERGESORT(A, start, end)
2:     if start < end then
3:         mid → (start + end)/2
4:         MERGESORT(A, start, mid)
5:         MERGESORT(A, mid + 1, end)
6:         MERGE(A, start, mid, end)

7: procedure MERGE(A, start, mid, end)
8:     n1 → mid − start + 1
9:     n2 → end − mid
10:    Create arrays L[1 . . . n1 + 1] and R[1 . . . n2 + 1]
11:    for i → 1 to n1 do L[i] → A[start + i − 1]
12:    for j → 1 to n2 do R[j] → A[mid + j]
13:    L[n1 + 1] → ∞;  R[n2 + 1] → ∞
14:    i → 1;  j → 1
15:    for k → start to end do
16:        if L[i] ≤ R[j] then
17:            A[k] → L[i]
18:            i → i + 1
19:        else
20:            A[k] → R[j]
21:            j → j + 1`,
    explanation: "Recursively divides the array in half until single elements remain, then merges sorted subarrays using sentinel values (∞). Stable and optimal for linked lists and external sorting."
  },
  {
    id: 22,
    number: "Algorithm 22",
    name: "Radix Sort Algorithm",
    category: "Sorting Algorithms",
    complexity: "Time: O(d · (n + k)) | Space: O(n + k)",
    type: "Non-Comparison • Stable",
    pseudocode: `1: procedure RADIXSORT(A)
2:     max → FINDMAX(A)
3:     for exp → 1 to max/exp > 0 do
4:         COUNTSORT(A, exp)

5: procedure COUNTSORT(A, exp)
6:     n → length of A
7:     Create array output[0 . . . n − 1]
8:     Create array count[0 . . . 9] → 0
9:     for i → 0 to n − 1 do
10:        count[(A[i]/exp)%10] → count[(A[i]/exp)%10] + 1
11:    for i → 1 to 9 do
12:        count[i] → count[i] + count[i − 1]
13:    for i → n − 1 downto 0 do
14:        output[count[(A[i]/exp)%10] − 1] → A[i]
15:        count[(A[i]/exp)%10] → count[(A[i]/exp)%10] − 1
16:    for i → 0 to n − 1 do
17:        A[i] → output[i]`,
    explanation: "Sorts numbers digit by digit from least significant digit (LSD) to most significant digit (MSD) using Counting Sort as a stable intermediate subroutine."
  },
  {
    id: 23,
    number: "Algorithm 23",
    name: "Bucket Sort Algorithm",
    category: "Sorting Algorithms",
    complexity: "Time: Avg O(n + k), Worst O(n²) | Space: O(n + k)",
    type: "Distribution Sort • Stable",
    pseudocode: `1: procedure BUCKETSORT(A)
2:     n → length of A
3:     Create empty array of buckets B[0 . . . n − 1]
4:     for i → 0 to n − 1 do
5:         index → calculateBucketIndex(A[i], n)
6:         Insert A[i] into bucket B[index]
7:     for i → 0 to n − 1 do
8:         Sort bucket B[i] using Insertion Sort or any other sorting algorithm
9:     Concatenate all buckets into the output array A`,
    explanation: "Distributes elements into uniformly spaced buckets based on their values, sorts individual buckets (typically using Insertion Sort), and concatenates them in order."
  },

  // ── Searching Algorithms (Alg 24 & 25) ──
  {
    id: 24,
    number: "Algorithm 24",
    name: "Linear Search Algorithm",
    category: "Searching Algorithms",
    complexity: "Time: Best O(1), Avg/Worst O(n) | Space: O(1)",
    type: "Sequential Search",
    pseudocode: `1: procedure LINEARSEARCH(A, target)
2:     for i → 0 to length of A − 1 do
3:         if A[i] = target then
4:             return i    ▷ Element found at index i
5:     return −1           ▷ Element not found`,
    explanation: "Sequentially checks every element in the list until a match is found or the search reaches the end. Does not require the array to be sorted."
  },
  {
    id: 25,
    number: "Algorithm 25",
    name: "Binary Search Algorithm",
    category: "Searching Algorithms",
    complexity: "Time: Best O(1), Avg/Worst O(log n) | Space: O(1)",
    type: "Divide & Conquer • Pruning",
    pseudocode: `1: procedure BINARYSEARCH(A, target)
2:     low → 0
3:     high → length of A − 1
4:     while low ≤ high do
5:         mid → (low + high)/2
6:         if A[mid] = target then
7:             return mid    ▷ Element found at index mid
8:         else if A[mid] < target then
9:             low → mid + 1
10:        else
11:            high → mid − 1
12:    return −1             ▷ Element not found`,
    explanation: "Requires a sorted array. Repeatedly compares the target value to the middle element, halving the active search interval at each step."
  },

  // ── Graph & Shortest Path Algorithms (Alg 26 to 33) ──
  {
    id: 26,
    number: "Algorithm 26",
    name: "Depth-First Search (DFS)",
    category: "Graph Algorithms",
    complexity: "Time: O(V + E) | Space: O(V)",
    type: "Stack-Based Traversal",
    pseudocode: `1: procedure DFS(G, source)
2:     initialize an empty set visited
3:     initialize an empty stack stack
4:     push source onto stack
5:     while stack is not empty do
6:         v → pop a vertex from stack
7:         if v is not visited then
8:             mark v as visited
9:             process v (e.g., print it)
10:            for all neighbors w of v in G do
11:                if w is not visited then
12:                    push w onto stack`,
    explanation: "Explores as deep as possible along each branch before backtracking. Essential for topological sorting, cycle detection, and strongly connected components."
  },
  {
    id: 27,
    number: "Algorithm 27",
    name: "Breadth-First Search (BFS)",
    category: "Graph Algorithms",
    complexity: "Time: O(V + E) | Space: O(V)",
    type: "Queue-Based Traversal",
    pseudocode: `1: procedure BFS(G, source)
2:     initialize an empty set visited
3:     initialize an empty queue queue
4:     enqueue source into queue
5:     mark source as visited
6:     while queue is not empty do
7:         v → dequeue a vertex from queue
8:         process v (e.g., print it)
9:         for all neighbors w of v in G do
10:            if w is not visited then
11:                mark w as visited
12:                enqueue w into queue`,
    explanation: "Explores vertices level by level using a FIFO queue. Finds the shortest path in unweighted graphs and tests for graph bipartiteness."
  },
  {
    id: 28,
    number: "Algorithm 28",
    name: "Topological Sort Algorithm",
    category: "Graph Algorithms",
    complexity: "Time: O(V + E) | Space: O(V)",
    type: "DAG Linear Ordering",
    pseudocode: `1: procedure TOPOLOGICALSORT(G)
2:     initialize an empty list sorted
3:     initialize an empty set visited
4:     for all vertices v in G do
5:         if v is not visited then
6:             DFS(v, G, visited, sorted)
7:     return sorted

8: procedure DFS(v, G, visited, sorted)
9:     mark v as visited
10:    for all neighbors w of v in G do
11:        if w is not visited then
12:            DFS(w, G, visited, sorted)
13:    append v to sorted`,
    explanation: "Produces a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, vertex u comes before v. Used for build systems and task scheduling."
  },
  {
    id: 29,
    number: "Algorithm 29",
    name: "Dijkstra’s Algorithm",
    category: "Graph Algorithms",
    complexity: "Time: O((V + E) log V) | Space: O(V)",
    type: "Greedy • Non-Negative Weights",
    pseudocode: `1: procedure DIJKSTRA(G, source)
2:     initialize an empty set visited
3:     initialize an array distance with ∞ values
4:     initialize a priority queue pq
5:     distance[source] → 0
6:     insert (source, 0) into pq
7:     while pq is not empty do
8:         (v, d) → extract-minimum from pq
9:         if v is not visited then
10:            mark v as visited
11:            for all neighbors (w, weight) of v in G do
12:                new_dist → d + weight
13:                if new_dist < distance[w] then
14:                    distance[w] → new_dist
15:                    insert (w, new_dist) into pq
16:    return distance`,
    explanation: "Finds single-source shortest paths in graphs with non-negative edge weights using a min-priority queue to greedily extract the closest unvisited vertex."
  },
  {
    id: 30,
    number: "Algorithm 30",
    name: "Bellman-Ford Algorithm",
    category: "Graph Algorithms",
    complexity: "Time: O(V · E) | Space: O(V)",
    type: "Dynamic Programming • General Weights",
    pseudocode: `1: procedure BELLMANFORD(G, source)
2:     initialize an array distance with ∞ values
3:     distance[source] → 0
4:     for i → 1 to number of vertices − 1 do
5:         for all edges (u, v, weight) in G do
6:             if distance[u] + weight < distance[v] then
7:                 distance[v] → distance[u] + weight
8:     for all edges (u, v, weight) in G do
9:         if distance[u] + weight < distance[v] then
10:            return ”Negative cycle detected”
11:    return distance`,
    explanation: "Calculates shortest paths from a single source even with negative edge weights by relaxing all edges V − 1 times. Detects negative-weight cycles on a V-th relaxation pass."
  },
  {
    id: 31,
    number: "Algorithm 31",
    name: "Floyd-Warshall Algorithm",
    category: "Graph Algorithms",
    complexity: "Time: O(V³) | Space: O(V²)",
    type: "Dynamic Programming • All-Pairs",
    pseudocode: `1: procedure FLOYDWARSHALL(G)
2:     initialize a 2D array distance with ∞ values
3:     for all vertices v in G do
4:         distance[v][v] → 0
5:     for all edges (u, v, weight) in G do
6:         distance[u][v] → weight
7:     for all vertices k in G do
8:         for all vertices i in G do
9:             for all vertices j in G do
10:                if distance[i][k] + distance[k][j] < distance[i][j] then
11:                    distance[i][j] → distance[i][k] + distance[k][j]
12:    return distance`,
    explanation: "Finds shortest paths between all pairs of vertices in a weighted graph (with positive or negative edge weights, but no negative cycles) via intermediate vertices k."
  },
  {
    id: 32,
    number: "Algorithm 32",
    name: "Prim’s Algorithm",
    category: "Graph Algorithms",
    complexity: "Time: O(E log V) | Space: O(V)",
    type: "Greedy • Minimum Spanning Tree",
    pseudocode: `1: procedure PRIM(G)
2:     initialize an empty set visited
3:     initialize an array key with ∞ values
4:     initialize an array parent with −NULL values
5:     pick an arbitrary vertex s as the starting vertex
6:     key[s] → 0
7:     initialize a priority queue pq
8:     insert (s, 0) into pq
9:     while pq is not empty do
10:        (u, k) → extract-minimum from pq
11:        mark u as visited
12:        for all neighbors (v, w) of u in G do
13:            if v is not visited and w < key[v] then
14:                key[v] → w
15:                parent[v] → u
16:                insert (v, w) into pq
17:    return parent`,
    explanation: "Builds a Minimum Spanning Tree (MST) from an arbitrary starting vertex by continuously growing a single tree, greedily adding the cheapest edge connecting the tree to a non-tree vertex."
  },
  {
    id: 33,
    number: "Algorithm 33",
    name: "Kruskal’s Algorithm",
    category: "Graph Algorithms",
    complexity: "Time: O(E log E) | Space: O(V)",
    type: "Greedy • Minimum Spanning Tree • DSU",
    pseudocode: `1: procedure KRUSKAL(G)
2:     initialize an empty set MST
3:     sort the edges of G in non-decreasing order of weight
4:     for all vertices v in G do
5:         make-set(v)    ▷ create a disjoint set for each vertex
6:     for all edges (u, v, w) in sorted order do
7:         if find-set(u) ≠ find-set(v) then    ▷ if adding the edge does not create a cycle
8:             add (u, v) to MST
9:             union(u, v)    ▷ merge the disjoint sets of u and v
10:    return MST`,
    explanation: "Builds an MST by sorting all edges in ascending order of weight and greedily adding edges that connect different connected components, using a Disjoint Set Union (DSU) structure to avoid cycles."
  }
];
