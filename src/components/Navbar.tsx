import { useState } from 'react';

const links = ['Features', 'Pricing', 'Contact us'];

function ChannlLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 12 Q6 4 12 4 Q18 4 22 12 Q18 20 12 20 Q6 20 2 12Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" fill="white" />
      <path d="M12 9 L12 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-full">
            <ChannlLogo size={18} />
          </div>
          <span className="font-heading font-700 text-xl text-navy tracking-tight">Channl</span>
        </div>

        {/* Nav Links — desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-[15px] text-muted hover:text-navy transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Actions — desktop */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button className="font-body text-[15px] text-muted hover:text-navy transition-colors duration-150">
            Log in
          </button>
          <button className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-body font-semibold text-[14px] px-5 py-2.5 rounded-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-px group">
            Get started free
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A103C" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-[15px] text-muted hover:text-navy transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <button className="font-body text-[15px] text-muted hover:text-navy text-left">
              Log in
            </button>
            <button className="flex items-center justify-center gap-2 bg-navy text-white font-body font-semibold text-[14px] px-5 py-3 rounded-sm w-full">
              Get started free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
