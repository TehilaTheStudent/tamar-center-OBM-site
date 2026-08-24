
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { CheckCircle, TrendingUp, Users, Target, Zap, Award, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#0c1829] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image - More Visible */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Image-home.png" 
            alt="תמר שכטר יועצת התנהגות ארגוני (OBM) - ליווי ארגונים לשיפור ביצועים"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1829]/60 via-[#0c1829]/70 to-[#0c1829]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              <span className="text-white">כשהשינוי הארגוני מתחיל מהאנשים</span>
              <br/>
              <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                התוצאות מדברות בעד עצמן
              </span>
            </h1>
            
            <div className="bg-[#0c1829]/80 backdrop-blur-md rounded-3xl p-8 mb-8 border border-slate-700/50 shadow-2xl">
              <p className="text-xl md:text-2xl text-slate-200 mb-2 leading-relaxed">
                ארגון שעובד חלק. עובדים מחוברים. רווחיות שעולה.
              </p>
              <p className="text-lg md:text-xl text-brand-400 font-semibold">
                זה לא חלום - זה תוצאה של גישה נכונה.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to={createPageUrl("Contact")}
                className="px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold rounded-xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300 shadow-2xl shadow-brand-600/40 text-lg"
              >
                פגישת ייעוץ ללא עלות ←
              </Link>
              <Link
                to={createPageUrl("Services")}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg"
              >
                הכירו את השירותים שלנו
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-gradient-to-br from-brand-600/20 to-brand-700/10 backdrop-blur-md border border-brand-600/30 rounded-2xl p-6 shadow-xl"
              >
                <div className="text-5xl font-bold text-brand-400 mb-2">30%</div>
                <div className="text-slate-200 text-lg font-medium">הגדלת רווחיות</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-gradient-to-br from-brand-500/20 to-brand-600/10 backdrop-blur-md border border-brand-500/30 rounded-2xl p-6 shadow-xl"
              >
                <div className="text-5xl font-bold text-brand-300 mb-2">20%</div>
                <div className="text-slate-200 text-lg font-medium">חסכון בשעות עבודה</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-b from-[#0c1829] to-[#0a1424]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              רוב היועצים הארגוניים מתחילים מהמבנה<br/>
              <span className="text-brand-400">אני עושה בדיוק הפוך.</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              נעים להכיר, <span className="text-white font-semibold">תמר שכטר</span> יועצת התנהגות ארגוני (OBM Organizational Behavior Management) עם ניסיון של עשור בפסיכולוגיה התנהגותית.
            </p>
            <div className="text-lg text-slate-400 leading-relaxed space-y-3">
              <p>מומחית בליווי ארגונים ועמותות,</p>
              <p>מאבחנת ומנתחת תהליכים ארגוניים ואנושיים של הארגון.</p>
              <p>מטמיעה שינויים התנהגותיים, כאלו שמשפרים ביצועים ותוצאות אמיתיות, המחזיקות לאורך זמן.</p>
              <p>ומותאמות בדיוק לאנשים המרכיבים את הארגון.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0a1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              כשתהליך השינוי מותאם לאנשים -<br/>
              <span className="text-brand-400">הוא באמת קורה</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              לא עוד תוכניות מגירה. לא עוד סדנאות שמדליקות לשבוע ונשכחות.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "תוצאות מהירות ומדויקות",
                description: "השינוי מותאם למציאות האמיתית שלכם - אבחנה מעמיקה ומדויקת",
                color: "brand"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "יישום חלק וזורם",
                description: "הם מחוברים ומגויסים לתהליך, זו מטרה שלהם בדיוק כמו של המנהלים.",
                color: "accent"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "הנעה אמיתית של הצוות",
                description: "כי השינוי נבנה איתם, לא עליהם!",
                color: "brand"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "אווירה טובה נשמרת",
                description: "גם כשהכל משתנה - התרבות הארגונית החיובית נשמרת לאורך כל הדרך",
                color: "accent"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "שינוי שמחזיק לאורך זמן",
                description: "המומחיות שלנו היא לשנות את היעדים ומטרות הארגון להרגלים יומיומיים קטנים שקורים.",
                color: "brand"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "גישה מבוססת מדע",
                description: "ניהול התנהגות ארגוני (OBM) היא גישה מחקרית מוכחת",
                color: "accent"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${
                  item.color === 'brand' 
                    ? 'from-brand-600/10 to-brand-700/5 border-brand-600/20' 
                    : 'from-brand-500/10 to-brand-600/5 border-brand-500/20'
                } backdrop-blur border rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300`}
              >
                <div className={`${item.color === 'brand' ? 'text-brand-400' : 'text-brand-300'} mb-4 flex justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gradient-to-b from-[#0a1424] to-[#0c1829]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">זה בשבילכם אם:</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "ניסיתם לעשות שינוי והוא לא באמת קרה",
              "הניהול שלכם מרגיש כמו מרוץ אינסופי של כיבוי שריפות",
              "יש פערים בין מה שאתם מבקשים מהצוות לבצע למה שבאמת קורה בפועל.",
              "העובדים לא מחוברים, הפרודוקטיביות נמוכה",
              "העסק שלכם בצמיחה ואתם רוצים לעשות את זה נכון, בלי לוותר בדרך על ערכים, איכות ושירות המוצר שלכם.",
              "יש לכם צוות, ואין לכם מושג מה הם עושים, ואם עושים את זה ברמת הסטנדרט המצופה מהם"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-brand-600/50 transition-colors"
              >
                <AlertCircle className="w-6 h-6 text-brand-400 flex-shrink-0 mt-1" aria-hidden="true" />
                <p className="text-slate-300 text-lg text-center flex-1">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-[#0c1829]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">למה זה עובד?</h2>
            <div className="bg-gradient-to-r from-brand-600/10 to-brand-500/10 backdrop-blur border border-brand-600/20 rounded-3xl p-8 md:p-12 text-right">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                <span className="text-brand-400 font-bold text-2xl">ניהול התנהגות ארגוני (OBM)</span> היא גישה מחקרית לשיפור תהליכים וביצועים בארגונים.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-4">
                היא מבוססת על פעולות איסוף נתונים, ניתוח גורמים ויצירת תוכניות.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <p className="text-slate-300 leading-relaxed">
                    <span className="text-brand-400 font-bold">במקום לנחש,</span> מבצעים באופן שיטתי מדידה, מעקב ובקרת ביצועים
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <p className="text-brand-300 font-bold">במקום "להרגיש"</p>
                  <p className="text-slate-300">פועלים על בסיס נתונים</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
                  <p className="text-slate-300 leading-relaxed">
                    במקום להגביר התנהגויות לא יעילות, <span className="text-brand-400 font-bold">נחזק התנהגויות שמקדמות את הארגון</span>
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-lg text-slate-300">
                  <span className="text-brand-400 font-semibold">גאה להיות החלוצה הראשונה בישראל</span> בליווי ארגונים בגישת OBM
                </p>
                <p className="text-slate-400 mt-2">
                  הגישה מוכרת וידועה בעולם כיעילה ואפקטיבית מאוד לחברות, ארגונים ועמותות.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Social Proof */}
      <section className="py-20 bg-gradient-to-b from-[#0c1829] to-[#0a1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">התוצאות מדברות</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {[
                { icon: "🎯", text: "הגדלת רווחיות של 30% בעמותה גדולה" },
                { icon: "⏱️", text: "חסכון של 20% בשעות עבודה דרך ייעול תהליכים והגברת תפוקה" },
                { icon: "💼", text: "ליווי עמותות של מאות עובדים ועסקים בצמיחה" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-brand-600/10 to-transparent backdrop-blur border border-brand-600/20 rounded-xl p-6"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <p className="text-lg text-slate-200">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-[#0a1424] border border-slate-700 rounded-3xl p-8 shadow-2xl"
            >
              <div className="text-brand-400 text-5xl mb-4">"</div>
              <p className="text-xl text-slate-200 leading-relaxed mb-6">
                אני חייבת אבל חייבת לפרגן בענק לתמר - האחת והיחידה שבחכמתה וכישורייה לוקחת את העסק שלנו מאה צעדים קדימה! 
                באחריות, ביצירתיות ובמקצועיות מטורפת הולכת איתנו יד ביד והתוצאות כבר מטורפות!!!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-400 to-brand-700 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-white">ספיקולו</p>
                  <p className="text-sm text-slate-400">לקוחה, מנהלת עסק</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to={createPageUrl("Testimonials")}
              className="inline-block px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700"
            >
              קראו עוד המלצות ←
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0c1829]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-600/20 to-brand-500/20 backdrop-blur border border-brand-600/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              מוכנים לשינוי שבאמת קורה?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              פגישת ייעוץ ללא עלות - נזהה יחד את הגורמים שמעכבים את הצמיחה שלכם<br/>
              ונבנה תמונה ראשונית של הפתרון האידיאלי
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-block px-10 py-5 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold rounded-xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300 shadow-2xl shadow-brand-600/40 text-xl"
            >
              לפגישת ייעוץ חינם ←
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
