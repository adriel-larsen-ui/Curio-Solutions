import type { Bilingual } from '@/i18n'

export type ServiceIcon = 'workflow' | 'web' | 'app'

export interface Service {
  id: string
  icon: ServiceIcon
  tag: Bilingual
  title: Bilingual
  tagline: Bilingual
  description: Bilingual
  features: Array<Bilingual>
}

const services: Array<Service> = [
  {
    id: 'automation',
    icon: 'workflow',
    tag: { en: 'Automation', es: 'Automatización' },
    title: { en: 'Business Workflow Automation', es: 'Automatización de procesos empresariales' },
    tagline: {
      en: 'Give your team back the hours lost to repetitive work.',
      es: 'Devuelva a su equipo las horas perdidas en tareas repetitivas.',
    },
    description: {
      en: 'We map how work actually moves through your business, then connect your tools so data flows on its own — from lead intake and invoicing to reporting and approvals.',
      es: 'Analizamos cómo se mueve realmente el trabajo en su empresa y luego conectamos sus herramientas para que los datos fluyan solos: desde la captación de clientes y la facturación hasta los informes y las aprobaciones.',
    },
    features: [
      { en: 'Process mapping & bottleneck analysis', es: 'Mapeo de procesos y análisis de cuellos de botella' },
      { en: 'Integrations between CRMs, spreadsheets, email & accounting', es: 'Integraciones entre CRM, planillas de cálculo, correo y contabilidad' },
      { en: 'Automated reports, alerts & approvals', es: 'Informes, alertas y aprobaciones automáticas' },
      { en: 'Ongoing monitoring and refinement', es: 'Monitoreo y mejora continuos' },
    ],
  },
  {
    id: 'web-design',
    icon: 'web',
    tag: { en: 'Web design', es: 'Diseño web' },
    title: { en: 'Custom Website Design', es: 'Diseño de sitios web a medida' },
    tagline: {
      en: 'A website that looks like you and works for you.',
      es: 'Un sitio web que lo representa y trabaja para usted.',
    },
    description: {
      en: 'Hand-crafted, fast, and mobile-first websites designed around your brand and your customers — no cookie-cutter themes.',
      es: 'Sitios web artesanales, rápidos y pensados primero para móviles, diseñados en torno a su marca y a sus clientes, sin plantillas genéricas.',
    },
    features: [
      { en: 'Brand-aligned visual design', es: 'Diseño visual alineado con su marca' },
      { en: 'Responsive, accessible, SEO-ready builds', es: 'Sitios adaptables, accesibles y optimizados para SEO' },
      { en: 'Content management you can update yourself', es: 'Gestión de contenido que usted mismo puede actualizar' },
      { en: 'Hosting, analytics & performance tuning', es: 'Hosting, analíticos y optimización del rendimiento' },
    ],
  },
  {
    id: 'applications',
    icon: 'app',
    tag: { en: 'Applications', es: 'Aplicaciones' },
    title: { en: 'Personalized Applications', es: 'Aplicaciones personalizadas' },
    tagline: {
      en: 'Software shaped around the way you work.',
      es: 'Software moldeado a su forma de trabajar.',
    },
    description: {
      en: 'When off-the-shelf software doesn’t fit your needs, we design and develop web and mobile applications built specifically for your workflow, customers, and goals.',
      es: 'Cuando el software estándar no se ajusta a sus necesidades, diseñamos y desarrollamos aplicaciones web y móviles creadas específicamente para su flujo de trabajo, sus clientes y sus objetivos.',
    },
    features: [
      { en: 'Discovery workshops & prototyping', es: 'Talleres de descubrimiento y prototipado' },
      { en: 'Web, mobile & internal tools', es: 'Herramientas web, móviles e internas' },
      { en: 'Secure user accounts & dashboards', es: 'Cuentas de usuario seguras y paneles de control' },
      { en: 'Launch support and long-term maintenance', es: 'Acompañamiento en el lanzamiento y mantenimiento a largo plazo' },
    ],
  },
]

export default services
