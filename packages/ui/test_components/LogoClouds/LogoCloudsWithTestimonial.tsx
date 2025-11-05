// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import type { LogoCloudFeature, LogoCloudTestimonial, LogoCloudsWithTestimonialProps } from './types'

const DEFAULT_FEATURES: LogoCloudFeature[] = [
  {
    name: 'Push to deploy',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const DEFAULT_TESTIMONIAL: LogoCloudTestimonial = {
  quote:
    '“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”',
  authorName: 'Brenna Goyette',
  authorHandle: '@brenna',
  authorImageUrl:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const DEFAULT_PROPS: Required<Omit<LogoCloudsWithTestimonialProps, 'className'>> = {
  eyebrow: 'Deploy faster',
  title: 'A better workflow',
  description:
    'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac.',
  features: DEFAULT_FEATURES,
  testimonial: DEFAULT_TESTIMONIAL,
}

export default function LogoCloudsWithTestimonial({
  eyebrow = DEFAULT_PROPS.eyebrow,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  features = DEFAULT_PROPS.features,
  testimonial = DEFAULT_PROPS.testimonial,
  className = '',
}: LogoCloudsWithTestimonialProps = {}) {
  const rootClassName = ['relative isolate overflow-hidden bg-white py-24 sm:py-32', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClassName}>
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {eyebrow ? <p className="text-base/7 font-semibold text-indigo-600">{eyebrow}</p> : null}
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
          {description ? <p className="mt-6 text-xl/8 text-gray-700">{description}</p> : null}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute left-1 top-[-40rem] -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            >
              <defs>
                <pattern id="logo-testimonial-grid" width={200} height={200} patternUnits="userSpaceOnUse">
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect fill="url(#logo-testimonial-grid)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            {testimonial ? (
              <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  {testimonial.authorImageUrl ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={testimonial.authorImageAlt ?? testimonial.authorName}
                        src={testimonial.authorImageUrl}
                        className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                      />
                    </>
                  ) : null}
                  <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">{testimonial.authorName}</div>
                    {testimonial.authorHandle ? <div className="text-gray-600">{testimonial.authorHandle}</div> : null}
                    {testimonial.authorRole ? <div className="text-gray-600">{testimonial.authorRole}</div> : null}
                  </div>
                </figcaption>
              </figure>
            ) : null}
          </div>
          <div className="max-w-xl text-base/7 text-gray-600 lg:col-span-7">
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
              vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
              erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
              sed amet vitae sed turpis id.
            </p>
            {features.length ? (
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                {features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3">
                    {feature.icon ? (
                      <feature.icon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                    ) : null}
                    <span>
                      <strong className="font-semibold text-gray-900">{feature.name}.</strong> {feature.description}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
              fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
              adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
              Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
              tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
              turpis ipsum eu a sed convallis diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { LogoCloudFeature, LogoCloudTestimonial, LogoCloudsWithTestimonialProps } from './types'
