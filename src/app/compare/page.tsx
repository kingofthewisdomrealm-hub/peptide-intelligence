import type { Metadata } from 'next'
import Link from 'next/link'
import { EvidencePill } from '@/components/evidence-pill'
import { ScoreRing } from '@/components/score-ring'
import { StatusBadge } from '@/components/world-badge'
import { getPeptide, peptides } from '@/data/peptides'
import { scoreTotal } from '@/lib/evidence'

export const metadata: Metadata = {
	title: 'Compare',
}

type Props = {
	searchParams: Promise<{ a?: string; b?: string; c?: string }>
}

export default async function ComparePage({ searchParams }: Props) {
	const sp = await searchParams
	const a = getPeptide(sp.a ?? 'semaglutide')
	const b = getPeptide(sp.b ?? 'bpc-157')
	const c = sp.c ? getPeptide(sp.c) : undefined
	const selected = [a, b, c].filter(Boolean)

	return (
		<div className="mx-auto max-w-6xl px-4 py-12">
			<h1 className="font-display text-4xl font-semibold tracking-tight">Compare</h1>
			<p className="mt-3 max-w-2xl text-ink-muted">
				Same score slices, same systems language, same access worlds. Two peptides
				studied separately are not a studied stack.
			</p>

			<div className="mt-4 rounded-sm border border-warn/40 bg-warn-soft/50 p-4 text-sm">
				<EvidencePill label="FACT" />
				<span className="ml-2">
					Unstudied combo warning: do not invent synergy. “Wolverine stacks” are
					marketing, not trials.
				</span>
			</div>

			<div className="mt-6 flex flex-wrap gap-2">
				{peptides.slice(0, 12).map((p) => (
					<Link
						key={p.slug}
						href={`/compare?a=${sp.a ?? 'semaglutide'}&b=${p.slug}`}
						className="rounded-sm border border-line px-2 py-1 text-xs text-ink-muted hover:border-accent"
					>
						Set B: {p.shortCode}
					</Link>
				))}
			</div>
			<div className="mt-2 flex flex-wrap gap-2">
				{peptides.slice(0, 12).map((p) => (
					<Link
						key={`a-${p.slug}`}
						href={`/compare?a=${p.slug}&b=${sp.b ?? 'bpc-157'}`}
						className="rounded-sm border border-line px-2 py-1 text-xs text-ink-muted hover:border-accent"
					>
						Set A: {p.shortCode}
					</Link>
				))}
			</div>

			<div className="mt-10 grid gap-6 lg:grid-cols-2">
				{selected.map((p) =>
					p ? (
						<section key={p.slug} className="rounded-sm border border-line bg-bg-elevated p-6">
							<div className="flex flex-wrap items-start justify-between gap-4">
								<div>
									<Link
										href={`/peptide/${p.slug}`}
										className="font-display text-2xl font-semibold hover:text-accent"
									>
										{p.name}
									</Link>
									<p className="mt-1 text-sm text-ink-muted">{p.archetype}</p>
									<div className="mt-3">
										<StatusBadge status={p.regulatoryStatus} />
									</div>
									<p className="mt-3 text-sm">{p.knownSentence}</p>
									<p className="mt-2 text-xs text-ink-faint">
										Score {scoreTotal(p.score)}/100
									</p>
								</div>
								<ScoreRing score={p.score} size={100} />
							</div>
							<ul className="mt-6 space-y-2">
								{p.body.map((sys) => (
									<li key={sys.system} className="flex flex-wrap items-center gap-2 text-sm">
										<span className="w-24 font-medium capitalize">{sys.system}</span>
										<span className="text-ink-muted">{sys.strength}</span>
										<EvidencePill label={sys.label} />
									</li>
								))}
							</ul>
							<ul className="mt-4 space-y-1 text-sm text-ink-muted">
								{p.access.map((acc) => (
									<li key={acc.title}>
										<span className="font-semibold text-ink">{acc.world}:</span> {acc.title}
									</li>
								))}
							</ul>
						</section>
					) : null
				)}
			</div>
		</div>
	)
}
