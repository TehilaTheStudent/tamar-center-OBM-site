import { useEffect } from "react";

const FORM_ID = "346288-841435e5-5c2d-ba91-147d-d3f31dad8757-52667";
const SCRIPT_SRC = "https://app.creaditor.com/formCreator/assets/fc-basics.min.js";
const POPUP_DELAY_MS = 5000;
const SESSION_KEY = "obm-mailing-popup-shown";

function mailingForm() {
  return document.querySelector(".fc-form.form_346288");
}

export function openMailingForm() {
  const form = mailingForm();
  if (!form || !form.querySelector(".fc_container")) return false;
  form.classList.add("fc-show");
  form.style.visibility = "visible";
  return true;
}

export default function MailingListSignup() {
  useEffect(() => {
    const holder = document.createElement("div");
    holder.className = "fc-form form_346288 type-float rtl";
    holder.dataset.formId = FORM_ID;
    holder.dataset.loadAction = "onload";
    holder.dataset.loadAnimation = "md-effect-0";
    holder.dataset.posY = "middle";
    holder.dataset.posX = "center";
    holder.dataset.smart = "true";
    document.body.appendChild(holder);

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    const started = Date.now();
    let popupTimer = 0;
    const watch = window.setInterval(() => {
      const form = mailingForm();
      if (!form?.querySelector(".fc_container")) return;
      window.clearInterval(watch);

      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
      const wait = Math.max(0, POPUP_DELAY_MS - (Date.now() - started));
      popupTimer = window.setTimeout(() => {
        if (openMailingForm()) sessionStorage.setItem(SESSION_KEY, "1");
      }, wait);
    }, 200);

    return () => {
      window.clearInterval(watch);
      window.clearTimeout(popupTimer);
      holder.remove();
      mailingForm()?.remove();
    };
  }, []);

  return (
    <>
    <style>{`
      .fc-form.form_346288 {
        max-width: calc(100vw - 16px);
      }
      @media (max-height: 720px) {
        .fc-form.form_346288.fc-show {
          top: 12px !important;
          transform: translateX(-50%) !important;
          max-height: calc(100vh - 24px);
          overflow: auto;
        }
      }
    `}</style>
    <button
      type="button"
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        openMailingForm();
      }}
      className="fixed bottom-24 left-0 z-[60] rounded-r-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700"
    >
      מעוניינים להצטרף לרשימת דיוור
    </button>
    </>
  );
}
