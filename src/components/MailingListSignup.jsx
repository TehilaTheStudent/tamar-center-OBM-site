import { useEffect, useState } from "react";

const POPUP_DELAY_MS = 5000;
const SESSION_KEY = "obm-mailing-popup-shown";
const LABEL = "מעוניינים להצטרף לרשימת דיוור";
const ERROR_TEXT = "לא הצלחנו לרשום אתכם לרשימת הדיוור. נסו שוב.";

const fieldClass =
  "w-full rounded-lg border border-slate-700 bg-[#0a1424] px-3 py-2.5 text-white outline-none focus:border-brand-600";

export default function MailingListSignup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") return undefined;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    }, POPUP_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const show = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(true);
  };

  const close = () => setOpen(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/mailing-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("eMail"),
          phone: data.get("cellphone"),
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        setError(ERROR_TEXT);
        return;
      }
      setSent(true);
    } catch {
      setError(ERROR_TEXT);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="fixed bottom-24 left-0 z-[60] rounded-r-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700"
      >
        {LABEL}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0c1829]/80 p-4"
          onMouseDown={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mailing-list-title"
            className="w-full max-w-md rounded-2xl border border-brand-900/60 bg-[#152238] p-6 shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2 id="mailing-list-title" className="text-xl font-bold text-white">
                {LABEL}
              </h2>
              <button
                type="button"
                onClick={close}
                className="rounded-lg px-2 text-2xl leading-none text-slate-400 hover:bg-slate-800 hover:text-white"
                aria-label="סגור"
              >
                ×
              </button>
            </div>

            {sent ? (
              <p className="text-slate-200">נרשמתם לרשימת הדיוור</p>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <label className="block text-sm text-slate-300">
                  מייל
                  <input
                    type="email"
                    name="eMail"
                    required
                    maxLength={250}
                    dir="ltr"
                    autoComplete="email"
                    disabled={sending}
                    className={`${fieldClass} mt-1.5`}
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  טלפון
                  <input
                    type="tel"
                    name="cellphone"
                    required
                    maxLength={250}
                    dir="ltr"
                    autoComplete="tel"
                    disabled={sending}
                    className={`${fieldClass} mt-1.5`}
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  שם
                  <input
                    type="text"
                    name="name"
                    maxLength={250}
                    autoComplete="name"
                    disabled={sending}
                    className={`${fieldClass} mt-1.5`}
                  />
                </label>
                {error && <p className="text-sm text-red-300">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 hover:from-brand-700 hover:to-brand-800 disabled:opacity-60"
                >
                  {sending ? "שולחים…" : "הצטרפות"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
