// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { CtaAction, CtaSimpleStackedProps } from './types'

const DEFAULT_PRIMARY_ACTION: CtaAction = {
  label: 'Get started',
  href: '#',
}

const DEFAULT_SECONDARY_ACTION: CtaAction = {
  label: 'Learn more',
  href: '#',
}

const DEFAULT_PROPS: Required<Omit<CtaSimpleStackedProps, 'className'>> = {
  title: 'Boost your productivity. Start using our app today.',
  primaryAction: DEFAULT_PRIMARY_ACTION,
  secondaryAction: DEFAULT_SECONDARY_ACTION,
}

export default function CtaSimpleStacked({
  title = DEFAULT_PROPS.title,
  primaryAction = DEFAULT_PROPS.primaryAction,
  secondaryAction = DEFAULT_PROPS.secondaryAction,
  className = '',
}: CtaSimpleStackedProps = {}) {
  const rootClassName = ['bg-white', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href={primaryAction.href}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {primaryAction.label}
          </a>
          <a href={secondaryAction.href} className="text-sm/6 font-semibold text-gray-900">
            {secondaryAction.label} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export type { CtaAction, CtaSimpleStackedProps } from './types'
