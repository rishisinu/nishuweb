import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Home.css';

function RevealSection({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function StatItem({ value, label, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.unobserve(el);
      let start = 0;
      const step = value / (1800 / 16);
      const timer = setInterval(() => {
        start = Math.min(start + step, value);
        el.textContent = prefix + Math.floor(start).toLocaleString() + suffix;
        if (start >= value) clearInterval(timer);
      }, 16);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, prefix, suffix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home-hero">
        <div className="hero-bg-img" style={{ backgroundImage: "url('/hero.png')" }} />
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Student-Led Initiative · UNC Chapel Hill
          </div>
          <h1>"The goal isn't more money.<br />The goal is living life<br />on your terms."</h1>
          <p className="quote-attr">— Chris Brogan</p>
          <p className="subline">
            The Prospective Carolina Credit Union is a student-led initiative dedicated to bringing
            ethical, accessible, and student-centered banking to the UNC-Chapel Hill campus.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-outline-white">Meet Our Team</Link>
            <Link to="/support" className="btn btn-accent">Support Our Mission</Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="arrow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 7l5 5 5-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* STAT RIBBON */}
      <section className="stat-ribbon" aria-label="Key statistics">
        <div className="container stat-inner">
          <div className="stat-item">
            <div className="num"><StatItem value={80} suffix="+" /></div>
            <div className="lbl">Event Attendees</div>
          </div>
          <div className="stat-div" aria-hidden="true" />
          <div className="stat-item">
            <div className="num"><StatItem value={17} /></div>
            <div className="lbl">Board Advisors</div>
          </div>
          <div className="stat-div" aria-hidden="true" />
          <div className="stat-item">
            <div className="num"><StatItem value={500000} prefix="$" /></div>
            <div className="lbl">Fundraising Target</div>
          </div>
          <div className="stat-div" aria-hidden="true" />
          <div className="stat-item">
            <div className="num"><StatItem value={2} /></div>
            <div className="lbl">Peer Institutions Modeled</div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" id="mission">
        <div className="container mission-grid">
          <RevealSection>
            <span className="section-label">Our Purpose</span>
            <h2>Built For Students,<br />By Students</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginTop: 12 }}>
              We believe every Carolina student deserves access to fair, transparent, and affordable
              financial services. CSCU is more than a credit union — it's a movement to redefine
              what student banking can look like.
            </p>
            <div style={{ marginTop: 28 }}>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
          </RevealSection>
          <RevealSection className="mission-cards">
            <div className="mission-card blue">
              <div className="mlabel">Vision</div>
              <p>To be the premier financial institution at UNC-Chapel Hill and a beacon for student financial autonomy nationwide.</p>
            </div>
            <div className="mission-card green">
              <div className="mlabel green">Mission</div>
              <p>To establish a student-run credit union that offers affordable, transparent financial services; cultivates financial knowledge and wellness; and serves as a practical training ground for the next generation of Carolina leaders.</p>
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="divider" />

      {/* WHY */}
      <section className="section bg-offwhite" id="why">
        <div className="container why-grid">
          <RevealSection className="why-visual">
            <h3>A New Model For Student Banking</h3>
            <p>
              Today, the dominant banking option on Carolina's campus is{' '}
              <span className="highlight">Wells Fargo</span> — a for-profit institution whose
              interests don't always align with students'. Credit unions operate differently:
              member-owned, not-for-profit, and built around community benefit.
            </p>
            <p style={{ marginTop: 16 }}>
              We aim to change that — bringing a student-governed alternative that puts you first.
            </p>
          </RevealSection>
          <RevealSection className="why-content">
            <span className="section-label">Why CSCU</span>
            <h2>Students Deserve Better Banking</h2>
            <p style={{ marginTop: 12, lineHeight: 1.8 }}>
              We've studied how peer institutions have successfully launched student credit unions.
              Georgetown University and the University of Pennsylvania have both demonstrated that
              student-run credit unions are transformative for campus financial health.
            </p>
            <div className="why-models">
              <div className="model-badge"><span className="dot" />Georgetown University</div>
              <div className="model-badge"><span className="dot" />UPenn CU</div>
              <div className="model-badge"><span className="dot green" />CSCU (Coming Soon)</div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section" id="services-preview">
        <div className="container">
          <RevealSection className="text-center mb-48">
            <span className="section-label">What We Offer</span>
            <h2>Student-Centered Financial Services</h2>
            <p style={{ maxWidth: 540, margin: '12px auto 0' }}>Built with simplicity, transparency, and student needs at the core.</p>
          </RevealSection>
          <div className="grid-4">
            {[
              { icon: '🏦', title: 'Credit Builder', desc: 'Small-dollar loans to establish or improve your credit history with clear, fixed terms.' },
              { icon: '💳', title: 'Checking & Savings', desc: 'Simple, no-fee accounts with ATM access and easy online statements.' },
              { icon: '📱', title: 'Digital Banking', desc: '24/7 secure mobile tools for transfers, budgeting, and financial tracking.' },
              { icon: '🔒', title: 'Debit Cards', desc: 'Secure cards with fraud monitoring, issued through trusted partner networks.' },
            ].map(s => (
              <RevealSection key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </RevealSection>
            ))}
          </div>
          <RevealSection className="text-center mt-32">
            <Link to="/services" className="btn btn-outline">Explore All Services</Link>
          </RevealSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section bg-blue" style={{ padding: '72px 0' }}>
        <RevealSection>
          <div className="container text-center">
            <h2 style={{ color: 'white', marginBottom: 16 }}>Join The Movement</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 540, margin: '0 auto 32px' }}>
              Help us reach our $500,000 fundraising goal. Every dollar moves us closer to bringing
              ethical, student-centered banking to Carolina.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/support" className="btn btn-outline-white">Support Us</Link>
              <Link to="/literacy" className="btn btn-accent">Financial Literacy Events</Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
