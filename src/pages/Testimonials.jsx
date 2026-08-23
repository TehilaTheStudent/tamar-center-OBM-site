import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Quote, CheckCircle, TrendingUp, Clock, Users, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const testimonials = [
    {
      icon: "💬",
      title: "מאה צעדים קדימה - באחריות, ביצירתיות ומקצועיות",
      content: "זכרוני היום זה יום פרגונים אז אני חייבת אבל חייבת לפרגן בענק לתמר - האחת והיחידה שבחכמתה וכישורייה לוקחת את העסק שלנו מאה צעדים קדימה!\n\nבאחריות, ביצירתיות ובמקצועיות מטורפת הולכת איתנו יד ביד והתוצאות כבר מטורפות!!!\n\nאם אתן מחפשות את האדם הנכון, המקצועי והמסור לקחת את העסק שלכן להיות המקום שחלמתם עליו, אז הנה מצאתי בשבילכן!",
      author: "ספיקולו",
      role: "בעלת עסק - חוגי אנגלית באונליין",
      color: "brand"
    },
    {
      icon: "🎯",
      title: "מיקוד, כלים מעשיים, ודרך בטוחה להצלחה",
      content: "תמי יקרה, נהניתי מאוד מהפגישה איתך! הפגישה הייתה מאוד מאורגנת, הצלחת למקד אותי במטרות העסק. הצלחת לגעת בכל הנקודות החשובות לפתיחה של העסק - מטרות, שיווק ומכירות.\n\nתודה על שירות אדיב ומסור וזמינות לאורך זמן. נתת לי כלים מעשיים ישימים ודרך בטוחה להצלחה! תודה ענקית!!",
      author: "מרכז עוגן",
      role: "יזמת בתחילת דרך",
      color: "accent"
    },
    {
      icon: "🚀",
      title: "מזניקה את העסק קדימה - מקצועית ואנושית",
      content: "אני שמחה ממש לפרגן לתמר המדהימה והמקצועית שבחכמתה וכישוריה מזניקה את העסק שלנו קדימה! שמחים ממש שבחרנו בך!!!\n\nותודה לקבוצה הזאת שמפגישה אותי עם אנשי מקצוע מעולים ובעיקר אנושיים ❤️",
      author: "מנהלת עסק",
      role: "",
      color: "brand"
    },
    {
      icon: "💼",
      title: "השינוי שסוף סוף קרה - אחרי שנתיים של ניסיונות",
      content: "ניסינו לעשות שינויים כבר שנתיים. כתבנו נהלים, עשינו פגישות, אבל שום דבר לא השתנה באמת.\n\nתמר הצליחה לגרום לשינוי לקרות - כי היא עבדה עם העובדים, לא עליהם. היא באמת הקשיבה לכולם והבינה מה מעכב אותנו.\n\nהיום יש לנו תהליכים שעובדים וצוות מחובר. הבלאגן הפך לסדר, והכל זורם.",
      author: "מנהלת משאבי אנוש",
      role: "",
      color: "accent"
    },
    {
      icon: "📈",
      title: "הגדלת רווחיות של 30% - עם שמירה על האנשים",
      content: "הגענו לתמר כשהעמותה היתה בצמיחה אבל הרגשנו שאנחנו מאבדים שליטה. היא עשתה אבחון מעמיק, ראתה בדיוק איפה אנחנו מאבדים זמן וכסף, ובנתה תוכנית שמותאמת לאנשים שלנו.\n\nתוך חצי שנה - הרווחיות עלתה ב-30%, והעובדים מבצעים את העבודה באיכות ותפוקה גבוהה ללא פשרות, לא ידעתי שאפשר לגדול בלי לוותר על איכות ואווירה טובה במקביל.",
      author: "מנכ\"ל",
      role: "עמותת 'עזרת אחים'",
      color: "brand"
    },
    {
      icon: "⏱️",
      title: "חסכנו 20% משעות העבודה - בלי לפטר אף אחד",
      content: "החשש שלנו היה שייעוץ ארגוני אומר פיטורים. תמר הראתה לנו שאפשר אחרת.\n\nהיא עזרה לנו לסדר את התהליכים, ללמד את המנהלים להעביר סמכויות, ולהפסיק לכבות שריפות כל היום. התוצאה? חיסכון של 20% בשעות, ואנשים שיכולים סוף סוף לעבוד על מה שחשוב.",
      author: "בעל עסק",
      role: "חברה משפחתית",
      color: "accent"
    },
    {
      icon: "🎯",
      title: "עצרנו את מחזור העובדים - חסכנו הון",
      content: "כל חצי שנה איבדנו עובדים טובים. זה עלה לנו הון בגיוס והדרכה, וזה הרס את המורל.\n\nתמר עשתה ראיונות עם כולם, הבינה מה גורם לאנשים לעזוב, ועזרה לנו לבנות מבנה שבו אנשים רוצים להישאר. השנה עברה, ואף אחד לא עזב. זה הישג עצום עבורנו.",
      author: "מנכלית",
      role: "חברה בצמיחה",
      color: "brand"
    },
    {
      icon: "🎤",
      title: "הסדנה הייתה פרקטית, לא עוד תיאוריה",
      content: "הזמנו את תמר לסדנה על הובלת שינויים. הייתי ספקן - רוב ההרצאות זה סיסמאות שלא הצלחנו להפעיל בשטח.\n\nאבל תמר הגיעה מוכנה. היא הכירה את הארגון שלנו, התאימה את התוכן, ונתנה כלים ממש מעשיים שהצוות משתמש בהם כל יום. שווה כל שקל.",
      author: "מנהל עמותה",
      role: "",
      color: "accent"
    }
  ];

  const highlights = [
    { icon: <CheckCircle className="w-6 h-6" />, text: "שינוי שקורה באמת - לא רק מסמכים, אלא תוצאות בשטח" },
    { icon: <Target className="w-6 h-6" />, text: "גישה אישית - כל ארגון מקבל פתרון מותאם בדיוק לו" },
    { icon: <Users className="w-6 h-6" />, text: "עבודה עם האנשים - לא עליהם או בלעדיהם" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "תוצאות מדידות - עלייה ברווחיות, חיסכון בזמן, שיפור באווירה" },
    { icon: <Heart className="w-6 h-6" />, text: "שירות מסור ואנושי - זמינות, אכפתיות, וליווי צמוד עד התוצאה" }
  ];

  return (
    <div className="bg-[#0c1829] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" 
            alt="המלצות לקוחות"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1829] via-[#0c1829]/90 to-[#0c1829]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              המלצות מלקוחות
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
              מה אומרים עלי ארגונים ובעלי עסקים שעבדו איתי
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gradient-to-b from-[#0c1829] to-[#0a1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${
                  testimonial.color === 'brand'
                    ? 'from-brand-600/10 to-slate-800/50 border-brand-600/20'
                    : 'from-brand-500/10 to-slate-800/50 border-brand-500/20'
                } backdrop-blur border rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{testimonial.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{testimonial.title}</h3>
                    {testimonial.role && (
                      <p className={`text-sm ${
                        testimonial.color === 'brand' ? 'text-brand-400' : 'text-brand-300'
                      }`}>
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>

                <div className={`text-4xl mb-4 ${
                  testimonial.color === 'brand' ? 'text-brand-400' : 'text-brand-300'
                }`}>
                  <Quote className="w-10 h-10" />
                </div>

                <p className="text-lg text-slate-300 leading-relaxed mb-6 whitespace-pre-line">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-slate-700">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                    testimonial.color === 'brand' 
                      ? 'bg-gradient-to-r from-brand-400 to-brand-700' 
                      : 'bg-gradient-to-r from-brand-300 to-brand-600'
                  }`}>
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    {testimonial.role && <p className="text-sm text-slate-400">{testimonial.role}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Me */}
      <section className="py-20 bg-[#0c1829]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">למה לקוחות בוחרים לעבוד איתי?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-brand-600/10 to-brand-500/10 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-brand-600/50 transition-colors"
              >
                <div className="text-brand-400 mb-4">{highlight.icon}</div>
                <p className="text-slate-200 leading-relaxed">{highlight.text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-600/20 to-brand-500/20 backdrop-blur border border-brand-600/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">מוכנים לתוצאות כאלה גם אצלכם?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              פגישת ייעוץ ללא עלות - נבין יחד איך הארגון שלכם יכול להגיע לאותן תוצאות.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-block px-10 py-5 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold rounded-xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300 shadow-2xl shadow-brand-600/40 text-xl"
            >
              לפגישת ייעוץ חינם ←
            </Link>
          </motion.div>

          <p className="text-center text-slate-500 text-sm mt-8">
            כל ההמלצות הן מלקוחות אמיתיים. פרטים מזהים שונו לשמירה על פרטיות.
          </p>
        </div>
      </section>
    </div>
  );
}