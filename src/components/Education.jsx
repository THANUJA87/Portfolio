import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

export default function Education({ education }) {
  return (
    <section id="education" className="py-24 md:py-32 bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Education"
          title="Academic Background"
          subtitle="Strong academic foundation with consistent performance throughout."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-surface-card card-hover"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                <Award size={22} />
              </div>
              <div>
                <span className="font-mono text-xs text-teal-400 font-medium">{item.year}</span>
                <h3 className="text-white font-bold mt-1 mb-1">{item.degree}</h3>
                <p className="text-slate-400 text-sm mb-1">{item.institution}</p>
                <p className="text-slate-500 text-sm font-semibold">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
