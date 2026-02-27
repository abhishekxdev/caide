import { useState } from 'react';

function CityIllustration() {
  const fill   = '#E4E3E8';
  const stroke = '#C8C6D2';
  const dark   = '#B0AEBC';
  return (
    <svg viewBox="0 0 1440 340" width="100%" height="340" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="xMidYMax slice">
      <line x1="0" y1="310" x2="1440" y2="310" stroke={dark} strokeWidth="2" />
      <rect x="0" y="40" width="55" height="270" fill={fill} stroke={stroke} strokeWidth="1.2" />
      {[60,80,100,120,140,160,180,200,220].map(y => <rect key={`a${y}`} x="8" y={y} width="16" height="14" rx="1" fill={dark} opacity="0.6" />)}
      {[60,80,100,120,140,160,180,200,220].map(y => <rect key={`b${y}`} x="30" y={y} width="16" height="14" rx="1" fill={dark} opacity="0.6" />)}
      <rect x="50" y="70" width="200" height="240" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {[0,1,2,3].map(col => [0,1,2,3,4].map(row => <rect key={`l${col}${row}`} x={68+col*46} y={88+row*38} width="30" height="24" rx="2" fill={dark} opacity="0.55" />))}
      <circle cx="150" cy="210" r="28" fill="white" stroke={stroke} strokeWidth="2" />
      <circle cx="150" cy="210" r="22" fill={fill} stroke={stroke} strokeWidth="1" />
      <rect x="140" y="204" width="20" height="14" rx="2" fill={dark} />
      <path d="M160 208 Q168 208 168 214 Q168 218 160 218" stroke={dark} strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="60" y="268" width="80" height="42" fill="white" stroke={stroke} strokeWidth="1" opacity="0.8" />
      <line x1="65" y1="295" x2="135" y2="295" stroke={dark} strokeWidth="2" />
      <rect x="246" y="100" width="130" height="210" fill={fill} stroke={stroke} strokeWidth="1.2" />
      {[0,1,2].map(col => [0,1,2,3].map(row => <rect key={`m${col}${row}`} x={256+col*38} y={116+row*42} width="24" height="28" rx="2" fill={dark} opacity="0.5" />))}
      <ellipse cx="410" cy="235" rx="38" ry="34" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <line x1="410" y1="268" x2="410" y2="310" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <line x1="490" y1="310" x2="490" y2="160" stroke={dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M490 160 Q490 140 520 140" stroke={dark} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <ellipse cx="524" cy="142" rx="12" ry="7" fill="white" stroke={dark} strokeWidth="2" />
      {Array.from({length:18},(_,i)=>(
        <g key={i}>
          <line x1={535+i*26} y1="280" x2={535+i*26} y2="240" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx={535+i*26} cy="238" r="3" fill={dark} />
        </g>
      ))}
      <line x1="535" y1="256" x2="998" y2="256" stroke={dark} strokeWidth="2" />
      <line x1="535" y1="270" x2="998" y2="270" stroke={dark} strokeWidth="2" />
      <rect x="690" y="236" width="80" height="44" rx="2" fill="#EFEFEF" stroke={dark} strokeWidth="2" />
      <line x1="730" y1="236" x2="730" y2="280" stroke={dark} strokeWidth="1.5" />
      <circle cx="720" cy="258" r="4" fill={dark} />
      <ellipse cx="980" cy="240" rx="34" ry="30" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <line x1="980" y1="268" x2="980" y2="310" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      {/* Person at desk */}
      <ellipse cx="730" cy="220" rx="13" ry="16" fill="#1A103C" />
      <circle cx="730" cy="200" r="10" fill="#1A103C" />
      <line x1="726" y1="236" x2="720" y2="270" stroke="#1A103C" strokeWidth="4" strokeLinecap="round" />
      <line x1="734" y1="236" x2="742" y2="265" stroke="#1A103C" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="718" cy="272" rx="8" ry="4" fill="#1A103C" />
      <ellipse cx="743" cy="267" rx="8" ry="4" fill="#1A103C" />
      <line x1="718" y1="224" x2="700" y2="248" stroke="#1A103C" strokeWidth="3" strokeLinecap="round" />
      {/* Laptop */}
      <path d="M700 248 Q680 255 672 260" stroke="#1A103C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="660" y="248" width="30" height="20" rx="2" fill="white" stroke="#1A103C" strokeWidth="1.5" />
      <rect x="656" y="268" width="38" height="4" rx="1" fill="#1A103C" opacity="0.5" />
      {/* Right buildings */}
      <rect x="1020" y="60" width="170" height="250" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {[0,1,2,3].map(col=>[0,1,2,3,4].map(row=><rect key={`r${col}${row}`} x={1030+col*38} y={76+row*40} width="24" height="28" rx="2" fill={dark} opacity="0.5" />))}
      <rect x="1044" y="220" width="104" height="60" rx="3" fill="white" stroke={dark} strokeWidth="2" />
      <rect x="1186" y="90" width="90" height="220" fill={fill} stroke={stroke} strokeWidth="1.2" />
      {[0,1].map(col=>[0,1,2,3,4].map(row=><rect key={`fr${col}${row}`} x={1196+col*40} y={106+row*36} width="26" height="22" rx="2" fill={dark} opacity="0.45" />))}
      <rect x="1272" y="30" width="168" height="280" fill={fill} stroke={stroke} strokeWidth="1.2" />
      {/* Bicycle */}
      <circle cx="1195" cy="298" r="14" fill="none" stroke={dark} strokeWidth="2.5" />
      <circle cx="1225" cy="298" r="14" fill="none" stroke={dark} strokeWidth="2.5" />
      <line x1="1195" y1="298" x2="1210" y2="284" stroke={dark} strokeWidth="2" />
      <line x1="1210" y1="284" x2="1225" y2="298" stroke={dark} strokeWidth="2" />
      <line x1="1210" y1="284" x2="1210" y2="296" stroke={dark} strokeWidth="2" />
      <line x1="1205" y1="284" x2="1215" y2="284" stroke={dark} strokeWidth="2.5" />
    </svg>
  );
}

function MockRecaptcha() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="flex items-center gap-4 bg-white rounded-lg border border-gray-200 px-5 py-3.5 w-fit shadow-sm cursor-pointer select-none"
      style={{ minWidth: '260px' }}
      onClick={() => setChecked(!checked)}
    >
      <div className={`w-6 h-6 border-2 rounded flex items-center justify-center shrink-0 transition-colors ${checked ? 'border-green-500 bg-green-500' : 'border-gray-400'}`}>
        {checked && (
          <svg viewBox="0 0 14 14" width="14" height="14" fill="none" aria-hidden="true">
            <path d="M2 7l4 4 6-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="font-body text-[14px] text-navy/70 flex-1">I'm not a robot</span>
      <div className="flex flex-col items-center gap-0.5 shrink-0">
        <svg viewBox="0 0 40 40" width="34" height="34" fill="none" aria-hidden="true">
          <path d="M20 4 A16 16 0 0 1 36 20" stroke="#4285F4" strokeWidth="5" strokeLinecap="round" />
          <path d="M36 20 A16 16 0 0 1 20 36" stroke="#EA4335" strokeWidth="5" strokeLinecap="round" />
          <path d="M20 36 A16 16 0 0 1 4 20" stroke="#FBBC05" strokeWidth="5" strokeLinecap="round" />
          <path d="M4 20 A16 16 0 0 1 20 4" stroke="#34A853" strokeWidth="5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="7" fill="white" />
        </svg>
        <span className="font-body text-[8px] text-gray-400 leading-none tracking-tight">reCAPTCHA</span>
        <span className="font-body text-[7px] text-gray-400 leading-none">Privacy · Terms</span>
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="font-body text-[13px] font-semibold text-navy/70 mb-1.5 block">{children}</label>;
}

const inputCls = 'w-full bg-white border-2 border-navy/50 rounded-xl px-5 py-4 font-body text-[14px] text-navy placeholder:text-navy/35 focus:outline-none focus:border-navy transition-colors duration-150';

function SendButton() {
  return (
    <div className="relative w-fit" style={{ isolation: 'isolate' }}>
      <div className="absolute top-2 left-2 w-full h-full rounded-sm" style={{ background: '#9EA8DC', zIndex: 0 }} />
      <button type="submit"
        className="relative flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[15px] px-8 py-3.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 group"
        style={{ zIndex: 1 }}>
        Send
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center" style={{ background: '#EDECF0', minHeight: '640px' }}>
      <CityIllustration />

      <div className="relative z-10 flex flex-col items-center w-full pt-12 md:pt-16 pb-52 md:pb-60 px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading font-extrabold text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.05] text-navy mb-3 md:mb-4">
            Get in touch
          </h2>
          <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-navy/55">
            Our creator-focused team is here to help.<br className="hidden sm:block" /> We're just a click away.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5 w-full max-w-[520px]" onSubmit={e => e.preventDefault()}>
          {/* First name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <FieldLabel>First name</FieldLabel>
              <input type="text" className={inputCls} placeholder="Your name" />
            </div>
            <div>
              <FieldLabel>Email address</FieldLabel>
              <input type="email" className={inputCls} placeholder="you@example.com" />
            </div>
          </div>

          {/* Topic dropdown */}
          <div>
            <FieldLabel>What can we help you with?</FieldLabel>
            <div className="relative">
              <select className={`${inputCls} appearance-none pr-12 cursor-pointer`} defaultValue="">
                <option value="" disabled>How can we help you?</option>
                <option value="demo">Request a demo</option>
                <option value="pricing">Pricing enquiry</option>
                <option value="agency">Agency or team plan</option>
                <option value="partner">Content partnership</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div>
            <FieldLabel>Can you provide us with a little message? (Optional)</FieldLabel>
            <textarea className={`${inputCls} resize-none`} rows={4}
              placeholder="Tell us about your content and what you need — we'd love to help!" />
          </div>

          <MockRecaptcha />
          <SendButton />
        </form>
      </div>
    </section>
  );
}
