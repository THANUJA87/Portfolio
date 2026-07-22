import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react'
import { submitContactMessage } from '../services/firestoreService'
import SectionHeader from './ui/SectionHeader'

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const result = await submitContactMessage(form)
      setStatus(result.demo ? 'demo' : 'success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Failed to send message. Please try again.')
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Linkedin, label: 'LinkedIn', value: 'thanuja-m-mangalan', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'THANUJA87', href: profile.github },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Great"
          subtitle="Open to full-time roles and exciting opportunities. Send a message — I'll respond promptly."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-teal-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-3 p-7 rounded-2xl border border-white/10 bg-surface-card space-y-5"
          >
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-slate-400 text-sm font-medium mb-2 capitalize">
                  Your {field}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={field === 'name' ? 'John Doe' : 'john@company.com'}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="I'd like to discuss a job opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all resize-y"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm">
                <CheckCircle size={18} />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'demo' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm">
                <CheckCircle size={18} />
                Message received (demo mode). Connect Firebase to save messages.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle size={18} />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold shadow-lg shadow-teal-500/20 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <Send size={18} />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
