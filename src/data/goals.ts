import type { GoalSlug } from '@/lib/evidence'

export type Goal = {
	slug: GoalSlug
	title: string
	blurb: string
	childBlurb: string
}

export const goals: Goal[] = [
	{
		slug: 'fat-loss',
		title: 'Fat loss / metabolism',
		blurb: 'Ranked by human evidence for weight and metabolic claims — not Instagram volume.',
		childBlurb: 'Which shots or pills have real human studies for losing weight?',
	},
	{
		slug: 'injury',
		title: 'Injury & repair',
		blurb: 'Highest hype-to-evidence gap in the field. Animal tendon ≠ human injury trial.',
		childBlurb: 'What actually has careful human proof for healing — and what is mostly rat studies?',
	},
	{
		slug: 'sleep-brain',
		title: 'Sleep & brain',
		blurb: 'Cognitive and sleep peptides: thin evidence, loud marketing.',
		childBlurb: 'Focus and sleep vials sound magical. The human proof is usually thin.',
	},
	{
		slug: 'longevity',
		title: 'Longevity / mitochondria',
		blurb: 'Rare-disease approvals and mitochondrial ideas are not youth protocols.',
		childBlurb: 'Living longer is hard to prove. Be suspicious of “anti-aging” vials.',
	},
	{
		slug: 'sexual',
		title: 'Sexual / pigment',
		blurb: 'Narrow approved products vs unapproved tanning/sexual greys.',
		childBlurb: 'One approved medicine is not the same as a research tan spray.',
	},
	{
		slug: 'diabetes',
		title: 'Blood sugar / diabetes',
		blurb: 'Where incretin peptides have their strongest labeled evidence.',
		childBlurb: 'Some of these medicines were built first for blood sugar control.',
	},
]

export function getGoal(slug: string): Goal | undefined {
	return goals.find((g) => g.slug === slug)
}
