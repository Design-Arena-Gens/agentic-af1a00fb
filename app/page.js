"use client";

import Link from "next/link";
import { useMemo } from "react";

const services = [
  {
    title: "Individual Therapy",
    description: "Personalized sessions focused on stress, anxiety, depression, and life transitions.",
    features: ["CBT, DBT, EMDR modalities", "Trauma-informed care", "Virtual or in-person"]
  },
  {
    title: "Couples & Family Therapy",
    description: "Strengthen relationships, improve communication, and navigate transitions together.",
    features: ["Emotionally focused therapy", "Conflict resolution frameworks", "Pre-marital counseling"]
  },
  {
    title: "Executive Coaching",
    description: "Mindful leadership coaching for founders, executives, and high performers.",
    features: ["Burnout prevention plans", "Values-aligned decision making", "On-demand booster sessions"]
  }
];

const therapists = [
  {
    name: "Dr. Maya Ellison, LPC",
    bio: "Specializes in trauma recovery, anxiety, and life transitions. 12 years of experience supporting adults navigating change.",
    credentials: ["Harvard Graduate School of Education", "Somatic Experiencing Practitioner", "Certified EMDR Therapist"]
  },
  {
    name: "Jared Kim, LMFT",
    bio: "Focuses on relational health, communication, and neurodiverse partnerships. 9 years supporting couples and families.",
    credentials: ["Seattle Pacific University", "Gottman Method Levels 1 & 2", "Polyvagal-informed practice"]
  },
  {
    name: "Dr. Imani Rhodes, PsyD",
    bio: "Leads the executive coaching track, integrating mindfulness and performance psychology for conscious leadership.",
    credentials: ["Stanford PsyD", "ICF Professional Certified Coach", "Former startup founder"]
  }
];

const testimonials = [
  {
    quote:
      "I found HarborMind after a burnout spiral. Maya created a plan that helped me pause, heal, and return to leadership with clarity.",
    name: "Leah M.",
    role: "Chief Product Officer"
  },
  {
    quote:
      "Jared helped us break long-standing looping arguments. We're communicating again and creating a new family culture!",
    name: "Nate & Priya",
    role: "Parents of 2"
  },
  {
    quote:
      "The digital client portal makes scheduling effortless. I can drop in for a virtual session before a big board meeting.",
    name: "Julian S.",
    role: "Startup Founder"
  }
];

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "Yes. We are in-network with Aetna, Premera, Regence, and First Choice Health. We also provide superbills for out-of-network reimbursement."
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Sessions can be rescheduled or canceled up to 24 hours in advance at no cost. Late cancellations incur a 50% session fee."
  },
  {
    question: "Can I switch therapists?",
    answer:
      "Absolutely. You can request a different therapist at any time. Our care coordinator will help match you with the right provider."
  },
  {
    question: "Do you offer sliding scale rates?",
    answer:
      "We reserve a limited number of sliding scale spots each quarter. Please mention this in your intake form and we’ll follow up."
  }
];

const highlights = [
  "Book in 60 seconds with a HIPAA-secure portal",
  "Blend in-person sessions in Seattle with virtual care anywhere in Washington",
  "24/7 access to guided meditations, worksheets, and progress logs"
];

