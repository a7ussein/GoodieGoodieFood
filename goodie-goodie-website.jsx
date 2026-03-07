import { useState, useEffect, useRef } from "react";

const MASCOT_URL = "/api/files/mascot.png";
const LOGO_URL = "/api/files/logo-full.png";

export default function GoodieGoodieWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", date: "", event: "", guests: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const observerRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "how-it-works", label: "How It Works" },
    { id: "book", label: "Book Us" },
  ];

  return (
    <div style={{ fontFamily: "'Quicksand', 'Nunito', sans-serif", background: "#FDF6EE", color: "#4A2028", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&family=Pacifico&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes mascotBounce {
          from { opacity: 0; transform: translateY(60px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232, 67, 147, 0.4); }
          50% { box-shadow: 0 0 0 16px rgba(232, 67, 147, 0); }
        }
        
        .sparkle-star {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .nav-link {
          position: relative;
          text-decoration: none;
          color: #6B1D3A;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          cursor: pointer;
          padding: 8px 0;
          border: none;
          background: none;
          font-family: inherit;
          transition: color 0.3s;
        }
        .nav-link:hover { color: #E84393; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #E84393, #F5D574);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        
        .menu-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          cursor: default;
        }
        .menu-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(139, 26, 74, 0.12);
        }
        
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          border-radius: 50px;
          border: none;
          font-family: 'Fredoka', sans-serif;
          font-weight: 600;
          font-size: 17px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }
        .cta-primary {
          background: linear-gradient(135deg, #E84393, #D63384);
          color: white;
          box-shadow: 0 8px 24px rgba(232, 67, 147, 0.3);
        }
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(232, 67, 147, 0.4);
        }
        .cta-secondary {
          background: white;
          color: #6B1D3A;
          border: 2px solid #FBAED2;
        }
        .cta-secondary:hover {
          background: #FDE8F0;
          transform: translateY(-2px);
        }
        
        .step-card {
          position: relative;
          background: white;
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
          border: 1px solid #FDE8F0;
          transition: all 0.4s ease;
        }
        .step-card:hover {
          border-color: #FBAED2;
          box-shadow: 0 12px 36px rgba(232, 67, 147, 0.08);
        }
        
        .input-field {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #FDE8F0;
          border-radius: 14px;
          font-family: 'Quicksand', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #4A2028;
          background: white;
          transition: border-color 0.3s, box-shadow 0.3s;
          outline: none;
        }
        .input-field:focus {
          border-color: #F472B6;
          box-shadow: 0 0 0 4px rgba(244, 114, 182, 0.12);
        }
        .input-field::placeholder {
          color: #C4A0B0;
        }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>

      {/* ====== NAVBAR ====== */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrollY > 50 ? "rgba(253,246,238,0.92)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(251,174,210,0.2)" : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <img src={MASCOT_URL} alt="" style={{ width: 40, height: 40, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Fredoka'", fontWeight: 700, fontSize: 20, color: "#E84393" }}>Goodie Goodie</span>
          </div>

          <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {navItems.map(item => (
              <button key={item.id} className="nav-link" onClick={() => scrollTo(item.id)}>{item.label}</button>
            ))}
            <button className="cta-btn cta-primary" style={{ padding: "10px 24px", fontSize: 14 }} onClick={() => scrollTo("book")}>
              Book Now 👑
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: "none", background: "none", border: "none", cursor: "pointer", padding: 8,
            flexDirection: "column", gap: 5,
          }}>
            <span style={{ width: 24, height: 2.5, background: "#6B1D3A", borderRadius: 2, transition: "0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ width: 24, height: 2.5, background: "#6B1D3A", borderRadius: 2, transition: "0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 2.5, background: "#6B1D3A", borderRadius: 2, transition: "0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-nav" style={{
            position: "absolute", top: 72, left: 0, right: 0,
            background: "rgba(253,246,238,0.98)", backdropFilter: "blur(20px)",
            padding: "20px 24px", borderBottom: "1px solid #FDE8F0",
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            {navItems.map(item => (
              <button key={item.id} className="nav-link" onClick={() => scrollTo(item.id)} style={{ fontSize: 16, textAlign: "left" }}>{item.label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ====== HERO SECTION ====== */}
      <section id="home" style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        background: "linear-gradient(180deg, #FFF8F0 0%, #FDE8F0 40%, #FDF6EE 100%)",
        padding: "100px 24px 60px",
      }}>
        {/* Decorative background shapes */}
        <div style={{ position: "absolute", top: "8%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,213,116,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "15%", width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,67,147,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Sparkles */}
        {[
          { top: "15%", left: "12%", delay: "0s", size: 20 },
          { top: "25%", right: "10%", delay: "0.7s", size: 24 },
          { bottom: "30%", left: "8%", delay: "1.4s", size: 16 },
          { top: "40%", right: "18%", delay: "0.3s", size: 14 },
          { bottom: "20%", right: "25%", delay: "1s", size: 18 },
        ].map((s, i) => (
          <div key={i} className="sparkle-star" style={{
            position: "absolute", ...s,
            color: "#E6A817", fontSize: s.size, animationDelay: s.delay,
            pointerEvents: "none",
          }}>✦</div>
        ))}

        <div style={{ maxWidth: 1100, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 60, flexWrap: "wrap" }}>
          {/* Hero Text */}
          <div style={{ flex: "1 1 400px", animation: "heroFadeIn 1s ease-out forwards" }}>
            <div style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 20,
              background: "rgba(232,67,147,0.1)", marginBottom: 16,
            }}>
              <span style={{ fontFamily: "'Fredoka'", fontSize: 13, fontWeight: 600, color: "#E84393", letterSpacing: 1 }}>
                👑 PREMIUM DESSERT TRUCK
              </span>
            </div>
            
            <h1 style={{
              fontFamily: "'Fredoka'", fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 700,
              lineHeight: 1.1, color: "#4A2028", marginBottom: 20,
            }}>
              The Crowned<br/>
              <span style={{
                background: "linear-gradient(135deg, #E84393, #F472B6, #E84393)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                animation: "shimmer 4s linear infinite",
              }}>Goodie Goodie</span>
            </h1>
            
            <p style={{
              fontSize: 18, lineHeight: 1.7, color: "#7A3B55",
              maxWidth: 460, marginBottom: 32, fontWeight: 500,
            }}>
              Premium artisan desserts for your next event. Fresh chocolate-dipped 
              strawberries, fluffy mini pancakes, and crafted drinks — delivered 
              with royal sweetness.
            </p>
            
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="cta-btn cta-primary" onClick={() => scrollTo("book")}>
                Book Your Event
              </button>
              <button className="cta-btn cta-secondary" onClick={() => scrollTo("menu")}>
                View Menu
              </button>
            </div>
          </div>

          {/* Hero Mascot */}
          <div style={{
            flex: "0 0 auto",
            animation: "mascotBounce 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
          }}>
            <div style={{ animation: "float 4s ease-in-out infinite", position: "relative" }}>
              <img
                src={MASCOT_URL}
                alt="The Crowned Goodie Goodie Mascot"
                style={{
                  width: "clamp(260px, 35vw, 420px)",
                  height: "auto",
                  filter: "drop-shadow(0 20px 40px rgba(232,67,147,0.2))",
                }}
              />
              {/* Floating sparkle near mascot */}
              <div style={{
                position: "absolute", top: -10, right: 20,
                fontSize: 28, color: "#E6A817",
                animation: "sparkle 1.5s ease-in-out infinite 0.5s",
              }}>✦</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          opacity: 0.5, animation: "float 2s ease-in-out infinite",
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#B06B85" }}>SCROLL</span>
          <span style={{ fontSize: 18, color: "#E84393" }}>↓</span>
        </div>
      </section>

      {/* ====== MENU SECTION ====== */}
      <section id="menu" style={{
        padding: "100px 24px",
        background: "white",
        position: "relative",
      }}>
        {/* Decorative top wave */}
        <svg viewBox="0 0 1440 80" style={{ position: "absolute", top: -1, left: 0, width: "100%" }}>
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" fill="#FDF6EE"/>
        </svg>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal-on-scroll" style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontFamily: "'Fredoka'", fontSize: 13, fontWeight: 600, color: "#E6A817", letterSpacing: 3 }}>
              OUR OFFERINGS
            </span>
            <h2 style={{ fontFamily: "'Fredoka'", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#4A2028", marginTop: 8 }}>
              Royal Treats
            </h2>
            <p style={{ fontSize: 16, color: "#7A3B55", maxWidth: 500, margin: "12px auto 0", lineHeight: 1.6 }}>
              Every item is crafted fresh at your event with premium ingredients
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {[
              {
                emoji: "🍓",
                title: "Chocolate Strawberries",
                desc: "Plump, fresh strawberries dipped in flowing liquid chocolate — milk, dark, or white. Add premium toppings like crushed Oreo, coconut flakes, or edible gold dust.",
                items: ["Classic Milk Chocolate Dip", "Double Chocolate Drizzle", "The Crown Special — 3 chocolates + toppings"],
                accent: "#E84393",
                bg: "linear-gradient(160deg, #FFF0F5, #FDE8F0)",
                delay: "reveal-delay-1",
              },
              {
                emoji: "🥞",
                title: "Mini Pancakes",
                desc: "Bite-sized fluffy pancakes cooked fresh on the griddle. Served with your choice of sweet drizzles, fresh fruits, and indulgent spreads.",
                items: ["Classic Maple & Butter Stack", "Berry Bliss with Whipped Cream", "Nutella Dream with Banana"],
                accent: "#D97706",
                bg: "linear-gradient(160deg, #FFFBEB, #FEF3C7)",
                delay: "reveal-delay-2",
              },
              {
                emoji: "🥤",
                title: "Crafted Drinks",
                desc: "Refreshing and warming beverages to complement your sweets. From fresh-squeezed lemonades to rich hot chocolate topped with marshmallows.",
                items: ["Pink Lemonade Twist", "Hot Chocolate Royale", "Goodie Signature Milkshake"],
                accent: "#059669",
                bg: "linear-gradient(160deg, #F0FDF4, #DCFCE7)",
                delay: "reveal-delay-3",
              },
            ].map((item) => (
              <div key={item.title} className={`menu-card reveal-on-scroll ${item.delay}`}>
                <div style={{ background: item.bg, padding: "40px 28px 28px", textAlign: "center" }}>
                  <span style={{ fontSize: 56, display: "block", marginBottom: 16 }}>{item.emoji}</span>
                  <h3 style={{ fontFamily: "'Fredoka'", fontSize: 24, fontWeight: 700, color: "#4A2028", marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#7A3B55", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
                <div style={{ padding: "20px 28px 28px" }}>
                  {item.items.map((menuItem, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 0",
                      borderBottom: i < item.items.length - 1 ? "1px dashed #FDE8F0" : "none",
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.accent, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#4A2028" }}>{menuItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-on-scroll reveal-delay-4" style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ fontSize: 14, color: "#B06B85", fontWeight: 500 }}>
              ✨ Custom menus available for your event — ask us about special requests
            </p>
          </div>
        </div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section id="about" style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #FDF6EE 0%, #FFF8F0 100%)",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
          <div className="reveal-on-scroll" style={{ flex: "0 0 auto" }}>
            <div style={{
              position: "relative",
              width: "clamp(220px, 30vw, 320px)",
              animation: "floatSlow 5s ease-in-out infinite",
            }}>
              <div style={{
                position: "absolute", inset: -20,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(244,114,182,0.1), transparent 70%)",
              }} />
              <img src={MASCOT_URL} alt="Goodie Mascot" style={{
                width: "100%", position: "relative",
                filter: "drop-shadow(0 16px 32px rgba(232,67,147,0.15))",
              }} />
            </div>
          </div>

          <div style={{ flex: "1 1 380px" }}>
            <div className="reveal-on-scroll">
              <span style={{ fontFamily: "'Fredoka'", fontSize: 13, fontWeight: 600, color: "#E6A817", letterSpacing: 3 }}>
                OUR STORY
              </span>
              <h2 style={{ fontFamily: "'Fredoka'", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#4A2028", margin: "8px 0 20px" }}>
                Meet the Goodie 👑
              </h2>
            </div>
            
            <div className="reveal-on-scroll reveal-delay-1">
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#7A3B55", marginBottom: 16 }}>
                The Crowned Goodie Goodie isn't just a dessert truck — it's an <strong>experience</strong>. 
                Born from a love of artisan sweets and unforgettable celebrations, we bring premium 
                desserts directly to your events across Maine.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#7A3B55", marginBottom: 24 }}>
                Every strawberry is hand-dipped. Every pancake is made to order. Every drink is 
                crafted fresh. Because your guests deserve the royal treatment.
              </p>
            </div>
            
            <div className="reveal-on-scroll reveal-delay-2" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                { num: "100+", label: "Events Served" },
                { num: "5★", label: "Customer Rating" },
                { num: "100%", label: "Fresh & Handmade" },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "'Fredoka'", fontSize: 28, fontWeight: 700, color: "#E84393" }}>{stat.num}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#B06B85", letterSpacing: 0.5 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section id="how-it-works" style={{
        padding: "100px 24px",
        background: "white",
        position: "relative",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="reveal-on-scroll" style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontFamily: "'Fredoka'", fontSize: 13, fontWeight: 600, color: "#E6A817", letterSpacing: 3 }}>
              SIMPLE & SWEET
            </span>
            <h2 style={{ fontFamily: "'Fredoka'", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#4A2028", marginTop: 8 }}>
              How It Works
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { num: "01", icon: "📅", title: "Pick Your Date", desc: "Tell us when and where your event is happening. Weekdays, weekends, holidays — we're flexible." },
              { num: "02", icon: "🍫", title: "Choose Your Menu", desc: "Select from our offerings or create a custom menu. We'll tailor everything to your event and guest count." },
              { num: "03", icon: "🚚", title: "We Show Up", desc: "Our branded dessert truck arrives fully stocked and ready to serve. Fresh prep happens right on site." },
              { num: "04", icon: "🎉", title: "Guests Go Wild", desc: "Watch your guests light up. Photo-worthy desserts, unforgettable experience, zero stress for you." },
            ].map((step, i) => (
              <div key={step.num} className={`step-card reveal-on-scroll reveal-delay-${i + 1}`}>
                <div style={{
                  position: "absolute", top: -14, left: 24,
                  background: "linear-gradient(135deg, #E84393, #F472B6)",
                  color: "white", fontFamily: "'Fredoka'", fontWeight: 700,
                  fontSize: 13, padding: "5px 14px", borderRadius: 20,
                }}>
                  {step.num}
                </div>
                <span style={{ fontSize: 40, display: "block", marginBottom: 16, marginTop: 8 }}>{step.icon}</span>
                <h3 style={{ fontFamily: "'Fredoka'", fontSize: 20, fontWeight: 700, color: "#4A2028", marginBottom: 10 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: "#7A3B55", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== EVENTS BANNER ====== */}
      <section style={{
        padding: "72px 24px",
        background: "linear-gradient(135deg, #6B1D3A 0%, #8B2A55 50%, #A03465 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)", backgroundSize: "60px 60px, 45px 45px" }} />
        
        <div className="reveal-on-scroll" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: "'Fredoka'", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "white", marginBottom: 16, lineHeight: 1.3 }}>
            Perfect For Every Occasion 👑
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
            {["Birthdays", "Weddings", "Corporate", "Festivals", "Graduations", "Baby Showers"].map(tag => (
              <span key={tag} style={{
                padding: "8px 18px", borderRadius: 20,
                background: "rgba(255,255,255,0.12)", color: "white",
                fontSize: 14, fontWeight: 600, backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>{tag}</span>
            ))}
          </div>
          <button className="cta-btn" onClick={() => scrollTo("book")} style={{
            background: "linear-gradient(135deg, #F472B6, #E84393)",
            color: "white", fontSize: 17, padding: "16px 40px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            animation: "pulse 2.5s ease-in-out infinite",
          }}>
            Reserve Your Date
          </button>
        </div>
      </section>

      {/* ====== BOOKING FORM ====== */}
      <section id="book" style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #FDF6EE 0%, #FFF8F0 100%)",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="reveal-on-scroll" style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontFamily: "'Fredoka'", fontSize: 13, fontWeight: 600, color: "#E6A817", letterSpacing: 3 }}>
              LET'S MAKE IT HAPPEN
            </span>
            <h2 style={{ fontFamily: "'Fredoka'", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#4A2028", marginTop: 8 }}>
              Book the Goodie Truck
            </h2>
            <p style={{ fontSize: 15, color: "#7A3B55", marginTop: 10 }}>
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {formSubmitted ? (
            <div className="reveal-on-scroll" style={{
              background: "white", borderRadius: 24, padding: "60px 40px",
              textAlign: "center", boxShadow: "0 4px 20px rgba(139,26,74,0.06)",
            }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
              <h3 style={{ fontFamily: "'Fredoka'", fontSize: 28, fontWeight: 700, color: "#E84393", marginBottom: 12 }}>
                Request Sent!
              </h3>
              <p style={{ fontSize: 16, color: "#7A3B55", lineHeight: 1.7 }}>
                Thank you! We'll review your event details and get back to you within 24 hours with a custom quote.
              </p>
            </div>
          ) : (
            <div className="reveal-on-scroll" style={{
              background: "white", borderRadius: 24, padding: "40px 36px",
              boxShadow: "0 4px 20px rgba(139,26,74,0.06)",
              border: "1px solid #FDE8F0",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <div style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#6B1D3A", marginBottom: 6, display: "block" }}>Your Name</label>
                    <input className="input-field" placeholder="Full name" value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#6B1D3A", marginBottom: 6, display: "block" }}>Email</label>
                    <input className="input-field" type="email" placeholder="your@email.com" value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#6B1D3A", marginBottom: 6, display: "block" }}>Event Date</label>
                  <input className="input-field" type="date" value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#6B1D3A", marginBottom: 6, display: "block" }}>Expected Guests</label>
                  <input className="input-field" placeholder="e.g. 50" value={formData.guests}
                    onChange={e => setFormData({...formData, guests: e.target.value})} />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#6B1D3A", marginBottom: 6, display: "block" }}>Event Type</label>
                  <select className="input-field" value={formData.event}
                    onChange={e => setFormData({...formData, event: e.target.value})}
                    style={{ cursor: "pointer", appearance: "auto" }}>
                    <option value="">Select event type...</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="wedding">Wedding / Reception</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="festival">Festival / Fair</option>
                    <option value="graduation">Graduation</option>
                    <option value="babyshower">Baby Shower</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#6B1D3A", marginBottom: 6, display: "block" }}>Anything else we should know?</label>
                  <textarea className="input-field" rows={4} placeholder="Tell us about your event, location, special requests..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    style={{ resize: "vertical", minHeight: 100 }} />
                </div>
              </div>

              <button className="cta-btn cta-primary" style={{ width: "100%", justifyContent: "center", marginTop: 24, fontSize: 17, padding: "18px 36px" }}
                onClick={() => setFormSubmitted(true)}>
                Submit Booking Request 👑
              </button>

              <p style={{ fontSize: 12, color: "#B06B85", textAlign: "center", marginTop: 14 }}>
                No commitment — we'll send you a custom quote based on your event details
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer style={{
        background: "#4A2028",
        padding: "60px 24px 40px",
        color: "rgba(255,255,255,0.7)",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginBottom: 40 }}>
            {/* Brand */}
            <div style={{ flex: "1 1 280px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <img src={MASCOT_URL} alt="" style={{ width: 48, height: 48, objectFit: "contain" }} />
                <div>
                  <div style={{ fontFamily: "'Fredoka'", fontSize: 22, fontWeight: 700, color: "white" }}>Goodie Goodie</div>
                  <div style={{ fontSize: 11, color: "#F472B6", fontWeight: 600, letterSpacing: 1.5 }}>FOOD</div>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
                Premium artisan desserts delivered to your events across Maine. 
                The royal sweet experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontFamily: "'Fredoka'", fontSize: 15, fontWeight: 600, color: "white", marginBottom: 14 }}>Quick Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {navItems.map(item => (
                  <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                    background: "none", border: "none", color: "rgba(255,255,255,0.6)",
                    fontSize: 14, cursor: "pointer", fontFamily: "inherit", textAlign: "left",
                    padding: 0, transition: "color 0.3s",
                  }}
                    onMouseEnter={e => e.target.style.color = "#F472B6"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                  >{item.label}</button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: "'Fredoka'", fontSize: 15, fontWeight: 600, color: "white", marginBottom: 14 }}>Get In Touch</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
                <span>📍 Lewiston, Maine</span>
                <span>📱 @goodiegoodiefood</span>
                <span>📧 hello@goodiegoodiefood.com</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 16,
          }}>
            <span style={{ fontSize: 13 }}>
              © 2025 The Crowned Goodie Goodie. All rights reserved.
            </span>
            <span style={{ fontSize: 13 }}>
              Crafted with 👑 by <span style={{ color: "#F472B6", fontWeight: 600 }}>Automyte</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
