const features = ['✓ GDPR compliant', '✓ No credit card required', '✓ Free 14-day trial'];

function DotGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1.2" fill="rgba(26,16,60,0.18)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[480px] md:min-h-[580px]">
      {/* ─── LEFT: Text Column ─── */}
      <div className="w-full md:w-[55%] bg-lavender flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-10 md:py-14 shrink-0">
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Eyebrow */}
          <div className="inline-flex w-fit">
            <span className="border border-dashed border-navy/40 px-4 py-1.5 font-body font-semibold text-[11px] tracking-[0.15em] uppercase text-navy/60">
              AI-Powered Outreach Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] text-navy max-w-[520px]">
            Get Hot Leads Without Breaking a Sweat
          </h1>

          {/* Subtext */}
          <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-navy/70 max-w-[440px]">
            Caide is your AI-powered virtual campaign manager, built to make
            sure cold outreach doesn't feel cold.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap mt-1">
            <button className="group flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[15px] px-7 py-3.5 rounded-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
              Try for free
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="group flex items-center gap-2.5 border-2 border-navy/30 hover:border-navy text-navy font-body font-semibold text-[15px] px-7 py-3.5 rounded-sm bg-white/50 hover:bg-white transition-all duration-200">
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch demo
            </button>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 mt-8 md:mt-10">
          {features.map((f) => (
            <span key={f} className="font-body text-[12px] text-navy/60 border border-navy/20 px-3.5 py-1.5 rounded-sm bg-white/40">
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* ─── RIGHT: Illustration Column ─── */}
      <div className="flex-1 bg-golden relative overflow-hidden flex items-end justify-center pb-0 min-h-[260px] md:min-h-0">
        <DotGrid />
        <img
          src="/hero-illustration.svg"
          alt="Person relaxing on sofa with laptop — Work From Home illustration by Streamline"
          className="relative z-10 w-full max-w-[380px] md:max-w-[480px] object-contain select-none"
          style={{ mixBlendMode: 'multiply' }}
          draggable={false}
        />
      </div>
    </section>
  );
}
