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

function SmallPlants() {
  return (
    <svg viewBox="0 0 220 55" width="180" height="45" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="25" y1="52" x2="25" y2="32" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="25" cy="28" r="5" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="45" y1="52" x2="45" y2="20" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M45 20 Q40 12 36 8" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M45 20 Q50 12 54 8" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="36" cy="7" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="54" cy="7" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="70" y1="52" x2="70" y2="35" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M70 35 Q64 27 60 22 M70 35 Q76 27 80 22" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="60" cy="20" r="3" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="80" cy="20" r="3" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="100" y1="52" x2="100" y2="38" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="100" cy="33" r="6" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="120" y1="52" x2="120" y2="30" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M120 30 Q114 22 110 17" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M120 30 Q126 22 130 17" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="110" cy="15" r="3.5" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="130" cy="15" r="3.5" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="10" cy="52" r="2" fill="#1A103C" />
      <circle cx="148" cy="52" r="2" fill="#1A103C" />
    </svg>
  );
}

function DalmatianAvatar() {
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-navy/20 flex items-center justify-center bg-white">
      <svg viewBox="0 0 56 56" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dalmatian dog avatar">
        <circle cx="28" cy="28" r="28" fill="#F0F0F0" />
        <circle cx="28" cy="28" r="16" fill="white" />
        <ellipse cx="34" cy="24" rx="5" ry="4" fill="#1A103C" />
        <ellipse cx="22" cy="32" rx="4" ry="3" fill="#1A103C" />
        <ellipse cx="14" cy="28" rx="5" ry="9" fill="white" />
        <ellipse cx="14" cy="28" rx="3.5" ry="7" fill="#D0D0D0" />
        <ellipse cx="42" cy="28" rx="5" ry="9" fill="white" />
        <ellipse cx="42" cy="28" rx="3.5" ry="7" fill="#D0D0D0" />
        <circle cx="23" cy="26" r="2.5" fill="#1A103C" />
        <circle cx="33" cy="26" r="2.5" fill="#1A103C" />
        <circle cx="23.8" cy="25.2" r="0.9" fill="white" />
        <circle cx="33.8" cy="25.2" r="0.9" fill="white" />
        <ellipse cx="28" cy="32" rx="3" ry="2.2" fill="#1A103C" />
        <path d="M25 35 Q28 38 31 35" stroke="#1A103C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
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
  'Juggling 5 different apps just to book one walker',
  'Generic care advice that ignores your dog\'s breed',
  'Hours wasted on manual research and phone calls',
  'Guesswork in finding trustworthy professionals',
];

const withItems = [
  'One platform for booking, tracking, paying, and messaging',
  'Hyper-personalised care based on your dog\'s profile',
  'Deep professional vetting done for you at scale',
  'Smart matching based on your dog\'s real needs',
];

export default function GlowUpSection() {
  return (
    <section className="w-full py-14 md:py-20 px-4 sm:px-6 flex flex-col items-center" style={{ background: '#DFFDE9' }}>
      {/* Headline */}
      <div className="text-center max-w-[640px] mb-10 md:mb-12">
        <h2 className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] text-navy mb-4 md:mb-5">
          The Dog Care Glow-Up
        </h2>
        <p className="font-body text-[14px] md:text-[16px] leading-relaxed text-navy/60">
          Scheduling, tracking, communicating, paying — Woofly simplifies every step and delivers
          results your old scattered setup never could.
        </p>
      </div>

      {/* Comparison cards */}
      <div className="flex flex-col md:flex-row max-w-[860px] w-full">

        {/* Left: Without Caide */}
        <div className="flex-1 rounded-2xl md:rounded-r-none relative flex flex-col border-2 border-navy/70 bg-white overflow-hidden" style={{ minHeight: '480px' }}>
          <div className="px-6 sm:px-8 pt-8 pb-0 flex flex-col gap-5 flex-1">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-navy/15" style={{ filter: 'grayscale(1) blur(1.5px)', opacity: 0.55 }}>
              <img src="https://i.pravatar.cc/56?u=without-caide" alt="Without Caide avatar" style={{ width: '56px', height: '56px', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-[20px] md:text-[22px] text-navy mb-2">Without Woofly</h3>
              <p className="font-body text-[13px] text-navy/50 leading-snug max-w-[260px]">The old way of managing dog care that just doesn't scale</p>
            </div>
            <div className="flex flex-col gap-3.5">
              {withoutItems.map((item) => <CheckItem key={item} text={item} variant="cross" />)}
            </div>
            <div className="mt-6 mb-8">
              <OffsetButton label="Start 14-day free trial" shadowColor="#9EA8DC" />
            </div>
          </div>
          <div className="px-4 sm:px-6 pb-0">
            <SmallPlants />
          </div>
        </div>

        {/* Right: With Caide */}
        <div className="flex-1 rounded-2xl md:rounded-l-none relative flex flex-col border-2 md:border-l-0 border-navy/70 overflow-hidden" style={{ background: '#7ECABB', minHeight: '480px' }}>
          <div className="absolute top-4 right-4 z-10">
            <Sparkle size={44} color="#F5C418" />
          </div>
          <div className="px-6 sm:px-8 pt-8 pb-0 flex flex-col gap-5 flex-1 relative z-10">
            <DalmatianAvatar />
            <div>
              <h3 className="font-heading font-extrabold text-[20px] md:text-[22px] text-navy mb-2">With Woofly</h3>
              <p className="font-body text-[13px] text-navy/60 leading-snug max-w-[260px]">Everything you need to give your dog world-class care without the stress</p>
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
