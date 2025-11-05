// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import { CheckCircleIcon } from '@heroicons/react/20/solid'

import type {
  AlertButtonAction,
  AlertToneClasses,
  AlertsWithActionsProps,
} from './types'

const DEFAULT_TONE_CLASSES: AlertToneClasses = {
  container: 'rounded-md bg-green-50 p-4',
  icon: 'size-5 text-green-400',
  title: 'text-sm font-medium text-green-800',
  description: 'text-sm text-green-700',
  primaryAction:
    'rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
  secondaryAction:
    'ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
}

const DEFAULT_ACTIONS: AlertButtonAction[] = [
  { label: 'View status', type: 'button' },
  { label: 'Dismiss', type: 'button' },
]

const DEFAULT_PROPS = {
  title: 'Order completed',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
  icon: CheckCircleIcon,
  toneClasses: DEFAULT_TONE_CLASSES,
  actions: DEFAULT_ACTIONS,
}

export default function AlertsWithActions({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  icon: IconComponent = DEFAULT_PROPS.icon,
  actions = DEFAULT_PROPS.actions,
  toneClasses,
  className = '',
}: AlertsWithActionsProps = {}) {
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
          {actions.length > 0 ? (
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                {actions.map((action, index) => {
                  const buttonClass =
                    action.className ??
                    (index === 0
                      ? mergedTone.primaryAction ?? DEFAULT_TONE_CLASSES.primaryAction
                      : mergedTone.secondaryAction ?? mergedTone.primaryAction ?? DEFAULT_TONE_CLASSES.primaryAction)

                  return (
                    <button
                      key={`${action.label}-${index}`}
                      type={action.type ?? 'button'}
                      onClick={action.onClick}
                      className={buttonClass}
                    >
                      {action.label}
                    </button>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export type { AlertButtonAction, AlertsWithActionsProps } from './types'
