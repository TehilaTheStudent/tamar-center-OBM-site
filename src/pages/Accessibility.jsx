import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function AccessibilityPage() {
  return (
    <div className="bg-[#0c1829] text-white min-h-screen">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-400">הצהרת נגישות</h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              אתר זה של תמר שכטר, יועצת התנהגות ארגוני (OBM), שואף להיות נגיש לכלל האוכלוסייה,
              בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ולהוראות תקנות הנגישות.
            </p>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white pt-2">מה עשינו באתר</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>מבנה סמנטי ברור וכותרות מסודרות</li>
                <li>תמיכה בניווט מקלדת ובקוראי מסך</li>
                <li>כפתור נגישות קבוע לשינוי גודל טקסט וניגודיות</li>
                <li>טקסט חלופי לתמונות מרכזיות</li>
                <li>ניגודיות צבעים משופרת ככל האפשר</li>
              </ul>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white pt-2">יצירת קשר בנושא נגישות</h2>
              <p>
                אם נתקלתם בבעיית נגישות באתר, נשמח שתפנו אלינו ונעשה מאמץ לתקן בהקדם:
              </p>
              <ul className="space-y-2">
                <li>
                  דוא״ל:{" "}
                  <a href="mailto:TAMAR@OBM.CO.IL" className="text-brand-400 hover:underline" dir="ltr">
                    TAMAR@OBM.CO.IL
                  </a>
                </li>
                <li>
                  טלפון:{" "}
                  <a href="tel:0527681169" className="text-brand-400 hover:underline" dir="ltr">
                    052-768-1169
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-sm text-slate-500 pt-4 border-t border-slate-700">
              הצהרה זו עודכנה לאחרונה ב־{new Date().toLocaleDateString("he-IL")}.
              האתר נמצא בהרצה ומשתפר באופן שוטף.
            </p>

            <Link
              to={createPageUrl("Home")}
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold rounded-xl"
            >
              חזרה לדף הבית
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
