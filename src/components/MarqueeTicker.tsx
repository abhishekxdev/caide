const items = [
  'AI-powered content repurposing',
  'Works with YouTube, blogs & podcasts',
  'Post to X, Threads & LinkedIn',
  'Smart scheduling & auto-publish',
  'Performance analytics & insights',
  'Built for solo creators & agencies',
  'Save 10+ hours per week',
];

function ChannlIcon() {
  return (
    <div className="shrink-0 w-6 h-6 bg-navy flex items-center justify-center rounded-full">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 12 Q6 4 12 4 Q18 4 22 12 Q18 20 12 20 Q6 20 2 12Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" fill="white" />
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
            <ChannlIcon />
            <span className="font-body text-[14px] font-semibold text-navy/70 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
