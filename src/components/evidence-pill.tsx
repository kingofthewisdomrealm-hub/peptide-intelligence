import type { EvidenceLabel } from '@/lib/evidence'
import { LABEL_HELP } from '@/lib/evidence'

const styles: Record<EvidenceLabel, string> = {
	FACT: 'bg-ok-soft text-ok border-ok/30',
	INFERENCE: 'bg-info-soft text-info border-info/30',
	'EXPERT OPINION': 'bg-accent-soft text-accent border-accent/30',
	'ANIMAL DATA': 'bg-warn-soft text-warn border-warn/30',
	ANECDOTE: 'bg-line/60 text-ink-muted border-line',
	'MARKETING CLAIM': 'bg-danger-soft text-danger border-danger/30',
	UNKNOWN: 'bg-bg text-ink-faint border-line',
}

export function EvidencePill({
	label,
	showHelp = false,
}: {
	label: EvidenceLabel
	showHelp?: boolean
}) {
	return (
		<span
			className={`inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${styles[label]}`}
			title={showHelp ? LABEL_HELP[label] : LABEL_HELP[label]}
		>
			{label}
		</span>
	)
}
