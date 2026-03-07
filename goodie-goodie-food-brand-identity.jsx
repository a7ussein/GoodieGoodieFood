import { useState } from "react";

const Logo = ({ size = 300, variant = "full" }) => {
  const scale = size / 300;
  
  if (variant === "icon") {
    return (
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        {/* Ice cream cone icon mark */}
        <defs>
          <linearGradient id="coneGradIcon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4A83D" />
            <stop offset="100%" stopColor="#D4862A" />
          </linearGradient>
          <linearGradient id="scoopPinkIcon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8FAB" />
            <stop offset="100%" stopColor="#E56B8A" />
          </linearGradient>
          <linearGradient id="scoopMintIcon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7EDCB5" />
            <stop offset="100%" stopColor="#5BC49A" />
          </linearGradient>
          <linearGradient id="scoopChocIcon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5E3C" />
            <stop offset="100%" stopColor="#6B4226" />
          </linearGradient>
        </defs>
        {/* Waffle cone */}
        <path d="M55 85 L75 140 L95 85" fill="url(#coneGradIcon)" stroke="#C47A25" strokeWidth="1.5" />
        {/* Waffle pattern */}
        <line x1="62" y1="95" x2="88" y2="95" stroke="#C47A25" strokeWidth="1" opacity="0.5" />
        <line x1="65" y1="105" x2="85" y2="105" stroke="#C47A25" strokeWidth="1" opacity="0.5" />
        <line x1="68" y1="115" x2="82" y2="115" stroke="#C47A25" strokeWidth="1" opacity="0.5" />
        <line x1="65" y1="85" x2="75" y2="120" stroke="#C47A25" strokeWidth="1" opacity="0.4" />
        <line x1="75" y1="85" x2="75" y2="140" stroke="#C47A25" strokeWidth="1" opacity="0.4" />
        <line x1="85" y1="85" x2="75" y2="120" stroke="#C47A25" strokeWidth="1" opacity="0.4" />
        {/* Chocolate scoop */}
        <circle cx="75" cy="68" r="24" fill="url(#scoopChocIcon)" stroke="#5A3820" strokeWidth="1.5" />
        {/* Mint scoop */}
        <circle cx="55" cy="58" r="22" fill="url(#scoopMintIcon)" stroke="#4AA882" strokeWidth="1.5" />
        {/* Pink scoop */}
        <circle cx="95" cy="58" r="22" fill="url(#scoopPinkIcon)" stroke="#C95577" strokeWidth="1.5" />
        {/* Sprinkles */}
        <rect x="50" y="48" width="6" height="2.5" rx="1" fill="#FFD700" transform="rotate(-30 53 49)" />
        <rect x="62" y="42" width="6" height="2.5" rx="1" fill="#FF6B6B" transform="rotate(20 65 43)" />
        <rect x="80" y="44" width="6" height="2.5" rx="1" fill="#7ED4FC" transform="rotate(-15 83 45)" />
        <rect x="98" y="48" width="6" height="2.5" rx="1" fill="#FFD700" transform="rotate(35 101 49)" />
        <rect x="72" y="55" width="5" height="2.5" rx="1" fill="#FF9ECD" transform="rotate(10 74.5 56)" />
        <rect x="88" y="65" width="5" height="2.5" rx="1" fill="#A8E6CF" transform="rotate(-25 90 66)" />
        <rect x="58" y="65" width="5" height="2.5" rx="1" fill="#FFB347" transform="rotate(40 60 66)" />
        {/* Cherry on top */}
        <circle cx="75" cy="38" r="8" fill="#E63946" stroke="#C1222F" strokeWidth="1.5" />
        <ellipse cx="72" cy="35" rx="2.5" ry="2" fill="#FF6B7A" opacity="0.7" />
        <path d="M75 30 Q78 20 85 18" stroke="#4A8C3F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="86" cy="17" rx="5" ry="3" fill="#5DAE50" transform="rotate(-20 86 17)" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="coneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4A83D" />
          <stop offset="100%" stopColor="#D4862A" />
        </linearGradient>
        <linearGradient id="scoopPink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#E56B8A" />
        </linearGradient>
        <linearGradient id="scoopMint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7EDCB5" />
          <stop offset="100%" stopColor="#5BC49A" />
        </linearGradient>
        <linearGradient id="scoopChoc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5E3C" />
          <stop offset="100%" stopColor="#6B4226" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* === ICE CREAM ICON === */}
      <g transform="translate(100, 0)" filter="url(#shadow)">
        {/* Waffle cone */}
        <path d="M30 110 L50 185 L70 110" fill="url(#coneGrad)" stroke="#C47A25" strokeWidth="2" />
        <line x1="36" y1="120" x2="64" y2="120" stroke="#C47A25" strokeWidth="1.2" opacity="0.5" />
        <line x1="39" y1="132" x2="61" y2="132" stroke="#C47A25" strokeWidth="1.2" opacity="0.5" />
        <line x1="42" y1="144" x2="58" y2="144" stroke="#C47A25" strokeWidth="1.2" opacity="0.5" />
        <line x1="45" y1="156" x2="55" y2="156" stroke="#C47A25" strokeWidth="1.2" opacity="0.5" />
        <line x1="38" y1="110" x2="50" y2="160" stroke="#C47A25" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="110" x2="50" y2="185" stroke="#C47A25" strokeWidth="1" opacity="0.4" />
        <line x1="62" y1="110" x2="50" y2="160" stroke="#C47A25" strokeWidth="1" opacity="0.4" />

        {/* Chocolate scoop (back center) */}
        <circle cx="50" cy="88" r="28" fill="url(#scoopChoc)" stroke="#5A3820" strokeWidth="1.5" />
        {/* Mint scoop (left) */}
        <circle cx="28" cy="76" r="26" fill="url(#scoopMint)" stroke="#4AA882" strokeWidth="1.5" />
        {/* Pink scoop (right) */}
        <circle cx="72" cy="76" r="26" fill="url(#scoopPink)" stroke="#C95577" strokeWidth="1.5" />

        {/* Sprinkles */}
        <rect x="20" y="64" width="7" height="3" rx="1.5" fill="#FFD700" transform="rotate(-30 23 65)" />
        <rect x="38" y="56" width="7" height="3" rx="1.5" fill="#FF6B6B" transform="rotate(20 41 57)" />
        <rect x="55" y="58" width="7" height="3" rx="1.5" fill="#7ED4FC" transform="rotate(-15 58 59)" />
        <rect x="76" y="64" width="7" height="3" rx="1.5" fill="#FFD700" transform="rotate(35 79 65)" />
        <rect x="48" y="72" width="6" height="3" rx="1.5" fill="#FF9ECD" transform="rotate(10 51 73)" />
        <rect x="66" y="85" width="6" height="3" rx="1.5" fill="#A8E6CF" transform="rotate(-25 69 86)" />
        <rect x="30" y="85" width="6" height="3" rx="1.5" fill="#FFB347" transform="rotate(40 33 86)" />
        <rect x="14" y="75" width="6" height="3" rx="1.5" fill="#C4A8FF" transform="rotate(-10 17 76)" />
        <rect x="82" y="75" width="6" height="3" rx="1.5" fill="#FF6B6B" transform="rotate(15 85 76)" />

        {/* Cherry on top */}
        <circle cx="50" cy="44" r="10" fill="#E63946" stroke="#C1222F" strokeWidth="1.5" />
        <ellipse cx="46" cy="40" rx="3" ry="2.5" fill="#FF6B7A" opacity="0.7" />
        <path d="M50 34 Q54 22 63 18" stroke="#4A8C3F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="65" cy="16" rx="6" ry="3.5" fill="#5DAE50" transform="rotate(-20 65 16)" />
      </g>

      {/* === TEXT: GOODIE GOODIE === */}
      <text x="150" y="228" textAnchor="middle" fontFamily="'Fredoka One', 'Bubblegum Sans', cursive, sans-serif" fontSize="42" fontWeight="700" fill="#E63946" stroke="#C1222F" strokeWidth="1" letterSpacing="1">
        GOODIE GOODIE
      </text>

      {/* === TEXT: FOOD === */}
      <text x="150" y="270" textAnchor="middle" fontFamily="'Fredoka One', 'Bubblegum Sans', cursive, sans-serif" fontSize="50" fontWeight="700" fill="#F4A83D" stroke="#D4862A" strokeWidth="1.2" letterSpacing="6">
        FOOD
      </text>

      {/* === Subtitle === */}
      <text x="150" y="298" textAnchor="middle" fontFamily="'Nunito', 'Comic Neue', sans-serif" fontSize="14" fontWeight="600" fill="#8B5E3C" letterSpacing="4" textDecoration="none">
        DESSERT TRUCK
      </text>

      {/* Decorative dots */}
      <circle cx="80" cy="293" r="3" fill="#FF8FAB" opacity="0.7" />
      <circle cx="220" cy="293" r="3" fill="#7EDCB5" opacity="0.7" />
    </svg>
  );
};

