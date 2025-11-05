/**
 * ApplicationUiDescriptionListInCard - Description List In Card
 *
 * @pattern application-ui
 * @variant Description List In Card
 * @component ApplicationUiDescriptionListInCard
 * @source Tailwind UI
 * @usage A Description List In Card application-ui component from Tailwind UI
 * @framework agnostic
 * @dependencies react
 */

export default function ApplicationUiDescriptionListInCard() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">Margot Foster</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900">Backend Developer</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">margotfoster@example.com</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}