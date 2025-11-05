// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import type { ActionPanelAction, ActionPanelsSimpleProps } from './types'

const DEFAULT_ACTION: ActionPanelAction = {
  label: 'Change plan',
  type: 'button',
}

const DEFAULT_PROPS: Required<Omit<ActionPanelsSimpleProps, 'action'>> & {
  action: ActionPanelAction
} = {
  title: 'Manage subscription',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.',
  action: DEFAULT_ACTION,
  className: '',
}

export default function ActionPanelsSimple({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  action = DEFAULT_PROPS.action,
  className = DEFAULT_PROPS.className,
}: ActionPanelsSimpleProps = {}) {
  const rootClassName = ['bg-white shadow sm:rounded-lg', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <p>{description}</p>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:shrink-0 sm:items-center">
            <button
              type={action.type ?? 'button'}
              onClick={action.onClick}
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {action.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { ActionPanelAction, ActionPanelsSimpleProps } from './types'
