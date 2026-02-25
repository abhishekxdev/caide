import { type ReactNode } from 'react';

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
    </div>
  );
}

function MetricBadge({ icon, value, bg }: { icon: ReactNode; value: string; bg: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0" style={{ background: bg }}>
        {icon}
      </div>
      <span className="font-heading font-bold text-[13px] text-navy">{value}</span>
    </div>
  );
}

function CheckRow() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full border-2 border-golden flex items-center justify-center shrink-0">
        <div className="w-2 h-2 rounded-full bg-golden" />
      </div>
      <div className="h-2 bg-gray-200 rounded-full flex-1" />
    </div>
  );
}

function ProspectCard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-5 w-full max-w-[320px]">
      <BrowserDots />
      <div className="flex items-center gap-3 mb-4">
        <div className="relative shrink-0">
          <img src="https://i.pravatar.cc/48?u=jessica-moore-cmo" alt="Jessica Moore avatar"
            className="w-12 h-12 rounded-full object-cover" style={{ width: '48px', height: '48px' }} />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-sm bg-[#0A66C2] flex items-center justify-center">
            <svg viewBox="0 0 16 16" fill="white" width="10" height="10" aria-hidden="true">
              <path d="M1.5 1A1.5 1.5 0 1 0 1.5 4 1.5 1.5 0 0 0 1.5 1zM0 5.5h3v9H0zM5.5 5.5h2.8v1.3h.04c.4-.75 1.37-1.54 2.82-1.54C14.17 6.26 14.5 8.24 14.5 10.82V14.5h-3V10.3c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23V14.5h-3V5.5z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="font-heading font-bold text-[15px] text-navy leading-tight">Jessica Moore</p>
          <p className="font-body text-[12px] text-muted">CMO, Hooli</p>
        </div>
      </div>
      <div className="h-px bg-gray-100 mb-4" />
      <div className="flex items-center gap-4 flex-wrap mb-4">
        <MetricBadge bg="#F5C418" value="£200,000+" icon={
          <svg viewBox="0 0 16 16" fill="white" width="13" height="13" aria-hidden="true">
            <rect x="1" y="2" width="14" height="11" rx="1.5" fill="none" stroke="white" strokeWidth="1.5" />
            <path d="M1 6h14" stroke="white" strokeWidth="1.5" />
            <rect x="3" y="8.5" width="4" height="2" rx="0.5" fill="white" />
          </svg>
        } />
        <MetricBadge bg="#0A66C2" value="5-20" icon={
          <svg viewBox="0 0 16 16" fill="white" width="13" height="13" aria-hidden="true">
            <circle cx="8" cy="5" r="3" /><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6H2z" />
          </svg>
        } />
        <MetricBadge bg="#B22234" value="USA" icon={
          <svg viewBox="0 0 20 14" width="13" height="9" aria-hidden="true">
            <rect width="20" height="14" fill="#B22234" />
            <rect y="2" width="20" height="2" fill="white" /><rect y="6" width="20" height="2" fill="white" />
            <rect y="10" width="20" height="2" fill="white" /><rect width="8" height="7" fill="#3C3B6E" />
          </svg>
        } />
      </div>
      <div className="h-px bg-gray-100 mb-4" />
      <div className="flex flex-col gap-3 mb-5">
        <CheckRow /><CheckRow /><CheckRow />
      </div>
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-navy/60 font-body font-semibold text-[13px] py-2.5 rounded-lg hover:border-navy/30 transition-colors">
          Not right
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-body font-semibold text-[13px] py-2.5 rounded-lg hover:bg-navy-light transition-colors">
          Confirm
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 8l5 5 7-9" />
          </svg>
        </button>
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

export default function ProspectSection() {
  return (
    <section className="w-full flex flex-col md:flex-row">

      {/* LEFT: text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-14 md:py-20" style={{ background: '#CC9EF5' }}>
        <div className="max-w-[380px] flex flex-col gap-6">
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.1] text-navy">
            Identify Your Ideal Prospects
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/65">
            No guesswork. Caide helps you define your Ideal Customer Profile using real data and
            business goals, so you know exactly who to target for maximum ROI.
          </p>
          <OffsetButton label="Try For Free" />
        </div>
      </div>

      {/* RIGHT: blue with dot grid */}
      <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center py-12 overflow-hidden min-h-[420px] md:min-h-0" style={{ background: '#5B6FE8' }}>
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <pattern id="blue-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1.2" fill="rgba(255,255,255,0.18)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blue-dots)" />
        </svg>

        <div className="relative z-10 -translate-y-6 flex justify-center px-4">
          <ProspectCard />
        </div>

        {/* Dog + plants at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-4 z-10">
          <svg viewBox="0 0 30 44" width="24" height="36" fill="none" aria-hidden="true">
            <path d="M15 42 Q15 30 8 22 M15 42 Q15 30 22 22" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
            <ellipse cx="8" cy="20" rx="6" ry="5" fill="rgba(255,255,255,0.4)" />
            <ellipse cx="22" cy="20" rx="6" ry="5" fill="rgba(255,255,255,0.4)" />
          </svg>

          <svg viewBox="0 0 120 130" width="100" height="108" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sitting dalmatian dog">
            <ellipse cx="60" cy="90" rx="30" ry="28" fill="white" />
            <ellipse cx="50" cy="83" rx="7" ry="5" fill="#1A103C" opacity="0.75" />
            <ellipse cx="72" cy="95" rx="5" ry="4" fill="#1A103C" opacity="0.65" />
            <ellipse cx="56" cy="103" rx="4" ry="3" fill="#1A103C" opacity="0.6" />
            <circle cx="60" cy="52" r="20" fill="white" />
            <ellipse cx="68" cy="47" rx="5" ry="4" fill="#1A103C" opacity="0.7" />
            <ellipse cx="43" cy="49" rx="7" ry="12" fill="white" stroke="white" strokeWidth="1" transform="rotate(-10 43 49)" />
            <ellipse cx="43" cy="49" rx="5" ry="10" fill="#1A103C" opacity="0.25" transform="rotate(-10 43 49)" />
            <ellipse cx="77" cy="49" rx="7" ry="12" fill="white" stroke="white" strokeWidth="1" transform="rotate(10 77 49)" />
            <ellipse cx="77" cy="49" rx="5" ry="10" fill="#1A103C" opacity="0.25" transform="rotate(10 77 49)" />
            <circle cx="53" cy="50" r="3" fill="#1A103C" /><circle cx="67" cy="50" r="3" fill="#1A103C" />
            <circle cx="54.2" cy="49" r="1" fill="white" /><circle cx="68.2" cy="49" r="1" fill="white" />
            <ellipse cx="60" cy="60" rx="4" ry="3" fill="#1A103C" />
            <path d="M56 63 Q60 67 64 63" stroke="#1A103C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="44" y="108" width="12" height="20" rx="6" fill="white" />
            <rect x="64" y="108" width="12" height="20" rx="6" fill="white" />
            <path d="M88 82 Q102 68 98 58" stroke="white" strokeWidth="7" strokeLinecap="round" fill="none" />
            <ellipse cx="97" cy="57" rx="5" ry="3" fill="#1A103C" opacity="0.5" transform="rotate(-20 97 57)" />
            <ellipse cx="50" cy="127" rx="7" ry="4" fill="white" />
            <ellipse cx="70" cy="127" rx="7" ry="4" fill="white" />
          </svg>

          <svg viewBox="0 0 30 44" width="24" height="36" fill="none" aria-hidden="true">
            <path d="M15 42 Q15 30 8 22 M15 42 Q15 30 22 22" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
            <ellipse cx="8" cy="20" rx="6" ry="5" fill="rgba(255,255,255,0.4)" />
            <ellipse cx="22" cy="20" rx="6" ry="5" fill="rgba(255,255,255,0.4)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
