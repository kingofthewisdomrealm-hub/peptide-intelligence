import type { Metadata } from 'next'
import { EvidencePill } from '@/components/evidence-pill'

export const metadata: Metadata = {
	title: 'Myths',
}

const myths = [
	'It occurs in the body, therefore injected synthetic fragment is safe.',
	'Rat tendon healing = your tennis elbow.',
	'PCAC vote = legal to compound = FDA approved.',
	'A certificate of analysis proves the vial is sterile and correctly dosed.',
	'More GH is more recovery.',
	'If a publicly known person uses it, the evidence is settled.',
	'Research-only labeling makes human injection a private scientific act.',
]

export default function MythsPage() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-12">
			<h1 className="font-display text-4xl font-semibold tracking-tight">Myths</h1>
			<p className="mt-3 text-ink-muted">
				Recurring false claims this engine kills on sight.
			</p>
			<ul className="mt-10 space-y-4">
				{myths.map((m) => (
					<li
						key={m}
						className="rounded-sm border border-danger/30 bg-danger-soft/40 p-4"
					>
						<div className="mb-2">
							<EvidencePill label="MARKETING CLAIM" />
						</div>
						<p className="font-medium text-ink">“{m}”</p>
						<p className="mt-2 text-sm text-ink-muted">
							Rejected. See charter evidence order: regulators and RCTs first;
							forums last.
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}
