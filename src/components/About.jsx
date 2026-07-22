import { motion } from 'framer-motion'
import { Briefcase, Code2, GraduationCap, Download } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const stats = [
  { icon: Briefcase, label: 'Current Role', value: 'Junior Software Engineer' },
  { icon: Code2, label: 'Specialization', value: 'React · NestJS · AWS' },
  { icon: GraduationCap, label: 'Education', value: 'BTech · CGPA 8.27' },
]

export default function About({ profile }) {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="About Me"
          title="Engineering Production-Ready Solutions"
          subtitle="From MERN stack foundations to enterprise full-stack development with AWS and AI integrations."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">{profile.summary}</p>
            <p className="text-slate-400 leading-relaxed">
              Currently working as a <strong className="text-white font-medium">Junior Software Engineer</strong> at
              Geesesquads Software Service, where I build full-stack features, serverless AWS applications,
              and AI-powered integrations using Amazon Bedrock and RAG architectures.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={`mailto:${profile.email}?subject=Job Opportunity`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 hover:-translate-y-0.5 transition-all"
              >
                <Download size={16} />
                Get In Touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white font-semibold text-sm hover:border-teal-500/50 hover:bg-teal-500/5 transition-all"
              >
                LinkedIn Profile
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white font-semibold text-sm hover:border-teal-500/50 hover:bg-teal-500/5 transition-all"
                >
                  View Resume
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2 space-y-4"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-surface-card card-hover"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-white font-bold">{value}</p>
                  <p className="text-slate-500 text-sm">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
