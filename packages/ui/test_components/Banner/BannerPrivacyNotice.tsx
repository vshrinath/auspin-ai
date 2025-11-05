// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import type {
  BannerButtonAction,
  BannerInlineLink,
  BannerPrivacyNoticeProps,
  BannerToneClasses,
} from './types'

const DEFAULT_MESSAGE =
  'This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. See our'

const DEFAULT_POLICY_LINK: BannerInlineLink = {
  label: 'cookie policy',
  href: '#',
  className: 'font-semibold text-indigo-600 hover:text-indigo-500',
}

const DEFAULT_PRIMARY_ACTION: BannerButtonAction = {
  label: 'Accept all',
  type: 'button',
}

const DEFAULT_SECONDARY_ACTION: BannerButtonAction = {
  label: 'Reject all',
  type: 'button',
}

const DEFAULT_TONE_CLASSES: BannerToneClasses = {
  container: 'pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6',
  text: 'text-sm/6 text-gray-900',
  link: 'font-semibold text-indigo-600 hover:text-indigo-500',
  primaryAction:
    'rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900',
  secondaryAction: 'text-sm/6 font-semibold text-gray-900 hover:text-gray-700',
}

const DEFAULT_PROPS = {
  message: DEFAULT_MESSAGE,
  policyLink: DEFAULT_POLICY_LINK,
  primaryAction: DEFAULT_PRIMARY_ACTION,
  secondaryAction: DEFAULT_SECONDARY_ACTION,
  toneClasses: DEFAULT_TONE_CLASSES,
}

export default function BannerPrivacyNotice({
  message = DEFAULT_PROPS.message,
  policyLink = DEFAULT_PROPS.policyLink,
  primaryAction = DEFAULT_PROPS.primaryAction,
  secondaryAction = DEFAULT_PROPS.secondaryAction,
  toneClasses,
  className = '',
}: BannerPrivacyNoticeProps = {}) {
  const mergedTone: BannerToneClasses = { ...DEFAULT_TONE_CLASSES, ...toneClasses }
  const containerClassName = [mergedTone.container, className].filter(Boolean).join(' ')

  const renderPrimary = (action: BannerButtonAction) => {
    const content = (
      <>
        {action.label}
        {action.showArrow ? <span aria-hidden="true"> &rarr;</span> : null}
      </>
    )

    if (action.href) {
      return (
        <a href={action.href} className={action.className ?? mergedTone.primaryAction}>
          {content}
        </a>
      )
    }

    return (
      <button
        type={action.type ?? 'button'}
        onClick={action.onClick}
        className={action.className ?? mergedTone.primaryAction}
      >
        {content}
      </button>
    )
  }

  const renderSecondary = (action: BannerButtonAction) => {
    if (!action) {
      return null
    }

    const content = (
      <>
        {action.label}
        {action.showArrow ? <span aria-hidden="true"> &rarr;</span> : null}
      </>
    )

    if (action.href) {
      return (
        <a href={action.href} className={action.className ?? mergedTone.secondaryAction}>
          {content}
        </a>
      )
    }

    return (
      <button
        type={action.type ?? 'button'}
        onClick={action.onClick}
        className={action.className ?? mergedTone.secondaryAction}
      >
        {content}
      </button>
    )
  }

  return (
    <div className={containerClassName}>
      <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg outline outline-1 outline-gray-900/10">
        <p className={mergedTone.text}>
          {message}
          {policyLink ? (
            <>
              {' '}
              <a href={policyLink.href} className={policyLink.className ?? mergedTone.link}>
                {policyLink.label}
              </a>
              .
            </>
          ) : null}
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          {renderPrimary(primaryAction)}
          {renderSecondary(secondaryAction)}
        </div>
      </div>
    </div>
  )
}

export type { BannerPrivacyNoticeProps } from './types'
