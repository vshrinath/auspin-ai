// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.

import type { BlogPost, BlogThreeColumnBackgroundImagesProps } from './types'

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Tom Cook',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const DEFAULT_PROPS = {
  title: 'From the blog',
  description: 'Learn how to grow your business with our expert advice.',
  posts: DEFAULT_POSTS,
}

export default function BlogThreeColumnBackgroundImages({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  posts = DEFAULT_PROPS.posts,
  className = '',
}: BlogThreeColumnBackgroundImagesProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {title ? (
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
          ) : null}
          {description ? <p className="mt-2 text-lg/8 text-gray-600">{description}</p> : null}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => {
            const key = post.id ?? post.href ?? index
            const authorName = post.author?.name ?? 'Author'
            const authorImageAlt = post.author?.imageAlt ?? authorName
            const postImageAlt = post.imageAlt ?? post.title

            return (
              <article
                key={key}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                {post.imageUrl ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={postImageAlt} src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover" />
                  </>
                ) : null}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  {post.date ? (
                    <time dateTime={post.datetime ?? undefined} className="mr-8">
                      {post.date}
                    </time>
                  ) : null}
                  {post.author ? (
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      <div className="flex gap-x-2.5">
                        {post.author.imageUrl ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt={authorImageAlt}
                              src={post.author.imageUrl}
                              className="size-6 flex-none rounded-full bg-white/10"
                            />
                          </>
                        ) : null}
                        {post.author.name}
                      </div>
                    </div>
                  ) : null}
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  {post.href ? (
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  ) : (
                    post.title
                  )}
                </h3>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export type { BlogPost, BlogThreeColumnBackgroundImagesProps } from './types'
