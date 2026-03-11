export type StyleMode =
  | "academic"
  | "corporate"
  | "political"
  | "philosophical";
export type IntensityLevel = "moderate" | "elevated" | "surreal";

type Lexicon = Record<string, string>;

const academicLexicon: Lexicon = {
  show: "demonstrate",
  shows: "demonstrates",
  showing: "demonstrating",
  showed: "demonstrated",
  use: "utilize",
  uses: "utilizes",
  using: "utilizing",
  used: "utilized",
  help: "facilitate",
  helps: "facilitates",
  helped: "facilitated",
  helping: "facilitating",
  find: "ascertain",
  finds: "ascertains",
  finding: "ascertaining",
  found: "ascertained",
  think: "conceptualize",
  thinks: "conceptualizes",
  thinking: "conceptualizing",
  thought: "conceptualized",
  know: "cognize",
  knows: "cognizes",
  knowing: "cognizing",
  knew: "cognized",
  get: "obtain",
  gets: "obtains",
  getting: "obtaining",
  got: "obtained",
  need: "necessitate",
  needs: "necessitates",
  needing: "necessitating",
  needed: "necessitated",
  change: "transform",
  changes: "transforms",
  changing: "transforming",
  changed: "transformed",
  make: "engender",
  makes: "engenders",
  making: "engendering",
  made: "engendered",
  say: "articulate",
  says: "articulates",
  saying: "articulating",
  said: "articulated",
  start: "initiate",
  starts: "initiates",
  started: "initiated",
  starting: "initiating",
  end: "culminate",
  ends: "culminates",
  ended: "culminated",
  ending: "culminating",
  try: "endeavor",
  tries: "endeavors",
  tried: "endeavored",
  trying: "endeavoring",
  look: "examine",
  looks: "examines",
  looked: "examined",
  looking: "examining",
  important: "paramount",
  about: "pertaining to",
  because: "owing to the fact that",
  big: "substantial",
  large: "considerable",
  small: "negligible",
  good: "efficacious",
  bad: "deleterious",
  problem: "problematic construct",
  problems: "problematic constructs",
  idea: "theoretical construct",
  ideas: "theoretical constructs",
  people: "individuals",
  person: "individual",
  thing: "phenomenon",
  things: "phenomena",
  way: "methodology",
  ways: "methodologies",
  result: "empirical outcome",
  results: "empirical outcomes",
  study: "systematic investigation",
  studies: "systematic investigations",
  data: "empirical data",
  research: "scholarly inquiry",
  understand: "comprehend",
  understands: "comprehends",
  understanding: "comprehending",
  understood: "comprehended",
  very: "significantly",
  really: "substantially",
  often: "with considerable frequency",
  always: "invariably",
  never: "under no circumstances",
  also: "furthermore",
  but: "however",
  and: "in addition to",
  so: "consequently",
  subsequently: "subsequently",
  now: "at present",
};

