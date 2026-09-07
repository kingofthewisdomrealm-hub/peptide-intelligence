import type { Metadata } from 'next'
import { BodyMapExplorer } from '@/components/body-map'

export const metadata: Metadata = {
	title: 'Body map',
}

export default function BodyPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-12">
			<h1 className="font-display text-4xl font-semibold tracking-tight">Body map</h1>
			<p className="mt-3 max-w-2xl text-ink-muted">
				Click a region. Peptides are filtered by claimed systems, colored by
				human-evidence strength for that system — not seller slogans.
			</p>
			<div className="mt-10">
				<BodyMapExplorer />
			</div>
		</div>
	)
}
