import { submitMailingList } from "../server/sendmsgSignup.js";

function requestBody(req) {
  if (typeof req.body === "string") {
    return JSON.parse(req.body || "{}");
  }
  return req.body || {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false });
    return;
  }

  try {
    const result = await submitMailingList(requestBody(req));
    res.status(result.httpStatus).json({ ok: result.ok });
  } catch {
    res.status(502).json({ ok: false });
  }
}
