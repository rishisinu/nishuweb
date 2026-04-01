import { useEffect, useRef, useState } from 'react';
import './Services.css';

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const SERVICES = [
  {
    badge: 'CB', id: 'credit-builder', title: 'Credit Builder Loan',
    desc: 'Start building your credit history today. Our small-dollar Credit Builder Loans are designed specifically for students with little or no credit history. With fixed, transparent terms and low interest, you make manageable monthly payments while establishing the credit foundation you need for life after college.',
    features: ['Small-dollar loan amounts', 'Fixed, transparent terms', 'Reports to major credit bureaus', 'No penalty for early payoff'],
  },
  {
    badge: 'CS', id: 'checking', title: 'Checking & Savings Accounts',
    desc: 'Simple, no-fee accounts with the features students actually need. Our checking account comes with free ATM access, online statements, and zero minimum balance requirements. Pair it with a savings account to start building your financial future with ease.',
    features: ['No monthly maintenance fees', 'Free ATM access', 'Online/mobile statements', 'No minimum balance'],
  },
  {
    badge: 'DB', id: 'digital', title: 'Digital Banking',
    desc: 'Manage your money anytime, anywhere. Our secure mobile and online banking platform lets you check balances, transfer funds, pay bills, and track your budget — all from your phone. Built for the digital-first generation.',
    features: ['24/7 account access', 'Instant transfers', 'Budget tracking tools', 'Bank-grade encryption'],
  },
  {
    badge: 'DC', id: 'debit', title: 'Debit Cards',
    desc: 'Spend safely with CSCU debit cards issued through trusted partner networks. Real-time fraud monitoring and instant alerts keep your money protected — whether you\'re buying textbooks on Franklin Street or ordering late-night food before finals.',
    features: ['Real-time fraud monitoring', 'Issued via partner networks', 'Instant transaction alerts', 'Card freeze in-app'],
  },
];

const PRINCIPLES = [
  { badge: 'MO', title: 'Member-Owned', desc: 'Unlike banks, credit unions are owned by their members. Every CSCU member has an equal voice.' },
  { badge: 'TR', title: 'Transparent', desc: 'No hidden fees, no fine print. Every term and condition is written in plain language.' },
  { badge: 'ET', title: 'Ethical', desc: 'We operate in the best interest of students — not shareholders or executives.' },
  { badge: 'ED', title: 'Educational', desc: 'Banking paired with financial literacy. We teach, not just transact.' },
  { badge: 'SL', title: 'Student-Led', desc: 'Governed by Carolina students, for Carolina students. Real leadership experience.' },
];

const COMPARE = [
  { feature: 'Monthly fees', cscu: 'None', bank: 'Up to $15/month', bankBad: true },
  { feature: 'Minimum balance requirement', cscu: 'None', bank: 'Often $1,500+', bankBad: true },
  { feature: 'Credit builder products', cscu: 'Yes', bank: 'Rarely for students', bankBad: false },
  { feature: 'Student ownership / governance', cscu: 'Member-owned', bank: 'Shareholder-owned', bankBad: true },
  { feature: 'Financial education', cscu: 'Integrated', bank: 'Minimal', bankBad: false },
  { feature: '24/7 digital access', cscu: 'Yes', bank: 'Yes', bankBad: false },
  { feature: 'Fraud monitoring', cscu: 'Yes', bank: 'Yes', bankBad: false },
  { feature: 'Profits returned to members', cscu: 'Yes', bank: 'No', bankBad: true },
];

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((service) => service.id === activeServiceId) || SERVICES[0];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label light">Products & Services</span>
          <h1>Services Built For Students</h1>
          <p>Transparent, affordable, and student-centered financial products. No hidden fees, no fine print — just honest banking.</p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="section" id="products">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Our Offerings</span>
            <h2>Core Financial Products</h2>
            <p style={{ maxWidth: 540, margin: '12px auto 0' }}>Designed with student life in mind.</p>
          </div></Reveal>
          <Reveal>
            <div className="service-toggle" role="tablist" aria-label="Select a product to highlight">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={activeServiceId === service.id}
                  className={activeServiceId === service.id ? 'active' : ''}
                  onClick={() => setActiveServiceId(service.id)}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid-2">
            {SERVICES.map(s => (
              <Reveal key={s.id}>
                <div
                  className={`product-card ${activeServiceId === s.id ? 'active' : ''}`}
                  id={s.id}
                  onMouseEnter={() => setActiveServiceId(s.id)}
                >
                  <div className="product-card-top">
                    <div className="product-icon">{s.badge}</div>
                    <span className="badge badge-blue">Available Soon</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="feature-list">
                    {s.features.map(f => <li key={f}><span className="check-icon">✓</span>{f}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="service-focus-panel">
              <p className="focus-label">Focused Product</p>
              <h3>{activeService.title}</h3>
              <p>{activeService.desc}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* Principles */}
      <section className="section bg-offwhite" id="principles">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Our Values</span>
            <h2>Guiding Principles</h2>
          </div></Reveal>
          <div className="principles-grid">
            {PRINCIPLES.map(p => (
              <Reveal key={p.title}>
                <div className="principle-item">
                  <div className="principle-icon">{p.badge}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section" id="comparison">
        <div className="container">
          <Reveal><div className="text-center mb-32">
            <span className="section-label">Why Switch</span>
            <h2>CSCU vs. Traditional Banking</h2>
            <p style={{ maxWidth: 540, margin: '12px auto 0' }}>See how CSCU stacks up against a typical large commercial bank.</p>
          </div></Reveal>
          <Reveal>
            <div className="table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr><th>Feature</th><th>CSCU <span className="planned">(Planned)</span></th><th>Traditional Bank</th></tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.feature}</strong></td>
                      <td className="cscu-col">{row.cscu}</td>
                      <td className={row.bankBad ? 'bank-bad' : ''}>{row.bank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-blue" style={{ padding: '72px 0' }}>
        <Reveal><div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: 16 }}>Help Us Make This Real</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 32px' }}>
            These services are in development. Support CSCU to bring student-centered banking to Carolina.
          </p>
          <a href="/support" className="btn btn-outline-white">Support Our Mission</a>
        </div></Reveal>
      </section>
    </>
  );
}
