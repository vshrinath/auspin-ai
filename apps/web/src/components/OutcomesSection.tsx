/**
 * Outcomes Section - Board-Ready Deliverables
 * Clean deliverables showcase
 */

const deliverables = [
  {
    name: 'Ambition Pack',
    description: 'narrative, capability heatmap, board alignment.'
  },
  {
    name: 'Use-Case Portfolio',
    description: 'prioritized pilots with ROI & feasibility.'
  },
  {
    name: 'Systems Blueprint',
    description: 'data + architecture + workflow plan.'
  },
  {
    name: 'Value & Risk Model',
    description: 'ROI, cost-to-serve, governance.'
  },
  {
    name: 'Scaling Playbook',
    description: 'phased rollout & change adoption.'
  },
];

export function OutcomesSection() {
  return (
    <div id="outcomes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Tangible Results</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Board-Ready Deliverables
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every engagement produces concrete, actionable deliverables that drive your AI transformation forward.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {deliverables.map((deliverable) => (
              <div key={deliverable.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {deliverable.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{deliverable.description}</dd>
              </div>
            ))}
          </dl>
          
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}