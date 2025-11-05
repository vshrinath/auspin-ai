// AUTO-REFACTOR: Prop-Driven Conversion (Phase X)
// Do not edit manually until review is complete.

import type { BlogPost, BlogSingleColumnProps } from './types'

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { title: 'Sales', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Dolore commodo in nulla do nulla esse consectetur. Adipisicing voluptate velit sint adipisicing ex duis elit deserunt sint ipsum. Culpa in exercitation magna adipisicing id reprehenderit consectetur culpa eu cillum.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { title: 'Business', href: '#' },
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
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

export default function BlogSingleColumn({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  posts = DEFAULT_PROPS.posts,
  className = '',
}: BlogSingleColumnProps = {}) {
  const rootClassName = ['bg-white py-24 sm:py-32', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {title ? (
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
          ) : null}
          {description ? <p className="mt-2 text-lg/8 text-gray-600">{description}</p> : null}
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post, index) => {
              const key = post.id ?? post.href ?? index
              const authorName = post.author?.name ?? 'Author'
              const authorImageAlt = post.author?.imageAlt ?? authorName

              return (
                <article key={key} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    {post.date ? (
                      <time dateTime={post.datetime ?? undefined} className="text-gray-500">
                        {post.date}
                      </time>
                    ) : null}
                    {post.category?.title ? (
                      post.category.href ? (
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      ) : (
                        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                          {post.category.title}
                        </span>
                      )
                    ) : null}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      {post.href ? (
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      ) : (
                        post.title
                      )}
                    </h3>
                    {post.description ? (
                      <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                    ) : null}
                  </div>
                  {post.author ? (
                    <div className="relative mt-8 flex items-center gap-x-4">
                      {post.author.imageUrl ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            alt={authorImageAlt}
                            src={post.author.imageUrl}
                            className="size-10 rounded-full bg-gray-50"
                          />
                        </>
                      ) : null}
                      <div className="text-sm/6">
                        {post.author.href ? (
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {authorName}
                            </a>
                          </p>
                        ) : (
                          <p className="font-semibold text-gray-900">{authorName}</p>
                        )}
                        {post.author.role ? <p className="text-gray-600">{post.author.role}</p> : null}
                      </div>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export type { BlogPost, BlogSingleColumnProps } from './types'
