// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { StatItem, StatsSplitWithImageProps } from './types'

const DEFAULT_STATS: StatItem[] = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]

const DEFAULT_PROPS: StatsSplitWithImageProps = {
  eyebrow: 'Our track record',
  title: 'Trusted by thousands of creators worldwide',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  imageUrl:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80',
  imageAlt: 'Team members collaborating in a modern workspace',
  stats: DEFAULT_STATS,
}

export default function StatsSplitWithImage({
  eyebrow = DEFAULT_PROPS.eyebrow,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  imageUrl = DEFAULT_PROPS.imageUrl,
  imageAlt = DEFAULT_PROPS.imageAlt,
  stats = DEFAULT_PROPS.stats,
  className = '',
}: StatsSplitWithImageProps = {}) {
  const rootClassName = ['relative bg-white', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      {imageUrl ? (
        <div className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={imageAlt} src={imageUrl} className="size-full object-cover" />
        </div>
      ) : null}
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base/8 font-semibold text-indigo-600">{eyebrow}</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</p>
            <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id ?? stat.name} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { StatItem, StatsSplitWithImageProps } from './types'
