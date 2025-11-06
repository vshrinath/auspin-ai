# AUSPIN Ventures - Polished One-Page Site

A modern, polished one-page website for AUSPIN Ventures built with Next.js and Tailwind CSS, showcasing their AI strategic execution services.

## Features

- **Modern Hero Section** - Compelling value proposition with smooth navigation
- **Problem Statement** - Clear articulation of the "Pilot Purgatory" challenge
- **Services Overview** - Complete execution cycle from strategy to scaling
- **Method Showcase** - Sprint-based approach with proven frameworks
- **Deliverables** - Board-ready outcomes and tangible results
- **Team Profiles** - Practitioner-led expertise and credentials
- **Contact Form** - Lead generation with regional focus
- **Responsive Design** - Mobile-first, works on all devices
- **Static Generation** - Perfect for Cloudflare Pages hosting

## Technology Stack

- **Next.js 16** - React framework with static generation
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Cloudflare Pages

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages:**
   - Connect your repository to Cloudflare Pages
   - Set build command: `npm run build`
   - Set build output directory: `out` (if using static export) or `.next` (for standard build)
   - Deploy!

## Content Structure

The site follows the original content structure from your Astro/MDX files:

1. **Hero** - Strategic execution partner positioning
2. **Problem** - Pilot Purgatory and enterprise AI failure loop
3. **Services** - Full execution cycle coverage
4. **Method** - Sprint-based frameworks and approach
5. **Outcomes** - Board-ready deliverables
6. **Team** - Practitioner advantage and expertise
7. **Contact** - Regional focus and lead generation

## Customization

- Update content in `/src/components/` files
- Modify styling in Tailwind classes
- Add team photos to `/public/team/` directory
- Update metadata in `/src/app/layout.tsx`

## Performance

- Static generation for fast loading
- Optimized images and assets
- Mobile-first responsive design
- SEO-friendly structure and metadata