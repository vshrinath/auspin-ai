// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import type { FeatureIconItem, FeatureWithProductScreenshotProps } from './types'

const DEFAULT_FEATURES: FeatureIconItem[] = [
  {
    name: 'Push to deploy',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const DEFAULT_PROPS: Required<Omit<FeatureWithProductScreenshotProps, 'className'>> = {
  eyebrow: 'Deploy faster',
  title: 'A better workflow',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  features: DEFAULT_FEATURES,
  screenshot: {
    src: 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
    alt: 'Product screenshot',
    width: 2432,
    height: 1442,
  },
}

export default function FeatureWithProductScreenshot({
  eyebrow = DEFAULT_PROPS.eyebrow,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  features = DEFAULT_PROPS.features,
  screenshot = DEFAULT_PROPS.screenshot,
  className = '',
}: FeatureWithProductScreenshotProps = {}) {
  const rootClassName = ['overflow-hidden bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {eyebrow ? <h2 className="text-base/7 font-semibold text-indigo-600">{eyebrow}</h2> : null}
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</p>
              {description ? <p className="mt-6 text-lg/8 text-gray-700">{description}</p> : null}
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
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
          {screenshot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={screenshot.alt}
              src={screenshot.src}
              width={screenshot.width}
              height={screenshot.height}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export type { FeatureIconItem, FeatureWithProductScreenshotProps } from './types'
