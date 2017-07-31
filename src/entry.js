import sample from 'lodash/sample'
import './style.css';

interactiveManager.init().innerHTML = `<h1 class="idea"></h1><div><button class="refreshButton">brainstorm another</button></div>`;


const intensifiers = [
  'literally',
  'Let\'s be honest'
];

const courses = [
'Accounting',
'American Studies',
'Anthropology',
'Art',
'Art History',
'Biology',
'Business Studies',
'Chemistry',
'Computer Science',
'Criminology',
'Drama',
'Economics',
'English',
'English Literature',
'Film Studies',
'Finance',
'French',
'Geography',
'German',
'History',
'Journalism',
'Law',
'Marketing',
'Maths',
'Media',
'Music',
'Nursing',
'Philosophy',
'Physics',
'Politics',
'Psychology',
'Religious Studies',
'Sociology',
'Spanish',
];

const targetsPeople = [
  'Donald Trump',
  'Theresa May',
  'David Cameron',
  'Corbyn',
  'Putin',
  'SU President',
  'freshers',
  'third years',
  'post-grads',
  'The Queen',
  'The Vice-Chancellor',
  'Boris Johnson',
  'Kim Kardashian'
];

const targetsOrgs = [
  'the Student\'s Union',
  'the Coop',
  'the university'
];

const targets = [
  ...targetsPeople,
  ...targetsOrgs,
  ...courses.map(c => `${c} students`),
  ...courses.map(c => `${c} lectures`)
];

const place = [...targetsPeople.map(p => `${p} rally`), ...targetsOrgs];

const topics = [
  'types of bread',
  'the numbers up to ten',
  'UKIP',
  'Facebook memes',
  '"U" rated films',
  'Question Time',
  'brexit',
  'what happened to YikYak',
  'feminism',
  'The Great British Bake Off',
'Harry Potter plot holes',
'the nutritional content of cereal',
'the difference between butter and margarine',
'yeast',
'tax avoidance',
'the Take That discography',
'this years top 10 fancy dress costumes',
'the role of memes in modern politics',
'the business hierarchy of Mr Kipling',
'glove puppets of celebrities',
'how far The Proclaimers were actually willing to travel',
'the potential nutritional value of Creme Eggs',
'seahorse mating calls',
'the effectivness of Daz',
'Maroon 5 lyrics',
'the popularity of DisneyLand',
'what happened to Woolworths',
'Jedward’s political potential',
'our editors dreams',
'the most expensive lingerie',
'the cost of toilet paper',
'time travel paradoxes',
'lactose intolerant infants',
'animal mating calls',
'these pizza toppings',
'origami insects',
'curtain designs',
'these unique salads',
'the first 10,000 digits of Pi',
'page 3 of The Sun',
'the country’s most popular nude beach',
'Chucklevision catchphrases',
'80’s game shows',
'Nicolas Cage movies ',
'these questionable professions',
'these 90’s hits',
'the least popular Disney films',
'own brand ready meals',
'this years festival line ups',
'these hilarious tweets',
'political correctness',
'the hardest Where’s Wally? book on sale',
'Shrek the Musical',
'the pros and cons of Virtual Reality',
'the revival of Pokemon Go',
'the first female Doctor Who',
'these Gordon Ramsay recipes',
'student loans',
'deadline season',
'the buildings at our university',
'advertising slogans',
  'civil rights',
  'the LGBTQ community',
  'Oasis',
  'clowns',
  'the prices at B&Q',
  'hand tools',
  'Apple',
  'the stock market',
  'the evolution of Mario Kart',
  'marshmellows',
  'bargain hunt',
  'the declining bee population',
  'the Toy Story trilogy',
  'cyber secuirty',
  'election fraud',
  'Bee movie',
  'train delays',
  'public transport',
  'marmite',
  'flat earth theory'

];

const interactiveKicker = [
  'Poll',
  'Quiz',
  'Guess',
  '#interactive',
  'vote',
];

const quizStarters = [
  'Is this a photo of',
  'How well do you know',
];

const bands = [
  'Radiohead',
  'Coldplay',
  'Alt-J',
  'Pink Floyd',
  'Twenty One Pilots',
  'Lady GaGa',
  'U2',
  'Katy Perry',
  'Drake',
  'Kanye',
  'Taylor Swift',
];


