import Link from 'next/link'
import { EvidencePill } from '@/components/evidence-pill'
import { ScoreRing } from '@/components/score-ring'
import { StatusBadge, WorldBadge } from '@/components/world-badge'
import type { Peptide } from '@/lib/evidence'

export function PeptideCardView({ peptide }: { peptide: Peptide }) {
	return (
		<article className="space-y-10">
			<header className="grid gap-8 border-b border-line pb-8 lg:grid-cols-[1fr_180px]">
				<div className="space-y-4">
					<p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
						{peptide.archetype}
					</p>
					<h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
						{peptide.name}
					</h1>
					{peptide.communityNotPeptide && (
						<p className="text-sm font-semibold text-warn">
							COMMUNITY PEPTIDE — TECHNICALLY NOT A PEPTIDE
						</p>
					)}
					<div className="grid gap-3 md:grid-cols-2">
						<div className="rounded-sm border border-line bg-bg p-4">
							<p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
								What people think
							</p>
							<p className="mt-1 text-sm text-ink-muted">{peptide.hypeSentence}</p>
						</div>
						<div className="rounded-sm border border-accent/30 bg-accent-soft/50 p-4">
							<p className="text-xs font-semibold tracking-wide text-accent uppercase">
								What is actually known
							</p>
							<p className="mt-1 text-sm">{peptide.knownSentence}</p>
						</div>
					</div>
					<div className="flex flex-wrap gap-2">
						<StatusBadge status={peptide.regulatoryStatus} />
						{peptide.wada && (
							<span className="rounded-sm border border-danger/40 bg-danger-soft px-2 py-0.5 text-[11px] font-semibold text-danger">
								WADA: {peptide.wada}
							</span>
						)}
					</div>
					{peptide.pcacNote && (
						<p className="text-sm text-ink-muted">
							<EvidencePill label="FACT" /> <span className="ml-2">{peptide.pcacNote}</span>
						</p>
					)}
				</div>
				<ScoreRing score={peptide.score} />
			</header>

			<section className="rounded-sm border border-line bg-bg-elevated p-6">
				<h2 className="font-display text-xl font-semibold">Child layer</h2>
				<p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-muted">
					{peptide.childExplanation}
				</p>
			</section>

			<section>
				<h2 className="font-display text-xl font-semibold">Body map</h2>
				<p className="mt-1 text-sm text-ink-muted">
					Colors reflect human-evidence strength for that system — not marketing claims.
				</p>
				<ul className="mt-4 grid gap-3 sm:grid-cols-2">
					{peptide.body.map((b) => (
						<li key={b.system} className="rounded-sm border border-line bg-bg-elevated p-4">
							<div className="flex flex-wrap items-center gap-2">
								<span className="font-semibold capitalize">{b.system}</span>
								<span className="text-xs text-ink-faint uppercase">{b.strength}</span>
								<EvidencePill label={b.label} />
							</div>
							<p className="mt-2 text-sm text-ink-muted">{b.note}</p>
						</li>
					))}
				</ul>
			</section>

			<section>
				<h2 className="font-display text-xl font-semibold">Studies</h2>
				<p className="mt-1 text-sm text-ink-muted">
					Study doses are research context, not your dose.
				</p>
				<ul className="mt-4 space-y-3">
					{peptide.studies.length === 0 && (
						<li className="text-sm text-ink-muted">
							No curated landmark cards in v1 yet for this entry.
						</li>
					)}
					{peptide.studies.map((s) => (
						<li key={s.title} className="rounded-sm border border-line bg-bg-elevated p-4">
							<div className="flex flex-wrap items-center gap-2">
								<span className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
									{s.year} · {s.kind}
								</span>
								<EvidencePill label={s.label} />
							</div>
							<p className="mt-1 font-semibold">{s.title}</p>
							<p className="mt-1 text-sm text-ink-muted">
								{s.design}
								{s.n ? ` · n=${s.n}` : ''}
								{s.duration ? ` · ${s.duration}` : ''}
							</p>
							<p className="mt-2 text-sm">{s.outcome}</p>
							{s.doseAsStudied && (
								<p className="mt-1 text-xs text-ink-faint">
									Dose-as-studied (research context): {s.doseAsStudied}
								</p>
							)}
							{s.harms && (
								<p className="mt-1 text-sm text-ink-muted">Harms: {s.harms}</p>
							)}
							{s.limits && (
								<p className="mt-1 text-sm text-ink-muted">Limits: {s.limits}</p>
							)}
						</li>
					))}
				</ul>
			</section>

			<section>
				<h2 className="font-display text-xl font-semibold">Risks</h2>
				<ul className="mt-4 space-y-2">
					{peptide.risks.map((r) => (
						<li
							key={r.text}
							className="flex flex-wrap items-start gap-2 rounded-sm border border-line bg-bg-elevated px-4 py-3"
						>
							<span className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
								{r.tier}
							</span>
							<EvidencePill label={r.label} />
							<span className="text-sm">{r.text}</span>
						</li>
					))}
				</ul>
			</section>

			<section>
				<h2 className="font-display text-xl font-semibold">Access</h2>
				<p className="mt-1 text-sm text-ink-muted">Lawful vs grey vs underground — never a shop.</p>
				<ul className="mt-4 space-y-3">
					{peptide.access.map((a) => (
						<li key={a.title} className="rounded-sm border border-line bg-bg-elevated p-4">
							<div className="flex flex-wrap items-center gap-2">
								<WorldBadge world={a.world}>{a.world}</WorldBadge>
								<span className="font-semibold">{a.title}</span>
								<EvidencePill label={a.label} />
							</div>
							<p className="mt-2 text-sm text-ink-muted">{a.detail}</p>
						</li>
					))}
				</ul>
			</section>

			{peptide.claims.length > 0 && (
				<section>
					<h2 className="font-display text-xl font-semibold">Key claims</h2>
					<ul className="mt-4 space-y-2">
						{peptide.claims.map((c) => (
							<li key={c.text} className="flex flex-wrap items-start gap-2 text-sm">
								<EvidencePill label={c.label} />
								<span>{c.text}</span>
							</li>
						))}
					</ul>
				</section>
			)}

			<div className="flex flex-wrap gap-3 border-t border-line pt-6">
				<Link
					href={`/ask?q=${encodeURIComponent(`/PEPTIDE ${peptide.name}`)}`}
					className="rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
				>
					Ask about this
				</Link>
				<Link
					href={`/compare?a=${peptide.slug}`}
					className="rounded-sm border border-line px-4 py-2 text-sm font-semibold hover:border-accent"
				>
					Compare
				</Link>
				<Link
					href="/body"
					className="rounded-sm border border-line px-4 py-2 text-sm font-semibold hover:border-accent"
				>
					Body map
				</Link>
			</div>
		</article>
	)
}
