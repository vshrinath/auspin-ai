// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.

import { InformationCircleIcon } from '@heroicons/react/20/solid'

import type { AlertToneClasses, AlertsWithLinkProps } from './types'

const DEFAULT_TONE_CLASSES: AlertToneClasses = {
  container: 'rounded-md bg-blue-50 p-4',
  icon: 'size-5 text-blue-400',
  message: 'text-sm text-blue-700',
  link: 'whitespace-nowrap font-medium text-blue-700 hover:text-blue-600',
}

const DEFAULT_PROPS = {
  message: 'A new software update is available. See what’s new in version 2.0.4.',
  link: { label: 'Details', href: '#', className: DEFAULT_TONE_CLASSES.link ?? '' },
  icon: InformationCircleIcon,
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function AlertsWithLink({
  message = DEFAULT_PROPS.message,
  link = DEFAULT_PROPS.link,
  icon: IconComponent = DEFAULT_PROPS.icon,
  toneClasses,
  className = '',
}: AlertsWithLinkProps = {}) {
  const mergedTone: AlertToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')

  return (
    <div className={containerClassName}>
      <div className="flex">
        <div className="shrink-0">
          <IconComponent aria-hidden="true" className={mergedTone.icon} />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          {message ? <p className={mergedTone.message}>{message}</p> : null}
          {link ? (
            <p className="mt-3 text-sm md:ml-6 md:mt-0">
              <a href={link.href} className={link.className ?? mergedTone.link}>
                {link.label}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export type { AlertsWithLinkProps } from './types'
