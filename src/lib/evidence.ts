export type EvidenceLabel =
	| 'FACT'
	| 'INFERENCE'
	| 'EXPERT OPINION'
	| 'ANIMAL DATA'
	| 'ANECDOTE'
	| 'MARKETING CLAIM'
	| 'UNKNOWN'

export type RegulatoryWorld = 'approved' | 'compounding' | 'grey'

export type RegulatoryStatus =
	| 'approved'
	| 'investigational'
	| 'pcac-advisory'
	| 'pcac-rejected'
	| 'unapproved'
	| 'community-not-peptide'

export type EvidenceBand =
	| 'strong'
	| 'good'
	| 'moderate'
	| 'early'
	| 'experimental'
	| 'theoretical'

export type BodySystem =
	| 'gut'
	| 'tendon'
	| 'vessels'
	| 'brain'
	| 'metabolism'
	| 'skin'
	| 'sexual'
	| 'immune'
	| 'mito'

export type GoalSlug =
	| 'fat-loss'
	| 'injury'
	| 'sleep-brain'
	| 'longevity'
	| 'sexual'
	| 'diabetes'

export type Claim = {
	text: string
	label: EvidenceLabel
}

export type ScoreSlices = {
	humanEvidence: number
	trialQuality: number
	replication: number
	effectMagnitude: number
	safetyUnderstanding: number
	regulatoryAcceptance: number
}

export type StudyCard = {
	title: string
	year: number
	design: string
	n?: string
	doseAsStudied?: string
	duration?: string
	outcome: string
	harms?: string
	limits?: string
	kind: 'landmark' | 'negative' | 'failed' | 'early'
	label: EvidenceLabel
}

export type RiskItem = {
	text: string
	tier: 'common' | 'uncommon' | 'serious' | 'unknown'
	label: EvidenceLabel
}

export type AccessPath = {
	world: RegulatoryWorld
	title: string
	detail: string
	label: EvidenceLabel
}

export type BodySystemEvidence = {
	system: BodySystem
	strength: EvidenceBand
	note: string
	label: EvidenceLabel
}

export type Peptide = {
	slug: string
	name: string
	shortCode: string
	axis:
		| 'incretin'
		| 'gh'
		| 'repair'
		| 'neuro'
		| 'sexual'
		| 'mito'
		| 'neighbor'
	archetype: string
	hypeSentence: string
	knownSentence: string
	childExplanation: string
	communityNotPeptide?: boolean
	regulatoryStatus: RegulatoryStatus
	wada?: string
	pcacNote?: string
	score: ScoreSlices
	body: BodySystemEvidence[]
	goals: GoalSlug[]
	studies: StudyCard[]
	risks: RiskItem[]
	access: AccessPath[]
	claims: Claim[]
}

export function scoreTotal(score: ScoreSlices): number {
	return (
		score.humanEvidence +
		score.trialQuality +
		score.replication +
		score.effectMagnitude +
		score.safetyUnderstanding +
		score.regulatoryAcceptance
	)
}

export function bandFromTotal(total: number): EvidenceBand {
	if (total >= 90) return 'strong'
	if (total >= 75) return 'good'
	if (total >= 60) return 'moderate'
	if (total >= 40) return 'early'
	if (total >= 20) return 'experimental'
	return 'theoretical'
}

export function bandLabel(band: EvidenceBand): string {
	switch (band) {
		case 'strong':
			return 'Strong clinical evidence'
		case 'good':
			return 'Good'
		case 'moderate':
			return 'Moderate'
		case 'early':
			return 'Early'
		case 'experimental':
			return 'Highly experimental'
		case 'theoretical':
			return 'Mostly theoretical / preclinical'
	}
}

export const FREEZE_LINE = '7 September 2026'

export const LABEL_HELP: Record<EvidenceLabel, string> = {
	FACT: 'Measured in humans, regulators, or the published record',
	INFERENCE: 'Reasonable reading of that record',
	'EXPERT OPINION': 'Clinician or scientist judgment, not a trial',
	'ANIMAL DATA': 'Preclinical only — does not prove human benefit',
	ANECDOTE: 'Forums, influencers, clinics',
	'MARKETING CLAIM': 'Seller language',
	UNKNOWN: 'Not established',
}
