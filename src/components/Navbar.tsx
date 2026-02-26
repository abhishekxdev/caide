import { useState } from 'react';

const links = ['Features', 'Pricing', 'Contact us'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Paw print */}
              <circle cx="9" cy="6" r="2.2" fill="white" />
              <circle cx="15" cy="6" r="2.2" fill="white" />
              <circle cx="5.5" cy="10.5" r="1.8" fill="white" />
              <circle cx="18.5" cy="10.5" r="1.8" fill="white" />
              <path d="M12 22c-4 0-7-2.5-7-6.5 0-2.5 1.5-4.5 4-5.5h6c2.5 1 4 3 4 5.5 0 4-3 6.5-7 6.5z" fill="white" />
            </svg>
          </div>
          <span className="font-heading font-700 text-xl text-navy tracking-tight">Woofly</span>
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
