
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User, Building2, Presentation, CheckCircle, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: <User className="w-12 h-12" />,
      title: "ליווי מנהלים אישי",
      subtitle: "1-on-1 Coaching",
      color: "brand",
      // Removed image property
      target: "למי זה מתאים?",
      targetDesc: "למנהלים ובעלי עסקים שרוצים לשפר את היכולות הניהוליות שלהם, להתמודד עם אתגרים ספציפיים, ולהוביל את הצוות בצורה יותר אפקטיבית.",
      includes: [
        "ניהול זמן ועדיפויות",
        "העברת סמכויות והטלת משימות",
        "הנעת עובדים לפעולה",
        "קבלת החלטות אפקטיבית",
        "התמודדות עם קונפליקטים",
        "בניית מנהיגות אישית"
      ],
      results: [
        "ניהול ממוקד ויעיל יותר",
        "חיסכון בזמן ובאנרגיה",
        "שיפור ביחסים עם הצוות",
        "הגדלת השפעה והובלה"
      ],
      duration: "מותאם אישית, החל מ-3 חודשים",
      format: "פרונטלי או אונליין"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "ליווי ארגוני מקיף",
      subtitle: "תהליך מלא להצלחה ארגונית",
      color: "accent",
      // Removed image property
      target: "למי זה מתאים?",
      targetDesc: "לארגונים בינוניים וגדולים (מ-5 עובדים ומעלה), עמותות, ועסקים בצמיחה שרוצים לעשות שינוי אמיתי בכל הארגון.",
      phases: [
        {
          title: "שלב 1: אבחון מעמיק התנהגותי",
          desc: "ניתוח של כל העסק ומתנהגיו - מנהלים ועובדים. לא על פי ניחושים אלא דרך שיח אמיתי, תצפיות, ואיסוף נתונים מדידים.",
          // Removed image property
        },
        {
          title: "שלב 2: דוח המלצות לשינוי",
          desc: "תוכנית פעולה ברורה ומותאמת אישית - מה צריך להשתנות, איך, ומתי. כולל המלצות התנהגותיות ויישומיות.",
          // Removed image property
        },
        {
          title: "שלב 3: שיפור תהליכים מרכזיים",
          desc: "עבודה מעשית על התהליכים החשובים ביותר בעסק - ניהול משימות, תקשורת, זרימת עבודה, ועוד.",
          // Removed image property
        },
        {
          title: "שלב 4: הטמעה ויישום",
          desc: "ליווי צמוד עד שהשינוי הופך להרגל והתוצאות נראות בשורת הרווח.",
          // Removed image property
        }
      ],
      results: [
        "הגדלת רווחיות של עד 30%",
        "חסכון של 20% בשעות עבודה",
        "שינוי שקורה באמת ונשאר לאורך זמן",
        "עובדים מחוברים ומונעים",
        "תהליכים ברורים שעובדים"
      ],
      duration: "כ-6 חודשים",
      format: "פרונטלי ואונליין, בהתאמה לצרכי הארגון"
    },
    {
      icon: <Presentation className="w-12 h-12" />,
      title: "הרצאות וסדנאות",
      subtitle: "העשרה והדרכה לצוותים",
      color: "brand",
      // Removed image property
      target: "למי זה מתאים?",
      targetDesc: "לארגונים שרוצים להעשיר את הצוות בכלים מעשיים, ליצור תובנות, ולחזק את התרבות הארגונית.",
      topics: [
        {
          category: "מנהיגות והובלה",
          items: ["מנהיגות אפקטיבית בעידן משתנה", "הובלת שינויים בארגון", "בניית חזון משותף"],
          // Removed image property
        },
        {
          category: "מוטיבציה ופרודוקטיביות",
          items: ["הגברת מוטיבציה - שלי ושל העובדים", "עבודה יעילה בשיתוף פעולה", "ניהול משימות וזמן ברמה הגבוהה"],
          // Removed image property
        },
        {
          category: "תרבות ארגונית",
          items: ["בניית תרבות ארגונית חיובית", "תקשורת פתוחה ואפקטיבית", "ניהול קונפליקטים בצורה בונה", "מתן וקבלת משוב שמביא תוצאות"],
          // Removed image property
        }
      ],
      formats: [
        "הרצאות חד-פעמיות - 1-2 שעות של תובנות ומוטיבציה",
        "סדנאות רב-פגישתיות - למידה מעמיקה עם תרגול ויישום"
      ],
      audience: "מנהלים, בעלי עסקים, וצוותים - בהתאם לנושא"
    }
  ];

  return (
    <div className="bg-[#0c1829] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Removed background image for Hero section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1829] via-[#0c1829]/90 to-[#0c1829]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              השירותים שלי
            </h1>
            <p className="text-2xl text-slate-300">
              פתרונות מותאמים אישית לכל שלב בדרך
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-[#0c1829] to-[#0a1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-br ${
                service.color === 'brand'
                  ? 'from-brand-600/10 to-slate-800/50'
                  : 'from-brand-500/10 to-slate-800/50'
              } backdrop-blur border ${
                service.color === 'brand' ? 'border-brand-600/20' : 'border-brand-500/20'
              } rounded-3xl overflow-hidden`}
            >
              {/* Conditional rendering of service.image block. Since images are removed from data, this will no longer render. */}
              {service.image && (
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1829] via-[#0c1829]/50 to-transparent"></div>
                </div>
              )}
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  <div className={`p-4 rounded-2xl ${
                    service.color === 'brand' ? 'bg-brand-600/20 text-brand-400' : 'bg-brand-500/20 text-brand-300'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                    <p className={`text-lg ${
                      service.color === 'brand' ? 'text-brand-400' : 'text-brand-300'
                    }`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Target Audience */}
                  <div className="bg-[#0a1424]/50 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.target}</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">{service.targetDesc}</p>
                  </div>

                  {/* Content based on service type */}
                  {service.includes && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">מה כולל הליווי?</h3>
                      <p className="text-lg text-slate-300 mb-4">עבודה אחד על אחד ממוקדת בנושאים כמו:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-[#0a1424]/30 rounded-lg p-3">
                            {/* Fixed duplicate className prop */}
                            <CheckCircle className={`w-5 h-5 flex-shrink-0 ${service.color === 'brand' ? 'text-brand-400' : 'text-brand-300'}`} />
                            <span className="text-slate-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.phases && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">מה כולל הליווי?</h3>
                      <p className="text-lg text-slate-300 mb-6">תהליך מקיף בן 4 שלבים:</p>
                      <div className="space-y-6">
                        {service.phases.map((phase, i) => (
                          <div key={i} className="bg-[#0a1424]/50 rounded-xl p-6"> {/* Removed overflow-hidden and image block */}
                            <div className="flex items-start gap-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                                service.color === 'brand' 
                                  ? 'bg-brand-600 text-white' 
                                  : 'bg-brand-500 text-white'
                              }`}>
                                {i + 1}
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                                <p className="text-slate-300 leading-relaxed">{phase.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.topics && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">נושאי ההרצאות והסדנאות:</h3>
                      <div className="space-y-6">
                        {service.topics.map((topic, i) => (
                          <div key={i} className="bg-[#0a1424]/50 rounded-xl p-6"> {/* Removed overflow-hidden and image block */}
                            <h4 className={`text-xl font-bold mb-4 ${
                              service.color === 'brand' ? 'text-brand-400' : 'text-brand-300'
                            }`}>
                              {topic.category}
                            </h4>
                            <ul className="space-y-2">
                                {topic.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-1" />
                                  <span className="text-slate-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.formats && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">פורמטים:</h3>
                      <div className="space-y-3">
                        {service.formats.map((format, i) => (
                          <div key={i} className="flex items-start gap-3 bg-[#0a1424]/30 rounded-lg p-4">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              service.color === 'brand' ? 'bg-brand-400' : 'bg-brand-300'
                            }`}></div>
                            <span className="text-slate-300 text-lg">{format}</span>
                          </div>
                        ))}
                      </div>
                      {service.audience && (
                        <p className="text-slate-400 mt-4">
                          <span className="font-semibold">קהל יעד:</span> {service.audience}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Results */}
                  {service.results && (
                    <div className="bg-gradient-to-r from-[#0a1424]/80 to-slate-800/80 rounded-2xl p-6">
                      <h3 className="text-2xl font-bold mb-4">התוצאות:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-3">
                            {/* Fixed duplicate className prop */}
                            <CheckCircle className={`w-6 h-6 flex-shrink-0 ${service.color === 'brand' ? 'text-brand-400' : 'text-brand-300'}`} />
                            <span className="text-slate-200 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Duration & Format */}
                  <div className="flex flex-col md:flex-row gap-4">
                    {service.duration && (
                      <div className="flex-1 bg-[#0a1424]/50 rounded-xl p-4 flex items-center gap-3">
                        {/* Fixed duplicate className prop */}
                        <Clock className={`w-6 h-6 ${service.color === 'brand' ? 'text-brand-400' : 'text-brand-300'}`} />
                        <div>
                          <div className="text-sm text-slate-400">משך הליווי</div>
                          <div className="text-white font-semibold">{service.duration}</div>
                        </div>
                      </div>
                    )}
                    {service.format && (
                      <div className="flex-1 bg-[#0a1424]/50 rounded-xl p-4 flex items-center gap-3">
                        {/* Fixed duplicate className prop */}
                        <Users className={`w-6 h-6 ${service.color === 'brand' ? 'text-brand-400' : 'text-brand-300'}`} />
                        <div>
                          <div className="text-sm text-slate-400">אופן העבודה</div>
                          <div className="text-white font-semibold">{service.format}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0c1829]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-600/20 to-brand-500/20 backdrop-blur border border-brand-600/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">איך מתחילים?</h2>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              בואו נבדוק ביחד איך אפשר לייעל, לחזק ולהניע את האנשים בארגון שלכם
            </p>
            <h3 className="text-2xl font-bold text-brand-400 mb-6">הזמינו פגישת ייעוץ ראשונה ללא עלות</h3>
            <div className="bg-[#0a1424]/50 rounded-2xl p-6 mb-8 text-right max-w-2xl mx-auto">
              <p className="text-lg text-slate-300 mb-3">בשיחה נבדוק יחד:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-brand-400 w-5 h-5 flex-shrink-0 mt-1" />
                  <span>מה המצב הנוכחי והאתגרים המרכזיים</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-brand-400 w-5 h-5 flex-shrink-0 mt-1" />
                  <span>מה המטרות שלכם</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-brand-400 w-5 h-5 flex-shrink-0 mt-1" />
                  <span>איזה שירות יתאים בדיוק לצרכים שלכם</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-brand-400 w-5 h-5 flex-shrink-0 mt-1" />
                  <span>איך תראה העבודה המשותפת</span>
                </li>
              </ul>
            </div>
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
