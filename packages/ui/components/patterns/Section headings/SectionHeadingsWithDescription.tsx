/**
 * SectionHeadingsWithDescription - With description
 *
 * @pattern Section headings
 * @variant With description
 * @component SectionHeadingsWithDescription
 * @source Tailwind UI
 * @usage A With description Section headings component from Tailwind UI
 * @framework agnostic
 * @dependencies react
 */

export default function Example() {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-base font-semibold text-gray-900">Job Postings</h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
        Fringilla egestas justo massa purus sagittis malesuada.
      </p>
    </div>
  )
}