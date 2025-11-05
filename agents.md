# 🧩 Salient Platform Architecture Context

The platform operates as a multi-app monorepo designed for modular development, content, and UI reuse across front-end and back-end layers.

## Active Workspaces

- `apps/web` → Next.js + Shadcn + Tailwind → Dynamic app interface
- `apps/docs` → Astro + MDX → Content and documentation site
- `apps/api` → FastAPI → Backend logic and data APIs
- Shared UI components → `apps/web/src/components/ui`
- Shared design documentation → Storybook (`npm run storybook --workspace web`)

## Agent Awareness Guidelines

1. Treat the shared component library as the single source of truth for all UI.
2. Assume both Astro and Next.js consume these components via imports.
3. Keep backend schemas compatible across TypeScript (frontend) and Pydantic (backend).
4. Always specify which workspace a file belongs to (web, docs, or api), as identical filenames may exist across apps.

---

## 🧰 Tooling and Workspace Awareness

Agents operate within a unified Turborepo-compatible build system. Each app runs independently using workspace commands:

| Workspace | Purpose                              | Framework |
| --------- | ------------------------------------ | --------- |
| web       | Application UI, dashboards, portals  | Next.js   |
| docs      | Static MDX content and documentation | Astro     |
| api       | Backend data and logic services      | FastAPI   |
| storybook | Component documentation and previews | Storybook |

### Best Practices

- Verify target workspace before writing or editing code (web, docs, api).
- Do not mix dependencies between environments (e.g., importing React into `apps/api`).
- Use shared UI components whenever visual consistency is needed.
- Prefer environment-specific configuration files (`tailwind.config`, `astro.config`, etc.) over global overrides.

---

## 🧠 Architectural Awareness for Developer and Architect Agents

When reasoning about features or components:

- Astro → content-first (static, MDX, text-heavy)
- Next.js → app-first (interactive, dynamic, data-driven)
- Storybook → dev-only environment for UI previews and QA
- FastAPI → backend logic, AI, and API integration

**Design Principle:** Build modularly — any component in `apps/web` should remain usable by `apps/docs` without refactoring.

Agents should collaborate around this architecture:

- `@arch` defines data and component boundaries.
- `@dev` implements workspace-specific logic.
- `@design` references Storybook for visual consistency.
- `@api` or `@ops` extend backend and integration logic.

Together, this ensures code generation and reasoning stay consistent across the Salient Platform’s multi-app ecosystem.

---

## 🏗️ Page & Application Composition Guidelines

### Tailwind UI Component Library Context

The platform includes a comprehensive Tailwind UI component library with 200+ components across 45+ sections. Components are production-ready and can be composed into complete pages and applications.

**Available Component Categories:**

- **Navigation**: Headers, Navbars, Breadcrumbs, Footers
- **Content**: Hero sections, Features, Blog layouts, Team pages
- **Interactive**: Forms, Modals, Search, Notifications, Tabs
- **Data Display**: Tables, Stats, Feeds, Calendars, Progress bars
- **Layout**: Grid lists, Stacked lists, Dividers, Page headings
- **Business**: Pricing, CTAs, Testimonials, Logo clouds, Sign in

**Component Library Location**: `packages/ui/components/patterns/`
**Import Pattern**: `import { Hero, Header, Footer, Blog } from "@salient/ui"`
**Test Page**: Available at `/test-components` to browse all components

### Page Composition Workflow

When building pages/applications from component descriptions, agents should:

**1. Component Selection & Mapping**

- Analyze the page description to identify required components
- Map user requirements to available component categories
- Select specific component variants that best fit the use case
- Identify any missing components that need custom development

**2. API Requirements Analysis**

- Determine what data each component needs
- Identify CRUD operations required
- Suggest API endpoints and data structures
- Consider authentication and authorization needs
- Plan for real-time updates if needed

**3. Page Architecture Design**

- Create component hierarchy and layout structure
- Plan state management and data flow
- Design responsive behavior and mobile experience
- Consider SEO and performance implications

**4. Implementation Strategy**

- Use Next.js App Router for new pages (`apps/web/src/app/`)
- Leverage existing components with minimal customization
- Create data fetching logic and API integration
- Implement proper error handling and loading states

### Missing Component Handling

**When Required Components Don't Exist:**

- Identify gaps in the current component library
- Suggest specific components that should be added
- Recommend similar existing components as temporary alternatives
- Provide component specifications for future development
- Consider if existing components can be modified to meet needs

**Component Suggestion Format:**

- **Missing Component**: [ComponentName]
- **Purpose**: [What it should do]
- **Similar To**: [Existing component it resembles]
- **Key Features**: [Specific functionality needed]
- **Priority**: [High/Medium/Low based on use case]

### Page Development Patterns

**Typical Page Structure:**

```tsx
// apps/web/src/app/{page-name}/page.tsx
import { Header, Hero, Blog, Footer } from "@salient/ui";

export default function BlogPage() {
  return (
    <>
      <Header {...headerProps} />
      <Hero {...heroProps} />
      <Blog {...blogProps} />
      <Footer {...footerProps} />
    </>
  );
}
```

**API Integration Pattern:**

```tsx
// Data fetching with Next.js App Router
async function getBlogData() {
  const res = await fetch("/api/blog");
  return res.json();
}

export default async function BlogPage() {
  const blogData = await getBlogData();
  return <Blog posts={blogData.posts} />;
}
```

### Development Approach

**Page Analysis**: Analyze requirements and select appropriate components
**Implementation**: Build pages using existing components with proper data integration
**API Design**: Create backend APIs and data models to support component needs
**Validation**: Test functionality, responsive design, and performance

### API Design Guidelines

When suggesting APIs for page compositions:

**RESTful Patterns:**

- `GET /api/{resource}` - List/fetch data
- `POST /api/{resource}` - Create new items
- `PUT /api/{resource}/{id}` - Update existing items
- `DELETE /api/{resource}/{id}` - Remove items

**Data Structure Considerations:**

- Match component prop requirements
- Include metadata (pagination, timestamps, etc.)
- Plan for filtering, sorting, and search
- Consider caching and performance needs

**Authentication & Authorization:**

- Identify protected routes and data
- Plan user roles and permissions
- Consider session management needs

### Example Page Composition Request

**User Request**: "I want a blog page with a header, hero section, list of blog posts, and footer"

**Agent Response Should Include:**

1. **Component Selection**: Header (HeaderSimple), Hero (HeroSimpleCentered), Blog (BlogThreeColumn), Footer (FooterSimple)
2. **API Requirements**:
   - `GET /api/blog/posts` - Fetch blog posts
   - `GET /api/blog/posts/{slug}` - Individual post data
3. **Data Structure**: Post schema with title, excerpt, author, date, image
4. **Implementation Plan**: Next.js page with server-side data fetching

**Example with Missing Components:**

**User Request**: "I want an e-commerce product page with image gallery, product details, reviews, and related products"

**Agent Response:**

1. **Available Components**: Header, Footer, Stats (for ratings)
2. **Missing Components Needed**:
   - **ImageGallery**: Product image carousel with thumbnails
   - **ProductDetails**: Price, variants, add to cart functionality
   - **ReviewsSection**: Customer reviews with ratings and pagination
   - **RelatedProducts**: Horizontal scrolling product recommendations
3. **Temporary Alternatives**: Use existing Grid lists for related products, Testimonials for reviews
4. **API Requirements**: Product data, reviews, recommendations endpoints

This enables rapid prototyping while identifying component library gaps for future development.
