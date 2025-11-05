// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { StatItem, StatsWithDescriptionProps } from './types'

const DEFAULT_STATS: StatItem[] = [
  { name: 'Transactions every 24 hours', value: '44 million' },
  { name: 'Assets under holding', value: '$119 trillion' },
  { name: 'New users annually', value: '46,000' },
]

const DEFAULT_PROPS: StatsWithDescriptionProps = {
  title: 'Our mission',
  lead:
    'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.',
  description:
    'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.',
  stats: DEFAULT_STATS,
}

export default function StatsWithDescription({
  title = DEFAULT_PROPS.title,
  lead = DEFAULT_PROPS.lead,
  description = DEFAULT_PROPS.description,
  stats = DEFAULT_PROPS.stats,
  className = '',
}: StatsWithDescriptionProps = {}) {
  const rootClassName = ['bg-white py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">{lead}</p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">{description}</p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { StatItem, StatsWithDescriptionProps } from './types'
