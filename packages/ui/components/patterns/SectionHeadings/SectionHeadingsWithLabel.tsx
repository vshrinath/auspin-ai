/**
 * SectionHeadingsWithLabel - with label
 *
 * @pattern Section headings
 * @variant with label
 * @component SectionHeadingsWithLabel
 * @source Tailwind UI
 * @usage A with label Section headings component from Tailwind UI
 * @framework agnostic
 * @dependencies react
 */

export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
        <h3 className="ml-2 mt-2 text-base font-semibold text-gray-900">Job Postings</h3>
        <p className="ml-2 mt-1 truncate text-sm text-gray-500">in Engineering</p>
      </div>
    </div>
  )
}