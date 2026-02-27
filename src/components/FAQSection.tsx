import { useState } from 'react';

const faqs = [
  {
    q: 'How is Channl different from other scheduling tools?',
    a: "Channl goes beyond scheduling. It's an AI-powered repurposing engine — you drop in a YouTube video or blog link, and it automatically generates platform-specific posts for X, Threads, and LinkedIn. Most tools just let you schedule. Channl creates the content too.",
  },
  {
    q: 'Which content sources does Channl support?',
    a: 'Channl currently supports YouTube videos, blog posts (any URL), and podcast transcripts. Simply paste a link and Channl fetches, analyses, and transforms the content into platform-ready posts in seconds.',
  },
  {
    q: 'How does the AI know my voice and style?',
    a: "Channl learns from your existing posts and the content you approve or edit. Over time it adapts to your tone, vocabulary, and posting patterns — getting sharper with every piece of content you run through it.",
  },
  {
    q: 'Which platforms does Channl publish to?',
    a: 'Channl currently supports X (Twitter), Threads, and LinkedIn. Each platform gets uniquely formatted content — X gets punchy threads, LinkedIn gets long-form professional posts, and Threads gets conversational bites.',
  },
  {
    q: 'Can I review and edit posts before they go live?',
    a: "Absolutely. Channl shows you every generated post before it's queued. You can edit text, swap images, adjust scheduling, or approve with one click. You're always in control of what goes out.",
  },
  {
    q: 'How does scheduling and auto-publishing work?',
    a: "Channl analyses your audience's engagement patterns and recommends optimal posting times per platform. You can auto-publish at those times or manually choose your schedule. Posts are queued in a drag-and-drop calendar for full visibility.",
  },
  {
    q: 'Who is Channl built for?',
    a: 'Channl is built for solo content creators, YouTubers, bloggers, podcasters, and small agencies who want to grow their social presence without spending hours every week repurposing the same content by hand.',
  },
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
        <p className="font-heading font-extrabold text-[17px] text-navy mb-2">Still have questions?</p>
        <p className="font-body text-[13px] text-navy/65 leading-snug mb-5">Our creator-focused team is just a click away — always happy to help.</p>
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

function PlatformGroup() {
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

function ContentCreatorDecor() {
  return (
    <svg viewBox="0 0 130 150" width="110" height="127" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Content creator illustration">
      {/* Monitor */}
      <rect x="20" y="20" width="90" height="70" rx="6" fill="white" stroke="#1A103C" strokeWidth="2.2" />
      <rect x="20" y="20" width="90" height="12" rx="6" fill="#1A103C" />
      <rect x="26" y="25" width="6" height="2" rx="1" fill="white" opacity="0.5" />
      <rect x="34" y="25" width="6" height="2" rx="1" fill="white" opacity="0.5" />
      {/* Screen content */}
      <rect x="28" y="40" width="50" height="6" rx="2" fill="#DDD0FF" />
      <rect x="28" y="50" width="38" height="4" rx="2" fill="#C4BCEC" opacity="0.7" />
      <rect x="28" y="58" width="44" height="4" rx="2" fill="#C4BCEC" opacity="0.5" />
      {/* Platform icons on screen */}
      <rect x="82" y="40" width="18" height="18" rx="3" fill="#F5C418" />
      <path d="M87 44l6 6-2-3 4-3" stroke="#1A103C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Stand */}
      <line x1="65" y1="90" x2="65" y2="110" stroke="#1A103C" strokeWidth="3" strokeLinecap="round" />
      <rect x="44" y="108" width="42" height="6" rx="3" fill="#1A103C" />
      {/* Decorative signal waves */}
      <path d="M112 35 Q118 42 118 50 Q118 58 112 65" stroke="#1A103C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M116 30 Q124 40 124 50 Q124 60 116 70" stroke="#1A103C" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.25" />
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

      {/* Decoration */}
      <div className="flex justify-center items-end mt-12 md:mt-16">
        <PlatformGroup />
      </div>
      <div className="flex justify-center -mt-10 md:-mt-14">
        <ContentCreatorDecor />
      </div>
    </section>
  );
}
