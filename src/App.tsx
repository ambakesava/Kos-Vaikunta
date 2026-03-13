import { useState } from 'react';
import './App.css';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

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
      img: "/Kos Image/WhatsApp Image 2026-03-12 at 14.16.43.jpeg"
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
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Kos <span>Vaikunta</span></h1>
          
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Informasi</a></li>
            <li><a href="#highlights">Galeri</a></li>
            <li><a href="#amenities">Fasilitas</a></li>
          </ul>

          <div className="nav-buttons">
            <a href="https://maps.app.goo.gl/nZQJyQgdPfpoVzJ27" className="btn-outline" target="_blank" rel="noreferrer">Peta Lokasi</a>
            <a href="https://wa.me/628123627647" className="btn-solid" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
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
      </section>

      {/* Content Section */}
      <section className="property-info" id="about">
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
          
          <div className="property-image">
            <img src="/Kos Image/IMG20220726104420.jpg" alt="Suasana Kamar atau Halaman Kos" />
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="property-highlights" id="highlights">
        <div className="highlights-container">
          <h2 className="section-title">Property Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <img src="/Kos Image/backyard.jpg" alt="Housing Security 1" />
              <div className="highlight-info">
                <h3>Halaman Samping</h3>
                <p>Halaman lingkungan yang asri tepat berada depan pintu kamar anda.</p>
              </div>
            </div>
            <div className="highlight-card">
              <img src="/Kos Image/IMG20230801070610(1).jpg" alt="Housing Security 2" />
              <div className="highlight-info">
                <h3>Tanaman yang rindang</h3>
                <p>Suasana yang sejuk dan nyaman.</p>
              </div>
            </div>
            <div className="highlight-card">
              <img src="/Kos Image/IMG20250614203930.jpg" alt="Housing Security 3" />
              <div className="highlight-info">
                <h3>Lampu Taman</h3>
                <p>Pencahayaan yang nyaman di malam hari.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas 3D Carousel Section */}
      <section className="fasilitas-section" id="amenities">
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
      </section>

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
            
          <div className="footer-col">
            <h3 className="footer-title">Sosial Media</h3>
            <div className="social-icons">
              <a href="https://wa.me/628123627647" target="_blank" aria-label="WhatsApp" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
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
