import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LangProvider } from '@/i18n'

import '../styles.css'

const siteName = 'Curio Solutions — Workflow Automation, Websites & Custom Apps'
const siteDescription =
  'Curio Solutions automates business workflows, designs custom websites, and develops personalized applications.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { name: 'google', content: 'notranslate' }, // Makes it so google doesn't translate.
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [{ rel: 'icon', type: 'image/svg+xml', href: `${import.meta.env.BASE_URL}favicon.svg` }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" translate="no">
      <head>
        <HeadContent />
      </head>
      <body>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
        <Scripts />
      </body>
    </html>
  )
}
