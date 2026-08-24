import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/api/contactForm";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    botcheck: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (formData.botcheck) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending contact form:", error);
      setSubmitError(
        error.message || "שליחת הטופס נכשלה. נסו שוב או צרו קשר בטלפון / WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      botcheck: ""
    });
    setIsSubmitted(false);
    setSubmitError("");
  };

  return (
    <div className="bg-[#0c1829] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80" 
            alt="צור קשר"
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
              בואו נדבר
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
              מוכנים לשינוי שבאמת קורה? נתחיל בפגישת ייעוץ ללא עלות
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0c1829] to-[#0a1424]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">פרטי התקשרות</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                אשמח לשמוע עליכם ועל האתגרים שלכם. בשיחה הראשונה נזהה יחד את הצרכים ונבין איך אני יכולה לעזור לכם.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-brand-600/50 transition-colors"
                >
                  <div className="p-3 bg-brand-600/20 rounded-xl">
                    <Mail className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">דוא"ל</div>
                    <a href="mailto:TAMAR@OBM.CO.IL" className="text-lg font-semibold hover:text-brand-400 transition-colors" dir="ltr">
                      TAMAR@OBM.CO.IL
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-brand-500/50 transition-colors"
                >
                  <div className="p-3 bg-brand-500/20 rounded-xl">
                    <Phone className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">טלפון</div>
                    <a href="tel:0527681169" className="text-lg font-semibold hover:text-brand-300 transition-colors" dir="ltr">
                      052-768-1169
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-green-500/50 transition-colors"
                >
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">WhatsApp</div>
                    <a
                      href="https://wa.me/972502131327"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-green-400 transition-colors"
                      dir="ltr"
                    >
                      050-213-1327
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-brand-600/10 to-brand-500/10 backdrop-blur border border-brand-600/20 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-brand-400" />
                    בפגישת הייעוץ נדבר על:
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-1" />
                      <span>המצב הנוכחי והאתגרים המרכזיים בארגון</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-1" />
                      <span>המטרות והיעדים שאתם רוצים להשיג</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-1" />
                      <span>הדרך הנכונה להתקדם ולהשיג תוצאות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-1" />
                      <span>איך תראה העבודה המשותפת</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold mb-6">שלחו לי פרטים</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot — hidden from users, catches bots */}
                    <input
                      type="text"
                      name="botcheck"
                      value={formData.botcheck}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div>
                      <Label htmlFor="name" className="text-slate-300 mb-2 block">שם מלא *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-[#0a1424] border-slate-700 text-white focus:border-brand-600"
                        placeholder="איך קוראים לך?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-300 mb-2 block">דוא"ל *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-[#0a1424] border-slate-700 text-white focus:border-brand-600"
                        placeholder="your@email.com"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-slate-300 mb-2 block">טלפון *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-[#0a1424] border-slate-700 text-white focus:border-brand-600"
                        placeholder="052-1234567"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-300 mb-2 block">שם הארגון / העסק</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-[#0a1424] border-slate-700 text-white focus:border-brand-600"
                        placeholder="שם הארגון שלך"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-300 mb-2 block">ספרו לי קצת על האתגרים שלכם</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-[#0a1424] border-slate-700 text-white focus:border-brand-600 min-h-[120px]"
                        placeholder="מה מוביל אתכם לחפש ייעוץ ארגוני? מה האתגרים המרכזיים?"
                      />
                    </div>

                    {submitError && (
                      <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl p-4" role="alert">
                        {submitError}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold py-6 text-lg shadow-2xl shadow-brand-600/40"
                    >
                      {isSubmitting ? (
                        "שולח..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 ml-2" />
                          שלחו את הפרטים
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">תודה רבה!</h3>
                  <p className="text-lg text-slate-300 mb-6">
                    הפרטים התקבלו בהצלחה.<br/>
                    אחזור אליכם בהקדם האפשרי.
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white font-bold px-8 py-3"
                  >
                    שלחו הודעה נוספת
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}