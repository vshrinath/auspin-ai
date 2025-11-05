// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import { XMarkIcon } from '@heroicons/react/20/solid'

import type {
  BannerDismissAction,
  BannerInlineLink,
  BannerToneClasses,
  BannerWithLinkProps,
} from './types'

const DEFAULT_MESSAGE = 'GeneriCon 2023 is on June 7 – 9 in Denver.'

const DEFAULT_LINK: BannerInlineLink = {
  label: 'Get your ticket',
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
  link: 'whitespace-nowrap font-semibold text-gray-900 hover:text-gray-700',
  dismissButton: '-m-3 p-3 focus-visible:-outline-offset-4',
  dismissIcon: 'size-5 text-gray-900',
}

const DEFAULT_PROPS = {
  message: DEFAULT_MESSAGE,
  link: DEFAULT_LINK,
  dismiss: DEFAULT_DISMISS,
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function BannerWithLink({
  message = DEFAULT_PROPS.message,
  link = DEFAULT_PROPS.link,
  dismiss = DEFAULT_PROPS.dismiss,
  toneClasses,
  className = '',
}: BannerWithLinkProps = {}) {
  const mergedTone: BannerToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')
  const DismissIcon = dismiss?.icon ?? DEFAULT_DISMISS.icon!

  const renderLink = () => {
    if (!link) {
      return null
    }

    return (
      <a href={link.href} className={link.className ?? mergedTone.link}>
        {link.label}
        {link.showArrow ? <span aria-hidden="true">&nbsp;&rarr;</span> : null}
      </a>
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
      <p className={mergedTone.text}>
        {message}{' '}
        {renderLink()}
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" onClick={dismiss?.onDismiss} className={mergedTone.dismissButton}>
          <span className="sr-only">{dismiss?.label ?? DEFAULT_DISMISS.label}</span>
          <DismissIcon aria-hidden="true" className={mergedTone.dismissIcon} />
        </button>
      </div>
    </div>
  )
}

export type { BannerWithLinkProps } from './types'
