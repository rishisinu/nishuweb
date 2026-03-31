import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Services from './pages/Services';
import Literacy from './pages/Literacy';
import Support  from './pages/Support';
import './pages/Home.css';

// Scroll to top on every route change
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/literacy" element={<Literacy />} />
          <Route path="/support"  element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
