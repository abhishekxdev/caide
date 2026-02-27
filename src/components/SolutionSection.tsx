function ArchCurves() {
  return (
    <svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-[20%] md:left-[28%] w-[65%] md:w-[55%] h-[120px]"
      preserveAspectRatio="none" aria-hidden="true">
      <path d="M20 110 Q70 30 120 110" stroke="rgba(26,16,60,0.35)" strokeWidth="2.5" fill="none" />
      <path d="M10 110 Q10 85 20 80" stroke="rgba(26,16,60,0.3)" strokeWidth="2" fill="none" />
      <path d="M30 110 Q30 85 20 80" stroke="rgba(26,16,60,0.3)" strokeWidth="2" fill="none" />
      <path d="M150 115 Q230 10 310 115" stroke="rgba(26,16,60,0.35)" strokeWidth="2.5" fill="none" />
      <path d="M310 115 Q310 88 322 82" stroke="rgba(26,16,60,0.3)" strokeWidth="2" fill="none" />
      <path d="M334 115 Q334 88 322 82" stroke="rgba(26,16,60,0.3)" strokeWidth="2" fill="none" />
      <path d="M360 120 Q460 5 560 120" stroke="rgba(26,16,60,0.35)" strokeWidth="2.5" fill="none" />
      <path d="M140 115 Q140 92 130 87" stroke="rgba(26,16,60,0.3)" strokeWidth="2" fill="none" />
      <path d="M120 115 Q120 92 130 87" stroke="rgba(26,16,60,0.3)" strokeWidth="2" fill="none" />
    </svg>
  );
}

function OffsetButton({ label }: { label: string }) {
  return (
    <div className="relative w-fit" style={{ isolation: 'isolate' }}>
      <div className="absolute top-2 left-2 w-full h-full rounded-sm" style={{ background: '#9EA8DC', zIndex: 0 }} />
      <button className="relative flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[15px] px-7 py-3.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 group" style={{ zIndex: 1 }}>
        {label}
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <section className="w-full py-14 md:py-20 px-4 sm:px-6 flex flex-col items-center" style={{ background: '#FAFAD0' }}>
      {/* Headline */}
      <div className="text-center max-w-[680px] mb-10 md:mb-12">
        <h2 className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[58px] leading-[1.08] text-navy mb-4 md:mb-5">
          One link. Every platform. Done.
        </h2>
        <p className="font-body text-[15px] md:text-[17px] leading-relaxed text-navy/60 max-w-[600px] mx-auto">
          Channl takes your source content, learns your voice, and generates platform-optimized
          posts for X, Threads, and LinkedIn. Schedule, analyse, and grow — all from one place.
        </p>
      </div>

      {/* Feature card */}
      <div className="relative w-full max-w-[900px] rounded-2xl border-2 border-navy/80 overflow-hidden" style={{ background: '#C4BCEC', minHeight: '300px' }}>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 px-6 sm:px-10 pt-10 pb-0">
          <div className="md:w-[45%]">
            <h3 className="font-heading font-extrabold text-[24px] md:text-[30px] leading-tight text-navy">
              Smarter AI,<br />Better Reach
            </h3>
          </div>
          <div className="md:w-[55%] flex flex-col gap-5">
            <p className="font-body text-[13px] md:text-[14px] leading-relaxed text-navy/65 max-w-[320px]">
              Trained on millions of high-performing posts across X, Threads, and LinkedIn.
              Always learning your voice, always adapting, always giving you content that
              actually gets engagement.
            </p>
            <OffsetButton label="Try for free" />
          </div>
        </div>

        <div className="relative h-[160px] mt-4">
          <ArchCurves />
          <img src="/workspace.svg"
            alt="Creator at workspace illustration" className="absolute bottom-2 left-6"
            style={{ width: '140px', height: '110px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          <div className="absolute bottom-4 right-5 w-10 h-10 rounded-full bg-navy flex items-center justify-center">
            {/* Signal/broadcast icon */}
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" aria-hidden="true">
              <circle cx="16" cy="16" r="3.5" fill="white" />
              <path d="M10 22 Q6 18 6 16 Q6 14 10 10" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M22 10 Q26 14 26 16 Q26 18 22 22" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M7 25 Q2 21 2 16 Q2 11 7 7" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M25 7 Q30 11 30 16 Q30 21 25 25" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
