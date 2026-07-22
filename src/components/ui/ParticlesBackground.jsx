import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener('resize', handleResize)

    const mouse = { x: -1000, y: -1000, radius: 150 }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Particle object class
    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 2 + 0.5
        this.baseSize = this.size
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.alpha = Math.random() * 0.7 + 0.2
        this.sparkleSpeed = Math.random() * 0.02 + 0.005
        this.sparkleAngle = Math.random() * Math.PI * 2
        this.isGlitter = Math.random() < 0.25 // 25% glitter stars
        this.color = this.isGlitter
          ? '20, 184, 166' // teal
          : Math.random() > 0.5
          ? '129, 140, 248' // indigo
          : '255, 255, 255' // white
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0

        // Sparkle / glitter pulsation
        this.sparkleAngle += this.sparkleSpeed
        const sparkle = Math.sin(this.sparkleAngle) * 0.3
        this.currentAlpha = Math.min(1, Math.max(0.1, this.alpha + sparkle))

        // Mouse interaction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius
          this.size = this.baseSize + force * 2.5
          this.x -= (dx / dist) * force * 1.5
          this.y -= (dy / dist) * force * 1.5
        } else {
          this.size = this.baseSize
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.currentAlpha

        if (this.isGlitter) {
          // Draw 4-point glitter star
          ctx.translate(this.x, this.y)
          ctx.rotate(this.sparkleAngle)
          ctx.fillStyle = `rgb(${this.color})`

          ctx.beginPath()
          const r = this.size * 2
          for (let i = 0; i < 4; i++) {
            ctx.lineTo(Math.cos((i * Math.PI) / 2) * r, Math.sin((i * Math.PI) / 2) * r)
            ctx.lineTo(
              Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3),
              Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3)
            )
          }
          ctx.closePath()
          ctx.fill()
        } else {
          // Draw round particle with radial glow
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${this.color}, ${this.currentAlpha})`
          ctx.fill()
        }

        ctx.restore()
      }
    }

    let particles = []
    function initParticles() {
      particles = []
      const particleCount = Math.floor((width * height) / 12000)
      for (let i = 0; i < Math.min(particleCount, 110); i++) {
        particles.push(new Particle())
      }
    }

    initParticles()

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, width, height)

      // Connect nearby particles with subtle lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  )
}
