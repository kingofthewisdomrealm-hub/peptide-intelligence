import type { Metadata } from 'next'
import { TableCell } from '@/components/table-cell'
import { peptides } from '@/data/peptides'
import type { Peptide } from '@/lib/evidence'

export const metadata: Metadata = {
	title: 'Evidence table',
}

const axes: { key: Peptide['axis']; title: string; blurb: string }[] = [
	{
		key: 'incretin',
		title: 'Metabolism / incretin',
		blurb: 'Strongest human evidence in the field.',
	},
	{ key: 'gh', title: 'GH axis', blurb: 'Approved narrow uses vs thin wellness claims.' },
	{
		key: 'repair',
		title: 'Tissue / repair',
		blurb: 'Highest hype-to-evidence gap.',
	},
	{ key: 'mito', title: 'Mitochondrial', blurb: 'Rare-disease signal ≠ longevity protocol.' },
	{ key: 'neuro', title: 'Neuro / sleep', blurb: 'Advisory votes and folklore.' },
	{ key: 'sexual', title: 'Sexual / pigment', blurb: 'Named products vs grey kits.' },
	{
		key: 'neighbor',
		title: 'Neighbors',
		blurb: 'Community peptides that are technically not peptides.',
	},
]

export default function TablePage() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-12">
			<h1 className="font-display text-4xl font-semibold tracking-tight">Evidence table</h1>
			<p className="mt-3 max-w-2xl text-ink-muted">
				Traffic lights measure human evidence + regulatory legitimacy — not Instagram
				volume. Click any cell for the full card.
			</p>

			<div className="mt-10 space-y-12">
				{axes.map((axis) => {
					const items = peptides.filter((p) => p.axis === axis.key)
					if (items.length === 0) return null
					return (
						<section key={axis.key}>
							<div className="mb-4">
								<h2 className="font-display text-2xl font-semibold">{axis.title}</h2>
								<p className="text-sm text-ink-muted">{axis.blurb}</p>
							</div>
							<div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								{items.map((p) => (
									<TableCell key={p.slug} peptide={p} />
								))}
							</div>
						</section>
					)
				})}
			</div>
		</div>
	)
}
