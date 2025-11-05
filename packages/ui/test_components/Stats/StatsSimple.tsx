// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { StatItem, StatsSimpleProps } from './types'

const DEFAULT_STATS: StatItem[] = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]

const DEFAULT_PROPS = {
  title: 'Trusted by creators worldwide',
  description: 'Lorem ipsum dolor sit amet consect adipisicing possimus.',
  stats: DEFAULT_STATS,
}

export default function StatsSimple({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  stats = DEFAULT_PROPS.stats,
  className = '',
}: StatsSimpleProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
            <p className="mt-4 text-lg/8 text-gray-600">{description}</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id ?? stat.name} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export type { StatItem, StatsSimpleProps } from './types'
