// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import { XMarkIcon } from '@heroicons/react/20/solid'

import type {
  BannerAnnouncement,
  BannerBottomAlignedProps,
  BannerDismissAction,
  BannerToneClasses,
} from './types'

const DEFAULT_ANNOUNCEMENT: BannerAnnouncement = {
  highlight: 'GeneriCon 2023',
  message: 'Join us in Denver from June 7 – 9 to see what’s coming next',
  href: '#',
  showArrow: true,
}

const DEFAULT_DISMISS: BannerDismissAction = {
  label: 'Dismiss',
  icon: XMarkIcon,
}

const DEFAULT_TONE_CLASSES: BannerToneClasses = {
  container: 'fixed inset-x-0 bottom-0',
  text: 'text-sm/6 text-white',
  highlight: 'font-semibold',
  link: 'text-white',
  dismissButton: '-m-3 p-3 focus-visible:-outline-offset-4',
  dismissIcon: 'size-5 text-white',
}

const DEFAULT_PROPS = {
  announcement: DEFAULT_ANNOUNCEMENT,
  dismiss: DEFAULT_DISMISS,
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function BannerBottomAligned({
  announcement = DEFAULT_PROPS.announcement,
  dismiss = DEFAULT_PROPS.dismiss,
  toneClasses,
  className = '',
}: BannerBottomAlignedProps = {}) {
  const mergedTone: BannerToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')
  const DismissIcon = dismiss?.icon ?? DEFAULT_DISMISS.icon!

  return (
    <div className={containerClassName}>
      <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className={mergedTone.text}>
          {announcement.href ? (
            <a href={announcement.href} className={mergedTone.link}>
              {announcement.highlight ? <strong className={mergedTone.highlight}>{announcement.highlight}</strong> : null}
              {announcement.highlight ? (
                <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                  <circle r={1} cx={1} cy={1} />
                </svg>
              ) : null}
              {announcement.message}
              {announcement.showArrow ? <span aria-hidden="true">&nbsp;&rarr;</span> : null}
            </a>
          ) : (
            <span className={mergedTone.link}>
              {announcement.highlight ? <strong className={mergedTone.highlight}>{announcement.highlight}</strong> : null}
              {announcement.highlight ? (
                <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                  <circle r={1} cx={1} cy={1} />
                </svg>
              ) : null}
              {announcement.message}
              {announcement.showArrow ? <span aria-hidden="true">&nbsp;&rarr;</span> : null}
            </span>
          )}
        </p>
        <div className="flex flex-1 justify-end">
          <button type="button" onClick={dismiss?.onDismiss} className={mergedTone.dismissButton}>
            <span className="sr-only">{dismiss?.label ?? DEFAULT_DISMISS.label}</span>
            <DismissIcon aria-hidden="true" className={mergedTone.dismissIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}

export type { BannerBottomAlignedProps } from './types'