const corporateLexicon: Lexicon = {
  improve: "leverage synergies to optimize",
  improves: "leverages synergies to optimize",
  improved: "leveraged synergies to optimize",
  improving: "leveraging synergies to optimize",
  do: "execute",
  does: "executes",
  doing: "executing",
  did: "executed",
  plan: "strategic roadmap",
  plans: "strategic roadmaps",
  planning: "roadmapping",
  planned: "roadmapped",
  team: "cross-functional stakeholder group",
  teams: "cross-functional stakeholder groups",
  meeting: "alignment session",
  meetings: "alignment sessions",
  problem: "pain point",
  problems: "pain points",
  solution: "value proposition",
  solutions: "value propositions",
  start: "spearhead",
  starts: "spearheads",
  started: "spearheaded",
  starting: "spearheading",
  think: "ideate",
  thinks: "ideates",
  thinking: "ideating",
  thought: "ideated",
  change: "pivot",
  changes: "pivots",
  changed: "pivoted",
  changing: "pivoting",
  important: "mission-critical",
  help: "enable",
  helps: "enables",
  helped: "enabled",
  helping: "enabling",
  use: "leverage",
  uses: "leverages",
  used: "leveraged",
  using: "leveraging",
  goal: "north star metric",
  goals: "north star metrics",
  result: "key deliverable",
  results: "key deliverables",
  idea: "disruptive innovation",
  ideas: "disruptive innovations",
  success: "ROI-positive outcome",
  make: "action",
  makes: "actions",
  made: "actioned",
  making: "actioning",
  look: "deep-dive into",
  looks: "deep-dives into",
  need: "drive the needle on",
  needs: "drives the needle on",
  work: "drive impact",
  works: "drives impact",
  working: "driving impact",
  worked: "drove impact",
  people: "key stakeholders",
  person: "key stakeholder",
  strategy: "go-to-market playbook",
  product: "core value driver",
  customer: "end-user persona",
  customers: "end-user personas",
  data: "actionable insights",
  money: "capital allocation",
  time: "bandwidth",
  very: "hyper-",
  really: "genuinely",
  also: "additionally",
  but: "that said,",
  so: "as a result,",
  good: "best-in-class",
  bad: "suboptimal",
  new: "next-gen",
  big: "enterprise-scale",
  small: "lean",
};

const politicalLexicon: Lexicon = {
  people: "the hardworking citizens of this great nation",
  person: "our fellow citizen",
  problem: "systemic challenge facing our communities",
  problems: "systemic challenges facing our communities",
  change: "transformative reform",
  changes: "transformative reforms",
  changed: "enacted transformative reform",
  changing: "enacting transformative reform",
  good: "foundational to our shared values",
  bad: "fundamentally at odds with our principles",
  important: "of utmost concern to the electorate",
  plan: "comprehensive legislative framework",
  plans: "comprehensive legislative frameworks",
  help: "champion the cause of",
  helps: "champions the cause of",
  helped: "championed the cause of",
  helping: "championing the cause of",
  money: "taxpayer resources",
  work: "advance the common good",
  works: "advances the common good",
  worked: "advanced the common good",
  idea: "bold vision for the future",
  ideas: "bold visions for the future",
  say: "unequivocally affirm",
  says: "unequivocally affirms",
  said: "unequivocally affirmed",
  saying: "unequivocally affirming",
  need: "are morally obligated to ensure",
  needs: "is morally obligated to ensure",
  government: "the institutions of our democracy",
  law: "the sacred covenant of our constitution",
  future: "the legacy we leave for our children",
  community: "the fabric of our society",
  right: "inalienable right",
  rights: "inalienable rights",
  freedom: "the bedrock of liberty",
  economy: "the engine of prosperity",
  believe: "stand firmly in our conviction",
  believes: "stands firmly in conviction",
  think: "hold with deep conviction",
  thinks: "holds with deep conviction",
  country: "this great nation",
  nation: "this great nation",
  also: "furthermore, I would submit,",
  but: "and yet,",
  so: "and therefore,",
  very: "profoundly",
  really: "truly and deeply",
};

