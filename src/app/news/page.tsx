import type { Metadata } from 'next'
import { EvidencePill } from '@/components/evidence-pill'
import { FREEZE_LINE } from '@/lib/evidence'

export const metadata: Metadata = {
	title: 'News',
}

export default function NewsPage() {
	return (
		<div className="mx-auto max-w-3xl px-4 py-12">
			<h1 className="font-display text-4xl font-semibold tracking-tight">News</h1>
			<p className="mt-3 text-ink-muted">
				Material developments only — not clinic protocol drops or COA screenshots.
				Freeze line {FREEZE_LINE}.
			</p>

			<section className="mt-10 space-y-6">
				<div className="rounded-sm border border-line bg-bg-elevated p-5">
					<div className="flex flex-wrap items-center gap-2">
						<p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
							Regulatory
						</p>
						<EvidencePill label="FACT" />
					</div>
					<h2 className="mt-2 font-display text-xl font-semibold">
						July 23–24, 2026 PCAC
					</h2>
					<p className="mt-2 text-sm text-ink-muted">
						Recommended six unapproved peptides for possible 503A listing (BPC-157,
						KPV, TB-500, MOTS-c, Semax, Epitalon); rejected DSIP. FDA scientists
						dissented on characterization and safety. The vote is advisory. Nothing
						is legally compounded from that vote alone.
					</p>
				</div>

				<div className="rounded-sm border border-line bg-bg-elevated p-5">
					<div className="flex flex-wrap items-center gap-2">
						<p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
							Regulatory
						</p>
						<EvidencePill label="FACT" />
					</div>
					<h2 className="mt-2 font-display text-xl font-semibold">
						GLP-1 shortage compounding ended
					</h2>
					<p className="mt-2 text-sm text-ink-muted">
						FDA position: no clinical need to compound semaglutide / tirzepatide /
						liraglutide from bulk when approved products exist. Shortage-era
						compounding for sema/tirz is over.
					</p>
				</div>

				<div className="rounded-sm border border-line bg-bg-elevated p-5">
					<div className="flex flex-wrap items-center gap-2">
						<p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
							Late-stage science
						</p>
						<EvidencePill label="FACT" />
					</div>
					<h2 className="mt-2 font-display text-xl font-semibold">Retatrutide Phase 3</h2>
					<p className="mt-2 text-sm text-ink-muted">
						TRIUMPH program readouts in 2026; reported mean weight-loss roughly
						~20–28% depending on trial and dose; GI adverse events dominate. Lilly
						has said it plans a U.S. BLA in Q1 2027. Investigational peptide drug —
						not a research-chem shortcut.
					</p>
				</div>
			</section>
		</div>
	)
}
