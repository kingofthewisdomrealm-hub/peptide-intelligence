'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { EvidencePill } from '@/components/evidence-pill'
import { runCommand } from '@/lib/commands'
import type { EvidenceLabel } from '@/lib/evidence'

export function AskPanel({ initialQuery = '' }: { initialQuery?: string }) {
	const router = useRouter()
	const [query, setQuery] = useState(initialQuery)
	const [submitted, setSubmitted] = useState(initialQuery)

	const answer = useMemo(() => runCommand(submitted), [submitted])

	function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setSubmitted(query)
		router.replace(`/ask?q=${encodeURIComponent(query)}`)
	}

	return (
		<div className="space-y-6">
			<form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="/PEPTIDE BPC-157 or: what peptide should I take?"
					className="w-full rounded-sm border border-line bg-bg-elevated px-3 py-3 text-sm outline-none focus:border-accent"
				/>
				<button
					type="submit"
					className="rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
				>
					Ask
				</button>
			</form>

			<div className="flex flex-wrap gap-2 text-xs">
				{[
					'/PEPTIDE BPC-157',
					'/PEPTIDE semaglutide',
					'/COMPARE BPC-157 TB-500',
					'/CATEGORY injury',
					'/ACCESS semaglutide',
					'what peptide should I take?',
				].map((q) => (
					<button
						key={q}
						type="button"
						onClick={() => {
							setQuery(q)
							setSubmitted(q)
							router.replace(`/ask?q=${encodeURIComponent(q)}`)
						}}
						className="rounded-sm border border-line px-2 py-1 text-ink-muted hover:border-accent hover:text-accent"
					>
						{q}
					</button>
				))}
			</div>

			<section className="rounded-sm border border-line bg-bg-elevated p-6">
				<h2 className="font-display text-2xl font-semibold">{answer.headline}</h2>
				<ul className="mt-4 space-y-4">
					{answer.blocks.map((b, i) => (
						<li key={`${b.title ?? ''}-${i}`} className="border-t border-line pt-4 first:border-0 first:pt-0">
							{b.title && (
								<p className="text-sm font-semibold text-ink">{b.title}</p>
							)}
							<div className="mt-1 flex flex-wrap items-start gap-2">
								{b.label && <EvidencePill label={b.label as EvidenceLabel} />}
								<p className="text-sm text-ink-muted">{b.text}</p>
							</div>
						</li>
					))}
				</ul>
				{answer.links && answer.links.length > 0 && (
					<div className="mt-6 flex flex-wrap gap-3">
						{answer.links.map((l) => (
							<Link
								key={l.href}
								href={l.href}
								className="text-sm font-semibold text-accent hover:underline"
							>
								{l.label}
							</Link>
						))}
					</div>
				)}
			</section>
		</div>
	)
}
