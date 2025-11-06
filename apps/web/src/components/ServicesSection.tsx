/**
 * Services Section - The Full Execution Cycle
 * Clean services grid with icons
 */

const services = [
  {
    name: 'AI Strategy & Ambition',
    description: 'We help you articulate a clear AI vision that aligns with your business goals. From defining realistic outcomes to creating compelling board presentations, we ensure your AI strategy drives measurable business value rather than just technological novelty.',
    href: '#outcomes',
    icon: '💡',
  },
  {
    name: 'Use-Case Prioritization',
    description: 'Not all AI opportunities are created equal. We evaluate your potential use cases through a business lens—analyzing ROI potential, implementation complexity, and organizational readiness—so you invest in initiatives that actually move the needle.',
    href: '#outcomes',
    icon: '📋',
  },
  {
    name: 'Data & System Design',
    description: 'AI is only as good as the data and systems that support it. We design the technical foundation that makes AI work reliably in your real business environment—no more pilots that break when they meet actual operations.',
    href: '#outcomes',
    icon: '🔧',
  },
  {
    name: 'ROI, Risk & Governance',
    description: 'Make AI investments with confidence. We build comprehensive ROI models and risk frameworks that protect your bottom line and reputation while ensuring compliance with evolving AI regulations and industry standards.',
    href: '#outcomes',
    icon: '🛡️',
  },
  {
    name: 'Scaling Initiatives',
    description: 'Turn successful pilots into enterprise-wide transformation. We create detailed rollout strategies and change management playbooks that ensure AI adoption happens smoothly across your organization, not just in isolated pockets.',
    href: '#outcomes',
    icon: '🚀',
  },
  {
    name: 'Capability Building',
    description: 'Build internal AI expertise that lasts beyond consultants. We develop your leadership team\'s AI fluency and establish sustainable operating rhythms, ensuring your organization can continue driving AI success long after our engagement ends.',
    href: '#outcomes',
    icon: '🎓',
  },
];

export function ServicesSection() {
  return (
    <div id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">How We Help</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            The Full Execution Cycle
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We cover the path from ambition to rollout—so approved pilots actually reach production.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <dt className="flex items-center gap-x-4 text-xl font-semibold leading-7 text-gray-900 mb-4">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">{service.icon}</span>
                  {service.name}
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 text-center">
            <a 
              href="#outcomes" 
              className="inline-flex items-center gap-2 text-lg font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Map your use-case portfolio →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}