const philosophicalLexicon: Lexicon = {
  is: "manifests as",
  are: "present themselves as",
  was: "historically manifested as",
  were: "historically presented as",
  exists: "has ontological presence",
  exist: "possess ontological presence",
  think: "engage in phenomenological reflection upon",
  thinks: "engages in phenomenological reflection upon",
  thinking: "engaging in phenomenological reflection upon",
  thought: "engaged in phenomenological reflection upon",
  see: "perceive through the hermeneutic lens of",
  sees: "perceives through the hermeneutic lens of",
  seeing: "perceiving through the hermeneutic lens of",
  saw: "perceived through the hermeneutic lens of",
  understand: "apprehend the dialectical nature of",
  understands: "apprehends the dialectical nature of",
  understanding: "apprehending the dialectical nature of",
  understood: "apprehended the dialectical nature of",
  true: "epistemically warranted",
  truth: "the epistemic ground of being",
  know: "hold justified belief in",
  knows: "holds justified belief in",
  knowing: "holding justified belief in",
  knew: "held justified belief in",
  change: "undergo ontological transformation",
  changes: "undergoes ontological transformation",
  changed: "underwent ontological transformation",
  changing: "undergoing ontological transformation",
  reality: "the phenomenal substrate of existence",
  mind: "the locus of consciousness",
  thing: "the noumenal object",
  things: "noumenal objects",
  idea: "the Platonic ideal",
  ideas: "Platonic ideals",
  good: "teleologically virtuous",
  bad: "axiologically deficient",
  self: "the Cartesian subject",
  world: "the totality of phenomenal experience",
  time: "the temporal flux of becoming",
  space: "the a priori form of intuition",
  human: "the being-toward-death",
  humans: "beings-toward-death",
  life: "the existential project of Dasein",
  death: "the ultimate horizon of finitude",
  meaning: "the intentional structure of consciousness",
  experience: "lived phenomenological encounter",
  language: "the house of Being",
  society: "the intersubjective lifeworld",
  power: "the will-to-power",
  knowledge: "epistemic justification",
  believe: "posit as axiomatic",
  believes: "posits as axiomatic",
  also: "moreover, in the dialectical sense,",
  but: "yet, paradoxically,",
  so: "hence, by logical necessity,",
  very: "profoundly and irreducibly",
  really: "in the most fundamental ontological sense,",
};

