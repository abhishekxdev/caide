function HillsDecoration() {
  return (
    <svg viewBox="0 0 900 180" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-20 180 Q120 60 280 140 Q400 200 560 90 Q700 10 900 120 L900 180 Z"
        stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" />
      <path d="M-20 180 Q80 90 200 150 Q320 210 460 100 Q580 20 740 110 Q820 150 900 100 L900 180 Z"
        stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none" />
      <path d="M-20 180 Q60 110 160 160 Q270 215 380 130 Q480 60 600 140 Q700 200 820 130 Q870 110 920 150 L920 180 Z"
        stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

function TennisBallIcon() {
  return (
    <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-navy flex items-center justify-center">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
        <path d="M4 20 Q12 8 20 20 Q28 32 36 20" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M4 20 Q12 32 20 20 Q28 8 36 20" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="w-full bg-mint-light py-14 md:py-20 px-4 sm:px-6 flex flex-col items-center">
      {/* Headline */}
      <div className="text-center max-w-[720px] mb-10 md:mb-12">
        <h2 className="font-heading font-extrabold text-[34px] sm:text-[42px] lg:text-[54px] leading-[1.1] text-navy mb-4 md:mb-5">
          Tired of Outreach that doesn't work?
        </h2>
        <p className="font-body text-[15px] md:text-[17px] leading-relaxed text-navy/60 max-w-[580px] mx-auto">
          Traditional outreach demands you're a salesperson, strategist, and
          copywriter all at once. It's expensive, exhausting, and impossible to
          measure.
        </p>
      </div>

      {/* Card */}
      <div className="relative w-full max-w-[900px] rounded-2xl border-2 border-navy/80 overflow-hidden" style={{ background: '#7ECABB' }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

        {/* Card content */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 px-6 sm:px-10 pt-10 md:pt-12 pb-36 md:pb-40">
          {/* Left */}
          <div className="md:w-[45%]">
            <h3 className="font-heading font-extrabold text-[26px] md:text-[32px] leading-tight text-navy">
              Expensive &<br />Ineffective
            </h3>
          </div>

          {/* Right */}
          <div className="md:w-[55%] flex flex-col gap-6">
            <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-navy/75">
              The old way drains budgets and delivers little in return. Teams
              juggle a mess of tools just to send one generic email that gets
              ignored. It's a bloated, time-sucking process built for busywork,
              not results.
            </p>

            <div className="relative w-fit">
              <div className="absolute top-2 left-2 w-full h-full rounded-sm bg-lavender-dark/70" />
              <button className="relative flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[15px] px-7 py-3.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 group">
                Try for free
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <HillsDecoration />
        <TennisBallIcon />
      </div>
    </section>
  );
}
