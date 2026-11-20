const SENDMSG_ACTION = "https://panel.sendmsg.co.il/AddUserFromSite.aspx";
const SENDMSG_FORM = "346288__ff204751-df30-4c09-a580-db6b7d531114";
const FIELD_LIMIT = 250;

function clean(value) {
  return String(value ?? "").trim().slice(0, FIELD_LIMIT);
}

function wasInserted(response) {
  try {
    return new URL(response.url).searchParams.get("Status") === "Inserted";
  } catch {
    return false;
  }
}

export async function submitMailingList({ email, phone, name }) {
  const emailValue = clean(email);
  const phoneValue = clean(phone);
  const nameValue = clean(name);

  if (!emailValue.includes("@") || !phoneValue) {
    return { ok: false, httpStatus: 400 };
  }

  const body = new URLSearchParams();
  body.set("form", SENDMSG_FORM);
  body.set("eMail", emailValue);
  body.set("cellphone", phoneValue);
  body.set("1", nameValue);

  const response = await fetch(SENDMSG_ACTION, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });

  if (!wasInserted(response)) {
    return { ok: false, httpStatus: 502 };
  }

  return { ok: true, httpStatus: 200 };
}