// Surreal lexicon: replaces virtually every common word with incomprehensible
// philosophical jargon, neologisms, and glossary-level obscurantism.
const surrealLexicon: Lexicon = {
  // Articles & determiners
  the: "the apophantic",
  this: "this hyperstatic",
  that: "that tautological",
  these: "these interstitial",
  those: "those paraconsistent",
  // Common verbs
  is: "subsists qua",
  are: "interpellate as",
  was: "retroactively sublated into",
  were: "apodictically constituted as",
  be: "achieve haecceity as",
  been: "undergone alethic disclosure as",
  being: "perpetually differentiating as",
  do: "enact the praxis of",
  does: "enacts the praxis of",
  did: "performed the dialectical negation of",
  doing: "enacting the praxeological schema of",
  have: "aporetically possess",
  has: "aporetically possesses",
  had: "previously instantiated",
  having: "aporetically possessing",
  will: "shall teleologically effectuate",
  can: "holds the potentiality to",
  could: "held the potentiality to",
  would: "would, ceteris paribus, effectuate",
  should: "is normatively obligated by deontic axiom to",
  may: "possesses the modal possibility to",
  might: "subsists within the liminal possibility of",
  must: "is apodictically necessitated to",
  // Thinking / perceiving
  think: "cogitate upon the noetic residue of",
  thinks: "cogitates upon the noetic residue of",
  thinking: "cogitating upon the noetic residue of",
  thought: "retroactively cognized the noetic residue of",
  know: "epistemically triangulate",
  knows: "epistemically triangulates",
  knowing: "epistemically triangulating",
  knew: "had erstwhile epistemically triangulated",
  see: "apprehend via eidetic reduction",
  sees: "apprehends via eidetic reduction",
  saw: "apprehended via eidetic reduction",
  seeing: "apprehending via eidetic reduction",
  feel: "interoceptively cathect",
  feels: "interoceptively cathects",
  felt: "interoceptively cathected",
  feeling: "interoceptively cathecting",
  understand: "achieve apperceptive synthesis of",
  understands: "achieves apperceptive synthesis of",
  understood: "achieved apperceptive synthesis of",
  understanding: "achieving apperceptive synthesis of",
  believe: "posit as an apodictic verity",
  believes: "posits as an apodictic verity",
  believed: "posited as an apodictic verity",
  believing: "positing as an apodictic verity",
  // Movement / action verbs
  go: "vectorially traverse the rhizomatic continuum toward",
  goes: "vectorially traverses the rhizomatic continuum toward",
  went: "heterotopically displaced itself through",
  going: "vectorially traversing the rhizomatic continuum toward",
  come: "converge upon the intersubjective locus of",
  comes: "converges upon the intersubjective locus of",
  came: "converged upon the intersubjective locus of",
  coming: "converging upon the intersubjective locus of",
  make: "instantiate the simulacrum of",
  makes: "instantiates the simulacrum of",
  made: "instantiated the simulacrum of",
  making: "instantiating the simulacrum of",
  take: "appropriate the semiotic field of",
  takes: "appropriates the semiotic field of",
  took: "appropriated the semiotic field of",
  taking: "appropriating the semiotic field of",
  give: "sublimate into the intersubjective economy",
  gives: "sublimates into the intersubjective economy",
  gave: "sublimated into the intersubjective economy",
  giving: "sublimating into the intersubjective economy",
  get: "precipitate the ontogenesis of",
  gets: "precipitates the ontogenesis of",
  got: "precipitated the ontogenesis of",
  getting: "precipitating the ontogenesis of",
  put: "suture into the symbolic order",
  puts: "sutures into the symbolic order",
  use: "instrumentalize through the apparatus of",
  uses: "instrumentalizes through the apparatus of",
  used: "instrumentalized through the apparatus of",
  using: "instrumentalizing through the apparatus of",
  find: "iteratively uncover via aleatory deconstruction",
  finds: "iteratively uncovers via aleatory deconstruction",
  found: "iteratively uncovered via aleatory deconstruction",
  finding: "iteratively uncovering via aleatory deconstruction",
  say: "enunciate the logocentric trace of",
  says: "enunciates the logocentric trace of",
  said: "enunciated the logocentric trace of",
  saying: "enunciating the logocentric trace of",
  tell: "transmit via the pharmakon of",
  tells: "transmits via the pharmakon of",
  told: "transmitted via the pharmakon of",
  work: "operationalize the dispositif of",
  works: "operationalizes the dispositif of",
  worked: "operationalized the dispositif of",
  working: "operationalizing the dispositif of",
  help: "catalyze the immanent potentiality of",
  helps: "catalyzes the immanent potentiality of",
  helped: "catalyzed the immanent potentiality of",
  helping: "catalyzing the immanent potentiality of",
  need: "experience the constitutive lack of",
  needs: "experiences the constitutive lack of",
  needed: "experienced the constitutive lack of",
  start: "inaugurate the teleological unfolding of",
  starts: "inaugurates the teleological unfolding of",
  started: "inaugurated the teleological unfolding of",
  end: "reach the eschatological terminus of",
  ends: "reaches the eschatological terminus of",
  ended: "reached the eschatological terminus of",
  change: "effectuate the dialectical aufhebung of",
  changes: "effectuates the dialectical aufhebung of",
  changed: "effectuated the dialectical aufhebung of",
  show: "foreground the palimpsestic strata of",
  shows: "foregrounds the palimpsestic strata of",
  showed: "foregrounded the palimpsestic strata of",
  look: "direct the scopic drive toward",
  looks: "directs the scopic drive toward",
  looked: "directed the scopic drive toward",
  try: "engage in the Sisyphean endeavor of",
  tries: "engages in the Sisyphean endeavor of",
  tried: "engaged in the Sisyphean endeavor of",
  // Nouns
  thing: "diegetic assemblage",
  things: "diegetic assemblages",
  idea: "hyperobject of ideational semblance",
  ideas: "hyperobjects of ideational semblance",
  problem: "aporia",
  problems: "aporias",
  people: "rhizomatic subjectivities",
  person: "interpellated subject-position",
  world: "the immanent plane of consistency",
  time: "chrono-topological flux",
  way: "onto-epistemic trajectory",
  ways: "onto-epistemic trajectories",
  life: "the biopolitical regime of the living",
  mind: "the spectral cogito",
  body: "the somatized archive of power",
  word: "signifier without a transcendental signified",
  words: "signifiers without transcendental signifieds",
  language: "the differential matrix of the Symbolic",
  truth: "aletheia qua unconcealment",
  knowledge: "the panoptical regime of episteme",
  power: "the capillary network of biopower",
  society: "the spectacle of simulated consensus",
  reality: "the hyperreal simulacrum",
  meaning: "the absent center of the semiosphere",
  experience: "the phenomeno-affective assemblage",
  data: "the post-structuralist trace",
  system: "the autopoietic totality",
  process: "the immanent machinic phylum",
  result: "the residual haecceity",
  results: "the residual haecceities",
  plan: "the teleocratic schema",
  plans: "the teleocratic schemata",
  right: "the onto-normative prerogative",
  // Adjectives
  good: "axiologically efficacious within the normative horizon",
  bad: "nihilistically entropic vis-a-vis the telos",
  big: "macrostructurally overdetermined",
  large: "extensively hyperbolized",
  small: "microphenomenologically negligible",
  new: "post-structurally emergent",
  old: "archaeologically sedimented",
  important: "epistemologically cathected",
  true: "alethically unconcealed",
  false: "apophatically negated",
  real: "hypostatized within the symbolic register",
  free: "in a state of negative-liberty aporia",
  human: "biopolitically inscribed",
  // Adverbs & connectives
  very: "in a manner incommensurable with ordinary predication,",
  really: "at the level of the transcendental signifier,",
  also: "in a complementary act of supplementarity,",
  but: "yet, in a Derridean differance,",
  and: "and, via paratactic concatenation,",
  so: "hence, through the telos of immanent critique,",
  because: "by virtue of its constitutive auto-negation, whereby",
  if: "under the apodeictic condition that",
  or: "or, in its dialectical negation,",
  not: "non-",
  now: "at the zero-point of chrono-topological rupture",
  always: "invariably across all possible worlds",
  never: "under no conceivable modal configuration",
  often: "with a frequency that betrays its own iterability",
  about: "in the vicinity of the epistemic horizon of",
  just: "merely as a pharmakon for",
  like: "via a Deleuzian rhizomatic analogy to",
  more: "in an amplified register of surplus jouissance",
  most: "at the acme of its asymptotic trajectory",
  how: "through which onto-epistemic mechanism",
  what: "the diegetic configuration of which",
  when: "at the chrono-topological moment wherein",
  where: "within the heterotopic locus in which",
  who: "the interpellated subject-position that",
  why: "through what constitutive logic of desire",
};

