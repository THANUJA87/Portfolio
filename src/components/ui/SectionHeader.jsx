const colorMap = {
  teal: 'border-teal-500/30 bg-teal-500/10 text-teal-300',
  cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
  indigo: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  orange: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
  violet: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
  rose: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
}

export default function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <div className={centered ? 'text-center mx-auto max-w-2xl mb-14' : 'mb-14 max-w-2xl'}>
      <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.15em] text-teal-400 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export { colorMap }
