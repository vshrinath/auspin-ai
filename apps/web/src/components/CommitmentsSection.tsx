/**
 * Commitments Section - 5 Commitments of AI Done Right
 * Split layout with large heading on left, commitment cards on right
 */

import { getContentData, parseCommitmentsContent } from "../lib/content";

// Icon components for each commitment
const icons = {
  "Business objective driven": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="12" r="3" fill="currentColor" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="36" r="3" fill="currentColor" />
      <circle cx="12" cy="24" r="3" fill="currentColor" />
      <circle cx="36" cy="24" r="3" fill="currentColor" />
      <line x1="24" y1="15" x2="24" y2="21" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="27" x2="24" y2="33" stroke="currentColor" strokeWidth="2" />
      <line x1="15" y1="24" x2="21" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="27" y1="24" x2="33" y2="24" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  "ROI focus": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="28" width="6" height="12" fill="currentColor" />
      <rect x="16" y="22" width="6" height="18" fill="currentColor" />
      <rect x="24" y="16" width="6" height="24" fill="currentColor" />
      <rect x="32" y="10" width="6" height="30" fill="currentColor" />
      <path d="M38 12 L42 8 L42 16" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  "Strategy aligned": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 8 L28 16 L36 18 L30 24 L32 32 L24 28 L16 32 L18 24 L12 18 L20 16 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  ),
  "Phased adoption": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="22"
        y="6"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="6"
        y="22"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="22" y="22" width="12" height="12" fill="currentColor" />
      <path d="M36 30 L40 34 L48 26" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  "Managed risks": (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4 L40 12 L40 24 C40 34 32 42 24 44 C16 42 8 34 8 24 L8 12 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M24 16 L24 26 M24 30 L24 32" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

export function CommitmentsSection() {
  const commitmentsData = getContentData("commitments");
  const commitments = parseCommitmentsContent(commitmentsData.content);

  return (
    <div id="commitments" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered header section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {commitmentsData.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Large number */}
          <div className="lg:pr-12">
            <div className="flex items-center gap-4 lg:block">
              <div className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-indigo-600 leading-none">
                5
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 lg:mt-4">
                Non-Negotiables
                <br />
                for AI Success
              </p>
            </div>
          </div>

          {/* Right side - Commitment cards */}
          <div className="space-y-6">
            {commitments.map((commitment, index) => (
              <div
                key={commitment.name}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 text-indigo-600">
                  {icons[commitment.name as keyof typeof icons]}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {commitment.name}
                  </h3>
                  <p className="text-sm text-gray-600">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
