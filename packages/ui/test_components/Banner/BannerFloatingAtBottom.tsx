// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import { XMarkIcon } from '@heroicons/react/20/solid'

import type {
  BannerAnnouncement,
  BannerDismissAction,
  BannerFloatingAtBottomProps,
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
  container: 'pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8',
  text: 'text-sm/6 text-white',
  highlight: 'font-semibold',
  link: 'text-white',
  dismissButton: '-m-1.5 flex-none p-1.5',
  dismissIcon: 'size-5 text-white',
}

const DEFAULT_PROPS = {
  announcement: DEFAULT_ANNOUNCEMENT,
  dismiss: DEFAULT_DISMISS,
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function BannerFloatingAtBottom({
  announcement = DEFAULT_PROPS.announcement,
  dismiss = DEFAULT_PROPS.dismiss,
  toneClasses,
  className = '',
}: BannerFloatingAtBottomProps = {}) {
  const mergedTone: BannerToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')
  const DismissIcon = dismiss?.icon ?? DEFAULT_DISMISS.icon!

  return (
    <div className={containerClassName}>
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
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
        <button type="button" onClick={dismiss?.onDismiss} className={mergedTone.dismissButton}>
          <span className="sr-only">{dismiss?.label ?? DEFAULT_DISMISS.label}</span>
          <DismissIcon aria-hidden="true" className={mergedTone.dismissIcon} />
        </button>
      </div>
    </div>
  )
}

export type { BannerFloatingAtBottomProps } from './types'
