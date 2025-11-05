// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type {
  LogoCloudItem,
  LogoCloudPrimaryAction,
  LogoCloudSecondaryAction,
  LogoCloudsLogoOnRightProps,
} from './types'

const DEFAULT_LOGOS: LogoCloudItem[] = [
  {
    name: 'Tuple',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg',
      alt: 'Tuple',
      width: 105,
      height: 48,
    },
  },
  {
    name: 'Reform',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg',
      alt: 'Reform',
      width: 104,
      height: 48,
    },
  },
  {
    name: 'SavvyCal',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
      alt: 'SavvyCal',
      width: 140,
      height: 48,
    },
  },
  {
    name: 'Laravel',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/laravel-logo-gray-900.svg',
      alt: 'Laravel',
      width: 136,
      height: 48,
    },
  },
  {
    name: 'Transistor',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg',
      alt: 'Transistor',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Statamic',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg',
      alt: 'Statamic',
      width: 147,
      height: 48,
    },
  },
]

const DEFAULT_PRIMARY_ACTION: LogoCloudPrimaryAction = {
  label: 'Create account',
  href: '#',
}

const DEFAULT_SECONDARY_ACTION: LogoCloudSecondaryAction = {
  label: 'Contact us',
  href: '#',
}

const DEFAULT_PROPS: Required<Omit<LogoCloudsLogoOnRightProps, 'className'>> = {
  title: 'Trusted by the most innovative teams',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
  primaryAction: DEFAULT_PRIMARY_ACTION,
  secondaryAction: DEFAULT_SECONDARY_ACTION,
  logos: DEFAULT_LOGOS,
}

export default function LogoCloudsLogoOnRight({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  primaryAction = DEFAULT_PROPS.primaryAction,
  secondaryAction = DEFAULT_PROPS.secondaryAction,
  logos = DEFAULT_PROPS.logos,
  className = '',
}: LogoCloudsLogoOnRightProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            {title ? <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2> : null}
            {description ? <p className="mt-6 text-lg/8 text-gray-600">{description}</p> : null}
            <div className="mt-8 flex items-center gap-x-6">
              {primaryAction ? (
                <a
                  href={primaryAction.href}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {primaryAction.label}
                </a>
              ) : null}
              {secondaryAction ? (
                <a href={secondaryAction.href} className="text-sm font-semibold text-gray-900 hover:text-gray-700">
                  {secondaryAction.label} <span aria-hidden="true">&rarr;</span>
                </a>
              ) : null}
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {logos.map((logoItem) => (
              <div
                key={logoItem.name}
                className={logoItem.className ?? 'max-h-12 w-full object-contain object-left'}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={logoItem.logo.alt}
                  src={logoItem.logo.src}
                  width={logoItem.logo.width}
                  height={logoItem.logo.height}
                  className="max-h-12 w-full object-contain object-left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export type {
  LogoCloudItem,
  LogoCloudPrimaryAction,
  LogoCloudSecondaryAction,
  LogoCloudsLogoOnRightProps,
} from './types'
