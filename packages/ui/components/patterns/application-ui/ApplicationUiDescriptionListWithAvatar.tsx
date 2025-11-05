/**
 * ApplicationUiDescriptionListWithAvatar - Description List With Avatar
 *
 * @pattern application-ui
 * @variant Description List With Avatar
 * @component ApplicationUiDescriptionListWithAvatar
 * @source Tailwind UI
 * @usage A Description List With Avatar application-ui component from Tailwind UI
 * @framework agnostic
 * @dependencies react
 */

export default function ApplicationUiDescriptionListWithAvatar() {
  return (
    <div>
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <div className="flex items-center gap-x-3">
              <img className="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <span>Margot Foster</span>
            </div>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
        </div>
      </dl>
    </div>
  );
}