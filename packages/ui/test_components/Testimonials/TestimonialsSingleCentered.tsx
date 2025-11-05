// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { TestimonialAuthor, TestimonialsSingleCenteredProps } from './types'

const DEFAULT_AUTHOR: TestimonialAuthor = {
  name: 'Judith Black',
  title: 'CEO of Workcation',
  imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const DEFAULT_PROPS: TestimonialsSingleCenteredProps = {
  logoSrc: 'https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg',
  logoAlt: 'Workcation',
  quote:
    '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
  author: DEFAULT_AUTHOR,
}

export default function TestimonialsSingleCentered({
  logoSrc = DEFAULT_PROPS.logoSrc,
  logoAlt = DEFAULT_PROPS.logoAlt,
  quote = DEFAULT_PROPS.quote,
  author = DEFAULT_PROPS.author ?? DEFAULT_AUTHOR,
  className = '',
}: TestimonialsSingleCenteredProps = {}) {
  const rootClassName = [
    'relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={rootClassName}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {logoSrc ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={logoAlt ?? ''} src={logoSrc} className="mx-auto h-12" />
          </>
        ) : null}
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={author?.name ?? ''} src={author?.imageUrl ?? ''} className="mx-auto size-10 rounded-full" />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{author?.name}</div>
              {author?.title ? (
                <>
                  <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-600">{author.title}</div>
                </>
              ) : null}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export type { TestimonialAuthor, TestimonialsSingleCenteredProps } from './types'