const academicConnectors = [
  "Furthermore, it is imperative to note that",
  "In this theoretical framework,",
  "Consequently, one must consider that",
  "It bears elucidation that",
  "Empirical evidence suggests that",
  "Scholarly discourse has established that",
  "Within the parameters of rigorous academic inquiry,",
  "As the extant literature indicates,",
];

const corporateConnectors = [
  "At the end of the day,",
  "Moving the needle forward,",
  "To circle back on this,",
  "From a high-level perspective,",
  "In terms of scalability,",
  "Doubling down on our core competencies,",
  "To ensure we're all aligned,",
  "Taking a 30,000-foot view,",
];

const politicalConnectors = [
  "Let us be unequivocal:",
  "History will judge us by how we respond to this moment.",
  "The stakes could not be higher.",
  "Fellow citizens,",
  "This is not merely a question of policy, but of principle:",
  "The mandate of the people demands that",
  "In the great tradition of this democracy,",
  "We owe it to future generations to recognize that",
];

const philosophicalConnectors = [
  "In a Hegelian synthesis,",
  "From a phenomenological standpoint,",
  "The hermeneutic circle demands that we recognize",
  "As Foucault might posit,",
  "Through the dialectical interplay of thesis and antithesis,",
  "In the Kantian tradition,",
  "The Derridean deconstruction of this premise reveals that",
  "Nietzsche's perspectivism compels us to acknowledge that",
];

