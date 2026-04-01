import { useEffect, useRef, useState } from 'react';
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
  { initials: 'SM', name: 'Dr. Shimul Melwani', role: 'Associate Dean of Undergraduate Programs, KFBS', bio: 'Professor of Organizational Behavior and Sarah Graham Kenan Distinguished Scholar focused on leadership, inclusion, and workplace dynamics.' },
  { initials: 'CS', name: 'Chip Snively', role: 'Clinical Professor of Finance', bio: 'Teaches personal and corporate finance at UNC, directs the PNC Capital Markets Lab, and brings prior senior finance experience from Intel and American Airlines.' },
  { initials: 'CB', name: 'Creighton Blackwell', role: 'CCIO, Coastal Credit Union', bio: 'Chief Community and Public Affairs Officer with 25+ years in banking, community engagement, and cooperative financial leadership.' },
  { initials: 'KC', name: 'Kevin Clark', role: 'CEO, Next Game Advisors', bio: 'Cross-functional executive in strategy, operations, and growth with experience spanning technology, consulting, public sector, and consumer industries.' },
  { initials: 'JM', name: 'Jeffrey Mittelstadt', role: 'Executive Director, Ackerman Center for Sustainability', bio: 'Leads sustainability and entrepreneurship programs at UNC Kenan-Flagler and has built ventures across education, policy, and impact-focused business.' },
  { initials: 'AV', name: 'Adam Versprille', role: 'Co-Founder, FinQual', bio: 'Fintech product leader building infrastructure for loan origination and inclusive credit access across financial institutions.' },
  { initials: 'OL', name: 'Oliver Li', role: 'Board Chairman & CFO, UPenn Credit Union', bio: 'Student credit union leader helping shape one of the strongest peer models in student-led cooperative banking.' },
  { initials: 'DS', name: 'Douglas Stan', role: 'Treasurer, Preservation Idaho', bio: 'Veteran economics educator and nonprofit treasurer with a background in investment analysis and socially responsible finance.' },
  { initials: 'JC', name: 'Jacquelyn Copeland', role: 'Associate Provost & Director, UNC', bio: 'Senior enrollment leader advancing student access, affordability, scholarship strategy, and financial wellness initiatives at UNC.' },
  { initials: 'JK', name: 'Jim Kitchen', role: 'Serial Entrepreneur & Professor of Practice of Strategy', bio: 'Longtime UNC entrepreneurship educator and founder behind Launch Chapel Hill and 1789, mentoring high-growth student ventures.' },
  { initials: 'DM', name: 'Dezbee McDaniel', role: 'Cofounder & CEO, CliniSpan Health', bio: 'Award-winning entrepreneur and instructor working at the intersection of health innovation, technology, and financial well-being.' },
  { initials: 'CR', name: 'Dr. Christopher Roark', role: 'Director of Quantitative Financial Economics', bio: 'UNC economics faculty member leading quantitative finance credential development and teaching across macroeconomics, econometrics, and statistics.' },
  { initials: 'SB', name: 'Stephen Breed', role: 'CEO, New York Episcopal FCU', bio: 'Credit union executive with deep expertise in governance, strategic planning, lending, and organizational change management.' },
  { initials: 'DW', name: 'Denise Wymore', role: 'President & Chairman, CUDNC Foundation', bio: '40-year cooperative finance veteran supporting new credit union charters and mentoring next-generation movement leaders.' },
  { initials: 'JC2', name: 'Jazzy Cormier', role: 'CTO, Georgetown University Alumni & Student FCU', bio: 'Student technology leader guiding digital operations for a top student-run federal credit union.' },
  { initials: 'SL', name: 'Sara Lorenzen', role: 'Asst. Director of Financial Well-Being, UNC', bio: 'Leads day-to-day operations of Carolina financial well-being programming and peer coaching for UNC students.' },
  { initials: 'EK', name: 'EJ Kritz', role: 'CXO, DBSI', bio: 'Banking and branch-experience strategist helping financial institutions improve member and employee experience through design and operations.' },
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
      { initials: 'DP', name: 'Derek Peng', role: 'Strategic Growth Team', bio: 'Supports external engagement and campus relationship building.' },
      { initials: 'NK', name: 'Nishita Kashyap', role: 'Strategic Growth Team', bio: 'Contributes to strategic communications and outreach operations.' },
      { initials: 'HB', name: 'Haydon Bode', role: 'Strategic Growth Team', bio: 'Helps execute growth campaigns and student-facing initiatives.' },
      { initials: 'AG', name: 'Aadya Gattu', role: 'Strategic Growth Team', bio: 'Supports engagement programming and project coordination.' },
      { initials: 'AP2', name: 'Arivy Pereiro', role: 'Strategic Growth Team', bio: 'Contributes to student outreach and initiative visibility.' },
      { initials: 'CD2', name: 'Chai Duong', role: 'Strategic Growth Team', bio: 'Supports communications and campus activation efforts.' },
    ]
  },
  {
    name: 'Development Team',
    members: [
      { initials: 'CJ', name: 'Calie Justus', role: 'Head of Development', bio: 'Leads CSCU\'s fundraising strategy and donor relations.' },
      { initials: 'CZ', name: 'Charles Zhang', role: 'Head of Development', bio: 'Co-leads development operations and sponsor engagement.' },
      { initials: 'HM', name: 'Hasvi Muriki', role: 'Development Team', bio: 'Contributes to CSCU\'s fundraising and donor stewardship efforts.' },
      { initials: 'JJ', name: 'Juhi Jani', role: 'Development Team', bio: 'Supports grant writing and donor communication initiatives.' },
      { initials: 'YY', name: 'Yabsera Yidnekachew', role: 'Development Team', bio: 'Supports fundraising coordination and sponsor communication.' },
      { initials: 'AM', name: 'Anashe Murphy', role: 'Development Team', bio: 'Contributes to donor relations and campaign logistics.' },
      { initials: 'AS', name: 'Akos Szecsi', role: 'Development Team', bio: 'Supports development operations and partnership outreach.' },
      { initials: 'AG2', name: 'Amy Gao', role: 'Development Team', bio: 'Contributes to development planning and donor outreach.' },
      { initials: 'MZ', name: 'Marco Zamudio', role: 'Development Team', bio: 'Supports campaign execution and fundraising communications.' },
    ]
  },
  {
    name: 'Policy & Risk',
    members: [
      { initials: 'SY', name: 'Saatvik Yamala', role: 'Chief Policy Officer', bio: 'Leads regulatory compliance and policy development for CSCU.' },
      { initials: 'HM2', name: 'Haile Madden', role: 'Chief Risk Officer', bio: 'Oversees risk assessment and financial governance frameworks.' },
      { initials: 'AP', name: 'Anvi Pullalarevu', role: 'Policy & Risk Team', bio: 'Supports regulatory research and risk documentation.' },
      { initials: 'CD', name: 'Catherine Ding', role: 'Policy & Risk Team', bio: 'Contributes to policy research and compliance strategy.' },
      { initials: 'DW2', name: 'David Watson', role: 'Policy & Risk Team', bio: 'Supports policy analysis and risk documentation projects.' },
      { initials: 'DQ', name: 'Diego Quintanar-Pena', role: 'Policy & Risk Team', bio: 'Contributes to legal and compliance-focused research.' },
      { initials: 'GB', name: 'Grace Bellofatto', role: 'Policy & Risk Team', bio: 'Supports governance frameworks and policy coordination.' },
      { initials: 'RM', name: 'Rohit Madan', role: 'Policy & Risk Team', bio: 'Contributes to risk modeling and policy analysis.' },
      { initials: 'SJ', name: 'Saanvi Jayaprakash', role: 'Policy & Risk Team', bio: 'Supports policy research and compliance readiness work.' },
      { initials: 'SB2', name: 'Sahasra Boga', role: 'Policy & Risk Team', bio: 'Contributes to documentation and risk assessment efforts.' },
    ]
  },
];

function PersonCard({ initials, name, role, bio }) {
  return (
    <div className="card-person">
      <div className="person-photo" aria-hidden="true">
        <span className="photo-label">Portrait Placeholder</span>
        <span className="photo-initials">{initials.replace(/\d/g, '')}</span>
      </div>
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
  const [activeTeam, setActiveTeam] = useState(TEAMS[0].name);

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
          <Reveal>
            <div className="team-filter" role="tablist" aria-label="Select leadership team">
              {TEAMS.map((team) => (
                <button
                  key={team.name}
                  type="button"
                  role="tab"
                  aria-selected={activeTeam === team.name}
                  className={activeTeam === team.name ? 'active' : ''}
                  onClick={() => setActiveTeam(team.name)}
                >
                  {team.name}
                </button>
              ))}
            </div>
          </Reveal>
          {TEAMS.filter((team) => team.name === activeTeam).map(t => <TeamSection key={t.name} {...t} />)}
        </div>
      </section>
    </>
  );
}
