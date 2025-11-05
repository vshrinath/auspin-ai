"use client";

import { useState } from "react";
import {
  Hero,
  ApplicationUi,
  Feature,
  CTA,
  Pricing,
  Header,
  Newsletter,
  Stats,
  Testimonials,
  Blog,
  Contact,
  Team,
  LogoClouds,
  FAQs,
  Footer,
  BentoGrid,
  Modal,
  Form,
  Alerts,
  Tables,
  Banner,
  Breadcrumbs,
  Navbar,
  ActionPanels,
  Notifications,
  Pagination,
  Tabs,
  Search,
  StackedLists,
  GridLists,
  Feeds,
  PageHeadings,
  SectionHeadings,
  SelectMenu,
  Toggles,
  InputGroups,
  RadioGroup,
  Checkboxes,
  Dividers,
  ProgressBars,
  Calendars,
  CardHeadings,
  FlyoutMenu,
  SignIn,
  TextBlock,
} from "@salient/ui";

// Import all components from each section
const { HeroSimpleCentered } = Hero;

const {
  ApplicationUiSimpleDescriptionList,
  ApplicationUiDescriptionListWithAvatar,
  ApplicationUiDescriptionListInCard,
  ApplicationUiSimpleDescriptionListV2,
} = ApplicationUi;

const {
  FeatureSimple,
  FeatureWithProductScreenshot,
  FeatureWithLargeScreenshot,
  FeatureThreeColumnWithIcons,
  FeatureWithTestimonial,
} = Feature;

const {
  CtaSimpleCentered,
  CtaSimpleStacked,
  CtaSimpleCenterdWithBrand,
  CtaSplitWithImage,
  CtaTwoColumnWithPhoto,
  CtaWithImageTiles,
} = CTA;

const {
  PricingThreeTiers,
  PricingTwoTiersEmphasis,
  PricingThreeTiersWithLogo,
  PricingSinglePriceWithDetails,
  PricingThreeTiersWithToggle,
  PricingThreeTiersComparisonTable,
} = Pricing;

const {
  HeaderSimple,
  HeaderWithStats,
  HeaderCentered,
  HeaderWithCards,
  HeaderSimpleWithBackground,
} = Header;

const {
  NewsletterSimple,
  NewsletterWithDetails,
  NewsletterSimpleBrandColor,
  NewsletterSimpleCard,
} = Newsletter;

const { StatsSimple, StatsSplitWithImage, StatsTimeline, StatsWithDescription } = Stats;

const {
  TestimonialsSingleCentered,
  TestimonialsSingleWithAvatar,
  TestimonialsWithBackgroundImage,
  TestimonialsTwoSideBySide,
  TestimonialsWithStarRating,
  TestimonialsGrid,
} = Testimonials;

const {
  BlogThreeColumn,
  BlogThreeColumnWithImages,
  BlogThreeColumnBackgroundImages,
  BlogSingleColumn,
  BlogSingleColumnWithImages,
  BlogWithFeaturedPost,
} = Blog;

const { ContactForm, ContactFormAndAddress } = Contact;

const {
  TeamWithSmallImages,
  TeamWithLargeImages,
  TeamGridWithRoundImages,
  TeamLargeGridWithCards,
  TeamWithVerticalImages,
  TeamFullWidthVerticalImages,
} = Team;

const {
  LogoCloudsSimple,
  LogoCloudsWithTestimonial,
  LogoCloudsLogoOnRight,
  LogoCloudsGrid,
} = LogoClouds;

const { FaqsSimple, FaqsWithAccordian } = FAQs;

const { FooterSimple, FooterFourColumn, FooterWithNewsletter } = Footer;

const { BentoGridThreeColumn, BentoGridTwoRow, BentoGridTwoRowWithThreeColumn } =
  BentoGrid;

const { ModalSingleAction, ModalTwoActions, ModalWithDismissButton } = Modal;

const { FormStacked, FormTwoColumns } = Form;

const {
  AlertsWithDescription,
  AlertsWithActions,
  AlertsWithDismissButton,
  AlertsWithLink,
} = Alerts;

const {
  TablesSimple,
  TablesStripedRows,
  TablesStackedMobileColumns,
  TablesWithStickyHeader,
  TablesWithVerticalLines,
  TablesWithSortableHeaders,
  TablesWithCheckboxes,
} = Tables;

