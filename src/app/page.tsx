import Link from 'next/link'
import { FREEZE_LINE } from '@/lib/evidence'

export default function HomePage() {
	return (
		<div>
			<section className="relative overflow-hidden border-b border-line">
				<div
					className="pointer-events-none absolute inset-0 opacity-70"
					style={{
						backgroundImage:
							'radial-gradient(circle at 20% 20%, var(--accent-soft), transparent 40%), radial-gradient(circle at 80% 0%, var(--info-soft), transparent 35%), linear-gradient(180deg, #eef2f5 0%, var(--bg) 70%)',
					}}
				/>
				<div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20">
					<p className="font-display text-sm font-semibold tracking-[0.25em] text-accent uppercase">
						PEPTIDE INTELLIGENCE
					</p>
					<h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
						Two industries share one word.
					</h1>
					<p className="mt-5 max-w-xl text-lg text-ink-muted">
						Insulin and semaglutide are peptides. So is a 5&nbsp;mg vial from a
						Telegram vendor. This engine separates approved medicine from grey
						hype — with evidence labels, not shopping carts.
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<Link
							href="/table"
							className="rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
						>
							Explore evidence
						</Link>
						<Link
							href="/ask"
							className="rounded-sm border border-ink/20 bg-bg-elevated px-5 py-3 text-sm font-semibold hover:border-accent"
						>
							Ask a question
						</Link>
					</div>
					<p className="mt-6 text-xs tracking-wide text-ink-faint uppercase">
						Regulatory freeze line · {FREEZE_LINE}
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-16">
				<h2 className="font-display text-2xl font-semibold">Three legal worlds</h2>
				<p className="mt-2 max-w-2xl text-ink-muted">
					Treat legality as three different maps — not one vibe.
				</p>
				<div className="mt-8 grid gap-4 md:grid-cols-3">
					<div className="rounded-sm border-2 border-solid border-ok bg-ok-soft/40 p-5">
						<p className="text-xs font-semibold tracking-wide text-ok uppercase">
							World 1
						</p>
						<h3 className="mt-2 font-display text-xl font-semibold">Approved drugs</h3>
						<p className="mt-2 text-sm text-ink-muted">
							Named finished products + indications. Semaglutide pens are not the
							same as a raw powder with the same sequence.
						</p>
					</div>
					<div className="rounded-sm border-2 border-dashed border-warn bg-warn-soft/40 p-5">
						<p className="text-xs font-semibold tracking-wide text-warn uppercase">
							World 2
						</p>
						<h3 className="mt-2 font-display text-xl font-semibold">Compounding</h3>
						<p className="mt-2 text-sm text-ink-muted">
							503A/503B rules. A July 2026 PCAC vote is advisory — not listing, not
							approval, not a license to compound.
						</p>
					</div>
					<div className="rounded-sm border-2 border-dotted border-ink-faint bg-bg-elevated p-5">
						<p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
							World 3
						</p>
						<h3 className="mt-2 font-display text-xl font-semibold">Grey / underground</h3>
						<p className="mt-2 text-sm text-ink-muted">
							“Not for human use” vials, imports, unverified injectables. We map
							them. We do not treat them as medicine.
						</p>
					</div>
				</div>
			</section>

			<section className="border-y border-line bg-bg-elevated">
				<div className="mx-auto max-w-6xl px-4 py-16">
					<h2 className="font-display text-2xl font-semibold">Hype vs reality</h2>
					<p className="mt-2 text-ink-muted">Field-level, not one molecule.</p>
					<ul className="mt-8 space-y-4">
						{[
							{ label: 'Internet hype', score: 9, max: 10 },
							{ label: 'Human evidence (wellness peptides)', score: 3, max: 10 },
							{ label: 'Known safety (same class)', score: 3, max: 10 },
							{ label: 'Medical legitimacy (approved labeled drugs)', score: 9, max: 10 },
						].map((row) => (
							<li key={row.label}>
								<div className="mb-1 flex justify-between text-sm">
									<span>{row.label}</span>
									<span className="font-semibold">
										{row.score}/{row.max}
									</span>
								</div>
								<div className="h-2 overflow-hidden rounded-sm bg-line">
									<div
										className="h-full bg-accent"
										style={{ width: `${(row.score / row.max) * 100}%` }}
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-16">
				<h2 className="font-display text-2xl font-semibold">Start exploring</h2>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{[
						{
							href: '/goals/fat-loss',
							title: 'Goal lanes',
							text: 'Fat loss, injury, sleep — ranked by human evidence.',
						},
						{
							href: '/body',
							title: 'Body map',
							text: 'Click a system. See evidence strength, not slogans.',
						},
						{
							href: '/table',
							title: 'Evidence table',
							text: 'Periodic-table view of the v1 teaching set.',
						},
						{
							href: '/peptide/bpc-157',
							title: 'Hype stress test',
							text: 'Open BPC-157 beside semaglutide to feel the gap.',
						},
					].map((c) => (
						<Link
							key={c.href}
							href={c.href}
							className="rounded-sm border border-line bg-bg-elevated p-5 transition-colors hover:border-accent"
						>
							<h3 className="font-display text-lg font-semibold">{c.title}</h3>
							<p className="mt-2 text-sm text-ink-muted">{c.text}</p>
						</Link>
					))}
				</div>
			</section>
		</div>
	)
}
