// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { LogoCloudItem, LogoCloudsGridProps } from './types'

const DEFAULT_LOGOS: LogoCloudItem[] = [
  {
    name: 'Transistor',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
      alt: 'Transistor',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Reform',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
      alt: 'Reform',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Tuple',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
      alt: 'Tuple',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Laravel',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-gray-900.svg',
      alt: 'Laravel',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'SavvyCal',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
      alt: 'SavvyCal',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Statamic',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
      alt: 'Statamic',
      width: 158,
      height: 48,
    },
  },
]

const DEFAULT_PROPS: Required<Omit<LogoCloudsGridProps, 'className'>> = {
  logos: DEFAULT_LOGOS,
}

export default function LogoCloudsGrid({ logos = DEFAULT_PROPS.logos, className = '' }: LogoCloudsGridProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {logos.map((logoItem) => (
            <div key={logoItem.name} className={logoItem.className ?? 'bg-gray-400/5 p-6 sm:p-10'}>
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

export type { LogoCloudItem, LogoCloudsGridProps } from './types'
