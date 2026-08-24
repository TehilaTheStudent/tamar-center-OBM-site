const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function submitContactForm(formData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your environment.");
  }

  const message = [
    `שם: ${formData.name}`,
    `דוא"ל: ${formData.email}`,
    `טלפון: ${formData.phone}`,
    formData.company ? `ארגון/עסק: ${formData.company}` : null,
    "",
    "הודעה:",
    formData.message || "(לא צוינה)",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `פנייה חדשה מ-${formData.name} - אתר OBM`,
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || "",
      message,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "שליחת הטופס נכשלה. נסו שוב או צרו קשר בטלפון.");
  }

  return data;
}
