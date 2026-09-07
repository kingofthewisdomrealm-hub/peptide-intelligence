'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { bodyRegions } from '@/data/body-regions'
import { getPeptidesBySystem } from '@/data/peptides'
import { EvidencePill } from '@/components/evidence-pill'
import {
	bandFromTotal,
	scoreTotal,
	type BodySystem,
	type EvidenceBand,
} from '@/lib/evidence'

const bandClass: Record<EvidenceBand, string> = {
	strong: 'bg-ok text-white',
	good: 'bg-ok/80 text-white',
	moderate: 'bg-warn text-white',
	early: 'bg-warn/80 text-white',
	experimental: 'bg-danger/80 text-white',
	theoretical: 'bg-ink-faint text-white',
}

const layout: { system: BodySystem; top: string; left: string }[] = [
	{ system: 'brain', top: '8%', left: '42%' },
	{ system: 'skin', top: '18%', left: '68%' },
	{ system: 'vessels', top: '32%', left: '48%' },
	{ system: 'gut', top: '48%', left: '40%' },
	{ system: 'metabolism', top: '48%', left: '62%' },
	{ system: 'mito', top: '62%', left: '55%' },
	{ system: 'tendon', top: '72%', left: '28%' },
	{ system: 'sexual', top: '78%', left: '48%' },
	{ system: 'immune', top: '28%', left: '22%' },
]

export function BodyMapExplorer() {
	const [active, setActive] = useState<BodySystem>('metabolism')
	const region = bodyRegions.find((r) => r.system === active)!
	const matches = useMemo(() => getPeptidesBySystem(active), [active])

	return (
		<div className="grid gap-8 lg:grid-cols-[280px_1fr]">
			<div className="relative mx-auto aspect-[3/5] w-full max-w-[280px] rounded-sm border border-line bg-bg-elevated">
				<div className="absolute inset-6 rounded-[40%] border border-line/80 bg-accent-soft/40" />
				{layout.map((n) => {
					const isOn = n.system === active
					return (
						<button
							key={n.system}
							type="button"
							onClick={() => setActive(n.system)}
							className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-1 text-[10px] font-semibold tracking-wide uppercase transition-transform ${
								isOn
									? 'region-active scale-110 border-accent bg-accent text-white'
									: 'border-line bg-bg-elevated text-ink-muted hover:border-accent'
							}`}
							style={{ top: n.top, left: n.left }}
						>
							{n.system}
						</button>
					)
				})}
			</div>

			<div className="space-y-4">
				<div>
					<h2 className="font-display text-2xl font-semibold">{region.title}</h2>
					<p className="mt-1 text-ink-muted">{region.child}</p>
					<details className="mt-2 text-sm text-ink-muted">
						<summary className="cursor-pointer text-accent">Science layer</summary>
						<p className="mt-1">{region.science}</p>
					</details>
				</div>

				<ul className="space-y-3">
					{matches.map((p) => {
						const hit = p.body.find((b) => b.system === active)!
						const total = scoreTotal(p.score)
						const band = bandFromTotal(total)
						return (
							<li
								key={p.slug}
								className="rounded-sm border border-line bg-bg-elevated p-4"
							>
								<div className="flex flex-wrap items-center gap-2">
									<Link
										href={`/peptide/${p.slug}`}
										className="font-semibold text-ink hover:text-accent"
									>
										{p.name}
									</Link>
									<span
										className={`rounded-sm px-1.5 py-0.5 text-[10px] font-semibold uppercase ${bandClass[hit.strength]}`}
									>
										{hit.strength} here
									</span>
									<EvidencePill label={hit.label} />
									<span className="text-xs text-ink-faint">card {total}/100 · {band}</span>
								</div>
								<p className="mt-2 text-sm text-ink-muted">{hit.note}</p>
							</li>
						)
					})}
					{matches.length === 0 && (
						<li className="text-sm text-ink-muted">No v1 peptides mapped here.</li>
					)}
				</ul>
			</div>
		</div>
	)
}