const {
  BannerWithButton,
  BannerOnBrand,
  BannerWithLink,
  BannerBottomAligned,
  BannerFloatingAtBottom,
  BannerPrivacyNotice,
  BannerPrivacyFullWidth,
} = Banner;

const { BreadcrumbsSimple } = Breadcrumbs;

const {
  NavbarWithFlyoutMenu,
  NavbarBrandBackground,
  NavbarFullWidthFlyoutMenu,
  NavbarWithCenteredLogo,
} = Navbar;

const { ActionPanelsSimple, ActionPanelsWithInput, ActionPanelsWithToggle } =
  ActionPanels;

const {
  NotificationsSimple,
  NotificationsTwoButtons,
  NotificationsWithActions,
  NotificationsWithAvatar,
} = Notifications;

const { PaginationCenteredNumberPages, PaginationSimpleCardFooter } = Pagination;

const { TabsSimple, TabsWithBadges } = Tabs;

const { SearchSimple, SearchWithFooter, SearchWithPreview } = Search;

const {
  StackedListsFullWidth,
  StackedListsSimple,
  StackedListsWithBadgesButtonsAndActionMenu,
  StackedListsWithLinks,
  StackedListsWithLinksAndActionMenu,
} = StackedLists;

const {
  GridListsActionsWithSharedBorders,
  GridListsContactCards,
  GridListsImagesWithDetails,
  GridListsSimpleCards,
} = GridLists;

const { FeedsMultipleItemTypes, FeedsSimpleWithIcons, FeedsWithComments } = Feeds;

const {
  PageHeadingsActionsAndBreadcrumbs,
  PageHeadingsCardWithAvatarAndActions,
  PageHeadingsMetaAndActions,
  PageHeadingsWithAvatarAndActions,
  PageHeadingsWithBannerImage,
  PageHeadingsWithFilterAndActions,
  PageHeadingsWithLogoMetaAndActions,
} = PageHeadings;

const {
  SectionHeadingsSimple,
  SectionHeadingsWithActions,
  SectionHeadingsWithActionsAndTabs,
  SectionHeadingsWithBadgeAndDropdown,
  SectionHeadingsWithDescription,
  SectionHeadingsWithInlineTabs,
  SectionHeadingsWithLabel,
} = SectionHeadings;

const { SelectMenuAssignTo, SelectMenuSimple } = SelectMenu;

const {
  TogglesSimple,
  TogglesWithIcon,
  TogglesWithLabel,
  TogglesWithLabelAndDescription,
} = Toggles;

const {
  InputGroupsCreditCardInput,
  InputGroupsDisabledState,
  InputGroupsMoneyInput,
  InputGroupsPhoneInput,
  InputGroupsWithKeyboardShortcut,
  InputGroupsWithLabel,
  InputGroupsWithLabelAndHelpText,
  InputGroupsWithValidationError,
} = InputGroups;

const {
  RadioGroupCards,
  RadioGroupColorPicker,
  RadioGroupListInTable,
  RadioGroupNotificationSelection,
  RadioGroupStackedCards,
} = RadioGroup;

const { CheckboxesList, CheckboxesListWithHeading } = Checkboxes;

const { DividersWithButton, DividersWithLabel } = Dividers;

const { ProgressBarsBullets, ProgressBarsCircles, ProgressBarsLine } = ProgressBars;

const {
  CalendarsDayView,
  CalendarsDouble,
  CalendarsMonthView,
  CalendarsSideBySide,
  CalendarsSmallWithMeetings,
  CalendarsWeekView,
  CalendarsYearView,
} = Calendars;

const {
  CardHeadingsSimple,
  CardHeadingsWithActions,
  CardHeadingsWithAvatarAndActions,
  CardHeadingsWithAvatarMetaAndDropdown,
} = CardHeadings;

const {
  FlyoutMenuFullWidthTwoColumns,
  FlyoutMenuSimple,
  FlyoutMenuSimpleWithDescriptions,
  FlyoutMenuStackedWithFooterList,
  FlyoutMenuTwoColumns,
} = FlyoutMenu;

const { SignInCard, SignInSimple, SignInSplitScreen } = SignIn;

const { TextBlockThreeColumnWithImage, TextBlockTwoByTwo, TextBlockWithHeader } =
  TextBlock;

