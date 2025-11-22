import { NextResponse } from "next/server";

const requiredFields = ["firstName", "lastName", "email", "phone", "sessionType", "locationPreference"];

export async function POST(request) {
  try {
    const payload = await request.json();

    const missing = requiredFields.filter((field) => !payload[field] || String(payload[field]).trim().length === 0);
    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const sanitized = {
      firstName: String(payload.firstName).trim(),
      lastName: String(payload.lastName).trim(),
      email: String(payload.email).trim().toLowerCase(),
      phone: String(payload.phone).trim(),
      sessionType: payload.sessionType,
      locationPreference: payload.locationPreference,
      goals: Array.isArray(payload.goals) ? payload.goals.slice(0, 8) : [],
      notes: (payload.notes || "").toString().slice(0, 1200),
      consent: Boolean(payload.consent),
      submittedAt: new Date().toISOString()
    };

    if (!sanitized.consent) {
      return NextResponse.json({ ok: false, error: "Consent must be granted." }, { status: 400 });
    }

    await new Promise((resolve) => setTimeout(resolve, 650));

    console.info("New booking request received:", sanitized);

    return NextResponse.json({ ok: true, message: "Booking received.", data: sanitized }, { status: 201 });
  } catch (error) {
    console.error("Booking submission failed:", error);
    return NextResponse.json({ ok: false, error: "Unable to process booking request." }, { status: 500 });
  }
}
