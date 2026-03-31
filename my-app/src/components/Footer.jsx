import { Link } from 'react-router-dom';
import './Footer.css';

const LogoIcon = () => (
  <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true">
    <rect x="2" y="18" width="22" height="3" rx="1.5"/>
    <rect x="4" y="10" width="3" height="9" rx="1.5"/>
    <rect x="9" y="7" width="3" height="12" rx="1.5"/>
    <rect x="14" y="10" width="3" height="9" rx="1.5"/>
    <rect x="19" y="13" width="3" height="6" rx="1.5"/>
    <path d="M13 2 C8 2 4 5.5 4 10 L22 10 C22 5.5 18 2 13 2Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-wrap">
              <div className="logo-icon"><LogoIcon /></div>
              <span className="logo-name">Carolina Students&#39; Credit Union</span>
            </div>
            <p>A student-led initiative bringing ethical, accessible, and student-centered banking to the UNC-Chapel Hill campus.</p>
            <p className="tagline">Carolina Students&#39; Credit Union Brand Guidelines</p>
          </div>

          <div className="footer-col">
            <h5>Pages</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/literacy">Financial Literacy</Link>
            <Link to="/support">Support Us</Link>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <Link to="/literacy">Workshops</Link>
            <Link to="/support">Donate</Link>
            <Link to="/support#pledge">Pledge Form</Link>
            <a href="mailto:cjjustus@unc.edu">Merch</a>
          </div>

          <div className="footer-col footer-contact">
            <h5>Contact</h5>
            <p><strong>Neil Joshi</strong> — CGO<br /><a href="mailto:neil06@unc.edu">neil06@unc.edu</a></p>
            <p style={{ marginTop: 10 }}><strong>Mohammad Qureshi</strong> — CSO<br /><a href="mailto:maq@unc.edu">maq@unc.edu</a></p>
            <p className="merch-note">Merch: <a href="mailto:cjjustus@unc.edu">cjjustus@unc.edu</a></p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Carolina Students&#39; Credit Union. All rights reserved.</span>
          <span>UNC Chapel Hill</span>
        </div>
      </div>
    </footer>
  );
}
