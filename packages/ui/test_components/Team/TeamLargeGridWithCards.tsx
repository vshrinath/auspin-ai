// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { TeamLargeGridWithCardsProps, TeamMember } from './types'

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Floyd Miles',
    role: 'Principal Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Emily Selman',
    role: 'VP, User Experience',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Kristin Watson',
    role: 'VP, Human Resources',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alicia Bell',
    role: 'Junior Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
]

const DEFAULT_PROPS: TeamLargeGridWithCardsProps = {
  title: 'Meet our team',
  description:
    'We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
  members: DEFAULT_MEMBERS,
}

export default function TeamLargeGridWithCards({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  members = DEFAULT_PROPS.members,
  className = '',
}: TeamLargeGridWithCardsProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
          <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {members.map((member) => (
            <li key={member.name} className="rounded-2xl bg-gray-100 px-8 py-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={member.name}
                src={member.imageUrl}
                className="mx-auto size-48 rounded-full outline outline-1 -outline-offset-1 outline-black/5 md:size-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{member.name}</h3>
              <p className="text-sm/6 text-gray-600">{member.role}</p>
              {(member.xUrl || member.linkedinUrl) && (
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  {member.xUrl ? (
                    <li>
                      <a href={member.xUrl} className="text-gray-500 hover:text-gray-700">
                        <span className="sr-only">X</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </li>
                  ) : null}
                  {member.linkedinUrl ? (
                    <li>
                      <a href={member.linkedinUrl} className="text-gray-500 hover:text-gray-700">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  ) : null}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export type { TeamLargeGridWithCardsProps, TeamMember } from './types'
