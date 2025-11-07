/**
 * AUSPIN Team Section - Large Grid with Cards
 * Based on Salient TeamLargeGridWithCards format
 */

import { getContentData, parseTeamContent } from "../lib/content";

export function AuspinTeamLarge() {
  const teamData = getContentData("team");
  const { coreTeam, advisors } = parseTeamContent(teamData.content);
  return (
    <div id="team" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {teamData.subtitle}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {teamData.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">{teamData.description}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {coreTeam
            .sort((a, b) => a.order - b.order)
            .map((person) => (
              <li
                key={person.name}
                className="rounded-2xl bg-gray-50 px-8 py-10 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="mx-auto h-48 w-48 rounded-full outline outline-1 -outline-offset-1 outline-black/5 md:h-56 md:w-56"
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-indigo-600 font-semibold">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-600 text-left max-w-lg mx-auto flex-grow">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
        </ul>

        {/* Advisors Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Advisors
          </h3>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl lg:gap-8 justify-center"
          >
            {advisors
              .sort((a, b) => a.order - b.order)
              .map((person) => (
                <li
                  key={person.name}
                  className="rounded-2xl bg-gray-50 px-8 py-10 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    alt={person.name}
                    src={person.imageUrl}
                    className="mx-auto h-48 w-48 rounded-full outline outline-1 -outline-offset-1 outline-black/5 md:h-56 md:w-56"
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-indigo-600 font-semibold">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-600 text-left max-w-lg mx-auto flex-grow">
                    {person.bio}
                  </p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    <li>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
