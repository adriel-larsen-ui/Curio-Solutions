# Curio Solutions website: agent notes

A marketing site for Curio Solutions (workflow automation, custom websites, personalized apps). It is built with TanStack Start, React 19, and Tailwind v4, and deployed on Netlify.

## Structure

- `src/routes/`: one file per page: `index` (Home), `projects`, `services`, `about`, `contact`. `__root.tsx` holds the site metadata and wraps every page in `Header` and `Footer`.
- `src/data/projects.ts`: **the content the owner edits** to add completed projects. `image` is optional; without one, a gradient card with a category icon is shown. `featured` controls which projects appear on Home (first 3).
- `src/data/services.ts`: copy for the three services. `id` values double as anchor hashes on `/services`.
- `src/components/`: `Header` (nav items + mobile menu), `Footer`, `Logo`/`LogoMark` (inline SVG gradient logo), `ProjectCard`, `ServiceIcon`, `PageHeader`, `CallToAction`, `ContactForm`.
- `public/favicon.svg`: the logo mark. `public/contact-form.html`: the hidden Netlify Forms registration form.

## Conventions and decisions

- Brand gradient is `linear-gradient(135deg, #00bcd4, #0066ff)`. Use the `.bg-brand` / `.text-brand` classes in `src/styles.css` rather than repeating it inline.
- Nav buttons use `.nav-btn`. A `::before` gradient layer fades in on hover/focus and when the `active` class is applied (via TanStack `activeProps`). The Projects filter reuses this class.
- Theme tokens (`ink`, `ink-soft`, `mist`, `cyan-brand`, `blue-brand`, `font-display`) are defined in the `@theme` block of `src/styles.css`.
- Fonts: Sora (headings) + Manrope (body), loaded from Google Fonts.
- Contact form: Netlify Forms. Its fields must stay in sync between `ContactForm.tsx` and `public/contact-form.html`. Submissions POST to `/contact-form.html` (not `/`, which the SSR handler owns).
- Project images go through Netlify Image CDN (`/.netlify/images?url=...&w=800&fm=webp`).
