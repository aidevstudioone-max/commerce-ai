import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconSpark, IconChart, IconStar, IconGauge, IconBox, IconCheck, IconUsers, IconLink } from './Icons.jsx'

const MODULES = [
  { icon: IconSpark, title: 'AI Listing Optimizer', body: "Generate titles, bullet points, descriptions and keyword suggestions — built only from your product's verified features, never invented specs." },
  { icon: IconChart, title: 'Product Analytics', body: 'Revenue, orders, units and returns per product, with trend sparklines so you can spot momentum shifts early.' },
  { icon: IconStar, title: 'Review Intelligence', body: 'Surface sentiment and recurring positive and negative themes, with an AI-written recommendation for each product.' },
  { icon: IconGauge, title: 'Product Health Score', body: 'A single 0–100 score blending sales, ratings, conversion, listing quality and returns — with configurable weighting.' },
  { icon: IconBox, title: 'AI Insights', body: 'Prioritized, plain-language recommendations instead of raw charts — what changed, why it matters, what to check next.' },
  { icon: IconCheck, title: 'Listing Quality Score', body: 'Every listing is scored on completeness, clarity, keyword coverage, readability and consistency.' },
  { icon: IconUsers, title: 'Competitor Intelligence', body: 'Compare permitted marketplace and product information against competitors.', tag: 'Roadmap' },
  { icon: IconLink, title: 'Marketplace Integrations', body: 'Connect Amazon, Shopify, Flipkart and more through official, approved APIs.', tag: 'Roadmap' },
]

export default function Modules() {
  return (
    <section id="modules" className="border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-14 max-w-[54ch] text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-light px-3.5 py-1.5 font-mono text-[.72rem] font-semibold uppercase tracking-[.07em] text-violet">Core Modules</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold leading-[1.15] tracking-tight">
            Everything a seller needs to optimize and monitor a catalog.
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-ink-soft text-pretty">
            From AI-generated content to product health scoring — built as one connected workflow, not a pile of disconnected charts.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map(({ icon: Icon, title, body, tag }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="relative rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-[0_20px_40px_-25px_rgba(91,63,224,.35)]"
            >
              {tag && <span className="absolute right-4 top-4 rounded-full bg-bg-alt px-2 py-0.5 font-mono text-[.62rem] font-semibold text-ink-soft">{tag}</span>}
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-violet-light text-violet">
                <Icon width={19} height={19} />
              </div>
              <h3 className="mb-2 font-display text-[1.02rem] font-semibold">{title}</h3>
              <p className="text-[.86rem] leading-relaxed text-ink-soft">{body}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
