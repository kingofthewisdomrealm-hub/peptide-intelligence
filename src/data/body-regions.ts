import type { BodySystem } from '@/lib/evidence'

export type BodyRegion = {
	system: BodySystem
	title: string
	child: string
	science: string
}

export const bodyRegions: BodyRegion[] = [
	{
		system: 'metabolism',
		title: 'Metabolism',
		child: 'How the body stores energy, hunger, and weight.',
		science: 'Incretin and energy-balance pathways; glycemic control.',
	},
	{
		system: 'gut',
		title: 'Gut',
		child: 'Stomach and intestines — nausea lives here too.',
		science: 'GI motility, mucosal signaling, incretin AEs.',
	},
	{
		system: 'tendon',
		title: 'Tendon / muscle',
		child: 'The parts people hope will heal after sports injuries.',
		science: 'Musculoskeletal repair claims; mostly preclinical for wellness peptides.',
	},
	{
		system: 'vessels',
		title: 'Vessels / heart',
		child: 'Blood vessels and heart risk.',
		science: 'Cardiovascular outcomes where measured (e.g., SELECT).',
	},
	{
		system: 'brain',
		title: 'Brain / sleep',
		child: 'Focus, mood, and sleep stories.',
		science: 'CNS peptides; evidence often thin outside originating literature.',
	},
	{
		system: 'skin',
		title: 'Skin',
		child: 'Color, healing, cosmetic claims.',
		science: 'Pigment pathways; topical vs injectable are different claims.',
	},
	{
		system: 'sexual',
		title: 'Sexual',
		child: 'Desire and related claims.',
		science: 'Melanocortin and related pathways; approved vs grey diverge.',
	},
	{
		system: 'mito',
		title: 'Mitochondria',
		child: 'Tiny energy factories inside cells.',
		science: 'Mitochondrial-targeted and mitochondrial-derived peptides.',
	},
	{
		system: 'immune',
		title: 'Immune',
		child: 'Defense and inflammation stories.',
		science: 'Immune-modulating peptide claims; often early.',
	},
]