export default function HomePage() {
  const currentAvailability = useMemo(
    () => ({
      headline: "This week’s availability",
      slots: ["Wed · 8:30 AM", "Thu · 12:00 PM", "Fri · 4:15 PM", "Sat · 10:00 AM"],
      note: "New clients are typically matched with a therapist within 72 hours."
    }),
    []
  );

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="stack" style={{ gap: "1.5rem" }}>
            <span className="badge">
              <span role="img" aria-label="sparkle">
                ✨
              </span>
              Therapy designed for humans in motion
            </span>
            <h1 style={{ fontSize: "3rem" }}>
              Reserve your next therapy session with a team that meets you where you are.
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              HarborMind Therapy provides trauma-informed support for people navigating big transitions, persistent
              stress, and complex relationships. You choose virtual or in-person care—our team handles the rest.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/book" className="btn btn-primary">
                Book an intake
              </Link>
              <a href="#services" className="btn btn-secondary">
                Explore services
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginTop: "1rem" }}>
              {highlights.map((highlight) => (
                <span key={highlight} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}>
                  <span role="img" aria-hidden="true">
                    ✅
                  </span>
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-content">
              <span className="pill">Client outcomes · 2024</span>
              <span className="hero-image-metric">92%</span>
              <span className="hero-image-caption">
                of clients report improved emotional resilience within six sessions.
              </span>
              <div style={{ background: "#fff", padding: "1rem", borderRadius: "16px", display: "grid", gap: "0.6rem" }}>
                <span style={{ fontWeight: 600, color: "var(--color-primary-dark)" }}>
                  {currentAvailability.headline}
                </span>
                <div className="pill-collection">
                  {currentAvailability.slots.map((slot) => (
                    <span key={slot} className="pill">
                      {slot}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>{currentAvailability.note}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-heading">
            <h2>Therapy, coaching, and care plans that flex with your life</h2>
            <p>
              Whether you prefer structured CBT, creative somatic work, or focused coaching, our clinicians co-create a
              plan that honors your pace and goals.
            </p>
          </div>
          <div className="features-grid">
            {services.map((service) => (
              <article key={service.title} className="card session-card">
                <div>
                  <h3>{service.title}</h3>
                  <p style={{ marginTop: "0.7rem" }}>{service.description}</p>
                </div>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href="/book" className="btn btn-secondary" style={{ justifySelf: "flex-start" }}>
                  Book now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="therapists">
        <div className="container">
          <div className="section-heading">
            <h2>Meet the therapists guiding your care</h2>
            <p>
              Our team brings together specialties across trauma, nervous system regulation, and modern relationship
              dynamics. Expect grounded expertise with a human tone.
            </p>
          </div>
          <div className="grid" style={{ gap: "2rem" }}>
            {therapists.map((therapist) => (
              <article key={therapist.name} className="card card-muted">
                <div className="stack">
                  <h3>{therapist.name}</h3>
                  <p>{therapist.bio}</p>
                </div>
                <div className="pill-collection">
                  {therapist.credentials.map((credential) => (
                    <span key={credential} className="pill">
                      {credential}
                    </span>
                  ))}
                </div>
                <Link href="/book" className="btn btn-secondary" style={{ justifySelf: "flex-start" }}>
                  Request with {therapist.name.split(",")[0]}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" style={{ background: "rgba(53,99,124,0.08)" }}>
        <div className="container">
          <div className="section-heading">
            <h2>Your path to care</h2>
            <p>
              Our intake process minimizes friction and maximizes comfort. Complete everything online and arrive ready
              to dive in.
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: "📝",
                title: "01 · Intake form",
                description: "Tell us about your goals, preferences, and practical needs in a 3-minute secure form."
              },
              {
                icon: "🤝",
                title: "02 · Therapist match",
                description: "We hand-match you with a clinician and share personalized recommendations within 48 hours."
              },
              {
                icon: "📅",
                title: "03 · Session booking",
                description: "Book the first session in our HIPAA-compliant portal, then opt into reminders and resources."
              },
              {
                icon: "🌱",
                title: "04 · Ongoing support",
                description: "Access curated practices between sessions, plus on-demand check-ins for what life brings."
              }
            ].map((step) => (
              <div key={step.title} className="card feature-card">
                <span className="feature-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div className="section-heading">
            <h2>Stories from our clients</h2>
            <p>Real shifts from real people who chose to invest in their emotional health and relational energy.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="card testimonial-card">
                <p>“{testimonial.quote}”</p>
                <figcaption className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-heading">
            <h2>Insurance, billing, and practical questions</h2>
            <p>
              Browse common questions here or email hello@harbormindtherapy.com. Our care team responds within one
              business day.
            </p>
          </div>
          <div className="grid" style={{ gap: "1.25rem" }}>
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary style={{ fontWeight: 600, fontSize: "1.05rem", cursor: "pointer" }}>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "0", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="card" style={{ textAlign: "center", padding: "3rem 2.5rem", position: "relative" }}>
            <span className="badge" style={{ marginBottom: "1rem" }}>
              Ready when you are
            </span>
            <h2 style={{ fontSize: "2.2rem" }}>Your next session is a click away</h2>
            <p style={{ margin: "1rem auto 2rem", maxWidth: "540px" }}>
              Tell us what support looks like for you, and we’ll craft a matching path. Intake openings refresh daily so
              you can start when it feels right.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/book" className="btn btn-primary">
                Start intake
              </Link>
              <a href="mailto:hello@harbormindtherapy.com" className="btn btn-secondary">
                Chat with care team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
