import Link from 'next/link'
import { FREEZE_LINE } from '@/lib/evidence'

const links = [
	{ href: '/table', label: 'Table' },
	{ href: '/goals/fat-loss', label: 'Goals' },
	{ href: '/body', label: 'Body' },
	{ href: '/compare', label: 'Compare' },
	{ href: '/ask', label: 'Ask' },
	{ href: '/news', label: 'News' },
	{ href: '/myths', label: 'Myths' },
]

export function SiteHeader() {
	return (
		<header className="border-b border-line bg-bg-elevated">
			<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
				<Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink">
					PEPTIDE INTELLIGENCE
				</Link>
				<nav className="flex flex-wrap items-center gap-1">
					{links.map((l) => (
						<Link
							key={l.href}
							href={l.href}
							className="rounded-sm px-2 py-1 text-sm text-ink-muted transition-colors hover:bg-accent-soft hover:text-accent"
						>
							{l.label}
						</Link>
					))}
				</nav>
				<span className="rounded-sm border border-line bg-bg px-2 py-1 text-[10px] font-medium tracking-wide text-ink-faint uppercase">
					Freeze line {FREEZE_LINE}
				</span>
			</div>
		</header>
	)
}

export function SiteFooter() {
	return (
		<footer className="mt-auto border-t border-line">
			<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-ink-muted">
				<p>
					Evidence engine — not a catalog, not a clinic. Not medical advice. No
					prescriptions. No buy buttons.
				</p>
				<p className="text-xs text-ink-faint">
					PCAC votes are advisory. A COA is not sterility. Animal data is not human
					proof. Two peptides studied separately are not a studied stack.
				</p>
			</div>
		</footer>
	)
}
