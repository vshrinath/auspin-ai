/**
 * AUSPIN Team Section - Large Grid with Cards
 * Based on Salient TeamLargeGridWithCards format
 */

const people = [
  {
    name: 'Shrinath V',
    role: 'Strategic Advisor & Systems Leader',
    bio: '20+ years across product innovation and organizational transformation. Anchor mentor with Google for Startups (10+ years, 100+ founders across 5 continents). Systems thinker aligning business, design, and technology to surface hidden interdependencies.',
    imageUrl: '/team/shrinath.jpg',
    xUrl: '#', // Placeholder - will be updated later
    linkedinUrl: '#', // Placeholder - will be updated later
    order: 1
  },
  {
    name: 'Mintoo Kakati',
    role: 'Big Tech Scaling Expert & Innovator',
    bio: '12 years at Amazon; $2B+ in realized business value; 3 AI systems patents; launches at 100M+ weekly actives. Crafts Amazon-grade strategy & execution plans that align CXOs and teams.',
    imageUrl: '/team/mintoo.jpg',
    xUrl: '#', // Placeholder - will be updated later
    linkedinUrl: '#', // Placeholder - will be updated later
    order: 2
  },
  {
    name: 'Padmanabhan (NP) Menon',
    role: 'Managing Partner, AUSPIN Ventures',
    bio: '30+ years across innovation, strategy, and market expansion. Leads strategic initiatives and corporate governance at Bahwan CyberTek, steering AI-led transformation and sustainability programs across India, the Middle East, and Southeast Asia.',
    imageUrl: '/team/np-menon.jpg',
    xUrl: '#', // Placeholder - will be updated later
    linkedinUrl: '#', // Placeholder - will be updated later
    order: 3
  },
  {
    name: 'Ramesh Srinivasan',
    role: 'Senior Advisor, Leadership & Systems Design',
    bio: 'Leadership coach, educator, and systems consultant with 4,000+ coaching hours for 125+ senior leaders across India, SE Asia, and the Middle East. Former Head of Operations at HCL Technologies (Singapore); founder of i.e. Consulting.',
    imageUrl: '/team/ramesh-srinivasan.jpg',
    xUrl: '#', // Placeholder - will be updated later
    linkedinUrl: '#', // Placeholder - will be updated later
    order: 4
  },
];

export function AuspinTeamLarge() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Practitioner Advantage
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Practitioner-led, not slide-led. You work directly with leaders who've shipped at scale across Big Tech, 
            enterprise transformation, and global advisory work.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
        >
          {people
            .sort((a, b) => a.order - b.order)
            .map((person) => (
            <li key={person.name} className="rounded-2xl bg-gray-50 px-8 py-10">
              <img
                alt={person.name}
                src={person.imageUrl}
                className="mx-auto h-48 w-48 rounded-full outline outline-1 -outline-offset-1 outline-black/5 md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-indigo-600 font-semibold">{person.role}</p>
              <p className="mt-4 text-sm leading-6 text-gray-600 text-left max-w-lg mx-auto">{person.bio}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-base font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Request full bios under NDA →
          </a>
        </div>
      </div>
    </div>
  );
}