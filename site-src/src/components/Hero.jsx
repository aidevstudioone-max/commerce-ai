import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { IconSpark, IconBox, IconCheck, IconArrowRight } from './Icons.jsx'

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
})

const ROWS = [
  { code: 'AE', color: '#7C5CFC', name: 'AeroFit Wireless Earbuds Pro', role: 'Electronics', score: 32, tone: 'bg-[#FBE7E7] text-[#DC4C4C]' },
  { code: 'TG', color: '#0EA5A0', name: 'TerraGrip Yoga Mat', role: 'Sports & Fitness', score: 91, tone: 'bg-[#E1F5EC] text-[#22A06B]' },
  { code: 'GP', color: '#E0A030', name: 'GlowPeak Desk Lamp', role: 'Home & Office', score: 48, tone: 'bg-[#FBF0DD] text-[#E0A030]' },
]

export default function Hero() {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { y: -10, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-24 h-[440px] w-[440px] rounded-full opacity-70 blur-[10px]"
        style={{ background: 'radial-gradient(circle, rgba(124,92,252,.18), rgba(124,92,252,0) 65%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-[360px] w-[360px] rounded-full opacity-60 blur-[10px]"
        style={{ background: 'radial-gradient(circle, rgba(34,195,166,.16), rgba(34,195,166,0) 65%)' }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <motion.span {...rise(0)} className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-light px-3.5 py-1.5 font-mono text-[.72rem] font-semibold uppercase tracking-[.07em] text-violet">
            <IconSpark width={14} height={14} /> Fernbridge Commerce AI Listing Tool
          </motion.span>

          <h1 className="mb-5 max-w-xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.08] tracking-tight text-balance">
            <motion.span {...rise(0.06)} className="block">Build better <span className="text-violet">listings.</span></motion.span>
            <motion.span {...rise(0.14)} className="block">Understand your products.</motion.span>
          </h1>

          <motion.p {...rise(0.24)} className="mb-8 max-w-[46ch] text-[1.08rem] leading-relaxed text-ink-soft text-pretty">
            The Fernbridge Commerce AI Listing Tool generates search-ready titles, bullets and descriptions from your product's real features, scores every listing, and turns your sales and review data into plain-language recommendations — all in one dashboard.
          </motion.p>

          <motion.div {...rise(0.32)} className="mb-9 flex flex-wrap gap-3">
            <a href="app.html" className="inline-flex items-center gap-2 rounded-lg bg-violet px-6 py-3.5 font-semibold text-white shadow-[0_10px_22px_rgba(124,92,252,.28)] transition-transform hover:-translate-y-0.5">
              Try Live Demo <IconBox width={17} height={17} />
            </a>
            <a href="#modules" className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 font-semibold text-ink transition-colors hover:border-violet hover:bg-violet-light">
              See How it Works
            </a>
          </motion.div>

          <motion.div {...rise(0.4)} className="flex flex-wrap gap-x-6 gap-y-2 text-[.88rem] font-medium text-ink-soft">
            <span className="inline-flex items-center gap-2"><IconBox width={16} height={16} /> 8 seeded products</span>
            <span className="inline-flex items-center gap-2"><IconSpark width={16} height={16} /> AI listing optimizer</span>
            <span className="inline-flex items-center gap-2"><IconCheck width={16} height={16} /> No setup required</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}>
          <div ref={cardRef} className="rounded-2xl border border-border bg-surface p-6 shadow-[0_30px_70px_-30px_rgba(91,63,224,.35)]">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="font-display text-[1.02rem] font-semibold">Listing quality, at a glance</h4>
              <span className="rounded-full bg-violet-light px-3 py-1 font-mono text-[.68rem] font-semibold text-violet">Live scoring</span>
            </div>
            {ROWS.map((r, i) => (
              <motion.div
                key={r.code}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 border-t border-border py-3.5 first:border-t-0"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg font-display text-[.78rem] font-bold text-white" style={{ background: r.color }}>{r.code}</span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[.92rem] font-semibold">{r.name}</div>
                  <div className="text-[.78rem] text-ink-soft">{r.role}</div>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[.74rem] font-semibold ${r.tone}`}>Score {r.score}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
