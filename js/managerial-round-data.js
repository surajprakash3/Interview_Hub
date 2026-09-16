/**
 * MANAGERIAL_ROUND_DATA: Managerial Round Interview Preparation
 * Source: Core MNC Managerial & Technical Lead Interview Rounds
 * 100 Questions across 10 Distinct Domains:
 *   A. Personal & Career Questions (Q1 - Q10)
 *   B. Leadership Questions (Q11 - Q20)
 *   C. Teamwork & Collaboration (Q21 - Q30)
 *   D. Decision-Making (Q31 - Q40)
 *   E. Problem Solving (Q41 - Q50)
 *   F. Conflict Management (Q51 - Q60)
 *   G. Performance & Accountability (Q61 - Q70)
 *   H. Change Management & Adaptability (Q71 - Q80)
 *   I. Client & Stakeholder Management (Q81 - Q90)
 *   J. Situational & Behavioral Questions (Q91 - Q100)
 */

const MANAGERIAL_ROUND_DATA = [
  // =========================================================================
  // A. PERSONAL & CAREER QUESTIONS (Q1 - Q10)
  // =========================================================================
  {
    id: 1,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "Tell me about yourself.",
    title: "Tell Me About Yourself",
    format: "Elevator Pitch (60–90 Seconds)",
    tips: "Remember: Don't speak for 3–5 minutes. Keep this around 60–90 seconds.",
    ans: `Good morning, and thank you for giving me this opportunity.

My name is Suraj Prakash. I am a computer science/technology student with a strong interest in software development and problem-solving.

During my academic journey, I have developed a good foundation in programming, data structures and algorithms, object-oriented programming, databases, operating systems, computer networks, cloud technologies, and tools such as Git and Docker.

I enjoy learning new technologies and applying my knowledge through practical projects. While working on projects, I have learned that technical knowledge is important, but communication, teamwork, time management, and taking ownership are equally important.

I consider myself a disciplined, adaptable, and continuous learner. When I face a problem, I prefer to understand its root cause, break it into smaller parts, and then work toward a practical solution.

At this stage of my career, I am looking for an opportunity where I can contribute to the organization, learn from experienced professionals, and gradually take on greater responsibilities.`
  },
  {
    id: 2,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "Walk me through your resume.",
    title: "Walk Me Through Your Resume",
    format: "4-Part Structure (Education, Skills, Projects, Goals)",
    tips: "Keep your flow structured: Education → Technical Skills → Practical Projects → Professional Aspirations.",
    ans: `Certainly.

I would like to explain my resume in four parts: education, technical skills, projects, and career goals.

First, regarding my education, I have built my foundation in computer science and related technologies. During my studies, I focused not only on academic subjects but also on developing practical technical skills.

Second, my technical skills include programming, data structures and algorithms, object-oriented programming, database concepts, operating systems, computer networks, Git, Docker, and cloud technologies.

Third, I have worked on academic and practical projects where I applied these concepts to solve real-world problems. These projects helped me improve my coding skills as well as my ability to work with others, manage deadlines, debug problems, and take responsibility for my work.

Finally, I am looking to start my professional career in an organization where I can apply my technical foundation, learn from experienced team members, and grow into a dependable software professional.

Overall, my resume represents my technical learning, practical exposure, and willingness to continuously improve.`
  },
  {
    id: 3,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "Why do you want to join our company?",
    title: "Why Do You Want to Join Our Company",
    format: "Alignment & Value Contribution",
    tips: "Important: Before an actual interview, replace the generic company part with 2–3 specific facts about that company.",
    ans: `I want to join your company because I see it as an environment where I can apply my technical skills while continuing to learn and grow professionally.

I am particularly interested in the kind of work your organization does, the technologies it uses, and the opportunities it provides to young professionals.

As a fresher, I am looking for more than just a job. I want to work with experienced professionals, understand how software is developed in a real business environment, and gradually take ownership of meaningful responsibilities.

I believe my willingness to learn, problem-solving approach, adaptability, and commitment to delivering quality work can allow me to contribute positively to the organization.

At the same time, I believe the company's learning environment and professional culture can help me build a strong long-term career.`
  },
  {
    id: 4,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "What do you know about our organization?",
    title: "What Do You Know About Our Organization",
    format: "Research & Industry Alignment Framework",
    tips: "Interview trick: Research the company before the interview. Never say “I don't know much about your company.”",
    ans: `From my research, I understand that your organization operates in the [industry/domain] and focuses on [major products/services].

I also understand that the company has a strong presence in [technology/market/geography] and works with [customers/business areas].

What particularly interests me is [specific company project/product/value/technology]. I believe this aligns well with my interest in technology and my goal of developing practical industry experience.

I also looked at the company's work culture and recent developments because I wanted to understand not only the job role but also the organization I would potentially become part of.

Overall, I see the company as a place where I can learn, contribute, and grow over the long term.`
  },
  {
    id: 5,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "What motivates you at work?",
    title: "What Motivates You",
    format: "Core Drivers Analysis",
    tips: "Highlight intrinsic motivators: problem-solving, accountability, teamwork, and compounding growth.",
    ans: `I am primarily motivated by learning, solving problems, and seeing measurable progress in my work.

When I face a challenging problem, I enjoy understanding it, finding possible solutions, and eventually seeing the solution work successfully.

I am also motivated by responsibility. When someone trusts me with a task, I take that responsibility seriously and try to complete it with good quality and within the expected timeline.

Apart from individual achievement, I also find motivation in teamwork. Working with people who have different perspectives helps me learn faster and improve my approach.

So, for me, motivation comes from a combination of learning, responsibility, meaningful contribution, and continuous improvement.`
  },
  {
    id: 6,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "Where do you see yourself in five years?",
    title: "Where Do You See Yourself in Five Years",
    format: "Growth & Value Roadmap",
    tips: "Focus on deepening technical competence and leadership ownership rather than rigid job designations.",
    ans: `In five years, I see myself as a strong and dependable professional with solid technical expertise and a good understanding of the business side of technology.

Initially, my focus will be on building a strong foundation, understanding the organization's processes, and becoming highly reliable in my responsibilities.

As I gain experience, I would like to take ownership of larger tasks and projects, contribute to technical decisions, and support junior team members.

I don't want to define my growth only by a particular designation. My goal is to continuously increase my skills, responsibilities, and impact within the organization.

Ultimately, I would like to become someone whom the team can trust for both technical contributions and responsible decision-making.`
  },
  {
    id: 7,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "What are your short-term career goals?",
    title: "Short-Term Career Goals",
    format: "Foundation & Capability Building",
    tips: "Emphasize mastery of programming, real-world development workflows, and establishing dependability.",
    ans: `My short-term goal is to become a strong professional in my chosen technical domain.

I want to strengthen my programming and problem-solving skills, understand real-world software development practices, and gain practical experience working on production-level projects.

I also want to improve my communication, teamwork, and professional decision-making skills.

My priority in the beginning of my career is to learn as much as possible, deliver quality work, and establish myself as a reliable member of the team.`
  },
  {
    id: 8,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "What are your long-term career goals?",
    title: "Long-Term Career Goals",
    format: "Technical Leadership & Value Delivery",
    tips: "Show long-term alignment with business outcomes, technical leadership, and mentoring others.",
    ans: `My long-term goal is to become a technically strong professional who can take ownership of complex projects and contribute to important business decisions.

With experience, I would like to develop both technical and leadership capabilities. I want to be able to guide team members, solve complex problems, and take responsibility for delivering successful outcomes.

I also want to continuously update my knowledge because technology changes very quickly.

Ultimately, I want my growth to be aligned with the organization's growth, where I can create meaningful value while developing myself into a trusted professional and future leader.`
  },
  {
    id: 9,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "Why should we hire you?",
    title: "Why Should We Hire You",
    format: "Value Proposition (Fresher Perspective)",
    tips: "Position fresher status as a growth catalyst: rapid adaptability, clean slate learning, and extreme dedication.",
    ans: `I believe you should hire me because I bring a combination of technical foundation, willingness to learn, adaptability, and a strong sense of responsibility.

As a fresher, I understand that I still have a lot to learn, but I see that as an opportunity rather than a limitation. I am comfortable learning new technologies and putting in the effort required to become productive.

I approach problems systematically, take ownership of my responsibilities, and value teamwork and clear communication.

I may not have years of industry experience yet, but I can offer dedication, a learning mindset, and the commitment to grow with the organization.

If given the opportunity, my focus would be to learn quickly, contribute consistently, and become a dependable member of the team.`
  },
  {
    id: 10,
    section: "A. Personal & Career Questions",
    category: "Personal & Career",
    q: "What makes you different from other candidates?",
    title: "What Makes You Different",
    format: "Mindset & Accountability Differentiators",
    tips: "Never demean other candidates; differentiate through your intellectual honesty and continuous improvement reflex.",
    ans: `I would not say that I am better than other candidates because every candidate has different strengths.

What differentiates me is my approach toward learning and responsibility.

When I don't know something, I don't hesitate to acknowledge it. Instead, I try to understand it, learn it, and apply it. I also prefer understanding the reason behind a problem rather than simply finding a temporary solution.

I take feedback positively and try to use it to improve my performance.

I believe this combination of curiosity, accountability, adaptability, and continuous improvement will help me grow into a strong professional.`
  },

  // =========================================================================
  // B. LEADERSHIP QUESTIONS (Q11 - Q20)
  // =========================================================================
  {
    id: 11,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "Describe a situation where you led a team.",
    title: "Leadership Experience",
    format: "STAR Framework",
    tips: "STAR Format: Situation (tight deadline), Task (divide & coordinate), Action (task plan & peer support), Result (timely delivery & shared success).",
    ans: `During one of my academic projects, our team had multiple tasks that needed to be completed within a limited deadline.

I took the initiative to coordinate the team and divide the work according to each member's strengths.

I created a simple task plan, clarified responsibilities, and regularly checked our progress. Whenever someone faced a technical problem, we discussed it together and helped each other rather than allowing the issue to delay the entire project.

As a result, we completed the major parts of the project within the planned timeline and delivered the final work successfully.

This experience taught me that leadership is not about giving orders. It is about creating clarity, supporting the team, taking responsibility, and ensuring that everyone moves toward the same goal.`
  },
  {
    id: 12,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "What is your leadership style?",
    title: "Leadership Style",
    format: "Collaborative & Responsibility-Driven",
    tips: "Highlight leading by example, active listening, and empowering team ownership.",
    ans: `I would describe my leadership style as collaborative and responsibility-driven.

I believe a good leader should first understand the team's strengths, communicate the goal clearly, and give people appropriate ownership.

I prefer listening to different opinions before making decisions. At the same time, when a decision is required, I am comfortable taking responsibility for it.

I also believe in leading by example. If I expect the team to meet deadlines and maintain quality, I should demonstrate the same commitment myself.

My goal as a leader would be to create an environment where team members feel comfortable contributing ideas, asking questions, and taking ownership of their work.`
  },
  {
    id: 13,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "How do you motivate team members?",
    title: "Motivating Team Members",
    format: "Empathy & Purpose Alignment",
    tips: "Connect individual tasks to the macro vision, provide support during hurdles, and recognize progress.",
    ans: `I believe motivation starts with understanding what is affecting the team member.

First, I would communicate the overall goal and explain how their individual contribution affects the project.

Then I would make sure the assigned task is clear and realistic. If someone is facing a technical or personal difficulty affecting their work, I would try to understand the situation and provide appropriate support.

I also believe recognition is important. When someone performs well or makes a valuable contribution, acknowledging their effort can increase confidence and motivation.

Most importantly, I would try to create a team environment where people feel that their work is meaningful and that they are supported by the team.`
  },
  {
    id: 14,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "Have you ever managed a difficult team member?",
    title: "Managing a Difficult Team Member",
    format: "1-on-1 Root Cause Resolution",
    tips: "Always preserve dignity in private discussions; differentiate between skill gaps, personal hurdles, and behavioral resistance.",
    ans: `Yes. If I encounter a difficult team member, my first step would be to understand the reason behind the behavior rather than immediately judging the person.

I would have a private and professional conversation with them, explain the impact of the issue on the team, and listen to their perspective.

If the problem is related to unclear responsibilities, workload, or communication, I would try to resolve the underlying issue.

If the behavior continues despite discussion, I would clearly communicate expectations and, if necessary, involve the appropriate senior or manager.

My approach would always be professional and focused on solving the problem rather than creating personal conflict.`
  },
  {
    id: 15,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "How do you delegate tasks?",
    title: "Task Delegation",
    format: "Tri-Factor Delegation Model",
    tips: "Delegation = Skills match + Clear expectations + Active progress tracking (no micromanagement or abandonment).",
    ans: `When delegating tasks, I consider three major factors: the person's skills, the project's priorities, and the deadline.

First, I divide the project into clear and manageable tasks. Then I assign responsibilities based on the individual's strengths and experience.

I make sure expectations, deadlines, and dependencies are clearly communicated.

After delegation, I don't simply disappear. I track progress through regular check-ins and remain available if someone needs support.

I believe effective delegation means giving people ownership while still ensuring that the team has the support necessary to succeed.`
  },
  {
    id: 16,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "How do you handle underperforming team members?",
    title: "Handling Underperformance",
    format: "Supportive to Accountable Escalation",
    tips: "Start with constructive diagnosis and support; define measurable improvement metrics with structured check-ins.",
    ans: `I would first try to understand why the team member is underperforming.

The reason could be a lack of technical knowledge, unclear expectations, workload, communication problems, or some other difficulty.

I would discuss the issue privately, provide specific feedback, clarify expectations, and offer support where possible.

Then I would agree on measurable improvements and a reasonable timeline for reviewing progress.

If performance improves, I would acknowledge it. If the issue continues despite reasonable support and clear expectations, I would escalate it through the appropriate management process.

My approach would be supportive initially, but also accountable and performance-focused.`
  },
  {
    id: 17,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "What qualities make a good leader?",
    title: "Qualities of a Good Leader",
    format: "8 Core Leadership Pillars",
    tips: "Leadership is about responsibility, trust, and serving the team's shared goals.",
    ans: `In my opinion, a good leader needs several qualities:

• Clear communication – to communicate goals and expectations.
• Integrity – to make honest and responsible decisions.
• Accountability – to take responsibility for outcomes.
• Empathy – to understand team members.
• Decision-making ability – especially during difficult situations.
• Adaptability – because priorities and situations can change.
• Ability to develop others – helping team members improve.
• Leading by example – demonstrating the behavior expected from the team.

For me, leadership is not primarily about authority. It is about responsibility, trust, and helping the team achieve a common objective.`
  },
  {
    id: 18,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "Tell me about a time when you took initiative.",
    title: "Taking Initiative",
    format: "Proactive Problem Detection",
    tips: "Initiative doesn't require grand gestures; solving small friction points early protects project velocity.",
    ans: `During a project, I noticed that some tasks were taking longer because responsibilities were not clearly divided.

Instead of waiting for someone else to address the issue, I suggested creating a simple task breakdown with clear ownership and deadlines.

I discussed the plan with the team, adjusted it based on everyone's availability, and helped track the progress.

This improved coordination and reduced confusion about who was responsible for each task.

The experience taught me that initiative does not always mean doing something major. Sometimes identifying a small problem early and taking responsible action can significantly improve the team's performance.`
  },
  {
    id: 19,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "How do you build trust within a team?",
    title: "Building Team Trust",
    format: "Reliability & Transparency Loop",
    tips: "Deliver on commitments, communicate roadblocks early, share credit, and focus on blameless problem resolution.",
    ans: `I believe trust is built through consistency, transparency, and reliability.

I try to keep my commitments, communicate honestly, and inform the team early if I face a problem or expect a delay.

I also respect other people's opinions and give credit to the person responsible for good work.

When mistakes happen, I prefer focusing on the solution rather than blaming individuals.

Over time, these behaviors create an environment where team members feel comfortable communicating openly and depending on each other.`
  },
  {
    id: 20,
    section: "B. Leadership Questions",
    category: "Leadership",
    q: "Describe your biggest leadership challenge.",
    title: "Biggest Leadership Challenge",
    format: "Navigating Diverse Working Styles",
    tips: "Leadership flexibility: aligning independent thinkers and collaborative peers toward a single clear outcome.",
    ans: `One of my biggest leadership challenges was coordinating people with different working styles and approaches.

Some team members preferred working independently, while others needed more discussion and coordination.

I learned that one communication style does not work equally well for everyone. I therefore focused on clearly defining the common goal, assigning specific responsibilities, and maintaining regular but concise communication.

The team eventually became more coordinated and completed the required work successfully.

The biggest lesson I learned was that effective leadership requires flexibility. A leader needs to adapt the approach according to the people and situation while keeping the final objective clear.`
  },

  // =========================================================================
  // C. TEAMWORK & COLLABORATION (Q21 - Q30)
  // =========================================================================
  {
    id: 21,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "Tell me about a successful team project.",
    title: "Successful Team Project",
    format: "Collaborative Milestone Execution",
    tips: "Clear division of labor (development, testing, documentation) + proactive dependency management.",
    ans: `One of my successful team projects was an academic project where we had to develop and present a solution within a fixed deadline.

We divided the project into different components such as development, testing, documentation, and presentation.

I was responsible for my assigned technical work while also coordinating with other members whenever our tasks were dependent on each other.

We maintained regular communication, reviewed our progress, and helped one another whenever someone encountered an issue.

As a result, we completed the project within the expected timeline and were able to present the solution successfully.

The experience taught me that successful teamwork depends on communication, responsibility, and mutual support.`
  },
  {
    id: 22,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "How do you handle disagreements in a team?",
    title: "Handling Team Disagreements",
    format: "Objective Decision Matrix",
    tips: "De-escalate personal biases by evaluating options against requirements, technical feasibility, and risks.",
    ans: `I believe disagreement is not necessarily negative. Different opinions can help the team identify a better solution.

When there is a disagreement, I first listen carefully to understand everyone's reasoning.

Then I try to shift the discussion from personal opinions to objective factors such as requirements, data, technical feasibility, risks, and project goals.

If necessary, I suggest comparing the alternatives and selecting the option that best supports the project's objective.

Once the decision is made, I support it professionally even if my original suggestion was not selected.

My priority is the team's success, not proving that my idea was correct.`
  },
  {
    id: 23,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "What role do you usually play in a team?",
    title: "Role in a Team",
    format: "Adaptive Contributor",
    tips: "Flexible team dynamics: strong autonomous contributor, proactive coordinator when needed, and humble supporter when others lead.",
    ans: `I usually consider myself a dependable contributor who can take responsibility when required.

I am comfortable working independently on assigned tasks, but I also like discussing problems and sharing ideas with the team.

If coordination is required, I am willing to take the initiative and help organize the work.

At the same time, I don't believe every situation requires me to lead. If someone else has more expertise in a particular area, I am comfortable supporting their direction.

I adapt my role according to what the team and project require.`
  },
  {
    id: 24,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "How do you deal with a team member who is not contributing?",
    title: "Non-Contributing Team Member",
    format: "Private Diagnostic Intervention",
    tips: "Speak privately, diagnose blockers, set firm milestones, offer help, and escalate professionally if unaddressed.",
    ans: `I would first speak with the team member privately rather than discussing the issue publicly.

I would try to understand whether the problem is due to unclear responsibilities, lack of knowledge, workload, or another reason.

Then I would clarify their responsibilities and agree on specific deliverables and timelines.

If they need help, I would offer reasonable support or connect them with someone who can help.

If there is still no improvement, I would communicate the issue to the appropriate team lead or manager with facts rather than personal criticism.

The objective would be to restore team performance while maintaining professionalism.`
  },
  {
    id: 25,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "Have you worked with diverse teams?",
    title: "Working With Diverse Teams",
    format: "Cognitive Diversity & Inclusivity",
    tips: "Diversity in technical expertise, communication styles, and backgrounds fuels superior engineering solutions.",
    ans: `Yes. Through academic projects and collaborative activities, I have worked with people who had different levels of technical knowledge, communication styles, and approaches to solving problems.

I learned that diversity can be a strength because different perspectives can lead to better ideas.

I try to listen respectfully, avoid making assumptions, and focus on the team's common objective.

When people have different opinions, I prefer using facts, requirements, and project goals to reach a decision.

I believe being comfortable working with different types of people is an important skill for any professional environment.`
  },
  {
    id: 26,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "Describe a conflict and how you resolved it.",
    title: "Conflict Resolution",
    format: "STAR Framework",
    tips: "Situation: Competing technical approaches. Action: Benchmarking trade-offs objectively. Result: Consensus without friction.",
    ans: `During a team project, two members had different opinions about how a particular part of the project should be implemented.

Instead of allowing the disagreement to delay the project, I suggested that we clearly compare both approaches based on performance, complexity, development time, and project requirements.

We discussed the advantages and limitations of each option and agreed on the approach that best matched the project requirements.

The disagreement was resolved without becoming personal, and the project continued according to the planned timeline.

This experience taught me that most professional conflicts can be handled effectively through active listening, objective discussion, and focusing on the common goal.`
  },
  {
    id: 27,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "How do you encourage collaboration?",
    title: "Encouraging Collaboration",
    format: "Structured Transparency & Blameless Culture",
    tips: "Establish daily syncs, recognize peer contributions, and dismantle individual knowledge silos.",
    ans: `I encourage collaboration by creating clarity about the common goal and making sure everyone understands how their work contributes to it.

I believe communication should be open, but also structured. Regular short discussions can help identify blockers early.

I also encourage team members to share ideas and ask for help when needed.

When someone contributes a useful idea or helps another member, I believe their contribution should be recognized.

Most importantly, I try to create an environment where people focus on solving problems together rather than protecting individual responsibilities.`
  },
  {
    id: 28,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "What would you do if your team disagreed with your idea?",
    title: "When Team Rejects My Idea",
    format: "Intellectual Humility & Team Alignment",
    tips: "No ego in engineering. Probe concerns with curiosity, adopt superior alternatives, or present clear objective data.",
    ans: `I would not take it personally.

First, I would ask the team members to explain their concerns and understand their reasoning.

If their arguments are stronger or supported by better data, I would be completely comfortable changing my position.

If I still believe my approach has advantages, I would explain my reasoning objectively and suggest comparing both options.

Ultimately, I would support the decision that is best for the project.

I believe a good team member or leader should be willing to change their opinion when better information becomes available.`
  },
  {
    id: 29,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "How do you handle criticism from team members?",
    title: "Handling Criticism",
    format: "Growth-Oriented Feedback Loop",
    tips: "Constructive criticism is free optimization. Listen without defensive walls and implement concrete changes.",
    ans: `I try to treat constructive criticism as an opportunity to improve.

First, I listen without becoming defensive and try to understand exactly what the person is pointing out.

If the feedback is valid, I accept it and work on improving the specific area.

If I disagree, I respectfully discuss the reasoning rather than rejecting the feedback immediately.

I believe feedback is especially valuable because sometimes other people can identify weaknesses in our approach that we may not notice ourselves.`
  },
  {
    id: 30,
    section: "C. Teamwork & Collaboration",
    category: "Teamwork",
    q: "Describe a situation where teamwork helped achieve success.",
    title: "Teamwork Led to Success",
    format: "Synergy Under Tight Deadlines",
    tips: "Distributed workload + real-time blocker troubleshooting = higher quality than isolated heroics.",
    ans: `During a project with a tight deadline, completing the work individually would have created a significant risk of delay.

We divided the project into independent components and assigned responsibilities according to each member's strengths.

We also maintained communication about dependencies so that one person's work did not block another person's progress.

When one member encountered a problem, others helped troubleshoot it rather than treating it as an individual issue.

Because of this coordination, we were able to complete the project within the expected timeline.

The experience reinforced my belief that effective teamwork can achieve better results than individuals working separately.`
  },

  // =========================================================================
  // D. DECISION-MAKING (Q31 - Q40)
  // =========================================================================
  {
    id: 31,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "Describe a difficult decision you made.",
    title: "Difficult Decision",
    format: "Scope vs Quality Prioritization",
    tips: "Good engineering decision-making is often about ruthlessly choosing what NOT to build to protect core reliability.",
    ans: `During a project, we had limited time and multiple features that could potentially be implemented.

Instead of trying to complete everything and risking poor quality, I suggested prioritizing the features that were most important to the core objective.

We evaluated the requirements, effort involved, dependencies, and expected value.

Based on that analysis, we focused on the essential functionality first and kept lower-priority improvements for later.

This helped us maintain quality and meet the deadline.

I learned that good decision-making is not always about doing more; sometimes it is about choosing what matters most.`
  },
  {
    id: 32,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "How do you make decisions under pressure?",
    title: "Decision Making Under Pressure",
    format: "Calm Analytical Triage",
    tips: "Isolate emotion, identify immediate must-haves, evaluate high-impact risks, and adapt as outcomes unfold.",
    ans: `Under pressure, I try to remain calm and avoid making decisions purely based on emotion.

I first identify the actual problem and determine what decision needs to be made immediately.

Then I collect the most relevant information available, evaluate the major risks and alternatives, and choose the option that best supports the objective.

If there is not enough time for a detailed analysis, I focus on the most critical factors rather than trying to analyze everything.

After making the decision, I monitor the result and adjust the approach if new information becomes available.`
  },
  {
    id: 33,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "What factors do you consider before making a decision?",
    title: "Factors in Decision Making",
    format: "8-Factor Evaluation Framework",
    tips: "Evaluate reversibility: two-way door decisions can be fast; one-way doors require rigorous data validation.",
    ans: `Before making an important decision, I generally consider:

• The objective or expected outcome
• Available data and facts
• Impact on customers and stakeholders
• Time and available resources
• Risks and possible consequences
• Alternative solutions
• Technical and business feasibility
• Short-term and long-term impact

I also consider whether the decision can be reversed easily. If it is difficult to reverse, I prefer taking more time to validate the information before proceeding.`
  },
  {
    id: 34,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "Have you ever made a wrong decision? What happened?",
    title: "A Wrong Decision",
    format: "Ownership & Estimation Correction",
    tips: "Acknowledge misestimations proactively, communicate before deadlines break, and implement buffer strategies.",
    ans: `Yes. During a project, I once underestimated the amount of time required for a particular task.

Because of that, the task took longer than I initially expected and created some pressure toward the end of the project.

Instead of hiding the issue, I communicated it early, reassessed the remaining work, and adjusted the priorities so that the important deliverables were completed first.

The experience taught me an important lesson about estimating work more realistically and communicating risks early.

Since then, I try to include reasonable buffer time and identify potential dependencies before committing to a deadline.`
  },
  {
    id: 35,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "How do you balance speed and accuracy?",
    title: "Speed vs Accuracy",
    format: "Reversibility Risk Matrix",
    tips: "Be fast and agile on low-risk/reversible decisions; be meticulous and rigorous on core architectural/security choices.",
    ans: `I believe the right balance depends on the impact of the decision.

For low-risk and reversible decisions, I prefer moving quickly rather than spending excessive time analyzing every possibility.

For high-impact or difficult-to-reverse decisions, I take more time to validate the information and consider potential risks.

My approach is to identify the minimum level of analysis required to make a responsible decision within the available time.

In short, I try to be fast where speed matters and thorough where accuracy and risk matter more.`
  },
  {
    id: 36,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "Tell me about a data-driven decision you made.",
    title: "Data-Driven Decision",
    format: "Empirical Benchmarking",
    tips: "Replace subjective arguments with runtime benchmarks, memory footprints, and complexity trade-offs.",
    ans: `During a project, we had multiple possible approaches for implementing a feature.

Rather than selecting an approach only based on personal preference, we compared them using measurable factors such as implementation complexity, execution time, resource requirements, and expected performance.

After evaluating those factors, we selected the approach that provided the best balance between performance and development effort.

This experience taught me that data does not always provide the complete answer, but it helps make decisions more objective and easier to justify.`
  },
  {
    id: 37,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "How do you prioritize multiple options?",
    title: "Prioritizing Options",
    format: "Impact vs Urgency vs Effort Matrix",
    tips: "Prevent recency bias; order tasks based on critical path dependencies and maximum value delivery.",
    ans: `I prioritize options based on their impact, urgency, effort, dependencies, and risk.

I first identify which options directly affect the main objective.

Then I compare the expected value against the effort and resources required.

High-impact and time-sensitive items generally receive higher priority.

I also consider dependencies because completing one task may be necessary before another can begin.

This approach helps me avoid simply working on whichever task appears first and instead focus on what creates the greatest value.`
  },
  {
    id: 38,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "What would you do if you lacked sufficient information?",
    title: "Decision With Limited Information",
    format: "Hypothesis-Driven Safe Execution",
    tips: "Document explicit assumptions, select low-risk reversible paths, and establish check-in triggers as data surfaces.",
    ans: `If I lack sufficient information, I would first identify exactly what information is missing and whether it is critical to the decision.

If time allows, I would gather additional information through documentation, data, discussions with experienced team members, or relevant stakeholders.

If a decision cannot be delayed, I would clearly identify the assumptions I am making, evaluate the associated risks, and choose the safest reasonable option.

I would also communicate the uncertainty to the relevant stakeholders rather than presenting an assumption as a fact.

Once more information becomes available, I would reassess the decision if necessary.`
  },
  {
    id: 39,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "Describe a time when you convinced others to accept your decision.",
    title: "Influencing Others",
    format: "Evidence-Based Persuasion",
    tips: "Influencing isn't forceful arguing; it's presenting structured trade-off comparisons that allow data to persuade.",
    ans: `During a project, I suggested a particular approach because I believed it would reduce implementation complexity.

Initially, some team members preferred another approach.

Instead of insisting on my opinion, I explained my reasoning and compared both options based on development effort, maintainability, performance, and project requirements.

After discussing the advantages and limitations, the team agreed that my proposed approach was more suitable for our specific requirements.

This taught me that influencing people effectively is not about forcing a decision. It is about presenting clear reasoning and allowing others to evaluate the evidence.`
  },
  {
    id: 40,
    section: "D. Decision-Making",
    category: "Decision-Making",
    q: "How do you handle uncertainty?",
    title: "Handling Uncertainty",
    format: "Knowns vs Unknowns Separation",
    tips: "Divide into what you know, what you don't know, and what is within control. Build agile checkpoints.",
    ans: `I handle uncertainty by separating what I know, what I don't know, and what I can control.

First, I gather the most relevant information available.

Then I identify assumptions, possible risks, and different scenarios.

Instead of waiting for complete certainty, I make a reasonable decision based on the available evidence when action is required.

I also keep the decision flexible where possible and continuously monitor new information.

I believe uncertainty is a normal part of professional work, so the goal is not to eliminate all uncertainty but to manage it responsibly.`
  },

  // =========================================================================
  // E. PROBLEM SOLVING (Q41 - Q50)
  // =========================================================================
  {
    id: 41,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "Tell me about a complex problem you solved.",
    title: "Complex Problem Solved",
    format: "Systematic Root Cause Debugging",
    tips: "Reproduce consistently → isolate pipeline stages (input, process, output) → test edge cases.",
    ans: `During a project, we faced an issue where the application was not producing the expected result under certain conditions.

Instead of changing the code randomly, I first reproduced the issue consistently and narrowed down the conditions under which it occurred.

Then I divided the problem into smaller components and checked the input, processing logic, and output separately.

After identifying the root cause, I corrected the relevant part of the implementation and tested the solution against both normal and edge cases.

This approach helped resolve the problem and taught me the importance of systematic debugging instead of trial-and-error changes.`
  },
  {
    id: 42,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "How do you approach unfamiliar problems?",
    title: "Approaching Unfamiliar Problems",
    format: "Deconstruction & Prototyping",
    tips: "Deconstruct into knowns and unknowns; build minimal working proofs-of-concept before full-scale implementation.",
    ans: `When I face an unfamiliar problem, I don't expect myself to know the answer immediately.

First, I make sure I clearly understand the problem and expected outcome.

Then I break it into smaller parts and identify what I already know and what I need to learn.

I use reliable documentation, technical resources, and discussions with experienced team members when appropriate.

After understanding the possible approaches, I implement a small solution, test it, learn from the result, and gradually improve it.

This allows me to handle unfamiliar situations without becoming dependent on having prior experience with exactly the same problem.`
  },
  {
    id: 43,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "Describe a situation where things did not go as planned.",
    title: "When Things Did Not Go as Planned",
    format: "Agile Reprioritization",
    tips: "Acknowledge deviation promptly, recalibrate the critical path, and communicate proactively with stakeholders.",
    ans: `During a project, one of our tasks took longer than expected because we encountered an unexpected technical issue.

Once we realized that the original timeline was at risk, we reassessed the remaining work and identified the most critical deliverables.

We communicated the situation, redistributed some tasks, and focused first on the core functionality.

Although the original plan needed adjustment, we were able to complete the important parts successfully.

The experience taught me that a good plan is important, but the ability to adapt when circumstances change is equally important.`
  },
  {
    id: 44,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "How do you identify the root cause of a problem?",
    title: "Root Cause Analysis",
    format: "5 Whys & Ishikawa Analysis",
    tips: "Separate surface symptoms from core architectural flaws; validate hypotheses before modifying production systems.",
    ans: `I follow a structured approach.

First, I clearly define the problem and reproduce it if possible.

Then I collect relevant information and separate symptoms from the actual issue.

I break the system or process into smaller components and check where the unexpected behavior begins.

For process-related problems, I may use techniques such as the 5 Whys or cause-and-effect analysis.

Once I identify a probable root cause, I validate it before implementing the solution.

Finally, I test the solution and check whether the same problem can occur again.`
  },
  {
    id: 45,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "What is your problem-solving process?",
    title: "Problem Solving Process",
    format: "6-Step Engineering Lifecycle",
    tips: "Understand → Decompose → Analyze → Generate Options → Execute → Verify & Retrospect.",
    ans: `My problem-solving process generally has six steps:

1. Understand the problem clearly.
2. Break it into smaller parts.
3. Analyze the available information and possible causes.
4. Generate possible solutions.
5. Evaluate and implement the most appropriate solution.
6. Test and review the result.

I also try to identify whether the solution addresses the root cause or only the symptom.

This structured approach helps me remain calm and logical even when the problem is unfamiliar or under time pressure.`
  },
  {
    id: 46,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "How do you manage risks?",
    title: "Risk Management",
    format: "Proactive Risk Matrix",
    tips: "Identify probability and impact early; maintain active mitigation plans and transparent stakeholder escalation.",
    ans: `I manage risks by identifying them early rather than waiting for them to become actual problems.

For each significant risk, I consider its probability, potential impact, and the actions that could reduce it.

For high-impact risks, I prefer having a mitigation plan or alternative approach.

I also communicate important risks to relevant team members or stakeholders so that there are no surprises later.

During the project, I continuously review risks because new risks can appear as requirements or circumstances change.`
  },
  {
    id: 47,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "Describe a challenge that required creative thinking.",
    title: "Creative Problem Solving",
    format: "Pragmatic Simplification",
    tips: "Creativity in engineering often means finding simpler, elegant architectures that fulfill constraints without overengineering.",
    ans: `During a project, we had limited time and resources to implement all the desired functionality.

Instead of attempting to build every feature completely, we looked at the core objective and identified the simplest approach that could provide the required result.

We simplified some non-critical components while keeping the important functionality intact.

This allowed us to deliver a working solution within the available constraints.

The experience taught me that creative problem-solving does not always mean inventing something completely new. It can also mean finding a simpler and more practical way to achieve the same objective.`
  },
  {
    id: 48,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "How do you handle repeated failures?",
    title: "Handling Repeated Failures",
    format: "Hypothesis Retrospective",
    tips: "Never retry the exact same failing strategy; question underlying baseline assumptions and seek peer perspectives.",
    ans: `I try not to treat repeated failure as simply a reason to try the same approach again.

If an approach fails repeatedly, I stop and analyze what assumption may be incorrect.

I review what has already been attempted, identify patterns, seek feedback from others, and consider alternative approaches.

I also document what I learned so that the same mistake is not repeated.

For me, failure becomes valuable when it produces learning and leads to a better approach.`
  },
  {
    id: 49,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "Have you ever improved a process?",
    title: "Process Improvement",
    format: "Workflow Standardization",
    tips: "Standardizing repetitive manual tasks into automated or reusable workflows saves massive engineering hours.",
    ans: `Yes. In a project, I noticed that repeatedly performing certain tasks manually was creating unnecessary effort and increasing the possibility of mistakes.

I looked at the process and identified steps that could be standardized or simplified.

We introduced a clearer workflow and used reusable steps wherever possible.

This reduced confusion and made the process more consistent.

The experience taught me that process improvement does not always require a major technological change. Sometimes small improvements in organization and standardization can save significant time.`
  },
  {
    id: 50,
    section: "E. Problem Solving",
    category: "Problem Solving",
    q: "What is the toughest problem you have faced?",
    title: "Toughest Problem",
    format: "Multi-Constraint Delivery",
    tips: "Managing compounding technical and timeline pressures through systematic decomposition and transparent updates.",
    ans: `One of the toughest challenges I have faced was completing a project while simultaneously dealing with technical difficulties and a limited deadline.

The biggest challenge was not one particular technical issue but managing multiple problems without losing focus.

I broke the work into smaller priorities, identified the critical issues, researched solutions, and asked for help when necessary.

I also communicated progress rather than waiting until the last moment.

We were able to complete the important deliverables, and I learned that difficult situations become more manageable when they are approached systematically instead of emotionally.`
  },

  // =========================================================================
  // F. CONFLICT MANAGEMENT (Q51 - Q60)
  // =========================================================================
  {
    id: 51,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "Tell me about a workplace conflict.",
    title: "Workplace Conflict",
    format: "Academic/Project Experience",
    tips: "For a fresher, do not invent workplace experience. Use academic/project experience honestly.",
    ans: `Since I am at the beginning of my professional career, most of my conflict-resolution experience comes from academic and project teams.

In one project, team members had different opinions about how we should approach a particular task.

I encouraged everyone to explain their reasoning and shifted the discussion toward objective factors such as requirements, effort, and expected results.

After comparing the alternatives, we agreed on the approach that best supported the project.

The experience taught me that disagreements can be resolved professionally when people focus on the problem rather than the person.`
  },
  {
    id: 52,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "How do you handle disagreements with seniors?",
    title: "Disagreement With Seniors",
    format: "Respectful Technical Reasoning",
    tips: "Present factual data respectfully; recognize seniors carry broader strategic context, and commit fully to the final call.",
    ans: `If I disagree with a senior, I would first make sure I fully understand their reasoning.

If I still believe there is a better alternative, I would respectfully explain my perspective using facts, data, or technical reasoning rather than personal opinion.

I would remain open to their feedback because they may have information or experience that I do not have.

If the final decision is different from my recommendation, I would respect it and support the agreed direction professionally.

I believe disagreement with a senior should be handled through respectful communication, not confrontation.`
  },
  {
    id: 53,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "How would you manage conflict between team members?",
    title: "Managing Team Conflict",
    format: "Mediation & Goal Realignment",
    tips: "Hear both sides separately, re-anchor on project outcomes, demand mutual professionalism, and escalate if needed.",
    ans: `I would first understand both sides separately if the conflict is serious enough to require private discussion.

Then I would bring the discussion back to the team's objective and identify the actual issue causing the disagreement.

I would encourage both people to communicate their concerns respectfully and focus on facts rather than personal criticism.

After understanding the problem, I would work with them to identify a practical resolution and clarify expectations going forward.

If the conflict cannot be resolved at the team level or involves serious misconduct, I would involve the appropriate manager or organizational process.`
  },
  {
    id: 54,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "Have you ever received unfair criticism?",
    title: "Unfair Criticism",
    format: "Non-Defensive Emotional Regulation",
    tips: "Do not react in anger. Unpack constructive kernel if present, and clarify misunderstandings with verified facts.",
    ans: `Yes, it is possible to receive feedback that initially feels unfair.

My first response would be to avoid reacting emotionally. I would listen carefully and try to understand what specifically led to the criticism.

If there is something valid in the feedback, I would use it for improvement.

If I believe the criticism is based on incomplete information, I would respectfully provide the relevant facts and clarify the situation.

I believe the professional response to criticism is to focus on understanding the issue and resolving it rather than becoming defensive.`
  },
  {
    id: 55,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "How do you react when someone disagrees with you?",
    title: "When Someone Disagrees",
    format: "Curiosity Over Ego",
    tips: "Disagreements test logic and assumptions. Welcome stronger evidence and remain focused on project excellence.",
    ans: `I see disagreement as an opportunity to examine my thinking.

I first listen to understand why the person has a different opinion.

If their reasoning or evidence is stronger, I am willing to change my position.

If I still believe my approach is better, I explain my reasoning respectfully and compare the alternatives objectively.

My goal is not to win an argument. My goal is to arrive at the best possible decision for the team or project.`
  },
  {
    id: 56,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "What steps do you take to resolve conflicts?",
    title: "Conflict Resolution Process",
    format: "5-Step Resolution Roadmap",
    tips: "Understand → Listen → Separate emotion from facts → Identify shared solution → Commit to action items.",
    ans: `My approach generally involves five steps:

1. Understand the issue objectively.
2. Listen to all relevant perspectives.
3. Separate facts from assumptions or emotions.
4. Identify a solution that supports the team's objective.
5. Agree on clear actions and expectations.

If necessary, I involve a senior or manager when the issue cannot be resolved at the team level.

I believe successful conflict resolution should solve the immediate problem while also reducing the chance of the same conflict happening again.`
  },
  {
    id: 57,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "How do you remain professional during disagreements?",
    title: "Professional During Disagreements",
    format: "Emotional Intelligence & Decorum",
    tips: "Preserve the human relationship; debate the idea or metric, never attack the contributor.",
    ans: `I focus on the issue rather than the person.

I maintain a respectful tone, listen before responding, and avoid interrupting or making personal comments.

I also try to use facts and project requirements instead of emotional statements.

Even when I strongly disagree, I remind myself that we are working toward the same organizational objective.

Professionalism means being able to disagree respectfully without damaging the working relationship.`
  },
  {
    id: 58,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "Describe a difficult conversation you had.",
    title: "Difficult Conversation",
    format: "Private Empathetic Accountability",
    tips: "Address delays in private, outline project impact clearly, listen for personal/technical hurdles, and agree on fresh dates.",
    ans: `During a group project, I had to discuss a situation where a team member was not completing an assigned responsibility on time.

I chose to speak with the person privately instead of criticizing them in front of the team.

I explained the impact of the delay on the overall project and asked whether there was any difficulty preventing them from completing the task.

After understanding the situation, we clarified the responsibility and agreed on a revised timeline.

The conversation helped improve coordination without creating unnecessary personal conflict.

It taught me that difficult conversations become more productive when they are respectful, specific, and focused on solutions.`
  },
  {
    id: 59,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "How do you manage emotional situations?",
    title: "Managing Emotional Situations",
    format: "De-escalation & Fact Extraction",
    tips: "Pause before speaking; validate human frustration, let emotional tension dissipate, then focus on concrete fixes.",
    ans: `When a situation becomes emotional, I try to remain calm and avoid responding immediately.

I listen carefully and acknowledge the person's concerns without unnecessarily escalating the situation.

Then I try to separate the emotional part from the actual problem that needs to be solved.

Once everyone is calmer, I focus the discussion on facts, possible solutions, and next steps.

If the situation involves something beyond my responsibility, I would involve the appropriate manager or HR representative.

I believe emotional intelligence is important because professional problems often involve people as much as processes.`
  },
  {
    id: 60,
    section: "F. Conflict Management",
    category: "Conflict Management",
    q: "What would you do if two team members stopped cooperating?",
    title: "Team Members Not Cooperating",
    format: "Dependency Restructuring & Mediation",
    tips: "Diagnose breakdown root cause, establish objective deliverables, decouple blockers if necessary, and escalate with facts.",
    ans: `I would first understand why the cooperation has broken down.

I would speak to both members and identify whether the issue is personal conflict, unclear responsibilities, workload, communication, or something else.

Then I would clarify the common objective and establish clear responsibilities and expectations.

If necessary, I would restructure dependencies so that the project can continue while the issue is being resolved.

If the conflict continues or seriously affects project performance, I would escalate it to the manager with objective information.

My priority would be both restoring professional collaboration and protecting the project's progress.`
  },

  // =========================================================================
  // G. PERFORMANCE & ACCOUNTABILITY (Q61 - Q70)
  // =========================================================================
  {
    id: 61,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "How do you measure your success?",
    title: "Measuring Success",
    format: "Outcomes & Growth Feedback Loop",
    tips: "Success = High-quality delivery on time + tangible skill growth + constructive stakeholder validation.",
    ans: `I measure success through both results and improvement.

First, I look at whether I achieved the expected objective within the required quality and timeline.

Second, I consider what I learned and whether I became better than I was before.

I also value feedback from teammates and seniors because it helps identify areas that may not be visible to me.

For me, success is not only completing a task. It is completing it responsibly, learning from the experience, and becoming more capable for the next challenge.`
  },
  {
    id: 62,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "Describe a time when you missed a deadline.",
    title: "Missed Deadline",
    format: "Honest Risk Escalation & Recovery",
    tips: "Never hide slippages. Escalate early, triage deliverables, and institute estimation safety margins.",
    ans: `During a project, I once underestimated the effort required for a particular task, which put the original deadline at risk.

Once I recognized the problem, I communicated it rather than hiding it.

I reassessed the remaining work, prioritized the critical deliverables, and adjusted my approach to complete the most important components first.

The experience taught me the importance of realistic estimation, early risk identification, and proactive communication.

Since then, I have become more careful about estimating tasks and considering dependencies before committing to timelines.`
  },
  {
    id: 63,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "How do you manage priorities?",
    title: "Managing Priorities",
    format: "Impact vs Urgency vs Dependencies",
    tips: "Break monolithic work into milestones; proactively flag conflicting deadlines to managers instead of guessing.",
    ans: `I prioritize work based on urgency, importance, business impact, dependencies, and deadlines.

I first identify the tasks that have the greatest impact on the overall objective.

Then I consider which tasks are time-sensitive and which tasks are dependent on other work.

I break larger tasks into smaller actionable steps and track progress.

If priorities change, I reassess the plan rather than blindly following the original schedule.

I also communicate early if competing priorities make the original timeline unrealistic.`
  },
  {
    id: 64,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "Tell me about a time when you exceeded expectations.",
    title: "Exceeding Expectations",
    format: "Value Add Beyond Scope",
    tips: "Exceeding expectations isn't scope creep; it's providing proactive documentation and testing that shields the entire team.",
    ans: `During a project, my assigned responsibility was to complete a particular technical component.

After completing it, I noticed that some additional testing and documentation could make the overall project more reliable and easier for others to understand.

I took the initiative to add those improvements without compromising the main deadline.

This helped the team during final testing and presentation.

For me, exceeding expectations does not mean doing unnecessary extra work. It means identifying opportunities to create additional value while still meeting the original responsibility.`
  },
  {
    id: 65,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "How do you ensure accountability?",
    title: "Accountability",
    format: "Ownership & Follow-Through",
    tips: "Define explicit deliverables, communicate impediments early, own mistakes squarely, and drive to closure.",
    ans: `I believe accountability starts with clear ownership.

Whenever I take responsibility for a task, I make sure I understand the expected outcome, quality requirements, and deadline.

I track my progress and communicate early if I encounter a blocker or risk.

If I make a mistake, I take responsibility instead of blaming someone else.

I also believe accountability means following through on commitments and ensuring that the final result meets expectations, not simply saying that the task was completed.`
  },
  {
    id: 66,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "How do you handle multiple deadlines?",
    title: "Multiple Deadlines",
    format: "Milestone Tracking & Escalation",
    tips: "Map task dependencies; if collisions occur, align with management on trade-offs rather than silent failure.",
    ans: `When I have multiple deadlines, I first list all tasks along with their deadlines, effort, importance, and dependencies.

Then I prioritize tasks based on business or project impact and urgency.

I break larger tasks into smaller milestones so that progress is visible.

If two high-priority deadlines genuinely conflict, I communicate the situation early and discuss the priorities with the relevant manager rather than making assumptions.

This approach helps me remain organized and reduces the risk of last-minute surprises.`
  },
  {
    id: 67,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "Describe a time when you made a mistake.",
    title: "A Mistake I Made",
    format: "Requirement Clarification Lesson",
    tips: "Admit assumption errors immediately, repair the codebase, and institute upfront requirement verification habits.",
    ans: `During a project, I made an assumption about a requirement without confirming it properly.

Later, I realized that the assumption was incorrect, which meant part of my work needed to be changed.

I took responsibility, clarified the requirement, corrected the implementation, and reviewed the related work to ensure the same issue had not affected other parts.

The experience taught me that asking a clarification question early can save significant time later.

Since then, I make a conscious effort to confirm important requirements before implementation.`
  },
  {
    id: 68,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "How do you respond to feedback?",
    title: "Responding to Feedback",
    format: "Actionable Growth Mindset",
    tips: "Listening to feedback is passive; turning critiques into verifiable behavioral and technical upgrades is real growth.",
    ans: `I welcome constructive feedback because it helps me identify areas for improvement.

When I receive feedback, I first listen carefully and try to understand the specific behavior or result that needs improvement.

If the feedback is valid, I work on it and try to demonstrate improvement through my future work.

I also believe feedback should be converted into action. Simply listening to feedback is not enough.

My approach is to remain open-minded, avoid becoming defensive, and use feedback as a tool for professional growth.`
  },
  {
    id: 69,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "How do you maintain quality under pressure?",
    title: "Quality Under Pressure",
    format: "Engineering Checklists & Review Gates",
    tips: "Under pressure, do not skip unit tests or code reviews; prioritize critical paths and communicate timeline realities.",
    ans: `Under pressure, I focus on prioritization rather than simply working faster.

I identify the most critical requirements and make sure they receive sufficient attention.

I also use checklists, testing, code reviews, or other appropriate quality-control practices to reduce avoidable mistakes.

If the deadline becomes unrealistic, I communicate the risk early instead of silently compromising quality.

I believe working under pressure means becoming more organized and focused, not ignoring quality.`
  },
  {
    id: 70,
    section: "G. Performance & Accountability",
    category: "Performance & Accountability",
    q: "What does ownership mean to you?",
    title: "Meaning of Ownership",
    format: "End-to-End Responsibility",
    tips: "Ownership is owning outcomes, not just task completion. Asking 'What can I do to solve this?' in crises.",
    ans: `To me, ownership means taking responsibility for the outcome, not just the task assigned to me.

It means understanding the objective, completing my responsibilities, identifying risks early, communicating problems, and following through until the issue is resolved.

If something goes wrong, ownership means asking, "What can I do to help solve this?" rather than immediately looking for someone to blame.

I believe people who take ownership become dependable because the team knows they can be trusted to follow through.`
  },

  // =========================================================================
  // H. CHANGE MANAGEMENT & ADAPTABILITY (Q71 - Q80)
  // =========================================================================
  {
    id: 71,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "Tell me about a significant change you experienced.",
    title: "Handling Significant Change",
    format: "Tech Stack Transition",
    tips: "Embrace tech pivots as capability accelerators; break new concepts into micro-modules and practical labs.",
    ans: `One significant change I have experienced was having to adapt to new technologies and requirements during my academic projects.

Initially, the change required me to learn concepts that I was not already comfortable with.

Instead of resisting the change, I broke the learning into smaller topics, used documentation and practical examples, and gradually applied the new knowledge.

Although the transition required additional effort, it helped me become more adaptable and comfortable with learning unfamiliar technologies.

I learned that change can be challenging initially, but it can also create opportunities to develop new skills.`
  },
  {
    id: 72,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "How do you adapt to new situations?",
    title: "Adapting to New Situations",
    format: "Situational Assessment Loop",
    tips: "Assess changes calmly: identify constants, new variables, required skills, and execute an iterative adjustment plan.",
    ans: `I adapt by first understanding the new situation rather than immediately reacting to it.

I identify what has changed, what remains the same, and what skills or information I need.

Then I create a practical plan to adjust.

I am comfortable asking questions when something is unclear, learning new tools when required, and changing my approach based on new information.

I believe adaptability is especially important in technology because tools, requirements, and business priorities can change frequently.`
  },
  {
    id: 73,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "How do you handle ambiguity?",
    title: "Handling Ambiguity",
    format: "Clarification & Flexible Prototyping",
    tips: "Dissect vague requirements, ask targeted questions to stakeholders, document assumptions, and build modifiable solutions.",
    ans: `When requirements are ambiguous, I first identify exactly what is unclear.

I try to gather information from available documentation and stakeholders.

If clarification is required, I ask specific questions rather than making unnecessary assumptions.

If immediate action is required, I document my assumptions, choose a reasonable approach, and keep the solution flexible where possible.

I believe handling ambiguity requires both initiative and communication.`
  },
  {
    id: 74,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "Describe a time when you learned a new skill quickly.",
    title: "Learning a New Skill Quickly",
    format: "Just-In-Time Focused Learning",
    tips: "Isolate the minimum viable concepts needed to deliver, build a micro prototype, and scale to production.",
    ans: `During a project, I needed to work with a technology or concept that I had limited prior experience with.

I first identified the minimum concepts required to complete the task instead of trying to learn everything at once.

I studied the fundamentals, followed reliable documentation and examples, and then practiced by implementing a small working component.

After understanding the basics, I applied the knowledge to the actual project.

This experience taught me that focused learning combined with practical application is one of the fastest ways to develop a new skill.`
  },
  {
    id: 75,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "How do you respond to organizational changes?",
    title: "Responding to Organizational Changes",
    format: "Business Alignment & Adaptability",
    tips: "Understand strategic context, realign personal deliverables, master new workflows, and maintain high delivery standards.",
    ans: `I understand that organizational changes are a normal part of business.

My first priority would be to understand why the change is happening and how it affects my responsibilities.

Then I would adapt my priorities, learn any required new processes or technologies, and communicate with my team to ensure alignment.

If I have concerns, I would raise them constructively with appropriate reasoning.

I believe employees should be flexible while still maintaining quality, professionalism, and focus on business objectives.`
  },
  {
    id: 76,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "What would you do if project requirements suddenly changed?",
    title: "Changing Project Requirements",
    format: "Impact Analysis & Reprioritization",
    tips: "Assess scope, dependencies, and delivery dates before rewriting code; align on trade-offs with stakeholders.",
    ans: `First, I would understand the new requirements and why they changed.

Then I would assess their impact on the current scope, timeline, resources, dependencies, and existing work.

I would discuss the impact with the team and relevant stakeholders and reprioritize the work accordingly.

If the new requirement creates a deadline or resource conflict, I would communicate that clearly and discuss the available options.

My goal would be to adapt quickly without creating unnecessary rework or compromising critical quality requirements.`
  },
  {
    id: 77,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "How do you stay updated with industry trends?",
    title: "Staying Updated",
    format: "Continuous Engineering Hygiene",
    tips: "Anchor on strong CS fundamentals; filter trends through utility and hands-on proof-of-concept builds.",
    ans: `I stay updated through a combination of official documentation, technical articles, developer communities, courses, and hands-on practice.

I try not to follow every trend simply because it is popular. Instead, I focus on technologies and concepts that are relevant to my career and projects.

When I learn something new, I prefer implementing a small practical example because hands-on experience helps me understand the technology better.

I also believe strong fundamentals are important because technologies change, while core software engineering principles remain relevant.`
  },
  {
    id: 78,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "Tell me about a time when you stepped out of your comfort zone.",
    title: "Stepping Outside Comfort Zone",
    format: "Proactive Skill Expansion",
    tips: "Taking on public presentations or complex unfamiliar architectures accelerates professional maturation.",
    ans: `During my academic journey, I have taken on tasks that were outside my initial area of confidence, particularly when a project required me to learn unfamiliar technologies or communicate technical information to others.

Initially, I was not completely comfortable with the situation.

I prepared myself by learning the required concepts, practicing, and seeking feedback.

The experience improved both my technical confidence and communication skills.

It taught me that professional growth often happens when we are willing to take on challenges that are slightly beyond our current comfort zone.`
  },
  {
    id: 79,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "How do you manage change resistance?",
    title: "Managing Resistance to Change",
    format: "Empathetic Communication & Gradual Onboarding",
    tips: "Uncover anxieties behind resistance (workload/fear of failure); explain 'why' clearly and ease transitions.",
    ans: `I would first try to understand the reason for the resistance.

People may resist change because they don't understand its purpose, are concerned about workload, or are uncomfortable with something unfamiliar.

I would clearly communicate the reason for the change, expected benefits, and how the transition would be managed.

I would also listen to concerns and address valid issues rather than simply expecting people to accept the change.

If the change is necessary, I would help the team transition gradually where possible and maintain clear expectations.`
  },
  {
    id: 80,
    section: "H. Change Management & Adaptability",
    category: "Change Management",
    q: "How do you balance flexibility and consistency?",
    title: "Flexibility vs Consistency",
    format: "Process Agility vs Standard Invariance",
    tips: "Be flexible on implementation techniques and methodologies; be completely unyielding on code quality and ethics.",
    ans: `I believe flexibility should apply to the approach, while consistency should apply to important standards and objectives.

For example, I can change my working method when project requirements change, but I should remain consistent about quality, professionalism, deadlines, and ethical standards.

I try to avoid being rigid when circumstances change, but I also avoid changing direction without a valid reason.

The balance comes from understanding which aspects are fixed and which aspects can be adapted.`
  },

  // =========================================================================
  // I. CLIENT & STAKEHOLDER MANAGEMENT (Q81 - Q90)
  // =========================================================================
  {
    id: 81,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "How would you handle an unhappy client?",
    title: "Handling an Unhappy Client",
    format: "Active Listening & Realistic Remediation",
    tips: "Never interrupt or become defensive. Acknowledge impact, investigate calmly, commit to achievable steps, and prevent recurrence.",
    ans: `First, I would listen carefully and allow the client to explain the concern without interrupting.

I would acknowledge the issue and make sure I understand the actual problem and its impact.

Then I would investigate the situation, identify what can be done, and communicate a realistic action plan.

I would avoid making promises that cannot be fulfilled.

After resolving the immediate issue, I would follow up to ensure that the client is satisfied and identify whether any process improvement can prevent the problem from happening again.

The goal would be to resolve the issue while maintaining trust and professionalism.`
  },
  {
    id: 82,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "Describe a situation where you managed stakeholder expectations.",
    title: "Managing Stakeholder Expectations",
    format: "Transparent Scope Phasing",
    tips: "Do not overpromise. Deliver high-value functionality in Phase 1 and clearly stage subsequent enhancements.",
    ans: `During a project, there were several desired features but limited time available.

Instead of promising that everything could be completed, we discussed the requirements and prioritized the most important functionality.

We communicated what could realistically be delivered within the available timeline and identified lower-priority items for a later phase.

This helped keep expectations realistic and allowed the team to focus on delivering the most valuable functionality first.

I learned that effective stakeholder management depends heavily on transparency and early communication.`
  },
  {
    id: 83,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "How do you build professional relationships?",
    title: "Building Professional Relationships",
    format: "Consistency & Mutual Value",
    tips: "Honoring commitments, respecting stakeholder time, and proactive knowledge sharing build lasting trust.",
    ans: `I build professional relationships through reliability, respect, communication, and consistency.

I try to understand other people's responsibilities and respect their time.

I communicate clearly, keep my commitments, and offer help when appropriate.

I also believe professional relationships should not be based only on personal benefit. Supporting teammates and sharing knowledge creates stronger long-term relationships.

Over time, trust develops when people know they can communicate openly and depend on you.`
  },
  {
    id: 84,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "What would you do if a client requested something unrealistic?",
    title: "Unrealistic Client Request",
    format: "Collaborative Constraint Problem-Solving",
    tips: "Never say a blunt 'No'; unpack the business goal behind the request and present feasible alternative technical pathways.",
    ans: `I would first understand the client's actual need and why they consider the request important.

Then I would assess the feasibility in terms of time, cost, resources, technical limitations, and quality.

If the exact request is unrealistic, I would not simply reject it. I would explain the constraints professionally and propose alternative solutions that could achieve the underlying objective.

If necessary, I would discuss different timelines, scope options, or priorities.

The goal would be to maintain trust while setting realistic expectations.`
  },
  {
    id: 85,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "How do you communicate bad news to stakeholders?",
    title: "Communicating Bad News",
    format: "Early Warning & Recovery Blueprint",
    tips: "Deliver bad news early and without deflection; always present the root cause, immediate impact, and a concrete recovery plan.",
    ans: `I believe bad news should be communicated early, clearly, and honestly.

I would explain what happened, the impact, and what is currently being done to address it.

I would avoid unnecessary excuses or blaming individuals.

Where possible, I would provide options, a recovery plan, and an updated timeline.

Most importantly, I would ensure that stakeholders are not surprised later because an issue was hidden or communicated too late.

Transparent communication helps maintain trust even when the situation is difficult.`
  },
  {
    id: 86,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "Describe a successful customer interaction.",
    title: "Successful Customer Interaction",
    format: "Requirements Clarification & Validation",
    tips: "Successful client interaction = deep listening → clear technical translation → reliable delivery → post-launch validation.",
    ans: `A successful customer interaction, in my view, begins with understanding the customer's actual requirement rather than immediately proposing a solution.

For example, during a project discussion, I would first clarify the expected outcome, constraints, and priorities.

Then I would explain the proposed solution in simple and understandable terms and confirm that it addresses the customer's need.

After implementation, I would also verify whether the solution actually solved the original problem.

I believe successful customer interaction is about listening, clarity, reliability, and delivering what was promised.`
  },
  {
    id: 87,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "How do you understand customer needs?",
    title: "Understanding Customer Needs",
    format: "Deep Requirement Discovery",
    tips: "Probe the business 'Why' behind feature requests; confirm assumptions before writing code to prevent costly rework.",
    ans: `I start by listening carefully and asking clarifying questions.

I try to understand not only what the customer is asking for but also why they need it.

Then I identify the expected outcome, constraints, priorities, and success criteria.

I confirm my understanding before moving forward because assumptions can lead to incorrect solutions.

Finally, I use that information to prioritize the solution around the customer's actual business need rather than simply implementing individual requests without context.`
  },
  {
    id: 88,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "How do you handle competing stakeholder interests?",
    title: "Competing Stakeholder Interests",
    format: "Objective Business Value Prioritization",
    tips: "Map stakeholder friction against overarching business metrics and risks; present trade-offs objectively to decision-makers.",
    ans: `I would first understand the objectives and concerns of each stakeholder.

Then I would identify where their interests conflict and which requirements are critical to the overall business objective.

I would use objective factors such as customer impact, business value, risk, cost, and deadlines to compare the options.

If the conflict cannot be resolved at my level, I would present the facts and alternatives to the appropriate decision-maker.

My role would be to facilitate a practical decision rather than trying to favor one stakeholder personally.`
  },
  {
    id: 89,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "What is excellent customer service?",
    title: "Excellent Customer Service",
    format: "Integrity & Value Delivery",
    tips: "Customer excellence is setting clear expectations, building reliable systems, and standing by solutions when issues emerge.",
    ans: `Excellent customer service means understanding the customer's needs, responding professionally, solving problems effectively, and maintaining trust.

It is not simply about saying yes to every request.

It also means setting realistic expectations, communicating clearly, taking ownership when something goes wrong, and following through on commitments.

A strong customer experience occurs when the customer feels that their problem is understood and that the organization is genuinely committed to providing a reliable solution.`
  },
  {
    id: 90,
    section: "I. Client & Stakeholder Management",
    category: "Client & Stakeholder",
    q: "How do you maintain long-term relationships?",
    title: "Maintaining Long-Term Relationships",
    format: "Predictable Reliability & Transparency",
    tips: "Communicate consistently during calm periods as well as crises; transparent troubleshooting compounds trust over years.",
    ans: `Long-term professional relationships are built through trust and consistency.

I would maintain them by delivering reliable work, communicating proactively, understanding changing needs, and keeping commitments.

I would also avoid communicating only when there is a problem. Regular professional communication helps maintain alignment.

When issues occur, I would focus on resolving them transparently rather than trying to hide them.

In my opinion, long-term relationships are created when people consistently experience reliability and professionalism.`
  },

  // =========================================================================
  // J. SITUATIONAL & BEHAVIORAL QUESTIONS (Q91 - Q100)
  // =========================================================================
  {
    id: 91,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "What would you do if your manager disagreed with your recommendation?",
    title: "Manager Disagrees With Recommendation",
    format: "Disagree and Commit Principle",
    tips: "Present factual pros/cons respectfully, acknowledge broader organizational context, and commit whole-heartedly to execution.",
    ans: `I would first understand why my manager disagrees with the recommendation.

If I have additional information or data that supports my approach, I would respectfully present it and explain the potential benefits and risks.

However, I would remain open to the possibility that my manager has additional business context that I may not have.

If the final decision is different from my recommendation, I would support the decision professionally and focus on executing it successfully.

I believe the objective is to make the best decision for the organization, not to prove that my recommendation was correct.`
  },
  {
    id: 92,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "How would you handle a project running behind schedule?",
    title: "Project Behind Schedule",
    format: "Critical Path Analysis & Triage",
    tips: "Diagnose specific bottlenecks; parallelize, reallocate, or defer non-essential features while guarding core QA.",
    ans: `First, I would identify the exact reason for the delay rather than simply asking the team to work faster.

I would review the remaining tasks, dependencies, resource availability, and critical milestones.

Then I would prioritize the essential deliverables and determine whether tasks can be parallelized, reassigned, simplified, or moved to a later phase.

I would communicate the situation and recovery plan to the relevant stakeholders.

If the original deadline is no longer realistic, I would communicate that early with evidence and propose alternatives.

My focus would be on recovering the project while maintaining critical quality standards.`
  },
  {
    id: 93,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "What would you do if your team missed a target?",
    title: "Team Missed a Target",
    format: "Collective Blameless Post-Mortem",
    tips: "Avoid finger pointing; analyze root causes (estimation, blockers, dependencies), execute recovery, and update workflows.",
    ans: `I would first take collective responsibility rather than immediately blaming individual team members.

I would analyze why the target was missed—whether the cause was unrealistic estimation, technical issues, insufficient resources, changing requirements, or execution problems.

Then I would identify corrective actions and assign clear ownership.

I would also communicate the situation honestly to the appropriate stakeholders and establish a realistic recovery plan.

After resolving the immediate issue, I would look for process improvements so that the same problem is less likely to happen again.`
  },
  {
    id: 94,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "How would you manage a high-pressure situation?",
    title: "High-Pressure Situation",
    format: "Focus on Controllables & Triage",
    tips: "Keep emotions checked, cut out extraneous low-value noise, focus on immediate milestones, and conduct post-crisis analysis.",
    ans: `In a high-pressure situation, my first priority is to remain calm and focus on what can actually be controlled.

I identify the most critical tasks, prioritize them, and break them into manageable actions.

I communicate important risks and blockers early rather than trying to handle everything silently.

I also avoid unnecessary work and focus on activities that directly contribute to the desired outcome.

After the immediate pressure is handled, I review what caused the situation and identify how similar problems can be prevented in the future.`
  },
  {
    id: 95,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "If given limited resources, how would you prioritize?",
    title: "Prioritizing Limited Resources",
    format: "ROI & Critical Path Allocation",
    tips: "Do not dilute limited resources evenly across everything; protect critical path components and defer non-essentials.",
    ans: `With limited resources, I would prioritize based on business impact, urgency, customer value, risk, and effort.

I would first protect critical functionality and commitments.

Then I would identify which activities provide the highest value relative to the resources required.

Lower-priority features or activities could potentially be postponed, simplified, or handled in a later phase.

I would communicate these trade-offs clearly so stakeholders understand what is being prioritized and why.

The goal would be to maximize value rather than trying to distribute limited resources equally across everything.`
  },
  {
    id: 96,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "What would you do if a colleague took credit for your work?",
    title: "Colleague Takes Credit",
    format: "Fact-Based Professional Resolution",
    tips: "Avoid emotional public outbursts. Maintain written commit/spec paper trails; hold a 1-on-1 first, then escalate factually.",
    ans: `I would first avoid reacting emotionally or confronting the colleague publicly.

I would make sure there is a clear record of my contribution through project documentation, communication, commits, or other appropriate evidence.

If necessary, I would have a private and professional conversation with the colleague and clarify the situation.

If the issue continues or materially affects my evaluation, I would discuss it with my manager using facts rather than personal accusations.

I believe protecting your contribution is important, but it should be handled professionally and without damaging the team's working relationship unnecessarily.`
  },
  {
    id: 97,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "How would you handle confidential information?",
    title: "Handling Confidential Information",
    format: "Zero-Trust & Policy Adherence",
    tips: "Strict need-to-know access control, secure device hygiene, zero unsecured channel leaks, and consulting security policies.",
    ans: `I would treat confidential information strictly according to company policies and access controls.

I would share information only with authorized people who have a legitimate need to access it.

I would avoid discussing sensitive information in public or unsecured channels and would follow the organization's security procedures for storing, transferring, and disposing of information.

If I am uncertain whether something can be shared, I would verify the policy or consult the appropriate senior rather than making an assumption.

Confidentiality is a professional responsibility, and I would take it seriously.`
  },
  {
    id: 98,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "What would you do if you noticed an ethical issue?",
    title: "Handling an Ethical Issue",
    format: "Integrity & Compliance Escalation",
    tips: "Verify facts objectively, report via established compliance channels, maintain confidentiality, and protect organizational integrity.",
    ans: `If I noticed a potential ethical issue, I would first make sure I understood the situation correctly and avoid making assumptions.

If appropriate, I would raise the concern with the relevant person or manager.

If the issue involved serious misconduct or could not be addressed through normal management channels, I would follow the organization's formal ethics, compliance, or reporting process.

I would maintain confidentiality and focus on facts rather than personal opinions.

I believe professional success should never come at the cost of integrity or ethical standards.`
  },
  {
    id: 99,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "Describe a situation where you influenced others without authority.",
    title: "Influencing Without Authority",
    format: "Influence Through Competence & Clarity",
    tips: "True leadership precedes formal titles: articulate clear logic, demonstrate positive results, and lead by example.",
    ans: `During a team project, I noticed that the team was spending too much time discussing tasks without a clear execution plan.

Although I was not formally the team leader, I suggested breaking the work into smaller tasks and assigning clear ownership.

I explained how this could reduce confusion and help us track progress.

The team agreed to try the approach, and coordination improved.

This experience taught me that influence does not always require formal authority. Clear communication, useful ideas, and leading by example can also influence a team.`
  },
  {
    id: 100,
    section: "J. Situational & Behavioral Questions",
    category: "Situational & Behavioral",
    q: "What is the most important lesson you have learned from your experiences?",
    title: "Most Important Lesson",
    format: "Continuous Improvement & Holistic Competence",
    tips: "Continuous improvement beats false perfection; technical skills + communication, teamwork, and accountability = lifelong success.",
    ans: `The most important lesson I have learned is that continuous improvement is more important than trying to appear perfect.

I have learned that mistakes, difficult projects, feedback, and unfamiliar situations can all become opportunities to improve if I take responsibility and learn from them.

I have also learned that technical skills alone are not enough. Communication, teamwork, adaptability, time management, and ownership are equally important for long-term professional success.

Going forward, I want to maintain a learning mindset, take responsibility for my work, and continuously improve both my technical and professional abilities.`
  }
];
