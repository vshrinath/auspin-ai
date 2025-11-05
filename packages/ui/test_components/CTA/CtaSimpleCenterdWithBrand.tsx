// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { CtaAction, CtaSimpleCenterdWithBrandProps } from './types'

const DEFAULT_PRIMARY_ACTION: CtaAction = {
  label: 'Get started',
  href: '#',
}

const DEFAULT_SECONDARY_ACTION: CtaAction = {
  label: 'Learn more',
  href: '#',
}

const DEFAULT_PROPS: Required<Omit<CtaSimpleCenterdWithBrandProps, 'className'>> = {
  title: 'Boost your productivity. Start using our app today.',
  description:
    'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.',
  primaryAction: DEFAULT_PRIMARY_ACTION,
  secondaryAction: DEFAULT_SECONDARY_ACTION,
}

export default function CtaSimpleCenterdWithBrand({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  primaryAction = DEFAULT_PROPS.primaryAction,
  secondaryAction = DEFAULT_PROPS.secondaryAction,
  className = '',
}: CtaSimpleCenterdWithBrandProps = {}) {
  const rootClassName = ['bg-indigo-700', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-indigo-200">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={primaryAction.href}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryAction.label}
            </a>
            <a href={secondaryAction.href} className="text-sm/6 font-semibold text-white">
              {secondaryAction.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { CtaAction, CtaSimpleCenterdWithBrandProps } from './types'
