import { motion } from 'framer-motion'
import SectionHeader, { colorMap } from './ui/SectionHeader'

export default function Skills({ skillCategories }) {
  const allSkills = skillCategories?.flatMap((c) => c.skills) ?? []

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Technical Skills"
          title="Full Stack + Cloud + AI"
          subtitle="Technologies I use to ship production-ready applications from UI to serverless backend."
        />

        {/* Marquee-style tech strip */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-surface-card py-4">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-8 whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories?.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-surface-card card-hover"
            >
              <h3
                className={`inline-block px-3 py-1 rounded-lg border text-xs font-mono font-semibold uppercase tracking-wider mb-5 ${
                  colorMap[category.color] || colorMap.teal
                }`}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-sm hover:border-teal-500/30 hover:text-teal-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
