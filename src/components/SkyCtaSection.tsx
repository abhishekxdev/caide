import { type ReactNode, type CSSProperties } from 'react';

const STARS: Array<{ x: string; y: string; size: number }> = [
  { x: '4%',  y: '4%',  size: 10 }, { x: '14%', y: '2%',  size: 7  },
  { x: '86%', y: '2%',  size: 8  }, { x: '93%', y: '12%', size: 11 },
  { x: '97%', y: '28%', size: 8  }, { x: '3%',  y: '30%', size: 7  },
  { x: '8%',  y: '55%', size: 6  }, { x: '50%', y: '40%', size: 7  },
  { x: '62%', y: '48%', size: 6  }, { x: '78%', y: '40%', size: 7  },
  { x: '20%', y: '18%', size: 6  }, { x: '37%', y: '18%', size: 7  },
  { x: '55%', y: '8%',  size: 6  }, { x: '84%', y: '55%', size: 6  },
  { x: '45%', y: '65%', size: 6  },
];

function StarDot({ x, y, size }: { x: string; y: string; size: number }) {
  const half = size / 2, inner = half * 0.38;
  const pts = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4 - Math.PI / 2;
    const r = i % 2 === 0 ? half : inner;
    return `${half + r * Math.cos(a)},${half + r * Math.sin(a)}`;
  }).join(' ');
  return (
    <svg className="absolute pointer-events-none" style={{ left: x, top: y, width: size, height: size }} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <polygon points={pts} fill="rgba(255,255,255,0.8)" />
    </svg>
  );
}

function Cloud({ style, scale = 1 }: { style?: CSSProperties; scale?: number }) {
  const w = 220 * scale, h = 80 * scale;
  return (
    <svg className="absolute pointer-events-none" style={style} viewBox="0 0 220 80" width={w} height={h} fill="none" aria-hidden="true">
      <ellipse cx="110" cy="56" rx="98" ry="30" fill="rgba(235,228,255,0.85)" />
      <ellipse cx="75"  cy="48" rx="50" ry="34" fill="rgba(235,228,255,0.85)" />
      <ellipse cx="130" cy="44" rx="52" ry="36" fill="rgba(235,228,255,0.85)" />
      <ellipse cx="160" cy="52" rx="44" ry="28" fill="rgba(235,228,255,0.85)" />
    </svg>
  );
}

function MiniCloud({ style }: { style?: CSSProperties }) {
  return (
    <svg className="absolute pointer-events-none" style={style} viewBox="0 0 140 48" width="140" height="48" fill="none" aria-hidden="true">
      <ellipse cx="70" cy="34" rx="62" ry="18" fill="rgba(235,228,255,0.7)" />
      <ellipse cx="48" cy="28" rx="30" ry="20" fill="rgba(235,228,255,0.7)" />
      <ellipse cx="85" cy="26" rx="32" ry="22" fill="rgba(235,228,255,0.7)" />
    </svg>
  );
}

function CrescentMoon({ style }: { style?: CSSProperties }) {
  return (
    <svg className="absolute pointer-events-none" style={style} viewBox="0 0 50 60" width="40" height="48" aria-hidden="true">
      <path d="M32 4 Q14 16 14 30 Q14 44 32 56 Q6 52 6 30 Q6 8 32 4Z" fill="#1A103C" opacity="0.9" />
    </svg>
  );
}

function HotAirBalloon({ icon, balloonSize, style, animClass, animDelay, className = '' }: {
  icon: ReactNode; balloonSize: number; style?: CSSProperties; animClass?: string; animDelay?: string; className?: string;
}) {
  const r = balloonSize / 2, totalW = balloonSize + 20;
  const basketW = Math.round(balloonSize * 0.38), basketH = Math.round(balloonSize * 0.24);
  const cx = totalW / 2, ropeTY = balloonSize + 2;
  const ropeBy = ropeTY + Math.round(balloonSize * 0.28);
  const bx = cx - basketW / 2, totalH = ropeBy + basketH + 4;
  return (
    <div className={`absolute ${animClass ?? ''} ${className}`} style={{ ...style, animationDelay: animDelay }}>
      <svg viewBox={`0 0 ${totalW} ${totalH}`} width={totalW} height={totalH} fill="none" aria-hidden="true">
        <circle cx={cx} cy={r + 2} r={r} fill="#1A103C" />
        <foreignObject x={cx - r * 0.6} y={r * 0.5} width={r * 1.2} height={r * 1.2}>
          <div style={{ width: r * 1.2, height: r * 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.85)' }}>
            {icon}
          </div>
        </foreignObject>
        {[0.28, 0.42, 0.58, 0.72].map((fx, i) => (
          <line key={i} x1={cx + (fx - 0.5) * balloonSize} y1={ropeTY}
            x2={bx + (i < 2 ? i * (basketW / 2) : (i - 2) * (basketW / 2) + basketW / 2)} y2={ropeBy}
            stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
        ))}
        <rect x={bx} y={ropeBy} width={basketW} height={basketH} rx="3" fill="#1A103C" />
        <line x1={bx} y1={ropeBy + basketH / 2} x2={bx + basketW} y2={ropeBy + basketH / 2} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <line x1={cx} y1={ropeBy} x2={cx} y2={ropeBy + basketH} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function HubspotIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.85)" />
      <circle cx="12" cy="4"  r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="20" cy="12" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="12" cy="20" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="4"  cy="12" r="2" fill="rgba(255,255,255,0.7)" />
      <line x1="12" y1="9"  x2="12" y2="6"  stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <line x1="15" y1="12" x2="18" y2="12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <line x1="12" y1="15" x2="12" y2="18" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <line x1="9"  y1="12" x2="6"  y2="12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
    </svg>
  );
}

function MailboxIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 28 28" width={s} height={s} fill="none" aria-hidden="true">
      <rect x="13" y="16" width="2.5" height="9" rx="1" fill="rgba(255,255,255,0.7)" />
      <rect x="4" y="8" width="20" height="12" rx="3" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" />
      <path d="M4 11 Q4 4 14 4 Q24 4 24 11" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" fill="none" />
      <line x1="9" y1="14" x2="19" y2="14" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="8" x2="22" y2="14" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <rect x="22" y="8" width="5" height="3.5" rx="0.5" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}

function PeopleIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="none" aria-hidden="true">
      <circle cx="9"  cy="7"  r="3.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" />
      <circle cx="16" cy="6"  r="2.5" stroke="rgba(255,255,255,0.6)"  strokeWidth="1.5" />
      <path d="M2 19c0-4 3-7 7-7s7 3 7 7" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M16 9c2 0 5 1.8 5 5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SlackIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="none" aria-hidden="true">
      <rect x="4"    y="4"    width="6.5" height="6.5" rx="2" fill="rgba(255,255,255,0.75)" />
      <rect x="13.5" y="4"    width="6.5" height="6.5" rx="2" fill="rgba(255,255,255,0.55)" />
      <rect x="4"    y="13.5" width="6.5" height="6.5" rx="2" fill="rgba(255,255,255,0.55)" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" fill="rgba(255,255,255,0.4)"  />
    </svg>
  );
}

function InlineDog() {
  return (
    <span className="inline-flex items-center mx-1.5 relative" style={{ top: '2px' }}>
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Caide dog">
        <circle cx="16" cy="16" r="15" fill="white" />
        <circle cx="16" cy="16" r="9"  fill="white" stroke="#1A103C" strokeWidth="1.2" />
        <ellipse cx="20" cy="14" rx="3"   ry="2.2" fill="#1A103C" />
        <ellipse cx="13" cy="18" rx="2.2" ry="1.6" fill="#1A103C" />
        <ellipse cx="8"  cy="16" rx="3.5" ry="6"   fill="white" stroke="#1A103C" strokeWidth="1" />
        <ellipse cx="24" cy="16" rx="3.5" ry="6"   fill="white" stroke="#1A103C" strokeWidth="1" />
        <circle cx="13.5" cy="15" r="1.8" fill="#1A103C" />
        <circle cx="18.5" cy="15" r="1.8" fill="#1A103C" />
        <circle cx="14.2" cy="14.3" r="0.6" fill="white" />
        <circle cx="19.2" cy="14.3" r="0.6" fill="white" />
        <ellipse cx="16" cy="20" rx="2" ry="1.5" fill="#1A103C" />
      </svg>
    </span>
  );
}

function OffsetButton({ label }: { label: string }) {
  return (
    <div className="relative w-fit mt-8 md:mt-10" style={{ isolation: 'isolate' }}>
      <div className="absolute top-2 left-2 w-full h-full rounded-sm" style={{ background: '#9EA8DC', zIndex: 0 }} />
      <button className="relative flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[14px] px-6 py-3 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 group" style={{ zIndex: 1 }}>
        {label}
        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

export default function SkyCtaSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-end"
      style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #1B0F42 0%, #4C2FA0 32%, #7B55C8 62%, #C8A8EC 100%)' }}>

      {/* Stars */}
      {STARS.map((s, i) => <StarDot key={i} {...s} />)}

      {/* Balloons — hide smaller ones on mobile */}
      <HotAirBalloon icon={<HubspotIcon s={24} />} balloonSize={64}
        style={{ left: '5%', top: '14%' }} animClass="animate-float-slow" className="hidden sm:block" />
      <HotAirBalloon icon={<MailboxIcon s={36} />} balloonSize={88}
        style={{ left: '38%', top: '4%' }} animClass="animate-float" />
      <HotAirBalloon icon={<PeopleIcon s={30} />} balloonSize={72}
        style={{ right: '12%', top: '5%' }} animClass="animate-float-fast" animDelay="1s" />
      <HotAirBalloon icon={<SlackIcon s={22} />} balloonSize={54}
        style={{ right: '3%', top: '28%' }} animClass="animate-float-slow" className="hidden md:block" />

      {/* Moon */}
      <CrescentMoon style={{ left: '68%', top: '8%' }} />

      {/* Clouds */}
      <Cloud style={{ left: '8%', top: '44%' }} scale={0.85} />
      <Cloud style={{ right: '5%', top: '42%' }} scale={0.65} />
      <MiniCloud style={{ left: '50%', bottom: '34%', transform: 'translateX(-50%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-[680px] pb-16 md:pb-20 pt-16">
        <h2 className="font-heading font-extrabold text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.15]" style={{ color: '#2A1858' }}>
          You don't need to be a sales expert to be a sales expert.
        </h2>
        <p className="font-heading font-extrabold text-[22px] sm:text-[28px] lg:text-[40px] leading-[1.2] mt-6 md:mt-8" style={{ color: '#2A1858' }}>
          80% of cold emails get ignored. Caide<InlineDog />makes sure yours won't.
        </p>
        <OffsetButton label="Try free for 14 days" />
      </div>
    </section>
  );
}
