// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.
'use client';

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import type {
  HeroAction,
  HeroAnnouncement,
  HeroLoginAction,
  HeroNavigationItem,
  HeroSimpleCenteredProps,
  HeroLogo,
} from './types'

const DEFAULT_NAVIGATION: HeroNavigationItem[] = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const DEFAULT_LOGO: HeroLogo = {
  alt: 'Your Company',
  href: '#',
  src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600',
}

const DEFAULT_ANNOUNCEMENT: HeroAnnouncement = {
  message: 'Announcing our next round of funding.',
  href: '#',
  linkLabel: 'Read more',
}

const DEFAULT_PRIMARY_ACTION: HeroAction = {
  label: 'Get started',
  href: '#',
}

const DEFAULT_SECONDARY_ACTION: HeroAction = {
  label: 'Learn more',
  href: '#',
}

const DEFAULT_LOGIN: HeroLoginAction = {
  label: 'Log in',
  href: '#',
}

const DEFAULT_PROPS = {
  navigation: DEFAULT_NAVIGATION,
  logo: DEFAULT_LOGO,
  announcement: DEFAULT_ANNOUNCEMENT,
  title: 'Data to enrich your online business',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  primaryAction: DEFAULT_PRIMARY_ACTION,
  secondaryAction: DEFAULT_SECONDARY_ACTION,
  login: DEFAULT_LOGIN,
}

export default function HeroSimpleCentered({
  navigation = DEFAULT_PROPS.navigation,
  logo = DEFAULT_PROPS.logo,
  announcement = DEFAULT_PROPS.announcement,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  primaryAction = DEFAULT_PROPS.primaryAction,
  secondaryAction = DEFAULT_PROPS.secondaryAction,
  login = DEFAULT_PROPS.login,
  className = '',
}: HeroSimpleCenteredProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const rootClassName = ['bg-white', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href={logo.href} className="-m-1.5 p-1.5">
              <span className="sr-only">{logo.alt}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={logo.alt} src={logo.src} className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href={login.href} className="text-sm/6 font-semibold text-gray-900">
              {login.label} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href={logo.href} className="-m-1.5 p-1.5">
                <span className="sr-only">{logo.alt}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={logo.alt} src={logo.src} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={login.href}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {login.label}
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {announcement ? (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {announcement.message}{' '}
                <a href={announcement.href} className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {announcement.linkLabel} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ) : null}
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">{title}</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">{description}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={primaryAction.href}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {primaryAction.label}
              </a>
              <a href={secondaryAction.href} className="text-sm/6 font-semibold text-gray-900">
                {secondaryAction.label} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export type {
  HeroAction,
  HeroAnnouncement,
  HeroLoginAction,
  HeroNavigationItem,
  HeroSimpleCenteredProps,
  HeroLogo,
} from './types'
