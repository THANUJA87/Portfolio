import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'

export default function Hero({ profile }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              {profile.availableForHire ? 'Open to new opportunities' : 'Full Stack Developer'}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg max-w-xl mb-6 leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-2 text-slate-400 text-sm mb-8"
            >
              <MapPin size={16} className="text-teal-400 shrink-0" />
              {profile.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Sparkles size={18} />
                Hire Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-semibold hover:border-teal-500/50 hover:bg-teal-500/5 transition-all"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-3"
            >
              {[
                { href: profile.github, icon: Github, label: 'GitHub' },
                { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/10 transition-all hover:-translate-y-0.5"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {profile.highlights?.map((item, i) => (
              <div
                key={item.label}
                className={`p-6 rounded-2xl border border-white/10 bg-surface-card card-hover ${
                  i === 0 ? 'col-span-2' : ''
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-teal-400 mb-2">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-teal-400 animate-bounce transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
