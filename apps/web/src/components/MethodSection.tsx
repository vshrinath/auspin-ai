/**
 * Method Section - Sprints & Frameworks
 * Using StatsTimeline component for process flow
 */

import { getContentData, parseMethodContent } from "../lib/content";

export function MethodSection() {
  const methodData = getContentData("method");
  const timeline = parseMethodContent(methodData.content);
  return (
    <div id="method" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {methodData.subtitle}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {methodData.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">{methodData.description}</p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-base sm:text-sm font-semibold leading-6 text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 h-1 w-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.duration}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-lg font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Request Sprint schedule →
          </a>
        </div>
      </div>
    </div>
  );
}
