/**
 * Problem Section - Split with Infographic
 * Large visual on left, problem list on right
 */

import { getContentData } from "../lib/content";

export function ProblemSection() {
  const problemData = getContentData("problem");

  const problems = [
    "Leadership misalignment",
    "Governance gaps",
    "Messy integration",
    "Unscalable economics",
  ];

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-red-600">
            {problemData.subtitle}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {problemData.title}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Infographic */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm">
              {/* Failure Rate Visual */}
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-red-600 mb-2">
                  {problemData.failureRate}
                </div>
                <div className="text-lg text-gray-700">{problemData.failureText}</div>
              </div>

              {/* Visual Pipeline */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">100 AI Pilots Start</span>
                  </div>
                  <span className="text-sm font-semibold">100</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Make it to Production</span>
                  </div>
                  <span className="text-sm font-semibold">30</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Actually Scale & Succeed
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">5</span>
                </div>
              </div>

              {/* Money Wasted Visual */}
              <div className="mt-8 p-4 bg-red-100 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">💸</span>
                  <div>
                    <div className="text-sm font-semibold text-red-800">
                      Wasted Investment
                    </div>
                    <div className="text-xs text-red-600">
                      Millions spent on failed pilots
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Problem List */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              The 4 systematic failures that kill AI pilots:
            </h3>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={problem} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-red-600">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{problem}</h4>
                    <p className="text-gray-600 mt-1">
                      {index === 0 &&
                        "Ambition without shared reality leads to misaligned expectations"}
                      {index === 1 &&
                        "Risk, policy, and reputation exposure create insurmountable barriers"}
                      {index === 2 &&
                        "Brittle data plumbing and legacy workflows break under pressure"}
                      {index === 3 &&
                        "Unclear ROI and rising cost-to-serve make scaling impossible"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Message - Center Aligned */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-indigo-600">
            We exist to fix these four—systematically.
          </p>
        </div>
      </div>
    </div>
  );
}
