import { useId } from 'react'

export function LogoMark({ size = 40 }: { size?: number }) {
  const id = useId()
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00bcd4" />
          <stop offset="1" stopColor="#0066ff" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${id})`} />
      <path
        d="M32.5 16.5a11 11 0 1 0 0 15"
        fill="none"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="33" cy="24" r="3" fill="#fff" />
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-xl font-extrabold leading-none tracking-tight">
        <span className="text-brand">Curio</span>{' '}
        <span className={light ? 'text-white' : 'text-ink'}>Solutions</span>
      </span>
    </span>
  )
}
