import type { RegulatoryStatus, RegulatoryWorld } from '@/lib/evidence'

const worldStyles: Record<RegulatoryWorld, string> = {
	approved: 'border-solid border-ok text-ok bg-ok-soft',
	compounding: 'border-dashed border-warn text-warn bg-warn-soft',
	grey: 'border-dotted border-ink-faint text-ink-muted bg-bg',
}

const statusCopy: Record<RegulatoryStatus, string> = {
	approved: 'Approved finished drug',
	investigational: 'Investigational',
	'pcac-advisory': 'PCAC advisory — not listed',
	'pcac-rejected': 'PCAC rejected',
	unapproved: 'Unapproved',
	'community-not-peptide': 'Not a peptide',
}

export function WorldBadge({
	world,
	children,
}: {
	world: RegulatoryWorld
	children: React.ReactNode
}) {
	return (
		<span
			className={`inline-flex items-center rounded-sm border-2 px-2 py-0.5 text-[11px] font-semibold tracking-wide ${worldStyles[world]}`}
		>
			{children}
		</span>
	)
}

export function StatusBadge({ status }: { status: RegulatoryStatus }) {
	const world: RegulatoryWorld =
		status === 'approved' || status === 'community-not-peptide'
			? 'approved'
			: status === 'pcac-advisory' || status === 'pcac-rejected'
				? 'compounding'
				: status === 'investigational'
					? 'compounding'
					: 'grey'
	return <WorldBadge world={world}>{statusCopy[status]}</WorldBadge>
}
