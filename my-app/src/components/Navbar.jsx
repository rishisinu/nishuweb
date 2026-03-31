import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const LogoIcon = () => (
  <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="white">
    <rect x="2" y="18" width="22" height="3" rx="1.5"/>
    <rect x="4" y="10" width="3" height="9" rx="1.5"/>
    <rect x="9" y="7" width="3" height="12" rx="1.5"/>
    <rect x="14" y="10" width="3" height="9" rx="1.5"/>
    <rect x="19" y="13" width="3" height="6" rx="1.5"/>
    <path d="M13 2 C8 2 4 5.5 4 10 L22 10 C22 5.5 18 2 13 2Z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/',          label: 'Home' },
    { to: '/about',     label: 'About Us' },
    { to: '/services',  label: 'Services' },
    { to: '/literacy',  label: 'Financial Literacy' },
    { to: '/support',   label: 'Support Us' },
  ];

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`} id="site-nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-logo" aria-label="CSCU Home">
          <div className="nav-logo-icon"><LogoIcon /></div>
          <div className="nav-logo-text">
            <span className="name">Carolina Students&#39;</span>
            <span className="sub">Credit Union</span>
          </div>
        </Link>

        <ul className="nav-links" role="list">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="mailto:neil06@unc.edu" className="btn btn-outline">Contact Us</a>
        </div>

        <button
          className="nav-hamburger"
          id="nav-hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(p => !p)}
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : '' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
        </button>
      </div>

      {open && (
        <div className="nav-mobile" role="menu">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <a href="mailto:neil06@unc.edu" onClick={() => setOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}
