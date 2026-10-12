import { ReviewItem, QuestionOption, DistractorExplanation } from './types';

export interface MasterQuestion {
  questionNumber: number;
  part: string;
  partShort: 'Part 5' | 'Part 6' | 'Part 7';
  passageTitle?: string;
  passageType?: string;
  passageText?: string;
  questionText: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  whyCorrectRight: string;
  grammarOrReadingRule: {
    title: string;
    description: string;
    keyTakeaway: string;
  };
  optionExplanations: Record<'A' | 'B' | 'C' | 'D', string>;
}

export const QUESTION_BANK: Record<number, MasterQuestion> = {
  101: {
    "questionNumber": 101,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The document you requested is ready and ________ sent to your office as soon as possible.",
    "options": [
        {
            "label": "A",
            "text": "will be"
        },
        {
            "label": "B",
            "text": "were"
        },
        {
            "label": "C",
            "text": "have been"
        },
        {
            "label": "D",
            "text": "were being"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"will be\" forms the future simple passive voice (\"will be sent\"). The singular subject \"document\" is ready now and will be sent in the upcoming future, reinforced by \"as soon as possible\".",
    "grammarOrReadingRule": {
        "title": "Future Simple Passive: will be + Past Participle",
        "description": "When describing a pending action that will happen to the subject in the future, use the future simple passive (\"will be\" + past participle). The time marker \"as soon as possible\" signals future action.",
        "keyTakeaway": "The document is ready and will be sent (future passive voice)."
    },
    "optionExplanations": {
        "A": "Correct. Forms future simple passive (\"will be sent\"), matching the prompt future timeframe indicated by \"as soon as possible\".",
        "B": "Incorrect. \"were\" is plural past tense; the subject \"document\" is singular and the timeframe is future.",
        "C": "Incorrect. \"have been\" is plural present perfect; singular \"document\" would require \"has been\", and present perfect indicates completed rather than impending action.",
        "D": "Incorrect. \"were being\" is plural past continuous passive; \"document\" is singular and the action is not an ongoing past event."
    }
},

  102: {
    "questionNumber": 102,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The ________ businessperson always dresses appropriately.",
    "options": [
        {
            "label": "A",
            "text": "success"
        },
        {
            "label": "B",
            "text": "succeed"
        },
        {
            "label": "C",
            "text": "successful"
        },
        {
            "label": "D",
            "text": "succession"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"successful\" is an adjective modifying the noun \"businessperson\". Between the definite article \"The\" and the head noun \"businessperson\", an attributive adjective is required.",
    "grammarOrReadingRule": {
        "title": "Adjective Modifying Noun: Article + Adjective + Noun",
        "description": "In the noun phrase structure [The + ____ + Noun], an adjective is needed to describe the person or thing.",
        "keyTakeaway": "The successful businessperson (adjective modifying noun)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"success\" is an abstract noun; while nouns can sometimes modify other nouns (noun adjuncts), established adjectives ending in -ful are preferred to describe personal attributes.",
        "B": "Incorrect. \"succeed\" is a verb and cannot function as an attributive modifier before a noun.",
        "C": "Correct. \"successful\" is the adjective describing a businessperson who achieves success.",
        "D": "Incorrect. \"succession\" is a noun referring to a series of people or things following one another, which does not fit."
    }
},

  103: {
    "questionNumber": 103,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "If you are interested in the position, please ________ your résumé to the Human Resources office before the end of the week.",
    "options": [
        {
            "label": "A",
            "text": "compose"
        },
        {
            "label": "B",
            "text": "revise"
        },
        {
            "label": "C",
            "text": "apply"
        },
        {
            "label": "D",
            "text": "submit"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"submit\" is a transitive verb meaning to formally present or hand in a document. The business collocation \"submit your résumé to [office]\" is the standard, accurate expression.",
    "grammarOrReadingRule": {
        "title": "Business Collocation: submit [document] to [recipient]",
        "description": "When delivering job application documents to a department, use transitive verbs of transmission like \"submit\" or \"send\" followed by the preposition \"to\".",
        "keyTakeaway": "submit your résumé to the Human Resources office."
    },
    "optionExplanations": {
        "A": "Incorrect. \"compose\" means to write or draft content, but one does not \"compose a résumé to an office\".",
        "B": "Incorrect. \"revise\" means to edit or alter existing text, not to deliver or turn in a document.",
        "C": "Incorrect. \"apply\" is intransitive with prepositions (\"apply for a job\" or \"apply to an office\"); it cannot take \"your résumé\" as a direct object.",
        "D": "Correct. Standard business collocation for turning in an application."
    }
},

  104: {
    "questionNumber": 104,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Several important pieces of information were ________ from the report.",
    "options": [
        {
            "label": "A",
            "text": "omit"
        },
        {
            "label": "B",
            "text": "omitted"
        },
        {
            "label": "C",
            "text": "omitting"
        },
        {
            "label": "D",
            "text": "omission"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"omitted\" is the past participle. Paired with \"were\", it forms the past simple passive voice (\"were omitted\"), indicating that information was left out of the report.",
    "grammarOrReadingRule": {
        "title": "Passive Voice: be + Past Participle",
        "description": "When the inanimate subject (\"pieces of information\") receives the action of being excluded rather than performing it, use the passive voice: were + past participle.",
        "keyTakeaway": "pieces of information were omitted (passive voice)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"omit\" is a base verb; it cannot follow auxiliary \"were\" directly without \"to\".",
        "B": "Correct. Past participle creating the passive voice with \"were\".",
        "C": "Incorrect. \"were omitting\" is past continuous active, meaning the pieces of information were actively leaving something else out.",
        "D": "Incorrect. \"omission\" is a noun and cannot function as the main verbal predicate here."
    }
},

  105: {
    "questionNumber": 105,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "If the road conditions don't improve by tomorrow, then we ________ the trip.",
    "options": [
        {
            "label": "A",
            "text": "will cancel"
        },
        {
            "label": "B",
            "text": "have canceled"
        },
        {
            "label": "C",
            "text": "canceled"
        },
        {
            "label": "D",
            "text": "cancel"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"will cancel\" completes the first conditional pattern: \"If + present simple (don't improve), then + future simple (will cancel)\". The condition relates to future possibility by tomorrow.",
    "grammarOrReadingRule": {
        "title": "First Conditional: If + Present Simple, will + Base Verb",
        "description": "The first conditional expresses real, possible future events. The if-clause takes the simple present (\"don't improve\"), and the result clause takes \"will\" + base verb (\"will cancel\").",
        "keyTakeaway": "If road conditions don't improve tomorrow, we will cancel the trip."
    },
    "optionExplanations": {
        "A": "Correct. Matches the standard first conditional result clause pointing to the future.",
        "B": "Incorrect. \"have canceled\" is present perfect, implying the cancellation has already concluded before knowing tomorrow's weather.",
        "C": "Incorrect. \"canceled\" is past simple, which cannot serve as the result of an open future condition.",
        "D": "Incorrect. \"cancel\" in simple present would express zero conditional habitual routine, but this describes a specific pending event."
    }
},

  106: {
    "questionNumber": 106,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "You can always count on Ms. Cho, as she is one of our most ________ employees.",
    "options": [
        {
            "label": "A",
            "text": "depend"
        },
        {
            "label": "B",
            "text": "depending"
        },
        {
            "label": "C",
            "text": "dependable"
        },
        {
            "label": "D",
            "text": "dependence"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"dependable\" is the adjective meaning trustworthy or reliable. In the superlative construction \"one of our most [adjective] employees\", an adjective modifying \"employees\" is required. Being dependable directly aligns with \"You can always count on Ms. Cho\".",
    "grammarOrReadingRule": {
        "title": "Superlative Adjective Modification: most + Adjective + Noun",
        "description": "When \"most\" acts as a superlative modifier preceding a noun, an adjective is required. Context clue \"count on\" demands a word denoting reliability.",
        "keyTakeaway": "one of our most dependable employees (adjective form)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"depend\" is a base verb; it cannot modify the noun \"employees\".",
        "B": "Incorrect. \"depending\" is a participle or preposition (\"depending on\"), not an adjective meaning reliable.",
        "C": "Correct. Adjective meaning reliable, fitting the context of someone you can count on.",
        "D": "Incorrect. \"dependence\" is a noun meaning reliance; it cannot modify \"employees\" after \"most\"."
    }
},

  107: {
    "questionNumber": 107,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "After working at the company for a year, Mr. Jones received a ________ from assistant manager to manager.",
    "options": [
        {
            "label": "A",
            "text": "promissory"
        },
        {
            "label": "B",
            "text": "promptness"
        },
        {
            "label": "C",
            "text": "prominent"
        },
        {
            "label": "D",
            "text": "promotion"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"promotion\" is a countable noun signifying advancement in job rank. Preceded by the indefinite article \"a\", a singular noun is required. Moving from assistant manager to manager is the definition of a career promotion.",
    "grammarOrReadingRule": {
        "title": "Noun Requirement After Indefinite Article: a + Singular Noun",
        "description": "The article \"a\" must precede a singular countable noun. The phrase \"from assistant manager to manager\" specifies upward job progression, requiring \"promotion\".",
        "keyTakeaway": "received a promotion from assistant manager to manager."
    },
    "optionExplanations": {
        "A": "Incorrect. \"promissory\" is an adjective (e.g., \"promissory note\") and cannot act as the direct object noun.",
        "B": "Incorrect. \"promptness\" is an abstract noun meaning punctuality, not job advancement.",
        "C": "Incorrect. \"prominent\" is an adjective meaning well-known or noticeable, not a noun.",
        "D": "Correct. Countable noun denoting career advancement."
    }
},

  108: {
    "questionNumber": 108,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The office was in excellent condition when we moved in because the former ________ was very tidy.",
    "options": [
        {
            "label": "A",
            "text": "occupy"
        },
        {
            "label": "B",
            "text": "occupied"
        },
        {
            "label": "C",
            "text": "occupant"
        },
        {
            "label": "D",
            "text": "occupancy"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"occupant\" is a person noun referring to someone who lives in or uses a property. The adjective \"former\" modifies a person who can exhibit personal habits like being \"very tidy\".",
    "grammarOrReadingRule": {
        "title": "Agent/Person Noun as Subject: the former + [Person Noun]",
        "description": "When the predicate adjective describes human behavior (\"tidy\"), the subject must be a human agent noun (\"occupant\"), not an abstract noun or verb form.",
        "keyTakeaway": "the former occupant was very tidy (person noun)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"occupy\" is a base verb; it cannot serve as the subject noun.",
        "B": "Incorrect. \"occupied\" is a past verb or participle; it cannot act as the subject noun here.",
        "C": "Correct. Agent noun referring to the previous person who used the office.",
        "D": "Incorrect. \"occupancy\" is an abstract rate or condition (e.g., occupancy rate); an abstract rate cannot be \"tidy\"."
    }
},

  109: {
    "questionNumber": 109,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "No one on the team will be able to go home ________ this work is finished.",
    "options": [
        {
            "label": "A",
            "text": "if"
        },
        {
            "label": "B",
            "text": "until"
        },
        {
            "label": "C",
            "text": "since"
        },
        {
            "label": "D",
            "text": "because"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"until\" is a conjunction indicating the point in time up to which a state continues. \"No one will be able to go home until this work is finished\" means leaving is prohibited prior to completion.",
    "grammarOrReadingRule": {
        "title": "Negative Duration Conjunction: not... until...",
        "description": "The correlative structure \"no one / not... until...\" marks the boundary time before which an action cannot occur.",
        "keyTakeaway": "No one will be able to go home until this work is finished."
    },
    "optionExplanations": {
        "A": "Incorrect. \"if\" would mean finishing work prevents people from going home (\"no one can go home if it is finished\"), which reverses logic.",
        "B": "Correct. Conjunction establishing that departure can only happen after the work is done.",
        "C": "Incorrect. \"since\" expresses cause or duration starting from a past completion, conflicting with future prohibition.",
        "D": "Incorrect. \"because\" would illogically mean work completion is the reason they are trapped."
    }
},

  110: {
    "questionNumber": 110,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Just walk ________ that door and you will see the copy machine on the other side.",
    "options": [
        {
            "label": "A",
            "text": "under"
        },
        {
            "label": "B",
            "text": "around"
        },
        {
            "label": "C",
            "text": "between"
        },
        {
            "label": "D",
            "text": "through"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"through\" is a preposition of movement expressing passage into and out of an opening or doorway: \"walk through that door\".",
    "grammarOrReadingRule": {
        "title": "Prepositions of Movement: walk through a door",
        "description": "Doors and gateways are traversed using the preposition \"through\" to get to the other side.",
        "keyTakeaway": "walk through that door and you will see the copy machine."
    },
    "optionExplanations": {
        "A": "Incorrect. \"under\" indicates position below a surface, not passing from one room into another.",
        "B": "Incorrect. \"around\" means bypassing the door or moving in a circle outside it.",
        "C": "Incorrect. \"between\" requires two reference points (e.g., \"between the two desks\").",
        "D": "Correct. Standard preposition for passing from one side of a doorway to the other."
    }
},

  111: {
    "questionNumber": 111,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "There were several qualified candidates for the job, but we could ________ only one.",
    "options": [
        {
            "label": "A",
            "text": "chose"
        },
        {
            "label": "B",
            "text": "chosen"
        },
        {
            "label": "C",
            "text": "choose"
        },
        {
            "label": "D",
            "text": "choice"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"choose\" is the base verb (bare infinitive). Modal auxiliary verbs like \"could\" must always be followed directly by a base verb without \"to\": \"could choose only one\".",
    "grammarOrReadingRule": {
        "title": "Modal Auxiliary + Base Form: modal + V0",
        "description": "Modal verbs (can, could, may, might, must, shall, should, will, would) are strictly followed by the uninflected base form of the verb.",
        "keyTakeaway": "could + choose (modal + bare infinitive)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"chose\" is past simple; modals cannot be followed by past-tense verb forms.",
        "B": "Incorrect. \"chosen\" is a past participle; requires an auxiliary like \"have\" (\"could have chosen\").",
        "C": "Correct. Base form verb following modal \"could\".",
        "D": "Incorrect. \"choice\" is a noun and cannot act as the main verb predicate after a modal."
    }
},

  112: {
    "questionNumber": 112,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "In order to be ________ to the building, you must show proper identification.",
    "options": [
        {
            "label": "A",
            "text": "admitted"
        },
        {
            "label": "B",
            "text": "emitted"
        },
        {
            "label": "C",
            "text": "remitted"
        },
        {
            "label": "D",
            "text": "submitted"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"admitted\" means granted entrance or permission to enter a facility. In the passive infinitive \"to be admitted to the building\", \"admit\" is the exact term for security clearance.",
    "grammarOrReadingRule": {
        "title": "Vocabulary & Passive Infinitive: be admitted to [facility]",
        "description": "Gaining authorized entry to a building or institution uses the verb \"admit\" (in passive: \"be admitted to\").",
        "keyTakeaway": "In order to be admitted to the building (granted entry)."
    },
    "optionExplanations": {
        "A": "Correct. Means permitted to enter a place.",
        "B": "Incorrect. \"emitted\" means discharged or released (e.g., fumes, radiation, sounds).",
        "C": "Incorrect. \"remitted\" means sent money in payment or canceled a debt.",
        "D": "Incorrect. \"submitted\" means handed in a document or yielded to authority, not entered a building."
    }
},

  113: {
    "questionNumber": 113,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "If you need to make a call, you can use the phone that's on that table ________ my desk.",
    "options": [
        {
            "label": "A",
            "text": "inside"
        },
        {
            "label": "B",
            "text": "outside"
        },
        {
            "label": "C",
            "text": "beside"
        },
        {
            "label": "D",
            "text": "reside"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"beside\" is a spatial preposition meaning \"next to\" or \"at the side of\". The table holding the telephone is located right next to the speaker's desk.",
    "grammarOrReadingRule": {
        "title": "Spatial Prepositions: beside (next to / adjacent to)",
        "description": "\"Beside\" indicates proximity right next to another physical object. It is distinct from \"besides\" (meaning in addition to).",
        "keyTakeaway": "table beside my desk (next to my desk)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"inside\" means enclosed within an interior space (e.g., inside a drawer), not a separate table.",
        "B": "Incorrect. \"outside\" means exterior to an area or outdoors, not adjacent in an office.",
        "C": "Correct. Preposition of proximity meaning next to.",
        "D": "Incorrect. \"reside\" is a verb meaning to live or dwell; it cannot function as a preposition."
    }
},

  114: {
    "questionNumber": 114,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "It is a bit scary riding this elevator because it ________ at such a rapid rate.",
    "options": [
        {
            "label": "A",
            "text": "decreases"
        },
        {
            "label": "B",
            "text": "descends"
        },
        {
            "label": "C",
            "text": "devalues"
        },
        {
            "label": "D",
            "text": "diminishes"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"descends\" is an intransitive verb of physical motion meaning to go or move downward. When an elevator moves down quickly, it descends.",
    "grammarOrReadingRule": {
        "title": "Physical Motion Verbs vs. Abstract Reductions",
        "description": "Elevators physically move downwards via \"descend\". Verbs like \"decrease\" or \"diminish\" describe changes in numbers, sizes, or abstract intensity.",
        "keyTakeaway": "elevator descends at a rapid rate (moves downward)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"decreases\" refers to quantities, figures, or amounts becoming smaller.",
        "B": "Correct. Physical motion verb meaning to travel downwards.",
        "C": "Incorrect. \"devalues\" means reducing the official monetary value of a currency or asset.",
        "D": "Incorrect. \"diminishes\" means fading in strength, size, or importance over time."
    }
},

  115: {
    "questionNumber": 115,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "________ your time card whenever you enter or leave the building.",
    "options": [
        {
            "label": "A",
            "text": "Punch"
        },
        {
            "label": "B",
            "text": "Punches"
        },
        {
            "label": "C",
            "text": "Punched"
        },
        {
            "label": "D",
            "text": "Punching"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"Punch\" is the base verb forming an imperative sentence. The sentence gives a direct command or instruction to employees without a stated grammatical subject (implied \"you\").",
    "grammarOrReadingRule": {
        "title": "Imperative Sentence Structure: Base Form Verb at Clause Start",
        "description": "Imperative sentences providing rules, workplace instructions, or commands begin with the base form of the verb (V0).",
        "keyTakeaway": "Punch your time card (imperative sentence starting with base verb)."
    },
    "optionExplanations": {
        "A": "Correct. Base verb form introducing a direct workplace instruction.",
        "B": "Incorrect. \"Punches\" is third-person singular present; cannot begin an imperative instruction.",
        "C": "Incorrect. \"Punched\" is simple past or past participle; commands cannot begin with past tense.",
        "D": "Incorrect. \"Punching\" is a present participle or gerund; cannot serve as the finite verb of an instruction without an auxiliary."
    }
},

  116: {
    "questionNumber": 116,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "When payday ________, all employees will receive their checks in the mail.",
    "options": [
        {
            "label": "A",
            "text": "arrived"
        },
        {
            "label": "B",
            "text": "arrives"
        },
        {
            "label": "C",
            "text": "arriving"
        },
        {
            "label": "D",
            "text": "will arrive"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"arrives\" is the simple present tense. In adverbial time clauses introduced by \"When\", simple present is strictly required to refer to future events when the main clause contains future tense (\"will receive\").",
    "grammarOrReadingRule": {
        "title": "Time Clauses with Future Meaning: When + Simple Present",
        "description": "Subordinate clauses of time (when, as soon as, before, after, once) cannot use \"will\". They use simple present tense to refer to future time.",
        "keyTakeaway": "When payday arrives, employees will receive checks (present tense in time clause)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"arrived\" is past tense, which contradicts the upcoming future receipt of paychecks (\"will receive\").",
        "B": "Correct. Third-person singular simple present used for future time in an adverbial time clause.",
        "C": "Incorrect. \"arriving\" is a participle and cannot act as the finite predicate verb for the subject \"payday\".",
        "D": "Incorrect. Modal \"will\" cannot be placed inside an adverbial time clause introduced by \"when\"."
    }
},

  117: {
    "questionNumber": 117,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Ms. Wilson was fired ________ she always arrived late and never finished her work on time.",
    "options": [
        {
            "label": "A",
            "text": "unless"
        },
        {
            "label": "B",
            "text": "though"
        },
        {
            "label": "C",
            "text": "because"
        },
        {
            "label": "D",
            "text": "however"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"because\" is a subordinating conjunction of cause and reason. It introduces the explanation for why she was terminated: her perpetual tardiness and failure to complete assignments.",
    "grammarOrReadingRule": {
        "title": "Causal Subordinating Conjunction: because + Cause Clause",
        "description": "\"Because\" links a result clause with a dependent clause explaining the reason or cause.",
        "keyTakeaway": "Ms. Wilson was fired because she always arrived late (reason conjunction)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"unless\" means \"if not\", which would create the absurd meaning that arriving late would prevent her firing.",
        "B": "Incorrect. \"though\" shows contrast or concession, which conflicts with chronic tardiness being the direct cause of termination.",
        "C": "Correct. Conjunction introducing the causal explanation for her dismissal.",
        "D": "Incorrect. \"however\" is a conjunctive adverb used between independent clauses with a semicolon or period, not a subordinating conjunction."
    }
},

  118: {
    "questionNumber": 118,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Our boss is very organized and tidy and ________ that we keep the office neat.",
    "options": [
        {
            "label": "A",
            "text": "consists"
        },
        {
            "label": "B",
            "text": "persists"
        },
        {
            "label": "C",
            "text": "resists"
        },
        {
            "label": "D",
            "text": "insists"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"insists\" means to demand forcefully. It takes a \"that\"-clause (mandative subjunctive or indicative): \"insists that we keep the office neat\", matching a boss who values organization.",
    "grammarOrReadingRule": {
        "title": "Verbs of Demand Taking That-Clauses: insist that...",
        "description": "Verbs expressing insistence or requirement (insist, demand, require) take a noun clause introduced by \"that\".",
        "keyTakeaway": "insists that we keep the office neat."
    },
    "optionExplanations": {
        "A": "Incorrect. \"consists\" requires the preposition \"of\" (e.g., \"consists of five members\"); it cannot take a \"that\"-clause.",
        "B": "Incorrect. \"persists\" requires the preposition \"in\" + gerund (e.g., \"persists in doing\"); does not take a that-clause command.",
        "C": "Incorrect. \"resists\" takes a direct noun or gerund object (e.g., \"resists change\"), not a that-clause.",
        "D": "Correct. Verb meaning demands firmly, taking a that-clause."
    }
},

  119: {
    "questionNumber": 119,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "________ Mr. Lee works very hard and always meets his deadlines, he still hasn't been given a promotion.",
    "options": [
        {
            "label": "A",
            "text": "Since"
        },
        {
            "label": "B",
            "text": "Even"
        },
        {
            "label": "C",
            "text": "Despite"
        },
        {
            "label": "D",
            "text": "Although"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"Although\" is a subordinating conjunction of concession introducing a dependent clause with a subject (\"Mr. Lee\") and verb (\"works\"). It establishes contrast between his hard work and not receiving a promotion.",
    "grammarOrReadingRule": {
        "title": "Concession: Subordinating Conjunction vs. Preposition",
        "description": "Clause with Subject + Verb -> Subordinating conjunction (Although / Even though / Though). Noun / Gerund phrase -> Preposition (Despite / In spite of).",
        "keyTakeaway": "Although + Subject + Verb vs. Despite + Noun Phrase."
    },
    "optionExplanations": {
        "A": "Incorrect. \"Since\" expresses cause/reason; it would illogically imply hard work caused him not to be promoted.",
        "B": "Incorrect. \"Even\" is an adverb; it cannot connect clauses without \"though\" or \"if\" (i.e., \"Even though\").",
        "C": "Incorrect. \"Despite\" is a preposition and cannot take a full clause with subject and finite verb (\"Despite Mr. Lee works\" is ungrammatical).",
        "D": "Correct. Subordinating conjunction introducing the concessive clause."
    }
},

  120: {
    "questionNumber": 120,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "He ________ an employee of this company ever since he first started working.",
    "options": [
        {
            "label": "A",
            "text": "is"
        },
        {
            "label": "B",
            "text": "was"
        },
        {
            "label": "C",
            "text": "has been"
        },
        {
            "label": "D",
            "text": "will be"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"has been\" is the present perfect tense. The time expression \"ever since he first started working\" denotes an unbroken duration beginning at a past point and continuing to the present, requiring present perfect.",
    "grammarOrReadingRule": {
        "title": "Present Perfect with \"Ever Since\": has been + since...",
        "description": "\"Since\" and \"ever since\" specify the start of an ongoing state continuing into the present. The main clause requires the present perfect tense.",
        "keyTakeaway": "has been an employee ever since he started (present perfect duration)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"is\" describes a current state but fails to convey historical duration starting in the past.",
        "B": "Incorrect. \"was\" describes a finished past state that no longer exists.",
        "C": "Correct. Present perfect showing duration from past inception up to the present.",
        "D": "Incorrect. \"will be\" is future tense, conflicting with an action that started in the past."
    }
},

  121: {
    "questionNumber": 121,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The walls are in bad shape and will require ________ before we can begin painting them.",
    "options": [
        {
            "label": "A",
            "text": "preparation"
        },
        {
            "label": "B",
            "text": "preparatory"
        },
        {
            "label": "C",
            "text": "preparer"
        },
        {
            "label": "D",
            "text": "prepare"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"preparation\" is a noun functioning as the direct object of the transitive verb \"require\". The walls need the process of preparation before painting.",
    "grammarOrReadingRule": {
        "title": "Direct Object Requirement: require + Noun",
        "description": "Transitive verbs like require, need, and request take a noun or gerund direct object. Suffix \"-tion\" marks the process noun.",
        "keyTakeaway": "require preparation (direct object noun)."
    },
    "optionExplanations": {
        "A": "Correct. Process noun acting as direct object of \"require\".",
        "B": "Incorrect. \"preparatory\" is an adjective (e.g., preparatory work) and cannot stand alone as a direct object.",
        "C": "Incorrect. \"preparer\" is a person noun (e.g., tax preparer); walls require the process of preparation, not an individual.",
        "D": "Incorrect. \"prepare\" is a base verb; cannot follow \"require\" directly without \"to\"."
    }
},

  122: {
    "questionNumber": 122,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "If we had worked through the night, we ________ have finished the report on time.",
    "options": [
        {
            "label": "A",
            "text": "should"
        },
        {
            "label": "B",
            "text": "might"
        },
        {
            "label": "C",
            "text": "must"
        },
        {
            "label": "D",
            "text": "will"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"might\" completes the third conditional result clause expressing past hypothetical possibility: \"If we had worked... we might have finished\".",
    "grammarOrReadingRule": {
        "title": "Third Conditional Result Clause: might/would/could have + Past Participle",
        "description": "Third conditional sentences imagine past counterfactuals: If + Past Perfect, Subject + would/might/could have + Past Participle. \"Might have\" expresses possibility.",
        "keyTakeaway": "If we had worked..., we might have finished (third conditional)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"should have finished\" expresses moral obligation, duty, or regret, not a conditional result.",
        "B": "Correct. Modal indicating hypothetical possibility in the third conditional structure.",
        "C": "Incorrect. \"must have\" is used for past logical deductions from known facts, not counterfactual conditionals.",
        "D": "Incorrect. \"will\" is future tense and cannot pair with past perfect \"had worked\"."
    }
},

  123: {
    "questionNumber": 123,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "It is necessary to have at least one advanced degree in order to ________ in today's job market.",
    "options": [
        {
            "label": "A",
            "text": "compete"
        },
        {
            "label": "B",
            "text": "compile"
        },
        {
            "label": "C",
            "text": "compose"
        },
        {
            "label": "D",
            "text": "comprise"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"compete\" is an intransitive verb meaning to strive against others for career opportunities. The collocation \"compete in today's job market\" is the natural, correct expression.",
    "grammarOrReadingRule": {
        "title": "Intransitive Verb & Career Collocation: compete in the job market",
        "description": "\"Compete\" is an intransitive verb indicating rivalry to win opportunities, taking the prepositional phrase \"in today's job market\".",
        "keyTakeaway": "compete in today's job market (strive against other applicants)."
    },
    "optionExplanations": {
        "A": "Correct. Intransitive verb meaning to contend with other candidates for jobs.",
        "B": "Incorrect. \"compile\" is a transitive verb meaning to collect or assemble data (e.g., compile a report); requires a direct object.",
        "C": "Incorrect. \"compose\" is a transitive verb meaning to write or produce music/text.",
        "D": "Incorrect. \"comprise\" is a stative verb meaning to consist of or contain."
    }
},

  124: {
    "questionNumber": 124,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Because so few people showed ________ for the meeting, we decided to postpone it to a later date.",
    "options": [
        {
            "label": "A",
            "text": "through"
        },
        {
            "label": "B",
            "text": "down"
        },
        {
            "label": "C",
            "text": "off"
        },
        {
            "label": "D",
            "text": "up"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"show up\" is an established phrasal verb meaning to arrive or make an appearance. \"Few people showed up for the meeting\" explains why the meeting had to be postponed.",
    "grammarOrReadingRule": {
        "title": "Phrasal Verb: show up (arrive / attend)",
        "description": "\"Show up\" means to arrive at an arranged gathering. Low attendance justifies postponing an event.",
        "keyTakeaway": "showed up for the meeting (arrived/attended)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"show through\" means to be visible underneath a transparent surface.",
        "B": "Incorrect. \"show down\" is nonstandard as a verb phrase; \"showdown\" as a noun means a decisive confrontation.",
        "C": "Incorrect. \"show off\" means to display something proudly to boast or seek admiration.",
        "D": "Correct. Phrasal verb particle completing \"show up\", meaning to arrive or attend."
    }
},

  125: {
    "questionNumber": 125,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Our corporate headquarters sit on a hill, high up ________ the manufacturing plant.",
    "options": [
        {
            "label": "A",
            "text": "beyond"
        },
        {
            "label": "B",
            "text": "above"
        },
        {
            "label": "C",
            "text": "next to"
        },
        {
            "label": "D",
            "text": "across from"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"above\" is a spatial preposition indicating higher vertical elevation. \"High up above the manufacturing plant\" indicates the hilltop location is vertically higher than the plant.",
    "grammarOrReadingRule": {
        "title": "Prepositions of Elevation: high up above [location]",
        "description": "\"Above\" indicates a higher vertical position, reinforced here by the adverb phrase \"high up\".",
        "keyTakeaway": "on a hill, high up above the plant (vertical elevation)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"beyond\" indicates farther away past a boundary on a horizontal plane, not vertical elevation after \"high up\".",
        "B": "Correct. Preposition indicating higher vertical level.",
        "C": "Incorrect. \"next to\" indicates lateral side-by-side adjacency, which conflicts with \"high up on a hill\".",
        "D": "Incorrect. \"across from\" means opposite on the other side of a street or space, not higher elevation."
    }
},

  126: {
    "questionNumber": 126,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "If you wish to speak with the director, you have to ________ an appointment first.",
    "options": [
        {
            "label": "A",
            "text": "call"
        },
        {
            "label": "B",
            "text": "invite"
        },
        {
            "label": "C",
            "text": "schedule"
        },
        {
            "label": "D",
            "text": "receive"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"schedule an appointment\" is the standard business collocation for arranging or booking a formal consultation with an executive or director.",
    "grammarOrReadingRule": {
        "title": "Business Collocation: schedule an appointment",
        "description": "Appointments are scheduled, booked, or arranged in formal business contexts.",
        "keyTakeaway": "schedule an appointment (book a meeting time)."
    },
    "optionExplanations": {
        "A": "Incorrect. One calls a person or an office, but one does not \"call an appointment\" directly.",
        "B": "Incorrect. \"invite\" takes a person object (e.g., invite the director), not an appointment.",
        "C": "Correct. Standard business collocation meaning to book an appointment.",
        "D": "Incorrect. \"receive\" denotes passive acquisition; visitors must actively arrange/schedule an appointment."
    }
},

  127: {
    "questionNumber": 127,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The ________ of our products is well known throughout the world.",
    "options": [
        {
            "label": "A",
            "text": "quality"
        },
        {
            "label": "B",
            "text": "quantity"
        },
        {
            "label": "C",
            "text": "quantify"
        },
        {
            "label": "D",
            "text": "qualify"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"quality\" is a noun referring to the high standard or excellence of goods. A company is renowned globally for the excellence and craftsmanship (\"quality\") of its products.",
    "grammarOrReadingRule": {
        "title": "Noun Requirement & Marketing Collocation: The quality of our products",
        "description": "Between the article \"The\" and the prepositional phrase \"of our products\", a subject noun is required. Excellence in products is expressed by \"quality\".",
        "keyTakeaway": "The quality of our products is well known."
    },
    "optionExplanations": {
        "A": "Correct. Noun referring to high standard or grade of goods.",
        "B": "Incorrect. \"quantity\" refers to amount or numerical volume; companies are typically famed for quality rather than mere quantity.",
        "C": "Incorrect. \"quantify\" is a verb meaning to measure the amount of something.",
        "D": "Incorrect. \"qualify\" is a verb meaning to meet requirements or become eligible."
    }
},

  128: {
    "questionNumber": 128,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "We ________ all employees of this company to arrive at the office on time every day.",
    "options": [
        {
            "label": "A",
            "text": "hope"
        },
        {
            "label": "B",
            "text": "deem"
        },
        {
            "label": "C",
            "text": "intend"
        },
        {
            "label": "D",
            "text": "expect"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"expect\" follows the structural pattern [expect + object + to-infinitive] (\"expect all employees to arrive\"). It expresses a standard organizational requirement for punctuality.",
    "grammarOrReadingRule": {
        "title": "Verb Patterns: Verb + Object + to-Infinitive",
        "description": "Verbs following the pattern [Verb + Object + to-infinitive] include expect, require, allow, and instruct. \"Hope\" cannot take this pattern (*hope someone to do is ungrammatical).",
        "keyTakeaway": "expect all employees to arrive on time."
    },
    "optionExplanations": {
        "A": "Incorrect. \"hope\" takes a that-clause (\"hope that employees arrive\"), never *hope + object + to-infinitive*.",
        "B": "Incorrect. \"deem\" takes a noun object and complement adjective (e.g., deem it necessary), not an infinitive command.",
        "C": "Incorrect. \"intend\" takes an infinitive directly (\"intend to arrive\") or \"intend for someone to do\".",
        "D": "Correct. Transitive verb taking object + to-infinitive to express expectations."
    }
},

  129: {
    "questionNumber": 129,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "All expenses must be approved ________ the department head at the beginning of each month.",
    "options": [
        {
            "label": "A",
            "text": "by"
        },
        {
            "label": "B",
            "text": "to"
        },
        {
            "label": "C",
            "text": "for"
        },
        {
            "label": "D",
            "text": "from"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"by\" is the preposition used in passive voice constructions (\"must be approved by...\") to introduce the agent who performs the approval action.",
    "grammarOrReadingRule": {
        "title": "Passive Voice Agent: be + Past Participle + by + Agent",
        "description": "In passive voice, the entity performing the action is introduced by the preposition \"by\".",
        "keyTakeaway": "must be approved by the department head (passive voice agent)."
    },
    "optionExplanations": {
        "A": "Correct. Introduces the authorizing agent in a passive construction.",
        "B": "Incorrect. \"to\" denotes destination or recipient, not the performing agent of approval.",
        "C": "Incorrect. \"for\" indicates purpose or duration, not the authorizer.",
        "D": "Incorrect. \"from\" indicates point of origin, not the agent in a passive clause."
    }
},

  130: {
    "questionNumber": 130,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The next staff meeting will ________ in the large conference room on Friday morning at 10:00.",
    "options": [
        {
            "label": "A",
            "text": "go to"
        },
        {
            "label": "B",
            "text": "take place"
        },
        {
            "label": "C",
            "text": "attend"
        },
        {
            "label": "D",
            "text": "adjourn"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"take place\" is an intransitive idiom meaning to happen or be held. When stating where and when an organized event occurs, \"take place\" is the proper expression.",
    "grammarOrReadingRule": {
        "title": "Event Occurrence Idiom: take place",
        "description": "Events and meetings \"take place\" at a designated time and location. People \"attend\" or \"go to\" meetings, but the meeting itself \"takes place\".",
        "keyTakeaway": "The meeting will take place in the conference room."
    },
    "optionExplanations": {
        "A": "Incorrect. People go to rooms; inanimate events cannot \"go to\" a location.",
        "B": "Correct. Idiomatic verb phrase meaning to occur or be held.",
        "C": "Incorrect. People attend meetings (e.g., staff will attend the meeting); a meeting cannot attend a room.",
        "D": "Incorrect. \"adjourn\" means to end or suspend a meeting, not to convene or start it."
    }
},

  131: {
    "questionNumber": 131,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "We ________ finish this work soon because the deadline is approaching.",
    "options": [
        {
            "label": "A",
            "text": "have"
        },
        {
            "label": "B",
            "text": "had to"
        },
        {
            "label": "C",
            "text": "have to"
        },
        {
            "label": "D",
            "text": "will have"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"have to\" is a semi-modal expressing necessity or obligation in the present/near future (\"have to finish\"). The approaching deadline necessitates completing the work soon.",
    "grammarOrReadingRule": {
        "title": "Modal of Obligation: have to + Base Verb",
        "description": "\"Have to\" + base verb indicates present necessity or obligation. \"Deadline is approaching\" demands present obligation.",
        "keyTakeaway": "We have to finish this work soon (present necessity)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"have\" alone without \"to\" cannot precede a bare infinitive verb like \"finish\" (*we have finish).",
        "B": "Incorrect. \"had to\" is past tense, which contradicts the present approaching deadline (\"is approaching\").",
        "C": "Correct. Semi-modal expressing current obligation followed by base verb \"finish\".",
        "D": "Incorrect. \"will have\" would require a past participle for future perfect (e.g., \"will have finished\"), not base verb \"finish\"."
    }
},

  132: {
    "questionNumber": 132,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "This ________ is probably the most important one you'll make, so think it over carefully.",
    "options": [
        {
            "label": "A",
            "text": "decidedly"
        },
        {
            "label": "B",
            "text": "decisive"
        },
        {
            "label": "C",
            "text": "decision"
        },
        {
            "label": "D",
            "text": "decide"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"decision\" is a noun acting as the subject of the sentence. The demonstrative determiner \"This\" must be followed by a singular countable noun (\"This decision\").",
    "grammarOrReadingRule": {
        "title": "Demonstrative Determiner + Singular Noun: This + Noun",
        "description": "The demonstrative pronoun/determiner \"This\" modifies a singular noun. The phrase \"one you'll make\" refers back to \"decision\" (collocation: make a decision).",
        "keyTakeaway": "This decision is probably the most important one (determiner + noun)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"decidedly\" is an adverb meaning definitely or unmistakably.",
        "B": "Incorrect. \"decisive\" is an adjective meaning conclusive or resolute.",
        "C": "Correct. Singular noun acting as the subject, pairing with the collocation \"make a decision\".",
        "D": "Incorrect. \"decide\" is a verb and cannot function as the subject noun after \"This\"."
    }
},

  133: {
    "questionNumber": 133,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "We're trying to keep the electric bill down, so please ________ off the lights before you leave the office.",
    "options": [
        {
            "label": "A",
            "text": "turn"
        },
        {
            "label": "B",
            "text": "turned"
        },
        {
            "label": "C",
            "text": "turning"
        },
        {
            "label": "D",
            "text": "will turn"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"turn\" is the base verb forming a polite imperative request after \"please\": \"please turn off the lights\". Imperatives addressing someone directly always use the base form.",
    "grammarOrReadingRule": {
        "title": "Imperative Polite Request: please + Base Form Verb (V0)",
        "description": "Polite workplace instructions beginning with or containing \"please\" use the bare infinitive / base form of the verb without inflections.",
        "keyTakeaway": "please turn off the lights (base form in imperative)."
    },
    "optionExplanations": {
        "A": "Correct. Base verb form completing the imperative command.",
        "B": "Incorrect. \"turned\" is past tense; commands cannot use past inflections.",
        "C": "Incorrect. \"turning\" is a participle; cannot act as the main verb of an imperative clause.",
        "D": "Incorrect. \"will turn\" cannot follow polite imperative particle \"please\" in this command structure."
    }
},

  134: {
    "questionNumber": 134,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Leading economists have predicted the prices will continue to ________ during the second half of the year.",
    "options": [
        {
            "label": "A",
            "text": "growth"
        },
        {
            "label": "B",
            "text": "raise"
        },
        {
            "label": "C",
            "text": "up"
        },
        {
            "label": "D",
            "text": "rise"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"rise\" is an intransitive verb meaning to go up or increase. After the infinitive marker \"to\" following \"continue\", a base verb is required. Because \"prices\" increase without an external object, intransitive \"rise\" is required.",
    "grammarOrReadingRule": {
        "title": "Infinitive Base Form & Intransitive Verb: continue to rise",
        "description": "After \"continue to\", use the base form of the verb. \"Rise\" is intransitive (does not take an object), whereas \"raise\" is transitive (requires an object: raise prices).",
        "keyTakeaway": "prices will continue to rise (intransitive base verb)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"growth\" is a noun; the infinitive marker \"to\" requires a base verb, not a noun.",
        "B": "Incorrect. \"raise\" is transitive and requires a direct object (e.g., raise taxes); there is no object after the blank.",
        "C": "Incorrect. \"up\" is an adverb or preposition, not an infinitive verb.",
        "D": "Correct. Intransitive base verb meaning to increase."
    }
},

  135: {
    "questionNumber": 135,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The books that he showed us at the meeting ________ not very interesting.",
    "options": [
        {
            "label": "A",
            "text": "was"
        },
        {
            "label": "B",
            "text": "were"
        },
        {
            "label": "C",
            "text": "is"
        },
        {
            "label": "D",
            "text": "did"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"were\" is the plural past linking verb agreeing with the plural head noun subject \"The books\". The intervening relative clause (\"that he showed us at the meeting\") contains singular \"meeting\", but the main verb must agree with the true head noun \"The books\".",
    "grammarOrReadingRule": {
        "title": "Subject-Verb Agreement Across Relative Clauses",
        "description": "When a relative clause separates the subject noun from the main predicate verb, identify the true head noun. Plural \"The books\" takes plural past verb \"were\".",
        "keyTakeaway": "The books [that he showed us...] were not interesting (plural agreement)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"was\" is singular past tense; mistakenly agrees with \"meeting\" in the relative clause instead of the true subject \"The books\".",
        "B": "Correct. Plural past linking verb agreeing with \"The books\".",
        "C": "Incorrect. \"is\" is singular present tense; fails both plural agreement and past narrative tense.",
        "D": "Incorrect. \"did\" is an auxiliary verb; requires a main base verb (e.g., did not seem) and cannot stand alone as a linking verb before adjectives."
    }
},

  136: {
    "questionNumber": 136,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Mr. Kim is not a particularly interesting speaker, and several people fell asleep ________ his lecture.",
    "options": [
        {
            "label": "A",
            "text": "although"
        },
        {
            "label": "B",
            "text": "while"
        },
        {
            "label": "C",
            "text": "because"
        },
        {
            "label": "D",
            "text": "during"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"during\" is a preposition of time preceding a noun phrase (\"his lecture\") to indicate that an event happened within the duration of that activity.",
    "grammarOrReadingRule": {
        "title": "Preposition vs. Conjunction for Time: during + Noun Phrase vs. while + Clause",
        "description": "Use \"during\" before a noun phrase (during the lecture). Use \"while\" before a full clause with a subject and verb (while he was lecturing).",
        "keyTakeaway": "fell asleep during his lecture (preposition + noun phrase)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"although\" is a concessive conjunction that introduces a clause with a subject and verb, not a single noun phrase.",
        "B": "Incorrect. \"while\" is a conjunction that must be followed by a clause containing a verb (e.g., while he spoke), not directly by a noun phrase.",
        "C": "Incorrect. \"because\" is a conjunction requiring a clause (e.g., because he was boring), not a preposition before a noun.",
        "D": "Correct. Preposition of time taking the noun phrase \"his lecture\"."
    }
},

  137: {
    "questionNumber": 137,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Our business is rapidly ________ and we are hiring many new people.",
    "options": [
        {
            "label": "A",
            "text": "expand"
        },
        {
            "label": "B",
            "text": "expands"
        },
        {
            "label": "C",
            "text": "expanding"
        },
        {
            "label": "D",
            "text": "has expanded"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"expanding\" is the present participle forming the present continuous tense with \"is\": \"is rapidly expanding\". The adverb \"rapidly\" modifies the ongoing growth of the business.",
    "grammarOrReadingRule": {
        "title": "Present Continuous Tense: be + Adverb + Present Participle (-ing)",
        "description": "When auxiliary \"is\" precedes an adverb of manner, the main verb takes the -ing participle form to describe an active, ongoing trend.",
        "keyTakeaway": "business is rapidly expanding (present continuous)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"expand\" is a base verb; cannot follow auxiliary \"is\" without \"to\" or a passive structure.",
        "B": "Incorrect. \"expands\" is a third-person singular present verb; cannot follow auxiliary \"is\".",
        "C": "Correct. Present participle completing the continuous verb phrase \"is expanding\".",
        "D": "Incorrect. \"has expanded\" is present perfect; cannot be placed after auxiliary \"is\"."
    }
},

  138: {
    "questionNumber": 138,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "The building ________ during the heavy thunderstorm last night.",
    "options": [
        {
            "label": "A",
            "text": "damage"
        },
        {
            "label": "B",
            "text": "damaged"
        },
        {
            "label": "C",
            "text": "was damaged"
        },
        {
            "label": "D",
            "text": "was damaging"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"was damaged\" is the past simple passive voice (\"was\" + past participle). The inanimate subject \"The building\" suffered damage caused by the storm.",
    "grammarOrReadingRule": {
        "title": "Past Simple Passive: was/were + Past Participle",
        "description": "When the subject receives harm rather than causing it, use the passive voice. \"Last night\" marks simple past tense.",
        "keyTakeaway": "The building was damaged during the storm (passive voice)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"damage\" is a base/present verb; conflicts with singular subject and past time \"last night\".",
        "B": "Incorrect. \"damaged\" is past active; would imply the building actively caused damage to something else.",
        "C": "Correct. Singular past passive voice for an affected subject.",
        "D": "Incorrect. \"was damaging\" is past continuous active; would imply the building was actively inflicting harm."
    }
},

  139: {
    "questionNumber": 139,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "People who have no ________ are seldom disappointed.",
    "options": [
        {
            "label": "A",
            "text": "expectations"
        },
        {
            "label": "B",
            "text": "expectancy"
        },
        {
            "label": "C",
            "text": "expects"
        },
        {
            "label": "D",
            "text": "expect"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"expectations\" is a plural noun meaning beliefs or hopes that something will happen. Following the negative determiner \"no\", a noun is required. When people have no expectations, they are not disappointed.",
    "grammarOrReadingRule": {
        "title": "Determiner + Noun: have no + Noun",
        "description": "The determiner \"no\" modifies a noun. \"Expectations\" refers to beliefs about future outcomes that can lead to disappointment if unfulfilled.",
        "keyTakeaway": "have no expectations (noun object after determiner no)."
    },
    "optionExplanations": {
        "A": "Correct. Plural noun referring to anticipations or hopes for the future.",
        "B": "Incorrect. \"expectancy\" refers to an emotional state of anticipation or statistical lifespan (e.g., life expectancy), not personal expectations.",
        "C": "Incorrect. \"expects\" is a third-person singular present verb, not a noun.",
        "D": "Incorrect. \"expect\" is a base verb, not a noun."
    }
},

  140: {
    "questionNumber": 140,
    "part": "Part 5: Incomplete Sentences",
    "partShort": "Part 5",
    "questionText": "Please don't ask for personal information about our employees, as we keep that information ________.",
    "options": [
        {
            "label": "A",
            "text": "consequential"
        },
        {
            "label": "B",
            "text": "confidential"
        },
        {
            "label": "C",
            "text": "conservative"
        },
        {
            "label": "D",
            "text": "considerate"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"confidential\" is an adjective meaning secret or private. In the structure [keep + object + adjective], employee records are kept confidential to protect privacy.",
    "grammarOrReadingRule": {
        "title": "Object Complement Adjective: keep [something] confidential",
        "description": "The verb \"keep\" takes an object and an adjective complement specifying its maintained condition. Private personnel records are kept \"confidential\".",
        "keyTakeaway": "keep information confidential (private and protected)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"consequential\" means having important consequences or resulting from something.",
        "B": "Correct. Adjective meaning private, restricted, or secret.",
        "C": "Incorrect. \"conservative\" means cautious, traditional, or moderate (e.g., a conservative estimate).",
        "D": "Incorrect. \"considerate\" describes a person who is thoughtful of others; cannot describe inanimate information."
    }
},

  141: {
    "questionNumber": 141,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Newspaper Article: Evergreen Department Store",
    "passageType": "Article",
    "passageText": "The Evergreen Department Store has been hit hard by the current recession. Sales have been [141] ________ at a rapid rate. \"Fewer and fewer customers are coming into the store,\" says Violet Dupree, floor manager at Evergreen. Ms. Dupree explained that earnings during the past fiscal year were the worst the store had ever seen since it opened for business 25 years ago. She went on to say, \"The worst part of it is that we have had to [142] ________ a number of fine employees.\" Job loss is becoming a more widespread problem as the recession deepens, and applications for unemployment [143] ________ are on the rise. Evergreen is just one more in a long list of local businesses that have been falling victim to the current economic crisis.",
    "questionText": "Choose the word or phrase that best completes statement 141:\n\"Sales have been ________ at a rapid rate.\"",
    "options": [
        {
            "label": "A",
            "text": "decreasing"
        },
        {
            "label": "B",
            "text": "increasing"
        },
        {
            "label": "C",
            "text": "stabilizing"
        },
        {
            "label": "D",
            "text": "advertising"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"decreasing\" fits the passage context. The store has been \"hit hard by the current recession\", earnings were \"the worst the store had ever seen\", and \"fewer and fewer customers are coming\", meaning sales are dropping rapidly.",
    "grammarOrReadingRule": {
        "title": "Context Clues & Trend Consistency",
        "description": "In text completion, vocabulary must match the prevailing narrative tone and factual context. Severe economic recession logically entails decreasing sales.",
        "keyTakeaway": "hit hard by recession + worst earnings -> sales decreasing."
    },
    "optionExplanations": {
        "A": "Correct. Accurately reflects the steep decline in revenue and customers described.",
        "B": "Incorrect. \"increasing\" contradicts the stated recession and worst earnings ever.",
        "C": "Incorrect. \"stabilizing\" means leveling off or becoming steady; the passage describes an ongoing severe downturn.",
        "D": "Incorrect. \"advertising\" does not make semantic sense in this position (*Sales have been advertising at a rapid rate*)."
    }
},

  142: {
    "questionNumber": 142,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Newspaper Article: Evergreen Department Store",
    "passageType": "Article",
    "passageText": "The Evergreen Department Store has been hit hard by the current recession. Sales have been [141] ________ at a rapid rate. \"Fewer and fewer customers are coming into the store,\" says Violet Dupree, floor manager at Evergreen. Ms. Dupree explained that earnings during the past fiscal year were the worst the store had ever seen since it opened for business 25 years ago. She went on to say, \"The worst part of it is that we have had to [142] ________ a number of fine employees.\" Job loss is becoming a more widespread problem as the recession deepens, and applications for unemployment [143] ________ are on the rise. Evergreen is just one more in a long list of local businesses that have been falling victim to the current economic crisis.",
    "questionText": "Choose the word or phrase that best completes statement 142:\n\"The worst part of it is that we have had to ________ a number of fine employees.\"",
    "options": [
        {
            "label": "A",
            "text": "train"
        },
        {
            "label": "B",
            "text": "lay off"
        },
        {
            "label": "C",
            "text": "take on"
        },
        {
            "label": "D",
            "text": "interview"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"lay off\" means to terminate employees' jobs due to economic necessity or shortage of work. The very next sentence confirms this by discussing \"Job loss is becoming a more widespread problem\".",
    "grammarOrReadingRule": {
        "title": "Phrasal Verb: lay off (terminate employment due to downsizing)",
        "description": "\"Lay off\" is the established business term for cutting staff due to financial hardship. The follow-up sentence on \"Job loss\" confirms this choice.",
        "keyTakeaway": "had to lay off employees (terminate jobs due to economic downturn)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"train\" means to instruct; training employees is positive, not \"the worst part of it\" during job loss.",
        "B": "Correct. Means dismissing staff due to economic hardship.",
        "C": "Incorrect. \"take on\" means to hire or employ new staff, which is the opposite of downsizing.",
        "D": "Incorrect. \"interview\" means screening candidates for hiring, not terminating employees."
    }
},

  143: {
    "questionNumber": 143,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Newspaper Article: Evergreen Department Store",
    "passageType": "Article",
    "passageText": "The Evergreen Department Store has been hit hard by the current recession. Sales have been [141] ________ at a rapid rate. \"Fewer and fewer customers are coming into the store,\" says Violet Dupree, floor manager at Evergreen. Ms. Dupree explained that earnings during the past fiscal year were the worst the store had ever seen since it opened for business 25 years ago. She went on to say, \"The worst part of it is that we have had to [142] ________ a number of fine employees.\" Job loss is becoming a more widespread problem as the recession deepens, and applications for unemployment [143] ________ are on the rise. Evergreen is just one more in a long list of local businesses that have been falling victim to the current economic crisis.",
    "questionText": "Choose the word or phrase that best completes statement 143:\n\"...and applications for unemployment ________ are on the rise.\"",
    "options": [
        {
            "label": "A",
            "text": "beneficiaries"
        },
        {
            "label": "B",
            "text": "benefactors"
        },
        {
            "label": "C",
            "text": "beneficial"
        },
        {
            "label": "D",
            "text": "benefits"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"unemployment benefits\" is the established compound noun for government or institutional financial assistance provided to unemployed workers.",
    "grammarOrReadingRule": {
        "title": "Compound Noun: unemployment benefits",
        "description": "In labor and government economics, financial aid payments given to jobless workers are called \"unemployment benefits\".",
        "keyTakeaway": "applications for unemployment benefits (government financial assistance)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"beneficiaries\" refers to the individual people who receive funds; people do not apply for \"unemployment beneficiaries\".",
        "B": "Incorrect. \"benefactors\" refers to charitable donors who give money to organizations.",
        "C": "Incorrect. \"beneficial\" is an adjective meaning helpful; a noun is required after the noun adjunct \"unemployment\".",
        "D": "Correct. Standard noun for financial payments granted during unemployment."
    }
},

  144: {
    "questionNumber": 144,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Letter of Recommendation for Andrew Richardson",
    "passageType": "Letter",
    "passageText": "April 21, 20--\n\nMartha Dinsmore\nPet Supply Company\n3774 State Street\nWestminster, VA 22901\n\nDear Ms. Dinsmore,\n\nThis is to serve as a letter of recommendation for Andrew Richardson, a former employee of my company, PT, Inc. Mr. Richardson [144] ________ for my company for three years, from June of 20-- until he left to continue his university studies two years ago. Mr. Richardson was a great asset to my company. He always fulfilled his responsibilities in a careful and thorough manner. He was also extremely [145] ________. We could always count on him to do what he promised to do. He was eager to pursue professional development opportunities and attended a number of training workshops while employed by PT. His upbeat personality was also a great addition to our workplace. I think everyone on the PT staff would agree that it was indeed a pleasure to work with [146] ________.\n\nI highly recommend Mr. Richardson for the position he has applied for at your company. If you have any questions, please don't hesitate to contact me.\n\nSincerely,\nPatricia Thompson\nPresident",
    "questionText": "Choose the word or phrase that best completes statement 144:\n\"Mr. Richardson ________ for my company for three years, from June of 20-- until he left to continue his university studies two years ago.\"",
    "options": [
        {
            "label": "A",
            "text": "works"
        },
        {
            "label": "B",
            "text": "worked"
        },
        {
            "label": "C",
            "text": "has worked"
        },
        {
            "label": "D",
            "text": "had worked"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"worked\" is the simple past tense. The employment period is a completed historical event that ended in the past (\"until he left... two years ago\"). Completed past events with clear end-points use simple past.",
    "grammarOrReadingRule": {
        "title": "Simple Past for Completed Past Events: worked",
        "description": "When an employment duration began and concluded in the past (\"until he left... two years ago\"), use the simple past tense.",
        "keyTakeaway": "worked for three years until he left (completed past status)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"works\" is simple present; Richardson is a former employee who left two years ago.",
        "B": "Correct. Simple past reflecting completed employment.",
        "C": "Incorrect. \"has worked\" is present perfect, implying he still works there today, which contradicts \"former employee\".",
        "D": "Incorrect. \"had worked\" is past perfect; simple past is standard when narrating historical past events without an earlier past comparison point."
    }
},

  145: {
    "questionNumber": 145,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Letter of Recommendation for Andrew Richardson",
    "passageType": "Letter",
    "passageText": "April 21, 20--\n\nMartha Dinsmore\nPet Supply Company\n3774 State Street\nWestminster, VA 22901\n\nDear Ms. Dinsmore,\n\nThis is to serve as a letter of recommendation for Andrew Richardson, a former employee of my company, PT, Inc. Mr. Richardson [144] ________ for my company for three years, from June of 20-- until he left to continue his university studies two years ago. Mr. Richardson was a great asset to my company. He always fulfilled his responsibilities in a careful and thorough manner. He was also extremely [145] ________. We could always count on him to do what he promised to do. He was eager to pursue professional development opportunities and attended a number of training workshops while employed by PT. His upbeat personality was also a great addition to our workplace. I think everyone on the PT staff would agree that it was indeed a pleasure to work with [146] ________.\n\nI highly recommend Mr. Richardson for the position he has applied for at your company. If you have any questions, please don't hesitate to contact me.\n\nSincerely,\nPatricia Thompson\nPresident",
    "questionText": "Choose the word or phrase that best completes statement 145:\n\"He was also extremely ________. We could always count on him to do what he promised to do.\"",
    "options": [
        {
            "label": "A",
            "text": "punctual"
        },
        {
            "label": "B",
            "text": "prepared"
        },
        {
            "label": "C",
            "text": "reliable"
        },
        {
            "label": "D",
            "text": "organized"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"reliable\" means dependable or trustworthy. The very next sentence provides the explicit definition: \"We could always count on him to do what he promised to do\". That is the exact meaning of reliable.",
    "grammarOrReadingRule": {
        "title": "Definition by Subsequent Context: reliable = count on him to do what he promised",
        "description": "When an adjective is immediately defined or supported by the following sentence, choose the term that matches that precise behavior.",
        "keyTakeaway": "count on him to do what he promised -> reliable."
    },
    "optionExplanations": {
        "A": "Incorrect. \"punctual\" specifically means on-time for appointments; keeping promises is broader dependability.",
        "B": "Incorrect. \"prepared\" means ready with materials or knowledge, not fulfilling commitments.",
        "C": "Correct. Directly corresponds to being someone people can count on to keep promises.",
        "D": "Incorrect. \"organized\" means methodical and tidy, not necessarily dependable in keeping promises."
    }
},

  146: {
    "questionNumber": 146,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Letter of Recommendation for Andrew Richardson",
    "passageType": "Letter",
    "passageText": "April 21, 20--\n\nMartha Dinsmore\nPet Supply Company\n3774 State Street\nWestminster, VA 22901\n\nDear Ms. Dinsmore,\n\nThis is to serve as a letter of recommendation for Andrew Richardson, a former employee of my company, PT, Inc. Mr. Richardson [144] ________ for my company for three years, from June of 20-- until he left to continue his university studies two years ago. Mr. Richardson was a great asset to my company. He always fulfilled his responsibilities in a careful and thorough manner. He was also extremely [145] ________. We could always count on him to do what he promised to do. He was eager to pursue professional development opportunities and attended a number of training workshops while employed by PT. His upbeat personality was also a great addition to our workplace. I think everyone on the PT staff would agree that it was indeed a pleasure to work with [146] ________.\n\nI highly recommend Mr. Richardson for the position he has applied for at your company. If you have any questions, please don't hesitate to contact me.\n\nSincerely,\nPatricia Thompson\nPresident",
    "questionText": "Choose the word or phrase that best completes statement 146:\n\"I think everyone on the PT staff would agree that it was indeed a pleasure to work with ________.\"",
    "options": [
        {
            "label": "A",
            "text": "he"
        },
        {
            "label": "B",
            "text": "us"
        },
        {
            "label": "C",
            "text": "her"
        },
        {
            "label": "D",
            "text": "him"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"him\" is the third-person masculine singular objective pronoun. Following the preposition \"with\", an object pronoun referring back to Andrew Richardson (\"him\") is required.",
    "grammarOrReadingRule": {
        "title": "Objective Pronoun After Preposition: preposition + Object Pronoun (with him)",
        "description": "Prepositions must be followed by objective pronouns (me, him, her, us, them). Mr. Richardson requires the masculine singular object pronoun \"him\".",
        "keyTakeaway": "a pleasure to work with him (objective pronoun referring to Mr. Richardson)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"he\" is a subjective pronoun; prepositions require objective pronouns (*with he is ungrammatical).",
        "B": "Incorrect. \"us\" is first-person plural; the letter is praising Andrew Richardson, not the remaining staff.",
        "C": "Incorrect. \"her\" is feminine; Richardson is referred to as \"Mr. Richardson\" and \"he\".",
        "D": "Correct. Masculine singular objective pronoun referring to Andrew Richardson."
    }
},

  147: {
    "questionNumber": 147,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Store Policy Regarding Returned Merchandise",
    "passageType": "Notice",
    "passageText": "STORE POLICY REGARDING RETURNED MERCHANDISE\n\nCustomer satisfaction is our top priority. If you are dissatisfied with your purchase for any reason, you may return it to the store for a full [147] ________, no questions asked, providing the following conditions are met:\n\n• The item is returned with its original packaging intact.\n• The item is accompanied by the store receipt.\n• The item is returned within 30 days of purchase.\n\nCustomers returning items after 30 days but within 90 days of purchase or without [148] ________ original packaging will receive store credit. We are sorry but we cannot accept returns on items after 90 days of the purchase date or without a store receipt. Any questions about the return policy should [149] ________ to the Management Office.",
    "questionText": "Choose the word or phrase that best completes statement 147:\n\"...you may return it to the store for a full ________, no questions asked...\"",
    "options": [
        {
            "label": "A",
            "text": "refund"
        },
        {
            "label": "B",
            "text": "refusal"
        },
        {
            "label": "C",
            "text": "referral"
        },
        {
            "label": "D",
            "text": "restoration"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"refund\" is the noun meaning repayment of money to a customer for returned goods. \"A full refund\" is the standard commercial collocation for returning 100% of the purchase price.",
    "grammarOrReadingRule": {
        "title": "Retail Collocation: return for a full refund",
        "description": "In retail store policies, dissatisfied customers return goods for a \"full refund\" (money back) or \"store credit\".",
        "keyTakeaway": "return for a full refund (repayment of purchase price)."
    },
    "optionExplanations": {
        "A": "Correct. Standard retail term for returning money to customers.",
        "B": "Incorrect. \"refusal\" means saying no or rejecting; contradictory in a customer satisfaction policy.",
        "C": "Incorrect. \"referral\" means directing someone to another professional or service.",
        "D": "Incorrect. \"restoration\" means repairing an antique or building to original condition."
    }
},

  148: {
    "questionNumber": 148,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Store Policy Regarding Returned Merchandise",
    "passageType": "Notice",
    "passageText": "STORE POLICY REGARDING RETURNED MERCHANDISE\n\nCustomer satisfaction is our top priority. If you are dissatisfied with your purchase for any reason, you may return it to the store for a full [147] ________, no questions asked, providing the following conditions are met:\n\n• The item is returned with its original packaging intact.\n• The item is accompanied by the store receipt.\n• The item is returned within 30 days of purchase.\n\nCustomers returning items after 30 days but within 90 days of purchase or without [148] ________ original packaging will receive store credit. We are sorry but we cannot accept returns on items after 90 days of the purchase date or without a store receipt. Any questions about the return policy should [149] ________ to the Management Office.",
    "questionText": "Choose the word or phrase that best completes statement 148:\n\"Customers returning items after 30 days but within 90 days of purchase or without ________ original packaging will receive store credit.\"",
    "options": [
        {
            "label": "A",
            "text": "its"
        },
        {
            "label": "B",
            "text": "his"
        },
        {
            "label": "C",
            "text": "their"
        },
        {
            "label": "D",
            "text": "your"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"their\" is the plural possessive pronoun agreeing with the plural antecedent \"items\": \"Customers returning items... without their original packaging\".",
    "grammarOrReadingRule": {
        "title": "Pronoun-Antecedent Agreement: plural items -> their packaging",
        "description": "Possessive adjectives must agree in grammatical number with the noun they refer to. Plural \"items\" takes plural \"their\".",
        "keyTakeaway": "returning items ... without their packaging (plural pronoun agreement)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"its\" is singular; cannot refer to plural \"items\".",
        "B": "Incorrect. \"his\" is singular masculine; cannot refer to inanimate items.",
        "C": "Correct. Plural possessive pronoun agreeing with \"items\".",
        "D": "Incorrect. \"your\" is second-person; does not match third-person descriptive noun \"items\"."
    }
},

  149: {
    "questionNumber": 149,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Store Policy Regarding Returned Merchandise",
    "passageType": "Notice",
    "passageText": "STORE POLICY REGARDING RETURNED MERCHANDISE\n\nCustomer satisfaction is our top priority. If you are dissatisfied with your purchase for any reason, you may return it to the store for a full [147] ________, no questions asked, providing the following conditions are met:\n\n• The item is returned with its original packaging intact.\n• The item is accompanied by the store receipt.\n• The item is returned within 30 days of purchase.\n\nCustomers returning items after 30 days but within 90 days of purchase or without [148] ________ original packaging will receive store credit. We are sorry but we cannot accept returns on items after 90 days of the purchase date or without a store receipt. Any questions about the return policy should [149] ________ to the Management Office.",
    "questionText": "Choose the word or phrase that best completes statement 149:\n\"Any questions about the return policy should ________ to the Management Office.\"",
    "options": [
        {
            "label": "A",
            "text": "direct"
        },
        {
            "label": "B",
            "text": "directs"
        },
        {
            "label": "C",
            "text": "directed"
        },
        {
            "label": "D",
            "text": "be directed"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"be directed\" forms the modal passive voice (\"modal should + be + past participle\"). The subject \"questions\" cannot actively direct anything; questions are directed by customers to the office.",
    "grammarOrReadingRule": {
        "title": "Modal Passive Voice: Modal + be + Past Participle",
        "description": "When the subject is inanimate and receives the action, use modal passive: should be + past participle.",
        "keyTakeaway": "questions should be directed to the office (passive modal voice)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"direct\" is active base form; questions cannot actively direct.",
        "B": "Incorrect. \"directs\" is third-person singular active; modals cannot be followed by -s inflections.",
        "C": "Incorrect. \"directed\" is bare past participle; modals require auxiliary \"be\" for passive.",
        "D": "Correct. Modal passive voice (\"should be directed\")."
    }
},

  150: {
    "questionNumber": 150,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Advertisement: Misty View Office Complex",
    "passageType": "Advertisement",
    "passageText": "Misty View Office Complex has several office spaces for rent. Misty View is [150] ________ located near several bus lines and is just a short, five-block walk from the subway station. Your clients who drive will never have to worry about finding a place to park. Misty View has [151] ________ visitor parking. Tenant parking is also available for an additional monthly fee. Rents start at $2 per square foot, all utilities included. Six-month, one-year, and five-year leases are available. [152] ________ this opportunity to locate your business in the city's prime office building. Call our leasing office today to make an appointment to visit Misty View and find out why it has become the city's most desirable business location.",
    "questionText": "Choose the word or phrase that best completes statement 150:\n\"Misty View is ________ located near several bus lines...\"",
    "options": [
        {
            "label": "A",
            "text": "convenient"
        },
        {
            "label": "B",
            "text": "convenience"
        },
        {
            "label": "C",
            "text": "conveniently"
        },
        {
            "label": "D",
            "text": "conventionally"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"conveniently\" is an adverb modifying the participle adjective \"located\". The real estate collocation \"conveniently located near [transit]\" is the standard commercial expression.",
    "grammarOrReadingRule": {
        "title": "Adverb Modifying Participle: Adverb + located",
        "description": "Participle adjectives like \"located\" are modified by adverbs ending in -ly (\"conveniently located\").",
        "keyTakeaway": "conveniently located near bus lines (adverb modifying located)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"convenient\" is an adjective; adjectives cannot modify other adjectives or participles (*convenient located).",
        "B": "Incorrect. \"convenience\" is a noun and cannot modify \"located\".",
        "C": "Correct. Adverb modifying \"located\" in the standard collocation \"conveniently located\".",
        "D": "Incorrect. \"conventionally\" means according to traditional customs, which does not fit physical proximity to transit."
    }
},

  151: {
    "questionNumber": 151,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Advertisement: Misty View Office Complex",
    "passageType": "Advertisement",
    "passageText": "Misty View Office Complex has several office spaces for rent. Misty View is [150] ________ located near several bus lines and is just a short, five-block walk from the subway station. Your clients who drive will never have to worry about finding a place to park. Misty View has [151] ________ visitor parking. Tenant parking is also available for an additional monthly fee. Rents start at $2 per square foot, all utilities included. Six-month, one-year, and five-year leases are available. [152] ________ this opportunity to locate your business in the city's prime office building. Call our leasing office today to make an appointment to visit Misty View and find out why it has become the city's most desirable business location.",
    "questionText": "Choose the word or phrase that best completes statement 151:\n\"Your clients who drive will never have to worry about finding a place to park. Misty View has ________ visitor parking.\"",
    "options": [
        {
            "label": "A",
            "text": "scarce"
        },
        {
            "label": "B",
            "text": "ample"
        },
        {
            "label": "C",
            "text": "covered"
        },
        {
            "label": "D",
            "text": "underground"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"ample\" means plentiful or abundant. The preceding sentence highlights that clients \"will never have to worry about finding a place to park\", which is directly justified by having ample (plentiful) parking.",
    "grammarOrReadingRule": {
        "title": "Contextual Semantic Agreement: never worry about parking -> ample parking",
        "description": "In Part 6, choose the adjective that logically supports the surrounding claims. Never worrying about parking requires an adjective indicating plenty of space (\"ample\").",
        "keyTakeaway": "never worry about finding parking because parking is ample (plentiful)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"scarce\" means rare or in short supply, which directly contradicts never having to worry.",
        "B": "Correct. Means plentiful, directly supporting the guarantee that parking is always available.",
        "C": "Incorrect. \"covered\" indicates having a roof, which does not guarantee that spaces will be easy to find.",
        "D": "Incorrect. \"underground\" indicates location below street level, but does not indicate abundant capacity."
    }
},

  152: {
    "questionNumber": 152,
    "part": "Part 6: Text Completion",
    "partShort": "Part 6",
    "passageTitle": "Advertisement: Misty View Office Complex",
    "passageType": "Advertisement",
    "passageText": "Misty View Office Complex has several office spaces for rent. Misty View is [150] ________ located near several bus lines and is just a short, five-block walk from the subway station. Your clients who drive will never have to worry about finding a place to park. Misty View has [151] ________ visitor parking. Tenant parking is also available for an additional monthly fee. Rents start at $2 per square foot, all utilities included. Six-month, one-year, and five-year leases are available. [152] ________ this opportunity to locate your business in the city's prime office building. Call our leasing office today to make an appointment to visit Misty View and find out why it has become the city's most desirable business location.",
    "questionText": "Choose the word or phrase that best completes statement 152:\n\"________ this opportunity to locate your business in the city's prime office building.\"",
    "options": [
        {
            "label": "A",
            "text": "Miss"
        },
        {
            "label": "B",
            "text": "You don't miss"
        },
        {
            "label": "C",
            "text": "Don't miss"
        },
        {
            "label": "D",
            "text": "Shouldn't miss"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "\"Don't miss\" is the negative imperative mood (\"Don't + base verb\"). In advertising, \"Don't miss this opportunity\" is the standard persuasive call-to-action urging readers to seize the offer.",
    "grammarOrReadingRule": {
        "title": "Imperative Mood in Advertising Calls-to-Action: Don't + Base Verb",
        "description": "Direct promotional appeals use the imperative mood without an explicit subject pronoun: Don't miss this opportunity.",
        "keyTakeaway": "Don't miss this opportunity (negative imperative form)."
    },
    "optionExplanations": {
        "A": "Incorrect. \"Miss\" tells the customer to pass up or lose the opportunity, contradicting the advertisement's goal.",
        "B": "Incorrect. \"You don't miss\" is a declarative statement describing habitual behavior rather than an imperative call-to-action.",
        "C": "Correct. Negative imperative call-to-action urging the reader not to let the chance pass by.",
        "D": "Incorrect. \"Shouldn't miss\" is missing a subject pronoun to be a grammatically complete clause."
    }
},

  153: {
    "questionNumber": 153,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Park and Smith Financial Planning",
    "passageType": "Article",
    "passageText": "Park and Smith, a financial planning company based in Lakeview, has opened a branch office in downtown Salem in the building owned by the Salem Office Properties real estate company. Park and Smith is taking over office space formerly occupied by the law offices of James Robertson. The space had been vacant for a year and a half. The new Park and Smith office was open for business as of yesterday. Greta Park, president of Park and Smith, says that her company chose the Salem location because of a rising demand for financial planning services in the area. \"Salem is a growing community,\" she explained, \"and the town's citizens are becoming more affluent. It is just the type of community where services such as ours are needed.\" Park and Smith closed its branch offices in Johnstown and Freeburg at the end of last year. These communities are close enough to Lakeview to be served by the main office there, Ms. Park explained, but having an office in Salem will facilitate expanding services to the entire eastern part of the state. The branch's opening comes just a few months after the opening of the PD Miller stock brokerage firm at the Salem Center office complex.",
    "questionText": "What kind of a business is Smith and Park?",
    "options": [
        {
            "label": "A",
            "text": "Financial planning"
        },
        {
            "label": "B",
            "text": "Law office"
        },
        {
            "label": "C",
            "text": "Real estate"
        },
        {
            "label": "D",
            "text": "Stock brokerage"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "The first sentence explicitly states: \"Park and Smith, a financial planning company based in Lakeview, has opened a branch office...\".",
    "grammarOrReadingRule": {
        "title": "Direct Factual Identification in Business Articles",
        "description": "Look for appositive noun phrases directly following the company name in the opening sentence that define its business domain.",
        "keyTakeaway": "Park and Smith, a financial planning company... -> Financial planning."
    },
    "optionExplanations": {
        "A": "Correct. Directly stated in the first sentence of the article.",
        "B": "Incorrect. Law offices of James Robertson was the former tenant of the office space, not Park and Smith.",
        "C": "Incorrect. Salem Office Properties is the real estate company that owns the building.",
        "D": "Incorrect. PD Miller is a stock brokerage firm that opened nearby in Salem."
    }
},

  154: {
    "questionNumber": 154,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Park and Smith Financial Planning",
    "passageType": "Article",
    "passageText": "Park and Smith, a financial planning company based in Lakeview, has opened a branch office in downtown Salem in the building owned by the Salem Office Properties real estate company. Park and Smith is taking over office space formerly occupied by the law offices of James Robertson. The space had been vacant for a year and a half. The new Park and Smith office was open for business as of yesterday. Greta Park, president of Park and Smith, says that her company chose the Salem location because of a rising demand for financial planning services in the area. \"Salem is a growing community,\" she explained, \"and the town's citizens are becoming more affluent. It is just the type of community where services such as ours are needed.\" Park and Smith closed its branch offices in Johnstown and Freeburg at the end of last year. These communities are close enough to Lakeview to be served by the main office there, Ms. Park explained, but having an office in Salem will facilitate expanding services to the entire eastern part of the state. The branch's opening comes just a few months after the opening of the PD Miller stock brokerage firm at the Salem Center office complex.",
    "questionText": "When did Park and Smith open its branch office in Salem?",
    "options": [
        {
            "label": "A",
            "text": "Yesterday"
        },
        {
            "label": "B",
            "text": "A few months ago"
        },
        {
            "label": "C",
            "text": "At the end of last year"
        },
        {
            "label": "D",
            "text": "A year and a half ago"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "The article explicitly states: \"The new Park and Smith office was open for business as of yesterday.\"",
    "grammarOrReadingRule": {
        "title": "Mapping Events to Distinct Time Markers",
        "description": "Separate multiple time markers in a text by their associated actions: opened = yesterday; vacant = a year and a half; closed other branches = end of last year.",
        "keyTakeaway": "office was open for business as of yesterday -> Yesterday."
    },
    "optionExplanations": {
        "A": "Correct. Directly stated as the opening date: \"open for business as of yesterday\".",
        "B": "Incorrect. \"A few months ago\" refers to when the PD Miller brokerage firm opened.",
        "C": "Incorrect. \"At the end of last year\" is when Park and Smith closed its branches in Johnstown and Freeburg.",
        "D": "Incorrect. \"A year and a half ago\" is how long the office space had been vacant."
    }
},

  155: {
    "questionNumber": 155,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Park and Smith Financial Planning",
    "passageType": "Article",
    "passageText": "Park and Smith, a financial planning company based in Lakeview, has opened a branch office in downtown Salem in the building owned by the Salem Office Properties real estate company. Park and Smith is taking over office space formerly occupied by the law offices of James Robertson. The space had been vacant for a year and a half. The new Park and Smith office was open for business as of yesterday. Greta Park, president of Park and Smith, says that her company chose the Salem location because of a rising demand for financial planning services in the area. \"Salem is a growing community,\" she explained, \"and the town's citizens are becoming more affluent. It is just the type of community where services such as ours are needed.\" Park and Smith closed its branch offices in Johnstown and Freeburg at the end of last year. These communities are close enough to Lakeview to be served by the main office there, Ms. Park explained, but having an office in Salem will facilitate expanding services to the entire eastern part of the state. The branch's opening comes just a few months after the opening of the PD Miller stock brokerage firm at the Salem Center office complex.",
    "questionText": "Why did Smith and Park open a branch office in Salem?",
    "options": [
        {
            "label": "A",
            "text": "They closed their other branch offices."
        },
        {
            "label": "B",
            "text": "It's close to the main office."
        },
        {
            "label": "C",
            "text": "There is a need for their services there."
        },
        {
            "label": "D",
            "text": "The rent is reasonable."
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "Greta Park explains that \"her company chose the Salem location because of a rising demand for financial planning services in the area\" and \"It is just the type of community where services such as ours are needed.\"",
    "grammarOrReadingRule": {
        "title": "Paraphrase Matching: rising demand -> need for their services",
        "description": "\"Rising demand for financial planning services\" and \"services such as ours are needed\" directly paraphrase \"There is a need for their services there\".",
        "keyTakeaway": "rising demand for financial planning services -> need for their services."
    },
    "optionExplanations": {
        "A": "Incorrect. Closing Johnstown and Freeburg branches was due to proximity to the main office, not the reason for picking Salem.",
        "B": "Incorrect. Salem was chosen because it allows expanding to the eastern state, unlike Johnstown which was close to the main office.",
        "C": "Correct. Paraphrases \"rising demand for financial planning services in the area\" and \"services such as ours are needed\".",
        "D": "Incorrect. Rent is never mentioned in the article."
    }
},

  156: {
    "questionNumber": 156,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Park and Smith Financial Planning",
    "passageType": "Article",
    "passageText": "Park and Smith, a financial planning company based in Lakeview, has opened a branch office in downtown Salem in the building owned by the Salem Office Properties real estate company. Park and Smith is taking over office space formerly occupied by the law offices of James Robertson. The space had been vacant for a year and a half. The new Park and Smith office was open for business as of yesterday. Greta Park, president of Park and Smith, says that her company chose the Salem location because of a rising demand for financial planning services in the area. \"Salem is a growing community,\" she explained, \"and the town's citizens are becoming more affluent. It is just the type of community where services such as ours are needed.\" Park and Smith closed its branch offices in Johnstown and Freeburg at the end of last year. These communities are close enough to Lakeview to be served by the main office there, Ms. Park explained, but having an office in Salem will facilitate expanding services to the entire eastern part of the state. The branch's opening comes just a few months after the opening of the PD Miller stock brokerage firm at the Salem Center office complex.",
    "questionText": "The word facilitate in line 24 is closest in meaning to",
    "options": [
        {
            "label": "A",
            "text": "fund."
        },
        {
            "label": "B",
            "text": "assist."
        },
        {
            "label": "C",
            "text": "impede."
        },
        {
            "label": "D",
            "text": "upgrade."
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "\"facilitate\" means to make an action or process easier, or to help/assist in bringing it about. Having an office in Salem will assist in expanding their services across the eastern region.",
    "grammarOrReadingRule": {
        "title": "Vocabulary-in-Context: facilitate -> assist / make easier",
        "description": "\"Facilitate\" means to assist, help, or make easier (from Latin facilis, meaning easy).",
        "keyTakeaway": "facilitate expanding services -> assist in expanding services."
    },
    "optionExplanations": {
        "A": "Incorrect. \"fund\" means to provide money or financing for an activity.",
        "B": "Correct. \"assist\" is the closest synonym for facilitate in this context.",
        "C": "Incorrect. \"impede\" is an antonym meaning to obstruct or hinder.",
        "D": "Incorrect. \"upgrade\" means to raise to a higher standard or improve equipment."
    }
},

  157: {
    "questionNumber": 157,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Good Citizen Prize for Boris Lutz",
    "passageType": "Article",
    "passageText": "Boris Lutz of Greenfield recently won the Good Citizen Prize for service to the local community. The prize is given annually at the Greenfield Bank to a bank employee who has demonstrated good citizenship by contributing to community projects in some way. The purpose is to promote community goodwill and acknowledge bank employees' contributions to the greater Greenfield community. Lutz, a teller at the Simsbury Village branch of the bank, received the honor from his bank coworkers. \"Boris has always given generously of his time to community groups,\" explained his supervisor, Doris Wilson. \"We thought it was about time his contributions were acknowledged. We at the bank are all so pleased that he is this year's winner.\" This is the second year the prize has been given. Last year the honor went to Maria Pendleton, assistant to the bank's president.",
    "questionText": "What did Boris Lutz get?",
    "options": [
        {
            "label": "A",
            "text": "A bank account"
        },
        {
            "label": "B",
            "text": "A promotion"
        },
        {
            "label": "C",
            "text": "An assistant"
        },
        {
            "label": "D",
            "text": "An award"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "The first sentence states: \"Boris Lutz... recently won the Good Citizen Prize for service to the local community.\" A prize or honor is an award.",
    "grammarOrReadingRule": {
        "title": "Synonym Resolution: prize / honor -> award",
        "description": "\"Prize\" and \"honor\" are direct synonyms for \"award\".",
        "keyTakeaway": "won the Good Citizen Prize -> An award."
    },
    "optionExplanations": {
        "A": "Incorrect. He is a bank employee who won a prize, not someone opening an account.",
        "B": "Incorrect. No mention is made of a job promotion; he remains a bank teller.",
        "C": "Incorrect. He did not get an assistant; Maria Pendleton was the president's assistant.",
        "D": "Correct. \"Award\" directly matches the \"Good Citizen Prize\" he won."
    }
},

  158: {
    "questionNumber": 158,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Good Citizen Prize for Boris Lutz",
    "passageType": "Article",
    "passageText": "Boris Lutz of Greenfield recently won the Good Citizen Prize for service to the local community. The prize is given annually at the Greenfield Bank to a bank employee who has demonstrated good citizenship by contributing to community projects in some way. The purpose is to promote community goodwill and acknowledge bank employees' contributions to the greater Greenfield community. Lutz, a teller at the Simsbury Village branch of the bank, received the honor from his bank coworkers. \"Boris has always given generously of his time to community groups,\" explained his supervisor, Doris Wilson. \"We thought it was about time his contributions were acknowledged. We at the bank are all so pleased that he is this year's winner.\" This is the second year the prize has been given. Last year the honor went to Maria Pendleton, assistant to the bank's president.",
    "questionText": "What is Boris Lutz's job?",
    "options": [
        {
            "label": "A",
            "text": "Office assistant"
        },
        {
            "label": "B",
            "text": "Bank teller"
        },
        {
            "label": "C",
            "text": "Community organizer"
        },
        {
            "label": "D",
            "text": "Mayor of Greenfield"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "The article explicitly identifies his occupation: \"Lutz, a teller at the Simsbury Village branch of the bank, received the honor from his bank coworkers.\"",
    "grammarOrReadingRule": {
        "title": "Appositive Job Title Identification",
        "description": "Look for job nouns in apposition to the person's name: \"Lutz, a teller at the Simsbury Village branch...\".",
        "keyTakeaway": "Lutz, a teller at the bank -> Bank teller."
    },
    "optionExplanations": {
        "A": "Incorrect. Maria Pendleton was assistant to the bank president, not Lutz.",
        "B": "Correct. Directly stated: \"a teller at the Simsbury Village branch of the bank\".",
        "C": "Incorrect. He volunteers with community groups, but his employment job is a bank teller.",
        "D": "Incorrect. He lives in Greenfield, but is not the mayor."
    }
},

  159: {
    "questionNumber": 159,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Good Citizen Prize for Boris Lutz",
    "passageType": "Article",
    "passageText": "Boris Lutz of Greenfield recently won the Good Citizen Prize for service to the local community. The prize is given annually at the Greenfield Bank to a bank employee who has demonstrated good citizenship by contributing to community projects in some way. The purpose is to promote community goodwill and acknowledge bank employees' contributions to the greater Greenfield community. Lutz, a teller at the Simsbury Village branch of the bank, received the honor from his bank coworkers. \"Boris has always given generously of his time to community groups,\" explained his supervisor, Doris Wilson. \"We thought it was about time his contributions were acknowledged. We at the bank are all so pleased that he is this year's winner.\" This is the second year the prize has been given. Last year the honor went to Maria Pendleton, assistant to the bank's president.",
    "questionText": "How do Boris Lutz's coworkers feel about him?",
    "options": [
        {
            "label": "A",
            "text": "He's a helpful community member."
        },
        {
            "label": "B",
            "text": "He's a model employee."
        },
        {
            "label": "C",
            "text": "He's easy to get along with."
        },
        {
            "label": "D",
            "text": "He's their favorite colleague."
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "His supervisor Doris Wilson and coworkers note: \"Boris has always given generously of his time to community groups... We thought it was about time his contributions were acknowledged. We at the bank are all so pleased that he is this year's winner.\"",
    "grammarOrReadingRule": {
        "title": "Attitude and Sentiment Inference from Quotations",
        "description": "His coworkers awarded him for community contributions and praised his generous service to local groups, viewing him as a helpful community member.",
        "keyTakeaway": "given generously of his time to community groups -> helpful community member."
    },
    "optionExplanations": {
        "A": "Correct. Aligns with their praise of his generous time spent helping community groups.",
        "B": "Incorrect. The award and praise focus specifically on community service, not internal sales or job productivity.",
        "C": "Incorrect. No mention is made of his ease of getting along with others.",
        "D": "Incorrect. No statement declares him to be their \"favorite\" above all others."
    }
},

  160: {
    "questionNumber": 160,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Letter to the Editor: Proposed Holbrook Factory",
    "passageType": "Letter",
    "passageText": "To the Editor:\nI read with great concern the report in your newspaper this morning about the plans of the Holbrook Manufacturing Company to build a factory in this city. The project has received strong support from the city council, based on their belief that Holbrook will bring a significant number of jobs to our area and boost the local economy. Apparently, they are blind to the reality. Holbrook is well known for its innovative manufacturing methods, which are largely automated. Because of this, very little manual labor is required. Holbrook's system generally requires highly skilled technicians, who would likely come here from other places to work at the factory. There will be few, if any, jobs for local citizens. What do we get in return for this? A large, unsightly building that will require the destruction of natural areas and throw pollution into our air and water. The city council must approve Holbrook's project before they begin construction of the factory. Holbrook's board of directors, eager to break ground on the project as early as next month, have urged the city council to move forward with their vote, and it will take place tomorrow night rather than two weeks from now, as originally planned. This gives even less time for council members to develop an informed opinion. I strongly urge them not to bow to the pressure of Holbrook and to vote against the proposed project.\nSincerely,\nHenry Judson",
    "questionText": "Why did Henry Judson write this letter?",
    "options": [
        {
            "label": "A",
            "text": "To protest a new factory"
        },
        {
            "label": "B",
            "text": "To analyze the economy"
        },
        {
            "label": "C",
            "text": "To explain sources of pollution"
        },
        {
            "label": "D",
            "text": "To get elected to the city council"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "Henry Judson concludes his letter: \"I strongly urge them not to bow to the pressure of Holbrook and to vote against the proposed project.\" His entire letter protests the building of the new factory.",
    "grammarOrReadingRule": {
        "title": "Author's Main Purpose in an Opinion / Protest Letter",
        "description": "Look at the opening and closing sentences to find the primary purpose: urging the council to vote against the factory project (protesting it).",
        "keyTakeaway": "vote against the proposed project -> To protest a new factory."
    },
    "optionExplanations": {
        "A": "Correct. His stated goal is to convince the city council to vote against the factory project.",
        "B": "Incorrect. He discusses jobs and automated systems to counter claims, not to conduct a general economic study.",
        "C": "Incorrect. Pollution is cited as a negative consequence of the factory, not the academic subject of the letter.",
        "D": "Incorrect. There is no mention of running for political office."
    }
},

  161: {
    "questionNumber": 161,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Letter to the Editor: Proposed Holbrook Factory",
    "passageType": "Letter",
    "passageText": "To the Editor:\nI read with great concern the report in your newspaper this morning about the plans of the Holbrook Manufacturing Company to build a factory in this city. The project has received strong support from the city council, based on their belief that Holbrook will bring a significant number of jobs to our area and boost the local economy. Apparently, they are blind to the reality. Holbrook is well known for its innovative manufacturing methods, which are largely automated. Because of this, very little manual labor is required. Holbrook's system generally requires highly skilled technicians, who would likely come here from other places to work at the factory. There will be few, if any, jobs for local citizens. What do we get in return for this? A large, unsightly building that will require the destruction of natural areas and throw pollution into our air and water. The city council must approve Holbrook's project before they begin construction of the factory. Holbrook's board of directors, eager to break ground on the project as early as next month, have urged the city council to move forward with their vote, and it will take place tomorrow night rather than two weeks from now, as originally planned. This gives even less time for council members to develop an informed opinion. I strongly urge them not to bow to the pressure of Holbrook and to vote against the proposed project.\nSincerely,\nHenry Judson",
    "questionText": "What kind of people generally work at Holbrook?",
    "options": [
        {
            "label": "A",
            "text": "Manual laborers"
        },
        {
            "label": "B",
            "text": "Blind people"
        },
        {
            "label": "C",
            "text": "Trained specialists"
        },
        {
            "label": "D",
            "text": "Economists"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "The letter explains: \"Because of this, very little manual labor is required. Holbrook's system generally requires highly skilled technicians...\". Highly skilled technicians are trained specialists.",
    "grammarOrReadingRule": {
        "title": "Paraphrase Matching: highly skilled technicians -> trained specialists",
        "description": "\"Highly skilled technicians\" directly corresponds to \"Trained specialists\".",
        "keyTakeaway": "highly skilled technicians -> Trained specialists."
    },
    "optionExplanations": {
        "A": "Incorrect. The letter specifically states \"very little manual labor is required\".",
        "B": "Incorrect. The phrase \"blind to the reality\" is a metaphor describing the city council, not Holbrook's staff.",
        "C": "Correct. Paraphrases \"highly skilled technicians\".",
        "D": "Incorrect. Economists are not mentioned as Holbrook's factory workers."
    }
},

  162: {
    "questionNumber": 162,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Letter to the Editor: Proposed Holbrook Factory",
    "passageType": "Letter",
    "passageText": "To the Editor:\nI read with great concern the report in your newspaper this morning about the plans of the Holbrook Manufacturing Company to build a factory in this city. The project has received strong support from the city council, based on their belief that Holbrook will bring a significant number of jobs to our area and boost the local economy. Apparently, they are blind to the reality. Holbrook is well known for its innovative manufacturing methods, which are largely automated. Because of this, very little manual labor is required. Holbrook's system generally requires highly skilled technicians, who would likely come here from other places to work at the factory. There will be few, if any, jobs for local citizens. What do we get in return for this? A large, unsightly building that will require the destruction of natural areas and throw pollution into our air and water. The city council must approve Holbrook's project before they begin construction of the factory. Holbrook's board of directors, eager to break ground on the project as early as next month, have urged the city council to move forward with their vote, and it will take place tomorrow night rather than two weeks from now, as originally planned. This gives even less time for council members to develop an informed opinion. I strongly urge them not to bow to the pressure of Holbrook and to vote against the proposed project.\nSincerely,\nHenry Judson",
    "questionText": "When will the city council vote on the Holbrook project?",
    "options": [
        {
            "label": "A",
            "text": "This morning"
        },
        {
            "label": "B",
            "text": "Tomorrow night"
        },
        {
            "label": "C",
            "text": "Two weeks from now"
        },
        {
            "label": "D",
            "text": "Early next month"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "The letter states: \"Holbrook's board of directors... have urged the city council to move forward with their vote, and it will take place tomorrow night rather than two weeks from now, as originally planned.\"",
    "grammarOrReadingRule": {
        "title": "Rescheduled Timetable Details: Rescheduled Date vs. Original Plan",
        "description": "Distinguish the updated date from the original plan: the vote was moved up and \"will take place tomorrow night\".",
        "keyTakeaway": "vote... will take place tomorrow night -> Tomorrow night."
    },
    "optionExplanations": {
        "A": "Incorrect. \"This morning\" is when Judson read the newspaper report.",
        "B": "Correct. Directly stated as the new time of the city council vote.",
        "C": "Incorrect. \"Two weeks from now\" was the original schedule before it was moved forward.",
        "D": "Incorrect. \"Early next month\" is when Holbrook hopes to break ground if approved."
    }
},

  163: {
    "questionNumber": 163,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Letter to the Editor: Proposed Holbrook Factory",
    "passageType": "Letter",
    "passageText": "To the Editor:\nI read with great concern the report in your newspaper this morning about the plans of the Holbrook Manufacturing Company to build a factory in this city. The project has received strong support from the city council, based on their belief that Holbrook will bring a significant number of jobs to our area and boost the local economy. Apparently, they are blind to the reality. Holbrook is well known for its innovative manufacturing methods, which are largely automated. Because of this, very little manual labor is required. Holbrook's system generally requires highly skilled technicians, who would likely come here from other places to work at the factory. There will be few, if any, jobs for local citizens. What do we get in return for this? A large, unsightly building that will require the destruction of natural areas and throw pollution into our air and water. The city council must approve Holbrook's project before they begin construction of the factory. Holbrook's board of directors, eager to break ground on the project as early as next month, have urged the city council to move forward with their vote, and it will take place tomorrow night rather than two weeks from now, as originally planned. This gives even less time for council members to develop an informed opinion. I strongly urge them not to bow to the pressure of Holbrook and to vote against the proposed project.\nSincerely,\nHenry Judson",
    "questionText": "The word unsightly in line 10 is closest in meaning to",
    "options": [
        {
            "label": "A",
            "text": "attractive."
        },
        {
            "label": "B",
            "text": "enormous."
        },
        {
            "label": "C",
            "text": "costly."
        },
        {
            "label": "D",
            "text": "ugly."
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "\"unsightly\" means unpleasant to look at, unattractive, or ugly. The author describes the proposed factory as \"A large, unsightly building that will require the destruction of natural areas\".",
    "grammarOrReadingRule": {
        "title": "Vocabulary-in-Context: unsightly -> ugly / visually unpleasant",
        "description": "\"Unsightly\" (un- + sight + -ly) literally means unpleasant to the sight, i.e., ugly.",
        "keyTakeaway": "unsightly building -> ugly building."
    },
    "optionExplanations": {
        "A": "Incorrect. \"attractive\" is the direct antonym.",
        "B": "Incorrect. \"enormous\" describes size; the author already used \"large\" to describe its size separately (\"large, unsightly\").",
        "C": "Incorrect. \"costly\" means expensive.",
        "D": "Correct. Exact synonym for unsightly."
    }
},

  164: {
    "questionNumber": 164,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Advertisement: Mary's Lunch, Inc.",
    "passageType": "Advertisement",
    "passageText": "Mary's Lunch, Inc.\n\nYou work hard, and you deserve good food. Mary's Lunch, Inc. provides everything from snacks to four-course dinners for your conference, meeting, office party, or any other business occasion. We deliver to most downtown locations.\n\nMenu choices can be viewed on our website: www.maryslunch.com.\nOur planning consultants can help you plan your next event and will explain our pricing system. Simply call 987-3722 or stop by our office during normal business hours.",
    "questionText": "What kind of business is advertised?",
    "options": [
        {
            "label": "A",
            "text": "Kitchen supply"
        },
        {
            "label": "B",
            "text": "Grocery store"
        },
        {
            "label": "C",
            "text": "Catering"
        },
        {
            "label": "D",
            "text": "Restaurant"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "Mary's Lunch provides \"everything from snacks to four-course dinners for your conference, meeting, office party, or any other business occasion\" and \"deliver[s] to most downtown locations.\" Preparing and delivering food for events is catering.",
    "grammarOrReadingRule": {
        "title": "Business Classification from Service Descriptions",
        "description": "Providing delivered meals and planning dinners for conferences and parties defines a \"catering\" service.",
        "keyTakeaway": "food for conferences, meetings, and office parties delivered -> Catering."
    },
    "optionExplanations": {
        "A": "Incorrect. They supply prepared meals, not kitchen appliances or cooking equipment.",
        "B": "Incorrect. They provide catering for events, not raw supermarket groceries.",
        "C": "Correct. Preparing and delivering meals for corporate events is catering.",
        "D": "Incorrect. While related to dining, delivering event meals and four-course dinners for conferences is specifically catering."
    }
},

  165: {
    "questionNumber": 165,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Advertisement: Mary's Lunch, Inc.",
    "passageType": "Advertisement",
    "passageText": "Mary's Lunch, Inc.\n\nYou work hard, and you deserve good food. Mary's Lunch, Inc. provides everything from snacks to four-course dinners for your conference, meeting, office party, or any other business occasion. We deliver to most downtown locations.\n\nMenu choices can be viewed on our website: www.maryslunch.com.\nOur planning consultants can help you plan your next event and will explain our pricing system. Simply call 987-3722 or stop by our office during normal business hours.",
    "questionText": "How can someone planning an event get prices for food?",
    "options": [
        {
            "label": "A",
            "text": "Go to his or her office any evening"
        },
        {
            "label": "B",
            "text": "Go to his or her next event"
        },
        {
            "label": "C",
            "text": "Call a consultant"
        },
        {
            "label": "D",
            "text": "Check online"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "The ad states: \"Our planning consultants can help you plan your next event and will explain our pricing system. Simply call 987-3722...\". Clients learn the pricing system by calling a planning consultant.",
    "grammarOrReadingRule": {
        "title": "Locating Specific Procedural Information in Advertisements",
        "description": "Scan for pricing keywords: \"pricing system\" is explained by \"planning consultants\" whom you can reach by calling.",
        "keyTakeaway": "planning consultants will explain our pricing system... Simply call -> Call a consultant."
    },
    "optionExplanations": {
        "A": "Incorrect. The office is open during \"normal business hours\", not any evening.",
        "B": "Incorrect. Food prices must be determined before holding the event.",
        "C": "Correct. Calling 987-3722 connects clients to planning consultants who explain the pricing system.",
        "D": "Incorrect. The website only lists \"menu choices\", not the pricing system."
    }
},

  166: {
    "questionNumber": 166,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Advertisement: Babcock Career Opportunities",
    "passageType": "Advertisement",
    "passageText": "ATTENTION!\nBabcock is now hiring for positions in a variety of locations. We have fantastic opportunities available for writers, editors, and proofreaders. See below for a partial list of currently available positions.\n\nVisit the Careers page on our website to find out more and to apply for any of these positions. To access a particular job posting, copy and paste the job number into the search field on the Careers page. Or, browse through the list of available positions. When you find a position for which you are qualified, complete the online job application. You may also attach your resume. Letters of recommendation are not required at this point. Please do not call the office. All job application information is included on the website.\n\nNow hiring:\nProofreader. Job #4882\nRequires two years' experience OR proof of relevant training.\n\nAssistant Editor. Job #6874\nNo previous experience required. Must have a degree in English, journalism, or a related field.\n\nEditorial Intern. Job #5822\nNo previous experience required. Current college student preferred.\n\nStaff Writer. Job #5773\nRequires minimum of three years' experience in a similar position.",
    "questionText": "What kind of business is Babcock probably engaged in?",
    "options": [
        {
            "label": "A",
            "text": "Training"
        },
        {
            "label": "B",
            "text": "Publishing"
        },
        {
            "label": "C",
            "text": "Career counseling"
        },
        {
            "label": "D",
            "text": "Internet services"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "Babcock is hiring \"writers, editors, and proofreaders\", as well as \"editorial interns\" and \"staff writers\". Companies employing editorial and writing teams are in the publishing industry.",
    "grammarOrReadingRule": {
        "title": "Industry Inference from Job Descriptions",
        "description": "Hiring writers, proofreaders, and editors indicates a publishing business (books, magazines, or journals).",
        "keyTakeaway": "hiring writers, editors, proofreaders -> Publishing."
    },
    "optionExplanations": {
        "A": "Incorrect. Training is only mentioned as an alternative credential for proofreaders, not Babcock's business.",
        "B": "Correct. Editorial and writing positions characterize publishing houses.",
        "C": "Incorrect. Babcock is hiring employees for itself, not offering counseling services.",
        "D": "Incorrect. Internet services companies do not focus primarily on staff writers and proofreaders."
    }
},

  167: {
    "questionNumber": 167,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Advertisement: Babcock Career Opportunities",
    "passageType": "Advertisement",
    "passageText": "ATTENTION!\nBabcock is now hiring for positions in a variety of locations. We have fantastic opportunities available for writers, editors, and proofreaders. See below for a partial list of currently available positions.\n\nVisit the Careers page on our website to find out more and to apply for any of these positions. To access a particular job posting, copy and paste the job number into the search field on the Careers page. Or, browse through the list of available positions. When you find a position for which you are qualified, complete the online job application. You may also attach your resume. Letters of recommendation are not required at this point. Please do not call the office. All job application information is included on the website.\n\nNow hiring:\nProofreader. Job #4882\nRequires two years' experience OR proof of relevant training.\n\nAssistant Editor. Job #6874\nNo previous experience required. Must have a degree in English, journalism, or a related field.\n\nEditorial Intern. Job #5822\nNo previous experience required. Current college student preferred.\n\nStaff Writer. Job #5773\nRequires minimum of three years' experience in a similar position.",
    "questionText": "How can someone apply for a job at Babcock?",
    "options": [
        {
            "label": "A",
            "text": "Visit the website"
        },
        {
            "label": "B",
            "text": "Call the office"
        },
        {
            "label": "C",
            "text": "Mail a résumé"
        },
        {
            "label": "D",
            "text": "Write a letter"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "The ad instructs: \"Visit the Careers page on our website to find out more and to apply for any of these positions... complete the online job application. Please do not call the office.\"",
    "grammarOrReadingRule": {
        "title": "Application Instructions in Job Postings",
        "description": "Identify the explicit application procedure stated in the text: visiting the Careers page on the website.",
        "keyTakeaway": "Visit the Careers page on our website... complete online application -> Visit the website."
    },
    "optionExplanations": {
        "A": "Correct. Directly instructed: \"Visit the Careers page on our website... to apply\".",
        "B": "Incorrect. The ad explicitly warns: \"Please do not call the office\".",
        "C": "Incorrect. Candidates attach their résumé online; they do not mail it.",
        "D": "Incorrect. Letters of recommendation and postal mail are not used."
    }
},

  168: {
    "questionNumber": 168,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Advertisement: Babcock Career Opportunities",
    "passageType": "Advertisement",
    "passageText": "ATTENTION!\nBabcock is now hiring for positions in a variety of locations. We have fantastic opportunities available for writers, editors, and proofreaders. See below for a partial list of currently available positions.\n\nVisit the Careers page on our website to find out more and to apply for any of these positions. To access a particular job posting, copy and paste the job number into the search field on the Careers page. Or, browse through the list of available positions. When you find a position for which you are qualified, complete the online job application. You may also attach your resume. Letters of recommendation are not required at this point. Please do not call the office. All job application information is included on the website.\n\nNow hiring:\nProofreader. Job #4882\nRequires two years' experience OR proof of relevant training.\n\nAssistant Editor. Job #6874\nNo previous experience required. Must have a degree in English, journalism, or a related field.\n\nEditorial Intern. Job #5822\nNo previous experience required. Current college student preferred.\n\nStaff Writer. Job #5773\nRequires minimum of three years' experience in a similar position.",
    "questionText": "Which of the advertised jobs requires previous experience?",
    "options": [
        {
            "label": "A",
            "text": "Proofreader"
        },
        {
            "label": "B",
            "text": "Assistant editor"
        },
        {
            "label": "C",
            "text": "Editorial intern"
        },
        {
            "label": "D",
            "text": "Staff writer"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "Under Staff Writer (Job #5773), it strictly states: \"Requires minimum of three years' experience in a similar position.\" (Proofreader allows \"OR proof of relevant training\", while Assistant Editor and Editorial Intern require \"No previous experience\").",
    "grammarOrReadingRule": {
        "title": "Disqualifying Exceptions vs. Mandatory Requirements",
        "description": "Proofreader allows training instead of experience (\"OR proof of relevant training\"). Only Staff Writer strictly mandates prior experience (\"minimum of three years' experience\").",
        "keyTakeaway": "Staff Writer strictly requires minimum 3 years' experience -> Staff writer."
    },
    "optionExplanations": {
        "A": "Incorrect. Proofreader accepts \"proof of relevant training\" in lieu of experience.",
        "B": "Incorrect. Assistant Editor states: \"No previous experience required\".",
        "C": "Incorrect. Editorial Intern states: \"No previous experience required\".",
        "D": "Correct. Unconditionally requires a minimum of three years' experience in a similar position."
    }
},

  169: {
    "questionNumber": 169,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Invoice: WTF Office Renovators",
    "passageType": "Invoice",
    "passageText": "WTF Office Renovators\nP.O. Box 17\nNewforth, MA 01253\n\nDecember 16, 20--\nInvoice #004\n\nClient name:\nWilliams and Drivers Law Offices\n34 Highland Ave., Suite 5\nNewforth, MA 01253\n\nPainting, 2 rooms: $500\nCarpentry repair work: $750\nTotal due: $1,250\n\nPrevious account balance: $600\nPaid in full. Thank you!\n\nThe work described herein covers work completed during the month of November. Please pay the entire amount by the end of next month.\n\nThank you for your business.",
    "questionText": "What does $600 represent on this invoice?",
    "options": [
        {
            "label": "A",
            "text": "The payment due on this invoice"
        },
        {
            "label": "B",
            "text": "The remaining funds in the account"
        },
        {
            "label": "C",
            "text": "The amount billed on invoice #003"
        },
        {
            "label": "D",
            "text": "The previous funds in the account before this invoice"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "The invoice is numbered Invoice #004. It lists: \"Previous account balance: $600. Paid in full.\" The previous account balance represents the amount billed on the immediately preceding invoice, which was invoice #003.",
    "grammarOrReadingRule": {
        "title": "Sequential Accounting Document Inference: Previous Balance = Preceding Invoice",
        "description": "On Invoice #004, the \"Previous account balance\" of $600 represents the bill from the prior billing cycle (Invoice #003).",
        "keyTakeaway": "Invoice #004 previous balance -> The amount billed on invoice #003."
    },
    "optionExplanations": {
        "A": "Incorrect. The payment due on this current invoice is $1,250.",
        "B": "Incorrect. The $600 was a balance that was already paid in full, not remaining funds.",
        "C": "Correct. Represents the prior billing balance from Invoice #003.",
        "D": "Incorrect. It was a balance owed and paid, not account funds or cash balance."
    }
},

  170: {
    "questionNumber": 170,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Invoice: WTF Office Renovators",
    "passageType": "Invoice",
    "passageText": "WTF Office Renovators\nP.O. Box 17\nNewforth, MA 01253\n\nDecember 16, 20--\nInvoice #004\n\nClient name:\nWilliams and Drivers Law Offices\n34 Highland Ave., Suite 5\nNewforth, MA 01253\n\nPainting, 2 rooms: $500\nCarpentry repair work: $750\nTotal due: $1,250\n\nPrevious account balance: $600\nPaid in full. Thank you!\n\nThe work described herein covers work completed during the month of November. Please pay the entire amount by the end of next month.\n\nThank you for your business.",
    "questionText": "When is the bill due?",
    "options": [
        {
            "label": "A",
            "text": "November 30"
        },
        {
            "label": "B",
            "text": "December 16"
        },
        {
            "label": "C",
            "text": "December 31"
        },
        {
            "label": "D",
            "text": "January 31"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "The invoice is dated December 16. The payment terms state: \"Please pay the entire amount by the end of next month.\" The month following December is January, and the end of January is January 31.",
    "grammarOrReadingRule": {
        "title": "Calendar Calculation from Due Date Instructions: \"end of next month\"",
        "description": "Current document date: December 16. Deadline: \"end of next month\". Next month is January -> January 31.",
        "keyTakeaway": "Dated December 16 + pay by end of next month -> January 31."
    },
    "optionExplanations": {
        "A": "Incorrect. November 30 is the end of the month during which the renovation work was completed.",
        "B": "Incorrect. December 16 is the date the invoice was issued.",
        "C": "Incorrect. December 31 is the end of the current month, not next month.",
        "D": "Correct. The end of the month following December is January 31."
    }
},

  171: {
    "questionNumber": 171,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Safety Instructions: Telephone Product",
    "passageType": "Instructions",
    "passageText": "SAFETY INSTRUCTIONS\nTo avoid personal injury or property damage, follow these safety instructions when using this product:\n• Keep product away from radiators and other heat sources and in a place where air can circulate freely around it.\n• Do not make or receive calls while standing in or near water, such as a sink, bathtub, or swimming pool.\n• Do not place furniture or other items on top of the power cord.\n• Do not apply excess force when dialing. This could result in permanent damage to the buttons.\n• Disconnect product from electrical outlet before cleaning. Do not use liquid cleaners and do not immerse product in water. Instead, wipe thoroughly and gently with a damp cloth.\n• Avoid using product during an electrical storm.\n• If repair work is required, contact the manufacturer at the phone number listed on the front cover of this manual.",
    "questionText": "What kind of product are these instructions for?",
    "options": [
        {
            "label": "A",
            "text": "Power cord"
        },
        {
            "label": "B",
            "text": "Telephone"
        },
        {
            "label": "C",
            "text": "Bathtub"
        },
        {
            "label": "D",
            "text": "Radiator"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "The instructions warn: \"Do not make or receive calls while standing in or near water\" and \"Do not apply excess force when dialing. This could result in permanent damage to the buttons.\" A device used to dial and make or receive calls is a telephone.",
    "grammarOrReadingRule": {
        "title": "Product Identification from Functional Actions",
        "description": "Actions like \"make or receive calls\" and \"dialing... buttons\" uniquely define a telephone.",
        "keyTakeaway": "make or receive calls + dialing buttons -> Telephone."
    },
    "optionExplanations": {
        "A": "Incorrect. A power cord is just one component connecting the device to power.",
        "B": "Correct. Making calls and dialing buttons identify the product as a telephone.",
        "C": "Incorrect. Bathtubs are listed as hazard locations near water, not the product.",
        "D": "Incorrect. Radiators are cited as heat sources to keep the product away from."
    }
},

  172: {
    "questionNumber": 172,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Safety Instructions: Telephone Product",
    "passageType": "Instructions",
    "passageText": "SAFETY INSTRUCTIONS\nTo avoid personal injury or property damage, follow these safety instructions when using this product:\n• Keep product away from radiators and other heat sources and in a place where air can circulate freely around it.\n• Do not make or receive calls while standing in or near water, such as a sink, bathtub, or swimming pool.\n• Do not place furniture or other items on top of the power cord.\n• Do not apply excess force when dialing. This could result in permanent damage to the buttons.\n• Disconnect product from electrical outlet before cleaning. Do not use liquid cleaners and do not immerse product in water. Instead, wipe thoroughly and gently with a damp cloth.\n• Avoid using product during an electrical storm.\n• If repair work is required, contact the manufacturer at the phone number listed on the front cover of this manual.",
    "questionText": "What should the customer do if the product stops working properly?",
    "options": [
        {
            "label": "A",
            "text": "Get in touch with the company that produced it"
        },
        {
            "label": "B",
            "text": "Clean the product thoroughly"
        },
        {
            "label": "C",
            "text": "Return the product to the store"
        },
        {
            "label": "D",
            "text": "Look for instructions in the manual"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "The final safety instruction directs: \"If repair work is required, contact the manufacturer at the phone number listed on the front cover of this manual.\" Contacting the manufacturer means getting in touch with the company that produced it.",
    "grammarOrReadingRule": {
        "title": "Paraphrase Matching: contact manufacturer -> get in touch with company that produced it",
        "description": "\"Contact the manufacturer\" is paraphrased as \"Get in touch with the company that produced it\".",
        "keyTakeaway": "contact the manufacturer -> Get in touch with the company that produced it."
    },
    "optionExplanations": {
        "A": "Correct. Direct paraphrase of contacting the manufacturer for repairs.",
        "B": "Incorrect. Cleaning is maintenance, not the remedy for broken equipment.",
        "C": "Incorrect. Returning to the store is not specified; calling the manufacturer is.",
        "D": "Incorrect. The manual says to call the manufacturer, not search internally for repair steps."
    }
},

  173: {
    "questionNumber": 173,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Safety Instructions: Telephone Product",
    "passageType": "Instructions",
    "passageText": "SAFETY INSTRUCTIONS\nTo avoid personal injury or property damage, follow these safety instructions when using this product:\n• Keep product away from radiators and other heat sources and in a place where air can circulate freely around it.\n• Do not make or receive calls while standing in or near water, such as a sink, bathtub, or swimming pool.\n• Do not place furniture or other items on top of the power cord.\n• Do not apply excess force when dialing. This could result in permanent damage to the buttons.\n• Disconnect product from electrical outlet before cleaning. Do not use liquid cleaners and do not immerse product in water. Instead, wipe thoroughly and gently with a damp cloth.\n• Avoid using product during an electrical storm.\n• If repair work is required, contact the manufacturer at the phone number listed on the front cover of this manual.",
    "questionText": "When should the product not be used?",
    "options": [
        {
            "label": "A",
            "text": "During a thunderstorm"
        },
        {
            "label": "B",
            "text": "Before unplugging it"
        },
        {
            "label": "C",
            "text": "When air is not circulating"
        },
        {
            "label": "D",
            "text": "After an electrical power loss"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "The instructions explicitly specify: \"Avoid using product during an electrical storm.\" An electrical storm is a thunderstorm.",
    "grammarOrReadingRule": {
        "title": "Synonym Recognition: electrical storm -> thunderstorm",
        "description": "\"Electrical storm\" is a standard synonym for \"thunderstorm\".",
        "keyTakeaway": "Avoid using product during an electrical storm -> During a thunderstorm."
    },
    "optionExplanations": {
        "A": "Correct. Directly corresponds to avoiding use during an electrical storm.",
        "B": "Incorrect. Cleaning requires unplugging first, but normal operation does not.",
        "C": "Incorrect. Air circulation is required for storage/placement, not a condition forbidding use.",
        "D": "Incorrect. Power loss is not mentioned as a safety hazard."
    }
},

  174: {
    "questionNumber": 174,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Safety Instructions: Telephone Product",
    "passageType": "Instructions",
    "passageText": "SAFETY INSTRUCTIONS\nTo avoid personal injury or property damage, follow these safety instructions when using this product:\n• Keep product away from radiators and other heat sources and in a place where air can circulate freely around it.\n• Do not make or receive calls while standing in or near water, such as a sink, bathtub, or swimming pool.\n• Do not place furniture or other items on top of the power cord.\n• Do not apply excess force when dialing. This could result in permanent damage to the buttons.\n• Disconnect product from electrical outlet before cleaning. Do not use liquid cleaners and do not immerse product in water. Instead, wipe thoroughly and gently with a damp cloth.\n• Avoid using product during an electrical storm.\n• If repair work is required, contact the manufacturer at the phone number listed on the front cover of this manual.",
    "questionText": "What do the instructions say about cleaning the product?",
    "options": [
        {
            "label": "A",
            "text": "Use liquid soap."
        },
        {
            "label": "B",
            "text": "Scrub it hard."
        },
        {
            "label": "C",
            "text": "Unplug it first."
        },
        {
            "label": "D",
            "text": "Dip it in water."
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "The cleaning instructions state: \"Disconnect product from electrical outlet before cleaning.\" Disconnecting from an electrical outlet means unplugging it first.",
    "grammarOrReadingRule": {
        "title": "Paraphrase Matching: disconnect from outlet -> unplug",
        "description": "\"Disconnect product from electrical outlet before cleaning\" means \"Unplug it first\".",
        "keyTakeaway": "Disconnect from electrical outlet before cleaning -> Unplug it first."
    },
    "optionExplanations": {
        "A": "Incorrect. The instructions warn: \"Do not use liquid cleaners\".",
        "B": "Incorrect. The manual says to wipe \"gently\", not scrub hard.",
        "C": "Correct. Paraphrases \"Disconnect product from electrical outlet before cleaning\".",
        "D": "Incorrect. The manual explicitly forbids this: \"do not immerse product in water\"."
    }
},

  175: {
    "questionNumber": 175,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Jolene Simmons Appointed HR Director",
    "passageType": "Article",
    "passageText": "Andrew Peterson, president of the Mount Auburn Bank, announced yesterday afternoon that Jolene Simmons has been appointed as the bank's new director of human resources. Ms. Simmons has more than 20 years' experience in the banking industry. After completing her undergraduate degree, she worked for Halt and Levin, a local accounting firm. She left the firm after several years and started her banking career as a teller at the Windsor Bank. She eventually worked her way up to a position as branch manager at the Riverside branch of that institution. Two years ago, she left that job to pursue a master's degree in human resource management at State University, which she completed last month. \"She comes to us highly recommended both by her previous employers and by her instructors at the university,\" says Mr. Peterson. Ms. Simmons will begin her new job at the beginning of next year.",
    "questionText": "What was Ms. Simmons's most recent job?",
    "options": [
        {
            "label": "A",
            "text": "Human resources assistant"
        },
        {
            "label": "B",
            "text": "Accountant"
        },
        {
            "label": "C",
            "text": "Branch manager"
        },
        {
            "label": "D",
            "text": "University instructor"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "The article states she worked her way up to \"branch manager at the Riverside branch of that institution. Two years ago, she left that job to pursue a master's degree...\". Her most recent employment prior to graduate school was branch manager.",
    "grammarOrReadingRule": {
        "title": "Career Chronology Sequencing",
        "description": "Track the career sequence: Accounting firm -> Windsor Bank teller -> Riverside branch manager -> Master's student. Her most recent job was branch manager.",
        "keyTakeaway": "position as branch manager... left that job to pursue a degree -> Branch manager."
    },
    "optionExplanations": {
        "A": "Incorrect. She is appointed Director of HR, not an assistant.",
        "B": "Incorrect. She worked at Halt and Levin early in her career after college.",
        "C": "Correct. Her most recent position before returning to school was branch manager.",
        "D": "Incorrect. University instructors recommended her; she was a student, not an instructor."
    }
},

  176: {
    "questionNumber": 176,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Jolene Simmons Appointed HR Director",
    "passageType": "Article",
    "passageText": "Andrew Peterson, president of the Mount Auburn Bank, announced yesterday afternoon that Jolene Simmons has been appointed as the bank's new director of human resources. Ms. Simmons has more than 20 years' experience in the banking industry. After completing her undergraduate degree, she worked for Halt and Levin, a local accounting firm. She left the firm after several years and started her banking career as a teller at the Windsor Bank. She eventually worked her way up to a position as branch manager at the Riverside branch of that institution. Two years ago, she left that job to pursue a master's degree in human resource management at State University, which she completed last month. \"She comes to us highly recommended both by her previous employers and by her instructors at the university,\" says Mr. Peterson. Ms. Simmons will begin her new job at the beginning of next year.",
    "questionText": "Where did Ms. Simmons work as a teller?",
    "options": [
        {
            "label": "A",
            "text": "Mount Auburn Bank"
        },
        {
            "label": "B",
            "text": "Halt and Levin Bank"
        },
        {
            "label": "C",
            "text": "Windsor Bank"
        },
        {
            "label": "D",
            "text": "Riverside Bank"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "The article specifies: \"started her banking career as a teller at the Windsor Bank.\"",
    "grammarOrReadingRule": {
        "title": "Direct Institution Matching",
        "description": "Match the specific job title \"teller\" with the bank name where that role was performed: Windsor Bank.",
        "keyTakeaway": "started her banking career as a teller at the Windsor Bank -> Windsor Bank."
    },
    "optionExplanations": {
        "A": "Incorrect. Mount Auburn Bank is where she was just appointed HR Director.",
        "B": "Incorrect. Halt and Levin is an accounting firm, not a bank.",
        "C": "Correct. Explicitly named as the bank where she worked as a teller.",
        "D": "Incorrect. Riverside is the branch where she was promoted to branch manager."
    }
},

  177: {
    "questionNumber": 177,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Jolene Simmons Appointed HR Director",
    "passageType": "Article",
    "passageText": "Andrew Peterson, president of the Mount Auburn Bank, announced yesterday afternoon that Jolene Simmons has been appointed as the bank's new director of human resources. Ms. Simmons has more than 20 years' experience in the banking industry. After completing her undergraduate degree, she worked for Halt and Levin, a local accounting firm. She left the firm after several years and started her banking career as a teller at the Windsor Bank. She eventually worked her way up to a position as branch manager at the Riverside branch of that institution. Two years ago, she left that job to pursue a master's degree in human resource management at State University, which she completed last month. \"She comes to us highly recommended both by her previous employers and by her instructors at the university,\" says Mr. Peterson. Ms. Simmons will begin her new job at the beginning of next year.",
    "questionText": "When did Ms. Simmons complete her graduate degree?",
    "options": [
        {
            "label": "A",
            "text": "Twenty years ago"
        },
        {
            "label": "B",
            "text": "Two years ago"
        },
        {
            "label": "C",
            "text": "A year ago"
        },
        {
            "label": "D",
            "text": "A month ago"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "The article states: \"Two years ago, she left that job to pursue a master's degree in human resource management at State University, which she completed last month.\" Completing it last month corresponds to \"A month ago\".",
    "grammarOrReadingRule": {
        "title": "Temporal Paraphrase: completed last month -> A month ago",
        "description": "Match the phrase \"which she completed last month\" with its chronological equivalent \"A month ago\".",
        "keyTakeaway": "completed last month -> A month ago."
    },
    "optionExplanations": {
        "A": "Incorrect. 20 years is her total length of career in the banking industry.",
        "B": "Incorrect. Two years ago is when she left her job to start the degree, not when she finished it.",
        "C": "Incorrect. A year ago does not match \"last month\".",
        "D": "Correct. Paraphrases \"completed last month\"."
    }
},

  178: {
    "questionNumber": 178,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Article: Jolene Simmons Appointed HR Director",
    "passageType": "Article",
    "passageText": "Andrew Peterson, president of the Mount Auburn Bank, announced yesterday afternoon that Jolene Simmons has been appointed as the bank's new director of human resources. Ms. Simmons has more than 20 years' experience in the banking industry. After completing her undergraduate degree, she worked for Halt and Levin, a local accounting firm. She left the firm after several years and started her banking career as a teller at the Windsor Bank. She eventually worked her way up to a position as branch manager at the Riverside branch of that institution. Two years ago, she left that job to pursue a master's degree in human resource management at State University, which she completed last month. \"She comes to us highly recommended both by her previous employers and by her instructors at the university,\" says Mr. Peterson. Ms. Simmons will begin her new job at the beginning of next year.",
    "questionText": "The word previous in line 9 is closest in meaning to",
    "options": [
        {
            "label": "A",
            "text": "former."
        },
        {
            "label": "B",
            "text": "preferred."
        },
        {
            "label": "C",
            "text": "future."
        },
        {
            "label": "D",
            "text": "professional."
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "\"previous\" means existing or occurring before in time. Her \"previous employers\" are her \"former employers\".",
    "grammarOrReadingRule": {
        "title": "Adjective Synonyms: previous -> former",
        "description": "\"Previous\" and \"former\" both refer to past status prior to the present.",
        "keyTakeaway": "previous employers -> former employers."
    },
    "optionExplanations": {
        "A": "Correct. Direct synonym for previous in employment contexts.",
        "B": "Incorrect. \"preferred\" means favored or chosen over others.",
        "C": "Incorrect. \"future\" is the antonym referring to upcoming time.",
        "D": "Incorrect. \"professional\" relates to vocational standards or competence, not past time."
    }
},

  179: {
    "questionNumber": 179,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Notice: City Holiday Parking Regulations",
    "passageType": "Notice",
    "passageText": "BECAUSE OF THE HOLIDAY, WEEKEND PARKING REGULATIONS WILL BE IN EFFECT THROUGHOUT THE CITY ALL DAY TOMORROW. THERE WILL BE NO CHARGE FOR PARKING IN METERED PARKING PLACES; HOWEVER, DOWNTOWN PUBLIC PARKING GARAGES WILL BE CLOSED. SUBWAYS AND BUSES WILL FOLLOW THE SUNDAY SCHEDULE, AND WEEKEND FARES AND SENIOR CITIZEN DISCOUNTS WILL BE IN EFFECT ALL DAY. CONSTRUCTION ON THE GREEN RIVER BRIDGE WILL BE SUSPENDED, BUT THE BRIDGE WILL REMAIN CLOSED.",
    "questionText": "What will be free tomorrow?",
    "options": [
        {
            "label": "A",
            "text": "Metered parking"
        },
        {
            "label": "B",
            "text": "Garage parking"
        },
        {
            "label": "C",
            "text": "Subway fares"
        },
        {
            "label": "D",
            "text": "Bridge use"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "The notice states: \"THERE WILL BE NO CHARGE FOR PARKING IN METERED PARKING PLACES\". \"No charge\" means free.",
    "grammarOrReadingRule": {
        "title": "Idiom Paraphrase: no charge -> free",
        "description": "\"No charge\" means without cost or fee, i.e., free.",
        "keyTakeaway": "NO CHARGE FOR PARKING IN METERED PARKING PLACES -> Metered parking."
    },
    "optionExplanations": {
        "A": "Correct. Directly stated as having no charge.",
        "B": "Incorrect. Public parking garages will be closed entirely.",
        "C": "Incorrect. Subways and buses will follow the Sunday schedule and charge weekend fares.",
        "D": "Incorrect. The bridge will remain closed."
    }
},

  180: {
    "questionNumber": 180,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Notice: City Holiday Parking Regulations",
    "passageType": "Notice",
    "passageText": "BECAUSE OF THE HOLIDAY, WEEKEND PARKING REGULATIONS WILL BE IN EFFECT THROUGHOUT THE CITY ALL DAY TOMORROW. THERE WILL BE NO CHARGE FOR PARKING IN METERED PARKING PLACES; HOWEVER, DOWNTOWN PUBLIC PARKING GARAGES WILL BE CLOSED. SUBWAYS AND BUSES WILL FOLLOW THE SUNDAY SCHEDULE, AND WEEKEND FARES AND SENIOR CITIZEN DISCOUNTS WILL BE IN EFFECT ALL DAY. CONSTRUCTION ON THE GREEN RIVER BRIDGE WILL BE SUSPENDED, BUT THE BRIDGE WILL REMAIN CLOSED.",
    "questionText": "Why will this be free?",
    "options": [
        {
            "label": "A",
            "text": "It's the weekend."
        },
        {
            "label": "B",
            "text": "It's a holiday."
        },
        {
            "label": "C",
            "text": "There is construction."
        },
        {
            "label": "D",
            "text": "The bridge is closed."
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "The very first phrase of the notice explains the cause: \"BECAUSE OF THE HOLIDAY, WEEKEND PARKING REGULATIONS WILL BE IN EFFECT...\". It is free because it is a holiday.",
    "grammarOrReadingRule": {
        "title": "Locating Reason in Opening Causal Phrases: BECAUSE OF THE HOLIDAY",
        "description": "\"Because of the holiday\" provides the cause for instituting weekend parking regulations (free meters) on a weekday.",
        "keyTakeaway": "BECAUSE OF THE HOLIDAY -> It's a holiday."
    },
    "optionExplanations": {
        "A": "Incorrect. Weekend parking regulations are applied tomorrow because of a holiday, not because it is actually Saturday/Sunday.",
        "B": "Correct. Stated directly as the reason: \"BECAUSE OF THE HOLIDAY\".",
        "C": "Incorrect. Construction on the bridge is suspended, but does not cause free parking.",
        "D": "Incorrect. Bridge closure is an unrelated traffic condition."
    }
},

  181: {
    "questionNumber": 181,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Schedule and Email: Business Association Conference",
    "passageType": "Schedule & Email",
    "passageText": "DOCUMENT 1: SCHEDULE\nBusiness Association Conference\nFriday, May 15 • San Francisco, CA\nSchedule of Presentations and Workshops\n\nTime | Place | Event | Presenter\n8:30–9:00 | Auditorium | Opening Remarks | Raymond Larkins\n9:15–10:15 | Conference Rooms:\n  • Room A: Business Law | Myra Johnson\n  • Room B: Hiring Practices | Joe Rizzoli\n10:30–11:30 | Conference Rooms:\n  • Room A: The Future of Business | Sam Choi\n  • Room B: Effective Management | Mary Kim\n11:30–12:30 | Exhibit Hall | Exhibits | Various\n12:30–1:45 | Dining Room | Lunch | n/a\n2:00–4:00 | Conference Rooms:\n  • Room A: Contract Negotiation | Raymond Larkins\n  • Room B: Local business tour* | Ellen Peters\n\n*Tour participants will gather in Room B, then proceed together to the hotel parking lot, where the tour bus will be waiting.\n\nDOCUMENT 2: EMAIL\nTo: Raymond Larkins\nFrom: Myra Johnson\nSent: May 8, 20--, 10:00\nSubject: Meeting at conference\n\nHi, Raymond,\nI will be flying to San Francisco to attend the Business Association Conference next Friday, and I understand you will be there, too. I was hoping we could have a chance to meet sometime during the day Friday for about 30 minutes. I think we should take the opportunity to go over the project in person. Let me know when would be a good time for you. I will be giving a workshop on business law, but other than that my schedule is flexible. Anytime before 6:00 would work for me. I can't stay later than that since I'm driving to Sacramento in the evening and don't want to arrive there too late. A colleague will be signing his book at a store there, and I want to attend. I'm looking forward to your presentation on contracts. I wouldn't miss that for anything. Perhaps we could have our meeting immediately afterward. Let me know what works best for you.\nMyra",
    "questionText": "How will Myra get to San Francisco?",
    "options": [
        {
            "label": "A",
            "text": "Bus"
        },
        {
            "label": "B",
            "text": "Plane"
        },
        {
            "label": "C",
            "text": "Train"
        },
        {
            "label": "D",
            "text": "Car"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "In her email, Myra writes: \"I will be flying to San Francisco to attend the Business Association Conference next Friday...\". Flying means traveling by plane.",
    "grammarOrReadingRule": {
        "title": "Mode of Transportation: flying -> Plane",
        "description": "\"Flying\" means traveling via airplane.",
        "keyTakeaway": "flying to San Francisco -> Plane."
    },
    "optionExplanations": {
        "A": "Incorrect. She drives to Sacramento later, and a tour bus exists for conference attendees, but she does not take a bus to San Francisco.",
        "B": "Correct. Directly stated: \"I will be flying to San Francisco\".",
        "C": "Incorrect. Trains are not mentioned.",
        "D": "Incorrect. She drives her car to Sacramento on Friday evening, but flies to San Francisco for the conference."
    }
},

  182: {
    "questionNumber": 182,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Schedule and Email: Business Association Conference",
    "passageType": "Schedule & Email",
    "passageText": "DOCUMENT 1: SCHEDULE\nBusiness Association Conference\nFriday, May 15 • San Francisco, CA\nSchedule of Presentations and Workshops\n\nTime | Place | Event | Presenter\n8:30–9:00 | Auditorium | Opening Remarks | Raymond Larkins\n9:15–10:15 | Conference Rooms:\n  • Room A: Business Law | Myra Johnson\n  • Room B: Hiring Practices | Joe Rizzoli\n10:30–11:30 | Conference Rooms:\n  • Room A: The Future of Business | Sam Choi\n  • Room B: Effective Management | Mary Kim\n11:30–12:30 | Exhibit Hall | Exhibits | Various\n12:30–1:45 | Dining Room | Lunch | n/a\n2:00–4:00 | Conference Rooms:\n  • Room A: Contract Negotiation | Raymond Larkins\n  • Room B: Local business tour* | Ellen Peters\n\n*Tour participants will gather in Room B, then proceed together to the hotel parking lot, where the tour bus will be waiting.\n\nDOCUMENT 2: EMAIL\nTo: Raymond Larkins\nFrom: Myra Johnson\nSent: May 8, 20--, 10:00\nSubject: Meeting at conference\n\nHi, Raymond,\nI will be flying to San Francisco to attend the Business Association Conference next Friday, and I understand you will be there, too. I was hoping we could have a chance to meet sometime during the day Friday for about 30 minutes. I think we should take the opportunity to go over the project in person. Let me know when would be a good time for you. I will be giving a workshop on business law, but other than that my schedule is flexible. Anytime before 6:00 would work for me. I can't stay later than that since I'm driving to Sacramento in the evening and don't want to arrive there too late. A colleague will be signing his book at a store there, and I want to attend. I'm looking forward to your presentation on contracts. I wouldn't miss that for anything. Perhaps we could have our meeting immediately afterward. Let me know what works best for you.\nMyra",
    "questionText": "What does Myra want to discuss with Raymond?",
    "options": [
        {
            "label": "A",
            "text": "A workshop"
        },
        {
            "label": "B",
            "text": "A contract"
        },
        {
            "label": "C",
            "text": "A project"
        },
        {
            "label": "D",
            "text": "A law"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "Myra writes in her email: \"I think we should take the opportunity to go over the project in person.\" She wants to discuss a project.",
    "grammarOrReadingRule": {
        "title": "Locating Stated Discussion Topic: go over [topic]",
        "description": "\"Go over\" means to review or discuss. The object of review is explicitly \"the project\".",
        "keyTakeaway": "go over the project in person -> A project."
    },
    "optionExplanations": {
        "A": "Incorrect. Giving a workshop is her presentation task, not what she wants to discuss privately with Raymond.",
        "B": "Incorrect. Contracts is Raymond's presentation topic, not their shared agenda item.",
        "C": "Correct. Directly stated: \"go over the project in person\".",
        "D": "Incorrect. Business law is the subject of her workshop."
    }
},

  183: {
    "questionNumber": 183,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Schedule and Email: Business Association Conference",
    "passageType": "Schedule & Email",
    "passageText": "DOCUMENT 1: SCHEDULE\nBusiness Association Conference\nFriday, May 15 • San Francisco, CA\nSchedule of Presentations and Workshops\n\nTime | Place | Event | Presenter\n8:30–9:00 | Auditorium | Opening Remarks | Raymond Larkins\n9:15–10:15 | Conference Rooms:\n  • Room A: Business Law | Myra Johnson\n  • Room B: Hiring Practices | Joe Rizzoli\n10:30–11:30 | Conference Rooms:\n  • Room A: The Future of Business | Sam Choi\n  • Room B: Effective Management | Mary Kim\n11:30–12:30 | Exhibit Hall | Exhibits | Various\n12:30–1:45 | Dining Room | Lunch | n/a\n2:00–4:00 | Conference Rooms:\n  • Room A: Contract Negotiation | Raymond Larkins\n  • Room B: Local business tour* | Ellen Peters\n\n*Tour participants will gather in Room B, then proceed together to the hotel parking lot, where the tour bus will be waiting.\n\nDOCUMENT 2: EMAIL\nTo: Raymond Larkins\nFrom: Myra Johnson\nSent: May 8, 20--, 10:00\nSubject: Meeting at conference\n\nHi, Raymond,\nI will be flying to San Francisco to attend the Business Association Conference next Friday, and I understand you will be there, too. I was hoping we could have a chance to meet sometime during the day Friday for about 30 minutes. I think we should take the opportunity to go over the project in person. Let me know when would be a good time for you. I will be giving a workshop on business law, but other than that my schedule is flexible. Anytime before 6:00 would work for me. I can't stay later than that since I'm driving to Sacramento in the evening and don't want to arrive there too late. A colleague will be signing his book at a store there, and I want to attend. I'm looking forward to your presentation on contracts. I wouldn't miss that for anything. Perhaps we could have our meeting immediately afterward. Let me know what works best for you.\nMyra",
    "questionText": "What time is Myra NOT available to meet with Raymond?",
    "options": [
        {
            "label": "A",
            "text": "9:15"
        },
        {
            "label": "B",
            "text": "10:30"
        },
        {
            "label": "C",
            "text": "11:30"
        },
        {
            "label": "D",
            "text": "2:00"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "Myra notes: \"I will be giving a workshop on business law, but other than that my schedule is flexible.\" Document 1 shows that Room A: Business Law presented by Myra Johnson is from 9:15 to 10:15. Therefore, she is busy and not available at 9:15.",
    "grammarOrReadingRule": {
        "title": "Cross-Passage Synthesis: Email Statement + Schedule Slot",
        "description": "Email: \"giving a workshop on business law\". Schedule: Room A Business Law = 9:15–10:15. Result: Not available at 9:15.",
        "keyTakeaway": "Workshop on business law at 9:15–10:15 -> NOT available at 9:15."
    },
    "optionExplanations": {
        "A": "Correct. Her workshop is scheduled from 9:15 to 10:15.",
        "B": "Incorrect. She has no presentation at 10:30 and is free.",
        "C": "Incorrect. 11:30 is exhibits time and she is available.",
        "D": "Incorrect. 2:00 is Raymond's presentation, which she is attending, but her stated conflict is giving her own workshop."
    }
},

  184: {
    "questionNumber": 184,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Schedule and Email: Business Association Conference",
    "passageType": "Schedule & Email",
    "passageText": "DOCUMENT 1: SCHEDULE\nBusiness Association Conference\nFriday, May 15 • San Francisco, CA\nSchedule of Presentations and Workshops\n\nTime | Place | Event | Presenter\n8:30–9:00 | Auditorium | Opening Remarks | Raymond Larkins\n9:15–10:15 | Conference Rooms:\n  • Room A: Business Law | Myra Johnson\n  • Room B: Hiring Practices | Joe Rizzoli\n10:30–11:30 | Conference Rooms:\n  • Room A: The Future of Business | Sam Choi\n  • Room B: Effective Management | Mary Kim\n11:30–12:30 | Exhibit Hall | Exhibits | Various\n12:30–1:45 | Dining Room | Lunch | n/a\n2:00–4:00 | Conference Rooms:\n  • Room A: Contract Negotiation | Raymond Larkins\n  • Room B: Local business tour* | Ellen Peters\n\n*Tour participants will gather in Room B, then proceed together to the hotel parking lot, where the tour bus will be waiting.\n\nDOCUMENT 2: EMAIL\nTo: Raymond Larkins\nFrom: Myra Johnson\nSent: May 8, 20--, 10:00\nSubject: Meeting at conference\n\nHi, Raymond,\nI will be flying to San Francisco to attend the Business Association Conference next Friday, and I understand you will be there, too. I was hoping we could have a chance to meet sometime during the day Friday for about 30 minutes. I think we should take the opportunity to go over the project in person. Let me know when would be a good time for you. I will be giving a workshop on business law, but other than that my schedule is flexible. Anytime before 6:00 would work for me. I can't stay later than that since I'm driving to Sacramento in the evening and don't want to arrive there too late. A colleague will be signing his book at a store there, and I want to attend. I'm looking forward to your presentation on contracts. I wouldn't miss that for anything. Perhaps we could have our meeting immediately afterward. Let me know what works best for you.\nMyra",
    "questionText": "Where will Myra probably be at 2:30 on the day of the conference?",
    "options": [
        {
            "label": "A",
            "text": "In the auditorium"
        },
        {
            "label": "B",
            "text": "In Room A"
        },
        {
            "label": "C",
            "text": "In Room B"
        },
        {
            "label": "D",
            "text": "In the hotel parking lot"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "In her email, Myra writes to Raymond: \"I'm looking forward to your presentation on contracts. I wouldn't miss that for anything.\" Looking at Document 1, Raymond Larkins's presentation on \"Contract Negotiation\" is from 2:00 to 4:00 in Room A. Therefore, at 2:30 she will be in Room A.",
    "grammarOrReadingRule": {
        "title": "Cross-Document Time & Location Cross-Referencing",
        "description": "Email: Attending Raymond's presentation on contracts. Schedule: Raymond's Contract Negotiation presentation = 2:00–4:00 in Room A. Location at 2:30: Room A.",
        "keyTakeaway": "Raymond's contracts presentation (2:00–4:00) in Room A -> Room A."
    },
    "optionExplanations": {
        "A": "Incorrect. The auditorium only hosts opening remarks from 8:30–9:00.",
        "B": "Correct. Room A hosts Raymond's Contract Negotiation from 2:00–4:00, which she stated she wouldn't miss.",
        "C": "Incorrect. Room B hosts the local business tour.",
        "D": "Incorrect. The hotel parking lot is where the tour bus departs from."
    }
},

  185: {
    "questionNumber": 185,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Schedule and Email: Business Association Conference",
    "passageType": "Schedule & Email",
    "passageText": "DOCUMENT 1: SCHEDULE\nBusiness Association Conference\nFriday, May 15 • San Francisco, CA\nSchedule of Presentations and Workshops\n\nTime | Place | Event | Presenter\n8:30–9:00 | Auditorium | Opening Remarks | Raymond Larkins\n9:15–10:15 | Conference Rooms:\n  • Room A: Business Law | Myra Johnson\n  • Room B: Hiring Practices | Joe Rizzoli\n10:30–11:30 | Conference Rooms:\n  • Room A: The Future of Business | Sam Choi\n  • Room B: Effective Management | Mary Kim\n11:30–12:30 | Exhibit Hall | Exhibits | Various\n12:30–1:45 | Dining Room | Lunch | n/a\n2:00–4:00 | Conference Rooms:\n  • Room A: Contract Negotiation | Raymond Larkins\n  • Room B: Local business tour* | Ellen Peters\n\n*Tour participants will gather in Room B, then proceed together to the hotel parking lot, where the tour bus will be waiting.\n\nDOCUMENT 2: EMAIL\nTo: Raymond Larkins\nFrom: Myra Johnson\nSent: May 8, 20--, 10:00\nSubject: Meeting at conference\n\nHi, Raymond,\nI will be flying to San Francisco to attend the Business Association Conference next Friday, and I understand you will be there, too. I was hoping we could have a chance to meet sometime during the day Friday for about 30 minutes. I think we should take the opportunity to go over the project in person. Let me know when would be a good time for you. I will be giving a workshop on business law, but other than that my schedule is flexible. Anytime before 6:00 would work for me. I can't stay later than that since I'm driving to Sacramento in the evening and don't want to arrive there too late. A colleague will be signing his book at a store there, and I want to attend. I'm looking forward to your presentation on contracts. I wouldn't miss that for anything. Perhaps we could have our meeting immediately afterward. Let me know what works best for you.\nMyra",
    "questionText": "What will Myra do on Friday night?",
    "options": [
        {
            "label": "A",
            "text": "Meet with Raymond"
        },
        {
            "label": "B",
            "text": "Sign a contract"
        },
        {
            "label": "C",
            "text": "Give a workshop"
        },
        {
            "label": "D",
            "text": "Attend a book signing"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "Myra explains her evening plans: \"I'm driving to Sacramento in the evening and don't want to arrive there too late. A colleague will be signing his book at a store there, and I want to attend.\"",
    "grammarOrReadingRule": {
        "title": "Scanning Evening Agenda in Personal Letters",
        "description": "Locate evening/night indicators: \"in the evening... colleague will be signing his book... want to attend\".",
        "keyTakeaway": "colleague will be signing his book... want to attend -> Attend a book signing."
    },
    "optionExplanations": {
        "A": "Incorrect. Her meeting with Raymond will occur before 6:00 during the conference day.",
        "B": "Incorrect. \"Contract Negotiation\" is a workshop topic, not a contract signing event.",
        "C": "Incorrect. She gives her workshop in the morning at 9:15.",
        "D": "Correct. Directly stated: attending her colleague's book signing in Sacramento."
    }
},

  186: {
    "questionNumber": 186,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Two Letters: Grover Marketing Department Application",
    "passageType": "Two Letters",
    "passageText": "DOCUMENT 1: APPLICATION LETTER\nJuly 30, 20--\n\nDavid Mendez\nDirector of Marketing\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Mr. Mendez,\n\nI have heard that there is an opening for a researcher in the Marketing Department, and my supervisor, Marla Petrowski, suggested that I contact you about applying for it. I have worked at Grover for three years now as an office assistant in the Accounting Department. I previously worked for a year at a small marketing firm called R-J Associates. That is the only marketing job experience I have, but I have a degree in marketing, which I completed last month. Now I would like to get a position in my field. Through my years working at Grover, I have become quite familiar with the way this company works, and I feel that I would have a great deal to offer Grover's Marketing Department.\n\nI am enclosing my resume and could also provide you with letters of reference from my university professors. Thank you for your attention. I look forward to hearing from you.\n\nSincerely,\nSylvia Krim\n\nDOCUMENT 2: RESPONSE LETTER\nAugust 8, 20--\n\nSylvia Krim\nAccounting Department\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Ms. Krim,\n\nThank you for your letter expressing interest in applying for the position in the Marketing Department. I have spoken with Ms. Petrowski, who highly recommends you for the job. I have also shown your credentials to our head researcher, and we both agree that you would be a good asset to our department. Unfortunately, the position you are interested in is not an entry-level job. We generally require at least twice the amount of marketing job experience that you have, as a minimum, for that type of position. Although you appear to have a good reference from your former employer, we feel that you are not yet qualified for the job. However, I anticipate that we will have an opening for a marketing assistant, possibly as soon as September. I will let you know when that position becomes available in case you might be interested in applying for it. I hope you will. In the meantime, please accept my best wishes for your continued success.\n\nSincerely,\nDavid Mendez\nDirector of Marketing",
    "questionText": "What job is Ms. Krim interested in applying for?",
    "options": [
        {
            "label": "A",
            "text": "Marketing assistant"
        },
        {
            "label": "B",
            "text": "Researcher"
        },
        {
            "label": "C",
            "text": "Office assistant"
        },
        {
            "label": "D",
            "text": "Accountant"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "In Document 1, Sylvia Krim explicitly states: \"I have heard that there is an opening for a researcher in the Marketing Department, and my supervisor... suggested that I contact you about applying for it.\"",
    "grammarOrReadingRule": {
        "title": "Target Job Position Identification in Cover Letters",
        "description": "Find the opening sentence stating the candidate's intention: applying for the position of \"researcher\".",
        "keyTakeaway": "opening for a researcher in the Marketing Department -> Researcher."
    },
    "optionExplanations": {
        "A": "Incorrect. Marketing assistant is a future entry-level opening mentioned by Mendez in his reply.",
        "B": "Correct. Directly stated: applying for the opening for a researcher.",
        "C": "Incorrect. Office assistant is her current role in the Accounting Department.",
        "D": "Incorrect. Accounting is her current department, not the job applied for."
    }
},

  187: {
    "questionNumber": 187,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Two Letters: Grover Marketing Department Application",
    "passageType": "Two Letters",
    "passageText": "DOCUMENT 1: APPLICATION LETTER\nJuly 30, 20--\n\nDavid Mendez\nDirector of Marketing\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Mr. Mendez,\n\nI have heard that there is an opening for a researcher in the Marketing Department, and my supervisor, Marla Petrowski, suggested that I contact you about applying for it. I have worked at Grover for three years now as an office assistant in the Accounting Department. I previously worked for a year at a small marketing firm called R-J Associates. That is the only marketing job experience I have, but I have a degree in marketing, which I completed last month. Now I would like to get a position in my field. Through my years working at Grover, I have become quite familiar with the way this company works, and I feel that I would have a great deal to offer Grover's Marketing Department.\n\nI am enclosing my resume and could also provide you with letters of reference from my university professors. Thank you for your attention. I look forward to hearing from you.\n\nSincerely,\nSylvia Krim\n\nDOCUMENT 2: RESPONSE LETTER\nAugust 8, 20--\n\nSylvia Krim\nAccounting Department\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Ms. Krim,\n\nThank you for your letter expressing interest in applying for the position in the Marketing Department. I have spoken with Ms. Petrowski, who highly recommends you for the job. I have also shown your credentials to our head researcher, and we both agree that you would be a good asset to our department. Unfortunately, the position you are interested in is not an entry-level job. We generally require at least twice the amount of marketing job experience that you have, as a minimum, for that type of position. Although you appear to have a good reference from your former employer, we feel that you are not yet qualified for the job. However, I anticipate that we will have an opening for a marketing assistant, possibly as soon as September. I will let you know when that position becomes available in case you might be interested in applying for it. I hope you will. In the meantime, please accept my best wishes for your continued success.\n\nSincerely,\nDavid Mendez\nDirector of Marketing",
    "questionText": "When did Ms. Krim finish her degree in marketing?",
    "options": [
        {
            "label": "A",
            "text": "June"
        },
        {
            "label": "B",
            "text": "July"
        },
        {
            "label": "C",
            "text": "August"
        },
        {
            "label": "D",
            "text": "September"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "Document 1 is dated July 30. Sylvia writes: \"I have a degree in marketing, which I completed last month.\" The month before July is June.",
    "grammarOrReadingRule": {
        "title": "Relative Date Deduction: Letter Date vs. \"last month\"",
        "description": "Letter written on July 30. Degree completed \"last month\". Month prior to July is June.",
        "keyTakeaway": "Letter dated July 30 + completed last month -> June."
    },
    "optionExplanations": {
        "A": "Correct. June is the month immediately preceding July.",
        "B": "Incorrect. July is when the application letter was written.",
        "C": "Incorrect. August is when Mendez wrote his reply letter.",
        "D": "Incorrect. September is when the assistant role might open."
    }
},

  188: {
    "questionNumber": 188,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Two Letters: Grover Marketing Department Application",
    "passageType": "Two Letters",
    "passageText": "DOCUMENT 1: APPLICATION LETTER\nJuly 30, 20--\n\nDavid Mendez\nDirector of Marketing\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Mr. Mendez,\n\nI have heard that there is an opening for a researcher in the Marketing Department, and my supervisor, Marla Petrowski, suggested that I contact you about applying for it. I have worked at Grover for three years now as an office assistant in the Accounting Department. I previously worked for a year at a small marketing firm called R-J Associates. That is the only marketing job experience I have, but I have a degree in marketing, which I completed last month. Now I would like to get a position in my field. Through my years working at Grover, I have become quite familiar with the way this company works, and I feel that I would have a great deal to offer Grover's Marketing Department.\n\nI am enclosing my resume and could also provide you with letters of reference from my university professors. Thank you for your attention. I look forward to hearing from you.\n\nSincerely,\nSylvia Krim\n\nDOCUMENT 2: RESPONSE LETTER\nAugust 8, 20--\n\nSylvia Krim\nAccounting Department\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Ms. Krim,\n\nThank you for your letter expressing interest in applying for the position in the Marketing Department. I have spoken with Ms. Petrowski, who highly recommends you for the job. I have also shown your credentials to our head researcher, and we both agree that you would be a good asset to our department. Unfortunately, the position you are interested in is not an entry-level job. We generally require at least twice the amount of marketing job experience that you have, as a minimum, for that type of position. Although you appear to have a good reference from your former employer, we feel that you are not yet qualified for the job. However, I anticipate that we will have an opening for a marketing assistant, possibly as soon as September. I will let you know when that position becomes available in case you might be interested in applying for it. I hope you will. In the meantime, please accept my best wishes for your continued success.\n\nSincerely,\nDavid Mendez\nDirector of Marketing",
    "questionText": "Who recommends Ms. Krim for the job?",
    "options": [
        {
            "label": "A",
            "text": "The director of marketing"
        },
        {
            "label": "B",
            "text": "A university professor"
        },
        {
            "label": "C",
            "text": "The head researcher"
        },
        {
            "label": "D",
            "text": "Her supervisor"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "In Document 2, David Mendez writes: \"I have spoken with Ms. Petrowski, who highly recommends you for the job.\" In Document 1, Sylvia identifies Ms. Petrowski as \"my supervisor, Marla Petrowski\".",
    "grammarOrReadingRule": {
        "title": "Cross-Document Identity Resolution: Ms. Petrowski = her supervisor",
        "description": "Doc 1: Marla Petrowski is \"my supervisor\". Doc 2: \"Ms. Petrowski, who highly recommends you\". Conclusion: Her supervisor recommends her.",
        "keyTakeaway": "Marla Petrowski (my supervisor) highly recommends you -> Her supervisor."
    },
    "optionExplanations": {
        "A": "Incorrect. The Director of Marketing (Mendez) rejected her application for researcher due to lack of experience.",
        "B": "Incorrect. University professors were offered as references, but had not spoken to Mendez.",
        "C": "Incorrect. The head researcher agreed with Mendez that she lacked sufficient experience.",
        "D": "Correct. Her supervisor Marla Petrowski highly recommended her."
    }
},

  189: {
    "questionNumber": 189,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Two Letters: Grover Marketing Department Application",
    "passageType": "Two Letters",
    "passageText": "DOCUMENT 1: APPLICATION LETTER\nJuly 30, 20--\n\nDavid Mendez\nDirector of Marketing\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Mr. Mendez,\n\nI have heard that there is an opening for a researcher in the Marketing Department, and my supervisor, Marla Petrowski, suggested that I contact you about applying for it. I have worked at Grover for three years now as an office assistant in the Accounting Department. I previously worked for a year at a small marketing firm called R-J Associates. That is the only marketing job experience I have, but I have a degree in marketing, which I completed last month. Now I would like to get a position in my field. Through my years working at Grover, I have become quite familiar with the way this company works, and I feel that I would have a great deal to offer Grover's Marketing Department.\n\nI am enclosing my resume and could also provide you with letters of reference from my university professors. Thank you for your attention. I look forward to hearing from you.\n\nSincerely,\nSylvia Krim\n\nDOCUMENT 2: RESPONSE LETTER\nAugust 8, 20--\n\nSylvia Krim\nAccounting Department\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Ms. Krim,\n\nThank you for your letter expressing interest in applying for the position in the Marketing Department. I have spoken with Ms. Petrowski, who highly recommends you for the job. I have also shown your credentials to our head researcher, and we both agree that you would be a good asset to our department. Unfortunately, the position you are interested in is not an entry-level job. We generally require at least twice the amount of marketing job experience that you have, as a minimum, for that type of position. Although you appear to have a good reference from your former employer, we feel that you are not yet qualified for the job. However, I anticipate that we will have an opening for a marketing assistant, possibly as soon as September. I will let you know when that position becomes available in case you might be interested in applying for it. I hope you will. In the meantime, please accept my best wishes for your continued success.\n\nSincerely,\nDavid Mendez\nDirector of Marketing",
    "questionText": "How many years of experience are required for the job she wants?",
    "options": [
        {
            "label": "A",
            "text": "One"
        },
        {
            "label": "B",
            "text": "Two"
        },
        {
            "label": "C",
            "text": "Three"
        },
        {
            "label": "D",
            "text": "Four"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "In Document 1, Sylvia writes: \"I previously worked for a year at a small marketing firm called R-J Associates. That is the only marketing job experience I have...\". In Document 2, Mendez explains: \"We generally require at least twice the amount of marketing job experience that you have, as a minimum, for that type of position.\" Twice 1 year is 2 years.",
    "grammarOrReadingRule": {
        "title": "Cross-Document Mathematical Calculation: twice her experience",
        "description": "Doc 1: Sylvia has 1 year of experience. Doc 2: Mendez states they require \"at least twice the amount of experience that you have\". 1 year x 2 = 2 years.",
        "keyTakeaway": "Has 1 year + requires twice that amount -> Two years."
    },
    "optionExplanations": {
        "A": "Incorrect. One year is the experience Sylvia currently possesses.",
        "B": "Correct. 1 year x 2 (twice the amount) = 2 years required.",
        "C": "Incorrect. Three years is how long she worked as an office assistant in Accounting.",
        "D": "Incorrect. Four years is double the requirement."
    }
},

  190: {
    "questionNumber": 190,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Two Letters: Grover Marketing Department Application",
    "passageType": "Two Letters",
    "passageText": "DOCUMENT 1: APPLICATION LETTER\nJuly 30, 20--\n\nDavid Mendez\nDirector of Marketing\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Mr. Mendez,\n\nI have heard that there is an opening for a researcher in the Marketing Department, and my supervisor, Marla Petrowski, suggested that I contact you about applying for it. I have worked at Grover for three years now as an office assistant in the Accounting Department. I previously worked for a year at a small marketing firm called R-J Associates. That is the only marketing job experience I have, but I have a degree in marketing, which I completed last month. Now I would like to get a position in my field. Through my years working at Grover, I have become quite familiar with the way this company works, and I feel that I would have a great deal to offer Grover's Marketing Department.\n\nI am enclosing my resume and could also provide you with letters of reference from my university professors. Thank you for your attention. I look forward to hearing from you.\n\nSincerely,\nSylvia Krim\n\nDOCUMENT 2: RESPONSE LETTER\nAugust 8, 20--\n\nSylvia Krim\nAccounting Department\nThe Grover Company\n1809 Lyme Road\nNewland, IL\n\nDear Ms. Krim,\n\nThank you for your letter expressing interest in applying for the position in the Marketing Department. I have spoken with Ms. Petrowski, who highly recommends you for the job. I have also shown your credentials to our head researcher, and we both agree that you would be a good asset to our department. Unfortunately, the position you are interested in is not an entry-level job. We generally require at least twice the amount of marketing job experience that you have, as a minimum, for that type of position. Although you appear to have a good reference from your former employer, we feel that you are not yet qualified for the job. However, I anticipate that we will have an opening for a marketing assistant, possibly as soon as September. I will let you know when that position becomes available in case you might be interested in applying for it. I hope you will. In the meantime, please accept my best wishes for your continued success.\n\nSincerely,\nDavid Mendez\nDirector of Marketing",
    "questionText": "What will Mr. Mendez do?",
    "options": [
        {
            "label": "A",
            "text": "Hire Ms. Krim right away"
        },
        {
            "label": "B",
            "text": "Check Ms. Krim's credentials"
        },
        {
            "label": "C",
            "text": "Speak with Ms. Krim's former employer"
        },
        {
            "label": "D",
            "text": "Notify Ms. Krim when a position is available"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "In Document 2, Mr. Mendez promises: \"I anticipate that we will have an opening for a marketing assistant, possibly as soon as September. I will let you know when that position becomes available in case you might be interested in applying for it.\" \"Let you know\" means notify her.",
    "grammarOrReadingRule": {
        "title": "Paraphrase Matching: let someone know -> notify",
        "description": "\"I will let you know when that position becomes available\" is paraphrased as \"Notify Ms. Krim when a position is available\".",
        "keyTakeaway": "let you know when position becomes available -> Notify Ms. Krim when a position is available."
    },
    "optionExplanations": {
        "A": "Incorrect. He declines to hire her for the researcher role due to insufficient experience.",
        "B": "Incorrect. He has already evaluated her credentials with the head researcher.",
        "C": "Incorrect. He noted she had a good reference, but plans no further conversation with the former employer.",
        "D": "Correct. Directly promises to let her know (notify her) when the assistant role opens."
    }
},

  191: {
    "questionNumber": 191,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Memo and Email: Workplace Safety Workshop",
    "passageType": "Memo & Email",
    "passageText": "DOCUMENT 1: MEMO\nTo: All personnel\nFrom: Marvin McLean, Office Manager\nRe: Workplace safety workshop\nDate: November 17\n\nOn December 7, a workshop on workplace safety will be offered by Elvira Walters of the National Workplace Safety Commission. The workshop will take place in Conference Room 2 from 9:30 to 11:30. This workshop is required for all department heads and recommended for all staff members. Please let me know before November 22 if you plan to attend. Also, please let me know if you cannot attend at this time but are still interested. If there is enough interest, we will offer the workshop again at a later date. Finally, because the end of the year is fast approaching, let me take this opportunity to remind everyone that attendance at a minimum of three staff development workshops per year is required of all personnel. A schedule of upcoming workshops is posted outside my office.\n\nDOCUMENT 2: EMAIL\nTo: marvin_mclean@zipsys.com\nFrom: sandy_bayliss@zipsys.com\nSent: 18 November 20--, 11:40\nSubject: safety workshop\n\nHi, Marvin,\nI am very much interested in next month's workshop on workplace safety that was mentioned in the memo you sent out yesterday. I would like to attend it, so please put me on the list. After this workshop, I will have fulfilled my attendance requirement for this year. I would like you to know that I have found each workshop I attended to be very informative and worthwhile. Also, I would like to apologize in advance because I will probably arrive about 15 minutes late to the workplace safety workshop. I have to be downtown early that morning for a breakfast meeting, but it shouldn't last much past 9:00, and then I can catch the subway to the office. I hope a slightly late arrival won't be a problem.\nThanks,\nSandy",
    "questionText": "Who has to attend the workshop?",
    "options": [
        {
            "label": "A",
            "text": "All staff members"
        },
        {
            "label": "B",
            "text": "The security officer"
        },
        {
            "label": "C",
            "text": "Department heads"
        },
        {
            "label": "D",
            "text": "The office manager"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "The memo explicitly states: \"This workshop is required for all department heads and recommended for all staff members.\" \"Required\" means they have to attend.",
    "grammarOrReadingRule": {
        "title": "Obligatory vs. Recommended Actions: required -> has to attend",
        "description": "\"Required\" indicates an obligation (\"has to attend\"), whereas \"recommended\" denotes an optional suggestion.",
        "keyTakeaway": "required for all department heads -> Department heads."
    },
    "optionExplanations": {
        "A": "Incorrect. For general staff members, attendance is \"recommended\", not required.",
        "B": "Incorrect. Security officers are not singled out.",
        "C": "Correct. Directly stated: \"required for all department heads\".",
        "D": "Incorrect. The office manager is the organizer sending the memo."
    }
},

  192: {
    "questionNumber": 192,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Memo and Email: Workplace Safety Workshop",
    "passageType": "Memo & Email",
    "passageText": "DOCUMENT 1: MEMO\nTo: All personnel\nFrom: Marvin McLean, Office Manager\nRe: Workplace safety workshop\nDate: November 17\n\nOn December 7, a workshop on workplace safety will be offered by Elvira Walters of the National Workplace Safety Commission. The workshop will take place in Conference Room 2 from 9:30 to 11:30. This workshop is required for all department heads and recommended for all staff members. Please let me know before November 22 if you plan to attend. Also, please let me know if you cannot attend at this time but are still interested. If there is enough interest, we will offer the workshop again at a later date. Finally, because the end of the year is fast approaching, let me take this opportunity to remind everyone that attendance at a minimum of three staff development workshops per year is required of all personnel. A schedule of upcoming workshops is posted outside my office.\n\nDOCUMENT 2: EMAIL\nTo: marvin_mclean@zipsys.com\nFrom: sandy_bayliss@zipsys.com\nSent: 18 November 20--, 11:40\nSubject: safety workshop\n\nHi, Marvin,\nI am very much interested in next month's workshop on workplace safety that was mentioned in the memo you sent out yesterday. I would like to attend it, so please put me on the list. After this workshop, I will have fulfilled my attendance requirement for this year. I would like you to know that I have found each workshop I attended to be very informative and worthwhile. Also, I would like to apologize in advance because I will probably arrive about 15 minutes late to the workplace safety workshop. I have to be downtown early that morning for a breakfast meeting, but it shouldn't last much past 9:00, and then I can catch the subway to the office. I hope a slightly late arrival won't be a problem.\nThanks,\nSandy",
    "questionText": "When did Sandy Bayliss write her e-mail message?",
    "options": [
        {
            "label": "A",
            "text": "November 17"
        },
        {
            "label": "B",
            "text": "November 18"
        },
        {
            "label": "C",
            "text": "November 22"
        },
        {
            "label": "D",
            "text": "December 7"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "Document 1 memo is dated November 17. In Document 2, Sandy writes: \"mentioned in the memo you sent out yesterday\". The day after November 17 is November 18.",
    "grammarOrReadingRule": {
        "title": "Cross-Document Date Deduction: \"yesterday\" relative to prior date",
        "description": "Memo sent: November 17. Email sent \"yesterday\" after memo. Date: November 18.",
        "keyTakeaway": "Memo dated November 17 + \"memo you sent out yesterday\" -> November 18."
    },
    "optionExplanations": {
        "A": "Incorrect. November 17 is when the memo was sent.",
        "B": "Correct. One day after November 17 is November 18.",
        "C": "Incorrect. November 22 is the RSVP deadline.",
        "D": "Incorrect. December 7 is the date the workshop will take place."
    }
},

  193: {
    "questionNumber": 193,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Memo and Email: Workplace Safety Workshop",
    "passageType": "Memo & Email",
    "passageText": "DOCUMENT 1: MEMO\nTo: All personnel\nFrom: Marvin McLean, Office Manager\nRe: Workplace safety workshop\nDate: November 17\n\nOn December 7, a workshop on workplace safety will be offered by Elvira Walters of the National Workplace Safety Commission. The workshop will take place in Conference Room 2 from 9:30 to 11:30. This workshop is required for all department heads and recommended for all staff members. Please let me know before November 22 if you plan to attend. Also, please let me know if you cannot attend at this time but are still interested. If there is enough interest, we will offer the workshop again at a later date. Finally, because the end of the year is fast approaching, let me take this opportunity to remind everyone that attendance at a minimum of three staff development workshops per year is required of all personnel. A schedule of upcoming workshops is posted outside my office.\n\nDOCUMENT 2: EMAIL\nTo: marvin_mclean@zipsys.com\nFrom: sandy_bayliss@zipsys.com\nSent: 18 November 20--, 11:40\nSubject: safety workshop\n\nHi, Marvin,\nI am very much interested in next month's workshop on workplace safety that was mentioned in the memo you sent out yesterday. I would like to attend it, so please put me on the list. After this workshop, I will have fulfilled my attendance requirement for this year. I would like you to know that I have found each workshop I attended to be very informative and worthwhile. Also, I would like to apologize in advance because I will probably arrive about 15 minutes late to the workplace safety workshop. I have to be downtown early that morning for a breakfast meeting, but it shouldn't last much past 9:00, and then I can catch the subway to the office. I hope a slightly late arrival won't be a problem.\nThanks,\nSandy",
    "questionText": "What time will Sandy Bayliss probably arrive at the workshop?",
    "options": [
        {
            "label": "A",
            "text": "9:00"
        },
        {
            "label": "B",
            "text": "9:15"
        },
        {
            "label": "C",
            "text": "9:30"
        },
        {
            "label": "D",
            "text": "9:45"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "The memo states the workshop runs \"from 9:30 to 11:30.\" Sandy writes that she \"will probably arrive about 15 minutes late\". 15 minutes after 9:30 is 9:45.",
    "grammarOrReadingRule": {
        "title": "Time Calculation: Scheduled Start + Stated Delay",
        "description": "Start time = 9:30. Stated delay = \"15 minutes late\". Arrival time = 9:30 + 15 min = 9:45.",
        "keyTakeaway": "Starts at 9:30 + 15 minutes late -> 9:45."
    },
    "optionExplanations": {
        "A": "Incorrect. 9:00 is when her breakfast meeting is expected to finish downtown.",
        "B": "Incorrect. 9:15 would be arriving early, not late.",
        "C": "Incorrect. 9:30 is the scheduled start time of the workshop.",
        "D": "Correct. 15 minutes after 9:30 is 9:45."
    }
},

  194: {
    "questionNumber": 194,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Memo and Email: Workplace Safety Workshop",
    "passageType": "Memo & Email",
    "passageText": "DOCUMENT 1: MEMO\nTo: All personnel\nFrom: Marvin McLean, Office Manager\nRe: Workplace safety workshop\nDate: November 17\n\nOn December 7, a workshop on workplace safety will be offered by Elvira Walters of the National Workplace Safety Commission. The workshop will take place in Conference Room 2 from 9:30 to 11:30. This workshop is required for all department heads and recommended for all staff members. Please let me know before November 22 if you plan to attend. Also, please let me know if you cannot attend at this time but are still interested. If there is enough interest, we will offer the workshop again at a later date. Finally, because the end of the year is fast approaching, let me take this opportunity to remind everyone that attendance at a minimum of three staff development workshops per year is required of all personnel. A schedule of upcoming workshops is posted outside my office.\n\nDOCUMENT 2: EMAIL\nTo: marvin_mclean@zipsys.com\nFrom: sandy_bayliss@zipsys.com\nSent: 18 November 20--, 11:40\nSubject: safety workshop\n\nHi, Marvin,\nI am very much interested in next month's workshop on workplace safety that was mentioned in the memo you sent out yesterday. I would like to attend it, so please put me on the list. After this workshop, I will have fulfilled my attendance requirement for this year. I would like you to know that I have found each workshop I attended to be very informative and worthwhile. Also, I would like to apologize in advance because I will probably arrive about 15 minutes late to the workplace safety workshop. I have to be downtown early that morning for a breakfast meeting, but it shouldn't last much past 9:00, and then I can catch the subway to the office. I hope a slightly late arrival won't be a problem.\nThanks,\nSandy",
    "questionText": "How many workshops has Sandy Bayliss already attended this year?",
    "options": [
        {
            "label": "A",
            "text": "One"
        },
        {
            "label": "B",
            "text": "Two"
        },
        {
            "label": "C",
            "text": "Three"
        },
        {
            "label": "D",
            "text": "Four"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "Document 1 states: \"attendance at a minimum of three staff development workshops per year is required\". In Document 2, Sandy writes: \"After this workshop, I will have fulfilled my attendance requirement for this year.\" To reach the requirement of 3 after attending 1 more, she must have already attended 2 workshops.",
    "grammarOrReadingRule": {
        "title": "Cross-Passage Mathematical Deduction: Quota - Upcoming = Completed",
        "description": "Annual requirement = 3 workshops. Condition: \"After this workshop, I will have fulfilled my requirement\". Calculation: 3 - 1 = 2 already attended.",
        "keyTakeaway": "3 required - 1 upcoming = 2 already attended."
    },
    "optionExplanations": {
        "A": "Incorrect. If she had only attended 1, adding this one would equal 2, falling short of the required 3.",
        "B": "Correct. 2 completed + 1 upcoming = 3 required.",
        "C": "Incorrect. Three is her total requirement after completing this upcoming session.",
        "D": "Incorrect. Four exceeds the required attendance threshold."
    }
},

  195: {
    "questionNumber": 195,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Memo and Email: Workplace Safety Workshop",
    "passageType": "Memo & Email",
    "passageText": "DOCUMENT 1: MEMO\nTo: All personnel\nFrom: Marvin McLean, Office Manager\nRe: Workplace safety workshop\nDate: November 17\n\nOn December 7, a workshop on workplace safety will be offered by Elvira Walters of the National Workplace Safety Commission. The workshop will take place in Conference Room 2 from 9:30 to 11:30. This workshop is required for all department heads and recommended for all staff members. Please let me know before November 22 if you plan to attend. Also, please let me know if you cannot attend at this time but are still interested. If there is enough interest, we will offer the workshop again at a later date. Finally, because the end of the year is fast approaching, let me take this opportunity to remind everyone that attendance at a minimum of three staff development workshops per year is required of all personnel. A schedule of upcoming workshops is posted outside my office.\n\nDOCUMENT 2: EMAIL\nTo: marvin_mclean@zipsys.com\nFrom: sandy_bayliss@zipsys.com\nSent: 18 November 20--, 11:40\nSubject: safety workshop\n\nHi, Marvin,\nI am very much interested in next month's workshop on workplace safety that was mentioned in the memo you sent out yesterday. I would like to attend it, so please put me on the list. After this workshop, I will have fulfilled my attendance requirement for this year. I would like you to know that I have found each workshop I attended to be very informative and worthwhile. Also, I would like to apologize in advance because I will probably arrive about 15 minutes late to the workplace safety workshop. I have to be downtown early that morning for a breakfast meeting, but it shouldn't last much past 9:00, and then I can catch the subway to the office. I hope a slightly late arrival won't be a problem.\nThanks,\nSandy",
    "questionText": "Where will Sandy's breakfast meeting take place?",
    "options": [
        {
            "label": "A",
            "text": "At Marvin McLean's office"
        },
        {
            "label": "B",
            "text": "At her office"
        },
        {
            "label": "C",
            "text": "Downtown"
        },
        {
            "label": "D",
            "text": "In Conference Room 2"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "Sandy writes explicitly: \"I have to be downtown early that morning for a breakfast meeting...\".",
    "grammarOrReadingRule": {
        "title": "Scanning for Location Adverbials: downtown",
        "description": "Scan Document 2 for \"breakfast meeting\" and extract its location: \"downtown\".",
        "keyTakeaway": "downtown early that morning for a breakfast meeting -> Downtown."
    },
    "optionExplanations": {
        "A": "Incorrect. Marvin McLean is the office manager receiving the email.",
        "B": "Incorrect. She catches the subway to her office after the breakfast meeting.",
        "C": "Correct. Directly stated: \"downtown early that morning for a breakfast meeting\".",
        "D": "Incorrect. Conference Room 2 is where the safety workshop is held."
    }
},

  196: {
    "questionNumber": 196,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Warranty Notice and Customer Letter: Paper Shredder",
    "passageType": "Warranty & Letter",
    "passageText": "DOCUMENT 1: WARRANTY NOTICE\nNOTICE OF WARRANTY\nPaper Eater 2000 Deluxe Office Paper Shredder\n\nPaper Eater, Inc. warrants to the original purchaser of this product that it is free from defects for one year from the date of purchase. We will repair any manufacturing defects, or if we deem repair to be impracticable, we will replace the entire product with a new one. Repair or replacement are guaranteed only when the product has not been mishandled and has been used according to our instructions. Products that have been dropped or thrown or to which any item other than paper, such as staples, paper clips, or pieces of plastic, have been introduced are not covered by the terms of this warranty.\nWhen returning a product for repair, please enclose it in its original packaging and include a purchase receipt and the model number. Customers will be charged for any repairs outside the limits of this warranty.\n\nDOCUMENT 2: CUSTOMER LETTER\nApril 1, 20--\n\nCustomer Service Department\nPaper Eater, Inc.\n17 Main Street\nHarlowe's Junction, OH 43327\n\nDear Customer Service,\n\nI was excited about my recent purchase of a Paper Eater 2000 Deluxe Office Paper Shredder. Many sensitive financial reports come through my office, so a reliable and durable paper shredder is a necessity for me. I chose the Paper Eater 2000 Deluxe because I read many good reviews of it online and in consumer magazines. At first it lived up to its reputation, shredding large volumes of paper without a glitch. At one point, I even spilled a box of paper clips into it, but that didn't appear to slow it down. Then last week it completely stopped, and I have not been able to get it going again. I have to say I am not pleased about this at all. I have owned this machine only since the beginning of February. I would expect that a machine with such a good reputation would last a good deal longer. I am returning the machine herewith, wrapped up in a brand new box. The receipt, including place and date of purchase and the machine's model number, are enclosed. Please send me my refund as soon as possible. Thank you.\n\nSincerely,\nArnold Ahern",
    "questionText": "When did the customer buy his paper shredder?",
    "options": [
        {
            "label": "A",
            "text": "A week ago"
        },
        {
            "label": "B",
            "text": "A month ago"
        },
        {
            "label": "C",
            "text": "Two months ago"
        },
        {
            "label": "D",
            "text": "One year ago"
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "Document 2 letter is dated April 1. Arnold Ahern states: \"I have owned this machine only since the beginning of February.\" From the beginning of February to April 1 is exactly two months.",
    "grammarOrReadingRule": {
        "title": "Elapsed Time Calculation: Letter Date vs. Ownership Start",
        "description": "Letter date: April 1. Ownership start: beginning of February. Duration: February to April = two months ago.",
        "keyTakeaway": "Letter dated April 1 + owned since beginning of February -> Two months ago."
    },
    "optionExplanations": {
        "A": "Incorrect. \"Last week\" is when the machine stopped working, not when he bought it.",
        "B": "Incorrect. One month ago would be March, not February.",
        "C": "Correct. February to April represents two months.",
        "D": "Incorrect. One year is the length of the manufacturer warranty coverage."
    }
},

  197: {
    "questionNumber": 197,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Warranty Notice and Customer Letter: Paper Shredder",
    "passageType": "Warranty & Letter",
    "passageText": "DOCUMENT 1: WARRANTY NOTICE\nNOTICE OF WARRANTY\nPaper Eater 2000 Deluxe Office Paper Shredder\n\nPaper Eater, Inc. warrants to the original purchaser of this product that it is free from defects for one year from the date of purchase. We will repair any manufacturing defects, or if we deem repair to be impracticable, we will replace the entire product with a new one. Repair or replacement are guaranteed only when the product has not been mishandled and has been used according to our instructions. Products that have been dropped or thrown or to which any item other than paper, such as staples, paper clips, or pieces of plastic, have been introduced are not covered by the terms of this warranty.\nWhen returning a product for repair, please enclose it in its original packaging and include a purchase receipt and the model number. Customers will be charged for any repairs outside the limits of this warranty.\n\nDOCUMENT 2: CUSTOMER LETTER\nApril 1, 20--\n\nCustomer Service Department\nPaper Eater, Inc.\n17 Main Street\nHarlowe's Junction, OH 43327\n\nDear Customer Service,\n\nI was excited about my recent purchase of a Paper Eater 2000 Deluxe Office Paper Shredder. Many sensitive financial reports come through my office, so a reliable and durable paper shredder is a necessity for me. I chose the Paper Eater 2000 Deluxe because I read many good reviews of it online and in consumer magazines. At first it lived up to its reputation, shredding large volumes of paper without a glitch. At one point, I even spilled a box of paper clips into it, but that didn't appear to slow it down. Then last week it completely stopped, and I have not been able to get it going again. I have to say I am not pleased about this at all. I have owned this machine only since the beginning of February. I would expect that a machine with such a good reputation would last a good deal longer. I am returning the machine herewith, wrapped up in a brand new box. The receipt, including place and date of purchase and the machine's model number, are enclosed. Please send me my refund as soon as possible. Thank you.\n\nSincerely,\nArnold Ahern",
    "questionText": "What does the customer shred in his paper shredder?",
    "options": [
        {
            "label": "A",
            "text": "Financial reports"
        },
        {
            "label": "B",
            "text": "Magazines"
        },
        {
            "label": "C",
            "text": "Receipts"
        },
        {
            "label": "D",
            "text": "Product instructions"
        }
    ],
    "correctAnswer": "A",
    "whyCorrectRight": "Arnold Ahern writes: \"Many sensitive financial reports come through my office, so a reliable and durable paper shredder is a necessity for me.\" He uses the machine to shred sensitive financial reports.",
    "grammarOrReadingRule": {
        "title": "Scanning for Item Directly Handled by Equipment",
        "description": "\"Financial reports\" is what he shreds. \"Consumer magazines\" was where he read reviews, and \"receipts\" was proof of purchase.",
        "keyTakeaway": "Many sensitive financial reports come through my office -> Financial reports."
    },
    "optionExplanations": {
        "A": "Correct. Stated directly as the sensitive documents shredded in his office.",
        "B": "Incorrect. Consumer magazines were where he read product reviews.",
        "C": "Incorrect. The receipt was enclosed with his return letter as proof of purchase.",
        "D": "Incorrect. Product instructions were provided by the manufacturer."
    }
},

  198: {
    "questionNumber": 198,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Warranty Notice and Customer Letter: Paper Shredder",
    "passageType": "Warranty & Letter",
    "passageText": "DOCUMENT 1: WARRANTY NOTICE\nNOTICE OF WARRANTY\nPaper Eater 2000 Deluxe Office Paper Shredder\n\nPaper Eater, Inc. warrants to the original purchaser of this product that it is free from defects for one year from the date of purchase. We will repair any manufacturing defects, or if we deem repair to be impracticable, we will replace the entire product with a new one. Repair or replacement are guaranteed only when the product has not been mishandled and has been used according to our instructions. Products that have been dropped or thrown or to which any item other than paper, such as staples, paper clips, or pieces of plastic, have been introduced are not covered by the terms of this warranty.\nWhen returning a product for repair, please enclose it in its original packaging and include a purchase receipt and the model number. Customers will be charged for any repairs outside the limits of this warranty.\n\nDOCUMENT 2: CUSTOMER LETTER\nApril 1, 20--\n\nCustomer Service Department\nPaper Eater, Inc.\n17 Main Street\nHarlowe's Junction, OH 43327\n\nDear Customer Service,\n\nI was excited about my recent purchase of a Paper Eater 2000 Deluxe Office Paper Shredder. Many sensitive financial reports come through my office, so a reliable and durable paper shredder is a necessity for me. I chose the Paper Eater 2000 Deluxe because I read many good reviews of it online and in consumer magazines. At first it lived up to its reputation, shredding large volumes of paper without a glitch. At one point, I even spilled a box of paper clips into it, but that didn't appear to slow it down. Then last week it completely stopped, and I have not been able to get it going again. I have to say I am not pleased about this at all. I have owned this machine only since the beginning of February. I would expect that a machine with such a good reputation would last a good deal longer. I am returning the machine herewith, wrapped up in a brand new box. The receipt, including place and date of purchase and the machine's model number, are enclosed. Please send me my refund as soon as possible. Thank you.\n\nSincerely,\nArnold Ahern",
    "questionText": "How does the customer feel about the paper shredder now?",
    "options": [
        {
            "label": "A",
            "text": "Excited"
        },
        {
            "label": "B",
            "text": "Dissatisfied"
        },
        {
            "label": "C",
            "text": "Pleased"
        },
        {
            "label": "D",
            "text": "Sensitive"
        }
    ],
    "correctAnswer": "B",
    "whyCorrectRight": "Arnold writes: \"I have to say I am not pleased about this at all... I would expect that a machine with such a good reputation would last a good deal longer.\" Being \"not pleased\" and returning the machine for a refund means he is dissatisfied.",
    "grammarOrReadingRule": {
        "title": "Sentiment Inference: not pleased at all -> Dissatisfied",
        "description": "\"Not pleased at all\" is a direct paraphrase for \"dissatisfied\".",
        "keyTakeaway": "not pleased about this at all -> Dissatisfied."
    },
    "optionExplanations": {
        "A": "Incorrect. He was \"excited\" when he initially bought the machine (\"I was excited about my recent purchase\"), but not now.",
        "B": "Correct. Directly reflects his statement that he is \"not pleased about this at all\".",
        "C": "Incorrect. He explicitly states he is \"not pleased\".",
        "D": "Incorrect. \"Sensitive\" describes the financial reports, not his emotional state."
    }
},

  199: {
    "questionNumber": 199,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Warranty Notice and Customer Letter: Paper Shredder",
    "passageType": "Warranty & Letter",
    "passageText": "DOCUMENT 1: WARRANTY NOTICE\nNOTICE OF WARRANTY\nPaper Eater 2000 Deluxe Office Paper Shredder\n\nPaper Eater, Inc. warrants to the original purchaser of this product that it is free from defects for one year from the date of purchase. We will repair any manufacturing defects, or if we deem repair to be impracticable, we will replace the entire product with a new one. Repair or replacement are guaranteed only when the product has not been mishandled and has been used according to our instructions. Products that have been dropped or thrown or to which any item other than paper, such as staples, paper clips, or pieces of plastic, have been introduced are not covered by the terms of this warranty.\nWhen returning a product for repair, please enclose it in its original packaging and include a purchase receipt and the model number. Customers will be charged for any repairs outside the limits of this warranty.\n\nDOCUMENT 2: CUSTOMER LETTER\nApril 1, 20--\n\nCustomer Service Department\nPaper Eater, Inc.\n17 Main Street\nHarlowe's Junction, OH 43327\n\nDear Customer Service,\n\nI was excited about my recent purchase of a Paper Eater 2000 Deluxe Office Paper Shredder. Many sensitive financial reports come through my office, so a reliable and durable paper shredder is a necessity for me. I chose the Paper Eater 2000 Deluxe because I read many good reviews of it online and in consumer magazines. At first it lived up to its reputation, shredding large volumes of paper without a glitch. At one point, I even spilled a box of paper clips into it, but that didn't appear to slow it down. Then last week it completely stopped, and I have not been able to get it going again. I have to say I am not pleased about this at all. I have owned this machine only since the beginning of February. I would expect that a machine with such a good reputation would last a good deal longer. I am returning the machine herewith, wrapped up in a brand new box. The receipt, including place and date of purchase and the machine's model number, are enclosed. Please send me my refund as soon as possible. Thank you.\n\nSincerely,\nArnold Ahern",
    "questionText": "What did the customer neglect to include when returning the shredder?",
    "options": [
        {
            "label": "A",
            "text": "The receipt"
        },
        {
            "label": "B",
            "text": "The model number"
        },
        {
            "label": "C",
            "text": "The refund form"
        },
        {
            "label": "D",
            "text": "The original packaging"
        }
    ],
    "correctAnswer": "D",
    "whyCorrectRight": "Document 1 requires: \"When returning a product for repair, please enclose it in its original packaging...\". In Document 2, Arnold admits: \"I am returning the machine herewith, wrapped up in a brand new box.\" By using a brand new box rather than the original packaging, he neglected to include the original packaging.",
    "grammarOrReadingRule": {
        "title": "Discrepancy Identification Between Warranty Requirements and Customer Action",
        "description": "Warranty requirement: \"original packaging\". Customer admission: \"wrapped up in a brand new box\". Discrepancy: neglected original packaging.",
        "keyTakeaway": "Requires original packaging; customer used brand new box -> The original packaging."
    },
    "optionExplanations": {
        "A": "Incorrect. The receipt was enclosed (\"The receipt... are enclosed\").",
        "B": "Incorrect. The model number was enclosed (\"and the machine's model number, are enclosed\").",
        "C": "Incorrect. No refund form is mentioned in the warranty.",
        "D": "Correct. He used a new box instead of the required original packaging."
    }
},

  200: {
    "questionNumber": 200,
    "part": "Part 7: Reading Comprehension",
    "partShort": "Part 7",
    "passageTitle": "Warranty Notice and Customer Letter: Paper Shredder",
    "passageType": "Warranty & Letter",
    "passageText": "DOCUMENT 1: WARRANTY NOTICE\nNOTICE OF WARRANTY\nPaper Eater 2000 Deluxe Office Paper Shredder\n\nPaper Eater, Inc. warrants to the original purchaser of this product that it is free from defects for one year from the date of purchase. We will repair any manufacturing defects, or if we deem repair to be impracticable, we will replace the entire product with a new one. Repair or replacement are guaranteed only when the product has not been mishandled and has been used according to our instructions. Products that have been dropped or thrown or to which any item other than paper, such as staples, paper clips, or pieces of plastic, have been introduced are not covered by the terms of this warranty.\nWhen returning a product for repair, please enclose it in its original packaging and include a purchase receipt and the model number. Customers will be charged for any repairs outside the limits of this warranty.\n\nDOCUMENT 2: CUSTOMER LETTER\nApril 1, 20--\n\nCustomer Service Department\nPaper Eater, Inc.\n17 Main Street\nHarlowe's Junction, OH 43327\n\nDear Customer Service,\n\nI was excited about my recent purchase of a Paper Eater 2000 Deluxe Office Paper Shredder. Many sensitive financial reports come through my office, so a reliable and durable paper shredder is a necessity for me. I chose the Paper Eater 2000 Deluxe because I read many good reviews of it online and in consumer magazines. At first it lived up to its reputation, shredding large volumes of paper without a glitch. At one point, I even spilled a box of paper clips into it, but that didn't appear to slow it down. Then last week it completely stopped, and I have not been able to get it going again. I have to say I am not pleased about this at all. I have owned this machine only since the beginning of February. I would expect that a machine with such a good reputation would last a good deal longer. I am returning the machine herewith, wrapped up in a brand new box. The receipt, including place and date of purchase and the machine's model number, are enclosed. Please send me my refund as soon as possible. Thank you.\n\nSincerely,\nArnold Ahern",
    "questionText": "How will the customer service department probably respond?",
    "options": [
        {
            "label": "A",
            "text": "They will issue a refund."
        },
        {
            "label": "B",
            "text": "They will replace the product."
        },
        {
            "label": "C",
            "text": "They will deny the customer's request."
        },
        {
            "label": "D",
            "text": "They will sell the customer a new product."
        }
    ],
    "correctAnswer": "C",
    "whyCorrectRight": "Document 1 specifies that products \"to which any item other than paper, such as staples, paper clips, or pieces of plastic, have been introduced are not covered by the terms of this warranty.\" In Document 2, the customer admits: \"At one point, I even spilled a box of paper clips into it...\". Because introducing paper clips completely voids warranty coverage, and the warranty only provides repair/replacement rather than refunds anyway, customer service will deny his request.",
    "grammarOrReadingRule": {
        "title": "Cross-Passage Rule Application & Conclusion",
        "description": "Warranty: paper clips void coverage. Customer: spilled a box of paper clips. Conclusion: Customer service will deny the claim/request.",
        "keyTakeaway": "Spilled paper clips voids warranty -> Deny the customer's request."
    },
    "optionExplanations": {
        "A": "Incorrect. The warranty policy does not offer refunds, and his misuse voided the warranty.",
        "B": "Incorrect. Replacement is only guaranteed for manufacturing defects when used according to instructions.",
        "C": "Correct. Spilling paper clips breached warranty terms, so the request will be denied.",
        "D": "Incorrect. The formal response to an invalid warranty claim is rejection of the claim."
    }
},

};

/**
 * Universal builder function for any student mistake record.
 * Generates uniform, shared explanation for student's choice, official correct choice,
 * grammar/reading rule, and distractor option analyses across all students.
 */
export function buildMistakeRecord(
  questionNumber: number,
  studentAnswer: 'A' | 'B' | 'C' | 'D',
  _candidateCorrectAnswer?: 'A' | 'B' | 'C' | 'D'
): ReviewItem {
  const master = QUESTION_BANK[questionNumber];

  if (!master) {
    const effectiveCorrect = _candidateCorrectAnswer || 'A';
    return {
      id: questionNumber,
      questionNumber,
      part: questionNumber <= 140 ? 'Part 5: Incomplete Sentences' : questionNumber <= 152 ? 'Part 6: Text Completion' : 'Part 7: Reading Comprehension',
      partShort: questionNumber <= 140 ? 'Part 5' : questionNumber <= 152 ? 'Part 6' : 'Part 7',
      questionText: `Question ${questionNumber}`,
      options: [
        { label: 'A', text: 'Option A' },
        { label: 'B', text: 'Option B' },
        { label: 'C', text: 'Option C' },
        { label: 'D', text: 'Option D' },
      ],
      studentAnswer,
      correctAnswer: effectiveCorrect,
      sheetCorrectionMark: `${questionNumber} | ${studentAnswer} | ${effectiveCorrect}`,
      ruleApplied: `Raw Mistake Record: ${questionNumber} | ${studentAnswer} | ${effectiveCorrect}`,
    };
  }

  // Official Answer Key is always the supreme authority
  const effectiveCorrect = master.correctAnswer;
  const whyStudentWrong = master.optionExplanations[studentAnswer] || `Option (${studentAnswer}) is incorrect for this question.`;
  const whyCorrectRight = master.whyCorrectRight;

  // Build distractor analysis for other choices
  const otherOptions: DistractorExplanation[] = master.options
    .filter((opt) => opt.label !== studentAnswer && opt.label !== effectiveCorrect)
    .map((opt) => ({
      label: opt.label,
      text: opt.text,
      explanation: master.optionExplanations[opt.label] || 'Does not fit the grammar or context requirement of this sentence.',
    }));

  return {
    id: questionNumber,
    questionNumber,
    part: master.part,
    partShort: master.partShort,
    passageTitle: master.passageTitle,
    passageType: master.passageType,
    passageText: master.passageText,
    questionText: master.questionText,
    options: master.options,
    studentAnswer,
    correctAnswer: effectiveCorrect,
    sheetCorrectionMark: `${questionNumber} | ${studentAnswer} | ${effectiveCorrect}`,
    ruleApplied: `Raw Mistake Record: ${questionNumber} | ${studentAnswer} | ${effectiveCorrect}`,
    whyStudentWrong,
    whyCorrectRight,
    grammarOrReadingRule: master.grammarOrReadingRule,
    otherOptions,
  };
}
