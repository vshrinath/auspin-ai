// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { DescriptionListItem, DescriptionListProps } from './types'

const DEFAULT_ITEMS: DescriptionListItem[] = [
  { label: 'Full name', value: 'Margot Foster' },
  { label: 'Application for', value: 'Backend Developer' },
]

export default function ApplicationUiSimpleDescriptionList({
  items = DEFAULT_ITEMS,
  className = '',
}: DescriptionListProps = {}) {
  const rootClassName = [className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <dl className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.label} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">{item.label}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export type { DescriptionListItem, DescriptionListProps } from './types'
