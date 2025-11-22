import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HarborMind Therapy | Book Compassionate Therapy Sessions",
  description:
    "Secure, personalized therapy bookings with HarborMind Therapy. Licensed therapists offering in-person and virtual sessions tailored to your needs.",
  openGraph: {
    title: "HarborMind Therapy",
    description:
      "Secure, personalized therapy bookings with HarborMind Therapy. Licensed therapists offering in-person and virtual sessions tailored to your needs.",
    url: "https://agentic-af1a00fb.vercel.app",
    siteName: "HarborMind Therapy",
    locale: "en_US",
    type: "website"
  }
};

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#therapists", label: "Therapists" },
  { href: "#testimonials", label: "Stories" },
  { href: "#faq", label: "FAQ" },
  { href: "/book", label: "Book a Session" }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="container" style={{ paddingTop: "1.5rem" }}>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem"
            }}
          >
            <Link href="/" style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ fontWeight: 700, fontSize: "1.35rem", color: "var(--color-primary-dark)" }}>
                HarborMind Therapy
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>
                Compassionate care for modern life
              </span>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  margin: 0,
                  padding: 0
                }}
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ fontWeight: 500, color: "var(--color-primary-dark)", fontSize: "0.95rem" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/book" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
                Reserve a Session
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <h3>HarborMind Therapy</h3>
              <p>
                Trauma-informed, evidence-based therapy tailored to individuals, couples, and families. Experience a
                safe space to heal, grow, and thrive.
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
                <span className="pill">Licensed LPC</span>
                <span className="pill">Virtual + In-person</span>
                <span className="pill">HIPAA Secure</span>
              </div>
            </div>
            <div>
              <h4>Visit</h4>
              <p>238 Harbor Way, Suite 402</p>
              <p>Seattle, WA 98101</p>
              <p style={{ marginTop: "0.5rem" }}>Mon - Sat · 8am - 7pm</p>
            </div>
            <div>
              <h4>Connect</h4>
              <p>Schedule: <Link href="/book">harbormindtherapy.com/book</Link></p>
              <p>Email: hello@harbormindtherapy.com</p>
              <p>Phone: (206) 555-4136</p>
            </div>
            <div>
              <h4>Resources</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.6rem" }}>
                <li>
                  <Link href="#services">Therapy services</Link>
                </li>
                <li>
                  <Link href="#therapists">Meet the team</Link>
                </li>
                <li>
                  <Link href="#faq">Insurance & FAQ</Link>
                </li>
                <li>
                  <Link href="/book">Client portal</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container" style={{ marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.85rem" }}>© {new Date().getFullYear()} HarborMind Therapy. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
