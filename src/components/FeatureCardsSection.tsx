function CloudsDecoration() {
  return (
    <svg viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="absolute top-4 left-0 w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <ellipse cx="100" cy="60" rx="55" ry="30" fill="white" fillOpacity="0.85" />
      <ellipse cx="70" cy="68" rx="35" ry="22" fill="white" fillOpacity="0.85" />
      <ellipse cx="130" cy="70" rx="38" ry="22" fill="white" fillOpacity="0.85" />
      <ellipse cx="310" cy="38" rx="65" ry="34" fill="white" fillOpacity="0.78" />
      <ellipse cx="275" cy="50" rx="42" ry="24" fill="white" fillOpacity="0.78" />
      <ellipse cx="350" cy="50" rx="42" ry="24" fill="white" fillOpacity="0.78" />
      <ellipse cx="510" cy="55" rx="50" ry="26" fill="white" fillOpacity="0.7" />
      <ellipse cx="480" cy="65" rx="34" ry="20" fill="white" fillOpacity="0.7" />
      <ellipse cx="545" cy="65" rx="34" ry="20" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

function OffsetButton({ label }: { label: string }) {
  return (
    <div className="relative w-fit" style={{ isolation: 'isolate' }}>
      <div className="absolute top-2 left-2 w-full h-full rounded-sm" style={{ background: '#9EA8DC', zIndex: 0 }} />
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

export default function FeatureCardsSection() {
  return (
    <section className="w-full px-4 sm:px-6 pb-14 md:pb-20" style={{ background: '#FAFAD0' }}>
      <div className="max-w-[900px] mx-auto flex flex-col gap-4">

        {/* Top row: 1 col mobile → 2 col md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Card 1: Effortless Multi-Platform Scheduling */}
          <div className={`${cardBase} min-h-[300px] md:min-h-[360px] flex flex-col justify-end`}
            style={{ background: 'linear-gradient(180deg, #87C5EE 0%, #A8C8F0 45%, #C4BCEC 100%)' }}>
            <CloudsDecoration />
            <div className="relative z-10 px-7 pb-8 pt-24">
              <h3 className="font-heading font-extrabold text-[20px] md:text-[24px] leading-tight text-navy mb-3">
                Effortless Multi-Platform<br />Scheduling
              </h3>
              <p className="font-body text-[13px] leading-relaxed text-navy/70 max-w-[280px]">
                From automated post queuing and peak-time publishing to calendar views and
                bulk scheduling, Channl handles the complexity behind the scenes.
              </p>
            </div>
          </div>

          {/* Card 2: 10x Your Output */}
          <div className={`${cardBase} min-h-[300px] md:min-h-[360px] flex flex-col`} style={{ background: '#F5C418' }}>
            <div className="px-7 pt-7 pb-2 z-10 relative">
              <h3 className="font-heading font-extrabold text-[20px] md:text-[22px] leading-tight text-navy mb-2">
                10x Your Output,<br />Zero Extra Work
              </h3>
              <p className="font-body text-[13px] text-navy/70 leading-relaxed max-w-[240px]">
                One YouTube video or blog post becomes a full week of platform-specific
                content — formatted, tone-matched, and ready to publish.
              </p>
            </div>
            <div className="flex-1 flex items-end justify-center pb-0 relative">
              <img src="/dalmatian-sit.svg" alt="Creator productivity illustration"
                style={{ width: '100%', maxWidth: '300px', height: '200px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            </div>
          </div>
        </div>

        {/* Bottom full-width card */}
        <div className={`${cardBase} flex flex-col md:flex-row items-stretch min-h-[240px] md:min-h-[260px]`} style={{ background: '#A8DFCC' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }} />
          <div className="relative z-10 flex flex-col gap-5 px-6 sm:px-10 py-8 md:py-10 md:w-[45%]">
            <h3 className="font-heading font-extrabold text-[24px] md:text-[30px] leading-tight text-navy">
              Analytics That<br />Actually Matter
            </h3>
            <p className="font-body text-[13px] md:text-[14px] text-navy/70 leading-relaxed max-w-[320px]">
              Channl tracks engagement, reach, and click-through rates per platform and per
              post — so you know exactly what content is working and double down on it.
            </p>
            <OffsetButton label="Book a demo" />
          </div>
          <div className="relative z-10 flex-1 flex items-end justify-center md:justify-end pr-0 overflow-hidden">
            <img src="/workspace.svg" alt="Analytics dashboard illustration"
              style={{ width: '100%', maxWidth: '480px', height: '220px', objectFit: 'contain', objectPosition: 'bottom right', mixBlendMode: 'multiply' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
