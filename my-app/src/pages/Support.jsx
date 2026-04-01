import { useEffect, useRef, useState } from 'react';
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

const DONOR_TIERS = [
  { id: 'gold', title: 'Gold Donors', tone: 'gold', donors: ['Carolina Pitch Festival', 'Landson Robbins'] },
  { id: 'silver', title: 'Silver Donors', tone: 'silver', donors: ['Shiva Rajbhandari', 'The 1789 Fund', 'Jamil Kadoura'] },
  { id: 'community', title: 'Bronze & Community', tone: 'green', donors: ['Amy Gao', 'Anvi Pullalarevu', 'NextGame Advisors', 'Spicy Nine Chapel Hill', 'Your Name Here'] },
];

const SPONSORS_SCROLL = [
  'Blaze Credit Union',
  'Wasatch Peaks Credit Union',
  'Carolina Pitch Festival',
  'Landson Robbins',
  'Shiva Rajbhandari',
  'The 1789 Fund',
  'Jamil Kadoura',
  'NextGame Advisors',
  'Spicy Nine Chapel Hill',
  'Calie Justus',
  'Charles Zhang',
  'Saatvik Yamala',
];

function SponsorsTicker({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="sponsors-ticker" role="region" aria-label="Sponsors and donors marquee">
      <div className="sponsors-track">
        {loop.map((name, idx) => (
          <div key={`${name}-${idx}`} className="sponsor-pill">{name}</div>
        ))}
      </div>
    </div>
  );
}

export default function Support() {
  const [activeTier, setActiveTier] = useState('all');
  const visibleTiers = DONOR_TIERS.filter((tier) => activeTier === 'all' || tier.id === activeTier);
  const donorCount = new Set(DONOR_TIERS.flatMap((tier) => tier.donors).filter((name) => name !== 'Your Name Here')).size;

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
                <a href="https://www.gofundme.com/f/support-carolina-credit-union-for-unc-students" target="_blank" rel="noreferrer" className="btn btn-outline-white" id="gofundme-btn">Donate on GoFundMe</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="cta-card dark">
                <h3>Tax-Deductible Fundraiser</h3>
                <p>Your contribution may be tax-deductible. See our official fundraiser page for details.</p>
                <a href="https://secure.givelively.org/donate/cu-de-novo-collective/shiva-rajbhandari" target="_blank" rel="noreferrer" className="btn btn-outline-white" id="taxdeductible-btn">Official Fundraiser</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="card pledge-card" id="pledge">
                <div className="pledge-icon">PF</div>
                <h3>Pledge Form</h3>
                <p>Commit to a future contribution with our official pledge form. Great for organizations and larger donors.</p>
                <a href="https://forms.gle/UCGbVQ2NoLJLL935A" target="_blank" rel="noreferrer" className="btn btn-primary" id="pledge-btn">Open Pledge Form</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section-sm" id="sponsors">
        <div className="container">
          <Reveal><div className="text-center mb-24">
            <span className="section-label">Sponsors & Partners</span>
            <h2>Organizations and Donors Powering CSCU</h2>
            <p style={{ maxWidth: 620, margin: '12px auto 0' }}>This list reflects top sponsors and active donor support from our previous campaign site.</p>
          </div></Reveal>
          <Reveal>
            <SponsorsTicker items={SPONSORS_SCROLL} />
          </Reveal>
        </div>
      </section>

      {/* Donors Wall */}
      <section className="section bg-offwhite" id="donors">
        <div className="container">
          <Reveal><div className="text-center mb-32">
            <span className="section-label">Our Supporters</span>
            <h2>Donors Wall</h2>
            <p style={{ maxWidth: 620, margin: '12px auto 0' }}>Backers on this wall are funding the launch of student-owned banking at Carolina. Join them and put your name behind the movement.</p>
          </div></Reveal>

          <div className="donor-wall-shell">
            <Reveal>
              <div className="donor-proof">
                <div className="proof-chip">
                  <strong>{donorCount}+</strong>
                  <span>Named donors</span>
                </div>
                <div className="proof-chip">
                  <strong>{DONOR_TIERS.length}</strong>
                  <span>Donor tiers</span>
                </div>
                <div className="proof-chip">
                  <strong>$500k</strong>
                  <span>Launch target</span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="tier-filter" role="tablist" aria-label="Filter donor tiers">
                <button
                  type="button"
                  role="tab"
                  className={activeTier === 'all' ? 'active' : ''}
                  aria-selected={activeTier === 'all'}
                  onClick={() => setActiveTier('all')}
                >
                  All Tiers
                </button>
                {DONOR_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    role="tab"
                    className={activeTier === tier.id ? 'active' : ''}
                    aria-selected={activeTier === tier.id}
                    onClick={() => setActiveTier(tier.id)}
                  >
                    {tier.title}
                  </button>
                ))}
              </div>
            </Reveal>

            {visibleTiers.map((tier) => (
              <Reveal key={tier.id}>
                <div className={`donor-tier tier-card ${tier.tone}`}>
                  <h4 className={`tier-title ${tier.tone}`}>{tier.title}</h4>
                  <div className="donor-list">
                    {tier.donors.map((donor) => (
                      <div
                        key={donor}
                        className={`donor-chip ${tier.tone === 'gold' && donor === 'Carolina Pitch Festival' ? 'gold' : ''} ${donor === 'Your Name Here' ? 'your-name' : ''}`}
                      >
                        {donor}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="donor-cta">
                <div>
                  <p className="donor-cta-kicker">Next Name On The Wall</p>
                  <h3>Become a Founding Supporter of Student Banking at UNC</h3>
                  <p>Your contribution directly moves this from idea to institution. Add your name and help open Carolina’s student-led credit union.</p>
                </div>
                <div className="donor-cta-actions">
                  <a href="#donate" className="btn btn-primary">Donate Now</a>
                  <a href="https://forms.gle/UCGbVQ2NoLJLL935A" target="_blank" rel="noreferrer" className="btn btn-outline">Pledge A Gift</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Merch */}
      <section className="section-sm" id="merch">
        <div className="container">
          <Reveal>
            <div className="merch-card merch-feature">
              <div className="merch-feature-copy">
                <span className="section-label">Limited Drop</span>
                <h3>Wear the Carolina Credit Union Initiative</h3>
                <p>We partner with a local boutique on premium CSCU merch. Place an order directly with our Development team to reserve the next run.</p>
                <div className="merch-actions">
                  <a href="mailto:cjjustus@unc.edu?subject=CSCU Merchandise Order" className="btn btn-primary" id="merch-btn">Order Merch</a>
                  <a href="mailto:cjjustus@unc.edu?subject=CSCU Merchandise Catalog Request" className="btn btn-outline">Request Catalog</a>
                </div>
                <p className="merch-contact">Primary contact: Calie Justus (<a href="mailto:cjjustus@unc.edu">cjjustus@unc.edu</a>)</p>
              </div>
              <div className="merch-gallery" aria-label="Merchandise preview">
                <div className="merch-tile">Classic Crewneck</div>
                <div className="merch-tile">Campus Tee</div>
                <div className="merch-tile">Founder Hat</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
