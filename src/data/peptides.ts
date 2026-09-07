import type { Peptide } from '@/lib/evidence'

export const peptides: Peptide[] = [
	{
		slug: 'semaglutide',
		name: 'Semaglutide',
		shortCode: 'Sema',
		axis: 'incretin',
		archetype: 'The Measured Incretin',
		hypeSentence: 'People treat it as a universal fat-loss shortcut.',
		knownSentence:
			'FDA-approved products (Ozempic / Wegovy / Rybelsus) have large human outcomes programs for labeled uses.',
		childExplanation:
			'This is a real medicine that helps some people eat less and control blood sugar. Doctors prescribe branded pens. A random vial online is not the same thing.',
		regulatoryStatus: 'approved',
		score: {
			humanEvidence: 24,
			trialQuality: 19,
			replication: 14,
			effectMagnitude: 8,
			safetyUnderstanding: 13,
			regulatoryAcceptance: 15,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'strong',
				note: 'Weight and glycemic effects in large RCTs',
				label: 'FACT',
			},
			{
				system: 'gut',
				strength: 'good',
				note: 'GI adverse events common during titration',
				label: 'FACT',
			},
			{
				system: 'vessels',
				strength: 'good',
				note: 'SELECT: MACE reduction with Wegovy in indicated population',
				label: 'FACT',
			},
		],
		goals: ['fat-loss', 'diabetes'],
		studies: [
			{
				title: 'STEP 1 (Wegovy weight)',
				year: 2021,
				design: 'RCT',
				n: '~1961',
				doseAsStudied: '2.4 mg weekly (research/label context)',
				duration: '68 weeks',
				outcome: '~14.9% mean body-weight reduction vs placebo',
				harms: 'GI events predominate',
				kind: 'landmark',
				label: 'FACT',
			},
			{
				title: 'SELECT (CV outcomes)',
				year: 2023,
				design: 'CVOT RCT',
				outcome: '~20% relative MACE reduction in indicated obesity + CVD population',
				kind: 'landmark',
				label: 'FACT',
			},
		],
		risks: [
			{ text: 'Nausea, vomiting, constipation, diarrhea', tier: 'common', label: 'FACT' },
			{ text: 'Gallbladder disease signals in class', tier: 'uncommon', label: 'FACT' },
			{ text: 'Boxed warning class language on MTC / MEN2 contraindications', tier: 'serious', label: 'FACT' },
			{ text: 'Long-term effects of grey-market compounded copies', tier: 'unknown', label: 'UNKNOWN' },
		],
		access: [
			{
				world: 'approved',
				title: 'Branded prescription product',
				detail: 'Ozempic / Wegovy / Rybelsus via licensed clinician + pharmacy',
				label: 'FACT',
			},
			{
				world: 'compounding',
				title: 'Compounded “semaglutide” copies',
				detail: 'Shortage-era compounding ended; not equivalent to approved product',
				label: 'FACT',
			},
			{
				world: 'grey',
				title: 'Research vials',
				detail: 'Not a medical supply chain',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'Approved finished drugs exist for specific indications',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'tirzepatide',
		name: 'Tirzepatide',
		shortCode: 'Tirz',
		axis: 'incretin',
		archetype: 'The Dual Agonist',
		hypeSentence: 'Marketed as the strongest fat-loss shot available.',
		knownSentence:
			'FDA-approved as Mounjaro / Zepbound; head-to-head weight loss beat semaglutide in SURMOUNT-5.',
		childExplanation:
			'This medicine hits two hunger/sugar pathways at once. In big human trials it helped people lose more weight on average than semaglutide — still only with a real prescription product.',
		regulatoryStatus: 'approved',
		score: {
			humanEvidence: 24,
			trialQuality: 19,
			replication: 13,
			effectMagnitude: 10,
			safetyUnderstanding: 12,
			regulatoryAcceptance: 15,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'strong',
				note: 'Largest approved-class weight-loss magnitude so far',
				label: 'FACT',
			},
			{
				system: 'gut',
				strength: 'good',
				note: 'GI adverse events during escalation',
				label: 'FACT',
			},
		],
		goals: ['fat-loss', 'diabetes'],
		studies: [
			{
				title: 'SURMOUNT-1',
				year: 2022,
				design: 'RCT',
				duration: '72 weeks',
				doseAsStudied: 'up to 15 mg weekly (research/label context)',
				outcome: '~20.9% mean weight reduction at top dose in obesity trial',
				kind: 'landmark',
				label: 'FACT',
			},
			{
				title: 'SURMOUNT-5 vs semaglutide',
				year: 2025,
				design: 'Head-to-head RCT',
				duration: '72 weeks',
				outcome: '~20.2% vs ~13.7% mean weight change',
				kind: 'landmark',
				label: 'FACT',
			},
		],
		risks: [
			{ text: 'Gastrointestinal adverse events', tier: 'common', label: 'FACT' },
			{ text: 'Class thyroid C-cell tumor warning language', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'approved',
				title: 'Branded prescription product',
				detail: 'Mounjaro / Zepbound',
				label: 'FACT',
			},
			{
				world: 'compounding',
				title: 'Compounded copies',
				detail: 'Shortage pathway ended; quality not FDA-product equivalent',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'Highest approved-class weight-loss magnitude to date in pivotal obesity trials',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'liraglutide',
		name: 'Liraglutide',
		shortCode: 'Lira',
		axis: 'incretin',
		archetype: 'The Daily Elder',
		hypeSentence: 'Still pushed as a modern GLP-1 peer to weekly shots.',
		knownSentence:
			'FDA-approved (Victoza / Saxenda); older daily injection with smaller average weight effect than weekly agents.',
		childExplanation:
			'An older cousin of the weekly shots. It works, but usually less weight change, and you inject every day.',
		regulatoryStatus: 'approved',
		score: {
			humanEvidence: 22,
			trialQuality: 17,
			replication: 13,
			effectMagnitude: 5,
			safetyUnderstanding: 13,
			regulatoryAcceptance: 15,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'good',
				note: 'Approved weight and diabetes indications',
				label: 'FACT',
			},
		],
		goals: ['fat-loss', 'diabetes'],
		studies: [
			{
				title: 'SCALE Obesity',
				year: 2015,
				design: 'RCT',
				outcome: 'Meaningful but smaller mean weight loss than later weekly agents',
				kind: 'landmark',
				label: 'FACT',
			},
		],
		risks: [
			{ text: 'GI adverse events; daily injection burden', tier: 'common', label: 'FACT' },
		],
		access: [
			{
				world: 'approved',
				title: 'Branded prescription product',
				detail: 'Victoza / Saxenda',
				label: 'FACT',
			},
		],
		claims: [],
	},
	{
		slug: 'retatrutide',
		name: 'Retatrutide',
		shortCode: 'Reta',
		axis: 'incretin',
		archetype: 'The Triple Still in Trials',
		hypeSentence: 'Grey vendors sell “reta” as if it were the trial drug.',
		knownSentence:
			'Investigational GIP/GLP-1/glucagon agonist; Phase 3 positive; Lilly has said BLA planned Q1 2027 — not approved.',
		childExplanation:
			'Scientists are still testing this three-pathway medicine. It is not an approved pen you can lawfully buy as a finished drug yet. Online powders are not the trial medicine.',
		regulatoryStatus: 'investigational',
		score: {
			humanEvidence: 16,
			trialQuality: 15,
			replication: 8,
			effectMagnitude: 9,
			safetyUnderstanding: 8,
			regulatoryAcceptance: 4,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'early',
				note: 'Phase 3 obesity/T2D signals; not approved',
				label: 'FACT',
			},
		],
		goals: ['fat-loss', 'diabetes'],
		studies: [
			{
				title: 'TRIUMPH program Phase 3 readouts',
				year: 2026,
				design: 'Phase 3 program',
				outcome: 'Reported mean weight-loss roughly ~20–28% depending on trial/dose',
				harms: 'GI events dominate, class-typical',
				limits: 'Not an approved product; grey vials ≠ trial drug',
				kind: 'landmark',
				label: 'FACT',
			},
		],
		risks: [
			{ text: 'GI adverse events in trials', tier: 'common', label: 'FACT' },
			{ text: 'Identity/sterility of grey “reta” vials', tier: 'serious', label: 'INFERENCE' },
		],
		access: [
			{
				world: 'approved',
				title: 'Not approved',
				detail: 'No lawful finished-drug pharmacy path yet',
				label: 'FACT',
			},
			{
				world: 'grey',
				title: 'Research vials labeled reta',
				detail: 'Not the investigational trial product',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'FDA has stated retatrutide cannot be used in compounding under federal law while investigational',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'orforglipron',
		name: 'Orforglipron',
		shortCode: 'Orfo',
		axis: 'neighbor',
		archetype: 'The Pill Neighbor',
		hypeSentence: 'Lumped into “peptide” culture because it is a GLP-1.',
		knownSentence:
			'Oral small-molecule GLP-1 agonist — COMMUNITY PEPTIDE, TECHNICALLY NOT A PEPTIDE.',
		childExplanation:
			'This is a daily pill that talks to the same hunger pathway as some peptide shots — but chemically it is not a peptide.',
		communityNotPeptide: true,
		regulatoryStatus: 'community-not-peptide',
		score: {
			humanEvidence: 18,
			trialQuality: 16,
			replication: 10,
			effectMagnitude: 7,
			safetyUnderstanding: 10,
			regulatoryAcceptance: 12,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'good',
				note: 'Approved oral GLP-1 path (Foundayo) for weight management in 2026 record',
				label: 'FACT',
			},
		],
		goals: ['fat-loss'],
		studies: [],
		risks: [
			{ text: 'Class GI effects expected', tier: 'common', label: 'INFERENCE' },
		],
		access: [
			{
				world: 'approved',
				title: 'Finished oral drug pathway',
				detail: 'Prescription product — not a peptide powder',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'COMMUNITY PEPTIDE — TECHNICALLY NOT A PEPTIDE',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'bpc-157',
		name: 'BPC-157',
		shortCode: 'BPC',
		axis: 'repair',
		archetype: 'The Repair Messenger',
		hypeSentence: 'Sold as Wolverine healing for tendons, gut, and everything else.',
		knownSentence:
			'Vast rodent GI/tendon literature; very limited rigorous human outcomes. Not FDA-approved. PCAC recommended possible 503A listing — not listed as of freeze line. WADA S0.',
		childExplanation:
			'In animals, this short protein piece sometimes helps tissues look healthier. In humans we barely have careful studies. Sports agencies ban it. A committee vote is not permission to treat it like an approved drug.',
		regulatoryStatus: 'pcac-advisory',
		wada: 'S0 — unapproved substances (includes BPC-157)',
		pcacNote:
			'July 2026 PCAC recommended 503A bulks listing for a UC framing; advisory only — not lawful 503A bulk as of 7 Sep 2026',
		score: {
			humanEvidence: 4,
			trialQuality: 3,
			replication: 4,
			effectMagnitude: 3,
			safetyUnderstanding: 3,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'gut',
				strength: 'experimental',
				note: 'Mostly animal GI cytoprotection literature',
				label: 'ANIMAL DATA',
			},
			{
				system: 'tendon',
				strength: 'experimental',
				note: 'Rodent tendon/ligament models ≠ human injury trials',
				label: 'ANIMAL DATA',
			},
			{
				system: 'vessels',
				strength: 'theoretical',
				note: 'Angiogenesis signaling claims largely preclinical',
				label: 'ANIMAL DATA',
			},
		],
		goals: ['injury'],
		studies: [
			{
				title: 'Human evidence base',
				year: 2026,
				design: 'Sparse non-RCT / tiny clinic reports',
				n: 'Very small published human totals',
				outcome: 'No adequate pivotal human RCTs for sports injuries',
				limits: 'Publication bias concerns; product identity often uncontrolled',
				kind: 'early',
				label: 'FACT',
			},
		],
		risks: [
			{ text: 'Unknown long-term human safety', tier: 'unknown', label: 'UNKNOWN' },
			{ text: 'Immunogenicity / poorly characterized chemistry (FDA scientist concerns)', tier: 'serious', label: 'EXPERT OPINION' },
			{ text: 'Grey-vial contamination and mislabeling', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'approved',
				title: 'No FDA-approved finished drug',
				detail: 'Approval is not the same as a PCAC recommendation',
				label: 'FACT',
			},
			{
				world: 'compounding',
				title: 'PCAC advisory only',
				detail: 'Not a lawful 503A bulk substance as of 7 Sep 2026',
				label: 'FACT',
			},
			{
				world: 'grey',
				title: 'Research / clinic grey market',
				detail: 'Where most “BPC” vials actually live',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'Rat tendon healing is not your tennis elbow trial',
				label: 'INFERENCE',
			},
		],
	},
	{
		slug: 'tb-500',
		name: 'TB-500',
		shortCode: 'TB5',
		axis: 'repair',
		archetype: 'The Fragmented Healer',
		hypeSentence: 'Paired with BPC as an unstudied “Wolverine stack.”',
		knownSentence:
			'Thymosin-β4 fragment; essentially no adequate human RCTs for sports injuries. PCAC-recommended, not listed. WADA S2.3 by name.',
		childExplanation:
			'People buy this hoping injuries heal faster. Careful human sports trials are basically missing. It is named on the sports ban list.',
		regulatoryStatus: 'pcac-advisory',
		wada: 'S2.3 — thymosin-β4 and derivatives, explicitly TB-500',
		pcacNote: 'July 2026 PCAC recommended possible 503A listing; not listed yet',
		score: {
			humanEvidence: 3,
			trialQuality: 2,
			replication: 3,
			effectMagnitude: 2,
			safetyUnderstanding: 3,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'tendon',
				strength: 'theoretical',
				note: 'Sports-injury human RCTs lacking',
				label: 'UNKNOWN',
			},
		],
		goals: ['injury'],
		studies: [
			{
				title: 'Sports injury human RCT gap',
				year: 2026,
				design: 'Evidence review context',
				outcome: 'No adequate pivotal human RCTs for the claims people buy it for',
				kind: 'negative',
				label: 'FACT',
			},
		],
		risks: [
			{ text: 'Anti-doping sanction risk for athletes', tier: 'serious', label: 'FACT' },
			{ text: 'Product identity in grey vials', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'compounding',
				title: 'PCAC advisory only',
				detail: 'Recommendation ≠ compounding authorization',
				label: 'FACT',
			},
			{
				world: 'grey',
				title: 'Research / wellness clinics',
				detail: 'Common grey access path',
				label: 'ANECDOTE',
			},
		],
		claims: [
			{
				text: 'BPC-157 + TB-500 has not been studied as a stack',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'kpv',
		name: 'KPV',
		shortCode: 'KPV',
		axis: 'repair',
		archetype: 'The Tiny Tripeptide',
		hypeSentence: 'Sold for gut inflammation and skin calm.',
		knownSentence: 'Preclinical / early human evidence; PCAC-recommended, not listed.',
		childExplanation:
			'A very short piece of a bigger hormone story. Most of what we know is early or from animals — not big human proof.',
		regulatoryStatus: 'pcac-advisory',
		pcacNote: 'July 2026 PCAC recommended possible 503A listing; not listed yet',
		score: {
			humanEvidence: 3,
			trialQuality: 3,
			replication: 3,
			effectMagnitude: 2,
			safetyUnderstanding: 3,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'gut',
				strength: 'experimental',
				note: 'Early / preclinical anti-inflammatory framing',
				label: 'ANIMAL DATA',
			},
			{
				system: 'skin',
				strength: 'experimental',
				note: 'Topical claims outpace human trials',
				label: 'UNKNOWN',
			},
		],
		goals: ['injury'],
		studies: [],
		risks: [
			{ text: 'Human safety dataset thin', tier: 'unknown', label: 'UNKNOWN' },
		],
		access: [
			{
				world: 'compounding',
				title: 'PCAC advisory only',
				detail: 'Not lawful 503A bulk as of freeze line',
				label: 'FACT',
			},
		],
		claims: [],
	},
	{
		slug: 'mots-c',
		name: 'MOTS-c',
		shortCode: 'MOTS',
		axis: 'mito',
		archetype: 'The Mitochondrial Memo',
		hypeSentence: 'Longevity clinics pitch it as metabolic youth.',
		knownSentence: 'Mitochondrial-derived peptide; human evidence still early; PCAC-recommended, not listed.',
		childExplanation:
			'Your cells’ energy factories make tiny messages. MOTS-c is one of those ideas turned into a vial — human proof is still early.',
		regulatoryStatus: 'pcac-advisory',
		pcacNote: 'July 2026 PCAC recommended possible 503A listing; not listed yet',
		score: {
			humanEvidence: 5,
			trialQuality: 4,
			replication: 4,
			effectMagnitude: 3,
			safetyUnderstanding: 4,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'mito',
				strength: 'early',
				note: 'Metabolic signaling hypotheses; early human work',
				label: 'INFERENCE',
			},
			{
				system: 'metabolism',
				strength: 'early',
				note: 'Exercise/metabolic framing mostly early',
				label: 'UNKNOWN',
			},
		],
		goals: ['longevity', 'fat-loss'],
		studies: [],
		risks: [
			{ text: 'Long-term human safety unknown', tier: 'unknown', label: 'UNKNOWN' },
		],
		access: [
			{
				world: 'compounding',
				title: 'PCAC advisory only',
				detail: 'Not listed as lawful 503A bulk yet',
				label: 'FACT',
			},
		],
		claims: [],
	},
	{
		slug: 'semax',
		name: 'Semax',
		shortCode: 'Semx',
		axis: 'neuro',
		archetype: 'The Focus Fragment',
		hypeSentence: 'Nootropic forums treat it as prescription-grade focus.',
		knownSentence:
			'Russian development history; PCAC-recommended, not listed; human evidence outside that ecosystem is thin.',
		childExplanation:
			'Some countries studied nose-spray brain peptides for focus. Outside that system, careful proof is thin — and a US committee vote is not an approval.',
		regulatoryStatus: 'pcac-advisory',
		pcacNote: 'July 2026 PCAC recommended possible 503A listing; not listed yet',
		score: {
			humanEvidence: 6,
			trialQuality: 5,
			replication: 4,
			effectMagnitude: 3,
			safetyUnderstanding: 4,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'brain',
				strength: 'early',
				note: 'Cognitive claims; limited outside originating literature',
				label: 'INFERENCE',
			},
		],
		goals: ['sleep-brain'],
		studies: [],
		risks: [
			{ text: 'Evidence generalizability uncertain', tier: 'unknown', label: 'UNKNOWN' },
		],
		access: [
			{
				world: 'compounding',
				title: 'PCAC advisory only',
				detail: 'Not FDA-approved; not listed bulk yet',
				label: 'FACT',
			},
		],
		claims: [],
	},
	{
		slug: 'epitalon',
		name: 'Epitalon',
		shortCode: 'Epit',
		axis: 'neuro',
		archetype: 'The Longevity Folklore',
		hypeSentence: 'Sold as a pineal telomere youth potion.',
		knownSentence:
			'Longevity folklore + pineal-peptide theory; PCAC-recommended for an insomnia framing; evidence remains weak.',
		childExplanation:
			'Stories say this helps sleep or aging clocks. The careful human evidence is still weak.',
		regulatoryStatus: 'pcac-advisory',
		pcacNote: 'July 2026 PCAC insomnia framing recommendation; not listed yet',
		score: {
			humanEvidence: 3,
			trialQuality: 2,
			replication: 2,
			effectMagnitude: 2,
			safetyUnderstanding: 3,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'brain',
				strength: 'theoretical',
				note: 'Sleep/longevity claims outpace rigorous trials',
				label: 'UNKNOWN',
			},
		],
		goals: ['sleep-brain', 'longevity'],
		studies: [],
		risks: [
			{ text: 'Weak human evidence base', tier: 'unknown', label: 'UNKNOWN' },
		],
		access: [
			{
				world: 'compounding',
				title: 'PCAC advisory only',
				detail: 'Recommendation ≠ approval',
				label: 'FACT',
			},
		],
		claims: [],
	},
	{
		slug: 'dsip',
		name: 'DSIP / Emideltide',
		shortCode: 'DSIP',
		axis: 'neuro',
		archetype: 'The Rejected Sleep Story',
		hypeSentence: 'Still sold for deep sleep after PCAC rejection.',
		knownSentence: 'PCAC did not recommend 503A listing (July 2026).',
		childExplanation:
			'A committee looked at this sleep peptide idea and did not recommend letting pharmacies compound it from bulk. That is a clear negative signal — still not the same as a full safety encyclopedia.',
		regulatoryStatus: 'pcac-rejected',
		pcacNote: 'July 2026 PCAC rejected Emideltide/DSIP for 503A',
		score: {
			humanEvidence: 3,
			trialQuality: 2,
			replication: 2,
			effectMagnitude: 2,
			safetyUnderstanding: 3,
			regulatoryAcceptance: 1,
		},
		body: [
			{
				system: 'brain',
				strength: 'theoretical',
				note: 'Sleep peptide claims; PCAC rejected listing',
				label: 'FACT',
			},
		],
		goals: ['sleep-brain'],
		studies: [],
		risks: [
			{ text: 'Regulatory rejection for 503A listing', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'compounding',
				title: 'PCAC rejected',
				detail: 'Not recommended for 503A bulks list',
				label: 'FACT',
			},
			{
				world: 'grey',
				title: 'Grey market may still sell it',
				detail: 'Availability ≠ legitimacy',
				label: 'ANECDOTE',
			},
		],
		claims: [],
	},
	{
		slug: 'tesamorelin',
		name: 'Tesamorelin',
		shortCode: 'Tesa',
		axis: 'gh',
		archetype: 'The Narrow Fat Drug',
		hypeSentence: 'Wellness clinics pitch it as general belly-fat loss.',
		knownSentence:
			'FDA-approved as Egrifta for HIV-associated abdominal fat — one indication, not a general fat-loss license. WADA S2.2.4.',
		childExplanation:
			'This is a real approved medicine for a specific belly-fat problem in people with HIV. That does not automatically make it a general weight-loss drug for everyone.',
		regulatoryStatus: 'approved',
		wada: 'S2.2.4 — GHRH analogues',
		score: {
			humanEvidence: 18,
			trialQuality: 15,
			replication: 11,
			effectMagnitude: 6,
			safetyUnderstanding: 11,
			regulatoryAcceptance: 14,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'good',
				note: 'Visceral adipose reduction in labeled population',
				label: 'FACT',
			},
		],
		goals: ['fat-loss'],
		studies: [],
		risks: [
			{ text: 'Glucose intolerance / IGF-1 related monitoring in label context', tier: 'uncommon', label: 'FACT' },
			{ text: 'Anti-doping ban for athletes', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'approved',
				title: 'Egrifta finished drug',
				detail: 'Labeled indication is narrow',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'Indication ≠ general wellness fat-loss license',
				label: 'INFERENCE',
			},
		],
	},
	{
		slug: 'sermorelin',
		name: 'Sermorelin',
		shortCode: 'Serm',
		axis: 'gh',
		archetype: 'The Retired Diagnostic',
		hypeSentence: 'Anti-aging clinics sell it as gentle GH optimization.',
		knownSentence:
			'Historic approved diagnostic; commercial product discontinued. Compounded adult “optimization” is a different claim than the old label. WADA S2.2.4.',
		childExplanation:
			'Doctors once used a related product to test growth-hormone pathways. Wellness “optimization” shots are a new story with thinner proof.',
		regulatoryStatus: 'unapproved',
		wada: 'S2.2.4 — GHRH analogues',
		score: {
			humanEvidence: 8,
			trialQuality: 6,
			replication: 5,
			effectMagnitude: 3,
			safetyUnderstanding: 6,
			regulatoryAcceptance: 5,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'early',
				note: 'Adult body-composition claims thinner than clinic marketing',
				label: 'INFERENCE',
			},
		],
		goals: ['fat-loss', 'longevity'],
		studies: [],
		risks: [
			{ text: 'WADA ban for athletes', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'compounding',
				title: 'Compounded adult use',
				detail: 'Different claim than historic diagnostic label',
				label: 'INFERENCE',
			},
		],
		claims: [],
	},
	{
		slug: 'cjc-1295',
		name: 'CJC-1295',
		shortCode: 'CJC',
		axis: 'gh',
		archetype: 'The Long-Acting Pitch',
		hypeSentence: 'Stacked with ipamorelin as a GH secretagogue duo.',
		knownSentence: 'Investigational / unapproved GHRH analogue. WADA S2.2.4. Human evidence far thinner than clinic marketing.',
		childExplanation:
			'Clinics say this helps your body make more growth hormone. Careful human proof for the wellness claims is much thinner than the sales pitch.',
		regulatoryStatus: 'unapproved',
		wada: 'S2.2.4 — GHRH analogues',
		score: {
			humanEvidence: 5,
			trialQuality: 4,
			replication: 3,
			effectMagnitude: 3,
			safetyUnderstanding: 4,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'experimental',
				note: 'Wellness body-composition claims under-evidenced',
				label: 'MARKETING CLAIM',
			},
		],
		goals: ['fat-loss', 'longevity'],
		studies: [],
		risks: [
			{ text: 'WADA ban', tier: 'serious', label: 'FACT' },
			{ text: 'Unstudied stack synergy with ipamorelin', tier: 'unknown', label: 'FACT' },
		],
		access: [
			{
				world: 'grey',
				title: 'Clinic / research grey paths',
				detail: 'Not an FDA-approved finished wellness drug',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'CJC-1295 + ipamorelin is not a studied stack just because both raise GH signals',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'ipamorelin',
		name: 'Ipamorelin',
		shortCode: 'Ipa',
		axis: 'gh',
		archetype: 'The Selective Whisper',
		hypeSentence: 'Marketed as the “clean” GHRP.',
		knownSentence: 'Unapproved GHS/GHRP. WADA S2.2.4. Human evidence thinner than marketing.',
		childExplanation:
			'This is sold as a gentler growth-hormone nudge. “Gentler” in ads is not the same as proven safe and effective in big human trials.',
		regulatoryStatus: 'unapproved',
		wada: 'S2.2.4 — GHS/GHRPs',
		score: {
			humanEvidence: 5,
			trialQuality: 4,
			replication: 3,
			effectMagnitude: 3,
			safetyUnderstanding: 4,
			regulatoryAcceptance: 2,
		},
		body: [
			{
				system: 'metabolism',
				strength: 'experimental',
				note: 'Clinic fat-loss/recovery claims',
				label: 'MARKETING CLAIM',
			},
		],
		goals: ['fat-loss', 'injury'],
		studies: [],
		risks: [
			{ text: 'WADA ban', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'grey',
				title: 'Grey / compounding contested paths',
				detail: 'Not approved finished drug for wellness claims',
				label: 'FACT',
			},
		],
		claims: [],
	},
	{
		slug: 'bremelanotide',
		name: 'Bremelanotide (Vyleesi)',
		shortCode: 'PT141',
		axis: 'sexual',
		archetype: 'The Named Desire Drug',
		hypeSentence: 'Research vials labeled PT-141 sold as the same thing as Vyleesi.',
		knownSentence:
			'FDA-approved as Vyleesi for premenopausal HSDD — that finished product is not a research vial labeled PT-141.',
		childExplanation:
			'There is a real approved medicine for low sexual desire in some women. A research bottle with a similar nickname is not that medicine.',
		regulatoryStatus: 'approved',
		score: {
			humanEvidence: 17,
			trialQuality: 14,
			replication: 10,
			effectMagnitude: 5,
			safetyUnderstanding: 11,
			regulatoryAcceptance: 14,
		},
		body: [
			{
				system: 'sexual',
				strength: 'good',
				note: 'Approved indication for premenopausal HSDD as Vyleesi',
				label: 'FACT',
			},
		],
		goals: ['sexual'],
		studies: [],
		risks: [
			{ text: 'Nausea, flushing; blood-pressure related label cautions', tier: 'common', label: 'FACT' },
		],
		access: [
			{
				world: 'approved',
				title: 'Vyleesi finished drug',
				detail: 'Specialty pharmacy pathway for labeled use',
				label: 'FACT',
			},
			{
				world: 'grey',
				title: 'PT-141 research vials',
				detail: 'Not the approved product',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'Approved product ≠ research vial with the same sequence nickname',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'elamipretide',
		name: 'Elamipretide (SS-31)',
		shortCode: 'SS31',
		axis: 'mito',
		archetype: 'The Rare-Disease Mitochondrial',
		hypeSentence: 'Longevity circles treat SS-31 as a general anti-aging injectable.',
		knownSentence:
			'Accelerated approval (Forzinity) for Barth syndrome, 2025 — not a general longevity drug.',
		childExplanation:
			'This medicine was cleared on an accelerated path for a rare mitochondrial disease. That is not the same as a youth shot for healthy people.',
		regulatoryStatus: 'approved',
		score: {
			humanEvidence: 12,
			trialQuality: 12,
			replication: 8,
			effectMagnitude: 5,
			safetyUnderstanding: 9,
			regulatoryAcceptance: 12,
		},
		body: [
			{
				system: 'mito',
				strength: 'moderate',
				note: 'Labeled rare-disease context',
				label: 'FACT',
			},
		],
		goals: ['longevity'],
		studies: [],
		risks: [
			{ text: 'Evidence outside Barth syndrome remains a different claim', tier: 'unknown', label: 'INFERENCE' },
		],
		access: [
			{
				world: 'approved',
				title: 'Forzinity accelerated approval',
				detail: 'Rare-disease indication — not wellness license',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'Accelerated rare-disease approval ≠ general longevity approval',
				label: 'FACT',
			},
		],
	},
	{
		slug: 'melanotan-ii',
		name: 'Melanotan II',
		shortCode: 'MT2',
		axis: 'sexual',
		archetype: 'The Tan That Isn’t Approved',
		hypeSentence: 'Sold as a tanning/sexual dual-use nasal or injectable.',
		knownSentence:
			'Unapproved; community pigment/sexual use; safety and legality problems. Not Scenesse (afamelanotide).',
		childExplanation:
			'People use this to get darker skin or change desire. It is not an approved tanning medicine, and it can be risky.',
		regulatoryStatus: 'unapproved',
		score: {
			humanEvidence: 4,
			trialQuality: 3,
			replication: 3,
			effectMagnitude: 3,
			safetyUnderstanding: 4,
			regulatoryAcceptance: 1,
		},
		body: [
			{
				system: 'skin',
				strength: 'experimental',
				note: 'Pigment effects reported; not an approved tanning drug',
				label: 'ANECDOTE',
			},
			{
				system: 'sexual',
				strength: 'experimental',
				note: 'Community sexual-use reports',
				label: 'ANECDOTE',
			},
		],
		goals: ['sexual'],
		studies: [],
		risks: [
			{ text: 'Nausea, blood-pressure effects, mole changes reported in community', tier: 'common', label: 'ANECDOTE' },
			{ text: 'Unapproved status and product quality failures', tier: 'serious', label: 'FACT' },
		],
		access: [
			{
				world: 'grey',
				title: 'Underground / research paths',
				detail: 'Not a lawful approved tanning product',
				label: 'FACT',
			},
		],
		claims: [
			{
				text: 'Afamelanotide (Scenesse) is a different approved implant for EPP — not Melanotan-2 kits',
				label: 'FACT',
			},
		],
	},
]

export function getPeptide(slug: string): Peptide | undefined {
	return peptides.find((p) => p.slug === slug)
}

export function getPeptidesByGoal(goal: string): Peptide[] {
	return peptides
		.filter((p) => p.goals.includes(goal as Peptide['goals'][number]))
		.sort((a, b) => {
			const ta =
				a.score.humanEvidence +
				a.score.trialQuality +
				a.score.replication +
				a.score.effectMagnitude +
				a.score.safetyUnderstanding +
				a.score.regulatoryAcceptance
			const tb =
				b.score.humanEvidence +
				b.score.trialQuality +
				b.score.replication +
				b.score.effectMagnitude +
				b.score.safetyUnderstanding +
				b.score.regulatoryAcceptance
			return tb - ta
		})
}

export function getPeptidesBySystem(system: string): Peptide[] {
	return peptides.filter((p) => p.body.some((b) => b.system === system))
}

export function getPeptidesByAxis(axis: Peptide['axis']): Peptide[] {
	return peptides.filter((p) => p.axis === axis)
}
