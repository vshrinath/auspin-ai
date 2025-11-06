/**
 * Method Section - Sprints & Frameworks
 * Adapted from Salient StatsWithDescription
 */

const steps = [
  { label: 'Alignment Sprint', value: '2 days', description: 'shared context, north-star, ambition story.' },
  { label: 'Feasibility Sprint', value: '3 weeks', description: 'readiness, build-vs-buy, cost & value model.' },
  { label: 'Commitment Review', value: '2 hours', description: 'select 2–3 fundable pilots and lock scope.' },
  { label: 'Scaling Sprint', value: '30–90 days', description: 'validate outcomes and design for rollout.' },
];

const frameworks = [
  'Systems Thinking',
  'Design Thinking', 
  'Jobs To Be Done',
  'Lean Startup',
  'Responsible AI'
];

export function MethodSection() {
  return (
    <div id="method" className="bg-gray-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Sprints & Frameworks
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Speed with rigor. Time-boxed sprints. Repeatable outcomes.
              </p>
              <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                Our methodology combines proven frameworks with practical execution. Each sprint builds on the previous one, 
                creating momentum while maintaining governance and measurable progress toward your AI transformation goals.
              </p>
              <div className="mt-10">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Our Toolset:</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((framework) => (
                    <span 
                      key={framework}
                      className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-lg font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Request Sprint schedule →
                </a>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {steps.map((step, index) => (
                  <div key={step.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">
                      <span className="font-semibold text-gray-900">{index + 1}. {step.label}</span>
                      <br />
                      {step.description}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-indigo-600">{step.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}