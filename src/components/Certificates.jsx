import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

export default function Certificates({ certificates }) {
  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Certifications"
          title="Continuous Learning"
          subtitle="Industry certifications in cloud computing, data science, and analytics."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-surface-card card-hover text-center"
            >
              <BadgeCheck size={32} className="text-teal-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-1">{cert.name}</h3>
              <p className="text-slate-500 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
