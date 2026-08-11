import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = process.env.SITE_URL || 'https://w3ecommerce.com.br'
const today = new Date().toISOString().split('T')[0]

const pages = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const outputPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outputPath, sitemap, 'utf-8')
console.log(`✅ sitemap.xml gerado em ${outputPath}`)
