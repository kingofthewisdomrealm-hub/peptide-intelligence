import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EvidencePill } from '@/components/evidence-pill'
import { getGoal, goals } from '@/data/goals'
import { getPeptidesByGoal } from '@/data/peptides'
import { bandFromTotal, bandLabel, scoreTotal } from '@/lib/evidence'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
	return goals.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const goal = getGoal(slug)
	return { title: goal?.title ?? 'Goal' }
}

export default async function GoalPage({ params }: Props) {
	const { slug } = await params
	const goal = getGoal(slug)
	if (!goal) notFound()
	const ranked = getPeptidesByGoal(goal.slug)

	return (
		<div className="mx-auto max-w-6xl px-4 py-12">
			<p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
				Goal lane
			</p>
			<h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
				{goal.title}
			</h1>
			<p className="mt-3 max-w-2xl text-ink-muted">{goal.childBlurb}</p>
			<p className="mt-1 max-w-2xl text-sm text-ink-faint">{goal.blurb}</p>

			<div className="mt-6 flex flex-wrap gap-2">
				{goals.map((g) => (
					<Link
						key={g.slug}
						href={`/goals/${g.slug}`}
						className={`rounded-sm border px-3 py-1 text-sm ${
							g.slug === goal.slug
								? 'border-accent bg-accent-soft text-accent'
								: 'border-line text-ink-muted hover:border-accent'
						}`}
					>
						{g.title}
					</Link>
				))}
			</div>

			<ol className="mt-10 space-y-4">
				{ranked.map((p, i) => {
					const total = scoreTotal(p.score)
					const band = bandFromTotal(total)
					return (
						<li
							key={p.slug}
							className="rounded-sm border border-line bg-bg-elevated p-5"
						>
							<div className="flex flex-wrap items-baseline gap-3">
								<span className="font-display text-2xl font-semibold text-ink-faint">
									#{i + 1}
								</span>
								<Link
									href={`/peptide/${p.slug}`}
									className="font-display text-2xl font-semibold hover:text-accent"
								>
									{p.name}
								</Link>
								<span className="text-sm font-semibold text-ink-muted">
									{total}/100 · {bandLabel(band)}
								</span>
								<EvidencePill label="INFERENCE" />
							</div>
							<p className="mt-2 text-sm text-ink-muted">{p.knownSentence}</p>
						</li>
					)
				})}
			</ol>
		</div>
	)
}
