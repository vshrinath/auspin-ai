/**
 * Generate sitemap.xml for static export
 * This script creates a sitemap for the AUSPIN website
 */

const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://auspin.ai';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Define all pages in the site
const pages = [
  {
    url: '/',
    changefreq: 'monthly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at:', OUTPUT_PATH);
    console.log(`📄 Generated ${pages.length} URL(s)`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
writeSitemap();
