// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

import type { FeatureIconItem, FeatureThreeColumnWithIconsProps } from './types'

const DEFAULT_FEATURES: FeatureIconItem[] = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

const DEFAULT_PROPS: Required<Omit<FeatureThreeColumnWithIconsProps, 'className'>> = {
  eyebrow: 'Deploy faster',
  title: 'Everything you need to deploy your app',
  description:
    'Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.',
  features: DEFAULT_FEATURES,
  linkLabel: 'Learn more',
}

export default function FeatureThreeColumnWithIcons({
  eyebrow = DEFAULT_PROPS.eyebrow,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  features = DEFAULT_PROPS.features,
  linkLabel = DEFAULT_PROPS.linkLabel,
  className = '',
}: FeatureThreeColumnWithIconsProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {eyebrow ? <h2 className="text-base/7 font-semibold text-indigo-600">{eyebrow}</h2> : null}
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">{title}</p>
          {description ? <p className="mt-6 text-lg/8 text-gray-600">{description}</p> : null}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  {feature.icon ? (
                    <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  ) : null}
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {feature.href ? (
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                        {feature.ctaLabel ?? linkLabel} <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export type { FeatureIconItem, FeatureThreeColumnWithIconsProps } from './types'
