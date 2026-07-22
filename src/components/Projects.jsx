import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

export default function Projects({ projects }) {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Key Projects"
          title="Production-Grade Work"
          subtitle="Enterprise platforms and full-stack applications built for real-world use cases."
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-surface-card card-hover flex flex-col ${
                index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                  <Star size={18} />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-500 hover:text-teal-400 hover:bg-teal-500/10 transition-all"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-teal-400 hover:bg-teal-500/10 transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="font-mono text-xs text-teal-400 uppercase tracking-wider mb-1">
                {project.subtitle}
              </p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="space-y-2 mb-5">
                {project.highlights.slice(0, index === 0 ? 4 : 3).map((h) => (
                  <li key={h} className="text-slate-500 text-sm flex gap-2">
                    <span className="text-teal-400 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {others.length > 0 && (
          <div>
            <h3 className="text-slate-400 font-semibold mb-5 text-sm uppercase tracking-wider">
              Additional Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.08 }}
                  className="p-5 rounded-2xl border border-white/10 bg-surface-card card-hover"
                >
                  <p className="font-mono text-xs text-slate-500 mb-1">{project.subtitle}</p>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
