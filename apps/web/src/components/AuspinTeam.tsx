/**
 * AUSPIN Team Section
 * Adapted from Salient TeamWithSmallImages
 */

const people = [
  {
    name: 'Shrinath V',
    role: 'Strategic Advisor & Systems Leader',
    bio: '20+ years across product innovation and organizational transformation. Anchor mentor with Google for Startups (10+ years, 100+ founders across 5 continents). Systems thinker aligning business, design, and technology to surface hidden interdependencies.',
    imageUrl: '/team/shrinath.jpg',
    order: 1
  },
  {
    name: 'Mintoo Kakati',
    role: 'Big Tech Scaling Expert & Innovator',
    bio: '12 years at Amazon; $2B+ in realized business value; 3 AI systems patents; launches at 100M+ weekly actives. Crafts Amazon-grade strategy & execution plans that align CXOs and teams.',
    imageUrl: '/team/mintoo.jpg',
    order: 2
  },
  {
    name: 'Padmanabhan (NP) Menon',
    role: 'Managing Partner, AUSPIN Ventures',
    bio: '30+ years across innovation, strategy, and market expansion. Leads strategic initiatives and corporate governance at Bahwan CyberTek, steering AI-led transformation and sustainability programs across India, the Middle East, and Southeast Asia.',
    imageUrl: '/team/np-menon.jpg',
    order: 3
  },
  {
    name: 'Ramesh Srinivasan',
    role: 'Senior Advisor, Leadership & Systems Design',
    bio: 'Leadership coach, educator, and systems consultant with 4,000+ coaching hours for 125+ senior leaders across India, SE Asia, and the Middle East. Former Head of Operations at HCL Technologies (Singapore); founder of i.e. Consulting.',
    imageUrl: '/team/ramesh-srinivasan.jpg',
    order: 4
  },
];

export function AuspinTeam() {
  return (
    <div id="team" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Practitioner Advantage
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Practitioner-led, not slide-led. You work directly with leaders who've shipped at scale across Big Tech, 
            enterprise transformation, and global advisory work.
          </p>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-base font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Request full bios under NDA →
            </a>
          </div>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people
            .sort((a, b) => a.order - b.order)
            .map((person) => (
            <li key={person.name}>
              <div className="flex items-start gap-x-6">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="size-16 rounded-full outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="flex-1">
                  <h3 className="text-base leading-7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm leading-6 font-semibold text-indigo-600 mb-2">{person.role}</p>
                  <p className="text-sm leading-6 text-gray-600">{person.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}