/**
 * Services Section - The Full Execution Cycle
 * Clean services grid with icons
 */

import { getContentData, parseServicesContent } from "../lib/content";

export function ServicesSection() {
  const servicesData = getContentData("services");
  const services = parseServicesContent(servicesData.content);
  return (
    <div id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {servicesData.subtitle}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {servicesData.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {servicesData.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-4 text-xl font-semibold leading-7 text-gray-900 mb-4">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">
                    {service.icon}
                  </span>
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
              href="#contact"
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
