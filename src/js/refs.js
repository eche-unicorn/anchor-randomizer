export default {
  accessInput: document.getElementById('keyword'),
  accessUl: document.querySelector('.newAnchors'),
  accessSelectedWebsite: document.getElementById('website').value,
  accessScrollUp: document.querySelector('.scrollup'),
  accessGenerateButton: document.querySelector('.button__generate'),
  keywords: [
    'write my research papers',
    'pay someone to write my research paper',
    'research paper writing help',
    'write my research paper for me',
    'do my research paper',
    'order research paper',
    'write a research paper for me',
    'pay for research paper',
    'research paper writing service',
    'research paper writer',
    'research paper writers',
    'online research paper writer',
    'do my research paper for me',
  ],
  brandName: [
    'EssayPro',
    'at EssayPro',
    'from EssayPro',
    'by EssayPro',
    'to EssayPro',
    'with EssayPro',
  ],
  lsiWords: [
    'academic',
    'assignment',
    'business',
    'case',
    'customer',
    'deadline',
    'editing-service',
    'essay',
    'excellent',
    'free',
    'good',
    'great',
    'job',
    'need',
    'needed',
    'order',
    'paper',
    'proofreading-service',
    'read',
    'report',
    'research',
    'review',
    'sample',
    'service',
    'stars',
    'study',
    'support',
    'time',
    'type',
    'work',
    'write',
    'writer',
    'writers',
    'writing',
    'writing-service',
  ],
  // lsiWords: [
  //   '100 success',
  //   '2020 writer',
  //   'a bad',
  //   'a job',
  //   'a lot',
  //   'a master’s',
  //   'a paper',
  //   'a professional',
  //   'a specific',
  //   'a writer',
  //   'ability',
  //   'ability to',
  //   'academic',
  //   'academic paper',
  //   'academic performance',
  //   'account',
  //   'active',
  //   'active promo',
  //   'affordable',
  //   'an essay',
  //   'an exam',
  //   'an order',
  //   'assignment',
  //   'assignments',
  //   'bad',
  //   'based',
  //   'based on',
  //   'best paper',
  //   'budget',
  //   'can write',
  //   'care',
  //   'care to',
  //   'catalog',
  //   'caught',
  //   'caught using',
  //   'chat',
  //   'chat and',
  //   'cheap',
  //   'check',
  //   'choice',
  //   'choose',
  //   'choose a',
  //   'client',
  //   'clients',
  //   'codes',
  //   'college',
  //   'company',
  //   'completed',
  //   'completed 100',
  //   'completing',
  //   'complexity',
  //   'customer',
  //   'customer and',
  //   'customer support',
  //   'day',
  //   'deadline',
  //   'deadline for',
  //   'deadline is',
  //   'deadlines',
  //   'degree',
  //   'degree or',
  //   'degrees',
  //   'deposit',
  //   'details',
  //   'discount',
  //   'double-deadline',
  //   'draft',
  //   'eager',
  //   'easily',
  //   'easy',
  //   'easy-to-use',
  //   'edit',
  //   'edit the',
  //   'editing',
  //   'edits',
  //   'email',
  //   'enjoy',
  //   'ensure',
  //   'ensure that',
  //   'essay',
  //   'essay and',
  //   'essays',
  //   'essays can',
  //   'every paper',
  //   'every student',
  //   'exam',
  //   'experience',
  //   'experience in',
  //   'experience was',
  //   'expertise',
  //   'extra',
  //   'fast',
  //   'features',
  //   'field',
  //   'fields',
  //   'fields of',
  //   'final',
  //   'find',
  //   'find a',
  //   'find someone',
  //   'finding',
  //   'finding a',
  //   'flawless',
  //   'follow',
  //   'for free',
  //   'for important',
  //   'for students',
  //   'form',
  //   'formatting',
  //   'free',
  //   'full',
  //   'fully',
  //   'funds',
  //   'get caught',
  //   'give',
  //   'give us',
  //   'give you',
  //   'grade',
  //   'great',
  //   'great care',
  //   'guarantee',
  //   'guide',
  //   'guide you',
  //   'hannah',
  //   'hannah taylor',
  //   'happy',
  //   'happy to',
  //   'hear',
  //   'hear from',
  //   'help write',
  //   'helpful',
  //   'helping',
  //   'high',
  //   'high-quality',
  //   'higher',
  //   'hire',
  //   'hire a',
  //   'homework',
  //   'hours',
  //   'i pay',
  //   'impact',
  //   'important',
  //   'in order',
  //   'included',
  //   'included in',
  //   'information',
  //   'interface',
  //   'is completed',
  //   'job',
  //   'keyword',
  //   'kind',
  //   'kind of',
  //   'learn',
  //   'level',
  //   'library',
  //   'life',
  //   'list',
  //   'list of',
  //   'long',
  //   'lot',
  //   'lots',
  //   'lots of',
  //   'making',
  //   'master’s',
  //   'me request',
  //   'me write',
  //   'mitchell',
  //   'money',
  //   'my experience',
  //   'my paper',
  //   'my papers',
  //   'need',
  //   'of experience',
  //   'of expertise',
  //   'of paper',
  //   'of students',
  //   'of time',
  //   'of writers',
  //   'offer',
  //   'on time',
  //   'online',
  //   'online who',
  //   'open',
  //   'option',
  //   'order',
  //   'order is',
  //   'orders',
  //   'orders completed',
  //   'our clients',
  //   'our paper',
  //   'our team',
  //   'our website',
  //   'our writers',
  //   'page',
  //   'page free',
  //   'paper before',
  //   'paper fast',
  //   'paper for',
  //   'paper help',
  //   'paper is',
  //   'paper on',
  //   'paper pay',
  //   'paper request',
  //   'paper writer',
  //   'paper writers',
  //   'paper writing',
  //   'paper you',
  //   'papers',
  //   'papers and',
  //   'papers for',
  //   'pay',
  //   'pay someone',
  //   'payments',
  //   'pen',
  //   'people',
  //   'people who',
  //   'per page',
  //   'performance',
  //   'person',
  //   'personal',
  //   'ph.d',
  //   'philip',
  //   'philip a',
  //   'picking',
  //   'picking a',
  //   'place',
  //   'plagiarism',
  //   'policy',
  //   'pretty',
  //   'price',
  //   'priority',
  //   'privacy and',
  //   'process',
  //   'prof',
  //   'prof philip',
  //   'professional',
  //   'professional paper',
  //   'professionals',
  //   'professor',
  //   'profiles',
  //   'promo',
  //   'promo codes',
  //   'proof',
  //   'proof of',
  //   'provide',
  //   'provide you',
  //   'quality',
  //   'question',
  //   'questions',
  //   'rate',
  //   'rate hire',
  //   'rating',
  //   'read',
  //   'ready',
  //   'ready to',
  //   'real',
  //   'receive',
  //   'received',
  //   'recommend',
  //   'reliable',
  //   'report',
  //   'request',
  //   'request and',
  //   'requirements',
  //   'research',
  //   'reviews',
  //   'revise',
  //   'ryan',
  //   'ryan mitchell',
  //   'save',
  //   'search',
  //   'secured',
  //   'select',
  //   'send',
  //   'send us',
  //   'send you',
  //   'service customer',
  //   'service in',
  //   'service is',
  //   'services',
  //   'set',
  //   'simple',
  //   'simple and',
  //   'sitting',
  //   'social',
  //   'solve',
  //   'someone write',
  //   'sources',
  //   'specific',
  //   'start',
  //   'start working',
  //   'student',
  //   'students',
  //   'students and',
  //   'students who',
  //   'study',
  //   'style',
  //   'subject',
  //   'success',
  //   'success rate',
  //   'super',
  //   'support',
  //   'support team',
  //   'system',
  //   'tackle',
  //   'take great',
  //   'taylor',
  //   'team',
  //   'team will',
  //   'term',
  //   'terms',
  //   'tests',
  //   'the ability',
  //   'the chat',
  //   'the deadline',
  //   'the final',
  //   'the library',
  //   'the order',
  //   'the paper',
  //   'the search',
  //   'the writer',
  //   'their gpa',
  //   'their work',
  //   'this service',
  //   'time',
  //   'time in',
  //   'time to',
  //   'to ensure',
  //   'to find',
  //   'to guide',
  //   'to learn',
  //   'to provide',
  //   'to write',
  //   'turn',
  //   'turn to',
  //   'tutor',
  //   'tutor ryan',
  //   'type',
  //   'types',
  //   'types of',
  //   'up time',
  //   'waiting',
  //   'waiting to',
  //   'was pretty',
  //   'website',
  //   'work',
  //   'work and',
  //   'work in',
  //   'work on',
  //   'work with',
  //   'working',
  //   'working on',
  //   'working with',
  //   'worry',
  //   'worry about',
  //   'write a',
  //   'write my',
  //   'WritePaper',
  //   'WritePaper is',
  //   'writer can',
  //   'writer hannah',
  //   'writer is',
  //   'writer prof',
  //   'writer to',
  //   'writer tutor',
  //   'writers',
  //   'writers are',
  //   'writing a',
  //   'writing help',
  //   'writing service',
  //   'written',
  //   'written by',
  //   'written papers',
  //   'you need',
  //   'your academic',
  //   'your account',
  //   'your assignment',
  //   'your essay',
  //   'your order',
  //   'your paper',
  //   'your professor',
  //   'your work',
  //   'your write',
  // ],
};
