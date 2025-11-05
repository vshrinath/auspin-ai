// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type {
  DescriptionListItem,
  DescriptionListWithAvatarProps,
} from './types'

const DEFAULT_ITEMS: DescriptionListItem[] = [
  { label: 'Full name', value: 'Margot Foster' },
  { label: 'Application for', value: 'Backend Developer' },
]

const DEFAULT_AVATAR = {
  url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  alt: 'Portrait of Margot Foster',
}

export default function ApplicationUiDescriptionListWithAvatar({
  items = DEFAULT_ITEMS,
  avatarUrl = DEFAULT_AVATAR.url,
  avatarAlt = DEFAULT_AVATAR.alt,
  className = '',
}: DescriptionListWithAvatarProps = {}) {
  const rootClassName = [className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <dl className="divide-y divide-gray-100">
        {items.map((item, index) => (
          <div key={item.label} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">{item.label}</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {index === 0 ? (
              <div className="flex items-center gap-x-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="h-6 w-6 flex-none rounded-full bg-gray-50" src={avatarUrl} alt={avatarAlt} />
                <span>{item.value}</span>
              </div>
            ) : (
              item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export type { DescriptionListItem, DescriptionListWithAvatarProps } from './types'
