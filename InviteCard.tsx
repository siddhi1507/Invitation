import React, { useState, useEffect } from "react";

const InviteCard: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Premium color palette with soft blues and whites
  const colors = {
    softBlue: "#93c5fd",
    lightBlue: "#e0f2fe",
    pearlWhite: "#f8fafc",
    silver: "#d1d5db",
    skyBlue: "#bae6fd",
    navyBlue: "#1e3a8a",
    ivory: "#fff7ed",
    accentBlue: "#60a5fa",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "740px",
    margin: "4.5rem auto",
    padding: "4.5rem 3.5rem",
    textAlign: "center",
    borderRadius: "24px",
    background: `linear-gradient(145deg, rgba(224, 242, 254, 0.85), rgba(248, 250, 252, 0.9) 50%, rgba(186, 230, 253, 0.85)), 
                 url('https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "soft-light",
    boxShadow: `
      0 25px 50px -12px rgba(59, 130, 246, 0.2),
      inset 0 0 40px rgba(255, 255, 255, 0.6)
    `,
    border: `1px solid ${colors.silver}`,
    position: "relative",
    overflow: "hidden",
    transform: loaded
      ? "translateY(0) scale(1)"
      : "translateY(40px) scale(0.98)",
    opacity: loaded ? 1 : 0,
    transition:
      "all 1.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s ease, background 20s ease-in-out",
  };

  const floralOverlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/soft-floral.png")',
    opacity: 0.15,
    pointerEvents: "none",
    mixBlendMode: "soft-light",
  };

  const floralAccentStyle: React.CSSProperties = {
    position: "absolute",
    width: "140px",
    height: "140px",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/premium-floral.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    opacity: 0.55,
    pointerEvents: "none",
    zIndex: 1,
    filter: "brightness(1.3) contrast(1.2)",
  };

  // Increased number of floating floral elements for a richer effect
  const floatingElements = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 15,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 12,
    rotate: Math.random() * 360,
    speed: Math.random() * 10 + 6,
    opacity: Math.random() * 0.4 + 0.3,
    type: Math.random() > 0.5 ? "petal" : "leaf",
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
      element.type === "petal"
        ? 'url("https://www.transparenttextures.com/patterns/petal-pattern.png")'
        : 'url("https://www.transparenttextures.com/patterns/leaf-pattern.png")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    opacity: element.opacity,
    transform: `rotate(${element.rotate}deg)`,
    animation: `float ${element.speed}s ease-in-out infinite`,
    animationDelay: `${element.animationDelay}s`,
    filter: "drop-shadow(0 1px 4px rgba(59, 130, 246, 0.25))",
    zIndex: 0,
    pointerEvents: "none",
  });

  const titleStyle: React.CSSProperties = {
    fontSize: "clamp(2.3rem, 6vw, 3.4rem)",
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    color: colors.navyBlue,
    marginBottom: "2.5rem",
    lineHeight: 1.5,
    position: "relative",
    display: "inline-block",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
    letterSpacing: "2.5px",
    fontStyle: "normal",
  };

  const titleUnderlineStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    width: loaded ? "130px" : "0",
    height: "2px",
    background: `linear-gradient(90deg, transparent, ${colors.silver}, transparent)`,
    borderRadius: "2px",
    transition: "width 1.4s ease-in-out 0.6s",
    boxShadow: `0 2px 10px ${colors.skyBlue}`,
  };

  const coupleNamesStyle: React.CSSProperties = {
    fontFamily: "'Tangerine', serif",
    fontSize: "clamp(3.4rem, 7.5vw, 5rem)",
    color: colors.navyBlue,
    margin: "2rem 0",
    lineHeight: 1.3,
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(15px)",
    transition: "all 1.1s ease 0.7s",
    letterSpacing: "1.5px",
  };

  const detailContainerStyle: React.CSSProperties = {
    margin: "3rem 0",
    padding: "2.5rem",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "16px",
    border: `1px solid ${colors.silver}`,
    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)",
    position: "relative",
    backdropFilter: "blur(10px)",
  };

  const detailItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.5rem 0",
    fontSize: "clamp(1.3rem, 3.2vw, 1.6rem)",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    color: colors.navyBlue,
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(15px)",
    transition: "all 1.1s ease",
    lineHeight: 1.7,
    letterSpacing: "0.8px",
    textShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "15px",
    fontSize: "2rem",
    color: colors.accentBlue,
    minWidth: "40px",
    textAlign: "center",
  };

  const messageStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(1.4rem, 3.2vw, 1.7rem)",
    lineHeight: 1.9,
    margin: "2.5rem 0",
    color: colors.navyBlue,
    fontStyle: "italic",
    fontWeight: 500,
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(15px)",
    transition: "all 1.1s ease 0.9s",
    letterSpacing: "1.2px",
    textShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: "2.5rem",
    padding: "1.3rem 3.2rem",
    background: `linear-gradient(135deg, ${colors.accentBlue}, ${colors.silver})`,
    color: colors.pearlWhite,
    border: "none",
    borderRadius: "40px",
    fontSize: "clamp(1.3rem, 3vw, 1.4rem)",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
    letterSpacing: "1.3px",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(15px)",
    transition: "all 1.1s ease 1.2s",
  };

  const buttonHoverEffect: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(135deg, ${colors.silver}, ${colors.accentBlue})`,
    opacity: 0,
    transition: "opacity 0.4s ease",
    zIndex: -1,
  };

  const locationButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    marginTop: "1.5rem",
    transition: "all 1.1s ease 1.3s",
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(59, 130, 246, 0.4)";
    e.currentTarget.querySelector("span")!.style.opacity = "1";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.3)";
    e.currentTarget.querySelector("span")!.style.opacity = "0";
  };

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=TULIP+CELEBRATION,+Mohpa+Road,+Umred", "_blank");
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
        e.currentTarget.style.boxShadow =
          "0 30px 60px -15px rgba(59, 130, 246, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow =
          "0 25px 50px -12px rgba(59, 130, 246, 0.2)";
      }}
      className="invite-card"
    >
      <div style={floralOverlayStyle}></div>
      <div
        style={{
          ...floralAccentStyle,
          top: "15px",
          left: "15px",
          transform: "rotate(0deg)",
        }}
      ></div>
      <div
        style={{
          ...floralAccentStyle,
          bottom: "15px",
          right: "15px",
          transform: "rotate(180deg)",
        }}
      ></div>
      <div
        style={{
          ...floralAccentStyle,
          top: "15px",
          right: "15px",
          transform: "rotate(90deg)",
        }}
      ></div>
      <div
        style={{
          ...floralAccentStyle,
          bottom: "15px",
          left: "15px",
          transform: "rotate(270deg)",
        }}
      ></div>

      {floatingElements.map((element) => (
        <div key={element.id} style={floatingElementStyle(element)} />
      ))}

      <h2 style={titleStyle}>
        Engagement Ceremony
        <span style={titleUnderlineStyle}></span>
      </h2>

      <div style={coupleNamesStyle}>
        Deven{" "}
        <span style={{ color: colors.accentBlue, margin: "0 0.8rem" }}>&</span>{" "}
        Dikshita
      </div>

      <div style={detailContainerStyle}>
        <div style={{ ...detailItemStyle, transitionDelay: "0.4s" }}>
          <span style={iconStyle}>📅</span>
          <span>29th June 2025</span>
        </div>
        <div style={{ ...detailItemStyle, transitionDelay: "0.5s" }}>
          <span style={iconStyle}>🕒</span>
          <span>6:00 PM onwards</span>
        </div>
        <div style={{ ...detailItemStyle, transitionDelay: "0.6s" }}>
          <span style={iconStyle}>📍</span>
          <span>TULIP CELEBRATION, Mohpa Road, Umred</span>
        </div>
        <button
          style={locationButtonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleLocationClick}
        >
          <span style={buttonHoverEffect}></span>
          View Location
        </button>
      </div>

      <p style={messageStyle}>
        We would be honored by your gracious presence as we begin this beautiful
        journey together.
      </p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Tangerine:wght@400;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600&display=swap');

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: ${floatingElements[0].opacity};
          }
          50% {
            transform: translateY(-50px) rotate(4deg);
            opacity: ${floatingElements[0].opacity * 0.7};
          }
        }

        @keyframes backgroundTransition {
          0% {
            background-position: 0% 50%;
            background: linear-gradient(145deg, rgba(224, 242, 254, 0.85), rgba(248, 250, 252, 0.9) 50%, rgba(186, 230, 253, 0.85)), 
                        url('https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          }
          50% {
            background-position: 100% 50%;
            background: linear-gradient(145deg, rgba(186, 230, 253, 0.85), rgba(248, 250, 252, 0.9) 50%, rgba(224, 242, 254, 0.85)), 
                        url('https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          }
          100% {
            background-position: 0% 50%;
            background: linear-gradient(145deg, rgba(224, 242, 254, 0.85), rgba(248, 250, 252, 0.9) 50%, rgba(186, 230, 253, 0.85)), 
                        url('https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          }
        }

        body {
          margin: 0;
          font-smoothing: antialiased;
          -webkit-font-smoothing: antialiased;
          background-color: ${colors.ivory};
        }

        .invite-card {
          animation: backgroundTransition 25s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .invite-card {
            margin: 3rem auto !important;
            padding: 3.5rem 2.5rem !important;
          }

          .detail-container {
            padding: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .invite-card {
            padding: 2.5rem 1.5rem !important;
            margin: 2rem auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default InviteCard;