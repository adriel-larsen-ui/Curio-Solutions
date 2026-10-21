// GitHub Pages post-build: add a 404 page and disable Jekyll.
import { copyFileSync, writeFileSync, existsSync } from 'node:fs'

const out = 'dist/client'
if (!existsSync(`${out}/index.html`)) {
  console.error(`Expected ${out}/index.html but it was not generated. Check the prerender config.`)
  process.exit(1)
}
copyFileSync(`${out}/index.html`, `${out}/404.html`)
writeFileSync(`${out}/.nojekyll`, '')
console.log('Added 404.html and .nojekyll')
