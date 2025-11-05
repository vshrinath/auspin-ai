// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { FeaturePrimaryAction, FeatureTestimonial, FeatureWithTestimonialProps } from './types'

const DEFAULT_ACTION: FeaturePrimaryAction = {
  label: 'Get started',
  href: '#',
}

const DEFAULT_TESTIMONIAL: FeatureTestimonial = {
  quote:
    '“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”',
  authorName: 'Maria Hill',
  authorRole: 'Marketing Manager',
  authorImageUrl:
    'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
}

const DEFAULT_PROPS: Required<Omit<FeatureWithTestimonialProps, 'className'>> = {
  eyebrow: 'Deploy faster',
  title: 'A better workflow',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  primaryAction: DEFAULT_ACTION,
  testimonial: DEFAULT_TESTIMONIAL,
  screenshot: {
    src: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
    alt: 'Product screenshot',
    width: 2432,
    height: 1442,
  },
}

export default function FeatureWithTestimonial({
  eyebrow = DEFAULT_PROPS.eyebrow,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  primaryAction = DEFAULT_PROPS.primaryAction,
  testimonial = DEFAULT_PROPS.testimonial,
  screenshot = DEFAULT_PROPS.screenshot,
  className = '',
}: FeatureWithTestimonialProps = {}) {
  const rootClassName = ['overflow-hidden bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              {eyebrow ? <h2 className="text-base/7 font-semibold text-indigo-600">{eyebrow}</h2> : null}
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</p>
              {description ? <p className="mt-6 text-lg/8 text-gray-700">{description}</p> : null}
              {primaryAction ? (
                <div className="mt-8">
                  <a
                    href={primaryAction.href}
                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {primaryAction.label}
                  </a>
                </div>
              ) : null}
              {testimonial ? (
                <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-700">
                  <blockquote className="text-base/7">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                    {testimonial.authorImageUrl ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={testimonial.authorImageAlt ?? testimonial.authorName}
                          src={testimonial.authorImageUrl}
                          className="size-6 flex-none rounded-full"
                        />
                      </>
                    ) : null}
                    <div>
                      <span className="font-semibold text-gray-900">{testimonial.authorName}</span>
                      {testimonial.authorRole ? (
                        <>
                          {' '}
                          – <span className="text-gray-600">{testimonial.authorRole}</span>
                        </>
                      ) : null}
                    </div>
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </div>
          {screenshot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={screenshot.alt}
              src={screenshot.src}
              width={screenshot.width}
              height={screenshot.height}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export type { FeaturePrimaryAction, FeatureTestimonial, FeatureWithTestimonialProps } from './types'
