/**
 * FlyoutMenuSimple - Simple
 *
 * @pattern Flyout menu
 * @variant Simple
 * @component FlyoutMenuSimple
 * @source Tailwind UI
 * @usage A Simple Flyout menu component from Tailwind UI
 * @framework agnostic
 * @dependencies react, @heroicons/react, @headlessui/react
 */

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'


const solutions = [
  { name: 'Analytics', href: '#' },
  { name: 'Engagement', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Automations', href: '#' },
  { name: 'Reports', href: '#' },
]

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 bg-transparent px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg outline outline-1 outline-gray-900/5">
          {solutions.map((item) => (
            <a key={item.name} href={item.href} className="block p-2 hover:text-indigo-600">
              {item.name}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}