// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { TeamMember, TeamWithSmallImagesProps } from './types'

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const DEFAULT_PROPS = {
  title: 'Meet our leadership',
  description:
    'We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  members: DEFAULT_TEAM_MEMBERS,
}

export default function TeamWithSmallImages({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  members = DEFAULT_PROPS.members,
  className = '',
}: TeamWithSmallImagesProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {members.map((member) => (
            <li key={member.name}>
              <div className="flex items-center gap-x-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={member.name}
                  src={member.imageUrl}
                  className="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{member.role}</p>
                  {member.bio ? <p className="text-sm/6 text-gray-500">{member.bio}</p> : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export type { TeamMember, TeamWithSmallImagesProps } from './types'
