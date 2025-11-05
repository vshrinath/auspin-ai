// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { CtaAction, CtaSimpleCenteredProps } from './types'

const DEFAULT_PRIMARY_ACTION: CtaAction = {
  label: 'Get started',
  href: '#',
}

const DEFAULT_SECONDARY_ACTION: CtaAction = {
  label: 'Learn more',
  href: '#',
}

const DEFAULT_PROPS: Required<Omit<CtaSimpleCenteredProps, 'className'>> = {
  title: 'Boost your productivity. Start using our app today.',
  description:
    'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
  primaryAction: DEFAULT_PRIMARY_ACTION,
  secondaryAction: DEFAULT_SECONDARY_ACTION,
}

export default function CtaSimpleCentered({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  primaryAction = DEFAULT_PROPS.primaryAction,
  secondaryAction = DEFAULT_PROPS.secondaryAction,
  className = '',
}: CtaSimpleCenteredProps = {}) {
  const rootClassName = ['bg-white', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
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
    </div>
  )
}

export type { CtaAction, CtaSimpleCenteredProps } from './types'
