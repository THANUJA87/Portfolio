import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <motion.div
        className="font-mono text-3xl font-bold text-teal-400"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-slate-600">&lt;</span>
        TM
        <span className="text-slate-600"> /&gt;</span>
      </motion.div>
    </div>
  )
}
