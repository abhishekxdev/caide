function RunningDog() {
  return (
    <svg viewBox="0 0 200 140" width="180" height="126" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Running dalmatian dog">
      <path d="M162 55 Q178 38 185 28" stroke="#1A103C" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="125" cy="72" rx="45" ry="25" fill="white" stroke="#1A103C" strokeWidth="2.5" />
      <ellipse cx="110" cy="62" rx="9" ry="6" fill="#1A103C" />
      <ellipse cx="138" cy="78" rx="7" ry="5" fill="#1A103C" />
      <ellipse cx="118" cy="82" rx="5" ry="4" fill="#1A103C" />
      <path d="M85 60 Q78 50 80 42" stroke="white" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M85 60 Q78 50 80 42" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="75" cy="38" r="18" fill="white" stroke="#1A103C" strokeWidth="2.5" />
      <ellipse cx="82" cy="33" rx="6" ry="4.5" fill="#1A103C" />
      <path d="M65 28 Q52 30 50 42 Q52 50 62 46 Q70 42 68 30 Z" fill="white" stroke="#1A103C" strokeWidth="2" />
      <circle cx="70" cy="36" r="3.5" fill="#1A103C" /><circle cx="71.2" cy="35" r="1.2" fill="white" />
      <ellipse cx="62" cy="44" rx="4" ry="3" fill="#1A103C" />
      <path d="M60 47 Q62 53 64 47" stroke="#E05080" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M75 50 Q82 56 90 54" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M95 90 Q88 108 80 118" stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M95 90 Q88 108 80 118" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M108 93 Q110 112 118 120" stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M108 93 Q110 112 118 120" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M150 88 Q160 108 155 120" stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M150 88 Q160 108 155 120" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M162 80 Q178 100 175 118" stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M162 80 Q178 100 175 118" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="79" cy="120" rx="7" ry="4" fill="white" stroke="#1A103C" strokeWidth="2" />
      <ellipse cx="119" cy="121" rx="7" ry="4" fill="white" stroke="#1A103C" strokeWidth="2" />
      <ellipse cx="154" cy="121" rx="7" ry="4" fill="white" stroke="#1A103C" strokeWidth="2" />
      <ellipse cx="175" cy="119" rx="7" ry="4" fill="white" stroke="#1A103C" strokeWidth="2" />
    </svg>
  );
}

