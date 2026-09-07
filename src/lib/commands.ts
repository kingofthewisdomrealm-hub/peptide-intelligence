import { getPeptide, getPeptidesByGoal, peptides } from '@/data/peptides'
import { getGoal } from '@/data/goals'
import { bandFromTotal, bandLabel, scoreTotal, type Peptide } from '@/lib/evidence'

export type AskBlock = {
	title?: string
	label?: string
	text: string
}

export type AskAnswer = {
	headline: string
	blocks: AskBlock[]
	links?: { href: string; label: string }[]
}

function peptideSummary(p: Peptide): AskAnswer {
	const total = scoreTotal(p.score)
	const band = bandFromTotal(total)
	return {
		headline: `/PEPTIDE ${p.name}`,
		blocks: [
			{
				title: 'Archetype',
				text: `${p.archetype}. Hype: ${p.hypeSentence} Known: ${p.knownSentence}`,
			},
			{
				title: 'Child layer',
				text: p.childExplanation,
				label: 'INFERENCE',
			},
			{
				title: 'Evidence score',
				text: `${total}/100 — ${bandLabel(band)}`,
				label: 'INFERENCE',
			},
			{
				title: 'Regulatory',
				text: `${p.regulatoryStatus}${p.pcacNote ? `. ${p.pcacNote}` : ''}${p.wada ? ` WADA: ${p.wada}` : ''}`,
				label: 'FACT',
			},
			...(p.communityNotPeptide
				? [
						{
							title: 'Classification',
							text: 'COMMUNITY PEPTIDE — TECHNICALLY NOT A PEPTIDE',
							label: 'FACT',
						},
					]
				: []),
		],
		links: [
			{ href: `/peptide/${p.slug}`, label: `Open ${p.name} card` },
			{ href: `/ask?q=${encodeURIComponent(`/ACCESS ${p.name}`)}`, label: 'Access paths' },
		],
	}
}

function clinicalDecision(): AskAnswer {
	return {
		headline: 'Clinical-decision mode — not a prescription',
		blocks: [
			{
				title: 'Option A — established',
				text: 'FDA-approved finished incretin products (e.g., semaglutide, tirzepatide, liraglutide) for labeled indications, via a licensed clinician.',
				label: 'FACT',
			},
			{
				title: 'Option B — experimental',
				text: 'Investigational or PCAC-advisory compounds (retatrutide, BPC-157, TB-500, etc.). Not interchangeable with approved drugs; human evidence often thin.',
				label: 'FACT',
			},
			{
				title: 'Option C — non-peptide',
				text: 'Nutrition, resistance training, sleep, and other non-peptide care. Orforglipron is a community neighbor — technically not a peptide.',
				label: 'INFERENCE',
			},
			{
				title: 'Hard stop',
				text: 'This engine will not diagnose you or write a personal peptide protocol.',
				label: 'FACT',
			},
		],
		links: [
			{ href: '/goals/fat-loss', label: 'Browse fat-loss by evidence' },
			{ href: '/table', label: 'Evidence table' },
		],
	}
}

