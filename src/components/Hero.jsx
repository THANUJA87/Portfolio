import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, Star } from 'lucide-react'
import FloatingTechBadges from './ui/FloatingTechBadges'

export default function Hero({ profile }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal-500/15 blur-[130px] animate-pulse-glow" />
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-indigo-500/15 blur-[130px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-medium mb-6 shadow-lg shadow-teal-500/10 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-teal-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              {profile.availableForHire ? 'Open for Opportunities' : 'Full Stack Developer'}
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
              className="text-xl sm:text-2xl font-semibold text-slate-200 mb-4"
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
                className="shimmer-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-teal-400 to-indigo-500 text-slate-950 font-bold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all"
              >
                <Sparkles size={18} />
                Hire Me
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-teal-500/40 bg-teal-500/10 text-teal-300 font-semibold hover:bg-teal-500/20 hover:-translate-y-1 transition-all"
                >
                  Download Resume
                </a>
              )}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md text-white font-semibold hover:border-teal-500/50 hover:bg-teal-500/10 hover:-translate-y-1 transition-all"
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
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 hover:text-teal-300 hover:border-teal-500/40 hover:bg-teal-500/10 transition-all hover:-translate-y-1 shadow-md"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Column: Portrait Photo with Floating Badges & Glitters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center lg:items-end justify-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Floating Badges orbiting portrait */}
              <FloatingTechBadges />

              {/* Glowing Aura halo */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 opacity-40 blur-2xl animate-pulse-glow" />

              {/* Main Profile Card Container */}
              <div className="relative rounded-[2.2rem] overflow-hidden border border-white/20 bg-slate-900/80 backdrop-blur-2xl shadow-2xl p-3.5">
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 group">
                  <img
                    src={profile.avatar || '/thanuja.jpg'}
                    alt={profile.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Sparkle Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold shadow-lg">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span>Top Developer</span>
                  </div>

                  {/* Bottom overlay title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 shadow-xl">
                      <div>
                        <p className="text-xs text-teal-300 font-mono font-medium flex items-center gap-1">
                          <Sparkles size={12} /> Software Engineer
                        </p>
                        <p className="text-sm font-bold text-white mt-0.5">React · Node.js · NestJS · MongoDB · AWS</p>
                      </div>
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights pill grid */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {profile.highlights?.map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-teal-500/10 hover:border-teal-500/30 transition-all text-center group/pill"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 group-hover/pill:text-teal-300 transition-colors">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-teal-400 animate-bounce transition-colors z-10 p-2"
        aria-label="Scroll to about"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