function PlantArches() {
  return (
    <svg viewBox="0 0 260 90" width="240" height="83" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 85 Q40 20 70 85" stroke="#1A103C" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 28 Q40 16 32 10 M40 28 Q40 16 48 10" stroke="#1A103C" strokeWidth="1.5" fill="none" />
      <circle cx="32" cy="8" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="48" cy="8" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <path d="M90 88 Q130 10 170 88" stroke="#1A103C" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M130 18 Q130 6 122 0 M130 18 Q130 6 138 0" stroke="#1A103C" strokeWidth="1.5" fill="none" />
      <circle cx="122" cy="-2" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="138" cy="-2" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <path d="M190 88 Q215 45 240 88" stroke="#1A103C" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function MetricCard({ bg, accent, value, progressColor }: { bg: string; accent: string; value: string; progressColor: string }) {
  return (
    <div className="flex-1 rounded-xl p-3 flex flex-col gap-2" style={{ background: bg }}>
      <div className="w-16 h-3 rounded-full" style={{ background: accent, opacity: 0.5 }} />
      <div className="flex items-baseline gap-2">
        <span className="font-heading font-extrabold text-[22px] text-navy leading-none">{value}</span>
        <span className="font-body text-[11px] text-navy/60 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />100%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/40">
        <div className="h-full rounded-full w-full" style={{ background: progressColor }} />
      </div>
    </div>
  );
}

function ProspectRow({ avatarUrl, name, role, isHighlighted = false }: { avatarUrl: string; name?: string; role?: string; isHighlighted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg" style={isHighlighted ? { background: '#5B7CF5' } : {}}>
      <img src={avatarUrl} alt={name ? `${name} avatar` : 'prospect avatar'}
        className="w-7 h-7 rounded-full object-cover shrink-0" style={{ width: '28px', height: '28px' }} />
      <div className="flex-1 min-w-0">
        {name ? (
          <>
            <p className="font-heading font-bold text-[12px] text-white leading-tight">{name}</p>
            <p className="font-body text-[10px] text-white/70">{role}</p>
          </>
        ) : (
          <>
            <div className="h-2 bg-gray-200 rounded-full w-[70%] mb-1.5" />
            <div className="h-2 bg-gray-200 rounded-full w-[45%]" />
          </>
        )}
      </div>
      <div className="px-2 py-0.5 rounded-full text-[9px] font-bold shrink-0" style={{ background: '#FFB5D0', color: '#1A103C' }}>
        {isHighlighted ? 'Hot lead' : 'Approve'}
      </div>
    </div>
  );
}

function CRMMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ width: '100%', maxWidth: '420px', border: '2px solid rgba(26,16,60,0.12)' }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex" style={{ minHeight: '320px' }}>
        {/* Dark sidebar */}
        <div className="flex flex-col items-center py-4 gap-4 shrink-0" style={{ width: '56px', background: '#0F0A28' }}>
          <div className="w-7 h-7 rounded-sm bg-navy flex items-center justify-center">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <rect y="0" width="5" height="1.5" fill="white" />
              <rect y="3" width="10" height="1.5" fill="white" />
              <rect x="5" y="6" width="5" height="1.5" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col gap-1.5 w-6">
            {[...Array(3)].map((_, i) => <div key={i} className="h-0.5 w-full rounded-full bg-white/25" />)}
          </div>
          <div className="flex flex-col items-center gap-1 px-1 py-2 rounded-lg w-full mx-1" style={{ background: 'rgba(91,111,245,0.4)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="3" stroke="white" strokeWidth="1.5" />
              <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
            <span className="text-white text-[7px] font-bold leading-none">Prospects</span>
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
              <rect x="9" y="1" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
              <rect x="1" y="9" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
              <rect x="9" y="9" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
              <path d="M8 5v3l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
            </svg>
          </div>
        </div>
        {/* Content area */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          <div className="flex gap-3">
            <MetricCard bg="#F5C418" accent="#1A103C" value="123" progressColor="#3B82F6" />
            <MetricCard bg="#C4BCEC" accent="#1A103C" value="58" progressColor="#EF4444" />
          </div>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="#6B7280" strokeWidth="1.5" />
              <path d="M10.5 10.5l3.5 3.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-body text-[12px] text-gray-500">Moore</span>
          </div>
          <div className="flex flex-col gap-1">
            <ProspectRow avatarUrl="https://i.pravatar.cc/28?u=prospect-row-1" />
            <ProspectRow avatarUrl="https://i.pravatar.cc/28?u=jessica-moore-cmo" name="Jessica Moore" role="CMO, Hooli" isHighlighted />
            <ProspectRow avatarUrl="https://i.pravatar.cc/28?u=prospect-row-3" />
            <ProspectRow avatarUrl="https://i.pravatar.cc/28?u=prospect-row-4" />
            <ProspectRow avatarUrl="https://i.pravatar.cc/28?u=prospect-row-5" />
          </div>
        </div>
      </div>
    </div>
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

export default function LeadsSection() {
  return (
    <section className="w-full flex flex-col md:flex-row md:min-h-screen">

      {/* LEFT: text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-14 md:py-20" style={{ background: '#D4AAFF' }}>
        <div className="max-w-[400px] flex flex-col gap-6">
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[38px] lg:text-[46px] leading-[1.1] text-navy">
            Source and Enrich Quality Leads Automatically
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/65">
            Caide pulls leads from trusted sources and enriches them with verified, detailed info.
            No more outdated contacts. Just accurate, high-value prospects ready for outreach.
          </p>
          <OffsetButton label="Try For Free" />
        </div>
      </div>

      {/* RIGHT: mint green with dot grid */}
      <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center py-10 md:py-12 overflow-hidden min-h-[520px] md:min-h-0" style={{ background: '#C2FAF2' }}>
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <pattern id="leads-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1.1" fill="rgba(26,16,60,0.12)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leads-dots)" />
        </svg>

        {/* CRM mockup */}
        <div className="relative z-10 w-full px-4 flex justify-center -translate-y-6 md:-translate-y-8">
          <CRMMockup />
        </div>

        {/* Running dog + arches at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <RunningDog />
          <PlantArches />
        </div>
      </div>
    </section>
  );
}
