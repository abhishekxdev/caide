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

function XIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="rgba(255,255,255,0.85)" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ThreadsIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="rgba(255,255,255,0.85)" aria-hidden="true">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068v-.168C1.5 8.149 2.391 5.275 4.14 3.158 5.978.928 8.71-.005 12.093 0c3.366.007 6.064 1.009 8.016 2.978 1.875 1.888 2.89 4.542 2.891 7.664v.12c.002 3.12-1.014 5.775-2.89 7.664-1.952 1.97-4.65 2.97-8.016 2.978zm4.86-10.003c-.293-3.047-2.153-4.81-5.02-4.83-1.778.012-3.152.75-3.906 2.103a5.87 5.87 0 00-.753 2.934c0 2.037.96 3.551 2.707 4.249a4.808 4.808 0 001.916.365c1.84 0 3.223-.757 4.027-2.177.198-.348.35-.719.452-1.107a5.864 5.864 0 00.177-1.537zm-5.021-3.095c1.81.011 2.975.96 3.158 2.598H9.118c.24-1.677 1.413-2.61 2.907-2.598z" />
    </svg>
  );
}

function LinkedInIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="rgba(255,255,255,0.85)" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function AnalyticsIcon({ s }: { s: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="none" aria-hidden="true">
      <path d="M3 20 L7 13 L11 16 L15 8 L21 4" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="13" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="11" cy="16" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="15" cy="8" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="21" cy="4" r="2" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}

function InlineIcon() {
  return (
    <span className="inline-flex items-center mx-1.5 relative" style={{ top: '2px' }}>
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Channl icon">
        <circle cx="16" cy="16" r="15" fill="rgba(42,24,88,0.9)" />
        <path d="M4 16 Q8 8 16 8 Q24 8 28 16 Q24 24 16 24 Q8 24 4 16Z" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" fill="none" />
        <circle cx="16" cy="16" r="3.5" fill="rgba(255,255,255,0.85)" />
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
      <HotAirBalloon icon={<XIcon s={24} />} balloonSize={64}
        style={{ left: '5%', top: '14%' }} animClass="animate-float-slow" className="hidden sm:block" />
      <HotAirBalloon icon={<ThreadsIcon s={36} />} balloonSize={88}
        style={{ left: '38%', top: '4%' }} animClass="animate-float" />
      <HotAirBalloon icon={<LinkedInIcon s={30} />} balloonSize={72}
        style={{ right: '12%', top: '5%' }} animClass="animate-float-fast" animDelay="1s" />
      <HotAirBalloon icon={<AnalyticsIcon s={22} />} balloonSize={54}
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
          You don't need a content team to publish like one.
        </h2>
        <p className="font-heading font-extrabold text-[22px] sm:text-[28px] lg:text-[40px] leading-[1.2] mt-6 md:mt-8" style={{ color: '#2A1858' }}>
          80% of creators never repurpose their content. Channl<InlineIcon />makes sure you won't miss a post.
        </p>
        <OffsetButton label="Try free for 14 days" />
      </div>
    </section>
  );
}
