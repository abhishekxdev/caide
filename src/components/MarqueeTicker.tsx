const items = [
  'GDPR compliant outreach',
  'Built for agencies, solopreneurs, and lean teams',
  'Effortless outreach automation',
  'AI-powered cold email sequences',
  'Smart lead scoring & segmentation',
  'Replies that don\'t feel robotic',
  'Scales with your pipeline',
];

function CaideLogo() {
  return (
    <div className="shrink-0 w-6 h-6 bg-navy flex items-center justify-center rounded-sm">
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="5" height="2" fill="white" />
        <rect x="0" y="4" width="12" height="2" fill="white" />
        <rect x="7" y="8" width="5" height="2" fill="white" />
      </svg>
    </div>
  );
}

export default function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="w-full border-t-2 border-navy/10 bg-white py-4 overflow-hidden">
      <div className="animate-marquee flex gap-12 w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <CaideLogo />
            <span className="font-body text-[14px] font-semibold text-navy/70 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
