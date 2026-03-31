import { useEffect, useRef } from 'react';
import './About.css';

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const ADVISORS = [
  { initials: 'SM', name: 'Dr. Shimul Melwani', role: 'Associate Dean of Undergraduate Programs, KFBS', bio: 'Expert in emotions and leadership in organizational settings.' },
  { initials: 'CS', name: 'Chip Snively', role: 'Clinical Professor of Finance', bio: 'Director of PNC Capital Markets Lab at UNC Kenan-Flagler.' },
  { initials: 'CB', name: 'Creighton Blackwell', role: 'CCIO, Coastal Credit Union', bio: '25+ years of banking expertise and credit union leadership.' },
  { initials: 'KC', name: 'Kevin Clark', role: 'CEO, Next Game Advisors', bio: 'Expert in talent optimization, leadership, and strategy.' },
  { initials: 'JM', name: 'Jeffrey Mittelstadt', role: 'Executive Director, Ackerman Center for Sustainability', bio: 'Sustainability and institutional leadership expert.' },
  { initials: 'AV', name: 'Adam Versprille', role: 'Co-Founder, FinQual', bio: 'Fintech infrastructure specialist and financial technology innovator.' },
  { initials: 'OL', name: 'Oliver Li', role: 'Board Chairman & CFO, UPenn Credit Union', bio: 'Leads one of America\'s most successful student credit unions.' },
  { initials: 'DS', name: 'Douglas Stan', role: 'Treasurer, Preservation Idaho', bio: 'Economics educator with non-profit financial management expertise.' },
  { initials: 'JC', name: 'Jacquelyn Copeland', role: 'Associate Provost & Director, UNC', bio: 'Expert in access, equity, and affordability in higher education.' },
  { initials: 'JK', name: 'Jim Kitchen', role: 'Serial Entrepreneur & Professor of Practice of Strategy', bio: 'Award-winning entrepreneurship educator and startup founder.' },
  { initials: 'DM', name: 'Dezbee McDaniel', role: 'Cofounder & CEO, CliniSpan Health', bio: 'Innovation instructor and healthcare technology entrepreneur.' },
  { initials: 'CR', name: 'Dr. Christopher Roark', role: 'Director of Quantitative Financial Economics', bio: 'Academic leader in economic theory and quantitative finance.' },
  { initials: 'SB', name: 'Stephen Breed', role: 'CEO, New York Episcopal FCU', bio: 'Former CEO of the World Bank\'s Credit Union.' },
  { initials: 'DW', name: 'Denise Wymore', role: 'President & Chairman, CUDNC Foundation', bio: '40-year credit union veteran and industry thought leader.' },
  { initials: 'JC2', name: 'Jazzy Cormier', role: 'CTO, Georgetown University Alumni & Student FCU', bio: 'Technology leader at one of the nation\'s top student credit unions.' },
  { initials: 'SL', name: 'Sara Lorenzen', role: 'Asst. Director of Financial Well-Being, UNC', bio: 'Campus resource for student financial wellness and planning.' },
  { initials: 'EK', name: 'EJ Kritz', role: 'CXO, DBSI', bio: 'Banking experience and design expert specializing in financial UX.' },
];

const TEAMS = [
  {
    name: 'Steering Committee',
    members: [
      { initials: 'SR', name: 'Shiva Rajbhandari', role: 'President', bio: 'Leads the overall vision and strategic direction of CSCU.' },
      { initials: 'SG', name: 'Sarah Galdi', role: 'Vice President', bio: 'Supports institutional leadership and cross-team coordination.' },
    ]
  },
  {
    name: 'Strategic Growth',
    members: [
      { initials: 'MQ', name: 'Mohammad Qureshi', role: 'Chief Strategy Officer', bio: 'Shapes CSCU\'s long-term growth and partnership strategy.' },
      { initials: 'NJ', name: 'Neil Joshi', role: 'Chief Growth Officer', bio: 'Drives member acquisition, outreach, and campus partnerships.' },
      { initials: 'KM', name: 'Keya Mahajan', role: 'Strategic Growth Team', bio: 'Contributes to CSCU\'s growth and outreach initiatives.' },
      { initials: 'ST', name: 'Sheldon Thomas', role: 'Strategic Growth Team', bio: 'Supports campus engagement and community partnerships.' },
    ]
  },
  {
    name: 'Development Team',
    members: [
      { initials: 'CJ', name: 'Calie Justus', role: 'Head of Development', bio: 'Leads CSCU\'s fundraising strategy and donor relations.' },
      { initials: 'CZ', name: 'Charles Zhang', role: 'Head of Development', bio: 'Co-leads development operations and sponsor engagement.' },
      { initials: 'HM', name: 'Hasvi Muriki', role: 'Development Team', bio: 'Contributes to CSCU\'s fundraising and donor stewardship efforts.' },
      { initials: 'JJ', name: 'Juhi Jani', role: 'Development Team', bio: 'Supports grant writing and donor communication initiatives.' },
    ]
  },
  {
    name: 'Policy & Risk',
    members: [
      { initials: 'SY', name: 'Saatvik Yamala', role: 'Chief Policy Officer', bio: 'Leads regulatory compliance and policy development for CSCU.' },
      { initials: 'HM2', name: 'Haile Madden', role: 'Chief Risk Officer', bio: 'Oversees risk assessment and financial governance frameworks.' },
      { initials: 'AP', name: 'Anvi Pullalarevu', role: 'Policy & Risk Team', bio: 'Supports regulatory research and risk documentation.' },
      { initials: 'CD', name: 'Catherine Ding', role: 'Policy & Risk Team', bio: 'Contributes to policy research and compliance strategy.' },
    ]
  },
];

function PersonCard({ initials, name, role, bio }) {
  return (
    <div className="card-person">
      <div className="avatar">{initials.replace(/\d/g, '')}</div>
      <h4>{name}</h4>
      <div className="role">{role}</div>
      <p>{bio}</p>
    </div>
  );
}

function TeamSection({ name, members }) {
  return (
    <>
      <Reveal>
        <div className="team-subheader">
          <h3>{name}</h3>
          <div className="subheader-line" />
        </div>
      </Reveal>
      <div className="grid-4 mb-48">
        {members.map(m => (
          <Reveal key={m.name}><PersonCard {...m} /></Reveal>
        ))}
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-label light">Our People</span>
          <h1>About Us</h1>
          <p>A passionate team of Carolina students and world-class advisors working together to redefine campus banking.</p>
        </div>
      </section>

      {/* Board of Advisors */}
      <section className="section" id="advisors">
        <div className="container">
          <Reveal>
            <div className="text-center mb-48">
              <span className="section-label">Deep Expertise</span>
              <h2>Board Of Advisors</h2>
              <p style={{ maxWidth: 560, margin: '12px auto 0' }}>Our advisors bring decades of expertise in finance, banking, academia, and innovation.</p>
            </div>
          </Reveal>
          <div className="grid-5">
            {ADVISORS.map(a => <Reveal key={a.name}><PersonCard {...a} /></Reveal>)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Student Leadership */}
      <section className="section bg-offwhite" id="team">
        <div className="container">
          <Reveal>
            <div className="text-center mb-48">
              <span className="section-label">Student-Led</span>
              <h2>Student Leadership Team</h2>
              <p style={{ maxWidth: 560, margin: '12px auto 0' }}>Our diverse team of Carolina undergraduates drives CSCU forward across strategy, development, policy, and growth.</p>
            </div>
          </Reveal>
          {TEAMS.map(t => <TeamSection key={t.name} {...t} />)}
        </div>
      </section>
    </>
  );
}
