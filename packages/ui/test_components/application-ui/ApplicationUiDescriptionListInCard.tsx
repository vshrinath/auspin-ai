// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { DescriptionListInCardProps, DescriptionListItem } from './types'

const DEFAULT_ITEMS: DescriptionListItem[] = [
  { label: 'Full name', value: 'Margot Foster' },
  { label: 'Application for', value: 'Backend Developer' },
  { label: 'Email address', value: 'margotfoster@example.com' },
  { label: 'Salary expectation', value: '$120,000' },
]

export default function ApplicationUiDescriptionListInCard({
  items = DEFAULT_ITEMS,
  className = '',
  cardClassName = '',
}: DescriptionListInCardProps = {}) {
  const rootClassName = ['overflow-hidden bg-white shadow sm:rounded-lg', cardClassName].filter(Boolean).join(' ')
  const wrapperClassName = [className].filter(Boolean).join(' ')

  return (
    <div className={wrapperClassName}>
      <div className={rootClassName}>
        <div className="px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                <dd className="mt-1 text-sm text-gray-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export type { DescriptionListInCardProps, DescriptionListItem } from './types'
