import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on devices with coarse hover support (desktops/laptops)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed pointer-events-none z-30 transition-opacity duration-300 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-r from-teal-500/15 via-indigo-500/10 to-transparent blur-[80px]" />
    </div>
  )
}
