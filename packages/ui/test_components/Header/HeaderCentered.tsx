// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { HeaderCenteredProps } from './types'

const DEFAULT_PROPS: Required<Omit<HeaderCenteredProps, 'className'>> = {
  eyebrow: 'Get the help you need',
  title: 'Support center',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
}

export default function HeaderCentered({
  eyebrow = DEFAULT_PROPS.eyebrow,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  className = '',
}: HeaderCenteredProps = {}) {
  const rootClassName = ['bg-white px-6 py-24 sm:py-32 lg:px-8', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow ? <p className="text-base/7 font-semibold text-indigo-600">{eyebrow}</p> : null}
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">{title}</h2>
        {description ? (
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">{description}</p>
        ) : null}
      </div>
    </div>
  )
}

export type { HeaderCenteredProps } from './types'