const colors = [
  { name: "Cherry Pop", hex: "#E63946", usage: "Primary / Accent" },
  { name: "Strawberry Swirl", hex: "#FF8FAB", usage: "Secondary" },
  { name: "Waffle Cone", hex: "#F4A83D", usage: "Warm Accent" },
  { name: "Mint Chip", hex: "#7EDCB5", usage: "Cool Accent" },
  { name: "Chocolate Fudge", hex: "#6B4226", usage: "Dark Text" },
  { name: "Vanilla Cream", hex: "#FFF8F0", usage: "Background" },
  { name: "Blueberry Burst", hex: "#7ED4FC", usage: "Highlight" },
  { name: "Sprinkle Yellow", hex: "#FFD700", usage: "Pop Color" },
];

const BrandBoard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{
      fontFamily: "'Nunito', sans-serif",
      background: "linear-gradient(135deg, #FFF8F0 0%, #FFF0E6 40%, #F0FFF8 100%)",
      minHeight: "100vh",
      color: "#6B4226",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&family=Bubblegum+Sans&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .tab-btn {
          padding: 10px 22px;
          border: none;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }
        .tab-btn.active {
          background: #E63946;
          color: white;
          box-shadow: 0 4px 15px rgba(230,57,70,0.35);
          transform: scale(1.05);
        }
        .tab-btn.inactive {
          background: white;
          color: #6B4226;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .tab-btn.inactive:hover {
          background: #FFF0E6;
          transform: translateY(-1px);
        }
        
        .color-swatch {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .color-swatch:hover {
          transform: translateY(-4px) scale(1.02);
        }
        
        .section-card {
          background: white;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 4px 20px rgba(107,66,38,0.06);
          border: 2px solid rgba(107,66,38,0.04);
        }
        
        .logo-variant-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 15px rgba(0,0,0,0.06);
          transition: transform 0.3s ease;
          min-height: 200px;
        }
        .logo-variant-card:hover {
          transform: scale(1.02);
        }
        
        .badge {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .floating { animation: float 3s ease-in-out infinite; }

        @keyframes sprinkle {
          0% { opacity: 0; transform: translateY(-10px) rotate(0deg); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(10px) rotate(180deg); }
        }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "40px 40px 30px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(circle at 20% 30%, rgba(255,143,171,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(126,220,181,0.1) 0%, transparent 50%)",
        }} />
        <div style={{ position: "relative" }}>
          <div className="badge" style={{ background: "#FFF0E6", color: "#E63946", marginBottom: 12 }}>
            BRAND IDENTITY GUIDE
          </div>
          <h1 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 38,
            color: "#E63946",
            marginBottom: 6,
          }}>Goodie Goodie Food</h1>
          <p style={{ fontSize: 16, color: "#8B5E3C", fontWeight: 600 }}>Dessert Truck • Event Catering • Sweet Treats</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", padding: "0 40px 30px", flexWrap: "wrap" }}>
        {["overview", "colors", "typography", "usage"].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : "inactive"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "0 40px 60px", maxWidth: 1100, margin: "0 auto" }}>

        {activeTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            {/* Primary Logo */}
            <div className="section-card" style={{ textAlign: "center" }}>
              <div className="badge" style={{ background: "#E6394610", color: "#E63946", marginBottom: 20 }}>PRIMARY LOGO</div>
              <div className="floating" style={{ display: "inline-block" }}>
                <Logo size={280} />
              </div>
            </div>

            {/* Logo Variants Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {/* Icon Only */}
              <div>
                <div className="badge" style={{ background: "#7EDCB520", color: "#4AA882", marginBottom: 12 }}>ICON MARK</div>
                <div className="logo-variant-card">
                  <Logo size={200} variant="icon" />
                </div>
              </div>

              {/* Dark Background */}
              <div>
                <div className="badge" style={{ background: "#6B422620", color: "#6B4226", marginBottom: 12 }}>DARK VARIANT</div>
                <div className="logo-variant-card" style={{ background: "#3D2415" }}>
                  <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
                    <text x="110" y="28" textAnchor="middle" fontFamily="'Fredoka One', cursive" fontSize="26" fill="#FF8FAB" letterSpacing="1">GOODIE GOODIE</text>
                    <text x="110" y="52" textAnchor="middle" fontFamily="'Fredoka One', cursive" fontSize="18" fill="#F4A83D" letterSpacing="4">FOOD</text>
                  </svg>
                </div>
              </div>

              {/* Monochrome */}
              <div>
                <div className="badge" style={{ background: "#7ED4FC20", color: "#4AABE0", marginBottom: 12 }}>SINGLE COLOR</div>
                <div className="logo-variant-card" style={{ background: "#F8F8F8" }}>
                  <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
                    <text x="110" y="28" textAnchor="middle" fontFamily="'Fredoka One', cursive" fontSize="26" fill="#6B4226" letterSpacing="1">GOODIE GOODIE</text>
                    <text x="110" y="52" textAnchor="middle" fontFamily="'Fredoka One', cursive" fontSize="18" fill="#6B4226" letterSpacing="4">FOOD</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Brand Essence */}
            <div className="section-card">
              <div className="badge" style={{ background: "#FFD70020", color: "#C49700", marginBottom: 16 }}>BRAND ESSENCE</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 8 }}>
                {[
                  { icon: "🎪", title: "Fun & Festive", desc: "Every event deserves a sweet moment. We bring the party." },
                  { icon: "🍦", title: "Irresistible Treats", desc: "Premium desserts that make eyes go wide and faces light up." },
                  { icon: "👧", title: "Kid-Friendly", desc: "Approachable, colorful, and joyful for all ages." },
                  { icon: "🚚", title: "Mobile Magic", desc: "We come to you — festivals, birthdays, community events." },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: "linear-gradient(135deg, #FFF8F0, #FFFFFF)",
                    borderRadius: 16,
                    padding: "22px 20px",
                    border: "1px solid rgba(107,66,38,0.06)",
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                    <h4 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 16, color: "#E63946", marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, lineHeight: 1.5, color: "#8B5E3C" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "colors" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div className="section-card">
              <div className="badge" style={{ background: "#E6394610", color: "#E63946", marginBottom: 20 }}>COLOR PALETTE</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 16 }}>
                {colors.map((c, i) => (
                  <div key={i} className="color-swatch">
                    <div style={{
                      height: 100,
                      background: c.hex,
                      display: "flex", alignItems: "flex-end", justifyContent: "flex-start",
                      padding: 10,
                    }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: ["#FFF8F0", "#FFD700", "#7ED4FC", "#7EDCB5", "#FF8FAB"].includes(c.hex) ? "#6B4226" : "white",
                        opacity: 0.9, letterSpacing: 0.5,
                      }}>{c.hex}</span>
                    </div>
                    <div style={{ padding: "12px 12px 14px", background: "white" }}>
                      <div style={{ fontWeight: 800, fontSize: 13, color: "#6B4226" }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: "#8B5E3C", marginTop: 2 }}>{c.usage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Pairings */}
            <div className="section-card">
              <div className="badge" style={{ background: "#7EDCB520", color: "#4AA882", marginBottom: 20 }}>RECOMMENDED PAIRINGS</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  { bg: "#E63946", fg: "#FFF8F0", label: "Cherry on Cream" },
                  { bg: "#6B4226", fg: "#F4A83D", label: "Fudge & Waffle" },
                  { bg: "#FF8FAB", fg: "#6B4226", label: "Strawberry Text" },
                  { bg: "#FFF8F0", fg: "#E63946", label: "Clean & Bold" },
                ].map((p, i) => (
                  <div key={i} style={{
                    background: p.bg, borderRadius: 16, padding: 24,
                    border: p.bg === "#FFF8F0" ? "2px solid #E6394620" : "none",
                  }}>
                    <div style={{ color: p.fg, fontFamily: "'Fredoka One', cursive", fontSize: 20, marginBottom: 6 }}>Aa Bb</div>
                    <div style={{ color: p.fg, fontSize: 12, opacity: 0.8, fontWeight: 600 }}>{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "typography" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div className="section-card">
              <div className="badge" style={{ background: "#E6394610", color: "#E63946", marginBottom: 20 }}>PRIMARY TYPEFACE</div>
              <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 48, color: "#E63946", marginBottom: 8 }}>Fredoka One</h2>
              <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: "#8B5E3C", marginBottom: 20 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: "#8B5E3C", marginBottom: 20 }}>abcdefghijklmnopqrstuvwxyz</p>
              <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: "#8B5E3C" }}>0123456789 !@#$%</p>
              <div style={{ marginTop: 20, padding: 16, background: "#FFF8F0", borderRadius: 12, fontSize: 13, color: "#8B5E3C" }}>
                Use for: Headlines, logo, menu items, truck signage, social media headers
              </div>
            </div>

            <div className="section-card">
              <div className="badge" style={{ background: "#7EDCB520", color: "#4AA882", marginBottom: 20 }}>SECONDARY TYPEFACE</div>
              <h2 style={{ fontFamily: "'Nunito', sans-serif", fontSize: 42, fontWeight: 800, color: "#6B4226", marginBottom: 8 }}>Nunito</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: 16 }}>
                {[
                  { weight: 400, label: "Regular", text: "The quick brown fox jumps over the lazy dog" },
                  { weight: 600, label: "Semi-Bold", text: "The quick brown fox jumps over the lazy dog" },
                  { weight: 700, label: "Bold", text: "The quick brown fox jumps over the lazy dog" },
                  { weight: 800, label: "Extra-Bold", text: "The quick brown fox jumps over the lazy dog" },
                ].map((w, i) => (
                  <div key={i} style={{ padding: 16, background: "#FFF8F0", borderRadius: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#E63946", marginBottom: 6, letterSpacing: 1 }}>{w.label} ({w.weight})</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: w.weight, fontSize: 14, color: "#6B4226", lineHeight: 1.5 }}>{w.text}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: 16, background: "#FFF8F0", borderRadius: 12, fontSize: 13, color: "#8B5E3C" }}>
                Use for: Body text, descriptions, menus, social media captions, website copy
              </div>
            </div>

            {/* Type Scale */}
            <div className="section-card">
              <div className="badge" style={{ background: "#F4A83D20", color: "#C49700", marginBottom: 20 }}>TYPE SCALE</div>
              {[
                { size: 42, label: "H1 — Hero Title", font: "'Fredoka One', cursive", color: "#E63946" },
                { size: 32, label: "H2 — Section Header", font: "'Fredoka One', cursive", color: "#E63946" },
                { size: 24, label: "H3 — Subheader", font: "'Fredoka One', cursive", color: "#6B4226" },
                { size: 18, label: "H4 — Card Title", font: "'Nunito', sans-serif", color: "#6B4226", weight: 800 },
                { size: 16, label: "Body — Regular text", font: "'Nunito', sans-serif", color: "#8B5E3C", weight: 400 },
                { size: 13, label: "Caption — Small text", font: "'Nunito', sans-serif", color: "#8B5E3C", weight: 600 },
              ].map((t, i) => (
                <div key={i} style={{ borderBottom: i < 5 ? "1px solid rgba(107,66,38,0.08)" : "none", padding: "14px 0", display: "flex", alignItems: "baseline", gap: 20 }}>
                  <span style={{ fontFamily: t.font, fontSize: t.size, color: t.color, fontWeight: t.weight || "normal" }}>Goodie!</span>
                  <span style={{ fontSize: 11, color: "#8B5E3C", opacity: 0.7 }}>{t.label} — {t.size}px</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "usage" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            {/* Clear Space */}
            <div className="section-card">
              <div className="badge" style={{ background: "#E6394610", color: "#E63946", marginBottom: 20 }}>CLEAR SPACE & MINIMUM SIZE</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    border: "2px dashed rgba(230,57,70,0.3)",
                    borderRadius: 20,
                    padding: 40,
                    display: "inline-block",
                    position: "relative",
                  }}>
                    <Logo size={160} />
                    <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", fontSize: 10, color: "#E63946", fontWeight: 700 }}>↕ 1x</div>
                    <div style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", fontSize: 10, color: "#E63946", fontWeight: 700 }}>↔ 1x</div>
                  </div>
                  <p style={{ fontSize: 12, color: "#8B5E3C", marginTop: 12 }}>Minimum clear space = height of cherry</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#6B4226", marginBottom: 8 }}>Minimum Sizes</div>
                    <div style={{ fontSize: 13, color: "#8B5E3C", lineHeight: 1.8 }}>
                      Print: 1.5" wide minimum<br />
                      Digital: 120px wide minimum<br />
                      Icon mark: 32px minimum<br />
                      Favicon: 16px (icon only)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Do's and Don'ts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div className="section-card" style={{ borderTop: "4px solid #5DAE50" }}>
                <div className="badge" style={{ background: "#5DAE5020", color: "#5DAE50", marginBottom: 16 }}>✓ DO</div>
                <ul style={{ listStyle: "none", padding: 0, fontSize: 13, lineHeight: 2.2, color: "#6B4226" }}>
                  <li>✓ Use logo on light, clean backgrounds</li>
                  <li>✓ Maintain proportions when scaling</li>
                  <li>✓ Use approved color pairings</li>
                  <li>✓ Use icon mark for small applications</li>
                  <li>✓ Keep it fun and playful in context</li>
                </ul>
              </div>
              <div className="section-card" style={{ borderTop: "4px solid #E63946" }}>
                <div className="badge" style={{ background: "#E6394620", color: "#E63946", marginBottom: 16 }}>✗ DON'T</div>
                <ul style={{ listStyle: "none", padding: 0, fontSize: 13, lineHeight: 2.2, color: "#6B4226" }}>
                  <li>✗ Stretch or distort the logo</li>
                  <li>✗ Place on busy photographic backgrounds</li>
                  <li>✗ Change the logo colors arbitrarily</li>
                  <li>✗ Add drop shadows or effects</li>
                  <li>✗ Rearrange logo elements</li>
                </ul>
              </div>
            </div>

            {/* Applications Preview */}
            <div className="section-card">
              <div className="badge" style={{ background: "#FF8FAB20", color: "#C95577", marginBottom: 20 }}>APPLICATIONS</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  { label: "Truck Wrap", bg: "linear-gradient(135deg, #E63946, #C1222F)", icon: "🚚" },
                  { label: "Menu Board", bg: "linear-gradient(135deg, #6B4226, #3D2415)", icon: "📋" },
                  { label: "Cups & Packaging", bg: "linear-gradient(135deg, #FF8FAB, #E56B8A)", icon: "🥤" },
                  { label: "Social Media", bg: "linear-gradient(135deg, #7EDCB5, #5BC49A)", icon: "📱" },
                  { label: "Business Cards", bg: "linear-gradient(135deg, #F4A83D, #D4862A)", icon: "💳" },
                  { label: "Event Banners", bg: "linear-gradient(135deg, #7ED4FC, #4AABE0)", icon: "🎪" },
                ].map((a, i) => (
                  <div key={i} style={{
                    background: a.bg, borderRadius: 16, padding: 24,
                    color: "white", textAlign: "center",
                  }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>{a.icon}</div>
                    <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 15 }}>{a.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandBoard;
