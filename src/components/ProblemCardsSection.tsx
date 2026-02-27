function StripesDecoration() {
  const stripes = [
    { height: 18, bg: '#FFFFFF' }, { height: 16, bg: '#F0EEF8' },
    { height: 15, bg: '#D8D4EE' }, { height: 14, bg: '#B0A8D8' },
    { height: 13, bg: '#7B6FB0' }, { height: 12, bg: '#4A3A88' },
    { height: 12, bg: '#2A1D60' }, { height: 80, bg: '#1A103C' },
  ];
  return (
    <div className="absolute inset-0 flex flex-col">
      {stripes.map((s, i) => <div key={i} style={{ height: `${s.height}px`, background: s.bg, flexShrink: 0 }} />)}
      <div className="flex-1 bg-navy" />
    </div>
  );
}

function ScheduleIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      {/* Calendar base */}
      <rect x="30" y="40" width="140" height="130" rx="10" fill="white" stroke="#1A103C" strokeWidth="3" />
      <rect x="30" y="40" width="140" height="36" rx="10" fill="#1A103C" />
      <rect x="30" y="60" width="140" height="16" fill="#1A103C" />
      {/* Calendar header dots */}
      <circle cx="60" cy="34" r="6" fill="white" stroke="#1A103C" strokeWidth="2" />
      <circle cx="140" cy="34" r="6" fill="white" stroke="#1A103C" strokeWidth="2" />
      {/* Day grid */}
      {[0,1,2,3,4,5,6].map(col => (
        <text key={col} x={50 + col * 18} y={98} fontSize="9" fill="#1A103C" textAnchor="middle" opacity={0.5}>
          {['M','T','W','T','F','S','S'][col]}
        </text>
      ))}
      {/* Post badges */}
      <rect x="42" y="106" width="28" height="14" rx="4" fill="#DDD0FF" />
      <rect x="78" y="106" width="28" height="14" rx="4" fill="#C2FAF2" />
      <rect x="114" y="106" width="28" height="14" rx="4" fill="#F5C418" />
      <rect x="42" y="128" width="28" height="14" rx="4" fill="#87C5EE" />
      <rect x="78" y="128" width="46" height="14" rx="4" fill="#DDD0FF" />
      <rect x="132" y="128" width="28" height="14" rx="4" fill="#C2FAF2" />
      <rect x="42" y="150" width="46" height="14" rx="4" fill="#F5C418" />
      <rect x="96" y="150" width="28" height="14" rx="4" fill="#87C5EE" />
      {/* Check mark on first badge */}
      <path d="M50 113 l4 4 6-6" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OffsetButton({ label }: { label: string }) {
  return (
    <div className="relative w-fit" style={{ isolation: 'isolate' }}>
      <div className="absolute top-2 left-2 w-full h-full rounded-sm" style={{ background: '#C4B3F5', zIndex: 0 }} />
      <button className="relative flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[15px] px-6 py-3 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 group" style={{ zIndex: 1 }}>
        {label}
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

const cardBase = 'relative overflow-hidden rounded-2xl border-2 border-navy/80';

export default function ProblemCardsSection() {
  return (
    <section className="w-full bg-mint-light px-4 sm:px-6 pb-14 md:pb-20">
      <div className="max-w-[900px] mx-auto flex flex-col gap-4">

        {/* Top row: 1 col mobile → 2 col md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Card 1: Zero Reach Without Consistency */}
          <div className={`${cardBase} min-h-[300px] md:min-h-[360px]`} style={{ background: '#1A103C' }}>
            <StripesDecoration />
            <div className="absolute bottom-0 left-0 right-0 px-7 pb-8 z-10 bg-gradient-to-t from-navy via-navy/95 to-transparent pt-16">
              <h3 className="font-heading font-extrabold text-[22px] md:text-[26px] leading-tight text-white mb-2">
                Zero Reach Without Consistency
              </h3>
              <p className="font-body text-[13px] md:text-[14px] text-white/70 leading-relaxed max-w-[280px]">
                Posting manually one platform at a time kills momentum — algorithms reward frequency
                and consistency, not occasional bursts.
              </p>
            </div>
          </div>

          {/* Card 2: Generic Posts, No Engagement */}
          <div className={`${cardBase} min-h-[300px] md:min-h-[360px] flex flex-col`} style={{ background: '#9EA8DC' }}>
            <div className="px-7 pt-7 pb-4">
              <h3 className="font-heading font-extrabold text-[20px] md:text-[22px] leading-tight text-navy mb-2">
                Generic Posts,<br />No Engagement
              </h3>
              <p className="font-body text-[13px] text-navy/70 leading-relaxed max-w-[240px]">
                Copy-pasting the same text across platforms ignores each network's tone, format,
                and audience — delivering zero real traction.
              </p>
            </div>
            <div className="flex-1 relative flex items-end justify-center px-4 pb-4">
              {/* Platform icons illustration */}
              <div className="flex items-end gap-4">
                {/* X / Twitter */}
                <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center border border-navy/20">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#1A103C" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                {/* Threads */}
                <div className="w-16 h-16 rounded-xl bg-white/80 flex items-center justify-center border border-navy/20">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="#1A103C" aria-hidden="true">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068v-.168C1.5 8.149 2.391 5.275 4.14 3.158 5.978.928 8.71-.005 12.093 0c3.366.007 6.064 1.009 8.016 2.978 1.875 1.888 2.89 4.542 2.891 7.664v.12c.002 3.12-1.014 5.775-2.89 7.664-1.952 1.97-4.65 2.97-8.016 2.978zm4.86-10.003c-.293-3.047-2.153-4.81-5.02-4.83-1.778.012-3.152.75-3.906 2.103a5.87 5.87 0 00-.753 2.934c0 2.037.96 3.551 2.707 4.249a4.808 4.808 0 001.916.365c1.84 0 3.223-.757 4.027-2.177.198-.348.35-.719.452-1.107a5.864 5.864 0 00.177-1.537zm-5.021-3.095c1.81.011 2.975.96 3.158 2.598H9.118c.24-1.677 1.413-2.61 2.907-2.598z" />
                  </svg>
                </div>
                {/* LinkedIn */}
                <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center border border-navy/20">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#0A66C2" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom full-width card */}
        <div className={`${cardBase} flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 sm:px-10 py-8 md:py-10 min-h-[220px] md:min-h-[260px]`} style={{ background: '#DDD0FF' }}>
          <div className="flex flex-col gap-5 w-full md:w-[45%]">
            <h3 className="font-heading font-extrabold text-[26px] md:text-[32px] leading-tight text-navy">
              Wastes Your<br />Creative Energy
            </h3>
            <p className="font-body text-[13px] md:text-[14px] text-navy/70 leading-relaxed max-w-[320px]">
              Manually reformatting content, resizing captions, and copy-pasting across tabs
              steals hours from your creative work every single week.
            </p>
            <OffsetButton label="Book a demo" />
          </div>

          <div className="flex-1 flex items-center justify-center gap-4">
            <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] shrink-0">
              <ScheduleIllustration />
            </div>
            <img src="/mining-money.svg" alt="Creator content illustration"
              style={{ width: '140px', height: '140px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
