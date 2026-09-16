/**
 * Verbal Ability & English Preparation Data
 * Source: KN Academy - ALL MNC Verbal Ability & English Collection
 */
const VERBAL_DATA = {
  title: 'Verbal Ability & English Preparation',
  subtitle: 'Master Error Correction, Para Jumbles, Sentence Completion, and Vocabulary for MNC Placement Drives.',
  syllabus: {
    totalQuestions: 25,
    expectedTime: '20 Mins',
    topics: [
      'Word Completion',
      'Sentence Completion',
      'Error Identification',
      'Arrangement (Para Jumbles)',
      'Meanings (Vocabulary)',
      'Fill in the Blanks',
      'Reading Comprehension'
    ]
  },

  errorCorrectionRules: [
    {
      id: 1,
      rule: 'Subject-Verb Agreement',
      description: 'A singular subject takes a singular verb, and a plural subject takes a plural verb.',
      correct: 'She plays the piano.',
      incorrect: 'She play the piano.',
      tip: 'Ignore words between the subject and verb (e.g., "The bouquet of flowers is beautiful", not "are").'
    },
    {
      id: 2,
      rule: 'Incorrect Use of Tenses',
      description: 'The verb tense must match the time of action indicated by signal words.',
      correct: 'I saw him yesterday.',
      incorrect: 'I see him yesterday.',
      tip: 'Watch for signal words like yesterday, tomorrow, since, already.'
    },
    {
      id: 3,
      rule: 'Wrong Use of Articles (a, an, the)',
      description: 'Use "a" before consonant sounds, "an" before vowel sounds, and "the" for specific or unique entities.',
      correct: 'She is a doctor. / He is an honest man. / The sun rises in the east.',
      incorrect: 'She is an doctor. / He is a honest man.',
      tip: 'Sound matters, not the letter! (e.g. "a university" has a "yoo" consonant sound).'
    },
    {
      id: 4,
      rule: 'Pronoun-Antecedent Agreement',
      description: 'A pronoun must agree with its antecedent in number and gender.',
      correct: 'Every student must bring his or her ID card.',
      incorrect: 'Every student must bring their ID card (in traditional formal tests).',
      tip: 'Words like everyone, each, nobody, someone are singular.'
    },
    {
      id: 5,
      rule: 'Misplaced & Dangling Modifiers',
      description: 'Modifiers should be placed as close as possible next to the word they describe.',
      correct: 'The man driving the car was wearing a red cap. / While driving to work, I saw a dog.',
      incorrect: 'The man was wearing a red cap driving the car. / Driving to work, a dog ran across.',
      tip: 'Ensure the subject performing the action is clearly stated.'
    },
    {
      id: 6,
      rule: 'Parallelism in Sentence Structure',
      description: 'Items in a list or series must maintain identical grammatical form.',
      correct: 'He likes swimming, running, and cycling.',
      incorrect: 'He likes swimming, running, and to cycle.',
      tip: 'Keep all verbs as gerunds (-ing) or all infinitives (to + verb).'
    },
    {
      id: 7,
      rule: 'Double Negatives',
      description: 'Avoid using two negative words in a single clause.',
      correct: 'She has nothing to say. / I don\'t need any help.',
      incorrect: 'She doesn\'t have nothing to say. / I don\'t need no help.',
      tip: 'Hardly, barely, and scarcely are already negative words.'
    },
    {
      id: 8,
      rule: 'Incorrect Prepositions',
      description: 'Use fixed and appropriate prepositions as required by context.',
      correct: 'I am interested in music. / She is good at mathematics.',
      incorrect: 'I am interested on music. / She is good in mathematics.',
      tip: 'Prepositions like "interested in", "abide by", "consist of" are fixed idioms.'
    },
    {
      id: 9,
      rule: 'Redundant Words & Repetition',
      description: 'Avoid combining words that duplicate the same meaning.',
      correct: 'He returned home. / The reason he left was that he was sick.',
      incorrect: 'He returned back home. / The reason why he left was because he was sick.',
      tip: 'Never say "return back", "revert back", or "shouted loudly".'
    },
    {
      id: 10,
      rule: 'Confusing "Who" vs. "Whom"',
      description: '"Who" functions as a subject (substitute "he/she"). "Whom" functions as an object (substitute "him/her").',
      correct: 'Who is calling me? / To whom did you give the book?',
      incorrect: 'Whom is calling me? / To who did you give the book?',
      tip: 'If you can answer with "him", use "whom". If with "he", use "who".'
    },
    {
      id: 11,
      rule: '"Much" vs. "Many"',
      description: 'Use "much" with uncountable nouns and "many" with countable plural nouns.',
      correct: 'There aren\'t many books in the library. / She doesn\'t have much patience.',
      incorrect: 'There aren\'t much books in the library. / She doesn\'t have many patience.',
      tip: 'Books, cars = countable (many). Water, patience, money = uncountable (much).'
    },
    {
      id: 12,
      rule: '"Less" vs. "Fewer"',
      description: 'Use "fewer" for countable items and "less" for uncountable quantities.',
      correct: 'There are fewer students in the classroom today. / I drank less water today.',
      incorrect: 'There are less students in the classroom today. / I drank fewer water today.',
      tip: 'If you can count them one by one, use "fewer".'
    },
    {
      id: 13,
      rule: 'Comparative vs. Superlative Forms',
      description: 'Use comparative (-er/more) when comparing two entities. Use superlative (-est/most) for three or more.',
      correct: 'This road is wider than that one. / This is the most beautiful dress in the store.',
      incorrect: 'This road is widest than that one. / This is the more beautiful dress in the store.',
      tip: 'Avoid double comparisons like "more better" or "most fastest".'
    },
    {
      id: 14,
      rule: '"Between" vs. "Among"',
      description: 'Use "between" when referring to two people/items; use "among" for more than two.',
      correct: 'The money was divided between John and Mary. / The prize was shared among five winners.',
      incorrect: 'The money was divided among John and Mary. / The prize was shared between five winners.',
      tip: 'Between 2; Among 3+.'
    },
    {
      id: 15,
      rule: '"Since" vs. "For"',
      description: 'Use "since" with a specific starting point in time; use "for" with a duration or period of time.',
      correct: 'I have lived here since 2010. / I have lived here for 10 years.',
      incorrect: 'I have lived here for 2010. / I have lived here since 10 years.',
      tip: 'Since + Monday/2015/morning. For + 3 hours/5 days/6 years.'
    },
    {
      id: 16,
      rule: '"Farther" vs. "Further"',
      description: '"Farther" refers to measurable physical distance. "Further" indicates figurative distance, depth, or progress.',
      correct: 'The school is farther than the library. / We need to discuss this topic further.',
      incorrect: 'The school is further than the library. / We need to discuss this topic farther.',
      tip: 'Farther = Physical distance. Further = More/additional.'
    },
    {
      id: 17,
      rule: '"Each Other" vs. "One Another"',
      description: 'Use "each other" for two parties; use "one another" for more than two parties.',
      correct: 'John and Mary love each other. / The team members supported one another.',
      incorrect: 'John and Mary love one another. / The team members supported each other.',
      tip: 'Two = each other; 3 or more = one another.'
    },
    {
      id: 18,
      rule: '"Who" vs. "That"',
      description: 'Use "who" when referring to people; use "that" or "which" for objects, concepts, and animals.',
      correct: 'The girl who won the race is my sister. / The book that I borrowed is interesting.',
      incorrect: 'The girl that won the race is my sister. / The book who I borrowed is interesting.',
      tip: 'Never use "who" for inanimate objects.'
    },
    {
      id: 19,
      rule: '"Lay" vs. "Lie"',
      description: '"Lay" requires a direct object (to place something). "Lie" does not take an object (to recline or rest).',
      correct: 'I lay the book on the table. / I need to lie down for a while.',
      incorrect: 'I lie the book on the table. / I need to lay down for a while.',
      tip: 'Lay needs an object (Lay what? The book). Lie is self-resting.'
    },
    {
      id: 20,
      rule: '"Affect" vs. "Effect"',
      description: '"Affect" is almost always a verb (to influence). "Effect" is almost always a noun (the result/impact).',
      correct: 'The new law will affect many people. / The new law had a positive effect on society.',
      incorrect: 'The new law will effect many people. / The new law had a positive affect on society.',
      tip: 'A = Action (Affect is verb). E = End result (Effect is noun).'
    },
    {
      id: 21,
      rule: '"Advice" vs. "Advise"',
      description: '"Advice" (with c) is a noun (recommendation). "Advise" (with s) is a verb (to give advice).',
      correct: 'My father gave me good advice. / He advised me to study harder.',
      incorrect: 'My father gave me good advise. / He advice me to study harder.',
      tip: 'Device/Devise follows the same pattern: Advice = Noun, Advise = Verb.'
    },
    {
      id: 22,
      rule: '"Borrow" vs. "Lend"',
      description: '"Borrow" means to take temporarily. "Lend" means to give temporarily.',
      correct: 'Can I borrow your pen? / I will lend you my book.',
      incorrect: 'Can I lend your pen? / I will borrow you my book.',
      tip: 'Borrow = take in. Lend = send out.'
    },
    {
      id: 23,
      rule: '"Raise" vs. "Rise"',
      description: '"Raise" requires a direct object (someone lifts something). "Rise" does not take an object (moves upward on its own).',
      correct: 'She raised her hand. / The sun rises in the east.',
      incorrect: 'She rose her hand. / The sun raises in the east.',
      tip: 'Raise something up. Rise goes up by itself.'
    },
    {
      id: 24,
      rule: '"Due To" vs. "Because Of"',
      description: '"Due to" modifies nouns (follows verb "to be"). "Because of" modifies verbs (explains why an action occurred).',
      correct: 'The cancellation was due to bad weather. / The match was postponed because of the rain.',
      incorrect: 'The match was postponed due to the rain.',
      tip: 'If you can replace it with "caused by", use "due to". Otherwise, use "because of".'
    },
    {
      id: 25,
      rule: 'Placement of "Only"',
      description: 'Place the word "only" immediately before the word or clause it modifies to prevent ambiguity.',
      correct: 'She eats only vegetables. (She eats nothing else) / I have only one brother.',
      incorrect: 'She only eats vegetables. (Ambiguous: Does she only eat and never sleep?)',
      tip: 'Place "only" right next to the exact target item.'
    },
    {
      id: 26,
      rule: '"So" vs. "Very"',
      description: '"Very" emphasizes an adjective. "So" introduces a consequence or result clause ("so...that").',
      correct: 'She is very tired. / She is so tired that she fell asleep immediately.',
      incorrect: 'She is so tired. (Lacks consequence clause) / She is very tired that she fell asleep.',
      tip: 'Use "so [adjective] that [consequence]".'
    },
    {
      id: 27,
      rule: '"Hard" vs. "Hardly"',
      description: '"Hard" means with great effort or diligence. "Hardly" means barely or almost not at all.',
      correct: 'He works hard every day. / I could hardly hear her voice.',
      incorrect: 'He works hardly every day. / I could hard hear her voice.',
      tip: 'Hardly is a negative adverb.'
    },
    {
      id: 28,
      rule: '"Beside" vs. "Besides"',
      description: '"Beside" means next to or by the side of. "Besides" means in addition to or furthermore.',
      correct: 'She sat beside me on the bench. / Besides English, he speaks fluent Spanish.',
      incorrect: 'She sat besides me on the bench. / Beside English, he speaks fluent Spanish.',
      tip: 'Beside = Side. Besides = + (addition).'
    },
    {
      id: 29,
      rule: '"Like" vs. "As"',
      description: '"Like" compares nouns or pronouns. "As" is followed by a clause containing a subject and verb.',
      correct: 'He runs like a cheetah. / Do it as I told you.',
      incorrect: 'He runs as a cheetah. / Do it like I told you.',
      tip: 'Like + Noun. As + Subject + Verb.'
    },
    {
      id: 30,
      rule: '"Say", "Tell", and "Speak"',
      description: '"Say" doesn\'t take a personal object. "Tell" requires a direct personal object. "Speak" is used for languages or formal speeches.',
      correct: 'He said that he was happy. / He told me the truth. / He speaks French fluently.',
      incorrect: 'He told that he was happy. / He said me the truth.',
      tip: 'Tell + Person (tell me, tell him). Say + That.'
    },
    {
      id: 31,
      rule: '"No Sooner... Than" vs. "Hardly... When"',
      description: '"No sooner" must always pair with "than". "Hardly" or "Scarcely" must always pair with "when".',
      correct: 'No sooner had he left than it started raining. / Hardly had I reached home when it started raining.',
      incorrect: 'No sooner had he left when it started raining. / Hardly had I reached home than it started raining.',
      tip: 'No sooner -> THAN. Hardly / Scarcely -> WHEN.'
    },
    {
      id: 32,
      rule: '"All Right" vs. "Alright"',
      description: '"All right" (two words) is the only accepted formal standard in professional business English.',
      correct: 'The answer is all right.',
      incorrect: 'The answer is alright.',
      tip: '"Alright" is considered non-standard in test evaluations.'
    },
    {
      id: 33,
      rule: 'Conditional Sentences (1st, 2nd, 3rd)',
      description: 'Maintain strict modal and tense pairing across conditionals.',
      correct: 'Zero: If you heat ice, it melts. / 1st: If you study, you will pass. / 2nd: If I were rich, I would travel. / 3rd: If he had studied, he would have passed.',
      incorrect: 'If I was you, I would apologize. (Use "were" in hypothetical 2nd conditional).',
      tip: 'In 2nd conditional unreal situations, always use "were" for all subjects.'
    },
    {
      id: 34,
      rule: 'Correlative Conjunctions',
      description: 'Conjunction pairs must join parallel structures: "both...and", "either...or", "neither...nor", "not only...but also".',
      correct: 'He is both intelligent and hardworking. / Neither the teacher nor the students were present.',
      incorrect: 'He is both intelligent as well as hardworking.',
      tip: 'Never pair "both" with "as well as".'
    },
    {
      id: 35,
      rule: 'Illogical Comparisons with "Any Other"',
      description: 'When comparing an item within the same group, exclude it using "any other".',
      correct: 'This house is bigger than any other house in the neighborhood. / She is smarter than any other student in her class.',
      incorrect: 'This house is bigger than any house in the neighborhood. (It cannot be bigger than itself!)',
      tip: 'Always include "other" when comparing within the same class.'
    }
  ],

  paraJumblesRules: [
    {
      rule: '1. Identify the Opening Sentence (General Statement)',
      explanation: 'The opening sentence introduces the main subject or theme independently. It never starts with a pronoun (he, she, it, they) or demonstratives (this, that, these, those).'
    },
    {
      rule: '2. Identify the Closing Sentence (Conclusion or Summary)',
      explanation: 'The last sentence summarizes the paragraph or states the consequence/impact. It often begins with words like "Therefore", "Thus", "Hence", "As a result", or "Finally".'
    },
    {
      rule: '3. Look for Connecting Transition Words',
      explanation: 'Words like "however", "moreover", "besides", "although" show contrast or addition. Demonstrative pronouns ("this practice", "these methods") must immediately follow the noun they reference.'
    },
    {
      rule: '4. Chronological & Time-Based Order',
      explanation: 'Events unfolding over time should be arranged sequentially from past to present (e.g. In 1903 -> Over the decades -> Today).'
    },
    {
      rule: '5. Cause and Effect Relationships',
      explanation: 'The cause must always precede the effect. Sentences with "because", "as a result", "consequently" must follow the action that triggered them.'
    },
    {
      rule: '6. Article Progression ("A / An" to "The")',
      explanation: 'An entity is introduced first with an indefinite article ("A scientist discovered a plant"), and subsequent references use the definite article ("The scientist studied its behavior").'
    }
  ],

  paraJumblesQuestions: [
    {
      id: 1,
      title: 'AI in Weather Forecasting',
      sentences: [
        { label: 'A', text: 'This has led to better accuracy in predictions.' },
        { label: 'B', text: 'The use of Artificial Intelligence (AI) in weather forecasting is increasing.' },
        { label: 'C', text: 'AI models analyze large amounts of data in real time.' },
        { label: 'D', text: 'As a result, people get more reliable weather updates.' }
      ],
      correctOrder: 'B - C - A - D',
      explanation: 'Sentence B introduces the general subject (AI in weather forecasting). C explains how the models work. A states the immediate outcome (accuracy). D concludes with the final public benefit.'
    },
    {
      id: 2,
      title: 'Deforestation & Biodiversity Loss',
      sentences: [
        { label: 'A', text: 'Many species lost their natural habitat.' },
        { label: 'B', text: 'The forest was cleared for farming and urban development.' },
        { label: 'C', text: 'This led to a decline in biodiversity.' },
        { label: 'D', text: 'Deforestation is a major environmental concern.' }
      ],
      correctOrder: 'D - B - A - C',
      explanation: 'Sentence D introduces the broad environmental problem. B details the specific cause (land clearance). A illustrates the direct impact (habitat loss). C concludes with the overarching consequence (decline in biodiversity).'
    },
    {
      id: 3,
      title: 'Aviation History & Flight',
      sentences: [
        { label: 'A', text: 'In 1903, the Wright brothers successfully flew the first airplane.' },
        { label: 'B', text: 'Today, air travel is an essential mode of transportation.' },
        { label: 'C', text: 'Over the decades, aviation technology improved.' },
        { label: 'D', text: 'Initially, people doubted the possibility of flying.' }
      ],
      correctOrder: 'D - A - C - B',
      explanation: 'Chronological progression: D sets historical skepticism. A marks the breakthrough in 1903. C describes gradual evolution over decades. B brings the narrative to the present day.'
    },
    {
      id: 4,
      title: 'Mobile Communication Impact',
      sentences: [
        { label: 'A', text: 'People now use this technology in their daily lives.' },
        { label: 'B', text: 'Mobile phones have changed the way we communicate.' },
        { label: 'C', text: 'They allow instant messaging and video calls.' },
        { label: 'D', text: 'As a result, communication has become easier and faster.' }
      ],
      correctOrder: 'B - C - A - D',
      explanation: 'Sentence B introduces mobile communication. C lists concrete capabilities. A explains widespread adoption. D concludes with the outcome (faster communication).'
    },
    {
      id: 5,
      title: 'Scientific Discovery of Plants',
      sentences: [
        { label: 'A', text: 'Later, the scientist shared his findings with the world.' },
        { label: 'B', text: 'A scientist discovered a new species of plant.' },
        { label: 'C', text: 'He studied its growth and behavior.' },
        { label: 'D', text: 'His research helped in understanding plant evolution.' }
      ],
      correctOrder: 'B - C - D - A',
      explanation: 'Article Rule: Sentence B introduces "A scientist" for the first time. C and D explain his research process. A refers back to him as "The scientist" publishing final results.'
    },
    {
      id: 6,
      title: 'Technology & Social Isolation',
      sentences: [
        { label: 'A', text: 'However, excessive use of technology can lead to social isolation.' },
        { label: 'B', text: 'Technology has improved human communication.' },
        { label: 'C', text: 'Many people now prefer online interactions over face-to-face conversations.' },
        { label: 'D', text: 'It allows instant global connectivity.' }
      ],
      correctOrder: 'B - D - A - C',
      explanation: 'B opens with positive communication benefit. D elaborates connectivity. A introduces the contrasting limitation ("However"). C gives concrete evidence of isolation.'
    },
    {
      id: 7,
      title: 'Clean Drinking Water',
      sentences: [
        { label: 'A', text: 'It also prevents many waterborne diseases.' },
        { label: 'B', text: 'Clean drinking water is essential for health.' },
        { label: 'C', text: 'Many organizations work to provide safe water to communities.' },
        { label: 'D', text: 'This helps in reducing infections and improving hygiene.' }
      ],
      correctOrder: 'B - C - D - A',
      explanation: 'B introduces the theme of clean water. C describes organizational initiatives. D explains the immediate health benefit ("This"). A provides an additional health outcome ("also prevents").'
    },
    {
      id: 8,
      title: 'The Missed Train',
      sentences: [
        { label: 'A', text: 'Hardly had he reached the station.' },
        { label: 'B', text: 'He missed the train.' },
        { label: 'C', text: 'When the train departed.' },
        { label: 'D', text: 'He was disappointed.' }
      ],
      correctOrder: 'A - C - B - D',
      explanation: 'Grammar link: "Hardly had..." (A) pairs with "...when the train departed" (C). B presents the immediate event (missed the train). D provides the psychological reaction (disappointment).'
    },
    {
      id: 9,
      title: 'Importance of Human Language',
      sentences: [
        { label: 'A', text: 'It allows us to express thoughts and ideas.' },
        { label: 'B', text: 'Language is an important tool for communication.' },
        { label: 'C', text: 'Without it, human interaction would be difficult.' },
        { label: 'D', text: 'Every culture has its unique language and dialect.' }
      ],
      correctOrder: 'B - D - A - C',
      explanation: 'B defines language. D elaborates cultural diversity in language. A explains the personal expression function. C concludes with the negative consequence of its absence.'
    },
    {
      id: 10,
      title: 'Cybersecurity Response',
      sentences: [
        { label: 'A', text: 'As a result, companies are focusing more on cybersecurity.' },
        { label: 'B', text: 'Cybercrime has increased in recent years.' },
        { label: 'C', text: 'Several data breaches have been reported globally.' },
        { label: 'D', text: 'This has raised concerns about data security.' }
      ],
      correctOrder: 'B - C - D - A',
      explanation: 'B states the emerging menace. C cites tangible incidents (breaches). D reflects rising anxiety ("This has raised..."). A shows corporate countermeasures ("As a result...").'
    }
  ],

  fillInTheBlanksQuestions: [
    {
      id: 1,
      category: 'Prepositions',
      question: 'She is very fond ___ classical music.',
      options: ['on', 'in', 'of', 'for'],
      answer: 'of',
      explanation: '"Fond of" is a fixed prepositional expression meaning to have an affection or liking for.'
    },
    {
      id: 2,
      category: 'Prepositions',
      question: 'The teacher insisted ___ complete silence in the classroom.',
      options: ['on', 'in', 'at', 'for'],
      answer: 'on',
      explanation: '"Insist" is followed by the preposition "on" or "upon".'
    },
    {
      id: 3,
      category: 'Prepositions',
      question: 'He is capable ___ solving complex problems.',
      options: ['in', 'of', 'at', 'with'],
      answer: 'of',
      explanation: 'The adjective "capable" pairs with "of" (capable of doing something).'
    },
    {
      id: 4,
      category: 'Prepositions',
      question: 'The book was written ___ a famous author.',
      options: ['with', 'by', 'for', 'to'],
      answer: 'by',
      explanation: 'In passive voice constructions, the agent performing the action is introduced by "by".'
    },
    {
      id: 5,
      category: 'Prepositions',
      question: 'The students are working hard ___ their project.',
      options: ['in', 'on', 'for', 'at'],
      answer: 'on',
      explanation: 'To work "on" a task or project indicates focused activity toward its completion.'
    },
    {
      id: 6,
      category: 'Collocations',
      question: 'She gave me some really ___ advice before my exam.',
      options: ['big', 'large', 'valuable', 'heavy'],
      answer: 'valuable',
      explanation: 'Advice collocates with qualitative adjectives like "valuable", "sound", or "good", not physical size terms.'
    },
    {
      id: 7,
      category: 'Collocations',
      question: 'The company is looking to ___ a decision soon about the merger.',
      options: ['make', 'take', 'get', 'put'],
      answer: 'make',
      explanation: 'In standard English, the natural collocation is "to make a decision" (not "do a decision").'
    },
    {
      id: 8,
      category: 'Collocations',
      question: 'I need to ___ an appointment with the doctor.',
      options: ['do', 'have', 'make', 'give'],
      answer: 'make',
      explanation: 'The standard collocation is to "make an appointment".'
    },
    {
      id: 9,
      category: 'Collocations',
      question: 'He always ___ excuses for being late.',
      options: ['does', 'makes', 'takes', 'puts'],
      answer: 'makes',
      explanation: 'The idiomatically correct word pairing is to "make excuses".'
    },
    {
      id: 10,
      category: 'Collocations',
      question: 'We must ___ a deadline for the project submission.',
      options: ['set', 'take', 'get', 'have'],
      answer: 'set',
      explanation: 'Deadlines are established or assigned using the verb "to set a deadline".'
    },
    {
      id: 11,
      category: 'Tenses',
      question: 'By the time we arrived, the show ___ started.',
      options: ['has', 'had', 'was', 'will have'],
      answer: 'had',
      explanation: 'Past perfect ("had started") represents an action completed before another past event ("we arrived").'
    },
    {
      id: 12,
      category: 'Tenses',
      question: 'She ___ in this company for five years.',
      options: ['works', 'is working', 'has been working', 'worked'],
      answer: 'has been working',
      explanation: 'Present perfect continuous expresses an action that began in the past and is still ongoing ("for five years").'
    },
    {
      id: 13,
      category: 'Tenses',
      question: 'When I was a child, I ___ go to bed early.',
      options: ['use to', 'used to', 'was used to', 'would used to'],
      answer: 'used to',
      explanation: '"Used to" indicates a past habit or routine that is no longer continued.'
    },
    {
      id: 14,
      category: 'Tenses',
      question: 'While I ___ TV, my phone rang.',
      options: ['watched', 'am watching', 'was watching', 'watch'],
      answer: 'was watching',
      explanation: 'Past continuous ("was watching") indicates an ongoing background action interrupted by a past simple event ("rang").'
    },
    {
      id: 15,
      category: 'Tenses',
      question: 'By next year, he ___ completed his degree.',
      options: ['will', 'will have', 'has', 'had'],
      answer: 'will have',
      explanation: 'Future perfect ("will have completed") designates an action that will be finished before a future point ("By next year").'
    },
    {
      id: 16,
      category: 'Idioms',
      question: 'He was caught ___ while trying to steal the documents.',
      options: ['red-handed', 'blue-handed', 'white-handed', 'dark-handed'],
      answer: 'red-handed',
      explanation: '"Caught red-handed" is an established idiom meaning discovered while committing a crime.'
    },
    {
      id: 17,
      category: 'Idioms',
      question: 'She was feeling under the ___, so she took the day off.',
      options: ['water', 'sun', 'clouds', 'weather'],
      answer: 'weather',
      explanation: '"Under the weather" is a popular idiom meaning slightly unwell or indisposed.'
    },
    {
      id: 18,
      category: 'Idioms',
      question: 'The new policy is still up in the ___.',
      options: ['air', 'clouds', 'sky', 'wind'],
      answer: 'air',
      explanation: '"Up in the air" signifies an undecided, uncertain, or unresolved situation.'
    },
    {
      id: 19,
      category: 'Conjunctions',
      question: 'We will cross that bridge ___ we come to it.',
      options: ['before', 'after', 'when', 'if'],
      answer: 'when',
      explanation: 'The full proverb is "We will cross that bridge when we come to it", referring to dealing with a dilemma only if it arises.'
    },
    {
      id: 20,
      category: 'Phrasal Verbs',
      question: 'I couldn’t make ___ what he was saying due to the noise.',
      options: ['away', 'out', 'in', 'off'],
      answer: 'out',
      explanation: '"Make out" means to hear, discern, or comprehend difficult speech.'
    }
  ],

  sentenceCompletionQuestions: [
    {
      id: 1,
      prompt: 'Even though she was late, she _______.',
      options: ['apologized sincerely', "ignored everyone's reaction", 'arrived early', 'stayed at home'],
      answer: 'apologized sincerely',
      explanation: '"Even though" marks contrast; an accountable apology directly contrasts with the mistake of being late.'
    },
    {
      id: 2,
      prompt: 'I was so thirsty that I _______.',
      options: ['ate a full meal', 'drank two glasses of water', 'took a nap', 'skipped dinner'],
      answer: 'drank two glasses of water',
      explanation: 'Extreme thirst logically prompts drinking water.'
    },
    {
      id: 3,
      prompt: 'Since it was raining heavily, _______.',
      options: ['we carried an umbrella', 'we went for a picnic', 'we played outside', 'we took sunblock'],
      answer: 'we carried an umbrella',
      explanation: '"Since" indicates causation; heavy rain rationally warrants carrying an umbrella.'
    },
    {
      id: 4,
      prompt: 'The project deadline was strict, so the team _______.',
      options: ['worked overtime', 'took a break', 'ignored the deadline', 'postponed the project'],
      answer: 'worked overtime',
      explanation: 'A rigorous deadline naturally requires extra hours and overtime work.'
    },
    {
      id: 5,
      prompt: 'The teacher scolded him because he _______.',
      options: ['completed his homework', 'misbehaved in class', 'helped a friend', 'answered all questions correctly'],
      answer: 'misbehaved in class',
      explanation: 'Reprimanding ("scolded") is a negative reaction directly caused by misbehavior.'
    },
    {
      id: 6,
      prompt: 'Although he was very tired, _______.',
      options: ['he went to sleep early', 'he continued working late into the night', 'he took a day off', 'he rested for hours'],
      answer: 'he continued working late into the night',
      explanation: '"Although" signals an unexpected contrast opposite to resting.'
    },
    {
      id: 7,
      prompt: 'Neither of the boys _______ present in the class.',
      options: ['were', 'was', 'are', 'have been'],
      answer: 'was',
      explanation: '"Neither" as a distributive pronoun is grammatically singular and takes the singular verb "was".'
    },
    {
      id: 8,
      prompt: 'She enjoys _______ and _______.',
      options: ['reading books, cooking meals', 'read books, cooking meals', 'reading books, cook meals', 'read books, cook meals'],
      answer: 'reading books, cooking meals',
      explanation: 'Parallel structure requires both verbs linked by "and" to adopt parallel gerund (-ing) forms.'
    },
    {
      id: 9,
      prompt: 'Being an introvert, he _______.',
      options: ['enjoys public speaking', 'prefers solitude', 'loves being in large crowds', 'is always surrounded by people'],
      answer: 'prefers solitude',
      explanation: 'An introvert is fundamentally characterized by a preference for solitary environments.'
    },
    {
      id: 10,
      prompt: 'The meeting was scheduled at 10 AM, but it _______.',
      options: ['started late', 'ended early', 'was canceled', 'both A and C'],
      answer: 'both A and C',
      explanation: '"But" implies an interruption to the normal plan; either starting late or being canceled fits.'
    }
  ],

  vocabulary: [
    {
      category: 'Common Synonyms & Antonyms',
      icon: 'ri-chat-check-line',
      words: [
        { word: 'Happy', synonym: 'Joyful, Cheerful', antonym: 'Sad, Miserable' },
        { word: 'Fast', synonym: 'Quick, Speedy', antonym: 'Slow, Sluggish' },
        { word: 'Big', synonym: 'Large, Huge', antonym: 'Small, Tiny' },
        { word: 'Strong', synonym: 'Powerful, Sturdy', antonym: 'Weak, Feeble' },
        { word: 'Rich', synonym: 'Wealthy, Affluent', antonym: 'Poor, Destitute' },
        { word: 'Cold', synonym: 'Chilly, Freezing', antonym: 'Hot, Warm' },
        { word: 'Easy', synonym: 'Simple, Effortless', antonym: 'Difficult, Hard' },
        { word: 'Old', synonym: 'Aged, Ancient', antonym: 'Young, New' },
        { word: 'Bright', synonym: 'Shiny, Radiant', antonym: 'Dull, Dim' },
        { word: 'Hard', synonym: 'Tough, Rigid', antonym: 'Soft, Gentle' }
      ]
    },
    {
      category: 'Advanced Synonyms & Antonyms',
      icon: 'ri-sparkling-line',
      words: [
        { word: 'Brave', synonym: 'Courageous, Fearless', antonym: 'Cowardly, Timid' },
        { word: 'Smart', synonym: 'Intelligent, Clever', antonym: 'Dumb, Stupid' },
        { word: 'Fake', synonym: 'Artificial, Imitation', antonym: 'Real, Genuine' },
        { word: 'Shy', synonym: 'Timid, Introverted', antonym: 'Outgoing, Bold' },
        { word: 'Thin', synonym: 'Slim, Lean', antonym: 'Fat, Obese' },
        { word: 'Modern', synonym: 'Contemporary, New', antonym: 'Ancient, Outdated' },
        { word: 'Lazy', synonym: 'Idle, Inactive', antonym: 'Hardworking, Diligent' },
        { word: 'Deep', synonym: 'Profound, Intense', antonym: 'Shallow, Superficial' },
        { word: 'Polite', synonym: 'Courteous, Respectful', antonym: 'Rude, Impolite' },
        { word: 'Heavy', synonym: 'Weighty, Massive', antonym: 'Light, Feathery' }
      ]
    },
    {
      category: 'Action-Related Words',
      icon: 'ri-run-line',
      words: [
        { word: 'Buy', synonym: 'Purchase, Acquire', antonym: 'Sell, Trade' },
        { word: 'Give', synonym: 'Donate, Offer', antonym: 'Take, Receive' },
        { word: 'Start', synonym: 'Begin, Commence', antonym: 'Stop, Halt' },
        { word: 'Love', synonym: 'Adore, Care for', antonym: 'Hate, Despise' },
        { word: 'Build', synonym: 'Construct, Create', antonym: 'Destroy, Demolish' },
        { word: 'Win', synonym: 'Succeed, Triumph', antonym: 'Lose, Fail' },
        { word: 'Open', synonym: 'Uncover, Unlock', antonym: 'Close, Shut' },
        { word: 'Push', synonym: 'Press, Shove', antonym: 'Pull, Drag' },
        { word: 'Laugh', synonym: 'Giggle, Chuckle', antonym: 'Cry, Weep' },
        { word: 'Rise', synonym: 'Ascend, Climb', antonym: 'Fall, Descend' }
      ]
    },
    {
      category: 'Descriptive Attributes',
      icon: 'ri-palette-line',
      words: [
        { word: 'Beautiful', synonym: 'Pretty, Attractive', antonym: 'Ugly, Unattractive' },
        { word: 'Quiet', synonym: 'Silent, Peaceful', antonym: 'Noisy, Loud' },
        { word: 'Tired', synonym: 'Exhausted, Weary', antonym: 'Energetic, Lively' },
        { word: 'Famous', synonym: 'Well-known, Renowned', antonym: 'Unknown, Obscure' },
        { word: 'Expensive', synonym: 'Costly, Pricey', antonym: 'Cheap, Inexpensive' },
        { word: 'Lucky', synonym: 'Fortunate, Blessed', antonym: 'Unlucky, Unfortunate' },
        { word: 'Clean', synonym: 'Neat, Spotless', antonym: 'Dirty, Messy' },
        { word: 'Neat', synonym: 'Tidy, Orderly', antonym: 'Messy, Disorganized' },
        { word: 'Bitter', synonym: 'Sour, Acrid', antonym: 'Sweet, Pleasant' },
        { word: 'Honest', synonym: 'Truthful, Sincere', antonym: 'Dishonest, Liar' }
      ]
    },
    {
      category: 'Emotion-Related Vocabulary',
      icon: 'ri-heart-pulse-line',
      words: [
        { word: 'Angry', synonym: 'Furious, Enraged', antonym: 'Calm, Peaceful' },
        { word: 'Fear', synonym: 'Terror, Dread', antonym: 'Courage, Confidence' },
        { word: 'Sad', synonym: 'Unhappy, Miserable', antonym: 'Joyful, Cheerful' },
        { word: 'Proud', synonym: 'Confident, Self-respecting', antonym: 'Ashamed, Humble' },
        { word: 'Lonely', synonym: 'Isolated, Solitary', antonym: 'Social, Friendly' },
        { word: 'Greedy', synonym: 'Selfish, Covetous', antonym: 'Generous, Charitable' },
        { word: 'Bold', synonym: 'Daring, Fearless', antonym: 'Shy, Timid' },
        { word: 'Patient', synonym: 'Tolerant, Understanding', antonym: 'Impatient, Irritable' },
        { word: 'Kind', synonym: 'Generous, Compassionate', antonym: 'Cruel, Mean' },
        { word: 'Stubborn', synonym: 'Headstrong, Obstinate', antonym: 'Flexible, Adaptable' }
      ]
    },
    {
      category: 'Abstract Concepts',
      icon: 'ri-lightbulb-flash-line',
      words: [
        { word: 'Truth', synonym: 'Reality, Fact', antonym: 'Lie, Fiction' },
        { word: 'Freedom', synonym: 'Liberty, Independence', antonym: 'Captivity, Slavery' },
        { word: 'Success', synonym: 'Achievement, Victory', antonym: 'Failure, Defeat' },
        { word: 'War', synonym: 'Conflict, Battle', antonym: 'Peace, Harmony' },
        { word: 'Love', synonym: 'Affection, Care', antonym: 'Hate, Loathe' },
        { word: 'Wisdom', synonym: 'Knowledge, Insight', antonym: 'Ignorance, Foolishness' },
        { word: 'Justice', synonym: 'Fairness, Equity', antonym: 'Injustice, Bias' },
        { word: 'Strength', synonym: 'Power, Might', antonym: 'Weakness, Fragility' },
        { word: 'Future', synonym: 'Tomorrow, Destiny', antonym: 'Past, History' },
        { word: 'Light', synonym: 'Brightness, Radiance', antonym: 'Darkness, Gloom' }
      ]
    }
  ]
};
