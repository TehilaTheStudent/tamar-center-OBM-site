
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { name: "בית", path: createPageUrl("Home") },
    { name: "אודות", path: createPageUrl("About") },
    { name: "השירותים", path: createPageUrl("Services") },
    { name: "המלצות", path: createPageUrl("Testimonials") },
    { name: "צור קשר", path: createPageUrl("Contact") }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#0c1829]">
      <style>{`
        :root {
          --color-primary: #2563EB;
          --color-primary-dark: #1E40AF;
          --color-primary-light: #60A5FA;
          --color-dark: #0c1829;
          --color-dark-lighter: #152238;
          --a11y-font-scale: 1;
        }
        
        * {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Heebo", system-ui, -apple-system, sans-serif;
          font-size: calc(1rem * var(--a11y-font-scale));
        }

        .a11y-high-contrast {
          filter: contrast(1.25);
        }

        .a11y-high-contrast body {
          background: #000 !important;
          color: #fff !important;
        }
      `}</style>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-[70] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        דלג לתוכן הראשי
      </a>

      {/* Site under development notice */}
      <div
        className="fixed top-0 right-0 left-0 z-[55] bg-amber-500 text-slate-950 text-center text-sm font-semibold py-1.5 px-4"
        role="status"
        aria-live="polite"
      >
        האתר בהרצה — ייתכנו שינויים ועדכונים בתוכן ובעיצוב
      </div>

      {/* Header */}
      <header className="fixed top-8 right-0 left-0 z-50 bg-[#0c1829]/95 backdrop-blur-sm border-b border-brand-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 shrink-0">
              <img 
                src="/logo-icon.png" 
                alt="" 
                aria-hidden="true"
                className="h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] object-contain"
              />
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">תמר שכטר</div>
                <div className="text-sm md:text-base text-slate-300">יועצת התנהגות ארגוני (OBM)</div>
                <div className="text-xs md:text-sm text-brand-300">בגישת OBM</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="ניווט ראשי">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-brand-600"
                      : "text-slate-300 hover:text-brand-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to={createPageUrl("Contact")}
              className="hidden md:block px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-lg hover:from-brand-700 hover:to-brand-800 transition-all duration-300 shadow-lg shadow-brand-600/30"
            >
              פגישת ייעוץ חינם
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label={mobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <nav className="flex flex-col gap-4" aria-label="ניווט נייד">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium px-2 py-2 ${
                      location.pathname === item.path
                        ? "text-brand-600"
                        : "text-slate-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-lg text-center"
                >
                  פגישת ייעוץ חינם
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content — offset for beta banner + header */}
      <main id="main-content" className="pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1424] border-t border-brand-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo-icon.png" 
                  alt="" 
                  aria-hidden="true"
                  className="h-14 w-14 object-contain"
                />
                <div>
                  <div className="text-lg font-bold text-white">תמר שכטר</div>
                  <div className="text-sm text-brand-300">יועצת התנהגות ארגוני (OBM)</div>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                ארגון — פסיפס התנהגות אנושית
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">ניווט מהיר</h3>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Accessibility")}
                  className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                >
                  הצהרת נגישות
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">צור קשר</h3>
              <div className="text-slate-400 text-sm space-y-2">
                <p>
                  📧{" "}
                  <a href="mailto:TAMAR@OBM.CO.IL" className="hover:text-brand-400 transition-colors" dir="ltr">
                    TAMAR@OBM.CO.IL
                  </a>
                </p>
                <p dir="ltr">
                  📞{" "}
                  <a href="tel:0527681169" className="hover:text-brand-400 transition-colors">
                    052-768-1169
                  </a>
                </p>
                <p dir="ltr">
                  📱 WhatsApp:{" "}
                  <a
                    href="https://wa.me/972502131327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-400 transition-colors"
                  >
                    050-213-1327
                  </a>
                </p>
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-block mt-4 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-800 transition-colors"
                >
                  פגישת ייעוץ ללא עלות
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm space-y-2">
            <p>© {new Date().getFullYear()} תמר שכטר יועצת התנהגות ארגוני (OBM). כל הזכויות שמורות.</p>
            <p className="text-amber-500/80">האתר בהרצה</p>
          </div>
        </div>
      </footer>

      <AccessibilityWidget />
    </div>
  );
}
