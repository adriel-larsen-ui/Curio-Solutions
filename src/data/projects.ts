/**
 * Completed projects shown on the Home and Projects pages.
 *
 * To add a project, copy one of the entries below, give it a unique `id`,
 * and fill in your details. Projects appear in the order listed here.
 *
 * `image` is optional: drop a file into `public/img/` and set
 * `image: '/img/your-file.jpg'`. Without an image, a branded gradient
 * card is shown instead.
 */

export type ProjectCategory = 'Automation' | 'Website' | 'Application'

export interface Project {
  id: string
  title: string
  client: string
  category: ProjectCategory
  year: number
  summary: string
  results: Array<string>
  tags: Array<string>
  image?: string
  link?: string
  featured?: boolean
}

// Example entries — replace these with your own completed work.
const projects: Array<Project> = [
  {
    id: 'invoice-autopilot',
    title: 'Invoice Autopilot',
    client: 'Example: Regional Logistics Co.',
    category: 'Automation',
    year: 2026,
    summary:
      'Connected the order system, accounting software, and email so invoices are generated, sent, and reconciled automatically.',
    results: ['15+ hours saved per week', 'Invoice errors cut to near zero'],
    tags: ['Workflow', 'Integrations', 'Accounting'],
    featured: true,
  },
  {
    id: 'harbor-studio-site',
    title: 'Harbor Studio Website',
    client: 'Example: Harbor Design Studio',
    category: 'Website',
    year: 2026,
    summary:
      'A portfolio-forward website redesign with a self-managed blog, booking form, and lightning-fast load times.',
    results: ['2× more inquiry form submissions', '98 Lighthouse performance'],
    tags: ['Design', 'CMS', 'SEO'],
    featured: true,
  },
  {
    id: 'field-crew-app',
    title: 'Field Crew Companion',
    client: 'Example: Summit Home Services',
    category: 'Application',
    year: 2025,
    summary:
      'A mobile-friendly app for technicians to view jobs, capture photos, collect signatures, and sync everything back to the office.',
    results: ['Paperwork eliminated in the field', 'Same-day job closeout'],
    tags: ['Mobile', 'Dashboards', 'Offline-ready'],
    featured: true,
  },
]

export default projects
