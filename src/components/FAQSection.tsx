import { useState } from 'react';

const faqs = [
  { q: 'How is Caide different from other email outreach tools?', a: "Caide works like a skilled team member, handling the details of campaign creation and execution while keeping you firmly in control. Unlike other tools, it requires no technical setup, API keys, or complex integrations. It's built to make high-performing outreach accessible to everyone." },
  { q: 'How does Caide find and qualify leads?', a: 'Caide scans multiple data sources to identify prospects that match your Ideal Customer Profile. It enriches each contact with verified info — title, company size, revenue, location — before passing them to your outreach pipeline.' },
  { q: "What if I don't know my Ideal Customer Profile yet?", a: "No problem. Caide guides you through defining your ICP using your goals, industry, and target outcomes. You can refine it over time as Caide learns from the results of your campaigns." },
  { q: "How does Caide ensure my emails won't end up in spam?", a: 'Caide follows best practices for deliverability: warm-up schedules, sending limits, SPF/DKIM alignment checks, and personalisation signals that inbox providers favour. Your domain health is always front of mind.' },
  { q: 'Can I review or approve emails before they go out?', a: "Absolutely. Caide shows you every email before it's sent. You can edit, approve, or reject any message. You're always in control of what goes out under your name." },
  { q: 'Does Caide work with my CRM?', a: "Yes. Caide integrates with popular CRMs including HubSpot, Salesforce, and Pipedrive. Lead data, replies, and campaign outcomes sync automatically so your team never misses a beat." },
  { q: 'Who is Caide built for?', a: 'Caide is built for agencies, solopreneurs, consultants, and lean sales teams who want enterprise-grade outreach without hiring a dedicated SDR or juggling a dozen tools.' },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-200"
      style={{ background: '#B8F0E8', borderTop: '1.5px solid rgba(26,16,60,0.2)', borderRight: '1.5px solid rgba(26,16,60,0.2)', borderBottom: '1.5px solid rgba(26,16,60,0.2)', borderLeft: '4px solid #1A103C' }}
      onClick={onToggle}>
      <div className="flex items-start justify-between gap-4 px-5 md:px-6 py-5">
        <h3 className="font-heading font-bold text-[15px] md:text-[17px] leading-snug text-navy flex-1">{question}</h3>
        <div className="shrink-0 mt-0.5">
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="px-5 md:px-6 pb-6 -mt-1">
          <p className="font-body text-[13px] md:text-[14px] leading-relaxed text-navy/65">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ContactCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-navy/30 p-6" style={{ background: '#DDD0FF' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(26,16,60,0.18) 1.2px, transparent 1.2px)',
        backgroundSize: '18px 18px',
      }} />
      <div className="relative z-10">
        <p className="font-heading font-extrabold text-[17px] text-navy mb-2">Have more questions?</p>
        <p className="font-body text-[13px] text-navy/65 leading-snug mb-5">Don't hesitate to get in touch, we're just a click away.</p>
        <div className="relative w-fit" style={{ isolation: 'isolate' }}>
          <div className="absolute top-2 left-2 w-full h-full rounded-sm" style={{ background: '#9EA8DC', zIndex: 0 }} />
          <button className="relative flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[13px] px-5 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:-translate-x-0.5 group" style={{ zIndex: 1 }}>
            Get in touch
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function SittingDog() {
  return (
    <svg viewBox="0 0 130 150" width="110" height="127" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sitting dalmatian dog">
      <ellipse cx="65" cy="105" rx="32" ry="28" fill="white" stroke="#1A103C" strokeWidth="2.2" />
      <ellipse cx="55" cy="97" rx="8" ry="6" fill="#1A103C" />
      <ellipse cx="76" cy="110" rx="6" ry="4.5" fill="#1A103C" />
      <ellipse cx="62" cy="118" rx="4.5" ry="3.5" fill="#1A103C" />
      <path d="M50 88 Q46 76 52 68" stroke="#1A103C" strokeWidth="2.2" fill="none" />
      <path d="M60 86 Q58 74 58 68" stroke="#1A103C" strokeWidth="2.2" fill="none" />
      <circle cx="55" cy="58" r="20" fill="white" stroke="#1A103C" strokeWidth="2.2" />
      <ellipse cx="63" cy="52" rx="6" ry="4.5" fill="#1A103C" />
      <path d="M38 50 Q28 52 26 64 Q28 74 38 70 Q46 66 46 54 Z" fill="white" stroke="#1A103C" strokeWidth="2" />
      <path d="M72 50 Q80 52 80 62 Q78 70 70 68 Q66 62 68 52 Z" fill="white" stroke="#1A103C" strokeWidth="2" />
      <circle cx="49" cy="56" r="3" fill="#1A103C" /><circle cx="61" cy="56" r="3" fill="#1A103C" />
      <circle cx="49.9" cy="55" r="1" fill="white" /><circle cx="61.9" cy="55" r="1" fill="white" />
      <ellipse cx="55" cy="65" rx="3.5" ry="2.5" fill="#1A103C" />
      <path d="M51 68 Q55 72 59 68" stroke="#1A103C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M42 72 Q55 78 68 72" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="44" y="126" width="14" height="18" rx="7" fill="white" stroke="#1A103C" strokeWidth="2" />
      <rect x="72" y="126" width="14" height="18" rx="7" fill="white" stroke="#1A103C" strokeWidth="2" />
      <path d="M46 144 Q51 148 56 144" stroke="#1A103C" strokeWidth="1" fill="none" />
      <path d="M74 144 Q79 148 84 144" stroke="#1A103C" strokeWidth="1" fill="none" />
      <path d="M94 100 Q112 84 108 72" stroke="#1A103C" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function PlantGroup() {
  return (
    <svg viewBox="0 0 340 65" width="100%" height="65" style={{ maxWidth: '340px' }} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="30" y1="62" x2="30" y2="40" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="36" r="5" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="18" y1="62" x2="18" y2="48" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 48 Q12 40 8 36 M18 48 Q24 40 28 36" stroke="#1A103C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="8"  cy="34" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="28" cy="34" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="50" y1="62" x2="50" y2="50" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="50" cy="46" r="4.5" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="10" cy="62" r="2" fill="#1A103C" />
      <circle cx="60" cy="62" r="2" fill="#1A103C" />
      <line x1="240" y1="62" x2="240" y2="42" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M240 42 Q234 32 228 28 M240 42 Q246 32 252 28" stroke="#1A103C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="228" cy="26" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="252" cy="26" r="4" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="260" y1="62" x2="260" y2="50" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="260" cy="46" r="4.5" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <line x1="278" y1="62" x2="278" y2="44" stroke="#1A103C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="278" cy="40" r="5" fill="none" stroke="#1A103C" strokeWidth="1.5" />
      <circle cx="232" cy="62" r="2" fill="#1A103C" />
      <circle cx="290" cy="62" r="2" fill="#1A103C" />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="w-full py-14 md:py-20 px-4 sm:px-6 flex flex-col" style={{ background: '#FAFAD0' }}>
      <div className="max-w-[1100px] mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* Left column */}
        <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-6 pt-2">
          <h2 className="font-heading font-extrabold text-[30px] md:text-[38px] leading-[1.1] text-navy">
            Frequently<br />Asked Questions
          </h2>
          <ContactCard />
        </div>

        {/* Right column: FAQ list */}
        <div className="flex-1 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>

      {/* Dog + plants decoration */}
      <div className="flex justify-center items-end mt-12 md:mt-16">
        <PlantGroup />
      </div>
      <div className="flex justify-center -mt-10 md:-mt-14">
        <SittingDog />
      </div>
    </section>
  );
}
