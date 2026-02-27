function ContentWaveIcon() {
  return (
    <svg viewBox="0 0 200 140" width="180" height="126" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Content wave illustration" aria-hidden="true">
      {/* Wave / signal lines */}
      <path d="M10 70 Q30 30 50 70 Q70 110 90 70 Q110 30 130 70 Q150 110 170 70 Q185 42 195 55"
        stroke="#1A103C" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M10 90 Q30 60 50 90 Q70 120 90 90 Q110 60 130 90 Q150 120 170 90 Q185 72 195 78"
        stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M10 50 Q30 10 50 50 Q70 90 90 50 Q110 10 130 50 Q150 90 170 50 Q185 20 195 32"
        stroke="#1A103C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
      {/* Platform circles */}
      <circle cx="50" cy="70" r="10" fill="white" stroke="#1A103C" strokeWidth="2.5" />
      <path d="M47 67 l3 3 5-5" stroke="#1A103C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="130" cy="70" r="10" fill="white" stroke="#1A103C" strokeWidth="2.5" />
      <path d="M127 67 l3 3 5-5" stroke="#1A103C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />↑ 24%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/40">
        <div className="h-full rounded-full w-full" style={{ background: progressColor }} />
      </div>
    </div>
  );
}

function PostRow({ avatarUrl, platform, excerpt, isHighlighted = false }: { avatarUrl: string; platform?: string; excerpt?: string; isHighlighted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg" style={isHighlighted ? { background: '#5B7CF5' } : {}}>
      <img src={avatarUrl} alt={platform ? `${platform} post preview` : 'post preview'}
        className="w-7 h-7 rounded-full object-cover shrink-0" style={{ width: '28px', height: '28px' }} />
      <div className="flex-1 min-w-0">
        {platform ? (
          <>
            <p className="font-heading font-bold text-[12px] text-white leading-tight">{platform}</p>
            <p className="font-body text-[10px] text-white/70 truncate">{excerpt}</p>
          </>
        ) : (
          <>
            <div className="h-2 bg-gray-200 rounded-full w-[70%] mb-1.5" />
            <div className="h-2 bg-gray-200 rounded-full w-[45%]" />
          </>
        )}
      </div>
      <div className="px-2 py-0.5 rounded-full text-[9px] font-bold shrink-0" style={{ background: '#FFB5D0', color: '#1A103C' }}>
        {isHighlighted ? 'Trending' : 'Queue'}
      </div>
    </div>
  );
}

function ContentDashboardMockup() {
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M2 12 Q6 4 12 4 Q18 4 22 12 Q18 20 12 20 Q6 20 2 12Z" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="3" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col gap-1.5 w-6">
            {[...Array(3)].map((_, i) => <div key={i} className="h-0.5 w-full rounded-full bg-white/25" />)}
          </div>
          <div className="flex flex-col items-center gap-1 px-1 py-2 rounded-lg w-full mx-1" style={{ background: 'rgba(91,111,245,0.4)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
              <rect x="9" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
              <rect x="2" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
              <rect x="9" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
            </svg>
            <span className="text-white text-[7px] font-bold leading-none">Posts</span>
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 4 L14 4 M2 8 L10 8 M2 12 L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
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
            <MetricCard bg="#F5C418" accent="#1A103C" value="38" progressColor="#3B82F6" />
            <MetricCard bg="#C4BCEC" accent="#1A103C" value="9.1K" progressColor="#8B5CF6" />
          </div>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="#6B7280" strokeWidth="1.5" />
              <path d="M10.5 10.5l3.5 3.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-body text-[12px] text-gray-500">Search posts...</span>
          </div>
          <div className="flex flex-col gap-1">
            <PostRow avatarUrl="https://i.pravatar.cc/28?u=post-row-1" />
            <PostRow avatarUrl="https://i.pravatar.cc/28?u=maya-creator" platform="LinkedIn" excerpt="Why AI is changing content..." isHighlighted />
            <PostRow avatarUrl="https://i.pravatar.cc/28?u=post-row-3" />
            <PostRow avatarUrl="https://i.pravatar.cc/28?u=post-row-4" />
            <PostRow avatarUrl="https://i.pravatar.cc/28?u=post-row-5" />
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
            Schedule and Publish Automatically
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/65">
            Channl analyses your content, enriches each post with AI-powered insights, and queues
            everything for peak engagement times. No more manual publishing — just set it and grow.
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

        {/* Dashboard mockup */}
        <div className="relative z-10 w-full px-4 flex justify-center -translate-y-6 md:-translate-y-8">
          <ContentDashboardMockup />
        </div>

        {/* Wave illustration at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <ContentWaveIcon />
        </div>
      </div>
    </section>
  );
}
