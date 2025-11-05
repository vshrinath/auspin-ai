// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

import type { FeatureIconItem, FeatureWithLargeScreenshotProps } from './types'

const DEFAULT_FEATURES: FeatureIconItem[] = [
  {
    name: 'Push to deploy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon,
  },
]

const DEFAULT_PROPS: Required<Omit<FeatureWithLargeScreenshotProps, 'className'>> = {
  eyebrow: 'Everything you need',
  title: 'No server? No problem.',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
  features: DEFAULT_FEATURES,
  screenshot: {
    src: 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
    alt: 'App screenshot',
    width: 2432,
    height: 1442,
  },
}

export default function FeatureWithLargeScreenshot({
  eyebrow = DEFAULT_PROPS.eyebrow,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  features = DEFAULT_PROPS.features,
  screenshot = DEFAULT_PROPS.screenshot,
  className = '',
}: FeatureWithLargeScreenshotProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          {eyebrow ? <h2 className="text-base/7 font-semibold text-indigo-600">{eyebrow}</h2> : null}
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">{title}</p>
          {description ? <p className="mt-6 text-lg/8 text-gray-600">{description}</p> : null}
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {screenshot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={screenshot.alt}
              src={screenshot.src}
              width={screenshot.width}
              height={screenshot.height}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          ) : null}
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                {feature.icon ? (
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                ) : null}
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export type { FeatureIconItem, FeatureWithLargeScreenshotProps } from './types'
