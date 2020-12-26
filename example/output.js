// from: await gtrans("run", { to: "id" }).then((res) => res.data);
// one words is so long because it's include definitions, translations, synonyms, etc.
const oneWordOutput = {
  translated: 'Lari',
  sourceText: 'run',
  from: 'English',
  to: 'Indonesian',
  isCorrected: false,
  pronunciation: 'rən',
  translations: {
    verb: [
      {
        word: 'menjalankan',
        translations: [
          'run',
          'perform',
          'execute',
          'start',
          'carry out',
          'operate'
        ],
        frequency: 'common'
      },
      {
        word: 'berjalan',
        translations: ['walk', 'run', 'go', 'work', 'proceed', 'function'],
        frequency: 'common'
      },
      {
        word: 'berlari',
        translations: ['run', 'rush', 'dash', 'scurry', 'take away'],
        frequency: 'uncommon'
      },
      {
        word: 'melarikan',
        translations: ['run', 'abduct', 'hijack', 'ravish', 'cause to go'],
        frequency: 'uncommon'
      },
      {
        word: 'memimpin',
        translations: ['lead', 'head', 'preside', 'guide', 'conduct', 'run'],
        frequency: 'rare'
      },
      {
        word: 'mengatur',
        translations: ['set', 'arrange', 'organize', 'manage', 'regulate', 'run'],
        frequency: 'rare'
      },
      {
        word: 'menembus',
        translations: [
          'penetrate',
          'pierce',
          'cut through',
          'permeate',
          'go through',
          'run'
        ],
        frequency: 'rare'
      },
      {
        word: 'memuat',
        translations: ['load', 'contain', 'accommodate', 'carry', 'hold', 'run'],
        frequency: 'rare'
      },
      {
        word: 'membujur',
        translations: [
          'stretch out',
          'run',
          'sweep',
          'lie alongside',
          'sweep away'
        ],
        frequency: 'rare'
      },
      {
        word: 'memperlarikan',
        translations: ['cover', 'run', 'gun away', 'travel', 'drive'],
        frequency: 'rare'
      },
      {
        word: 'memuatkan',
        translations: ['load', 'lade', 'freight', 'publish', 'run'],
        frequency: 'rare'
      },
      {
        word: 'menjadi calon',
        translations: ['run', 'stand'],
        frequency: 'rare'
      },
      {
        word: 'mengajukan',
        translations: ['file', 'submit', 'propose', 'lodge', 'put forward', 'run'],
        frequency: 'rare'
      },
      {
        word: 'mengantarkan',
        translations: ['deliver', 'usher', 'accompany', 'escort', 'squire', 'run'],
        frequency: 'rare'
      },
      {
        word: 'menusuk',
        translations: ['stab', 'puncture', 'pierce', 'prick', 'poke', 'run'],
        frequency: 'rare'
      }
    ],
    noun: [
      {
        word: 'lari',
        translations: ['run', 'lari', 'skip'],
        frequency: 'common'
      },
      {
        word: 'kandang',
        translations: ['cage', 'pen', 'shed', 'stall', 'stalls', 'run'],
        frequency: 'rare'
      },
      {
        word: 'perjalanan',
        translations: ['travel', 'trip', 'journey', 'traveling', 'course', 'run'],
        frequency: 'rare'
      },
      {
        word: 'tempat bergerak',
        translations: ['run'],
        frequency: 'rare'
      },
      {
        word: 'kawanan',
        translations: ['herd', 'flock', 'swarm', 'shoal', 'gaggle', 'run'],
        frequency: 'rare'
      },
      {
        word: 'giliran bermain',
        translations: ['run'],
        frequency: 'rare'
      },
      {
        word: 'oplah',
        translations: ['circulation', 'run', 'total printing'],
        frequency: 'rare'
      },
      {
        word: 'jumlah penerbitan',
        translations: ['run'],
        frequency: 'rare'
      }
    ]
  },
  synonyms: {
    verb: [
      [
        'tear',
        'pelt',
        'scoot',
        'hotfoot it',
        'belt',
        'zip',
        'whip',
        'go like a bat out of hell',
        'step on it',
        'get a move on',
        'get cracking',
        'put on some speed',
        "stir one's stumps",
        'hop it',
        'bomb',
        'leg it',
        'boogie',
        'hightail it',
        'barrel',
        'get the lead out',
        'cut along'
      ],
      [
        'sprint', 'race',
        'dart', 'rush',
        'dash', 'hasten',
        'hurry', 'scurry',
        'scuttle', 'scamper',
        'hare', 'bolt',
        'bound', 'fly',
        'gallop', 'career',
        'charge', 'pound',
        'shoot', 'hurtle',
        'speed', 'streak',
        'whiz', 'zoom',
        'sweep', 'go like lightning',
        'go hell for leather', 'go like the wind',
        'flash', 'double',
        'jog', 'lope',
        'trot', 'jogtrot',
        'dogtrot'
      ],
      ['post', 'hie'],
      ['fly'],
      [
        'flee',
        'run away',
        'run off',
        'make a run for it',
        'run for it',
        'take flight',
        'make off',
        'take off',
        "take to one's heels",
        'make a break for it',
        'bolt',
        'beat a (hasty) retreat',
        'make a quick exit',
        "make one's getaway",
        'escape',
        'head for the hills',
        'do a disappearing act'
      ],
      [
        'beat it',
        'clear off',
        'clear out',
        'vamoose',
        'skedaddle',
        'split',
        'cut and run',
        'show a clean pair of heels',
        'turn tail',
        'scram',
        'do a runner',
        'scarper',
        'do a bunk',
        'leg it',
        'light out',
        'bug out',
        'cut out',
        'peel out',
        'take a powder',
        'skiddoo',
        'go through',
        'shoot through'
      ],
      ['compete', 'take part', 'participate', 'enter', 'be in'],
      ['go', 'pass', 'move', 'travel', 'roll', 'coast'],
      ['cast', 'pass', 'skim', 'flick', 'slide'],
      ['sloosh'],
      [
        'flow', 'pour', 'stream',
        'gush', 'flood', 'glide',
        'cascade', 'spurt', 'jet',
        'issue', 'roll', 'course',
        'slide', 'spill', 'trickle',
        'seep', 'drip', 'dribble',
        'leak'
      ],
      ['stream', 'drip', 'exude/secrete/ooze liquid'],
      ['extend', 'stretch', 'reach', 'range', 'continue', 'go'],
      ['travel', 'ply', 'shuttle', 'go', 'make a regular journey'],
      [
        'drive',
        'give someone a lift',
        'take',
        'bring',
        'ferry',
        'chauffeur',
        'transport',
        'convey'
      ],
      [
        'be in charge of', 'manage',
        'administer', 'direct',
        'control', 'be in control of',
        'be the boss of', 'boss',
        'head', 'lead',
        'govern', 'supervise',
        'superintend', 'oversee',
        'look after', 'organize',
        'coordinate', 'regulate',
        'operate', 'conduct',
        'carry on', 'own',
        'preside over', 'officiate at'
      ],
      ['carry out', 'do', 'perform', 'fulfill', 'execute'],
      ['maintain', 'keep', 'own', 'possess', 'have', 'drive'],
      [
        'operate',
        'function',
        'work',
        'go',
        'be in operation',
        'tick over',
        'idle',
        'perform',
        'behave'
      ],
      [
        'be valid',
        'last',
        'be in effect',
        'operate',
        'be in operation',
        'be operative',
        'be current',
        'continue',
        'be effective',
        'have force',
        'have effect'
      ],
      [
        'be staged',
        'be presented',
        'be performed',
        'be on',
        'be put on',
        'be produced',
        'be mounted',
        'be screened',
        'last'
      ],
      [
        'stand for',
        'stand for election as',
        'stand as a candidate for',
        'be a contender for',
        'put oneself forward for',
        'put oneself up for'
      ],
      [
        'publish', 'print',
        'feature', 'carry',
        'put out', 'release',
        'issue'
      ],
      ['smuggle', 'traffic in', 'deal in']
    ],
    noun: [
      [
        'sprint', 'race',
        'dash', 'gallop',
        'rush', 'spurt',
        'jog', 'trot'
      ],
      [
        'route', 'way',
        'course', 'journey',
        'circuit', 'round',
        'beat'
      ],
      ['spin', 'joyride', 'tootle', 'hurl'],
      [
        'drive',
        'ride',
        'turn',
        'trip',
        'excursion',
        'outing',
        'jaunt',
        'short journey',
        'airing'
      ],
      [
        'period', 'spell',
        'stretch', 'spate',
        'bout', 'patch',
        'interval', 'time',
        'series', 'succession',
        'sequence', 'string',
        'chain', 'streak'
      ],
      ['demand for', 'rush for', 'sudden request for', 'clamor for'],
      [
        'type', 'kind',
        'sort', 'variety',
        'class', 'category',
        'order'
      ],
      ['slope', 'piste', 'track', 'bump run', 'trail'],
      ['enclosure', 'pen', 'coop', 'compound'],
      [
        'unrestricted/free use of',
        'unrestricted access to',
        'a free hand in',
        'a free rein in'
      ],
      [
        'diarrhea',
        'loose motions',
        'looseness of the bowels',
        'the skitters',
        'the trots',
        'Spanish tummy',
        'Delhi belly',
        "Montezuma's revenge",
        'Aztec revenge',
        'Aztec two-step',
        'the squits',
        'gippy tummy',
        'holiday tummy',
        'turista',
        'dysentery',
        'lientery'
      ],
      ['the flux', 'lax']
    ]
  },
  definitions: {
    verb: [
      {
        definition: 'move at a speed faster than a walk, never having both or all the feet on the ground at the same time.',
        example: 'the dog ran across the road',
        synonyms: [
          'tear',
          'pelt',
          'scoot',
          'hotfoot it',
          'belt',
          'zip',
          'whip',
          'go like a bat out of hell',
          'step on it',
          'get a move on',
          'get cracking',
          'put on some speed',
          "stir one's stumps",
          'hop it',
          'bomb',
          'leg it',
          'boogie',
          'hightail it',
          'barrel',
          'get the lead out',
          'cut along',
          'sprint',
          'race',
          'dart',
          'rush',
          'dash',
          'hasten',
          'hurry',
          'scurry',
          'scuttle',
          'scamper',
          'hare',
          'bolt',
          'bound',
          'fly',
          'gallop',
          'career',
          'charge',
          'pound',
          'shoot',
          'hurtle',
          'speed',
          'streak',
          'whiz',
          'zoom',
          'sweep',
          'go like lightning',
          'go hell for leather',
          'go like the wind',
          'flash',
          'double',
          'jog',
          'lope',
          'trot',
          'jogtrot',
          'dogtrot',
          'post',
          'hie',
          'fly',
          'flee',
          'run away',
          'run off',
          'make a run for it',
          'run for it',
          'take flight',
          'make off',
          'take off',
          "take to one's heels",
          'make a break for it',
          'bolt',
          'beat a (hasty) retreat',
          'make a quick exit',
          "make one's getaway",
          'escape',
          'head for the hills',
          'do a disappearing act',
          'beat it',
          'clear off',
          'clear out',
          'vamoose',
          'skedaddle',
          'split',
          'cut and run',
          'show a clean pair of heels',
          'turn tail',
          'scram',
          'do a runner',
          'scarper',
          'do a bunk',
          'leg it',
          'light out',
          'bug out',
          'cut out',
          'peel out',
          'take a powder',
          'skiddoo',
          'go through',
          'shoot through'
        ]
      },
      {
        definition: 'pass or cause to pass quickly or smoothly in a particular direction.',
        example: 'the rumor ran through the pack of photographers',
        synonyms: [
          'go', 'pass',
          'move', 'travel',
          'roll', 'coast',
          'cast', 'pass',
          'skim', 'flick',
          'slide'
        ]
      },
      {
        definition: '(with reference to a liquid) flow or cause to flow.',
        example: 'a small river runs into the sea at one side of the castle',
        synonyms: [
          'sloosh', 'flow', 'pour',
          'stream', 'gush', 'flood',
          'glide', 'cascade', 'spurt',
          'jet', 'issue', 'roll',
          'course', 'slide', 'spill',
          'trickle', 'seep', 'drip',
          'dribble', 'leak'
        ]
      },
      {
        definition: 'extend or cause to extend in a particular direction.',
        example: 'cobbled streets run down to a tiny harbor',
        synonyms: ['extend', 'stretch', 'reach', 'range', 'continue', 'go']
      },
      {
        definition: '(of a bus, train, ferry, or other form of transportation) make a regular journey on a particular route.',
        example: 'buses run into town every half hour',
        synonyms: ['travel', 'ply', 'shuttle', 'go', 'make a regular journey']
      },
      {
        definition: 'be in charge of; manage.',
        example: 'Andrea runs her own catering business',
        synonyms: [
          'be in charge of', 'manage',
          'administer', 'direct',
          'control', 'be in control of',
          'be the boss of', 'boss',
          'head', 'lead',
          'govern', 'supervise',
          'superintend', 'oversee',
          'look after', 'organize',
          'coordinate', 'regulate',
          'operate', 'conduct',
          'carry on', 'own',
          'preside over', 'officiate at'
        ]
      },
      {
        definition: 'be in or cause to be in operation; function or cause to function.',
        example: 'the car runs on unleaded fuel',
        synonyms: [
          'operate',
          'function',
          'work',
          'go',
          'be in operation',
          'tick over',
          'idle',
          'perform',
          'behave'
        ]
      },
      {
        definition: 'continue or be valid or operative for a particular period of time.',
        example: 'the course ran for two days',
        synonyms: [
          'be valid',
          'last',
          'be in effect',
          'operate',
          'be in operation',
          'be operative',
          'be current',
          'continue',
          'be effective',
          'have force',
          'have effect'
        ]
      },
      {
        definition: 'be a candidate in a political election.',
        example: 'he announced that he intended to run for President',
        synonyms: [
          'stand for',
          'stand for election as',
          'stand as a candidate for',
          'be a contender for',
          'put oneself forward for',
          'put oneself up for'
        ]
      },
      {
        definition: 'publish or be published in a newspaper or magazine.',
        example: 'the tabloids ran the story',
        synonyms: [
          'publish', 'print',
          'feature', 'carry',
          'put out', 'release',
          'issue'
        ]
      },
      {
        definition: 'bring (goods) into a country illegally and secretly; smuggle.',
        example: 'they run drugs for the cocaine cartels',
        synonyms: ['smuggle', 'traffic in', 'deal in']
      }
    ],
    noun: [
      {
        definition: 'an act or spell of running.',
        example: 'I usually go for a run in the morning',
        synonyms: [
          'sprint', 'race',
          'dash', 'gallop',
          'rush', 'spurt',
          'jog', 'trot'
        ]
      },
      {
        definition: 'a journey accomplished or route taken by a vehicle, aircraft, or boat, especially on a regular basis.',
        example: 'the New York-Washington run',
        synonyms: [
          'route', 'way',
          'course', 'journey',
          'circuit', 'round',
          'beat'
        ]
      },
      {
        definition: 'an opportunity or attempt to achieve something.',
        example: 'their absence means the Russians will have a clear run at the title',
        synonyms: []
      },
      {
        definition: 'a continuous spell of a particular situation or condition.',
        example: "he's had a run of bad luck",
        synonyms: [
          'period', 'spell',
          'stretch', 'spate',
          'bout', 'patch',
          'interval', 'time',
          'series', 'succession',
          'sequence', 'string',
          'chain', 'streak'
        ]
      },
      {
        definition: 'a widespread and sudden or continuous demand for (a particular currency or commodity).',
        example: "there's been a big run on nostalgia toys this year",
        synonyms: []
      },
      {
        definition: 'the average or usual type of person or thing.',
        example: 'she stood out from the general run of varsity cheerleaders',
        synonyms: [
          'type', 'kind',
          'sort', 'variety',
          'class', 'category',
          'order'
        ]
      },
      {
        definition: 'a sloping snow-covered course or track used for skiing, bobsledding, or tobogganing.',
        example: 'a ski run',
        synonyms: ['slope', 'piste', 'track', 'bump run', 'trail']
      },
      {
        definition: 'an enclosed area in which domestic animals or birds can run freely in the open.',
        example: 'a chicken run',
        synonyms: ['enclosure', 'pen', 'coop', 'compound']
      },
      {
        definition: 'free and unrestricted use of or access to.',
        example: 'her cats were given the run of the house',
        synonyms: [
          'unrestricted/free use of',
          'unrestricted access to',
          'a free hand in',
          'a free rein in'
        ]
      },
      {
        definition: 'a point scored by hitting the ball so that both batsmen are able to run between the wickets, or awarded in some other circumstances.',
        example: '',
        synonyms: []
      },
      {
        definition: 'a downward trickle of paint or a similar substance when applied too thickly.',
        example: 'varnish should be applied with care to avoid runs and an uneven surface',
        synonyms: []
      },
      {
        definition: 'diarrhoea.',
        example: '',
        synonyms: [
          'diarrhea',
          'loose motions',
          'looseness of the bowels',
          'the skitters',
          'the trots',
          'Spanish tummy',
          'Delhi belly',
          "Montezuma's revenge",
          'Aztec revenge',
          'Aztec two-step',
          'the squits',
          'gippy tummy',
          'holiday tummy',
          'turista',
          'dysentery',
          'lientery',
          'the flux',
          'lax'
        ]
      },
      {
        definition: "the after part of a ship's bottom where it rises and narrows toward the stern.",
        example: '',
        synonyms: []
      }
    ]
  },
  examples: [
    'Bobby set off at a **run**',
    'a production **run** of only 150 cars',
    'a record **run** of 398 miles from noon to noon',
    'how campaigns are **run**',
    'he took a little **run** before jumping',
    'this particular debate will **run** on and on',
    'something for the rope to **run** through',
    'they **run** drugs for the cocaine cartels',
    "I've got to **run**",
    'I used to **run** regularly',
    'before you start your **run**',
    'she stood out from the general **run** of varsity cheerleaders',
    'hen **run**',
    'the first **run** of 1000 copies are all gone',
    'he had a superb **run** in the 800m',
    'the group is drawing up plans to **run** trains on key routes',
    "they've had an unbeaten **run** since August",
    "it'll **run** until Christmas",
    'black **run**',
    'her cats were given the **run** of the house',
    'to **run** an experiment',
    'the tape has **run** out',
    'you get a **run** of luck at times',
    "they're doing a 5k **run**",
    'the race will be **run** next month',
    'growing nervousness among investors led to a **run** on some banks',
    'the New York-Washington **run**',
    '**run** of fish',
    "he's had a **run** of bad luck",
    'the play had a long **run** on Broadway'
  ]
}

// taken from:
// await gtrans(
//  'good morningg everybody, how are you todayy',
//  { to: 'id', htmlTag: true, resolve: false }
// ).then((res) => res.data);
const manyWordsOutput = {
  translated: 'selamat pagi semuanya, apa kabarmu hari ini',
  sourceText: 'good morning everybody, how are you today',
  from: 'en',
  to: 'id',
  isCorrected: true,
  corrected: 'good <b><i>morning</i></b> everybody, how are you <b><i>today</i></b>'
}
