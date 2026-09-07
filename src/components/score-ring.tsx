import type { EvidenceBand, ScoreSlices } from '@/lib/evidence'
import { bandFromTotal, bandLabel, scoreTotal } from '@/lib/evidence'

const bandColor: Record<EvidenceBand, string> = {
	strong: 'var(--band-strong)',
	good: 'var(--band-good)',
	moderate: 'var(--band-moderate)',
	early: 'var(--band-early)',
	experimental: 'var(--band-experimental)',
	theoretical: 'var(--band-theoretical)',
}

export function ScoreRing({
	score,
	size = 120,
}: {
	score: ScoreSlices
	size?: number
}) {
	const total = scoreTotal(score)
	const band = bandFromTotal(total)
	const r = 42
	const c = 2 * Math.PI * r
	const offset = c - (total / 100) * c

	const slices = [
		{ key: 'Human', value: score.humanEvidence, max: 25 },
		{ key: 'Trials', value: score.trialQuality, max: 20 },
		{ key: 'Replication', value: score.replication, max: 15 },
		{ key: 'Magnitude', value: score.effectMagnitude, max: 10 },
		{ key: 'Safety', value: score.safetyUnderstanding, max: 15 },
		{ key: 'Regulatory', value: score.regulatoryAcceptance, max: 15 },
	]

	return (
		<div className="flex flex-col items-center gap-3" title={bandLabel(band)}>
			<svg width={size} height={size} viewBox="0 0 100 100" className="block">
				<circle
					cx="50"
					cy="50"
					r={r}
					fill="none"
					stroke="var(--line)"
					strokeWidth="8"
				/>
				<circle
					cx="50"
					cy="50"
					r={r}
					fill="none"
					stroke={bandColor[band]}
					strokeWidth="8"
					strokeLinecap="round"
					strokeDasharray={c}
					strokeDashoffset={offset}
					transform="rotate(-90 50 50)"
					className="score-ring-progress"
				/>
				<text
					x="50"
					y="48"
					textAnchor="middle"
					fill="var(--ink)"
					style={{ fontSize: '18px', fontWeight: 700 }}
				>
					{total}
				</text>
				<text
					x="50"
					y="62"
					textAnchor="middle"
					fill="var(--ink-muted)"
					style={{ fontSize: '8px' }}
				>
					/100
				</text>
			</svg>
			<p className="text-center text-xs font-medium text-ink-muted">{bandLabel(band)}</p>
			<ul className="grid w-full max-w-[220px] grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-ink-muted">
				{slices.map((s) => (
					<li key={s.key} className="flex justify-between gap-2">
						<span>{s.key}</span>
						<span className="font-semibold text-ink">
							{s.value}/{s.max}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}
