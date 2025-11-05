// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import { CheckIcon } from '@heroicons/react/20/solid'

import type { PricingSinglePriceWithDetailsProps } from './types'

const DEFAULT_FEATURES = ['Private forum access', 'Member resources', 'Entry to annual conference', 'Official member t-shirt']

const DEFAULT_PROPS: PricingSinglePriceWithDetailsProps = {
  title: 'Simple no-tricks pricing',
  description:
    'Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.',
  planName: 'Lifetime membership',
  planDescription:
    'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.',
  includedFeatures: DEFAULT_FEATURES,
  price: '$349',
  priceSuffix: 'USD',
  ctaLabel: 'Get access',
  ctaHref: '#',
  disclaimer: 'Invoices and receipts available for easy company reimbursement',
}

export default function PricingSinglePriceWithDetails({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  planName = DEFAULT_PROPS.planName,
  planDescription = DEFAULT_PROPS.planDescription,
  includedFeatures = DEFAULT_PROPS.includedFeatures,
  price = DEFAULT_PROPS.price,
  priceSuffix = DEFAULT_PROPS.priceSuffix,
  ctaLabel = DEFAULT_PROPS.ctaLabel,
  ctaHref = DEFAULT_PROPS.ctaHref,
  disclaimer = DEFAULT_PROPS.disclaimer,
  className = '',
}: PricingSinglePriceWithDetailsProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{planName}</h3>
            <p className="mt-6 text-base/7 text-gray-600">{planDescription}</p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">{price}</span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">{priceSuffix}</span>
                </p>
                <a
                  href={ctaHref}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {ctaLabel}
                </a>
                <p className="mt-6 text-xs/5 text-gray-600">{disclaimer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { PricingSinglePriceWithDetailsProps } from './types'
