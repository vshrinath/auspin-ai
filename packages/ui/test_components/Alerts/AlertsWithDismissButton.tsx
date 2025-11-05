// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

import type { AlertToneClasses, AlertsWithDismissButtonProps } from './types'

const DEFAULT_TONE_CLASSES: AlertToneClasses = {
  container: 'rounded-md bg-green-50 p-4',
  icon: 'size-5 text-green-400',
  message: 'text-sm font-medium text-green-800',
  dismissButton:
    'inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-green-50',
}

const DEFAULT_PROPS = {
  message: 'Successfully uploaded',
  icon: CheckCircleIcon,
  dismissIcon: XMarkIcon,
  dismissLabel: 'Dismiss',
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function AlertsWithDismissButton({
  message = DEFAULT_PROPS.message,
  icon: IconComponent = DEFAULT_PROPS.icon,
  dismissIcon: DismissIcon = DEFAULT_PROPS.dismissIcon,
  dismissLabel = DEFAULT_PROPS.dismissLabel,
  onDismiss,
  toneClasses,
  className = '',
}: AlertsWithDismissButtonProps = {}) {
  const mergedTone: AlertToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')

  return (
    <div className={containerClassName}>
      <div className="flex">
        <div className="shrink-0">
          <IconComponent aria-hidden="true" className={mergedTone.icon} />
        </div>
        <div className="ml-3">
          <p className={mergedTone.message}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button type="button" onClick={onDismiss} className={mergedTone.dismissButton}>
              <span className="sr-only">{dismissLabel}</span>
              <DismissIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { AlertsWithDismissButtonProps } from './types'