const surrealConnectors = [
  "Notwithstanding the onto-epistemic aporia that subtends this very enunciation,",
  "In a Lacanian foreclosure of the Real qua unsymbolizable excess,",
  "Through the hauntological residue of Derrida's differance,",
  "As Badiou's set-theoretical ontology would have us surmise,",
  "Traversing the rhizomatic plateau of Deleuzian becoming,",
  "Via the negative dialectics of Adorno's non-identity thinking,",
  "In the interstitial space of Agamben's state of exception,",
  "Pursuant to the genealogical discontinuity Foucault excavates,",
  "Within the autopoietic closure of Luhmannian systems theory,",
  "By the aleatory materialism that Althusser leaves as his final pharmakon,",
];

const connectorMap: Record<StyleMode, string[]> = {
  academic: academicConnectors,
  corporate: corporateConnectors,
  political: politicalConnectors,
  philosophical: philosophicalConnectors,
};

const lexiconMap: Record<StyleMode, Lexicon> = {
  academic: academicLexicon,
  corporate: corporateLexicon,
  political: politicalLexicon,
  philosophical: philosophicalLexicon,
};

const surrealOpenings: Record<StyleMode, string> = {
  academic:
    "\u2014 Prolegomena to a Post-Foundationalist Epistemological Rupture \u2014",
  corporate: "\u2014 Hyper-Synergistic Value-Maximization Ontogramme \u2014",
  political: "\u2014 Manifesto of the Transcendental Civic Signifier \u2014",
  philosophical:
    "\u2014 Abyssal Meditation Upon the Void That Speaks Itself \u2014",
};

function splitIntoSentences(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]*/g) ?? [text];
  return sentences.map((s) => s.trim()).filter((s) => s.length > 0);
}

function applySubstitutions(
  text: string,
  lexicon: Lexicon,
  substitutionRate: number,
): string {
  let result = text;
  for (const [word, replacement] of Object.entries(lexicon)) {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    result = result.replace(regex, (match) => {
      if (Math.random() > substitutionRate) return match;
      if (
        match[0] === match[0].toUpperCase() &&
        match[0] !== match[0].toLowerCase()
      ) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  return result;
}

function getRandomConnector(connectors: string[]): string {
  return connectors[Math.floor(Math.random() * connectors.length)];
}

export function transformText(
  text: string,
  style: StyleMode,
  intensity: IntensityLevel,
): string {
  if (!text.trim()) return "";

  // Surreal mode: override all with the global surreal lexicon and connectors
  if (intensity === "surreal") {
    const sentences = splitIntoSentences(text);
    const transformed = sentences.map((s) =>
      applySubstitutions(s, surrealLexicon, 1.0),
    );
    const result: string[] = [];
    for (let i = 0; i < transformed.length; i++) {
      if (i > 0) {
        const connector = getRandomConnector(surrealConnectors);
        const sentence = transformed[i];
        const lower = sentence.charAt(0).toLowerCase() + sentence.slice(1);
        result.push(`${connector} ${lower}`);
      } else {
        result.push(transformed[i]);
      }
    }
    const opening = surrealOpenings[style];
    return `${opening}\n\n${result.join(" ")}`;
  }

  const lexicon = lexiconMap[style];
  const connectors = connectorMap[style];

  const substitutionRates: Record<IntensityLevel, number> = {
    moderate: 0.4,
    elevated: 0.7,
    surreal: 1.0,
  };

  const connectorFrequency: Record<IntensityLevel, number> = {
    moderate: 3,
    elevated: 2,
    surreal: 1,
  };

  const rate = substitutionRates[intensity];
  const freq = connectorFrequency[intensity];

  const sentences = splitIntoSentences(text);
  const transformedSentences = sentences.map((sentence) =>
    applySubstitutions(sentence, lexicon, rate),
  );

  const result: string[] = [];
  for (let i = 0; i < transformedSentences.length; i++) {
    if (i > 0 && i % freq === 0) {
      const connector = getRandomConnector(connectors);
      const sentence = transformedSentences[i];
      const lowerSentence =
        sentence.charAt(0).toLowerCase() + sentence.slice(1);
      result.push(`${connector} ${lowerSentence}`);
    } else {
      result.push(transformedSentences[i]);
    }
  }

  return result.join(" ");
}
