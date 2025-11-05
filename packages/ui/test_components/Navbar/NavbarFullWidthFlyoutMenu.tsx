// AUTO-REFACTOR: Prop-Driven Conversion (Phase 1)
// Do not edit manually until review is complete.
'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

import type {
  NavigationAction,
  NavigationCallToAction,
  NavigationItem,
  NavigationLogo,
  NavigationProduct,
  NavbarFullWidthFlyoutMenuProps,
} from './types'

const DEFAULT_LOGO: NavigationLogo = {
  src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600',
  alt: 'Your Company',
  href: '#',
}

const DEFAULT_NAVIGATION: NavigationItem[] = [
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const DEFAULT_PRODUCTS: NavigationProduct[] = [
  {
    name: 'Analytics',
    description: 'Get a better understanding where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: SquaresPlusIcon,
  },
]

const DEFAULT_CALLS_TO_ACTION: NavigationCallToAction[] = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

const DEFAULT_ACTION: NavigationAction = {
  label: 'Log in',
  href: '#',
}

const DEFAULT_PROPS: Required<
  Omit<NavbarFullWidthFlyoutMenuProps, 'className'>
> = {
  logo: DEFAULT_LOGO,
  navigation: DEFAULT_NAVIGATION,
  products: DEFAULT_PRODUCTS,
  callsToAction: DEFAULT_CALLS_TO_ACTION,
  action: DEFAULT_ACTION,
}

export default function NavbarFullWidthFlyoutMenu({
  logo = DEFAULT_PROPS.logo,
  navigation = DEFAULT_PROPS.navigation,
  products = DEFAULT_PROPS.products,
  callsToAction = DEFAULT_PROPS.callsToAction,
  action = DEFAULT_PROPS.action,
  className = '',
}: NavbarFullWidthFlyoutMenuProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mergedProducts = products ?? []
  const ctas = callsToAction ?? []

  const headerClassName = ['relative isolate z-10 bg-white', className].filter(Boolean).join(' ')

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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {mergedProducts.length ? (
            <Popover>
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Product
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute inset-x-0 top-16 bg-white transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5" />
                <div className="relative bg-white">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {mergedProducts.map((item) => (
                      <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                          {item.icon ? (
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                          ) : null}
                        </div>
                        <a href={item.href} className="mt-4 block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  {ctas.length ? (
                    <div className="bg-gray-50">
                      <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                          {ctas.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                            >
                              {item.icon ? <item.icon aria-hidden="true" className="size-5 text-gray-400" /> : null}
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </PopoverPanel>
            </Popover>
          ) : null}

          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {action ? (
            <a href={action.href} className="text-sm/6 font-semibold text-gray-900">
              {action.label} <span aria-hidden="true">&rarr;</span>
            </a>
          ) : null}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href={logo.href ?? '#'} className="-m-1.5 p-1.5">
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
                {mergedProducts.length || ctas.length ? (
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...mergedProducts, ...ctas].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ) : null}
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

export type { NavbarFullWidthFlyoutMenuProps } from './types'
