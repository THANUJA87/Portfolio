import { useState, useEffect } from 'react'
import { fetchPortfolioData } from './services/firestoreService'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ParticlesBackground from './components/ui/ParticlesBackground'
import CursorGlow from './components/ui/CursorGlow'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPortfolioData()
      .then(setData)
      .finally(() => setLoading(false))
  }, [])

  if (loading || !data) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-surface text-slate-100 overflow-x-hidden selection:bg-teal-500 selection:text-slate-950">
      <ParticlesBackground />
      <CursorGlow />
      <Navbar profile={data.profile} />
      <main className="relative z-10">
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Skills skillCategories={data.skillCategories} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Certificates certificates={data.certificates} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </div>
  )
}

export default App
