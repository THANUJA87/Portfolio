import { Heart } from 'lucide-react'

export default function Footer({ profile }) {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-slate-500 text-sm">
          Built with React, Tailwind & Firestore
          <Heart size={14} className="text-red-400" />
        </p>
        <div className="flex gap-5">
          {[
            { label: 'GitHub', href: profile.github },
            { label: 'LinkedIn', href: profile.linkedin },
            { label: 'Email', href: `mailto:${profile.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-slate-400 text-sm hover:text-teal-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
