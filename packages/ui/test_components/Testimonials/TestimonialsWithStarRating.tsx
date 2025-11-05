// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.

import { StarIcon } from '@heroicons/react/20/solid'

import type { TestimonialAuthor, TestimonialsStarRatingProps } from './types'

const DEFAULT_AUTHOR: TestimonialAuthor = {
  name: 'Judith Black',
  title: 'CEO of Workcation',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
}

const DEFAULT_PROPS: TestimonialsStarRatingProps = {
  rating: 5,
  maxRating: 5,
  ratingLabel: '5 out of 5 stars',
  quote:
    '“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”',
  author: DEFAULT_AUTHOR,
}

export default function TestimonialsWithStarRating({
  rating = DEFAULT_PROPS.rating,
  maxRating = DEFAULT_PROPS.maxRating,
  ratingLabel = DEFAULT_PROPS.ratingLabel,
  quote = DEFAULT_PROPS.quote,
  author = DEFAULT_PROPS.author ?? DEFAULT_AUTHOR,
  className = '',
}: TestimonialsStarRatingProps = {}) {
  const rootClassName = ['bg-white px-6 py-24 sm:py-32 lg:px-8', className].filter(Boolean).join(' ')
  const safeMax = Math.max(maxRating ?? 5, 1)
  const safeRating = Math.min(Math.max(rating ?? 0, 0), safeMax)

  return (
    <section className={rootClassName}>
      <figure className="mx-auto max-w-2xl">
        {ratingLabel ? <p className="sr-only">{ratingLabel}</p> : null}
        <div className="flex gap-x-1 text-indigo-600">
          {Array.from({ length: safeMax }).map((_, index) => (
            <StarIcon
              key={index}
              aria-hidden="true"
              className={`size-5 flex-none ${index < safeRating ? '' : 'text-indigo-200'}`}
            />
          ))}
        </div>
        <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={author?.name ?? ''} src={author?.imageUrl ?? ''} className="size-12 rounded-full bg-gray-50" />
          <div className="text-sm/6">
            <div className="font-semibold text-gray-900">{author?.name}</div>
            {author?.title ? <div className="mt-0.5 text-gray-600">{author.title}</div> : null}
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

export type { TestimonialAuthor, TestimonialsStarRatingProps } from './types'
