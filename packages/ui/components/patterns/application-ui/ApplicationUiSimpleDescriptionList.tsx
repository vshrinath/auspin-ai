/**
 * ApplicationUiSimpleDescriptionList - Simple Description List
 *
 * @pattern application-ui
 * @variant Simple Description List
 * @component ApplicationUiSimpleDescriptionList
 * @source Tailwind UI
 * @usage A Simple Description List application-ui component from Tailwind UI
 * @framework agnostic
 * @dependencies react
 */

export default function SimpleDescriptionList() {
  return (
    <div>
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
        </div>
      </dl>
    </div>
  );
}