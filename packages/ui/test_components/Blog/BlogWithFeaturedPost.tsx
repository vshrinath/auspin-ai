// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.

import type { BlogPost, BlogWithFeaturedPostProps } from './types'

const DEFAULT_FEATURED_POST: BlogPost = {
  id: 1,
  title: 'We’re incredibly proud to announce we have secured $75m in Series B',
  href: '#',
  description:
    'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  author: {
    name: 'Michael Foster',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
}

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Lindsay Walton',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.',
    date: 'Feb 12, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Tom Cook',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const DEFAULT_PROPS = {
  featuredPost: DEFAULT_FEATURED_POST,
  posts: DEFAULT_POSTS,
}

export default function BlogWithFeaturedPost({
  featuredPost = DEFAULT_PROPS.featuredPost,
  posts = DEFAULT_PROPS.posts,
  title,
  description,
  className = '',
}: BlogWithFeaturedPostProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')
  const gridSpacingClass = title || description ? 'mt-12 sm:mt-16 lg:mt-12' : ''
  const featuredAuthorName = featuredPost.author?.name ?? 'Author'
  const featuredAuthorImageAlt = featuredPost.author?.imageAlt ?? featuredAuthorName

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title || description ? (
          <div className="mx-auto max-w-3xl text-center">
            {title ? <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2> : null}
            {description ? <p className="mt-2 text-lg/8 text-gray-600">{description}</p> : null}
          </div>
        ) : null}

        <div
          className={[
            'mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2',
            gridSpacingClass,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {featuredPost ? (
            <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
              {featuredPost.date ? (
                <time dateTime={featuredPost.datetime ?? undefined} className="block text-sm/6 text-gray-600">
                  {featuredPost.date}
                </time>
              ) : null}
              <h2
                id="featured-post"
                className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
              >
                {featuredPost.title}
              </h2>
              {featuredPost.description ? (
                <p className="mt-4 text-lg/8 text-gray-600">{featuredPost.description}</p>
              ) : null}
              <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                <div className="flex">
                  {featuredPost.href ? (
                    <a
                      href={featuredPost.href}
                      aria-describedby="featured-post"
                      className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Continue reading <span aria-hidden="true">&rarr;</span>
                    </a>
                  ) : null}
                </div>
                {featuredPost.author ? (
                  <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                    {featuredPost.author.href ? (
                      <a
                        href={featuredPost.author.href}
                        className="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900"
                      >
                        {featuredPost.author.imageUrl ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt={featuredAuthorImageAlt}
                              src={featuredPost.author.imageUrl}
                              className="size-6 flex-none rounded-full bg-gray-50"
                            />
                          </>
                        ) : null}
                        {featuredAuthorName}
                      </a>
                    ) : (
                      <span className="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900">
                        {featuredPost.author.imageUrl ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt={featuredAuthorImageAlt}
                              src={featuredPost.author.imageUrl}
                              className="size-6 flex-none rounded-full bg-gray-50"
                            />
                          </>
                        ) : null}
                        {featuredAuthorName}
                      </span>
                    )}
                  </div>
                ) : null}
              </div>
            </article>
          ) : null}
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {posts.map((post, index) => {
                const key = post.id ?? post.href ?? index
                const authorName = post.author?.name ?? 'Author'
                const authorImageAlt = post.author?.imageAlt ?? authorName

                return (
                  <article key={key} className="py-12">
                    <div className="group relative max-w-xl">
                      {post.date ? (
                        <time dateTime={post.datetime ?? undefined} className="block text-sm/6 text-gray-600">
                          {post.date}
                        </time>
                      ) : null}
                      <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                        {post.href ? (
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        ) : (
                          post.title
                        )}
                      </h2>
                      {post.description ? (
                        <p className="mt-4 text-sm/6 text-gray-600">{post.description}</p>
                      ) : null}
                    </div>
                    {post.author ? (
                      <div className="mt-4 flex">
                        {post.author.href ? (
                          <a
                            href={post.author.href}
                            className="relative flex gap-x-2.5 text-sm/6 font-semibold text-gray-900"
                          >
                            {post.author.imageUrl ? (
                              <>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  alt={authorImageAlt}
                                  src={post.author.imageUrl}
                                  className="size-6 flex-none rounded-full bg-gray-50"
                                />
                              </>
                            ) : null}
                            {authorName}
                          </a>
                        ) : (
                          <span className="relative flex gap-x-2.5 text-sm/6 font-semibold text-gray-900">
                            {post.author.imageUrl ? (
                              <>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  alt={authorImageAlt}
                                  src={post.author.imageUrl}
                                  className="size-6 flex-none rounded-full bg-gray-50"
                                />
                              </>
                            ) : null}
                            {authorName}
                          </span>
                        )}
                      </div>
                    ) : null}
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { BlogPost, BlogWithFeaturedPostProps } from './types'
