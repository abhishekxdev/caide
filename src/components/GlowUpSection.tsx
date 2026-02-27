function Sparkle({ size = 40, color = '#F5C418' }: { size?: number; color?: string }) {
  const cx = 20, cy = 20, outerR = 18, innerR = 6;
  const points = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4 - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points={points} fill={color} />
    </svg>
  );
}

function ContentIcon() {
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-navy/20 flex items-center justify-center bg-white">
      <svg viewBox="0 0 56 56" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Content creator icon">
        <circle cx="28" cy="28" r="28" fill="#DDD0FF" />
        {/* Document */}
        <rect x="16" y="14" width="24" height="28" rx="3" fill="white" stroke="#1A103C" strokeWidth="1.5" />
        <line x1="20" y1="20" x2="36" y2="20" stroke="#1A103C" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="20" y1="25" x2="36" y2="25" stroke="#1A103C" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="20" y1="30" x2="30" y2="30" stroke="#1A103C" strokeWidth="1.2" strokeLinecap="round" />
        {/* Sparkle */}
        <circle cx="38" cy="18" r="6" fill="#F5C418" />
        <path d="M38 14v2M38 20v2M34 18h2M40 18h2" stroke="#1A103C" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SmallPlatforms() {
  return (
    <div className="flex items-end gap-3 px-4 pb-2">
      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#1A103C" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#1A103C" aria-hidden="true">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068v-.168C1.5 8.149 2.391 5.275 4.14 3.158 5.978.928 8.71-.005 12.093 0c3.366.007 6.064 1.009 8.016 2.978 1.875 1.888 2.89 4.542 2.891 7.664v.12c.002 3.12-1.014 5.775-2.89 7.664-1.952 1.97-4.65 2.97-8.016 2.978zm4.86-10.003c-.293-3.047-2.153-4.81-5.02-4.83-1.778.012-3.152.75-3.906 2.103a5.87 5.87 0 00-.753 2.934c0 2.037.96 3.551 2.707 4.249a4.808 4.808 0 001.916.365c1.84 0 3.223-.757 4.027-2.177.198-.348.35-.719.452-1.107a5.864 5.864 0 00.177-1.537zm-5.021-3.095c1.81.011 2.975.96 3.158 2.598H9.118c.24-1.677 1.413-2.61 2.907-2.598z" />
        </svg>
      </div>
      <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#0A66C2" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </div>
    </div>
  );
}

function PottedPlant() {
  return (
    <svg viewBox="0 0 90 110" width="80" height="98" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="28" y="72" width="34" height="26" rx="3" fill="#1A103C" />
      <rect x="24" y="69" width="42" height="8" rx="2" fill="#1A103C" />
      <path d="M45 70 Q45 52 45 40" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M45 55 Q30 42 22 28 Q34 36 45 55Z" fill="white" stroke="white" strokeWidth="1" />
      <path d="M45 48 Q60 35 68 20 Q56 32 45 48Z" fill="white" stroke="white" strokeWidth="1" />
      <path d="M45 62 Q38 45 35 30 Q42 48 45 62Z" fill="white" stroke="white" strokeWidth="1" />
      <path d="M45 42 Q52 28 56 14 Q50 30 45 42Z" fill="white" stroke="white" strokeWidth="1" />
    </svg>
  );
}

function CheckItem({ text, variant }: { text: string; variant: 'check' | 'cross' }) {
  return (
    <div className="flex items-start gap-3">
      {variant === 'check' ? (
        <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center" style={{ background: '#F5C418' }}>
          <svg viewBox="0 0 14 14" width="10" height="10" fill="none" aria-hidden="true">
            <path d="M2 7l4 4 6-7" stroke="#1A103C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center" style={{ background: '#FCA5A5' }}>
          <svg viewBox="0 0 14 14" width="10" height="10" fill="none" aria-hidden="true">
            <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}
      <span className="font-body text-[13px] md:text-[14px] text-navy/75 leading-snug">{text}</span>
    </div>
  );
}

function OffsetButton({ label, shadowColor }: { label: string; shadowColor: string }) {
  return (
    <div className="relative w-fit" style={{ isolation: 'isolate' }}>
      <div className="absolute top-2 left-2 w-full h-full rounded-sm" style={{ background: shadowColor, zIndex: 0 }} />
      <button className="relative flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[14px] px-5 py-3 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 group" style={{ zIndex: 1 }}>
        {label}
        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

const withoutItems = [
  'Writing the same content 5 different ways by hand',
  'Generic posts that miss each platform\'s tone and format',
  'Hours wasted on manual copy-paste and reformatting',
  'No idea which posts are actually getting traction',
];

const withItems = [
  'One URL → posts for X, Threads & LinkedIn in seconds',
  'AI-adapted tone and format per platform automatically',
  'Smart scheduling at peak engagement times',
  'Real-time performance analytics across all channels',
];

export default function GlowUpSection() {
  return (
    <section className="w-full py-14 md:py-20 px-4 sm:px-6 flex flex-col items-center" style={{ background: '#DFFDE9' }}>
      {/* Headline */}
      <div className="text-center max-w-[640px] mb-10 md:mb-12">
        <h2 className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] text-navy mb-4 md:mb-5">
          The Creator Glow-Up
        </h2>
        <p className="font-body text-[14px] md:text-[16px] leading-relaxed text-navy/60">
          Repurposing, scheduling, analysing, publishing — Channl simplifies every step and delivers
          results your old manual workflow never could.
        </p>
      </div>

      {/* Comparison cards */}
      <div className="flex flex-col md:flex-row max-w-[860px] w-full">

        {/* Left: Without Channl */}
        <div className="flex-1 rounded-2xl md:rounded-r-none relative flex flex-col border-2 border-navy/70 bg-white overflow-hidden" style={{ minHeight: '480px' }}>
          <div className="px-6 sm:px-8 pt-8 pb-0 flex flex-col gap-5 flex-1">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-navy/15" style={{ filter: 'grayscale(1) blur(1.5px)', opacity: 0.55 }}>
              <img src="https://i.pravatar.cc/56?u=without-channl" alt="Without Channl avatar" style={{ width: '56px', height: '56px', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-[20px] md:text-[22px] text-navy mb-2">Without Channl</h3>
              <p className="font-body text-[13px] text-navy/50 leading-snug max-w-[260px]">The old way of managing content that just doesn't scale for creators</p>
            </div>
            <div className="flex flex-col gap-3.5">
              {withoutItems.map((item) => <CheckItem key={item} text={item} variant="cross" />)}
            </div>
            <div className="mt-6 mb-8">
              <OffsetButton label="Start 14-day free trial" shadowColor="#9EA8DC" />
            </div>
          </div>
          <div className="px-4 sm:px-6 pb-0">
            <SmallPlatforms />
          </div>
        </div>

        {/* Right: With Channl */}
        <div className="flex-1 rounded-2xl md:rounded-l-none relative flex flex-col border-2 md:border-l-0 border-navy/70 overflow-hidden" style={{ background: '#7ECABB', minHeight: '480px' }}>
          <div className="absolute top-4 right-4 z-10">
            <Sparkle size={44} color="#F5C418" />
          </div>
          <div className="px-6 sm:px-8 pt-8 pb-0 flex flex-col gap-5 flex-1 relative z-10">
            <ContentIcon />
            <div>
              <h3 className="font-heading font-extrabold text-[20px] md:text-[22px] text-navy mb-2">With Channl</h3>
              <p className="font-body text-[13px] text-navy/60 leading-snug max-w-[260px]">Everything you need to grow your audience across every platform without the stress</p>
            </div>
            <div className="flex flex-col gap-3.5">
              {withItems.map((item) => <CheckItem key={item} text={item} variant="check" />)}
            </div>
            <div className="mt-6 mb-4 relative z-10">
              <OffsetButton label="Start 14-day free trial" shadowColor="#1A103C" />
            </div>
          </div>
          <div className="flex items-end justify-between px-4 pb-0 relative z-10">
            <div className="mb-2"><Sparkle size={34} color="#F5C418" /></div>
            <div><PottedPlant /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
