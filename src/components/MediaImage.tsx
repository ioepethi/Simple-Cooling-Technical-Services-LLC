import { useState } from 'react'
import { Sparkles } from 'lucide-react'

/**
 * Image with a branded fallback: if the file does not exist yet in
 * public/media/, a gradient panel is rendered instead of a broken image.
 * Once you drop the real photo in place it appears automatically.
 */
export default function MediaImage({
  src,
  alt,
  label,
  className = '',
  tone = 'blue',
  eager = false,
}: {
  src: string
  alt: string
  label?: string
  className?: string
  tone?: 'orange' | 'blue' | 'teal' | 'navy'
  eager?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    const gradients = {
      orange: 'from-brand-orange/15 via-white to-brand-blue/15',
      blue: 'from-brand-blue/15 via-white to-brand-teal/15',
      teal: 'from-brand-teal/15 via-white to-brand-orange/15',
      navy: 'from-navy/10 via-white to-brand-blue/15',
    }
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${gradients[tone]} ${className}`}
      >
        <Sparkles className="h-8 w-8 text-brand-blue/50" />
        {label && <p className="px-3 text-center text-xs font-semibold text-slate-500">{label}</p>}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
