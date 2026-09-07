import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans } from 'next/font/google'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'
import './globals.css'

const plex = IBM_Plex_Sans({
	variable: '--font-plex',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const fraunces = Fraunces({
	variable: '--font-fraunces',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		default: 'PEPTIDE INTELLIGENCE',
		template: '%s · PEPTIDE INTELLIGENCE',
	},
	description:
		'Evidence engine for peptides and GLP-1s — not a catalog, not a clinic.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${plex.variable} ${fraunces.variable} flex min-h-screen flex-col antialiased`}>
				<SiteHeader />
				<main className="flex-1">{children}</main>
				<SiteFooter />
			</body>
		</html>
	)
}
