import { useEffect, useRef, useState } from 'react';
import './Literacy.css';

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const WORKSHOPS = [
  { badge: 'BD', title: 'Budgeting', desc: 'Learn to track your spending, set realistic goals, and build habits that work with a student lifestyle and income.' },
  { badge: 'CR', title: 'Understanding Credit', desc: 'Demystify credit scores, credit reports, and how to build a strong credit profile starting now — even as a student.' },
  { badge: 'IN', title: 'Investing', desc: 'An approachable introduction to investing: index funds, compound interest, and how to start building wealth in your 20s.' },
  { badge: 'SL', title: 'Student Loan & Debt Management', desc: 'Navigate federal loans, repayment options, and smart debt management strategies for life after graduation.' },
];

export default function Literacy() {
  const [activeWorkshopTitle, setActiveWorkshopTitle] = useState(WORKSHOPS[0].title);
  const [showEventDetails, setShowEventDetails] = useState(true);
  const activeWorkshop = WORKSHOPS.find((workshop) => workshop.title === activeWorkshopTitle) || WORKSHOPS[0];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label light">Education First</span>
          <h1>Financial Literacy & Wellness</h1>
          <p>Empowering Carolina students with the knowledge and tools to make confident financial decisions — for life.</p>
        </div>
      </section>

      {/* Workshops */}
      <section className="section" id="education">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Programs</span>
            <h2>What We Offer</h2>
            <p style={{ maxWidth: 560, margin: '12px auto 0' }}>Our curriculum is designed to meet students where they are — from financial basics to advanced wealth-building strategies.</p>
          </div></Reveal>
          <Reveal>
            <div className="workshop-tabs" role="tablist" aria-label="Workshop categories">
              {WORKSHOPS.map((workshop) => (
                <button
                  key={workshop.title}
                  type="button"
                  role="tab"
                  aria-selected={activeWorkshopTitle === workshop.title}
                  className={activeWorkshopTitle === workshop.title ? 'active' : ''}
                  onClick={() => setActiveWorkshopTitle(workshop.title)}
                >
                  {workshop.title}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid-4">
            {WORKSHOPS.map(w => (
              <Reveal key={w.title}>
                <div
                  className={`workshop-card ${activeWorkshopTitle === w.title ? 'active' : ''}`}
                  tabIndex={0}
                  onMouseEnter={() => setActiveWorkshopTitle(w.title)}
                  onFocus={() => setActiveWorkshopTitle(w.title)}
                >
                  <div className="workshop-icon">{w.badge}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="workshop-detail">
              <p className="workshop-detail-label">Featured Topic</p>
              <h3>{activeWorkshop.title}</h3>
              <p>{activeWorkshop.desc}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* Upcoming Event */}
      <section className="section bg-offwhite" id="upcoming">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Upcoming</span>
            <h2>Don't Miss Our Next Event</h2>
          </div></Reveal>
          <Reveal>
            <div className="symposium-card">
              <div className="sym-inner">
                <div className="sym-badges">
                  <span className="upcoming-badge">Upcoming Event</span>
                  <span className="date-chip">April 11, 2026 | The Friday Center</span>
                </div>
                <div className="sym-grid">
                  <div>
                    <h2>Financial Literacy Symposium</h2>
                    <p>Our flagship spring event brings Carolina students together for practical, high-energy financial learning: credit building, tax basics, personal budgeting, and real conversations about financial independence.</p>
                    <div className="sym-kpis">
                      <div><strong>5</strong><span>Workshops</span></div>
                      <div><strong>1</strong><span>Keynote</span></div>
                      <div><strong>200+</strong><span>Seats</span></div>
                    </div>
                    <div style={{ marginTop: 26 }}>
                      <a href="mailto:neil06@unc.edu?subject=Symposium RSVP" className="btn btn-outline-white">RSVP / Learn More</a>
                    </div>
                  </div>
                  <div className="sym-agenda">
                    <h4>Event Highlights</h4>
                    <button type="button" className="event-toggle-btn" onClick={() => setShowEventDetails((prev) => !prev)}>
                      {showEventDetails ? 'Hide Full Agenda' : 'Show Full Agenda'}
                    </button>
                    {showEventDetails ? (
                      <div className="sym-features">
                        {['Featured speaker: Seth Trimble', 'Credit score and credit-building workshop', 'Student taxes and tax-credit fundamentals', 'Escape room and live credit games', 'Open networking with student leaders'].map(f => (
                          <div key={f} className="sym-feature">{f}</div>
                        ))}
                      </div>
                    ) : (
                      <p className="agenda-collapsed">Agenda collapsed. Re-open to preview workshop tracks and activities.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Event Recap */}
      <section className="section" id="recap">
        <div className="container">
          <Reveal><div className="text-center mb-48">
            <span className="section-label">Event Archive</span>
            <h2>Past Events</h2>
          </div></Reveal>
          <Reveal>
            <div className="event-card">
              <div className="event-card-top">
                <div>
                  <p className="event-type">Event Recap</p>
                  <h3>Finance Your Future Night</h3>
                  <p className="event-sub">A landmark evening of financial empowerment at UNC Chapel Hill.</p>
                </div>
                <div className="date-badge">Recap</div>
              </div>
              <div className="event-card-body">
                <div className="recap-stats">
                  <div className="recap-stat"><span className="n">80+</span><span className="l">Attendees</span></div>
                  <div className="recap-stat"><span className="n">The Pitch</span><span className="l">Venue</span></div>
                  <div className="recap-stat"><span className="n">Med Deli</span><span className="l">Catering</span></div>
                </div>
                <p>CSCU hosted its inaugural <strong>Finance Your Future Night</strong> at The Pitch in Chapel Hill — an evening packed with hands-on financial literacy workshops, networking, and community building. With over 80 students in attendance and workshops led by our own student leaders, the event demonstrated the incredible appetite for financial education on campus.</p>
                <div className="event-pills">
                  {['Budgeting Workshop', 'Credit Basics', 'Student-Led Sessions', '80+ Attendees', 'Med Deli Catering'].map(p => (
                    <span key={p} className="pill">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-blue" style={{ padding: '72px 0' }}>
        <Reveal><div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: 16 }}>Stay In The Loop</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 32px' }}>
            Want to be notified about upcoming financial literacy events and workshops?
          </p>
          <a href="mailto:neil06@unc.edu" className="btn btn-outline-white">Get In Touch</a>
        </div></Reveal>
      </section>
    </>
  );
}
