// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { LogoCloudItem, LogoCloudsSimpleProps } from './types'

const DEFAULT_LOGOS: LogoCloudItem[] = [
  {
    name: 'Transistor',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
      alt: 'Transistor',
      width: 158,
      height: 48,
    },
    className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
  },
  {
    name: 'Reform',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
      alt: 'Reform',
      width: 158,
      height: 48,
    },
    className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
  },
  {
    name: 'Tuple',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
      alt: 'Tuple',
      width: 158,
      height: 48,
    },
    className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
  },
  {
    name: 'SavvyCal',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
      alt: 'SavvyCal',
      width: 158,
      height: 48,
    },
    className: 'col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1',
  },
  {
    name: 'Statamic',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
      alt: 'Statamic',
      width: 158,
      height: 48,
    },
    className: 'col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1',
  },
]

const DEFAULT_PROPS: Required<Omit<LogoCloudsSimpleProps, 'className'>> = {
  title: 'Trusted by the world’s most innovative teams',
  logos: DEFAULT_LOGOS,
}

export default function LogoCloudsSimple({
  title = DEFAULT_PROPS.title,
  logos = DEFAULT_PROPS.logos,
  className = '',
}: LogoCloudsSimpleProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title ? <h2 className="text-center text-lg/8 font-semibold text-gray-900">{title}</h2> : null}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logoItem) => (
            <div
              key={logoItem.name}
              className={logoItem.className ?? 'col-span-2 max-h-12 w-full object-contain lg:col-span-1'}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={logoItem.logo.alt}
                src={logoItem.logo.src}
                width={logoItem.logo.width}
                height={logoItem.logo.height}
                className="max-h-12 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export type { LogoCloudItem, LogoCloudsSimpleProps } from './types'
