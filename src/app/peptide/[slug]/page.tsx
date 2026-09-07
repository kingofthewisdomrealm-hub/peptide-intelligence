import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PeptideCardView } from '@/components/peptide-card-view'
import { getPeptide, peptides } from '@/data/peptides'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
	return peptides.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const peptide = getPeptide(slug)
	return { title: peptide?.name ?? 'Peptide' }
}

export default async function PeptidePage({ params }: Props) {
	const { slug } = await params
	const peptide = getPeptide(slug)
	if (!peptide) notFound()

	return (
		<div className="mx-auto max-w-6xl px-4 py-12">
			<PeptideCardView peptide={peptide} />
		</div>
	)
}
