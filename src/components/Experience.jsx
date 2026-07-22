import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="From MERN training to building production apps with AWS, NestJS, and AI at Geesesquads."
        />

        <div className="relative space-y-8">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-indigo-500/30 to-transparent hidden sm:block" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-6 sm:gap-8"
            >
              <div
                className={`hidden sm:flex w-10 h-10 shrink-0 items-center justify-center rounded-full border-2 z-10 ${
                  item.current
                    ? 'border-teal-400 bg-teal-500/20 text-teal-400 shadow-lg shadow-teal-500/20'
                    : 'border-white/20 bg-surface-card text-slate-400'
                }`}
              >
                <Building2 size={16} />
              </div>

              <div
                className={`flex-1 p-6 md:p-7 rounded-2xl border card-hover ${
                  item.current
                    ? 'border-teal-500/30 bg-gradient-to-br from-teal-500/5 to-indigo-500/5'
                    : 'border-white/10 bg-surface-card'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{item.role}</h3>
                      {item.current && (
                        <span className="px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-teal-400 font-medium">{item.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:text-right">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">
                      {item.type}
                    </span>
                    <span className="text-slate-500 text-sm font-mono">{item.period}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

                {item.achievements && (
                  <ul className="space-y-2 mb-4">
                    {item.achievements.map((a) => (
                      <li key={a} className="text-slate-500 text-sm flex gap-2">
                        <span className="text-teal-400 shrink-0 mt-0.5">•</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
