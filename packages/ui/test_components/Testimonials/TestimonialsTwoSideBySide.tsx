// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import type { SideBySideTestimonial, TestimonialsTwoSideBySideProps } from './types'

const DEFAULT_TESTIMONIALS: SideBySideTestimonial[] = [
  {
    body:
      '“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”',
    logoSrc: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg',
    logoAlt: 'Tuple',
    author: {
      name: 'Judith Black',
      title: 'CEO of Tuple',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body:
      '“Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint dolor nisi ullamco.”',
    logoSrc: 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg',
    logoAlt: 'Reform',
    author: {
      name: 'Joseph Rodriguez',
      title: 'CEO of Reform',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function TestimonialsTwoSideBySide({
  testimonials = DEFAULT_TESTIMONIALS,
  className = '',
}: TestimonialsTwoSideBySideProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <section className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.author.name ?? idx}
              className={idx === 0 ? 'flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20' : 'flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20'}
            >
              {testimonial.logoHref ? (
                <a href={testimonial.logoHref} className="h-12 self-start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={testimonial.logoAlt ?? ''} src={testimonial.logoSrc} className="h-full" />
                </a>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={testimonial.logoAlt ?? ''} src={testimonial.logoSrc} className="h-12 self-start" />
                </>
              )}
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg/8 text-gray-900">
                  <p>{testimonial.body}</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={testimonial.author.name ?? ''}
                  src={testimonial.author.imageUrl}
                  className="size-14 rounded-full bg-gray-50"
                />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    {testimonial.author.title ? (
                      <div className="mt-1 text-gray-500">{testimonial.author.title}</div>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export type { SideBySideTestimonial, TestimonialsTwoSideBySideProps } from './types'
