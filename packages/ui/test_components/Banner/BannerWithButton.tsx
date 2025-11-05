// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import { XMarkIcon } from '@heroicons/react/20/solid'

import type {
  BannerAnnouncement,
  BannerButtonAction,
  BannerDismissAction,
  BannerToneClasses,
  BannerWithButtonProps,
} from './types'

const DEFAULT_ANNOUNCEMENT: BannerAnnouncement = {
  highlight: 'GeneriCon 2023',
  message: 'Join us in Denver from June 7 – 9 to see what’s coming next.',
}

const DEFAULT_CTA: BannerButtonAction = {
  label: 'Register now',
  href: '#',
  showArrow: true,
}

const DEFAULT_DISMISS: BannerDismissAction = {
  label: 'Dismiss',
  icon: XMarkIcon,
}

const DEFAULT_TONE_CLASSES: BannerToneClasses = {
  container: 'relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1',
  text: 'text-sm/6 text-gray-900',
  highlight: 'font-semibold',
  ctaButton:
    'flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900',
  dismissButton: '-m-3 p-3 focus-visible:-outline-offset-4',
  dismissIcon: 'size-5 text-gray-900',
  link: 'text-gray-900',
}

const DEFAULT_PROPS = {
  announcement: DEFAULT_ANNOUNCEMENT,
  cta: DEFAULT_CTA,
  dismiss: DEFAULT_DISMISS,
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function BannerWithButton({
  announcement = DEFAULT_PROPS.announcement,
  cta = DEFAULT_PROPS.cta,
  dismiss = DEFAULT_PROPS.dismiss,
  toneClasses,
  className = '',
}: BannerWithButtonProps = {}) {
  const mergedTone: BannerToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')
  const DismissIcon = dismiss?.icon ?? DEFAULT_DISMISS.icon!

  const renderAnnouncement = () => {
    const content = (
      <>
        {announcement.highlight ? <strong className={mergedTone.highlight}>{announcement.highlight}</strong> : null}
        {announcement.highlight ? (
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
        ) : null}
        {announcement.message}
        {announcement.showArrow ? <span aria-hidden="true">&nbsp;&rarr;</span> : null}
      </>
    )

    return (
      <p className={mergedTone.text}>
        {announcement.href ? (
          <a href={announcement.href} className={mergedTone.link}>
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    )
  }

  const renderCta = () => {
    const arrow = cta.showArrow ?? false
    const content = (
      <>
        {cta.label}
        {arrow ? <span aria-hidden="true"> &rarr;</span> : null}
      </>
    )

    if (cta.href) {
      return (
        <a href={cta.href} className={cta.className ?? mergedTone.ctaButton}>
          {content}
        </a>
      )
    }

    return (
      <button
        type={cta.type ?? 'button'}
        onClick={cta.onClick}
        className={cta.className ?? mergedTone.ctaButton}
      >
        {content}
      </button>
    )
  }

  return (
    <div className={containerClassName}>
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {renderAnnouncement()}
        {renderCta()}
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={dismiss?.onDismiss} className={mergedTone.dismissButton}>
          <span className="sr-only">{dismiss?.label ?? DEFAULT_DISMISS.label}</span>
          <DismissIcon aria-hidden="true" className={mergedTone.dismissIcon} />
        </button>
      </div>
    </div>
  )
}

export type { BannerWithButtonProps } from './types'