export function runCommand(raw: string): AskAnswer {
	const input = raw.trim()
	if (!input) {
		return {
			headline: 'Send a peptide name or command',
			blocks: [
				{
					text: 'Try /PEPTIDE BPC-157, /COMPARE BPC-157 TB-500, /CATEGORY injury, /ACCESS semaglutide, /TABLE, /NEWS, or /MYTHS.',
				},
			],
		}
	}

	const lower = input.toLowerCase()
	if (
		lower.includes('what peptide should i take') ||
		lower.includes('what should i take') ||
		lower.includes('which peptide for me')
	) {
		return clinicalDecision()
	}

	const parts = input.replace(/^\//, '').trim().split(/\s+/)
	const cmd = parts[0]?.toUpperCase() ?? ''
	const rest = parts.slice(1).join(' ')

	if (cmd === 'TABLE') {
		return {
			headline: '/TABLE',
			blocks: [
				{
					text: 'Open the evidence periodic table — traffic lights are human evidence + regulatory legitimacy, not hype.',
					label: 'FACT',
				},
			],
			links: [{ href: '/table', label: 'Open table' }],
		}
	}

	if (cmd === 'NEWS') {
		return {
			headline: '/NEWS',
			blocks: [
				{
					text: 'Material developments only: PCAC July 2026 advisory votes; GLP-1 shortage compounding ended; retatrutide Phase 3 / BLA timing.',
					label: 'FACT',
				},
			],
			links: [{ href: '/news', label: 'Open news' }],
		}
	}

	if (cmd === 'MYTHS') {
		return {
			headline: '/MYTHS',
			blocks: [
				{ text: '“Rat tendon healing = your tennis elbow.”', label: 'FACT' },
				{ text: '“PCAC vote = legal to compound = FDA approved.”', label: 'FACT' },
				{ text: '“A COA proves sterility and correct dose.”', label: 'FACT' },
				{ text: '“Research-only labeling makes injection a private scientific act.”', label: 'FACT' },
			],
			links: [{ href: '/myths', label: 'Open myths' }],
		}
	}

	if (cmd === 'CATEGORY' || cmd === 'RANK') {
		const goal = getGoal(rest.toLowerCase().replace(/\s+/g, '-')) ||
			getGoal(
				rest.toLowerCase().includes('fat')
					? 'fat-loss'
					: rest.toLowerCase().includes('injur')
						? 'injury'
						: rest.toLowerCase().includes('sleep') || rest.toLowerCase().includes('brain')
							? 'sleep-brain'
							: rest.toLowerCase().includes('long')
								? 'longevity'
								: rest.toLowerCase().includes('sex')
									? 'sexual'
									: rest.toLowerCase().includes('diab') || rest.toLowerCase().includes('sugar')
										? 'diabetes'
										: ''
			)
		if (!goal) {
			return {
				headline: `/${cmd}`,
				blocks: [
					{
						text: 'Try fat loss, injury, sleep, longevity, sexual, or diabetes.',
					},
				],
				links: [{ href: '/goals/fat-loss', label: 'Fat loss lane' }],
			}
		}
		const ranked = getPeptidesByGoal(goal.slug)
		return {
			headline: `/${cmd} ${goal.title}`,
			blocks: ranked.slice(0, 8).map((p, i) => ({
				title: `#${i + 1} ${p.name}`,
				text: `${scoreTotal(p.score)}/100 — ${p.knownSentence}`,
				label: 'INFERENCE',
			})),
			links: [{ href: `/goals/${goal.slug}`, label: `Open ${goal.title}` }],
		}
	}

	if (cmd === 'COMPARE') {
		const names = rest.split(/\s+/).filter(Boolean)
		const a = findPeptideLoose(names[0] ?? '')
		const b = findPeptideLoose(names[1] ?? '')
		if (!a || !b) {
			return {
				headline: '/COMPARE',
				blocks: [{ text: 'Usage: /COMPARE BPC-157 TB-500' }],
			}
		}
		return {
			headline: `/COMPARE ${a.name} vs ${b.name}`,
			blocks: [
				{
					title: a.name,
					text: `${scoreTotal(a.score)}/100 — ${a.knownSentence}`,
					label: 'INFERENCE',
				},
				{
					title: b.name,
					text: `${scoreTotal(b.score)}/100 — ${b.knownSentence}`,
					label: 'INFERENCE',
				},
				{
					title: 'Stack warning',
					text: 'Two peptides studied separately are not a studied stack. Do not invent synergy.',
					label: 'FACT',
				},
			],
			links: [
				{
					href: `/compare?a=${a.slug}&b=${b.slug}`,
					label: 'Open compare view',
				},
			],
		}
	}

	if (cmd === 'ACCESS') {
		const p = findPeptideLoose(rest)
		if (!p) {
			return { headline: '/ACCESS', blocks: [{ text: 'Name a peptide in the table.' }] }
		}
		return {
			headline: `/ACCESS ${p.name}`,
			blocks: p.access.map((a) => ({
				title: `${a.world.toUpperCase()} — ${a.title}`,
				text: a.detail,
				label: a.label,
			})),
			links: [{ href: `/peptide/${p.slug}`, label: `Open ${p.name}` }],
		}
	}

	if (cmd === 'RISKS') {
		const p = findPeptideLoose(rest)
		if (!p) {
			return { headline: '/RISKS', blocks: [{ text: 'Name a peptide.' }] }
		}
		return {
			headline: `/RISKS ${p.name}`,
			blocks: p.risks.map((r) => ({
				title: r.tier,
				text: r.text,
				label: r.label,
			})),
			links: [{ href: `/peptide/${p.slug}`, label: `Open ${p.name}` }],
		}
	}

	if (cmd === 'STUDIES' || cmd === 'SCIENCE' || cmd === 'CHILD' || cmd === 'BODYMAP' || cmd === 'PEPTIDE') {
		const p = findPeptideLoose(rest || cmd)
		if (!p && cmd !== 'PEPTIDE') {
			return { headline: `/${cmd}`, blocks: [{ text: 'Name a peptide in the v1 set.' }] }
		}
		if (cmd === 'PEPTIDE') {
			const target = findPeptideLoose(rest)
			if (!target) {
				return {
					headline: '/PEPTIDE',
					blocks: [{ text: `Known slugs: ${peptides.map((x) => x.shortCode).join(', ')}` }],
				}
			}
			return peptideSummary(target)
		}
		if (!p) {
			return { headline: `/${cmd}`, blocks: [{ text: 'Name a peptide.' }] }
		}
		if (cmd === 'CHILD') {
			return {
				headline: `/CHILD ${p.name}`,
				blocks: [{ text: p.childExplanation, label: 'INFERENCE' }],
				links: [{ href: `/peptide/${p.slug}`, label: 'Full card' }],
			}
		}
		if (cmd === 'BODYMAP') {
			return {
				headline: `/BODYMAP ${p.name}`,
				blocks: p.body.map((b) => ({
					title: b.system,
					text: `${b.strength} — ${b.note}`,
					label: b.label,
				})),
				links: [
					{ href: `/peptide/${p.slug}`, label: 'Full card' },
					{ href: '/body', label: 'Body explorer' },
				],
			}
		}
		if (cmd === 'STUDIES') {
			return {
				headline: `/STUDIES ${p.name}`,
				blocks:
					p.studies.length > 0
						? p.studies.map((s) => ({
								title: `${s.year} · ${s.kind} · ${s.title}`,
								text: `${s.design}${s.n ? ` · n=${s.n}` : ''}. ${s.outcome}${s.doseAsStudied ? ` Dose-as-studied (research context): ${s.doseAsStudied}.` : ''}`,
								label: s.label,
							}))
						: [{ text: 'No curated landmark study cards in v1 for this entry yet.', label: 'UNKNOWN' }],
				links: [{ href: `/peptide/${p.slug}`, label: 'Full card' }],
			}
		}
		return peptideSummary(p)
	}

	const loose = findPeptideLoose(input)
	if (loose) return peptideSummary(loose)

	return {
		headline: 'Not matched',
		blocks: [
			{
				text: 'Try a peptide name or /PEPTIDE, /COMPARE, /CATEGORY, /ACCESS, /TABLE, /NEWS, /MYTHS.',
			},
		],
	}
}

function findPeptideLoose(raw: string): Peptide | undefined {
	const q = raw.trim().toLowerCase().replace(/[()]/g, '')
	if (!q) return undefined
	return (
		getPeptide(q) ||
		peptides.find(
			(p) =>
				p.slug === q ||
				p.name.toLowerCase() === q ||
				p.shortCode.toLowerCase() === q ||
				p.name.toLowerCase().includes(q) ||
				q.includes(p.slug)
		)
	)
}
