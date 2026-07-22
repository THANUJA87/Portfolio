import { motion } from 'framer-motion'
import { Code2, Server, Cloud, Cpu, Database, Layers, HardDrive } from 'lucide-react'

const badges = [
  { label: 'React.js', icon: Code2, position: '-top-4 -left-4', color: 'from-cyan-500/20 to-teal-500/20 text-cyan-300 border-cyan-500/30' },
  { label: 'Node.js', icon: Server, position: '-top-4 -right-4', color: 'from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30' },
  { label: 'NestJS', icon: Layers, position: 'top-1/4 -left-6', color: 'from-rose-500/20 to-red-500/20 text-rose-300 border-rose-500/30' },
  { label: 'MongoDB', icon: Database, position: 'top-1/3 -right-6', color: 'from-emerald-600/20 to-teal-600/20 text-emerald-300 border-emerald-500/30' },
  { label: 'PostgreSQL', icon: HardDrive, position: 'top-2/3 -right-6', color: 'from-blue-600/20 to-indigo-600/20 text-blue-300 border-blue-500/30' },
  { label: 'AWS Cloud', icon: Cloud, position: '-bottom-4 -right-2', color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30' },
  { label: 'Bedrock AI', icon: Cpu, position: '-bottom-4 -left-2', color: 'from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30' },
]

export default function FloatingTechBadges() {
  return (
    <>
      {badges.map((badge, index) => {
        const Icon = badge.icon
        return (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.07, duration: 0.4 }}
            className={`absolute ${badge.position} z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-slate-950/85 backdrop-blur-md shadow-xl bg-gradient-to-r ${badge.color}`}
            style={{
              animation: `float ${3 + index * 0.6}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.25}s`,
            }}
          >
            <Icon size={14} />
            <span className="text-xs font-mono font-semibold">{badge.label}</span>
          </motion.div>
        )
      })}
    </>
  )
}
