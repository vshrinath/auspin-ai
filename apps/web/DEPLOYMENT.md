# AUSPIN Website Deployment Guide

## Overview

The AUSPIN website is built as a static Next.js application optimized for deployment to Cloudflare Pages or any static hosting provider.

## Build Process

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- All dependencies installed (`npm install`)

### Build Commands

#### Development Build
```bash
npm run dev
```
Starts the development server at http://localhost:3000 with hot reloading.

#### Production Build
```bash
npm run build
```
Creates an optimized production build with:
- Sitemap generation
- Static HTML export
- CSS optimization and purging
- JavaScript minification
- Code splitting
- Tree shaking

#### Export Static Files
```bash
npm run export
```
Generates static HTML files in the `out` directory ready for deployment.

#### Preview Build Locally
```bash
npm run serve:export
```
Builds and serves the static export locally for testing.

### Build Output

The build process generates:
- **Static HTML files**: All pages pre-rendered as HTML
- **Optimized assets**: Minified CSS and JavaScript
- **Sitemap**: `public/sitemap.xml` for SEO
- **Static resources**: Images, fonts, and downloads

Output directory: `./out`

## Deployment

### Cloudflare Pages (Recommended)

#### Automatic Deployment (Git Integration)

1. **Connect Repository**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect your Git repository

2. **Configure Build Settings**
   ```
   Build command: npm run export
   Build output directory: out
   Root directory: apps/web
   Node version: 18
   ```

3. **Environment Variables**
   ```
   NODE_ENV=production
   ```

4. **Deploy**
   - Push to main branch for production deployment
   - Push to other branches for preview deployments

#### Manual Deployment

```bash
# Build the site
npm run export

# Deploy using Wrangler CLI
npx wrangler pages publish out --project-name=auspin-website
```

### Other Static Hosts

The static export in `./out` can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `out` folder or use Netlify CLI
- **AWS S3 + CloudFront**: Upload `out` folder to S3 bucket
- **GitHub Pages**: Copy `out` contents to gh-pages branch
- **Any static host**: Upload `out` folder contents

## Performance Optimizations

### Implemented Optimizations

✅ **Static Export**: Zero server-side runtime, pure HTML/CSS/JS
✅ **Code Splitting**: Dynamic imports for below-fold sections
✅ **CSS Optimization**: Tailwind purge + cssnano minification
✅ **Tree Shaking**: Unused code automatically removed
✅ **Sitemap Generation**: SEO-optimized sitemap.xml
✅ **Console Log Removal**: Production builds strip console logs

### Performance Targets

- Lighthouse Performance Score: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Total Bundle Size: <200KB (gzipped)

## Content Updates

### Updating Website Content

1. **Edit Content Files**
   - Navigate to `src/content/`
   - Edit TypeScript files (e.g., `hero.ts`, `services.ts`)
   - TypeScript provides type safety and autocomplete

2. **Verify Changes**
   ```bash
   npm run dev
   ```
   Preview changes at http://localhost:3000

3. **Type Check**
   ```bash
   npm run type-check
   ```
   Ensures content matches TypeScript interfaces

4. **Build and Deploy**
   ```bash
   npm run export
   ```
   Rebuild the site with updated content

### Content File Structure

```
src/content/
├── hero.ts              # Hero section content
├── reality-check.ts     # Reality check statistics
├── differentiation.ts   # Differentiators
├── approach.ts          # Approach principles
├── services.ts          # Service offerings
├── outcomes.ts          # Outcome categories
├── process.ts           # Sprint process
├── team.ts              # Team members
├── social-proof.ts      # Testimonials
├── qualification.ts     # Qualifiers/disqualifiers
├── footer.ts            # Footer content
└── types.ts             # TypeScript interfaces
```

## Troubleshooting

### Build Fails

**Issue**: Build fails with TypeScript errors
**Solution**: Run `npm run type-check` to identify type errors in content files

**Issue**: Build fails with "Module not found"
**Solution**: Run `npm install` to ensure all dependencies are installed

### Deployment Issues

**Issue**: Site doesn't load after deployment
**Solution**: Verify `output: 'export'` is set in `next.config.ts`

**Issue**: Images not loading
**Solution**: Ensure `images.unoptimized: true` in `next.config.ts` for static export

**Issue**: 404 errors on routes
**Solution**: Configure hosting provider to serve `index.html` for all routes

### Performance Issues

**Issue**: Large bundle size
**Solution**: Check dynamic imports are working, run `npm run build` and review output

**Issue**: Slow page load
**Solution**: Verify code splitting is enabled, check network tab for large assets

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run export
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: auspin-website
          directory: out
```

## Monitoring

### Post-Deployment Checks

- [ ] Verify homepage loads correctly
- [ ] Test all section navigation
- [ ] Submit contact form (test mode)
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Verify sitemap.xml is accessible
- [ ] Test download links

### Analytics

Monitor these metrics:
- Page load times
- Core Web Vitals (LCP, FID, CLS)
- Form submission rates
- Download conversion rates
- Bounce rates by section

## Support

For deployment issues or questions:
- Check Next.js static export docs: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Check Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Review build logs for specific error messages
