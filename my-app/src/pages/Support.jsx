import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function GoalBar({ pct }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.unobserve(el); } }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="goal-bar-wrap">
      <div className="goal-bar" style={{ width: started ? `${pct}%` : '0%' }} />
    </div>
  );
}

const USE_OF_FUNDS = [
  { pct: '~40%', label: 'NCUA Federal Charter Filing & Regulatory Fees', color: 'blue' },
  { pct: '~35%', label: 'Core Banking Software & Compliance Technology', color: 'red' },
  { pct: '~15%', label: 'Legal, Accounting & Operational Setup', color: 'yellow' },
  { pct: '~10%', label: 'Financial Literacy Programs & Community Events', color: 'green' },
];

export default function Support() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label light">Make An Impact</span>
          <h1>Support Our Mission</h1>
          <p>Help us raise $500,000 to cover regulatory filing fees, core banking software, and compliance infrastructure — and bring student banking to UNC Chapel Hill.</p>
        </div>
      </section>

      {/* Goal Bar */}
      <section className="section" id="goal">
        <div className="container">
          <Reveal>
            <div className="goal-section">
              <span className="section-label">Fundraising Progress</span>
              <h2>The $500,000 Goal</h2>
              <p>Launching a credit union requires significant upfront investment. Our target covers NCUA federal charter filing fees, core banking and compliance software, and legal and operational setup costs. Every dollar raised brings us one step closer to opening our doors to Carolina students.</p>
              <div className="goal-meta">
                <span>Progress toward goal</span>
                <strong>In Progress</strong>
              </div>
              <GoalBar pct={18} />
              <div className="goal-labels">
                <span>$0</span>
                <span>Goal: $500,000</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="section bg-offwhite" id="use-of-funds">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Transparency</span>
            <h2>Where Your Money Goes</h2>
            <p style={{ maxWidth: 540, margin: '12px auto 0' }}>Every dollar is allocated toward bringing CSCU to life for Carolina students.</p>
          </div></Reveal>
          <div className="fund-grid">
            {USE_OF_FUNDS.map(f => (
              <Reveal key={f.label}>
                <div className="fund-item">
                  <div className={`fund-pct ${f.color}`}>{f.pct}</div>
                  <div className="fund-lbl">{f.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="section" id="donate">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Ways To Give</span>
            <h2>Support CSCU Today</h2>
            <p style={{ maxWidth: 540, margin: '12px auto 0' }}>Choose the option that works best for you. Every contribution counts.</p>
          </div></Reveal>
          <div className="grid-3">
            <Reveal>
              <div className="cta-card">
                <h3>GoFundMe</h3>
                <p>Make a one-time donation of any size through our active GoFundMe campaign.</p>
                <a href="#" className="btn btn-outline-white" id="gofundme-btn">Donate on GoFundMe</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="cta-card dark">
                <h3>Tax-Deductible Fundraiser</h3>
                <p>Your contribution may be tax-deductible. See our official fundraiser page for details.</p>
                <a href="#" className="btn btn-outline-white" id="taxdeductible-btn">Official Fundraiser</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="card pledge-card" id="pledge">
                <div className="pledge-icon">📋</div>
                <h3>Pledge Form</h3>
                <p>Commit to a future contribution with our official pledge form. Great for organizations and larger donors.</p>
                <a href="mailto:neil06@unc.edu?subject=CSCU Pledge Interest" className="btn btn-primary" id="pledge-btn">Request Pledge Form</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Donors Wall */}
      <section className="section bg-offwhite" id="donors">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Our Supporters</span>
            <h2>Donors Wall</h2>
            <p style={{ maxWidth: 540, margin: '12px auto 0' }}>We are grateful to everyone who has supported our mission. Thank you.</p>
          </div></Reveal>

          <Reveal>
            <div className="donor-tier">
              <h4 className="tier-title gold">🥇 Gold Sponsors</h4>
              <div className="donor-list">
                <div className="donor-chip gold">Carolina Pitch Festival</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="donor-tier">
              <h4 className="tier-title silver">🥈 Silver Sponsors</h4>
              <div className="donor-list">
                <div className="donor-chip">Shiva Rajbhandari</div>
                <div className="donor-chip">1789 Fund</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="donor-tier">
              <h4 className="tier-title green">💚 Community Supporters</h4>
              <div className="donor-list">
                <div className="donor-chip">Individual Donors</div>
                <div className="donor-chip">UNC Student Supporters</div>
                <div className="donor-chip your-name">Your Name Here</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center" style={{ marginTop: 32 }}>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', marginBottom: 16 }}>Want to see your name on this wall? Make a contribution today.</p>
              <a href="#donate" className="btn btn-primary">Donate Now</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Merch */}
      <section className="section-sm" id="merch">
        <div className="container">
          <Reveal>
            <div className="merch-card">
              <div className="merch-icon">👕</div>
              <h3>Interested In CSCU Merch?</h3>
              <p>Rock the Carolina Students' Credit Union brand. Contact our Development Head to get exclusive CSCU merchandise.</p>
              <a href="mailto:cjjustus@unc.edu?subject=CSCU Merch Inquiry" className="btn btn-outline" id="merch-btn">
                Contact Calie Justus — cjjustus@unc.edu
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
