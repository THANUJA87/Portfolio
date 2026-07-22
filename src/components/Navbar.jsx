import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <a
          href="#"
          onClick={closeMenu}
          className="font-mono text-lg font-bold text-white hover:text-teal-400 transition-colors"
        >
          <span className="text-teal-400">&lt;</span>
          {profile.name.split(' ')[0]}
          <span className="text-teal-400">/&gt;</span>
        </a>

        <nav
          className={`fixed md:static inset-0 top-[72px] md:top-auto flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-8 bg-slate-950/98 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-slate-400 hover:text-white font-medium text-lg md:text-sm transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href={profile.resumeUrl || '#contact'}
            target={profile.resumeUrl ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all"
          >
            Download Resume
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
