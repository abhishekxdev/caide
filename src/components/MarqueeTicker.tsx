const items = [
  'GDPR compliant pet care',
  'Built for dog owners, walkers, and vets',
  'Effortless scheduling & booking',
  'AI-powered health & wellness tracking',
  'Smart walker & vet matching',
  'Tail-wagging happy dogs',
  'Scales with your pack',
];

function WooflyLogo() {
  return (
    <div className="shrink-0 w-6 h-6 bg-navy flex items-center justify-center rounded-full">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="6" r="2.2" fill="white" />
        <circle cx="15" cy="6" r="2.2" fill="white" />
        <circle cx="5.5" cy="10.5" r="1.8" fill="white" />
        <circle cx="18.5" cy="10.5" r="1.8" fill="white" />
        <path d="M12 22c-4 0-7-2.5-7-6.5 0-2.5 1.5-4.5 4-5.5h6c2.5 1 4 3 4 5.5 0 4-3 6.5-7 6.5z" fill="white" />
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
            <WooflyLogo />
            <span className="font-body text-[14px] font-semibold text-navy/70 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
