import type { Metadata } from 'next'
import { AskPanel } from '@/components/ask-panel'

export const metadata: Metadata = {
	title: 'Ask',
}

type Props = {
	searchParams: Promise<{ q?: string }>
}

export default async function AskPage({ searchParams }: Props) {
	const { q } = await searchParams
	return (
		<div className="mx-auto max-w-3xl px-4 py-12">
			<h1 className="font-display text-4xl font-semibold tracking-tight">Ask</h1>
			<p className="mt-3 text-ink-muted">
				Slash commands or plain language. Answers are labeled. This will not write
				you a protocol.
			</p>
			<div className="mt-8">
				<AskPanel initialQuery={q ?? ''} />
			</div>
		</div>
	)
}
