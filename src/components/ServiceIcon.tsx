import { AppWindow, MonitorSmartphone, Workflow } from 'lucide-react'
import type { ServiceIcon as Kind } from '@/data/services'

const icons = { workflow: Workflow, web: MonitorSmartphone, app: AppWindow }

export function ServiceIcon({ kind, size = 26 }: { kind: Kind; size?: number }) {
  const Icon = icons[kind]
  return (
    <span className="bg-brand inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-blue-500/25">
      <Icon size={size} />
    </span>
  )
}
