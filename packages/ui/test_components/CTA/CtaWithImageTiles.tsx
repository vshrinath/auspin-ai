// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { CtaAction, CtaWithImageTilesImage, CtaWithImageTilesProps } from './types'

const DEFAULT_PRIMARY_ACTION: CtaAction = {
  label: 'Join our team',
  href: '#',
}

const DEFAULT_IMAGES: CtaWithImageTilesImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80',
    alt: 'Team celebrating success in an open office.',
  },
  {
    src: 'https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
    alt: 'Designers collaborating at a laptop.',
  },
  {
    src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80',
    alt: 'Engineer pairing session in a modern workspace.',
  },
  {
    src: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
    alt: 'Close up of team collaboration on a tablet.',
  },
]

const DEFAULT_PROPS: Required<Omit<CtaWithImageTilesProps, 'className'>> = {
  title: 'Our people',
  lead:
    'Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.',
  primaryAction: DEFAULT_PRIMARY_ACTION,
  images: DEFAULT_IMAGES,
}

export default function CtaWithImageTiles({
  title = DEFAULT_PROPS.title,
  lead = DEFAULT_PROPS.lead,
  description = DEFAULT_PROPS.description,
  primaryAction = DEFAULT_PROPS.primaryAction,
  images = DEFAULT_PROPS.images,
  className = '',
}: CtaWithImageTilesProps = {}) {
  const rootClassName = ['overflow-hidden bg-white py-32', className].filter(Boolean).join(' ')

  const [primaryImage, ...restImages] = images

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
            <p className="mt-6 text-xl/8 text-gray-700">{lead}</p>
            <p className="mt-6 text-base/7 text-gray-600">{description}</p>
            <div className="mt-10 flex">
              <a
                href={primaryAction.href}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {primaryAction.label}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            {primaryImage ? (
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={primaryImage.alt}
                  src={primaryImage.src}
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-[30rem]"
                />
              </div>
            ) : null}
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              {restImages.map((image, index) => {
                const sizeClasses =
                  index === 0
                    ? 'order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto'
                    : index === 1
                      ? 'flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'
                      : 'hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'
                const baseClasses =
                  index === 0
                    ? 'aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                    : index === 1
                      ? 'aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-[30rem]'
                      : 'aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                return (
                  <div key={`${image.src}-${index}`} className={sizeClasses}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={image.alt} src={image.src} className={baseClasses} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { CtaAction, CtaWithImageTilesImage, CtaWithImageTilesProps } from './types'
