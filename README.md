# Curio Solutions Website

The marketing website for **Curio Solutions**, a company offering business workflow automation, custom website design, and personalized application development.

## Pages

- **Home**: hero, service overview, featured projects, how we work, and a call to action
- **Projects**: the portfolio of completed work, filterable by category
- **Services**: detailed descriptions of each service
- **About**: company story and values
- **Contact**: an inquiry form (sent via Formspree)

## Adding a completed project

Open `src/data/projects.ts`, copy one of the entries, and fill in your details. The three entries there now are examples, so replace them with your own projects. To add a photo, put the image in `public/img/` and set `image: '/img/your-file.jpg'`. Set `featured: true` to show a project on the Home page (up to three appear there).

Service copy lives in `src/data/services.ts`.

## Tech stack

- TanStack Start (React 19) with file-based routing
- Tailwind CSS v4
- lucide-react icons
- Static prerendering for GitHub Pages; Formspree for contact submissions

## Running locally

```bash
pnpm install
pnpm dev          # dev server on :3000
pnpm build        # static site -> dist/client
pnpm preview
```

## Deploying to GitHub Pages

No local build is needed: GitHub builds and publishes the site for you.

1. Create a new GitHub repository and upload everything in this folder to its `main` branch (including the hidden `.github` folder).
2. In the repo go to **Settings -> Pages -> Build and deployment -> Source** and choose **GitHub Actions**.
3. Open the **Actions** tab. The "Deploy to GitHub Pages" workflow runs on each push to `main` (use "Run workflow" to start it manually). When it turns green, the site is live at `https://<your-username>.github.io/<repo-name>/`.
4. Contact form: submissions go to Formspree (`xqpevrww`). The first time you submit a test message, Formspree emails you to confirm the form.

Custom domain: add it under Settings -> Pages, then set `BASE_PATH: /` in `.github/workflows/deploy.yml`.