// Component sections with their components
const sections = [
  {
    name: "Hero",
    count: 1,
    components: [{ name: "Simple Centered", component: HeroSimpleCentered }],
  },
  {
    name: "Application UI",
    count: 4,
    components: [
      { name: "Simple Description List", component: ApplicationUiSimpleDescriptionList },
      { name: "With Avatar", component: ApplicationUiDescriptionListWithAvatar },
      { name: "In Card", component: ApplicationUiDescriptionListInCard },
      { name: "Simple V2", component: ApplicationUiSimpleDescriptionListV2 },
    ],
  },
  {
    name: "Feature",
    count: 5,
    components: [
      { name: "Simple", component: FeatureSimple },
      { name: "With Product Screenshot", component: FeatureWithProductScreenshot },
      { name: "With Large Screenshot", component: FeatureWithLargeScreenshot },
      { name: "Three Column With Icons", component: FeatureThreeColumnWithIcons },
      { name: "With Testimonial", component: FeatureWithTestimonial },
    ],
  },
  {
    name: "CTA",
    count: 6,
    components: [
      { name: "Simple Centered", component: CtaSimpleCentered },
      { name: "Simple Stacked", component: CtaSimpleStacked },
      { name: "Simple Centered With Brand", component: CtaSimpleCenterdWithBrand },
      { name: "Split With Image", component: CtaSplitWithImage },
      { name: "Two Column With Photo", component: CtaTwoColumnWithPhoto },
      { name: "With Image Tiles", component: CtaWithImageTiles },
    ],
  },
  {
    name: "Pricing",
    count: 6,
    components: [
      { name: "Three Tiers", component: PricingThreeTiers },
      { name: "Two Tiers Emphasis", component: PricingTwoTiersEmphasis },
      { name: "Three Tiers With Logo", component: PricingThreeTiersWithLogo },
      { name: "Single Price With Details", component: PricingSinglePriceWithDetails },
      { name: "Three Tiers With Toggle", component: PricingThreeTiersWithToggle },
      {
        name: "Three Tiers Comparison Table",
        component: PricingThreeTiersComparisonTable,
      },
    ],
  },
  {
    name: "Header",
    count: 5,
    components: [
      { name: "Simple", component: HeaderSimple },
      { name: "With Stats", component: HeaderWithStats },
      { name: "Centered", component: HeaderCentered },
      { name: "With Cards", component: HeaderWithCards },
      { name: "Simple With Background", component: HeaderSimpleWithBackground },
    ],
  },
  {
    name: "Newsletter",
    count: 4,
    components: [
      { name: "Simple", component: NewsletterSimple },
      { name: "With Details", component: NewsletterWithDetails },
      { name: "Simple Brand Color", component: NewsletterSimpleBrandColor },
      { name: "Simple Card", component: NewsletterSimpleCard },
    ],
  },
  {
    name: "Stats",
    count: 4,
    components: [
      { name: "Simple", component: StatsSimple },
      { name: "Split With Image", component: StatsSplitWithImage },
      { name: "Timeline", component: StatsTimeline },
      { name: "With Description", component: StatsWithDescription },
    ],
  },
  {
    name: "Testimonials",
    count: 6,
    components: [
      { name: "Single Centered", component: TestimonialsSingleCentered },
      { name: "Single With Avatar", component: TestimonialsSingleWithAvatar },
      { name: "With Background Image", component: TestimonialsWithBackgroundImage },
      { name: "Two Side By Side", component: TestimonialsTwoSideBySide },
      { name: "With Star Rating", component: TestimonialsWithStarRating },
      { name: "Grid", component: TestimonialsGrid },
    ],
  },
  {
    name: "Blog",
    count: 6,
    components: [
      { name: "Three Column", component: BlogThreeColumn },
      { name: "Three Column With Images", component: BlogThreeColumnWithImages },
      {
        name: "Three Column Background Images",
        component: BlogThreeColumnBackgroundImages,
      },
      { name: "Single Column", component: BlogSingleColumn },
      { name: "Single Column With Images", component: BlogSingleColumnWithImages },
      { name: "With Featured Post", component: BlogWithFeaturedPost },
    ],
  },
  {
    name: "Contact",
    count: 2,
    components: [
      { name: "Form", component: ContactForm },
      { name: "Form And Address", component: ContactFormAndAddress },
    ],
  },
  {
    name: "Team",
    count: 6,
    components: [
      { name: "With Small Images", component: TeamWithSmallImages },
      { name: "With Large Images", component: TeamWithLargeImages },
      { name: "Grid With Round Images", component: TeamGridWithRoundImages },
      { name: "Large Grid With Cards", component: TeamLargeGridWithCards },
      { name: "With Vertical Images", component: TeamWithVerticalImages },
      { name: "Full Width Vertical Images", component: TeamFullWidthVerticalImages },
    ],
  },
  {
    name: "Logo Clouds",
    count: 4,
    components: [
      { name: "Simple", component: LogoCloudsSimple },
      { name: "With Testimonial", component: LogoCloudsWithTestimonial },
      { name: "Logo On Right", component: LogoCloudsLogoOnRight },
      { name: "Grid", component: LogoCloudsGrid },
    ],
  },
  {
    name: "FAQs",
    count: 2,
    components: [
      { name: "Simple", component: FaqsSimple },
      { name: "With Accordion", component: FaqsWithAccordian },
    ],
  },
  {
    name: "Footer",
    count: 3,
    components: [
      { name: "Simple", component: FooterSimple },
      { name: "Four Column", component: FooterFourColumn },
      { name: "With Newsletter", component: FooterWithNewsletter },
    ],
  },
  {
    name: "Bento Grid",
    count: 3,
    components: [
      { name: "Three Column", component: BentoGridThreeColumn },
      { name: "Two Row", component: BentoGridTwoRow },
      { name: "Two Row With Three Column", component: BentoGridTwoRowWithThreeColumn },
    ],
  },
  {
    name: "Modal",
    count: 3,
    components: [
      { name: "Single Action", component: ModalSingleAction },
      { name: "Two Actions", component: ModalTwoActions },
      { name: "With Dismiss Button", component: ModalWithDismissButton },
    ],
  },
  {
    name: "Form",
    count: 2,
    components: [
      { name: "Stacked", component: FormStacked },
      { name: "Two Columns", component: FormTwoColumns },
    ],
  },
  {
    name: "Alerts",
    count: 4,
    components: [
      { name: "With Description", component: AlertsWithDescription },
      { name: "With Actions", component: AlertsWithActions },
      { name: "With Dismiss Button", component: AlertsWithDismissButton },
      { name: "With Link", component: AlertsWithLink },
    ],
  },
  {
    name: "Tables",
    count: 7,
    components: [
      { name: "Simple", component: TablesSimple },
      { name: "Striped Rows", component: TablesStripedRows },
      { name: "Stacked Mobile Columns", component: TablesStackedMobileColumns },
      { name: "With Sticky Header", component: TablesWithStickyHeader },
      { name: "With Vertical Lines", component: TablesWithVerticalLines },
      { name: "With Sortable Headers", component: TablesWithSortableHeaders },
      { name: "With Checkboxes", component: TablesWithCheckboxes },
    ],
  },
  {
    name: "Banner",
    count: 7,
    components: [
      { name: "With Button", component: BannerWithButton },
      { name: "On Brand", component: BannerOnBrand },
      { name: "With Link", component: BannerWithLink },
      { name: "Bottom Aligned", component: BannerBottomAligned },
      { name: "Floating At Bottom", component: BannerFloatingAtBottom },
      { name: "Privacy Notice", component: BannerPrivacyNotice },
      { name: "Privacy Full Width", component: BannerPrivacyFullWidth },
    ],
  },
  {
    name: "Breadcrumbs",
    count: 1,
    components: [{ name: "Simple", component: BreadcrumbsSimple }],
  },
  {
    name: "Navbar",
    count: 4,
    components: [
      { name: "With Flyout Menu", component: NavbarWithFlyoutMenu },
      { name: "Brand Background", component: NavbarBrandBackground },
      { name: "Full Width Flyout Menu", component: NavbarFullWidthFlyoutMenu },
      { name: "With Centered Logo", component: NavbarWithCenteredLogo },
    ],
  },
  {
    name: "Action Panels",
    count: 3,
    components: [
      { name: "Simple", component: ActionPanelsSimple },
      { name: "With Input", component: ActionPanelsWithInput },
      { name: "With Toggle", component: ActionPanelsWithToggle },
    ],
  },
  {
    name: "Notifications",
    count: 4,
    components: [
      { name: "Simple", component: NotificationsSimple },
      { name: "Two Buttons", component: NotificationsTwoButtons },
      { name: "With Actions", component: NotificationsWithActions },
      { name: "With Avatar", component: NotificationsWithAvatar },
    ],
  },
  {
    name: "Pagination",
    count: 2,
    components: [
      { name: "Centered Number Pages", component: PaginationCenteredNumberPages },
      { name: "Simple Card Footer", component: PaginationSimpleCardFooter },
    ],
  },
  {
    name: "Tabs",
    count: 2,
    components: [
      { name: "Simple", component: TabsSimple },
      { name: "With Badges", component: TabsWithBadges },
    ],
  },
  {
    name: "Search",
    count: 3,
    components: [
      { name: "Simple", component: SearchSimple },
      { name: "With Footer", component: SearchWithFooter },
      { name: "With Preview", component: SearchWithPreview },
    ],
  },
  {
    name: "Stacked Lists",
    count: 5,
    components: [
      { name: "Full Width", component: StackedListsFullWidth },
      { name: "Simple", component: StackedListsSimple },
      {
        name: "With Badges Buttons And Action Menu",
        component: StackedListsWithBadgesButtonsAndActionMenu,
      },
      { name: "With Links", component: StackedListsWithLinks },
      {
        name: "With Links And Action Menu",
        component: StackedListsWithLinksAndActionMenu,
      },
    ],
  },
  {
    name: "Grid Lists",
    count: 4,
    components: [
      {
        name: "Actions With Shared Borders",
        component: GridListsActionsWithSharedBorders,
      },
      { name: "Contact Cards", component: GridListsContactCards },
      { name: "Images With Details", component: GridListsImagesWithDetails },
      { name: "Simple Cards", component: GridListsSimpleCards },
    ],
  },
  {
    name: "Feeds",
    count: 3,
    components: [
      { name: "Multiple Item Types", component: FeedsMultipleItemTypes },
      { name: "Simple With Icons", component: FeedsSimpleWithIcons },
      { name: "With Comments", component: FeedsWithComments },
    ],
  },
  {
    name: "Page Headings",
    count: 7,
    components: [
      { name: "Actions And Breadcrumbs", component: PageHeadingsActionsAndBreadcrumbs },
      {
        name: "Card With Avatar And Actions",
        component: PageHeadingsCardWithAvatarAndActions,
      },
      { name: "Meta And Actions", component: PageHeadingsMetaAndActions },
      { name: "With Avatar And Actions", component: PageHeadingsWithAvatarAndActions },
      { name: "With Banner Image", component: PageHeadingsWithBannerImage },
      { name: "With Filter And Actions", component: PageHeadingsWithFilterAndActions },
      {
        name: "With Logo Meta And Actions",
        component: PageHeadingsWithLogoMetaAndActions,
      },
    ],
  },
  {
    name: "Section Headings",
    count: 7,
    components: [
      { name: "Simple", component: SectionHeadingsSimple },
      { name: "With Actions", component: SectionHeadingsWithActions },
      { name: "With Actions And Tabs", component: SectionHeadingsWithActionsAndTabs },
      { name: "With Badge And Dropdown", component: SectionHeadingsWithBadgeAndDropdown },
      { name: "With Description", component: SectionHeadingsWithDescription },
      { name: "With Inline Tabs", component: SectionHeadingsWithInlineTabs },
      { name: "With Label", component: SectionHeadingsWithLabel },
    ],
  },
  {
    name: "Select Menu",
    count: 2,
    components: [
      { name: "Assign To", component: SelectMenuAssignTo },
      { name: "Simple", component: SelectMenuSimple },
    ],
  },
  {
    name: "Toggles",
    count: 4,
    components: [
      { name: "Simple", component: TogglesSimple },
      { name: "With Icon", component: TogglesWithIcon },
      { name: "With Label", component: TogglesWithLabel },
      { name: "With Label And Description", component: TogglesWithLabelAndDescription },
    ],
  },
  {
    name: "Input Groups",
    count: 8,
    components: [
      { name: "Credit Card Input", component: InputGroupsCreditCardInput },
      { name: "Disabled State", component: InputGroupsDisabledState },
      { name: "Money Input", component: InputGroupsMoneyInput },
      { name: "Phone Input", component: InputGroupsPhoneInput },
      { name: "With Keyboard Shortcut", component: InputGroupsWithKeyboardShortcut },
      { name: "With Label", component: InputGroupsWithLabel },
      { name: "With Label And Help Text", component: InputGroupsWithLabelAndHelpText },
      { name: "With Validation Error", component: InputGroupsWithValidationError },
    ],
  },
  {
    name: "Radio Group",
    count: 5,
    components: [
      { name: "Cards", component: RadioGroupCards },
      { name: "Color Picker", component: RadioGroupColorPicker },
      { name: "List In Table", component: RadioGroupListInTable },
      { name: "Notification Selection", component: RadioGroupNotificationSelection },
      { name: "Stacked Cards", component: RadioGroupStackedCards },
    ],
  },
  {
    name: "Checkboxes",
    count: 2,
    components: [
      { name: "List", component: CheckboxesList },
      { name: "List With Heading", component: CheckboxesListWithHeading },
    ],
  },
  {
    name: "Dividers",
    count: 2,
    components: [
      { name: "With Button", component: DividersWithButton },
      { name: "With Label", component: DividersWithLabel },
    ],
  },
  {
    name: "Progress Bars",
    count: 3,
    components: [
      { name: "Bullets", component: ProgressBarsBullets },
      { name: "Circles", component: ProgressBarsCircles },
      { name: "Line", component: ProgressBarsLine },
    ],
  },
  {
    name: "Calendars",
    count: 7,
    components: [
      { name: "Day View", component: CalendarsDayView },
      { name: "Double", component: CalendarsDouble },
      { name: "Month View", component: CalendarsMonthView },
      { name: "Side By Side", component: CalendarsSideBySide },
      { name: "Small With Meetings", component: CalendarsSmallWithMeetings },
      { name: "Week View", component: CalendarsWeekView },
      { name: "Year View", component: CalendarsYearView },
    ],
  },
  {
    name: "Card Headings",
    count: 4,
    components: [
      { name: "Simple", component: CardHeadingsSimple },
      { name: "With Actions", component: CardHeadingsWithActions },
      { name: "With Avatar And Actions", component: CardHeadingsWithAvatarAndActions },
      {
        name: "With Avatar Meta And Dropdown",
        component: CardHeadingsWithAvatarMetaAndDropdown,
      },
    ],
  },
  {
    name: "Flyout Menu",
    count: 5,
    components: [
      { name: "Full Width Two Columns", component: FlyoutMenuFullWidthTwoColumns },
      { name: "Simple", component: FlyoutMenuSimple },
      { name: "Simple With Descriptions", component: FlyoutMenuSimpleWithDescriptions },
      { name: "Stacked With Footer List", component: FlyoutMenuStackedWithFooterList },
      { name: "Two Columns", component: FlyoutMenuTwoColumns },
    ],
  },
  {
    name: "Sign In",
    count: 3,
    components: [
      { name: "Card", component: SignInCard },
      { name: "Simple", component: SignInSimple },
      { name: "Split Screen", component: SignInSplitScreen },
    ],
  },
  {
    name: "Text Block",
    count: 3,
    components: [
      { name: "Three Column With Image", component: TextBlockThreeColumnWithImage },
      { name: "Two By Two", component: TextBlockTwoByTwo },
      { name: "With Header", component: TextBlockWithHeader },
    ],
  },
];

