import { AppWindow, MonitorSmartphone, Workflow } from 'lucide-react'
import type { ServiceIcon as Kind } from '@/data/services'

const icons = { workflow: Workflow, web: MonitorSmartphone, app: AppWindow }

const colors: Record<Kind, string> = {
  workflow: 'bg-gradient-to-br from-amber-400 to-orange-600 shadow-blue-500/25',
  web: 'bg-gradient-to-br from-cyan-400 to-blue-600 shadow-orange-500/25',
  app: 'bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-violet-500/25',
}

export function ServiceIcon({ kind, size = 26 }: { kind: Kind; size?: number }) {
  const Icon = icons[kind]
  return (
    <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${colors[kind]}`}>
      <Icon size={size} />
    </span>
  )
}
