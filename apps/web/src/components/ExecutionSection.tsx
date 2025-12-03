/**
 * Execution Section - Multi-Stack AI Execution
 * Clean process flow showing 4 execution stacks
 */

import { getContentData, parseExecutionContent } from "../lib/content";

export function ExecutionSection() {
  const executionData = getContentData("execution");
  const stacks = parseExecutionContent(executionData.content);

  return (
    <div id="execution" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-wide">
            {executionData.subtitle}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Differentiated Outcomes with Unique
            <br />
            Multi-Stack AI Execution
          </p>
        </div>

        {/* Execution stacks - horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stacks.map((stack) => (
            <div key={stack.name}>
              {/* Stack card */}
              <div className="bg-white rounded-xl p-6 h-full shadow-sm border border-gray-100">
                {/* Icon and title */}
                <div className="mb-5">
                  <div className="text-4xl mb-3">{stack.icon}</div>
                  <h3 className="text-base font-semibold text-gray-900 leading-tight">
                    {stack.name}
                  </h3>
                </div>

                {/* Deliverables */}
                <ul className="space-y-2.5">
                  {stack.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-snug">
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
