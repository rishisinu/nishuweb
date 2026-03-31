import { useEffect, useRef } from 'react';
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
  { icon: '📊', title: 'Budgeting', desc: 'Learn to track your spending, set realistic goals, and build habits that work with a student lifestyle and income.' },
  { icon: '💳', title: 'Understanding Credit', desc: 'Demystify credit scores, credit reports, and how to build a strong credit profile starting now — even as a student.' },
  { icon: '📈', title: 'Investing', desc: 'An approachable introduction to investing: index funds, compound interest, and how to start building wealth in your 20s.' },
  { icon: '🎓', title: 'Student Loan & Debt Management', desc: 'Navigate federal loans, repayment options, and smart debt management strategies for life after graduation.' },
];

export default function Literacy() {
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
          <div className="grid-4">
            {WORKSHOPS.map(w => (
              <Reveal key={w.title}>
                <div className="workshop-card">
                  <div className="workshop-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
                  <span className="upcoming-badge">🗓️ Upcoming Event</span>
                  <span className="date-chip">April 11, 2026</span>
                </div>
                <h2>Financial Literacy Symposium</h2>
                <p>Join us for CSCU's flagship educational event — an immersive afternoon of workshops, games, and keynote insights on personal finance, credit, and wealth-building for Carolina students.</p>
                <div className="sym-features">
                  {['🎤 Keynote: Seth Trimble', '🔐 Escape Room Experience', '🃏 Interactive Credit Games', '📱 Live Financial Workshops', '🤝 Networking'].map(f => (
                    <div key={f} className="sym-feature">{f}</div>
                  ))}
                </div>
                <div style={{ marginTop: 32 }}>
                  <a href="mailto:neil06@unc.edu?subject=Symposium RSVP" className="btn btn-outline-white">RSVP / Learn More</a>
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
                <div className="date-badge">🎉</div>
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
