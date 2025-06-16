import React, { useState, useEffect } from "react";

const HostMessage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Premium color palette
  const colors = {
    gold: "#D4AF37",
    roseGold: "#E0BFB8",
    blush: "#F8E3E3",
    champagne: "#F3E5AB",
    ivory: "#FFFFF0",
    deepRed: "#8B0000",
    darkGreen: "#1A3A32",
    cream: "#FFF8EE",
  };

  const sectionStyle: React.CSSProperties = {
    padding: "8rem 2rem",
    background: `linear-gradient(rgba(255, 248, 240, 0.9), rgba(255, 248, 240, 0.9)), url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    overflow: "hidden",
  };

  const goldOverlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(135deg, rgba(212, 175, 55, 0.03) 0%, rgba(212, 175, 55, 0.01) 100%)`,
    pointerEvents: "none",
  };

  const floralPatternStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/vintage-floral.png")',
    opacity: 0.08,
    pointerEvents: "none",
    mixBlendMode: "multiply",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "800px",
    margin: "0 auto",
    background: `linear-gradient(to bottom, ${colors.ivory}, ${colors.cream})`,
    padding: "6rem 5rem",
    borderRadius: "16px",
    boxShadow: `
      0 30px 60px -15px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.3) inset,
      0 0 50px rgba(212, 175, 55, 0.1) inset
    `,
    border: `1px solid ${colors.gold}`,
    position: "relative",
    overflow: "hidden",
    transform: loaded
      ? "translateY(0) scale(1)"
      : "translateY(50px) scale(0.98)",
    opacity: loaded ? 1 : 0,
    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const floatingElements = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 10,
    opacity: Math.random() * 0.6 + 0.3,
    rotate: Math.random() * 360,
    type: Math.random() > 0.5 ? "heart" : "flower",
  }));

  const floatingElementStyle = (
    element: (typeof floatingElements)[0]
  ): React.CSSProperties => ({
    position: "absolute",
    left: `${element.left}%`,
    top: `${element.top}%`,
    width: `${element.size}px`,
    height: `${element.size}px`,
    backgroundImage:
      element.type === "heart"
        ? 'url("https://www.transparenttextures.com/patterns/heart-pattern.png")'
        : 'url("https://www.transparenttextures.com/patterns/floral-pattern.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    opacity: element.opacity,
    transform: `rotate(${element.rotate}deg)`,
    animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
    animationDelay: `${element.animationDelay}s`,
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
    zIndex: 0,
    pointerEvents: "none",
  });

  const cornerDecorationStyle: React.CSSProperties = {
    position: "absolute",
    width: "120px",
    height: "120px",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/gold-flourish-corner.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    opacity: 0.7,
    zIndex: 1,
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2.2rem, 5vw, 3rem)",
    color: colors.darkGreen,
    marginBottom: "3rem",
    fontWeight: 700,
    lineHeight: 1.3,
    position: "relative",
    display: "inline-block",
    textAlign: "center",
    width: "100%",
  };

  const headingUnderlineStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-15px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "4px",
    background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)`,
    borderRadius: "2px",
    opacity: loaded ? 1 : 0,
    transformOrigin: "center",
    transition: "all 1s ease 0.5s",
  };

  const paragraphStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
    color: "#4a4a4a",
    lineHeight: 1.9,
    marginBottom: "2.5rem",
    fontWeight: 400,
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.8s ease",
    textAlign: "center",
    letterSpacing: "0.3px",
  };

  const signatureStyle: React.CSSProperties = {
    fontFamily: "'Dancing Script', cursive",
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    color: colors.deepRed,
    marginTop: "3rem",
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateX(0)" : "translateX(-30px)",
    transition: "all 0.8s ease 0.6s",
    textAlign: "center",
    fontWeight: 700,
  };

  const familyStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
    color: colors.darkGreen,
    fontWeight: 600,
    letterSpacing: "1px",
    marginTop: "0.5rem",
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateX(0)" : "translateX(30px)",
    transition: "all 0.8s ease 0.8s",
    textAlign: "center",
  };

  const waxSealStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-30px",
    right: "50px",
    width: "80px",
    height: "80px",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/wax-seal.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    opacity: 0.9,
    transform: "rotate(15deg)",
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
    zIndex: 2,
  };

  return (
    <section style={sectionStyle}>
      <div style={goldOverlayStyle}></div>
      <div style={floralPatternStyle}></div>

      <div
        style={containerStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
          e.currentTarget.style.boxShadow =
            "0 40px 80px -20px rgba(0, 0, 0, 0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 30px 60px -15px rgba(0, 0, 0, 0.2)";
        }}
      >
        {/* Floating decorative elements */}
        {floatingElements.map((element) => (
          <div key={element.id} style={floatingElementStyle(element)} />
        ))}

        {/* Corner decorations */}
        <div
          style={{
            ...cornerDecorationStyle,
            top: "20px",
            left: "20px",
            transform: "rotate(0deg)",
          }}
        ></div>
        <div
          style={{
            ...cornerDecorationStyle,
            top: "20px",
            right: "20px",
            transform: "rotate(90deg)",
          }}
        ></div>
        <div
          style={{
            ...cornerDecorationStyle,
            bottom: "20px",
            left: "20px",
            transform: "rotate(270deg)",
          }}
        ></div>
        <div
          style={{
            ...cornerDecorationStyle,
            bottom: "20px",
            right: "20px",
            transform: "rotate(180deg)",
          }}
        ></div>

        {/* Wax seal */}
        <div style={waxSealStyle}></div>

        <h2 style={headingStyle}>
          A Message from Our Family
          <span style={headingUnderlineStyle}></span>
        </h2>

        <p style={{ ...paragraphStyle, transitionDelay: "0.3s" }}>
          With hearts full of joy, we are delighted to announce the engagement
          of our beloved children. We would be truly honored to have you join us
          in celebrating this sacred union of two souls destined to walk life's
          path together.
        </p>

        <p style={{ ...paragraphStyle, transitionDelay: "0.4s" }}>
          This celebration marks not just the joining of two hearts, but the
          beautiful coming together of families, traditions, and dreams. Your
          gracious presence will add to the warmth and happiness of this
          auspicious occasion as we bless their journey ahead.
        </p>

        <p style={{ ...paragraphStyle, transitionDelay: "0.5s" }}>
          We warmly welcome you to share in our happiness and create cherished
          memories that will be treasured for generations to come.
        </p>

        <p style={familyStyle}>With Warmest Regards,</p>
        <p style={signatureStyle}>The Koche Family</p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-50px) rotate(5deg);
          }
        }
        
        @keyframes gentlePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        
        body {
          margin: 0;
          font-smoothing: antialiased;
          -webkit-font-smoothing: antialiased;
          background-color: #f8f8f8;
        }
        
        @media (max-width: 768px) {
          .host-message-container {
            padding: 4rem 3rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .host-message-container {
            padding: 3rem 2rem !important;
          }
          
          .floral-bg {
            background-size: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HostMessage;
