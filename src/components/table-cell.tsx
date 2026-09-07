import Link from 'next/link'
import type { Peptide } from '@/lib/evidence'
import { bandFromTotal, scoreTotal } from '@/lib/evidence'
import { StatusBadge } from '@/components/world-badge'

const bandBorder: Record<string, string> = {
	strong: 'border-l-ok',
	good: 'border-l-ok/70',
	moderate: 'border-l-warn',
	early: 'border-l-warn/80',
	experimental: 'border-l-danger',
	theoretical: 'border-l-ink-faint',
}

export function TableCell({ peptide }: { peptide: Peptide }) {
	const total = scoreTotal(peptide.score)
	const band = bandFromTotal(total)
	return (
		<Link
			href={`/peptide/${peptide.slug}`}
			className={`group block rounded-sm border border-line border-l-4 bg-bg-elevated p-3 transition-colors hover:border-accent hover:bg-accent-soft/40 ${bandBorder[band]}`}
		>
			<div className="flex items-baseline justify-between gap-2">
				<span className="font-display text-lg font-semibold tracking-tight">
					{peptide.shortCode}
				</span>
				<span className="text-xs font-semibold text-ink-muted">{total}</span>
			</div>
			<p className="mt-0.5 text-xs text-ink-muted">{peptide.name}</p>
			<div className="mt-2">
				<StatusBadge status={peptide.regulatoryStatus} />
			</div>
			{peptide.communityNotPeptide && (
				<p className="mt-2 text-[10px] font-semibold tracking-wide text-warn uppercase">
					Community peptide — not a peptide
				</p>
			)}
		</Link>
	)
}
