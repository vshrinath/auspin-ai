'use client'

import ActionPanelsSimple, {
  ActionPanelAction,
  ActionPanelsSimpleProps,
} from '@salient/ui/test_components/ActionPanels/ActionPanelsSimple'
import ActionPanelsWithInput, {
  ActionPanelInput,
  ActionPanelsWithInputProps,
} from '@salient/ui/test_components/ActionPanels/ActionPanelsWithInput'
import ActionPanelsWithToggle, {
  ActionPanelToggle,
  ActionPanelsWithToggleProps,
} from '@salient/ui/test_components/ActionPanels/ActionPanelsWithToggle'
import BlogSingleColumn from '@salient/ui/test_components/Blog/BlogSingleColumn'
import BlogSingleColumnWithImages from '@salient/ui/test_components/Blog/BlogSingleColumnWithImages'
import BlogThreeColumn from '@salient/ui/test_components/Blog/BlogThreeColumn'
import BlogThreeColumnBackgroundImages from '@salient/ui/test_components/Blog/BlogThreeColumnBackgroundImages'
import BlogThreeColumnWithImages from '@salient/ui/test_components/Blog/BlogThreeColumnWithImages'
import BlogWithFeaturedPost from '@salient/ui/test_components/Blog/BlogWithFeaturedPost'
import type {
  BlogPost,
  BlogSingleColumnProps,
  BlogSingleColumnWithImagesProps,
  BlogThreeColumnBackgroundImagesProps,
  BlogThreeColumnProps,
  BlogThreeColumnWithImagesProps,
  BlogWithFeaturedPostProps,
} from '@salient/ui/test_components/Blog/types'
import AlertsWithActions, {
  AlertButtonAction,
  AlertsWithActionsProps,
} from '@salient/ui/test_components/Alerts/AlertsWithActions'
import AlertsWithDescription, {
  AlertsWithDescriptionProps,
} from '@salient/ui/test_components/Alerts/AlertsWithDescription'
import AlertsWithDismissButton, {
  AlertsWithDismissButtonProps,
} from '@salient/ui/test_components/Alerts/AlertsWithDismissButton'
import AlertsWithLink, {
  AlertsWithLinkProps,
} from '@salient/ui/test_components/Alerts/AlertsWithLink'
import BannerBottomAligned, {
  BannerBottomAlignedProps,
} from '@salient/ui/test_components/Banner/BannerBottomAligned'
import BannerFloatingAtBottom, {
  BannerFloatingAtBottomProps,
} from '@salient/ui/test_components/Banner/BannerFloatingAtBottom'
import BannerOnBrand, {
  BannerOnBrandProps,
} from '@salient/ui/test_components/Banner/BannerOnBrand'
import BannerPrivacyFullWidth, {
  BannerPrivacyFullWidthProps,
} from '@salient/ui/test_components/Banner/BannerPrivacyFullWidth'
import BannerPrivacyNotice, {
  BannerPrivacyNoticeProps,
} from '@salient/ui/test_components/Banner/BannerPrivacyNotice'
import BannerWithButton, {
  BannerWithButtonProps,
} from '@salient/ui/test_components/Banner/BannerWithButton'
import BannerWithLink, {
  BannerWithLinkProps,
} from '@salient/ui/test_components/Banner/BannerWithLink'
import HeroSimpleCentered, {
  HeroAction,
  HeroAnnouncement,
  HeroLoginAction,
  HeroLogo,
  HeroNavigationItem,
} from '@salient/ui/test_components/Hero/HeroSimpleCentered'
import PricingSinglePriceWithDetails, {
  PricingSinglePriceWithDetailsProps,
} from '@salient/ui/test_components/Pricing/PricingSinglePriceWithDetails'
import PricingThreeTiers, {
  PricingTier,
} from '@salient/ui/test_components/Pricing/PricingThreeTiers'
import PricingThreeTiersComparisonTable, {
  PricingComparisonSection,
} from '@salient/ui/test_components/Pricing/PricingThreeTiersComparisonTable'
import PricingThreeTiersWithLogo, {
  PricingLogo,
  PricingTierWithHighlights,
} from '@salient/ui/test_components/Pricing/PricingThreeTiersWithLogo'
import PricingThreeTiersWithToggle, {
  PricingToggleTier,
} from '@salient/ui/test_components/Pricing/PricingThreeTiersWithToggle'
import PricingTwoTiersEmphasis, {
  PricingTwoTiersEmphasisProps,
} from '@salient/ui/test_components/Pricing/PricingTwoTiersEmphasis'
import StatsSimple, { StatsSimpleProps } from '@salient/ui/test_components/Stats/StatsSimple'
import StatsSplitWithImage, {
  StatsSplitWithImageProps,
} from '@salient/ui/test_components/Stats/StatsSplitWithImage'
import StatsTimeline, {
  StatsTimelineItem,
} from '@salient/ui/test_components/Stats/StatsTimeline'
import StatsWithDescription, {
  StatsWithDescriptionProps,
} from '@salient/ui/test_components/Stats/StatsWithDescription'
import HeaderCentered from '@salient/ui/test_components/Header/HeaderCentered'
import HeaderSimple from '@salient/ui/test_components/Header/HeaderSimple'
import HeaderSimpleWithBackground from '@salient/ui/test_components/Header/HeaderSimpleWithBackground'
import HeaderWithCards from '@salient/ui/test_components/Header/HeaderWithCards'
import HeaderWithStats from '@salient/ui/test_components/Header/HeaderWithStats'
import type {
  HeaderCard,
  HeaderLink,
  HeaderStat,
  HeaderWithCardsProps,
  HeaderWithStatsProps,
} from '@salient/ui/test_components/Header/types'
import NavbarBrandBackground from '@salient/ui/test_components/Navbar/NavbarBrandBackground'
import NavbarFullWidthFlyoutMenu from '@salient/ui/test_components/Navbar/NavbarFullWidthFlyoutMenu'
import NavbarWithCenteredLogo from '@salient/ui/test_components/Navbar/NavbarWithCenteredLogo'
import NavbarWithFlyoutMenu from '@salient/ui/test_components/Navbar/NavbarWithFlyoutMenu'
import type {
  NavigationAction,
  NavigationCallToAction,
  NavigationItem,
  NavigationLogo,
  NavigationProduct,
} from '@salient/ui/test_components/Navbar/types'
import TeamFullWidthVerticalImages from '@salient/ui/test_components/Team/TeamFullWidthVerticalImages'
import TeamGridWithRoundImages from '@salient/ui/test_components/Team/TeamGridWithRoundImages'
import TeamLargeGridWithCards from '@salient/ui/test_components/Team/TeamLargeGridWithCards'
import TeamWithLargeImages from '@salient/ui/test_components/Team/TeamWithLargeImages'
import TeamWithSmallImages, { TeamMember } from '@salient/ui/test_components/Team/TeamWithSmallImages'
import TeamWithVerticalImages from '@salient/ui/test_components/Team/TeamWithVerticalImages'
import TestimonialsGrid, {
  Testimonial,
} from '@salient/ui/test_components/Testimonials/TestimonialsGrid'
import TestimonialsSingleCentered, {
  TestimonialsSingleCenteredProps,
} from '@salient/ui/test_components/Testimonials/TestimonialsSingleCentered'
import TestimonialsSingleWithAvatar, {
  TestimonialsSingleWithAvatarProps,
} from '@salient/ui/test_components/Testimonials/TestimonialsSingleWithAvatar'
import TestimonialsTwoSideBySide, {
  SideBySideTestimonial,
} from '@salient/ui/test_components/Testimonials/TestimonialsTwoSideBySide'
import TestimonialsWithBackgroundImage, {
  TestimonialsWithBackgroundImageProps,
} from '@salient/ui/test_components/Testimonials/TestimonialsWithBackgroundImage'
import TestimonialsWithStarRating, {
  TestimonialsStarRatingProps,
} from '@salient/ui/test_components/Testimonials/TestimonialsWithStarRating'
import FeatureSimple from '@salient/ui/test_components/Feature/FeatureSimple'
import FeatureThreeColumnWithIcons from '@salient/ui/test_components/Feature/FeatureThreeColumnWithIcons'
import FeatureWithLargeScreenshot from '@salient/ui/test_components/Feature/FeatureWithLargeScreenshot'
import FeatureWithProductScreenshot from '@salient/ui/test_components/Feature/FeatureWithProductScreenshot'
import FeatureWithTestimonial from '@salient/ui/test_components/Feature/FeatureWithTestimonial'
import type {
  FeatureSimpleProps,
  FeatureThreeColumnWithIconsProps,
  FeatureWithLargeScreenshotProps,
  FeatureWithProductScreenshotProps,
  FeatureWithTestimonialProps,
} from '@salient/ui/test_components/Feature/types'
import LogoCloudsGrid from '@salient/ui/test_components/LogoClouds/LogoCloudsGrid'
import LogoCloudsLogoOnRight from '@salient/ui/test_components/LogoClouds/LogoCloudsLogoOnRight'
import LogoCloudsSimple from '@salient/ui/test_components/LogoClouds/LogoCloudsSimple'
import LogoCloudsWithTestimonial from '@salient/ui/test_components/LogoClouds/LogoCloudsWithTestimonial'
import type {
  LogoCloudFeature,
  LogoCloudPrimaryAction,
  LogoCloudSecondaryAction,
  LogoCloudTestimonial,
  LogoCloudsGridProps,
  LogoCloudsLogoOnRightProps,
  LogoCloudsSimpleProps,
  LogoCloudsWithTestimonialProps,
} from '@salient/ui/test_components/LogoClouds/types'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CloudArrowUpIcon,
  CubeTransparentIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon, SparklesIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const heroNavigation: HeroNavigationItem[] = [
  { name: 'Dashboard', href: '#' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Docs', href: '#docs' },
]

const heroAnnouncement: HeroAnnouncement = {
  message: 'Platform refactor series now live.',
  href: '#changelog',
  linkLabel: 'Read the changelog',
}

const heroPrimary: HeroAction = { label: 'Start free trial', href: '#start' }
const heroSecondary: HeroAction = { label: 'View documentation', href: '#documentation' }

const heroLogo: HeroLogo = {
  alt: 'Salient Platform',
  href: '/',
  src: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo.svg',
}

const heroLogin: HeroLoginAction = { href: '#signin', label: 'Sign in' }

const headerLinks: HeaderLink[] = [
  { name: 'Explore open roles', href: '#careers' },
  { name: 'How we collaborate', href: '#collaboration' },
  { name: 'Benefits overview', href: '#benefits' },
  { name: 'Meet the leadership team', href: '#leadership' },
]

const headerStats: HeaderStat[] = [
  { name: 'Global offices', value: '8' },
  { name: 'Team members', value: '540+' },
  { name: 'Time to ship', value: '< 2 weeks' },
  { name: 'Retention rate', value: '94%' },
]

const headerCards: HeaderCard[] = [
  {
    name: 'Sales enablement',
    description: 'Align GTM and product with prop-ready demos and tailored onboarding.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical services',
    description: 'Certified experts help with API alignment, testing, and rollouts.',
    icon: SparklesIcon,
  },
  {
    name: 'Media & analyst',
    description: 'Get coordinated demos, analyst briefings, and press packages.',
    icon: PlayCircleIcon,
  },
]

const headerStatsProps: HeaderWithStatsProps = {
  title: 'Grow with the Salient platform team',
  description:
    'Prop-driven UI lets distributed teams ship faster. Join us to help product, design, and docs move as one unit.',
  links: headerLinks,
  stats: headerStats,
}

const headerCardsProps: HeaderWithCardsProps = {
  eyebrow: 'Partner with us',
  title: 'Dedicated guidance for every rollout stage',
  description:
    'From early pilots to enterprise adoption, we pair you with the specialists you need to enable prop-driven success.',
  cards: headerCards,
}

const navbarLogo: NavigationLogo = {
  src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600',
  alt: 'Salient Platform',
  href: '/',
}

const primaryNavigation: NavigationItem[] = [
  { name: 'Product', href: '#product' },
  { name: 'Features', href: '#features' },
  { name: 'Customers', href: '#customers' },
  { name: 'Docs', href: '#docs' },
]

const navProducts: NavigationProduct[] = [
  {
    name: 'Analytics',
    description: 'Understand prop adoption trends across teams and surfaces.',
    href: '#analytics',
    icon: ChartPieIcon,
  },
  {
    name: 'Workflows',
    description: 'Coordinate approvals, design reviews, and QA handoffs.',
    href: '#workflows',
    icon: ArrowPathIcon,
  },
  {
    name: 'Security',
    description: 'Control access and enforce compliance across components.',
    href: '#security',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect to Storybook, Figma, and CI/CD pipelines.',
    href: '#integrations',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Sandbox',
    description: 'Spin up prop-driven previews for stakeholder demos.',
    href: '#sandbox',
    icon: CubeTransparentIcon,
  },
]

const navCallsToAction: NavigationCallToAction[] = [
  { name: 'Watch demo', href: '#demo', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#sales', icon: PhoneIcon },
]

const navAction: NavigationAction = { label: 'Log in', href: '#signin' }

const actionPanelsSimpleAction: ActionPanelAction = {
  label: 'Manage admins',
  type: 'button',
}

const sendInviteAction: ActionPanelAction = {
  label: 'Send invite',
  type: 'submit',
}

const collaboratorInviteInput: ActionPanelInput = {
  id: 'collaborator-email',
  name: 'collaboratorEmail',
  type: 'email',
  placeholder: 'teammate@company.com',
  ariaLabel: 'Collaborator email address',
}

const releaseNotificationsToggle: ActionPanelToggle = {
  name: 'release-notifications',
  ariaLabel: 'Enable release notifications',
  descriptionId: 'release-notifications-description',
  defaultChecked: true,
}

const actionPanelsSimpleCustom: ActionPanelsSimpleProps = {
  title: 'Promote workspace admins',
  description: 'Elevate trusted teammates to manage billing, permissions, and component approvals.',
  action: actionPanelsSimpleAction,
}

const actionPanelsWithInputCustom: ActionPanelsWithInputProps = {
  title: 'Send a collaborator invite',
  description: 'Email a secure link so new contributors can start working in the shared workspace.',
  input: collaboratorInviteInput,
  submitAction: sendInviteAction,
}

const actionPanelsWithToggleCustom: ActionPanelsWithToggleProps = {
  title: 'Enable release notifications',
  description: 'Notify stakeholders automatically when a new component ships to production.',
  toggle: releaseNotificationsToggle,
}

const alertsActionsCustomButtons: AlertButtonAction[] = [
  { label: 'View deployment logs', type: 'button' },
  { label: 'Share update', type: 'button' },
]

const alertsActionsCustom: AlertsWithActionsProps = {
  title: 'Deployment completed',
  description: 'Latest release pushed to production with zero warnings. Review logs or share the update.',
  actions: alertsActionsCustomButtons,
}

const alertsDescriptionCustom: AlertsWithDescriptionProps = {
  title: 'Security review pending',
  description:
    'Complete the compliance checklist before approving new integrations. Assign reviewers from the security squad.',
}

const alertsDismissCustom: AlertsWithDismissButtonProps = {
  message: 'Workspace preferences saved for "Prop-Driven Rollout".',
  dismissLabel: 'Close alert',
}

const alertsLinkCustom: AlertsWithLinkProps = {
  message: 'New API tooling is ready for rollout across workspaces.',
  link: {
    label: 'Review launch guide',
    href: '#launch-guide',
    className: 'whitespace-nowrap font-semibold text-indigo-600 hover:text-indigo-500',
  },
}

const bannerBottomStaticTone = { container: 'relative inset-x-0' }

const bannerBottomDefault: BannerBottomAlignedProps = {
  toneClasses: bannerBottomStaticTone,
}

const bannerBottomCustom: BannerBottomAlignedProps = {
  announcement: {
    highlight: 'Salient Connect Live',
    message: 'Tune in on August 14 for roadmap reveals and workshops',
    href: '#connect-live',
    showArrow: true,
  },
  dismiss: { label: 'Hide announcement' },
  toneClasses: bannerBottomStaticTone,
}

const bannerFloatingStaticTone = {
  container: 'pointer-events-none relative inset-x-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8',
}

const bannerFloatingDefault: BannerFloatingAtBottomProps = {
  toneClasses: bannerFloatingStaticTone,
}

const bannerFloatingCustom: BannerFloatingAtBottomProps = {
  announcement: {
    highlight: 'Docs refresh',
    message: 'Our documentation hub now includes live prop playgrounds for every component.',
    href: '#docs-refresh',
    showArrow: true,
  },
  dismiss: { label: 'Dismiss reminder' },
  toneClasses: bannerFloatingStaticTone,
}

const bannerOnBrandCustom: BannerOnBrandProps = {
  announcement: {
    highlight: 'Platform AMA',
    message: 'Join the team on July 22 for a Q&A on prop-driven governance.',
    href: '#platform-ama',
    showArrow: true,
  },
  dismiss: { label: 'Close' },
}

const bannerWithButtonCustom: BannerWithButtonProps = {
  announcement: {
    highlight: 'Platform Week 2024',
    message: 'Daily sessions cover component analytics, rollout playbooks, and integration recipes.',
    href: '#platform-week',
    showArrow: true,
  },
  cta: {
    label: 'Watch keynote',
    href: '#keynote',
    showArrow: true,
  },
  dismiss: { label: 'Skip banner' },
}

const bannerWithLinkCustom: BannerWithLinkProps = {
  message: 'Salient 12.1 is ready for rollout across workspaces.',
  link: {
    label: 'Read release post',
    href: '#release-post',
    className: 'whitespace-nowrap font-semibold text-indigo-600 hover:text-indigo-500',
    showArrow: true,
  },
  dismiss: { label: 'Hide notice' },
}

const bannerPrivacyFullWidthTone = {
  container:
    'relative flex flex-col justify-between gap-x-8 gap-y-4 border-t border-gray-900/10 bg-white p-6 shadow-lg md:flex-row md:items-center lg:px-8',
}

const bannerPrivacyFullWidthDefault: BannerPrivacyFullWidthProps = {
  toneClasses: bannerPrivacyFullWidthTone,
}

const bannerPrivacyFullWidthCustom: BannerPrivacyFullWidthProps = {
  message:
    'We use cookies to personalize onboarding content and measure component adoption. Adjust your preferences anytime. See our',
  policyLink: {
    label: 'privacy controls',
    href: '#privacy-controls',
    className: 'font-semibold text-indigo-600 hover:text-indigo-500',
  },
  primaryAction: {
    label: 'Accept recommended',
    type: 'button',
  },
  secondaryAction: {
    label: 'Adjust settings',
    href: '#cookie-preferences',
  },
  toneClasses: bannerPrivacyFullWidthTone,
}

const bannerPrivacyNoticeTone = {
  container: 'pointer-events-none relative inset-x-0 px-6 pb-6',
}

const bannerPrivacyNoticeDefault: BannerPrivacyNoticeProps = {
  toneClasses: bannerPrivacyNoticeTone,
}

const bannerPrivacyNoticeCustom: BannerPrivacyNoticeProps = {
  message:
    'We use analytics cookies to understand how teams adopt prop-driven components. Decline to disable non-essential tracking. See our',
  policyLink: {
    label: 'analytics policy',
    href: '#analytics-policy',
    className: 'font-semibold text-indigo-600 hover:text-indigo-500',
  },
  primaryAction: {
    label: 'Enable analytics',
    type: 'button',
  },
  secondaryAction: {
    label: 'Keep essentials only',
    type: 'button',
  },
  toneClasses: bannerPrivacyNoticeTone,
}

const blogShowcasePosts: BlogPost[] = [
  {
    id: 'prop-governance-updates',
    title: 'Staying ahead of governance changes',
    href: '#blog-governance-updates',
    description:
      'How our enablement pods review prop contracts, roll out new guardrails, and keep approvals moving.',
    date: 'May 28, 2024',
    datetime: '2024-05-28',
    category: { title: 'Platform', href: '#category-platform' },
    author: {
      name: 'River Bennett',
      role: 'Head of Platform',
      href: '#author-river',
      imageUrl:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      imageAlt: 'River Bennett smiling at a whiteboard.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Distributed team reviewing component usage charts.',
  },
  {
    id: 'docs-scaled',
    title: 'Docs that never drift',
    href: '#blog-docs',
    description:
      'Pair Storybook stories with Astro docs so contributors always see the latest prop signatures.',
    date: 'May 14, 2024',
    datetime: '2024-05-14',
    category: { title: 'Documentation', href: '#category-documentation' },
    author: {
      name: 'Elliot Hughes',
      role: 'Design Systems Lead',
      href: '#author-elliot',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      imageAlt: 'Portrait of Elliot Hughes.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Design and docs teammates planning a rollout on laptops.',
  },
  {
    id: 'ai-hand-off',
    title: 'Let AI draft prop-friendly launch posts',
    href: '#blog-ai-launch',
    description:
      'Use prop schemas as the single source of truth so generated copy, code, and assets stay aligned.',
    date: 'Apr 30, 2024',
    datetime: '2024-04-30',
    category: { title: 'AI Assist', href: '#category-ai' },
    author: {
      name: 'Noah Carter',
      role: 'Head of Platform Enablement',
      href: '#author-noah',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      imageAlt: 'Noah Carter speaking at a conference.',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Laptop showing analytics dashboards with overlaid charts.',
  },
]

const blogBackgroundPosts: BlogPost[] = blogShowcasePosts.map((post) => ({
  ...post,
  description: post.description,
  category: undefined,
}))

const blogFeaturedNarrative: BlogPost = {
  id: 'salient-series-c',
  title: 'Salient secures Series C to power prop-driven adoption',
  href: '#blog-series-c',
  description:
    'New funding accelerates parity across Astro, Next.js, and backend surfaces while expanding our governance tooling.',
  date: 'Jun 11, 2024',
  datetime: '2024-06-11',
  author: {
    name: 'Mira Patel',
    href: '#author-mira',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    imageAlt: 'Mira Patel standing on a stage.',
  },
}

const blogSingleColumnCustom: BlogSingleColumnProps = {
  title: 'Inside the prop-driven newsroom',
  description: 'Team retrospectives, rollout tactics, and best practices from Salient platform squads.',
  posts: blogShowcasePosts,
  className: 'bg-transparent py-16 sm:py-20',
}

const blogSingleColumnWithImagesCustom: BlogSingleColumnWithImagesProps = {
  title: 'Stories with visuals',
  description: 'Pair screenshots and photography with your long-form platform updates.',
  posts: blogShowcasePosts,
  className: 'bg-transparent py-16 sm:py-20',
}

const blogThreeColumnCustom: BlogThreeColumnProps = {
  title: 'Fresh from the platform team',
  description: 'Highlight three key narratives to help stakeholders follow along with adoption.',
  posts: blogShowcasePosts,
  className: 'bg-transparent py-16 sm:py-20',
}

const blogThreeColumnBackgroundCustom: BlogThreeColumnBackgroundImagesProps = {
  title: 'In the field',
  description: 'Capture rollout snapshots with immersive imagery and quick reads.',
  posts: blogBackgroundPosts,
  className: 'bg-transparent py-16 sm:py-20',
}

const blogThreeColumnWithImagesCustom: BlogThreeColumnWithImagesProps = {
  title: 'Component spotlights',
  description: 'Showcase new experiences, guardrails, and metrics with flexible storytelling.',
  posts: blogShowcasePosts,
  className: 'bg-transparent py-16 sm:py-20',
}

const blogWithFeaturedPostCustom: BlogWithFeaturedPostProps = {
  title: 'Platform briefings',
  description: 'Lead with the biggest announcement, then surface supporting stories for deeper dives.',
  featuredPost: blogFeaturedNarrative,
  posts: blogShowcasePosts.slice(0, 2),
  className: 'bg-transparent py-16 sm:py-20',
}

const featureSimpleProps: FeatureSimpleProps = {
  eyebrow: 'Why teams adopt Salient',
  title: 'Everything you need out of the box',
  description: 'Shared prop-driven components combine design quality, backend parity, and fast iteration.',
  features: [
    {
      name: 'Design-to-code sync',
      description: 'Figma tokens, Storybook, and Next.js all stay aligned using shared props.',
    },
    {
      name: 'Full-stack typing',
      description: 'Types mirror backend models so API contracts and UI stay in lockstep.',
    },
    {
      name: 'Composability first',
      description: 'Mix and match hero, testimonial, and CTA props to ship new experiences in hours.',
    },
    {
      name: 'Analytics built-in',
      description: 'Shared metrics help teams measure component usage across web and docs.',
    },
    {
      name: 'AI-ready defaults',
      description: 'Prompt-friendly props make it simple to swap in generated content for rapid demos.',
    },
    {
      name: 'Enterprise guardrails',
      description: 'Roles, permissions, and audit trails ship with the component system by default.',
    },
  ],
}

const featureIconsProps: FeatureThreeColumnWithIconsProps = {
  eyebrow: 'Deploy faster',
  title: 'Everything you need to move from pilot to scale',
  description: 'Swap props, not layouts. Let your teams focus on product outcomes instead of wiring boilerplate.',
  features: [
    {
      name: 'Analytics dashboards',
      description: 'Track component adoption across surfaces and squads.',
      href: '#analytics',
      icon: ChartPieIcon,
      ctaLabel: 'View analytics',
    },
    {
      name: 'Automation flows',
      description: 'Trigger release notes, Slack updates, and Jira tickets from prop updates.',
      href: '#automations',
      icon: ArrowPathIcon,
    },
    {
      name: 'Security posture',
      description: 'Keep compliance and access controls synced as components roll out.',
      href: '#security',
      icon: FingerPrintIcon,
    },
  ],
}

const featureProductProps: FeatureWithProductScreenshotProps = {
  eyebrow: 'Unified view',
  title: 'Everything your team needs in one dashboard',
  description: 'Real-time usage metrics, component statuses, and prop overrides are just a click away.',
  features: [
    {
      name: 'Audit history',
      description: 'Review what changed in every prop-driven component across the organization.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Role-aware previews',
      description: 'Preview marketing, docs, and app experiences with contextual data.',
      icon: LockClosedIcon,
    },
    {
      name: 'Automated rollbacks',
      description: 'Revert to a previous prop schema version in one click if something goes wrong.',
      icon: ServerIcon,
    },
  ],
  screenshot: {
    src: 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
    alt: 'Salient dashboard screenshot',
    width: 2432,
    height: 1442,
  },
}

const featureLargeScreenshotProps: FeatureWithLargeScreenshotProps = {
  eyebrow: 'Move fast without chaos',
  title: 'No server? No problem.',
  description: 'Ship prop-driven experiences from a single repo, regardless of frontend framework.',
  features: [
    {
      name: 'Multi-framework support',
      description: 'Next.js, Astro, and Storybook all consume the same prop interfaces.',
      icon: SquaresPlusIcon,
    },
    {
      name: 'Governance baked in',
      description: 'Enforce consistent experiences with automated guardrails and approvals.',
      icon: LockClosedIcon,
    },
    {
      name: 'Observability',
      description: 'Visualize component health and usage across every surface at a glance.',
      icon: ChartPieIcon,
    },
    {
      name: 'AI assist',
      description: 'Leverage assistant tooling to propose prop combinations and generate data.',
      icon: CubeTransparentIcon,
    },
    {
      name: 'Version safety',
      description: 'Snapshot and roll back prop schemas instantly if regressions appear.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Secure by default',
      description: 'SSO, role-based access, and audit logging are included out of the box.',
      icon: FingerPrintIcon,
    },
  ],
  screenshot: {
    src: 'https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png',
    alt: 'Component library screenshot',
    width: 2432,
    height: 1442,
  },
}

const featureTestimonialProps: FeatureWithTestimonialProps = {
  eyebrow: 'Customer-first',
  title: 'From proposal to production in weeks',
  description: 'Salient customers roll out new surfaces with zero duplicated UI code.',
  primaryAction: { label: 'Book a strategy session', href: '#strategy' },
  testimonial: {
    quote:
      '“Our teams now ship updates in a fraction of the time. Prop-driven defaults brought design, engineering, and docs into a single source of truth.”',
    authorName: 'Aria Monroe',
    authorRole: 'Director of Product, Meridian',
    authorImageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=3&w=128&h=128&q=80',
    authorImageAlt: 'Portrait of Aria Monroe smiling at the camera.',
  },
  screenshot: {
    src: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
    alt: 'Dark theme project view',
    width: 2432,
    height: 1442,
  },
}

const showcaseLogos: LogoCloudsSimpleProps['logos'] = [
  {
    name: 'Northwind',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
      alt: 'Northwind',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Lumen',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
      alt: 'Lumen',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Tuple',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
      alt: 'Tuple',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'SavvyCal',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
      alt: 'SavvyCal',
      width: 158,
      height: 48,
    },
  },
  {
    name: 'Statamic',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
      alt: 'Statamic',
      width: 158,
      height: 48,
    },
  },
]

const logoCloudsSimpleProps: LogoCloudsSimpleProps = {
  title: 'Trusted by Salient platform adopters',
  logos: showcaseLogos,
}

const logoCloudsGridProps: LogoCloudsGridProps = {
  logos: showcaseLogos,
}

const logoCloudPrimary: LogoCloudPrimaryAction = { label: 'Join the network', href: '#join' }
const logoCloudSecondary: LogoCloudSecondaryAction = { label: 'See customer stories', href: '#stories' }

const logoCloudsLogoOnRightProps: LogoCloudsLogoOnRightProps = {
  title: 'Trusted by platform leaders',
  description: 'Enterprise teams rely on Salient to keep their UI consistent across surfaces and markets.',
  primaryAction: logoCloudPrimary,
  secondaryAction: logoCloudSecondary,
  logos: showcaseLogos?.map((logo) => ({
    ...logo,
    className: logo.className ?? 'max-h-12 w-full object-contain object-left',
  })),
}

const logoCloudFeatures: LogoCloudFeature[] = [
  {
    name: 'Component telemetry',
    description: 'Monitor prop usage, error rates, and adoption trends in one place.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Security posture',
    description: 'Access policies and audit logs keep your design system compliant.',
    icon: LockClosedIcon,
  },
  {
    name: 'Resilient backups',
    description: 'Snapshot component states so you can roll back with confidence.',
    icon: ServerIcon,
  },
]

const logoCloudTestimonial: LogoCloudTestimonial = {
  quote:
    '“Salient let us unify marketing, docs, and product surfaces. Our teams iterate faster because every component shares the same prop contract.”',
  authorName: 'Noah Carter',
  authorHandle: '@noahships',
  authorRole: 'Head of Platform, Orbit',
  authorImageUrl:
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=3&w=128&h=128&q=80',
  authorImageAlt: 'Portrait of Noah Carter smiling.',
}

const logoCloudsWithTestimonialProps: LogoCloudsWithTestimonialProps = {
  eyebrow: 'Customer spotlight',
  title: 'A shared component library for every surface',
  description: 'Join the teams who eliminate duplicated UI and keep design debt in check.',
  features: logoCloudFeatures,
  testimonial: logoCloudTestimonial,
}

const leadershipTeam: TeamMember[] = [
  {
    name: 'River Bennett',
    role: 'Head of Platform',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Guides the shared component roadmap to keep parity across apps.',
    xUrl: 'https://x.com/river_builds',
    linkedinUrl: 'https://www.linkedin.com/in/river-bennett',
  },
  {
    name: 'Elliot Hughes',
    role: 'Design Systems Lead',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Owns visual standards, accessibility, and Storybook governance.',
    xUrl: 'https://x.com/elliot_dsgn',
    linkedinUrl: 'https://www.linkedin.com/in/elliot-hughes',
  },
  {
    name: 'Akira Patel',
    role: 'Principal Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Connects Next.js and FastAPI contracts through shared typing.',
    xUrl: 'https://x.com/ak_pat',
    linkedinUrl: 'https://www.linkedin.com/in/akira-patel',
  },
  {
    name: 'Maya Chen',
    role: 'Developer Experience',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Drives turbo repo automation and component test coverage.',
    xUrl: 'https://x.com/maya_codes',
    linkedinUrl: 'https://www.linkedin.com/in/maya-chen',
  },
  {
    name: 'Noah Williams',
    role: 'Product Strategy',
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Shapes the adoption plan across web, docs, and API surfaces.',
    linkedinUrl: 'https://www.linkedin.com/in/noah-williams',
  },
  {
    name: 'Sienna Brooks',
    role: 'QA Automation',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Builds visual regression snapshots into the prop-driven suite.',
    xUrl: 'https://x.com/sienna_qaa',
  },
]

const roundGridMembers: TeamMember[] = [
  ...leadershipTeam.slice(0, 6),
  {
    name: 'Luca Navarro',
    role: 'Infra Partnerships',
    imageUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  {
    name: 'Ana Castillo',
    role: 'Content Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  {
    name: 'Jonah Lewis',
    role: 'Data Visualization',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  {
    name: 'Priya Ramaswamy',
    role: 'Platform Security',
    imageUrl:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  {
    name: 'Theo Marshall',
    role: 'Solutions Architect',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  {
    name: 'Adriana Romero',
    role: 'Field Engineering',
    imageUrl:
      'https://images.unsplash.com/photo-1523365280197-f1783db9fe62?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
]

const deepDiveProfiles: TeamMember[] = leadershipTeam.slice(0, 3).map((member, index) => ({
  ...member,
  bio: [
    'Focuses on component APIs that mirror backend schemas for quick integrations.',
    'Designs cross-surface styles that stay accessible from dark mode to printed assets.',
    'Translates analytics insights into platform-level roadmap adjustments.',
  ][index],
}))

const featureLeads: TeamMember[] = [
  {
    name: 'Lena Ortiz',
    role: 'Growth Engineering',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Owns onboarding flows and optimizes activation metrics.',
  },
  {
    name: 'Samir Gupta',
    role: 'Realtime Systems',
    imageUrl:
      'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Ships WebSocket-ready stats and presence components.',
  },
  {
    name: 'Marin Fox',
    role: 'Billing Integrations',
    imageUrl:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Keeps pricing experiences cohesive between web and docs audiences.',
  },
  {
    name: 'Cleo Harper',
    role: 'AI Experiences',
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    bio: 'Embeds assistant workflows directly into shared UI primitives.',
  },
]

const pricingCoreTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    href: '#starter',
    priceMonthly: '$29',
    description: 'Component viewer, prop playground, and release tracking.',
    features: ['Unlimited viewers', 'Prop defaults explorer', 'Weekly release digest', 'Email support'],
  },
  {
    id: 'growth',
    name: 'Growth',
    href: '#growth',
    priceMonthly: '$79',
    description: 'For product squads rolling out prop-driven UI across apps.',
    features: [
      'Everything in Starter',
      'Role-based access control',
      'Cross-app analytics dashboard',
      'Priority support response',
    ],
    mostPopular: true,
    ctaLabel: 'Upgrade to Growth',
  },
  {
    id: 'scale',
    name: 'Scale',
    href: '#scale',
    priceMonthly: 'Custom',
    description: 'Tailored onboarding, compliance reviews, and guidance sessions.',
    features: [
      'Dedicated success manager',
      'Custom compliance reviews',
      'Design system audit',
      'Quarterly roadmap workshop',
    ],
  },
]

const pricingEmphasis: PricingTwoTiersEmphasisProps = {
  eyebrow: 'Rollout',
  title: 'Choose the right launch mode',
  description: 'Start with a pilot or roll out to every workspace with guardrails baked in.',
  tiers: [
    {
      id: 'pilot',
      name: 'Pilot',
      href: '#pilot',
      priceMonthly: '$49',
      description: 'Spin up a single product team with staging environments included.',
      features: ['Up to 15 editors', 'Audit trails & snapshots', 'GitHub PR annotations', 'Async office hours'],
      featured: true,
      ctaLabel: 'Launch pilot',
    },
    {
      id: 'scale',
      name: 'Scale',
      href: '#scale-launch',
      priceMonthly: '$129',
      description: 'Governance, compliance, and multi-surface rollout support.',
      features: ['Unlimited editors', 'SOC2 toolkit', 'Design partner matching', '24/7 triage desk'],
    },
  ],
  ctaLabel: 'Talk to team',
}

const pricingToggleTiers: PricingToggleTier[] = [
  {
    name: 'Maker',
    id: 'maker',
    href: '#maker',
    price: { monthly: '$19', annually: '$190' },
    description: 'Great for solo builders prototyping new experiences.',
    features: ['Component test sandbox', 'Storybook sync', '2 custom environments'],
  },
  {
    name: 'Team',
    id: 'team',
    href: '#team',
    price: { monthly: '$49', annually: '$490' },
    description: 'Best for product trios aligning across design and engineering.',
    features: ['Everything in Maker', 'Shared release notes', 'Usage analytics', 'Onboarding concierge'],
    featured: true,
    ctaLabel: 'Choose Team',
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    href: '#enterprise-tier',
    price: { monthly: '$99', annually: '$990' },
    description: 'Unlocks security reviews, custom SLAs, and bespoke training.',
    features: ['Regional data residency', 'Access policies', 'Custom invoice terms', 'Architecture reviews'],
  },
]

const pricingHighlights: PricingTierWithHighlights[] = [
  {
    name: 'Studio',
    id: 'studio-tier',
    href: '#studio',
    priceMonthly: '$39',
    description: 'Everything small teams need to maintain consistency.',
    highlights: [
      { description: 'Visual regression snapshots' },
      { description: 'Custom domain previews' },
      { description: 'Live prop playground' },
      { description: 'Quarterly workshops', disabled: true },
      { description: 'Single sign-on (SSO)', disabled: true },
      { description: 'Priority phone support', disabled: true },
    ],
    features: [],
  },
  {
    name: 'Growth',
    id: 'growth-tier',
    href: '#growth',
    priceMonthly: '$89',
    description: 'For companies aligning multiple product surfaces.',
    highlights: [
      { description: 'Visual regression snapshots' },
      { description: 'Custom domain previews' },
      { description: 'Live prop playground' },
      { description: 'Quarterly workshops' },
      { description: 'Single sign-on (SSO)', disabled: true },
      { description: 'Priority phone support', disabled: true },
    ],
    features: [],
  },
  {
    name: 'Platform',
    id: 'platform-tier',
    href: '#platform',
    priceMonthly: '$159',
    description: 'When governance, compliance, and enablement are critical.',
    highlights: [
      { description: 'Visual regression snapshots' },
      { description: 'Custom domain previews' },
      { description: 'Live prop playground' },
      { description: 'Quarterly workshops' },
      { description: 'Single sign-on (SSO)' },
      { description: 'Priority phone support' },
    ],
    features: [],
  },
]

const comparisonSections: PricingComparisonSection[] = [
  {
    name: 'Launch velocity',
    features: [
      { name: 'Component health telemetry', tiers: { Studio: true, Growth: true, Platform: true } },
      { name: 'Branch previews per month', tiers: { Studio: '10', Growth: '50', Platform: 'Unlimited' } },
      { name: 'Environment snapshots', tiers: { Studio: '2', Growth: '5', Platform: 'Unlimited' } },
      { name: 'Figma token sync', tiers: { Studio: false, Growth: true, Platform: true } },
    ],
  },
  {
    name: 'Governance',
    features: [
      { name: 'Audit log retention', tiers: { Studio: '30 days', Growth: '6 months', Platform: '12 months' } },
      { name: 'Single sign-on (SSO)', tiers: { Studio: false, Growth: false, Platform: true } },
      { name: 'Granular permissions', tiers: { Studio: false, Growth: true, Platform: true } },
      { name: 'Custom security reviews', tiers: { Studio: false, Growth: false, Platform: true } },
    ],
  },
  {
    name: 'Enablement',
    features: [
      { name: 'Quarterly workshops', tiers: { Studio: false, Growth: true, Platform: true } },
      { name: 'Design pairing sessions', tiers: { Studio: false, Growth: true, Platform: true } },
      { name: 'Dedicated success manager', tiers: { Studio: false, Growth: false, Platform: true } },
      { name: 'Onsite bootcamps', tiers: { Studio: false, Growth: false, Platform: true } },
    ],
  },
]

const pricingLogos: PricingLogo[] = [
  { alt: 'Northwind', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
  { alt: 'Tuple', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
  { alt: 'SavvyCal', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
  { alt: 'Statamic', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  { alt: 'Transistor', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
]

const singlePriceProps: PricingSinglePriceWithDetailsProps = {
  title: 'One price, unlimited components',
  description:
    'Adopt prop-driven UI without the overhead of incremental billing. Bring every surface into alignment with a single purchase order.',
  planName: 'Unlimited platform pass',
  planDescription:
    'Designed for organizations who want to move quickly without haggling over seats. Includes dedicated onboarding and ongoing product consultations.',
  includedFeatures: [
    'Unlimited seats across apps',
    'Shared component knowledge base',
    'Dedicated success architect',
    'Quarterly roadmap workshops',
    'Best practice scorecards',
    'Design pairing sessions',
  ],
  price: '$9,900',
  priceSuffix: 'USD',
  ctaLabel: 'Get the platform pass',
  ctaHref: '#checkout',
  disclaimer: 'Includes a 30-day risk-free trial. Cancel anytime during the trial for a full refund.',
}

const statHighlights: StatsSimpleProps = {
  title: 'Prop-driven rollout metrics',
  description: 'Measured across Salient apps after migrating the initial component set to prop-driven defaults.',
  stats: [
    { id: 'components', name: 'Components converted', value: '58' },
    { id: 'adoption', name: 'Teams onboarded', value: '22' },
    { id: 'velocity', name: 'Release cadence', value: 'Weekly' },
    { id: 'coverage', name: 'Shared prop coverage', value: '92%' },
  ],
}

const statSplitProps: StatsSplitWithImageProps = {
  eyebrow: 'Cross-surface confidence',
  title: 'Built for distributed product teams',
  description:
    'Prop-driven defaults let teams ship quicker without duplicating placeholder content. Share reliable UI across web, docs, and API consoles with minimal overhead.',
  imageUrl:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1280&q=80',
  imageAlt: 'Product and engineering teams collaborating using laptops and whiteboards.',
  stats: [
    { id: 1, name: 'Design to code sync time', value: '↓ 38%' },
    { id: 2, name: 'Cross-app component reuse', value: '↑ 3.4x' },
    { id: 3, name: 'Storybook coverage', value: '100%' },
    { id: 4, name: 'API schema parity issues', value: '0 critical' },
  ],
}

const timelineEntries: StatsTimelineItem[] = [
  {
    name: 'Audit component library',
    description: 'Catalogued 200+ Tailwind UI patterns with prop requirements.',
    date: 'Jan 2024',
    dateTime: '2024-01',
  },
  {
    name: 'Phase 1 prop rollout',
    description: 'Converted hero, team, stats, pricing, and testimonial patterns to prop-driven variants.',
    date: 'Feb 2024',
    dateTime: '2024-02',
  },
  {
    name: 'Backend schema mirroring',
    description: 'Pydantic models aligned with TypeScript interfaces for full-stack guarantees.',
    date: 'Mar 2024',
    dateTime: '2024-03',
  },
  {
    name: 'Storybook parity achieved',
    description: 'All variants documented with customizable controls and live examples.',
    date: 'Apr 2024',
    dateTime: '2024-04',
  },
]

const statsNarrative: StatsWithDescriptionProps = {
  title: 'Why prop-driven UI matters',
  lead:
    'Salient’s pattern library now accepts data inputs instead of locking in filler content, unlocking real-world scenarios across teams.',
  description:
    'Reusable props mean every surface draws from the same canonical data. It keeps marketing, product, and docs aligned, while enabling backend teams to deliver consistent contracts.',
  stats: [
    { name: 'Shared prop packages', value: '5' },
    { name: 'Docs sync lag', value: '< 1hr' },
    { name: 'Mock API adoption', value: '78%' },
  ],
}

const testimonialGridData: Testimonial[] = [
  {
    body: 'Migrating to the prop-driven library gave us consistent UI across Next.js and Astro in under a week.',
    author: {
      name: 'Jordan Rivera',
      handle: 'jordanbuilds',
      title: 'Engineering Manager, Apex Labs',
      imageUrl:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    body: 'The new defaults mean we ship Storybook-ready screens without hunting for placeholder data.',
    author: {
      name: 'Sasha Morgan',
      handle: 'sashamorgan',
      title: 'Lead Designer, Grove',
      imageUrl:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    body: 'Backend parity is simple—TypeScript props map directly to our Pydantic models for the API layer.',
    author: {
      name: 'Emilio Vega',
      handle: 'emiliovega',
      title: 'Head of Platform, Vela Systems',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    body: 'Docs writers can pull the same data, so audiences see up-to-date screenshots everywhere.',
    author: {
      name: 'Whitney Francis',
      handle: 'whitneycodes',
      title: 'Documentation Lead, Arcadia',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    body: 'Prop defaults are still beautiful, letting us demo polish before real content is ready.',
    author: {
      name: 'Courtney Henry',
      title: 'VP Product, Stately',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    body: 'Mock API routes from the same interfaces made it painless to add integration tests.',
    author: {
      name: 'Tom Cook',
      handle: 'tomshipscode',
      title: 'Staff Engineer, Finch',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    body: 'Our design critiques moved faster—we iterate on props instead of redrawing screens.',
    author: {
      name: 'Lindsay Walton',
      handle: 'lindsayux',
      title: 'Principal Designer, Catalyst',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    body: 'Phase 1 delivered tangible wins with zero downtime; stakeholders immediately saw value.',
    author: {
      name: 'Leslie Alexander',
      handle: 'leslierunsops',
      title: 'COO, Trident',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
]

const singleCenteredProps: TestimonialsSingleCenteredProps = {
  logoSrc: 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg',
  logoAlt: 'Tuple',
  quote:
    '“We shipped the Salient redesign with full component reuse across marketing, docs, and app surfaces in half the time we scoped. The prop-driven defaults kept everyone aligned.”',
  author: {
    name: 'Judith Black',
    title: 'CEO, Tuple',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
}

const singleAvatarProps: TestimonialsSingleWithAvatarProps = {
  quote:
    'Prop APIs mirror backend schemas now. When data changes upstream, the UI updates instantly across every surface we have without patchwork fixes.',
  author: {
    name: 'Devon Lane',
    title: 'Director of Engineering, Atlas',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=576&h=576&q=80',
  },
}

const sideBySideTestimonials: SideBySideTestimonial[] = [
  {
    logoSrc: 'https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg',
    logoAlt: 'Workcation',
    body:
      '“We layered the new pricing tier props into experiments without rebuilding the entire page. Toggle states and analytics came for free.”',
    author: {
      name: 'Evelyn Torres',
      title: 'Head of Growth, Workcation',
      imageUrl:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
  {
    logoSrc: 'https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg',
    logoAlt: 'Reform',
    body:
      '“Our docs team reuses the same components. Content designers just drop in copy via props and the layout stays perfect.”',
    author: {
      name: 'Marcus Allen',
      title: 'Docs Lead, Reform',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
  },
]

const backgroundTestimonialProps: TestimonialsWithBackgroundImageProps = {
  logoSrc: 'https://tailwindcss.com/plus-assets/img/logos/statamic-logo-white.svg',
  quote:
    '“The Salient refactor let us demo production-quality screens during sales cycles. Every component is configurable which means no more lorem ipsum slides.”',
  author: {
    name: 'Priya Sharma',
    title: 'VP Product, Statamic',
    imageUrl:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  backgroundImageUrl:
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80',
  backgroundImageAlt: 'An abstract office background with neon lighting.',
}

const starRatingProps: TestimonialsStarRatingProps = {
  rating: 5,
  maxRating: 5,
  ratingLabel: 'Rated 5 out of 5 by Salient customers',
  quote:
    '“Best purchase we made this quarter. Prop-driven defaults meant faster experiments, better analytics, and fewer regressions.”',
  author: {
    name: 'James Thompson',
    title: 'Head of Product Ops, Clarity',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
}

export default function PropDrivenShowcase() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:px-8 lg:py-24">
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <HeroSimpleCentered
            navigation={heroNavigation}
            announcement={heroAnnouncement}
            primaryAction={heroPrimary}
            secondaryAction={heroSecondary}
            logo={heroLogo}
            login={heroLogin}
            title="Prop-driven UI across every Salient surface"
            description="Shared components now accept real data with friendly defaults. Configure once, reuse everywhere."
            className="rounded-3xl"
          />
        </section>

        <section id="action-panels" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Action panels</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Guide teams with structured follow-ups</h2>
            <p className="mt-4 text-base text-slate-600">
              Configure subscription changes, inline forms, and preference toggles without duplicating markup.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Simple panel — defaults</h3>
              <p className="text-sm text-slate-600">Renders Tailwind UI defaults through the prop-driven wrapper.</p>
              <ActionPanelsSimple />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Simple panel — custom props</h3>
              <p className="text-sm text-slate-600">
                Swap messaging and CTA text to align with your internal governance flow.
              </p>
              <ActionPanelsSimple {...actionPanelsSimpleCustom} />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Form panel — defaults</h3>
              <p className="text-sm text-slate-600">Validates the inline email form using the built-in props.</p>
              <ActionPanelsWithInput />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Form panel — custom props</h3>
              <p className="text-sm text-slate-600">
                Update field metadata and button labels for an invite-centric workflow.
              </p>
              <ActionPanelsWithInput {...actionPanelsWithInputCustom} />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Toggle panel — defaults</h3>
              <p className="text-sm text-slate-600">Displays the original auto-renewal copy with zero configuration.</p>
              <ActionPanelsWithToggle />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Toggle panel — custom props</h3>
              <p className="text-sm text-slate-600">
                Customize labels and initial state when announcing release notifications.
              </p>
              <ActionPanelsWithToggle {...actionPanelsWithToggleCustom} />
            </div>
          </div>
        </section>

        <section id="alerts" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Alerts</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Notify teams with contextual messaging</h2>
            <p className="mt-4 text-base text-slate-600">
              Configure success, warning, and informational copy with optional actions, links, and dismiss controls.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Action alert — defaults</h3>
              <p className="text-sm text-slate-600">
                Demonstrates the success alert with two quick actions and stock copy.
              </p>
              <AlertsWithActions />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Action alert — custom props</h3>
              <p className="text-sm text-slate-600">
                Swap in deployment context and tailored button labels for rollout communications.
              </p>
              <AlertsWithActions {...alertsActionsCustom} />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Description alert — defaults</h3>
              <p className="text-sm text-slate-600">Keeps the default warning tone with structured helper text.</p>
              <AlertsWithDescription />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Description alert — custom props</h3>
              <p className="text-sm text-slate-600">
                Highlight security follow-ups while keeping the same compact layout.
              </p>
              <AlertsWithDescription {...alertsDescriptionCustom} />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Dismissible alert — defaults</h3>
              <p className="text-sm text-slate-600">Show the built-in success toast with dismiss control.</p>
              <AlertsWithDismissButton />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Dismissible alert — custom props</h3>
              <p className="text-sm text-slate-600">
                Update the message and aria label to acknowledge saved workspace preferences.
              </p>
              <AlertsWithDismissButton {...alertsDismissCustom} />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Link alert — defaults</h3>
              <p className="text-sm text-slate-600">Reference the stock update message with the default CTA styling.</p>
              <AlertsWithLink />
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Link alert — custom props</h3>
              <p className="text-sm text-slate-600">
                Direct teams to launch guides when new APIs and tooling become available.
              </p>
              <AlertsWithLink {...alertsLinkCustom} />
            </div>
          </div>
        </section>

        <section id="banners" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Banners</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Promote launches without layout conflicts</h2>
            <p className="mt-4 text-base text-slate-600">
              Toggle positioning, CTAs, and privacy copy while keeping sticky experiences testable in isolation.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Bottom banner — defaults</h3>
              <p className="text-sm text-slate-600">
                Render the sticky announcement with static positioning for safe previews.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerBottomAligned {...bannerBottomDefault} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Bottom banner — custom props</h3>
              <p className="text-sm text-slate-600">
                Highlight live events and tailor the dismiss label without shipping code changes.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerBottomAligned {...bannerBottomCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Floating banner — defaults</h3>
              <p className="text-sm text-slate-600">Preview the floating treatment while keeping it inside the grid.</p>
              <div className="overflow-hidden rounded-xl">
                <BannerFloatingAtBottom {...bannerFloatingDefault} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Floating banner — custom props</h3>
              <p className="text-sm text-slate-600">
                Announce documentation refreshes with linkable copy and safe dismiss options.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerFloatingAtBottom {...bannerFloatingCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">On-brand banner — defaults</h3>
              <p className="text-sm text-slate-600">Showcase the full-width brand treatment with gradient background.</p>
              <div className="overflow-hidden rounded-xl">
                <BannerOnBrand />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">On-brand banner — custom props</h3>
              <p className="text-sm text-slate-600">
                Swap in AMA details and refreshed copy while preserving the branded layout.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerOnBrand {...bannerOnBrandCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Gradient banner — defaults</h3>
              <p className="text-sm text-slate-600">
                Demonstrate the hero-style gradient with built-in CTAs and dismiss button.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerWithButton />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Gradient banner — custom props</h3>
              <p className="text-sm text-slate-600">
                Promote Platform Week and route viewers directly to the keynote stream.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerWithButton {...bannerWithButtonCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Link banner — defaults</h3>
              <p className="text-sm text-slate-600">Keep the inline CTA variant with static positioning.</p>
              <div className="overflow-hidden rounded-xl">
                <BannerWithLink />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Link banner — custom props</h3>
              <p className="text-sm text-slate-600">
                Share release highlights and guide teams to the detailed changelog.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerWithLink {...bannerWithLinkCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Privacy banner — defaults</h3>
              <p className="text-sm text-slate-600">
                Display the full-width privacy disclosure with non-blocking layout tweaks.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerPrivacyFullWidth {...bannerPrivacyFullWidthDefault} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Privacy banner — custom props</h3>
              <p className="text-sm text-slate-600">
                Introduce tailored messaging with dedicated settings and policy links.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerPrivacyFullWidth {...bannerPrivacyFullWidthCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Privacy notice — defaults</h3>
              <p className="text-sm text-slate-600">
                Preview the compact privacy notice without activating the sticky behavior.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerPrivacyNotice {...bannerPrivacyNoticeDefault} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Privacy notice — custom props</h3>
              <p className="text-sm text-slate-600">
                Provide analytics-specific consent messaging alongside tuned actions.
              </p>
              <div className="overflow-hidden rounded-xl">
                <BannerPrivacyNotice {...bannerPrivacyNoticeCustom} />
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Blog</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Publish updates with reusable layouts</h2>
            <p className="mt-4 text-base text-slate-600">
              Mix featured posts, single-column narratives, and image-heavy grids using shared post data.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Single column — defaults</h3>
              <p className="text-sm text-slate-600">Renders the baseline Tailwind UI layout with canonical demo data.</p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogSingleColumn />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Single column — custom props</h3>
              <p className="text-sm text-slate-600">
                Swap in platform release recaps while dialing back padding for tighter previews.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogSingleColumn {...blogSingleColumnCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Single column with images — defaults</h3>
              <p className="text-sm text-slate-600">
                Keeps the original image-forward storytelling with default props intact.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogSingleColumnWithImages />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Single column with images — custom props</h3>
              <p className="text-sm text-slate-600">
                Highlight governance briefings with bespoke photography and copy pulled from props.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogSingleColumnWithImages {...blogSingleColumnWithImagesCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Three column — defaults</h3>
              <p className="text-sm text-slate-600">Showcases the stock three-up grid for quick browsing.</p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogThreeColumn />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Three column — custom props</h3>
              <p className="text-sm text-slate-600">
                Focus on platform narratives to brief stakeholders in a single glance.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogThreeColumn {...blogThreeColumnCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Background images — defaults</h3>
              <p className="text-sm text-slate-600">
                Demonstrates the gradient overlay treatment with the Tailwind UI dataset.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
                <BlogThreeColumnBackgroundImages />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Background images — custom props</h3>
              <p className="text-sm text-slate-600">
                Pair campaign photography with rollout milestones using the same post contracts.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
                <BlogThreeColumnBackgroundImages {...blogThreeColumnBackgroundCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Three column with images — defaults</h3>
              <p className="text-sm text-slate-600">Shows the card-style grid with demo content untouched.</p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogThreeColumnWithImages />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Three column with images — custom props</h3>
              <p className="text-sm text-slate-600">
                Reuse the same post data to drive a marketing grid with contextual categories.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogThreeColumnWithImages {...blogThreeColumnWithImagesCustom} />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Featured post — defaults</h3>
              <p className="text-sm text-slate-600">
                Keeps the Tailwind UI featured story with supporting posts list on the right.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogWithFeaturedPost />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Featured post — custom props</h3>
              <p className="text-sm text-slate-600">
                Promote major announcements, then trail additional reads without writing custom JSX.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <BlogWithFeaturedPost {...blogWithFeaturedPostCustom} />
              </div>
            </div>
          </div>
        </section>

        <section id="headers" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Headers</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Configurable hero copy for any page</h2>
            <p className="mt-4 text-base text-slate-600">
              Adjust eyebrow text, descriptions, stats, and callouts from shared props to keep messaging aligned.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <HeaderSimple
                eyebrow="Get the help you need"
                title="Platform support center"
                description="Offer onboarding guidance, API documentation, and community resources from a single hero."
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <HeaderCentered
                eyebrow="Product updates"
                title="What’s new in the Salient platform"
                description="Announce cross-surface rollouts while keeping messaging centered in marketing and docs."
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <HeaderSimpleWithBackground
                eyebrow="Customer stories"
                title="Success stories hub"
                description="Spotlight teams converting to prop-driven UI with a soft gradient overlay and flexible copy."
                background={{
                  imageUrl:
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
                  imageAlt: 'Product team collaborating in a bright workspace.',
                }}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <HeaderWithStats {...headerStatsProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <HeaderWithCards {...headerCardsProps} />
            </div>
          </div>
        </section>

        <section id="navigation" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Navigation</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Flexible nav bars for marketing and app surfaces</h2>
            <p className="mt-4 text-base text-slate-600">
              Control logos, links, flyout content, and mobile behavior using the same prop schema across experiences.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <NavbarBrandBackground
                logo={{ ...navbarLogo, src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white' }}
                navigation={primaryNavigation}
                action={navAction}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <NavbarWithCenteredLogo logo={navbarLogo} navigation={primaryNavigation} action={navAction} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <NavbarWithFlyoutMenu
                logo={navbarLogo}
                navigation={primaryNavigation.slice(1)}
                products={navProducts}
                callsToAction={navCallsToAction}
                action={navAction}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <NavbarFullWidthFlyoutMenu
                logo={navbarLogo}
                navigation={primaryNavigation}
                products={navProducts}
                callsToAction={[
                  ...navCallsToAction,
                  { name: 'View all products', href: '#all-products', icon: RectangleGroupIcon },
                ]}
                action={navAction}
              />
            </div>
          </div>
        </section>

        <section id="features" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Features</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Showcase value with configurable data</h2>
            <p className="mt-4 text-base text-slate-600">
              Swap headlines, screenshots, testimonials, and bullet points without touching layout code.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <FeatureSimple {...featureSimpleProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <FeatureThreeColumnWithIcons {...featureIconsProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <FeatureWithProductScreenshot {...featureProductProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <FeatureWithLargeScreenshot {...featureLargeScreenshotProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <FeatureWithTestimonial {...featureTestimonialProps} />
            </div>
          </div>
        </section>

        <section id="logo-clouds" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Logo Clouds</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Keep brand trust front and center</h2>
            <p className="mt-4 text-base text-slate-600">
              Drive social proof with configurable logo grids, testimonials, and call-to-actions for every audience.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <LogoCloudsSimple {...logoCloudsSimpleProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <LogoCloudsGrid {...logoCloudsGridProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <LogoCloudsLogoOnRight {...logoCloudsLogoOnRightProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <LogoCloudsWithTestimonial {...logoCloudsWithTestimonialProps} />
            </div>
          </div>
        </section>

        <section id="team" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Team variants</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Configurable people sections</h2>
            <p className="mt-4 text-base text-slate-600">
              Each layout consumes the same `TeamMember` interface, ensuring parity across marketing and docs.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TeamWithSmallImages title="Leadership circle" members={leadershipTeam} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TeamWithLargeImages
                title="Product leadership"
                description="A cross-discipline team that keeps prop-driven delivery aligned across surfaces."
                members={leadershipTeam}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TeamGridWithRoundImages
                title="Extended builder guild"
                description="From platform engineers to docs authors, everyone reuses the same prop interfaces."
                members={roundGridMembers}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TeamLargeGridWithCards
                title="Enablement partners"
                description="Specialists embedded with teams to accelerate prop-driven adoption."
                members={leadershipTeam.slice(0, 6)}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TeamWithVerticalImages
                title="Focused delivery pods"
                description="Each pod pairs engineering, design, and product to unlock rapid UI changes."
                members={deepDiveProfiles}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TeamFullWidthVerticalImages
                title="Rollout champions"
                description="Advanced session leaders guiding org-wide enablement."
                members={featureLeads}
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Pricing variants</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Flexible plan presentations</h2>
            <p className="mt-4 text-base text-slate-600">
              Shape every pricing screen by swapping in tiers, highlights, and comparison matrices via props.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10 md:px-16">
              <PricingThreeTiers
                eyebrow="Plans"
                title="Launch with confidence"
                description="Pick the plan that matches your rollout stage. Update tiers on the fly through props."
                tiers={pricingCoreTiers}
                defaultCtaLabel="Contact sales"
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10 md:px-16">
              <PricingTwoTiersEmphasis {...pricingEmphasis} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10 md:px-16">
              <PricingThreeTiersWithToggle
                eyebrow="Billing options"
                title="Switch between monthly and annual with a single prop"
                description="Demonstrate pricing toggles without wiring custom state management."
                tiers={pricingToggleTiers}
                monthlyLabel="Monthly"
                annualLabel="Annually"
                monthlyPriceSuffix="/month"
                annualPriceSuffix="/year"
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10 md:px-16">
              <PricingSinglePriceWithDetails {...singlePriceProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <PricingThreeTiersWithLogo
                title="Plan cards with detailed comparisons"
                description="Card highlights, comparison matrices, and logo strips are all driven via props."
                tiers={pricingHighlights}
                sections={comparisonSections}
                logos={pricingLogos}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10 md:px-16">
              <PricingThreeTiersComparisonTable
                eyebrow="Compare features"
                title="Every capability at a glance"
                description="Use the same comparison data in docs, marketing, or in-app upgrade flows."
                tiers={pricingHighlights.map(({ highlights, ...tier }) => {
                  void highlights
                  return tier
                })}
                sections={comparisonSections}
                ctaLabel="Select plan"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Testimonials</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Customer proof across formats</h2>
            <p className="mt-4 text-base text-slate-600">
              Swap quotes, ratings, and logos with simple prop updates to tailor every narrative.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TestimonialsGrid
                eyebrow="Platform advocates"
                title="Teams succeeding with prop-driven UI"
                testimonials={testimonialGridData}
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TestimonialsSingleCentered {...singleCenteredProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TestimonialsSingleWithAvatar {...singleAvatarProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TestimonialsTwoSideBySide testimonials={sideBySideTestimonials} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TestimonialsWithBackgroundImage {...backgroundTestimonialProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <TestimonialsWithStarRating {...starRatingProps} />
            </div>
          </div>
        </section>

        <section id="stats" className="space-y-12">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Stats</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Data-backed storytelling</h2>
            <p className="mt-4 text-base text-slate-600">
              Showcase quantitative wins and project timelines using the same props across every channel.
            </p>
          </header>
          <div className="grid gap-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <StatsSimple {...statHighlights} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <StatsSplitWithImage {...statSplitProps} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <StatsTimeline timeline={timelineEntries} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <StatsWithDescription {...statsNarrative} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
