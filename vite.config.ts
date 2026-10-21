import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages "project sites" are served from /<repo-name>/, so the build needs
// a base path. The GitHub Actions workflow sets BASE_PATH automatically.
// Leave it unset for a user site (<user>.github.io) or a custom domain.
const base = process.env.BASE_PATH ?? '/'

const config = defineConfig({
  base,
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Render every page to plain HTML at build time -> static files in dist/client
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      pages: [
        { path: '/' },
        { path: '/projects' },
        { path: '/services' },
        { path: '/about' },
        { path: '/contact' },
      ],
    }),
    viteReact(),
  ],
})

export default config