const nouns = [
  'sci-fi films',
  'summer snacks',
  'TV shows of the past decade',
  'illegal drugs',
  'legal highs',
  'Inbetweeners episodes',
  'items on the KFC menu',
  'payday loan companies',
  'cheeses',
  'sex positions',
  'X-Factor contestants',
  'sitcoms',
  'UK leaders',
  'kitchen gadgets',
  'Harry Potter films',
  'horror films',
  'rom-coms',
  'sex toys',
  'condiments',
  'Disney classics',
  'beers',
  'drinking games',
  'degrees',
  'flavoured lubes',
  'Snpachat filters',
  'retro chocolate bars',
  'Nicolas Cage quotes',
  'political campagins',
  'biscuits',
  'pasta dishes',
  'smoothies',
  'Doctor Who episodes',
  'accents',
  'hats',
  'footballers',
  'cocktails',
  'freshers pranks',
  'supermarkets',
  'salads',
  'lethal diseases',
  'TV show characters',
  'Game of Thrones characters',
  'toasties',
  'club nights',
  'vice chancellors',
  'post-grad jobs',
  'umbrella stands',
  'summer songs',
  'Take That songs',
  'Nickelback songs',
  'vines',
  'affordable wines',
  'Presidents',
  'Taylor Swift songs',
  'Beatles hits',
  'Christmas gifts',
  'fictional characters',
  'one pot meals',
  'shower gels',
  'rail companies',
  'porn narratives',
  'video games of 2017',
  'yogurts',
  'conspiracy theories',
  'local bars',
  'local clubs',
  'dance moves'
];

const postrank = [
  'so you don\'t have to',
  'of all time',
  '',
];

const bestworst = [
  'best',
  'worst',
];


const positiveOpinion = [
  'amazing',
  'wonderful',
  'life-affirming',
  'lit',
  '#amazeballs'
];

const person = [
  'guy',
  'girl',
];

const meetings = [
  'date at University',
  'see in the club',
  'sleep with in first year',
  'see in the club',
  'see in your lectures',
  'live with in second year',
  'drink with at uni',
  'meet at house parties',
  'meet on your course',
  'meet at University',
  'spot in lectures',
  'spot in seminars',
  'live with in halls',
  'argue with at University'
];

const numbers = [
  '5',
  '6',
  '7',
  '8',
  '9',

];

const unicities = [
'Aberdeen',
'Aberystwyth',
'Aston',
'Bath',
'Birmingham',
'Bristol',
'Cambridge',
'Cardiff',
'Chester',
'Dundee',
'Durham',
'Edinburgh',
'Exeter',
'Falmouth University',
'Glasgow',
'Hull',
'Kent',
'King\'s College London',
'Lancaster',
'Leeds',
'Leicester',
'Lincoln',
'Liverpool',
'LSE',
'Liverpool John Moores',
'Loughborough',
'Manchester',
'Newcastle',
'Northumbria',
'Nottingham',
'Nottingham Trent',
'Oxford',
'Oxford Brookes',
'Plymouth',
'Portsmouth',
'Queen Mary',
'Queen\'s University Belfast',
'Reading',
'Royal Holloway',
'Sheffield',
'Southampton',
'St Andrews',
'St George\'s',
'Strathclyde',
'Stirling',
'Sussex',
'UCLan',
'UEA',
'University College London',
'UWE',
'Warwick',
'York',
];

const UniOp = [
  'students take the most drugs',
  'students have the best music taste',
  'is the worst University in the country',
  'is the best University in the world',
  'students make the best memes',
  'has the most attractive students',
  'has the worst looking students',
  'students have the worst taste in music',
  'is an awful University',
  'is an incredible University',
  'students cook the best food',
  'students drink the most',
  'students are in the most debt',
  'students smoke the most weed',
  'students make the worst memes',
  'students have the most sex',
  'students have the least sex',
  'students fail their degrees the most'
];

const newsPerson = [
  'student',
  'lecturer',
  'Vice Chancellor',
  'graduate student',
];

