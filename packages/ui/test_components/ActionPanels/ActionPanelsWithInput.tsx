// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.
'use client';

import type { FormEvent } from 'react'

import type {
  ActionPanelAction,
  ActionPanelInput,
  ActionPanelsWithInputProps,
} from './types'

const DEFAULT_INPUT: ActionPanelInput = {
  id: 'email',
  name: 'email',
  type: 'email',
  placeholder: 'you@example.com',
  ariaLabel: 'Email',
}

const DEFAULT_SUBMIT_ACTION: ActionPanelAction = {
  label: 'Save',
  type: 'submit',
}

const DEFAULT_PROPS: Required<Omit<ActionPanelsWithInputProps, 'input' | 'submitAction' | 'onSubmit'>> & {
  input: ActionPanelInput
  submitAction: ActionPanelAction
} = {
  title: 'Update your email',
  description: 'Change the email address you want associated with your account.',
  className: '',
  input: DEFAULT_INPUT,
  submitAction: DEFAULT_SUBMIT_ACTION,
}

export default function ActionPanelsWithInput({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  input = DEFAULT_PROPS.input,
  submitAction = DEFAULT_PROPS.submitAction,
  className = DEFAULT_PROPS.className,
  onSubmit,
}: ActionPanelsWithInputProps = {}) {
  const rootClassName = ['bg-white shadow sm:rounded-lg', className].filter(Boolean).join(' ')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(event)
  }

  return (
    <div className={rootClassName}>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{description}</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
          <div className="w-full sm:max-w-xs">
            <input
              id={input.id}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              aria-label={input.ariaLabel}
              defaultValue={input.defaultValue}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <button
            type={submitAction.type ?? 'submit'}
            onClick={submitAction.onClick}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
          >
            {submitAction.label}
          </button>
        </form>
      </div>
    </div>
  )
}

export type {
  ActionPanelAction,
  ActionPanelInput,
  ActionPanelsWithInputProps,
} from './types'