const totalComponents = sections.reduce((sum, section) => sum + section.count, 0);

export default function TestComponentsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Component Library Test</h1>
        <p className="text-gray-600 mb-2">Testing imported Tailwind UI components</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
            ✅ {totalComponents} Components Working
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
            📁 {sections.length} Sections
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
            🎉 Complete Tailwind UI Library Imported!
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8 px-6 overflow-x-auto">
          {sections.map((section, index) => (
            <button
              key={section.name}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === index
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {section.name} ({section.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="px-6">
        {sections.map((section, sectionIndex) => (
          <div
            key={section.name}
            className={activeTab === sectionIndex ? "block" : "hidden"}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{section.name}</h2>
              <p className="text-gray-600">{section.count} components in this section</p>
            </div>

            <div className="space-y-12">
              {section.components.map((comp, compIndex) => {
                const Component = comp.component;
                return (
                  <div
                    key={compIndex}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">{comp.name}</h3>
                    </div>
                    <div className="p-6 bg-white">
                      <Component />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind Test */}
      <div className="mt-12 p-6 border-t border-gray-200">
        <div className="bg-red-500 text-white p-4 rounded-lg">
          <strong>Tailwind CSS Test:</strong> This should be red with white text
        </div>
      </div>
    </div>
  );
}