const newsStory = [
  'spends £10,000 on betting every week',
  'eats carrots for every meal',
  'claims they are a fish',
  'breaks world record for longest yawn',
  'sneezes every hour on the hour due to rare disorder',
  'says Snapchat is to blame for a rise in student numbers',
  'claims the lack of library space is a myth',
  'cannot spell',
  '"addicted" to scented candles',
  'is alergic to water',
  'finds painting in their house worth 3 million',
  'is the long lost child of Britney Spears',
  'claims they have proof for lizard people conspiracy theory',
  'has never eaten a suasage roll',
  'is found selling MDMA out the back of a van',
  'is discovered to be the inventor of memes',
  'got so drunk they flew to Las Vegas',
  'got so drunk they adopted a lion',
  'seen stripping in local club',
  'caught having sex in the library',
  'watches so much trash TV they dont sleep',
  'can\'t stop cleaning toilets',
  'invents new diet',
  'locked in club toilet for 30+ hours',
  'arrested for stealing hunreds of chocolate bars from local shop',
  'met Kanye in KFC',
  'can\'t stop eating Nando\'s',
  'revealed as previous page 3 model',
  'spoke with JK Rowling every night for a week by mistake',
  'appears on "My Strange Addiction"',
  'praised for stealing Tampons from local shop',
  'injured in accident with wood-chipper',
  'found in the early hours of the morning, covered in yogurt',
  'earns enough to buy a modest house every 6 weeks',
  'appears in new advert for toilet roll',
  'forms popular one-man band',
  'says they enjoy exam season more than Christmas',
  'cannot tell the time',
  'says they have been abducted twice in 5 weeks',
  'receives backlash after claiming charity shops are a scam',
  'on a meat only diet',
  'has "never eaten a sandwich"',
  'has banned baked beans from their home',
  'to venture into space "within the decade"',
  'refuses to appear on campus unless wearing a Noel Edmunds mask',
  'revealed to be in £120,000+ of debt',
  'to appear on this years edition of The Apprentice',
  'claims to have invented time travel',
  'wins lottery jackpot',
  'thrown out of Aldi for licking fruit',
  'mentions possibility of an on-campus casino',
  'cleans 7 hours a day',
  'drops £4,000+ worth of precious stones down a campus toilet',
  'to open a sex museum in the area',
  'eats litter',
  'visits every local pub in 2 days',
  'has been on over 600 tinder dates',
  'starts their 9th degree',
  'arrested for trying to leak exam answers online',
  'becomes 2017 drag queen of the year',
  'says student rent is "far too cheap" across most of the UK',
  'caught selling drugs around campus',
  'auitioned for Bond role "several times"',
  'eats nothing but lemon cheesecake',
  'meets with Piers Morgan on campus, reason currently unknown',
  'appears on Come Dine With Me',
  'in process of developing a cure for the common cold',
  'leaves University to work for Alan Sugar - Exclusive interview',
  'has all their furniture stolen over night',
  'caught vandalising the Vice Chancellor\'s office'

];

const UniStinger = [
  'IT\'S OFFICIAL:',
  'Exclusive:',
  'You heard it here first:',
  'Believe it or not:'
];


const negativeOpinion = [
  'awful',
  'harrowing',
  'like the worst',
  'shocking',
  'really weird',
  'strange',
];

const iWe = [
  'I',
  'We'
];


const opinion = [...positiveOpinion, ...negativeOpinion];

function select(arr) {
  return sample(arr);
}

const syntax = [
  () => `${select(interactiveKicker).toUpperCase()}: ${select(quizStarters)} ${select(targets)}?`,
  () => `${select(interactiveKicker).toUpperCase()}: Can you spot difference between ${select(targets)} and ${select(targets)}?`,
  () => `${select(iWe)} went to a ${select(place)} and it was ${select(opinion)}`,
  () => `QUIZ: Are these quotes from ${select(targets)} or are they ${select(bands)} lyrics?`,
  () => `We asked ${select(targets)} what they thought of ${select(targets)}`,
  () => `We ranked the ${select(bestworst)} ${select(nouns)} ${select(postrank)}` ,
  () => `${select(UniStinger)} ${select(unicities)} ${select(UniOp)}`,
  () => `Every ${select(person)} you'll ${select(meetings)}`,
  () => `Why ${select(targets)} are better than ${select(targets)}`,
  () => `We got ${select(targetsPeople)} to discuss ${select(nouns)}`,
  () => `We got ${select(courses)} students to discuss ${select(topics)}`,
  () => `${select(unicities)} ${select(newsPerson)} ${select(newsStory)}`,
  () => `We got ${select(targetsPeople)} to discuss ${select(topics)}`,
  () => `What ${select(['university', 'course'])} ${select(['does the most drugs' , 'has the most sex', 'drinks the most', 'goes out the most', 'has the most single students', 'has the most fuckbois'])}?`,
  () => {
    const x = select(['ketamine', 'MDMA', 'cocaine', 'acid']);
    return `We went to ${select(place)} and took ${x}`;
  },
];


const idea = document.querySelector('.idea');

idea.innerHTML = select(syntax)();

document.querySelector('.refreshButton').addEventListener('click', () => {
  idea.innerHTML = select(syntax)();
});

