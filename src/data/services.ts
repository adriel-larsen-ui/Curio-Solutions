export type ServiceIcon = 'workflow' | 'web' | 'app'
import { useLang, Bilingual } from '@/i18n'

export interface Service {
  id: string
  icon: ServiceIcon
  title: Bilingual
  tagline: string
  description: string
  features: Array<string>
}

const services: Array<Service> = [
  {
    id: 'automation',
    icon: 'workflow',
    title: { en: 'Business Workflow Automation', es: 'Automatizacion de Flujo Laboral'},
    tagline: { en: 'Give your team back the hours lost to repetitive work.', en: 'Devuélvale a su equipo las horas perdidas durante trabajo repetitivo'},
    description:
    { en: 'We map how work actually gets done through your business, then connect your tools so data flows on its own — lead intake, invoicing, reporting, and more!.', es: 'Mapeamos como el trabajo se hacen en su negocio, y lo conectamos con las herramientas que necesita para automatizarlo — admisión de clientes, recibos, reportes, y más!'
    features: [
      'Process mapping & bottleneck analysis',
      'Integrations between CRMs, spreadsheets, email & accounting',
      'Automated reports, alerts & approvals',
      'Ongoing monitoring and refinement',
    ],
  },
  {
    id: 'web-design',
    icon: 'web',
    title: 'Custom Website Design',
    tagline: 'A website that looks like you and works for you.',
    description:
      'Hand-crafted, fast, and mobile-first websites designed around your brand and your customers — no cookie-cutter themes.',
    features: [
      'Brand-aligned visual design',
      'Responsive, accessible, SEO-ready builds',
      'Content management you can update yourself',
      'Hosting, analytics & performance tuning',
    ],
  },
  {
    id: 'applications',
    icon: 'app',
    title: 'Personalized Applications',
    tagline: 'Software shaped around the way you work.',
    description:
      'When off-the-shelf software doesn’t fit, we design and develop web and mobile applications built specifically for your workflow, customers, and goals.',
    features: [
      'Discovery workshops & prototyping',
      'Web, mobile & internal tools',
      'Secure user accounts & dashboards',
      'Launch support and long-term maintenance',
    ],
  },
]

export default services
