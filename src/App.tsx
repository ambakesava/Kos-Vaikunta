import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const lenis = new Lenis({
      lerp: isMobile ? 0.15 : 0.1,
      touchMultiplier: isMobile ? 3 : 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -80, duration: 1.5 });
    }
  };
  const [activeSlide, setActiveSlide] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const facilityItems = [
    {
      id: 1,
      title: "Teras Depan Kamar",
      desc: "Ruang tambahan untuk meletakkan tanaman hias atau sekadar kursi untuk bersantai di udara terbuka.",
      img: "/Kos Image/IMG_1343.JPG"
    },
    {
      id: 2,
      title: "Parkir Motor",
      desc: "Parkir motor yang dapat melindungi motor dari terik matahari dan hujan.",
      img: "/Kos Image/Parkiran bersih.png"
    },
    {
      id: 3,
      title: "Kamar Mandi",
      desc: "Kamar Mandi dengan fasilitas toilet duduk, Wastafel dan Shower, 2mx1.425m.",
      img: "/Kos Image/IMG_1347(1).JPG"
    },
    {
      id: 4,
      title: "Kamar",
      desc: "Kamar yang nyaman dan bersih berukuran 3mx3.5m.",
      img: "/Kos Image/IMG_1350.JPG"
    },
    {
      id: 5,
      title: "Dapur",
      desc: "Dapur & wastafel yang dapat menunjang kebutuhan masak anda",
      img: "/Kos Image/IMG_1349(1).JPG"
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % facilityItems.length);
  };
  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? facilityItems.length - 1 : prev - 1));
  };
  return (
    <>
      {/* Header / Navbar */}
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ' navbar--hero'}`}>
        <div className="nav-container">
          <h1 className="logo">Kos <span>Vaikunta</span></h1>
          
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Informasi</a></li>
            <li><a href="#highlights" onClick={(e) => handleNavClick(e, 'highlights')}>Galeri</a></li>
            <li><a href="#amenities" onClick={(e) => handleNavClick(e, 'amenities')}>Fasilitas</a></li>
          </ul>

          <div className="nav-buttons">
            <a href="https://maps.app.goo.gl/nZQJyQgdPfpoVzJ27" className="btn-outline" target="_blank" rel="noreferrer">Peta Lokasi</a>
            <a href="https://wa.me/628123627647" className="btn-solid" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>

          {/* WhatsApp contact — desktop only */}
          <a href="https://wa.me/628123627647" className="nav-wa" target="_blank" rel="noreferrer">
            <span className="nav-wa__icon"><i className="fab fa-whatsapp"></i></span>
            <span className="nav-wa__text">+62 812-3627-647</span>
          </a>

          {/* Hamburger Button — mobile only */}
          <button
            className={`hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-drawer${menuOpen ? ' is-open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Informasi</a></li>
            <li><a href="#highlights" onClick={(e) => handleNavClick(e, 'highlights')}>Galeri</a></li>
            <li><a href="#amenities" onClick={(e) => handleNavClick(e, 'amenities')}>Fasilitas</a></li>
          </ul>
          <a
            href="https://maps.app.goo.gl/nZQJyQgdPfpoVzJ27"
            className="mobile-map-btn"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-map-marker-alt"></i> Peta Lokasi
          </a>
        </div>
        {/* Overlay backdrop */}
        {menuOpen && <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />}
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="hero" 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Geometric Shapes */}
        <div className="shape shape-left"></div>
        <div className="shape shape-right"></div>
        
        <div className="hero-image-wrapper">
          {/* Hero Background Image (Fasad Kos) */}
          <img className="hero-bg" src="/Kos Image/front_viewhd.png" alt="Tampak Depan Rumah Kos" />
          <div className="hero-overlay"></div>
          
          <div className="hero-content">
            <div className="hero-frame"></div>
            <div className="hero-text-box">
              <h1>Kos Vaikunta<br />Nyaman & Bersih</h1>
              <div className="price-box">
                <span className="price-label">Lokasi Strategis:</span>
                <span className="price-value">Gatsu Barat</span>
              </div>
              <a href="https://wa.me/628123627647" className="btn-white" target="_blank" rel="noreferrer">HUBUNGI WHATSAPP</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section 
        className="property-info" 
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Geometric Shape */}
        <div className="shape shape-bottom-right"></div>
        
        <div className="property-container">
          <div className="property-text">
            <h2>Kos Vaikunta</h2>
            <p>
              Di Kos Vaikunta, kami memahami bahwa kenyamanan adalah investasi bagi produktivitas Anda.<br />Kami menghadirkan ruang yang bersih, asri, dan tenang, ideal bagi Anda yang menghargai kualitas & kenyamanan hidup.
            </p>
            
            <div className="amenities-grid">
              <div className="amenity-item">
                <i className="fas fa-bed"></i>
                <div className="amenity-info">
                  <span className="amenity-title">Kamar</span>
                  <span className="amenity-value">Kosongan</span>
                </div>
              </div>
              <div className="amenity-item">
                <i className="fas fa-faucet-drip"></i>
                <div className="amenity-info">
                  <span className="amenity-title">Air Bersih</span>
                  <span className="amenity-value">Gratis</span>
                </div>
              </div>
              <div className="amenity-item">
                <i className="fas fa-wifi"></i>
                <div className="amenity-info">
                  <span className="amenity-title">Koneksi WiFi</span>
                  <span className="amenity-value">Gratis</span>
                </div>
              </div>
              <div className="amenity-item">
                <i className="fas fa-bolt"></i>
                <div className="amenity-info">
                  <span className="amenity-title">Listrik</span>
                  <span className="amenity-value">Token Bayar</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="property-image mobile-hide">
            <img src="/Kos Image/IMG20220726104420.jpg" alt="Suasana Kamar atau Halaman Kos" />
          </div>
        </div>
      </motion.section>

      {/* Property Highlights */}
      <motion.section 
        className="property-highlights" 
        id="highlights"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="highlights-container">
          <h2 className="section-title">Property Highlights</h2>
          {/* 3 card utama selalu tampil */}
          <div className="highlights-grid">
            <div className="highlight-card">
              <img src="/Kos Image/backyard.jpg" alt="Halaman Samping" />
              <div className="highlight-info">
                <h3>Halaman Samping</h3>
                <p>Halaman lingkungan yang asri tepat berada depan pintu kamar anda.</p>
              </div>
            </div>
            <div className="highlight-card">
              <img src="/Kos Image/IMG20230801070610(1).jpg" alt="Tanaman Rindang" />
              <div className="highlight-info">
                <h3>Tanaman yang Rindang</h3>
                <p>Suasana yang sejuk dan nyaman.</p>
              </div>
            </div>
            <div className="highlight-card">
              <img src="/Kos Image/IMG20250614203930.jpg" alt="Lampu Taman" />
              <div className="highlight-info">
                <h3>Lampu Taman</h3>
                <p>Pencahayaan yang nyaman di malam hari.</p>
              </div>
            </div>
          </div>

          {/* 4 card tambahan — collapsible wrapper di bawah tombol */}
          <div className={`highlights-extra-wrapper${showMore ? ' is-open' : ''}`}>
            <div className="highlights-grid">
              <div className="highlight-card">
                <img src="/Kos Image/IMG20220726101804.jpg" alt="Suasana Pagi" />
                <div className="highlight-info">
                  <h3>Suasana Pagi</h3>
                  <p>Lingkungan yang tenang dan asri di pagi hari.</p>
                </div>
              </div>
              <div className="highlight-card">
                <img src="/Kos Image/IMG20220726101834.jpg" alt="Area Terbuka" />
                <div className="highlight-info">
                  <h3>Area Terbuka</h3>
                  <p>Ruang terbuka hijau yang membuat udara segar setiap saat.</p>
                </div>
              </div>
              <div className="highlight-card">
                <img src="/Kos Image/IMG20220726102844.jpg" alt="Lingkungan Nyaman" />
                <div className="highlight-info">
                  <h3>Lingkungan Nyaman</h3>
                  <p>Suasana tenang ideal untuk istirahat dan produktivitas.</p>
                </div>
              </div>
              <div className="highlight-card highlight-card--schematic">
                <img src="/Kos Image/image.png" alt="Denah Kamar" />
              </div>
            </div>
          </div>

          {/* Tombol selalu di bawah konten yang terlihat */}
          <div className="gallery-toggle-wrap">
            <button
              className="gallery-toggle-btn"
              onClick={() => {
                if (showMore) {
                  // Tutup dulu, lalu scroll ke atas section galeri
                  setShowMore(false);
                  const target = document.getElementById('highlights');
                  if (target && lenisRef.current) {
                    setTimeout(() => {
                      lenisRef.current!.scrollTo(target, { offset: -90, duration: 1.2 });
                    }, 60);
                  }
                } else {
                  setShowMore(true);
                }
              }}
            >
              {showMore ? (
                <><i className="fas fa-chevron-up"></i> Tampilkan Lebih Sedikit</>
              ) : (
                <><i className="fas fa-chevron-down"></i> Tampilkan Lebih Banyak</>
              )}
            </button>
          </div>

        </div>
      </motion.section>

      {/* Fasilitas 3D Carousel Section */}
      <motion.section 
        className="fasilitas-section" 
        id="amenities"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="fasilitas-container">
          <h2 className="section-title" style={{ textAlign: "center" }}>Fasilitas Kamar</h2>
          <div className="carousel-wrapper">
            <button className="carousel-btn prev" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="carousel-track">
              {facilityItems.map((item, index) => {
                let offset = index - activeSlide;
                
                // Adjust for wrapping/looping effect to keep neighbors close
                if (offset < -2) offset += facilityItems.length;
                if (offset > 2) offset -= facilityItems.length;

                let className = "carousel-slide";
                if (offset === 0) className += " active";
                else if (offset === 1 || offset === -1) className += " adjacent";
                else className += " hidden";

                return (
                  <div
                    key={item.id}
                    className={className}
                    style={{
                      transform: `translateX(${offset * 120}%) scale(${1 - Math.abs(offset) * 0.2}) translateZ(${-Math.abs(offset) * 100}px) rotateY(${offset * -15}deg)`,
                      opacity: Math.abs(offset) >= 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                      zIndex: 10 - Math.abs(offset)
                    }}
                  >
                    <img src={item.img} alt={item.title} style={item.id === 2 ? { objectPosition: "80% 25%" } : undefined} />
                    <div className="slide-info">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="carousel-btn next" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Floating WhatsApp Button (All Screens) */}
      <a
        href="https://wa.me/628123627647"
        className="wa-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi via WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3 className="footer-title">Kos Vaikunta</h3>
            <p>Hunian nyaman, bersih, dan strategis dengan fasilitas lengkap yang menunjang kehidupan sehari-hari Anda secara fleksibel dan aman.</p>
          </div>
            
          <div className="footer-col">
            <h3 className="footer-title">Kontak & Lokasi</h3>
            <p><i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: 'var(--green)' }}></i> Jl. Tegal Dukuh II A No.5, Padangsambian Kaja, Kec. Denpasar Barat., Kota Denpasar, Bali 80117</p>
            <p><i className="fas fa-phone-alt" style={{ marginRight: '10px', color: 'var(--green)' }}></i> +62 812 3627 647</p>
          </div>
            
          <div className="footer-col footer-col--map">
            <h3 className="footer-title"></h3>
            <div className="footer-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7889.341791694683!2d115.2080534752927!3d-8.627559040033274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f8e6e61e293%3A0x68e329c09799b47e!2sKos%20Vaikunta!5e0!3m2!1sen!2sid!4v1773383382876!5m2!1sen!2sid"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kos Vaikunta"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Kos Vaikunta. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
