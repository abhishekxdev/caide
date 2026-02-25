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

function ClockIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <path d="M100 18 A82 82 0 1 1 30 140" stroke="#1A103C" strokeWidth="4" strokeLinecap="round" fill="none" />
      <polygon points="26,152 18,136 36,136" fill="#1A103C" />
      <path d="M100 182 A82 82 0 1 1 170 60" stroke="#1A103C" strokeWidth="4" strokeLinecap="round" fill="none" />
      <polygon points="174,48 182,64 164,64" fill="#1A103C" />
      <circle cx="100" cy="100" r="56" fill="white" stroke="#1A103C" strokeWidth="3" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const inner = i % 3 === 0 ? 42 : 46;
        return (
          <line key={deg} x1={100 + inner * Math.sin(rad)} y1={100 - inner * Math.cos(rad)}
            x2={100 + 52 * Math.sin(rad)} y2={100 - 52 * Math.cos(rad)}
            stroke="#1A103C" strokeWidth={i % 3 === 0 ? 3 : 1.5} strokeLinecap="round" />
        );
      })}
      <line x1="100" y1="100" x2="115" y2="62" stroke="#1A103C" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="100" x2="122" y2="82" stroke="#1A103C" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="100" r="4" fill="#1A103C" />
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

          {/* Card 1: Spammy & Damaging */}
          <div className={`${cardBase} min-h-[300px] md:min-h-[360px]`} style={{ background: '#1A103C' }}>
            <StripesDecoration />
            <div className="absolute bottom-0 left-0 right-0 px-7 pb-8 z-10 bg-gradient-to-t from-navy via-navy/95 to-transparent pt-16">
              <h3 className="font-heading font-extrabold text-[22px] md:text-[26px] leading-tight text-white mb-2">
                Spammy & Damaging
              </h3>
              <p className="font-body text-[13px] md:text-[14px] text-white/70 leading-relaxed max-w-[280px]">
                Sloppy cold emails don't just bounce; they burn bridges and hurt your brand.
              </p>
            </div>
          </div>

          {/* Card 2: Generic Messaging */}
          <div className={`${cardBase} min-h-[300px] md:min-h-[360px] flex flex-col`} style={{ background: '#9EA8DC' }}>
            <div className="px-7 pt-7 pb-4">
              <h3 className="font-heading font-extrabold text-[20px] md:text-[22px] leading-tight text-navy mb-2">
                Generic Messaging,<br />Zero Impact
              </h3>
              <p className="font-body text-[13px] text-navy/70 leading-relaxed max-w-[240px]">
                Most AI email tools generate lifeless copy that prospects instantly delete.
              </p>
            </div>
            <div className="flex-1 relative flex items-end justify-center px-4 pb-2">
              <img src="https://pixabay.com/get/g80bd9b54e5605a296324dae787580945618cfc51495f5f1942f25fa362bec6c5d399fdd7236d6a16ac277e56c2920892.svg"
                alt="Gold coins pile" style={{ width: '110px', height: '80px', objectFit: 'contain', position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-60%)' }} />
              <img src="https://pixabay.com/get/g613b2a9e43e83c7e6d3cbe779a565d971b318979b912ba6ce07a0bd06b77547ce4f1a38a0ab2263d29d1c20b4df28322.svg"
                alt="Dalmatian dog cartoon illustration" style={{ width: '160px', height: '150px', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>

        {/* Bottom full-width card */}
        <div className={`${cardBase} flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 sm:px-10 py-8 md:py-10 min-h-[220px] md:min-h-[260px]`} style={{ background: '#DDD0FF' }}>
          <div className="flex flex-col gap-5 w-full md:w-[45%]">
            <h3 className="font-heading font-extrabold text-[26px] md:text-[32px] leading-tight text-navy">
              Wastes Your<br />Valuable Time
            </h3>
            <p className="font-body text-[13px] md:text-[14px] text-navy/70 leading-relaxed max-w-[320px]">
              Manually sourcing leads and crafting messages steals hours from your team.
            </p>
            <OffsetButton label="Book a demo" />
          </div>

          <div className="flex-1 flex items-center justify-center gap-4">
            <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] shrink-0">
              <ClockIllustration />
            </div>
            <img src="https://pixabay.com/get/g91e03015194b7478a83762871b1bf35f883303250551074ad385a85a3f5940899b919e45877f4aad12fb935a55dac8c9.svg"
              alt="Person with phone illustration" style={{ width: '140px', height: '140px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
