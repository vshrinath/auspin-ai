// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.
'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import type { NavbarBrandBackgroundProps, NavigationAction, NavigationItem, NavigationLogo } from './types'

const DEFAULT_LOGO: NavigationLogo = {
  src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white',
  alt: 'Your Company',
  href: '#',
}

const DEFAULT_NAVIGATION: NavigationItem[] = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const DEFAULT_ACTION: NavigationAction = {
  label: 'Log in',
  href: '#',
}

const DEFAULT_PROPS: Required<Omit<NavbarBrandBackgroundProps, 'className'>> = {
  logo: DEFAULT_LOGO,
  navigation: DEFAULT_NAVIGATION,
  action: DEFAULT_ACTION,
  backgroundClassName: 'bg-indigo-600',
}

export default function NavbarBrandBackground({
  logo = DEFAULT_PROPS.logo,
  navigation = DEFAULT_PROPS.navigation,
  action = DEFAULT_PROPS.action,
  backgroundClassName = DEFAULT_PROPS.backgroundClassName,
  className = '',
}: NavbarBrandBackgroundProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerClassName = [backgroundClassName, className].filter(Boolean).join(' ')

  return (
    <header className={headerClassName}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href={logo.href ?? '#'} className="-m-1.5 p-1.5">
            <span className="sr-only">{logo.alt}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={logo.alt} src={logo.src} className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {navigation.length ? (
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
        ) : null}
        {action ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href={action.href} className="text-sm/6 font-semibold text-white">
              {action.label} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1" />
        )}
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href={logo.href ?? '#'} className="-m-1.5 p-1.5">
              <span className="sr-only">{logo.alt}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={logo.alt}
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
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
              {navigation.length ? (
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
              ) : null}
              {action ? (
                <div className="py-6">
                  <a
                    href={action.href}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {action.label}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export type { NavbarBrandBackgroundProps } from './types'
