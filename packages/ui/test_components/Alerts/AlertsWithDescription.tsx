// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.

import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

import type { AlertToneClasses, AlertsWithDescriptionProps } from './types'

const DEFAULT_TONE_CLASSES: AlertToneClasses = {
  container: 'rounded-md bg-yellow-50 p-4',
  icon: 'size-5 text-yellow-400',
  title: 'text-sm font-medium text-yellow-800',
  description: 'text-sm text-yellow-700',
}

const DEFAULT_PROPS = {
  title: 'Attention needed',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
  icon: ExclamationTriangleIcon,
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function AlertsWithDescription({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  icon: IconComponent = DEFAULT_PROPS.icon,
  toneClasses,
  className = '',
}: AlertsWithDescriptionProps = {}) {
  const mergedTone: AlertToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')

  return (
    <div className={containerClassName}>
      <div className="flex">
        <div className="shrink-0">
          <IconComponent aria-hidden="true" className={mergedTone.icon} />
        </div>
        <div className="ml-3">
          <h3 className={mergedTone.title}>{title}</h3>
          {description ? (
            <div className={['mt-2', mergedTone.description].filter(Boolean).join(' ')}>
              <p>{description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export type { AlertsWithDescriptionProps } from './types'
