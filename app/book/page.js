"use client";

import { useState } from "react";
import Link from "next/link";

const sessionTypes = [
  { value: "individual", label: "Individual Therapy · 50 minutes", price: "$165" },
  { value: "couples", label: "Couples & Family Therapy · 75 minutes", price: "$225" },
  { value: "intensive", label: "Trauma Intensive · 90 minutes", price: "$295" },
  { value: "coaching", label: "Executive Coaching · 60 minutes", price: "$245" }
];

const goals = [
  "Anxiety + stress resilience",
  "Trauma processing / EMDR",
  "Relationship communication",
  "Career / leadership coaching",
  "Identity exploration",
  "Grief + life transitions"
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sessionType: sessionTypes[0].value,
    locationPreference: "virtual",
    notes: "",
    consent: false,
    goals: []
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const updateField = (field) => (event) => {
    const value = field === "consent" ? event.target.checked : event.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal) => {
    setFormData((prev) => {
      const goalsSet = new Set(prev.goals);
      if (goalsSet.has(goal)) {
        goalsSet.delete(goal);
      } else {
        goalsSet.add(goal);
      }
      return { ...prev, goals: [...goalsSet] };
    });
  };

  const validate = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      return "Please share your name so we can personalize the intake.";
    }
    if (!formData.email.includes("@")) {
      return "Enter a valid email address so we can confirm your appointment.";
    }
    if (!formData.phone.match(/^\+?[0-9\s\-()]{7,}$/)) {
      return "Add a phone number so we can send reminders (US/Canada formats supported).";
    }
    if (!formData.consent) {
      return "Please confirm consent to our secure client agreement.";
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ state: "error", message: error });
      return;
    }
    setStatus({ state: "loading", message: "Booking your intake… hang tight." });
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Unable to submit request. Please try again.");
      }
      setStatus({ state: "success", message: "Thank you! Our care coordinator will be in touch within 24 hours." });
      setFormData((prev) => ({ ...prev, notes: "", goals: [], consent: false }));
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong. Please refresh and try again." });
    }
  };

  return (
    <section style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
      <div className="container" style={{ display: "grid", gap: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <Link href="/" style={{ fontWeight: 500, color: "var(--color-primary)" }}>
            ← Back to site
          </Link>
          <span className="badge">Book your intake</span>
          <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Reserve a therapy session</h1>
          <p>
            Our care coordinator reviews every request within one business day. You’ll receive a secure portal invite to
            confirm your appointment, sign consent forms, and add payment.
          </p>
          <div className="card card-muted" style={{ display: "grid", gap: "1rem" }}>
            <h3 style={{ margin: 0 }}>Need immediate support?</h3>
            <p style={{ margin: 0 }}>
              Call or text the 988 Suicide & Crisis Lifeline, available 24/7 in the United States. For medical
              emergencies, dial 911.
            </p>
          </div>
          <div className="card" style={{ display: "grid", gap: "0.8rem" }}>
            <h3 style={{ margin: 0 }}>Availability snapshot</h3>
            <p style={{ margin: 0, color: "var(--color-text)", fontWeight: 500 }}>Next opening: Thursday, 1:00 PM PT</p>
            <p style={{ margin: 0, fontSize: "0.95rem" }}>We also hold two same-week spots for urgent needs.</p>
          </div>
        </div>

        <form className="card" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              First name
              <input type="text" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={updateField("firstName")} required />
            </label>
            <label>
              Last name
              <input type="text" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={updateField("lastName")} required />
            </label>
          </div>
          <div className="form-grid">
            <label>
              Email
              <input type="email" name="email" autoComplete="email" value={formData.email} onChange={updateField("email")} required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" autoComplete="tel" placeholder="(206) 555-4136" value={formData.phone} onChange={updateField("phone")} required />
            </label>
          </div>
          <label>
            Session preference
            <select name="sessionType" value={formData.sessionType} onChange={updateField("sessionType")}>
              {sessionTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label} · {type.price}
                </option>
              ))}
            </select>
          </label>
          <label>
            Location
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {["virtual", "seattle-studio", "hybrid"].map((option) => (
                <label key={option} style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontWeight: 500 }}>
                  <input
                    type="radio"
                    name="locationPreference"
                    value={option}
                    checked={formData.locationPreference === option}
                    onChange={updateField("locationPreference")}
                  />
                  {option === "virtual" && "Virtual (telehealth)"}
                  {option === "seattle-studio" && "Seattle studio"}
                  {option === "hybrid" && "Hybrid"}
                </label>
              ))}
            </div>
          </label>

          <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
            <legend style={{ fontWeight: 600, color: "var(--color-primary-dark)", marginBottom: "0.5rem" }}>
              What’s bringing you here today?
            </legend>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
              {goals.map((goal) => {
                const active = formData.goals.includes(goal);
                return (
                  <button
                    type="button"
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className="btn btn-secondary"
                    style={{
                      background: active ? "var(--color-primary)" : "#fff",
                      color: active ? "#fff" : "var(--color-primary)",
                      border: active ? "none" : undefined,
                      padding: "0.6rem 1.1rem"
                    }}
                  >
                    {goal}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label>
            Anything else you’d like us to know?
            <textarea
              name="notes"
              rows={4}
              placeholder="Goals, past therapy experiences, accessibility needs…"
              value={formData.notes}
              onChange={updateField("notes")}
            />
          </label>

          <label style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontWeight: 500 }}>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={updateField("consent")} />
            <span>
              I consent to HarborMind Therapy using this information to coordinate care. I understand my data will be
              stored and processed in a HIPAA-compliant platform.
            </span>
          </label>

          {status.state !== "idle" && (
            <div className={`form-status ${status.state === "success" ? "success" : status.state === "error" ? "error" : ""}`}>
              {status.state === "loading" ? "Submitting your request…" : status.message}
            </div>
          )}

          <button type="submit" className="btn btn-primary" disabled={status.state === "loading"}>
            {status.state === "loading" ? "Submitting…" : "Send booking request"}
          </button>
        </form>
      </div>
    </section>
  );
}
