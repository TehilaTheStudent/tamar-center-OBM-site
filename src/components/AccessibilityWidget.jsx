import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Accessibility, Minus, Plus, Contrast, X } from "lucide-react";

const STORAGE_KEY = "obm-a11y-prefs";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { fontScale: 1, highContrast: false };
    } catch {
      return { fontScale: 1, highContrast: false };
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--a11y-font-scale", String(prefs.fontScale));
    root.classList.toggle("a11y-high-contrast", prefs.highContrast);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  const changeFont = (delta) => {
    setPrefs((prev) => ({
      ...prev,
      fontScale: Math.min(1.4, Math.max(0.9, Number((prev.fontScale + delta).toFixed(2)))),
    }));
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-3">
      {open && (
        <div
          className="w-72 rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl backdrop-blur text-white"
          role="dialog"
          aria-label="תפריט נגישות"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-lg">נגישות</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              aria-label="סגור תפריט נגישות"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-700 bg-slate-800/60 p-3">
              <span className="text-sm">גודל טקסט</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => changeFont(-0.1)}
                  className="rounded-lg bg-slate-700 p-2 hover:bg-slate-600"
                  aria-label="הקטן טקסט"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm" aria-live="polite">
                  {Math.round(prefs.fontScale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => changeFont(0.1)}
                  className="rounded-lg bg-slate-700 p-2 hover:bg-slate-600"
                  aria-label="הגדל טקסט"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setPrefs((p) => ({ ...p, highContrast: !p.highContrast }))}
              className={`flex w-full items-center justify-between rounded-xl border p-3 text-sm transition-colors ${
                prefs.highContrast
                  ? "border-brand-600 bg-brand-600/20 text-brand-300"
                  : "border-slate-700 bg-slate-800/60 hover:border-slate-500"
              }`}
              aria-pressed={prefs.highContrast}
            >
              <span>ניגודיות גבוהה</span>
              <Contrast className="h-4 w-4" />
            </button>

            <Link
              to={createPageUrl("Accessibility")}
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-slate-700 bg-slate-800/60 p-3 text-center text-sm text-brand-400 hover:border-brand-600/50"
            >
              הצהרת נגישות
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg shadow-brand-700/40 transition hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-300"
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={open}
      >
        <Accessibility className="h-7 w-7" />
      </button>
    </div>
  );
}
