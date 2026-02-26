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
          From chaos to calm
        </h2>
        <p className="font-body text-[15px] md:text-[17px] leading-relaxed text-navy/60 max-w-[600px] mx-auto">
          Woofly simplifies your dog care routine, schedules appointments that actually work, and
          keeps your pup healthy. All without draining your wallet or burning you out.
        </p>
      </div>

      {/* Feature card */}
      <div className="relative w-full max-w-[900px] rounded-2xl border-2 border-navy/80 overflow-hidden" style={{ background: '#C4BCEC', minHeight: '300px' }}>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 px-6 sm:px-10 pt-10 pb-0">
          <div className="md:w-[45%]">
            <h3 className="font-heading font-extrabold text-[24px] md:text-[30px] leading-tight text-navy">
              Smarter AI,<br />Happier Dogs
            </h3>
          </div>
          <div className="md:w-[55%] flex flex-col gap-5">
            <p className="font-body text-[13px] md:text-[14px] leading-relaxed text-navy/65 max-w-[320px]">
              Breed-aware AI trained on thousands of dog health profiles. Always learning your pup's
              needs, always evolving, always giving you the best advice for the job.
            </p>
            <OffsetButton label="Try for free" />
          </div>
        </div>

        <div className="relative h-[160px] mt-4">
          <ArchCurves />
          <img src="https://pixabay.com/get/g1376913197c05283c23e73e06db636cc8639deba84a7d1e77f5e11827131a8035f239afb1cd6505233fc85cdc88771bf.svg"
            alt="Running dog illustration" className="absolute bottom-2 left-6"
            style={{ width: '140px', height: '110px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          <div className="absolute bottom-4 right-5 w-10 h-10 rounded-full bg-navy flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" aria-hidden="true">
              <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" />
              <path d="M4 16 Q10 8 16 16 Q22 24 28 16" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M4 16 Q10 24 16 16 Q22 8 28 16" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
