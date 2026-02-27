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

function PostPreviewCard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-5 w-full max-w-[320px]">
      <BrowserDots />
      <div className="flex items-center gap-3 mb-4">
        <div className="relative shrink-0">
          <img src="https://i.pravatar.cc/48?u=maya-creator" alt="Maya Chen creator avatar"
            className="w-12 h-12 rounded-full object-cover" style={{ width: '48px', height: '48px' }} />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-sm bg-[#0A66C2] flex items-center justify-center">
            <svg viewBox="0 0 16 16" fill="white" width="10" height="10" aria-hidden="true">
              <path d="M1.5 1A1.5 1.5 0 1 0 1.5 4 1.5 1.5 0 0 0 1.5 1zM0 5.5h3v9H0zM5.5 5.5h2.8v1.3h.04c.4-.75 1.37-1.54 2.82-1.54C14.17 6.26 14.5 8.24 14.5 10.82V14.5h-3V10.3c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23V14.5h-3V5.5z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="font-heading font-bold text-[15px] text-navy leading-tight">Maya Chen</p>
          <p className="font-body text-[12px] text-muted">Content Creator · 84K followers</p>
        </div>
      </div>
      <div className="h-px bg-gray-100 mb-4" />
      <div className="flex items-center gap-4 flex-wrap mb-4">
        <MetricBadge bg="#F5C418" value="12.4K views" icon={
          <svg viewBox="0 0 16 16" fill="white" width="13" height="13" aria-hidden="true">
            <path d="M1 8 Q4 3 8 3 Q12 3 15 8 Q12 13 8 13 Q4 13 1 8Z" fill="none" stroke="white" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2.5" fill="white" />
          </svg>
        } />
        <MetricBadge bg="#0A66C2" value="4.2% CTR" icon={
          <svg viewBox="0 0 16 16" fill="white" width="13" height="13" aria-hidden="true">
            <path d="M2 14 L6 8 L10 11 L14 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        } />
        <MetricBadge bg="#1A103C" value="3 platforms" icon={
          <svg viewBox="0 0 16 16" fill="none" width="13" height="13" aria-hidden="true">
            <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
            <path d="M2 8 Q5 5 8 8 Q11 11 14 8" stroke="white" strokeWidth="1.2" fill="none" />
            <path d="M8 2 Q6 5 8 8 Q10 11 8 14" stroke="white" strokeWidth="1.2" fill="none" />
          </svg>
        } />
      </div>
      <div className="h-px bg-gray-100 mb-4" />
      <div className="flex flex-col gap-3 mb-5">
        <CheckRow /><CheckRow /><CheckRow />
      </div>
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-navy/60 font-body font-semibold text-[13px] py-2.5 rounded-lg hover:border-navy/30 transition-colors">
          Edit post
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M11 2l3 3-8 8H3v-3L11 2z" />
          </svg>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-body font-semibold text-[13px] py-2.5 rounded-lg hover:bg-navy-light transition-colors">
          Publish
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
            The Right Post for Every Platform
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-navy/65">
            No more guesswork. Channl tailors each post to the platform's format, tone, and
            character limits — automatically. X threads, LinkedIn articles, Threads posts,
            all distinct and optimised.
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
          <PostPreviewCard />
        </div>

        {/* Platform icons at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-6 z-10 pb-4">
          {/* X */}
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-label="X platform" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          {/* Threads */}
          <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white" aria-label="Threads platform" aria-hidden="true">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068v-.168C1.5 8.149 2.391 5.275 4.14 3.158 5.978.928 8.71-.005 12.093 0c3.366.007 6.064 1.009 8.016 2.978 1.875 1.888 2.89 4.542 2.891 7.664v.12c.002 3.12-1.014 5.775-2.89 7.664-1.952 1.97-4.65 2.97-8.016 2.978zm4.86-10.003c-.293-3.047-2.153-4.81-5.02-4.83-1.778.012-3.152.75-3.906 2.103a5.87 5.87 0 00-.753 2.934c0 2.037.96 3.551 2.707 4.249a4.808 4.808 0 001.916.365c1.84 0 3.223-.757 4.027-2.177.198-.348.35-.719.452-1.107a5.864 5.864 0 00.177-1.537zm-5.021-3.095c1.81.011 2.975.96 3.158 2.598H9.118c.24-1.677 1.413-2.61 2.907-2.598z" />
            </svg>
          </div>
          {/* LinkedIn */}
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-label="LinkedIn platform" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
