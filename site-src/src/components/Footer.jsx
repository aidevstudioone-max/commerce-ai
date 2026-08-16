export default function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="mb-3 inline-block font-display text-[1.05rem] font-bold">Fernbridge Commerce AI</a>
          <p className="max-w-[32ch] text-[.86rem] leading-relaxed text-ink-soft">
            AI-powered listing management and e-commerce analytics, by Fernbridge Digital.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-[.86rem] font-semibold">Explore</h4>
          <div className="flex flex-col gap-2 text-[.86rem] text-ink-soft">
            <a href="#modules" className="hover:text-violet">Modules</a>
            <a href="#preview" className="hover:text-violet">Live Preview</a>
            <a href="#pricing" className="hover:text-violet">Pricing</a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-[.86rem] font-semibold">Product</h4>
          <div className="flex flex-col gap-2 text-[.86rem] text-ink-soft">
            <a href="app.html" className="hover:text-violet">Try the Demo</a>
            <a href="app.html#view-listings" className="hover:text-violet">Listing Optimizer</a>
            <a href="app.html#view-analytics" className="hover:text-violet">Analytics</a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-[.86rem] font-semibold">Contact</h4>
          <div className="flex flex-col gap-2 text-[.86rem] text-ink-soft">
            <a href="mailto:hello@fernbridgedigital.com" className="hover:text-violet">hello@fernbridgedigital.com</a>
            <a href="https://aidevstudioone-max.github.io/Fernbridge_Digital/#contact" className="hover:text-violet">Request a Callback</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-1 border-t border-border px-6 pt-6 text-[.78rem] text-ink-soft">
        <span>© 2026 Fernbridge Commerce AI, a Fernbridge Digital product.</span>
        <span>Demo product — all data is seeded and stored locally in your browser, no real store or marketplace data is processed.</span>
      </div>
    </footer>
  )
}
