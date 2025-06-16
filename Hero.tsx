import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Ultra-premium color palette with softer, romantic tones
  const colors = {
    champagneGold: "#D4A574",
    rosePetal: "#E8C5A0",
    pearlWhite: "#FAF7F2",
    dustyRose: "#D4A5A5",
    deepBlush: "#C49A9A",
    emeraldGreen: "#2F4F4F",
    antiqueBronze: "#8B7355",
    softCream: "#F8F5F0",
    skyBlue: "#bae6fd",
    accentBlue: "#60a5fa",
  };

  const sectionStyle: React.CSSProperties = {
    minHeight: isMobile ? "auto" : "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "1.5rem 0.8rem" : "3rem 1.5rem",
    background: `
      radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(186, 230, 253, 0.12) 0%, transparent 50%),
      linear-gradient(135deg, rgba(248, 245, 240, 0.92) 0%, rgba(224, 242, 254, 0.92) 100%),
      url("https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")
    `,
    backgroundSize: "cover, cover, cover, cover",
    backgroundPosition: "center",
    backgroundBlendMode: "soft-light, soft-light, overlay, normal",
    position: "relative",
    overflow: "hidden",
    boxShadow: "inset 0 0 250px rgba(47, 79, 79, 0.06)",
    animation: "backgroundTransition 30s ease-in-out infinite",
  };

  // Enhanced luxury floating elements
  const luxuryElements = Array.from({ length: isMobile ? 18 : 30 }).map(
    (_, i) => ({
      id: i,
      size: isMobile ? Math.random() * 12 + 8 : Math.random() * 18 + 12,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 15,
      rotate: Math.random() * 360,
      speed: Math.random() * 12 + 8,
      opacity: Math.random() * 0.5 + 0.3,
      type: ["rose", "leaf", "sparkle", "heart", "petal"][
        Math.floor(Math.random() * 5)
      ],
    })
  );

  const cardStyle: React.CSSProperties = {
    zIndex: 10,
    textAlign: "center",
    maxWidth: "1300px",
    width: "92%",
    padding: isMobile ? "3rem 1.5rem" : "8rem 5rem",
    background: `
      linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 245, 240, 0.95)),
      radial-gradient(circle at 50% 50%, rgba(186, 230, 253, 0.1) 0%, transparent 60%),
      linear-gradient(90deg, rgba(212, 165, 116, 0.05), transparent, rgba(186, 230, 253, 0.05))
    `,
    backdropFilter: "blur(35px) saturate(200%)",
    borderRadius: isMobile ? "1.2rem" : "2.5rem",
    border: "2px solid rgba(212, 165, 116, 0.3)",
    backgroundClip: "padding-box",
    boxShadow: `
      0 0 0 2px rgba(186, 230, 253, 0.2),
      0 25px 70px -12px rgba(47, 79, 79, 0.12),
      0 0 80px rgba(212, 165, 116, 0.15) inset,
      0 1px 0 rgba(255, 255, 255, 0.9) inset
    `,
    transform: loaded
      ? "translateY(0) scale(1) rotateX(0deg)"
      : "translateY(60px) scale(0.9) rotateX(8deg)",
    opacity: loaded ? 1 : 0,
    transition: "all 2.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s ease",
    position: "relative",
    overflow: "hidden",
    margin: isMobile ? "1.5rem 0" : "0",
  };

  const cardAmbientGlowStyle: React.CSSProperties = {
    position: "absolute",
    inset: isMobile ? "-15px" : "-40px",
    background: `
      radial-gradient(circle at 30% 70%, rgba(212, 165, 116, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(186, 230, 253, 0.1) 0%, transparent 50%)
    `,
    borderRadius: isMobile ? "1.5rem" : "3rem",
    opacity: loaded ? 0.8 : 0,
    transition: "opacity 3.5s ease 1.8s",
    pointerEvents: "none",
    zIndex: -1,
    filter: "blur(25px)",
  };

  const nameStyle: React.CSSProperties = {
    display: "inline-block",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
    fontSize: isMobile
      ? "clamp(2.8rem, 9vw, 3.8rem)"
      : "clamp(4rem, 9vw, 6.5rem)",
    background: `linear-gradient(135deg, ${colors.emeraldGreen} 0%, ${colors.antiqueBronze} 40%, ${colors.accentBlue} 100%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: isMobile ? "0 0.4rem" : "0 1.8rem",
    lineHeight: 1.2,
    position: "relative",
    letterSpacing: isMobile ? "1.5px" : "2.5px",
    textShadow: "none",
    filter: "drop-shadow(1px 1px 3px rgba(47, 79, 79, 0.15))",
  };

  const andStyle: React.CSSProperties = {
    display: "inline-block",
    margin: isMobile ? "0 0.8rem" : "0 2rem",
    color: colors.accentBlue,
    fontFamily: "'Dancing Script', cursive",
    fontSize: isMobile
      ? "clamp(3.2rem, 9vw, 4rem)"
      : "clamp(4.5rem, 9vw, 6.5rem)",
    transform: "rotate(-10deg) scale(1.3)",
    position: "relative",
    top: isMobile ? "-0.15rem" : "-0.4rem",
    textShadow: "1px 1px 5px rgba(186, 230, 253, 0.4)",
    filter: "drop-shadow(0 0 15px rgba(186, 230, 253, 0.5))",
  };

  const floatingElementStyle = (
    element: (typeof luxuryElements)[0]
  ): React.CSSProperties => {
    return {
      position: "absolute",
      left: `${element.left}%`,
      top: `${element.top}%`,
      fontSize: `${element.size}px`,
      opacity: element.opacity,
      transform: `rotate(${element.rotate}deg)`,
      animation: `luxuryFloat ${element.speed}s ease-in-out infinite`,
      animationDelay: `${element.animationDelay}s`,
      filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.15))",
      zIndex: 3,
      pointerEvents: "none",
      color:
        element.type === "sparkle" ? colors.accentBlue : colors.champagneGold,
    };
  };

  return (
    <section style={sectionStyle}>
      {/* Enhanced Ambient Light Effects */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: isMobile ? "200px" : "350px",
          height: isMobile ? "200px" : "350px",
          background:
            "radial-gradient(circle, rgba(186, 230, 253, 0.15) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: "ambientPulse 10s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: isMobile ? "180px" : "300px",
          height: isMobile ? "180px" : "300px",
          background:
            "radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(45px)",
          animation: "ambientPulse 8s ease-in-out infinite 3s",
          zIndex: 1,
        }}
      />

      {/* Refined Geometric Decorations */}
      {!isMobile && (
        <>
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "5%",
              width: "120px",
              height: "120px",
              border: "1px solid rgba(186, 230, 253, 0.25)",
              borderRadius: "50%",
              animation: "slowRotate 35s linear infinite",
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                border: "1px solid rgba(212, 165, 116, 0.2)",
                borderRadius: "50%",
                animation: "slowRotate 25s linear infinite reverse",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "8%",
              width: "100px",
              height: "100px",
              border: "1px solid rgba(47, 79, 79, 0.12)",
              transform: "rotate(45deg)",
              borderRadius: "15px",
              animation: "slowRotate 30s linear infinite",
              zIndex: 2,
            }}
          />
        </>
      )}

      {/* Luxury Floating Elements */}
      {luxuryElements.map((element) => (
        <div key={element.id} style={floatingElementStyle(element)}>
          {element.type === "rose" && "🌹"}
          {element.type === "leaf" && "🍃"}
          {element.type === "sparkle" && "✨"}
          {element.type === "heart" && "💕"}
          {element.type === "petal" && "🌸"}
        </div>
      ))}

      <div
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
          e.currentTarget.style.boxShadow = `
            0 0 0 2px rgba(186, 230, 253, 0.3),
            0 30px 80px -15px rgba(47, 79, 79, 0.15),
            0 0 100px rgba(212, 165, 116, 0.2) inset
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = `
            0 0 0 2px rgba(186, 230, 253, 0.2),
            0 25px 70px -12px rgba(47, 79, 79, 0.12),
            0 0 80px rgba(212, 165, 116, 0.15) inset
          `;
        }}
      >
        <div style={cardAmbientGlowStyle}></div>

        {/* Enhanced Corner Decorations */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? "12px" : "25px",
            left: isMobile ? "12px" : "25px",
            fontSize: isMobile ? "1.2rem" : "2rem",
            color: colors.accentBlue,
            opacity: 0.7,
            animation: "delicateGlow 3.5s ease-in-out infinite",
          }}
        >
          ✿
        </div>
        <div
          style={{
            position: "absolute",
            top: isMobile ? "12px" : "25px",
            right: isMobile ? "12px" : "25px",
            fontSize: isMobile ? "1.2rem" : "2rem",
            color: colors.champagneGold,
            opacity: 0.7,
            animation: "delicateGlow 3.5s ease-in-out infinite 1s",
          }}
        >
          ✿
        </div>
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "12px" : "25px",
            left: isMobile ? "12px" : "25px",
            fontSize: isMobile ? "1.2rem" : "2rem",
            color: colors.rosePetal,
            opacity: 0.7,
            animation: "delicateGlow 3.5s ease-in-out infinite 2s",
          }}
        >
          ✿
        </div>
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "12px" : "25px",
            right: isMobile ? "12px" : "25px",
            fontSize: isMobile ? "1.2rem" : "2rem",
            color: colors.dustyRose,
            opacity: 0.7,
            animation: "delicateGlow 3.5s ease-in-out infinite 3s",
          }}
        >
          ✿
        </div>

        {/* Premium Header */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            textTransform: "uppercase",
            color: colors.antiqueBronze,
            fontSize: isMobile
              ? "clamp(0.8rem, 2.2vw, 1rem)"
              : "clamp(1rem, 2.2vw, 1.3rem)",
            letterSpacing: isMobile ? "3px" : "5px",
            marginBottom: isMobile ? "1rem" : "2rem",
            fontWeight: 500,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(-15px)",
            transition: "all 1.3s ease 0.6s",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "relative",
              padding: isMobile ? "0 0.8rem" : "0 1.5rem",
            }}
          >
            Together With Their Families
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                right: "0",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${colors.accentBlue}, transparent)`,
                zIndex: -1,
              }}
            />
          </span>
        </h2>

        {/* Elegant Names Section */}
        <div
          style={{
            position: "relative",
            marginBottom: isMobile ? "2rem" : "4rem",
            padding: isMobile ? "1rem 0" : "2.5rem 0",
          }}
        >
          <h1 style={{ margin: 0, position: "relative" }}>
            <span
              style={{
                ...nameStyle,
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "translateX(0) scale(1)"
                  : "translateX(-50px) scale(0.85)",
                transition:
                  "all 1.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.9s",
              }}
            >
              Deven
            </span>
            <span
              style={{
                ...andStyle,
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "rotate(-10deg) scale(1.3)"
                  : "rotate(0deg) scale(0.6)",
                transition:
                  "all 1.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.3s",
              }}
            >
              &
            </span>
            <span
              style={{
                ...nameStyle,
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "translateX(0) scale(1)"
                  : "translateX(50px) scale(0.85)",
                transition:
                  "all 1.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.7s",
              }}
            >
              Dikshita
            </span>
          </h1>

          {/* Refined Underline */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              height: "2px",
              width: loaded ? (isMobile ? "180px" : "350px") : "0",
              background: `linear-gradient(90deg, transparent, ${colors.champagneGold}, ${colors.accentBlue}, ${colors.champagneGold}, transparent)`,
              transition: "width 2.2s ease 2.2s",
              borderRadius: "3px",
              boxShadow: "0 0 15px rgba(186, 230, 253, 0.6)",
            }}
          />
        </div>

        {/* Romantic Subtitle */}
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: isMobile
              ? "clamp(2.2rem, 7vw, 3rem)"
              : "clamp(3rem, 7vw, 4.5rem)",
            color: colors.deepBlush,
            marginBottom: isMobile ? "1.5rem" : "3rem",
            lineHeight: 1.3,
            letterSpacing: "1.2px",
            fontWeight: 700,
            opacity: loaded ? 1 : 0,
            transform: loaded
              ? "translateY(0) scale(1)"
              : "translateY(25px) scale(0.9)",
            transition: "all 1.6s ease 2.4s",
            textShadow: "1px 1px 6px rgba(196, 154, 154, 0.25)",
          }}
        >
          Request the Pleasure of Your Company
        </p>

        {/* Ornamental Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: isMobile ? "1.5rem auto" : "3rem auto",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1.6s ease 2.7s",
          }}
        >
          <div
            style={{
              height: "1px",
              width: loaded ? (isMobile ? "60px" : "120px") : "0",
              background: `linear-gradient(90deg, transparent, ${colors.accentBlue})`,
              transition: "width 1.6s ease 2.7s",
            }}
          />
          <div
            style={{
              margin: "0 0.8rem",
              fontSize: isMobile ? "1.2rem" : "1.8rem",
              color: colors.champagneGold,
              animation: "0.3s",
            }}
          >
            ❦
          </div>
          <div
            style={{
              height: "1px",
              width: loaded ? (isMobile ? "60px" : "120px") : "0",
              background: `linear-gradient(90deg, ${colors.accentBlue}, transparent)`,
              transition: "width 1.6s ease 2.7s",
            }}
          />
        </div>

        {/* Standardized Event Details */}
        <p
          style={{
            fontSize: isMobile
              ? "clamp(1.3rem, 4.5vw, 1.8rem)"
              : "clamp(1.8rem, 4.5vw, 2.5rem)",
            color: colors.emeraldGreen,
            marginBottom: isMobile ? "0.8rem" : "1.5rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontStyle: "italic",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(15px)",
            transition: "all 1.2s ease 2.9s",
            textShadow: "1px 1px 2px rgba(47, 79, 79, 0.12)",
          }}
        >
          To Celebrate Their Engagement
        </p>

        <p
          style={{
            fontSize: isMobile
              ? "clamp(1.1rem, 3.8vw, 1.5rem)"
              : "clamp(1.5rem, 3.8vw, 1.9rem)",
            color: colors.antiqueBronze,
            marginBottom: isMobile ? "0.4rem" : "0.8rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(15px)",
            transition: "all 1.2s ease 3.1s",
            letterSpacing: "0.8px",
          }}
        >
          Sunday, the 29th of June, 2025
        </p>

        <p
          style={{
            fontSize: isMobile
              ? "clamp(1.6rem, 5.5vw, 2.2rem)"
              : "clamp(2rem, 5.5vw, 3rem)",
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            color: colors.accentBlue,
            marginTop: isMobile ? "1rem" : "2rem",
            opacity: loaded ? 1 : 0,
            transform: loaded
              ? "translateY(0) scale(1)"
              : "translateY(25px) scale(0.9)",
            transition: "all 1.6s ease 3.3s",
            letterSpacing: "1.5px",
            textShadow: "1px 1px 6px rgba(186, 230, 253, 0.35)",
            filter: "drop-shadow(0 0 12px rgba(186, 230, 253, 0.5))",
          }}
        >
          7 O'Clock in the Evening
        </p>

        {/* Decorative Bottom Element */}
        <div
          style={{
            marginTop: isMobile ? "2rem" : "4rem",
            fontSize: isMobile ? "1rem" : "1.3rem",
            color: colors.rosePetal,
            opacity: loaded ? 0.9 : 0,
            transition: "opacity 1.6s ease 3.7s",
            animation: "delicateGlow 3.5s ease-in-out infinite",
          }}
        >
          ✿ ✿ ✿
        </div>
      </div>

      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Dancing+Script:wght@400;500;600;700&display=swap');

        @keyframes luxuryFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-40px) rotate(6deg) scale(1.15);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-80px) rotate(0deg) scale(0.95);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-40px) rotate(-6deg) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes delicateGlow {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.12);
            filter: brightness(1.3);
          }
        }

        @keyframes ambientPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.12;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.25;
          }
        }

        @keyframes slowRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes backgroundTransition {
          0% {
            background-position: 0% 50%;
            background: radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(186, 230, 253, 0.12) 0%, transparent 50%),
                        linear-gradient(135deg, rgba(248, 245, 240, 0.92) 0%, rgba(224, 242, 254, 0.92) 100%),
                        url("https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80");
          }
          50% {
            background-position: 100% 50%;
            background: radial-gradient(circle at 20% 80%, rgba(186, 230, 253, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.12) 0%, transparent 50%),
                        linear-gradient(135deg, rgba(224, 242, 254, 0.92) 0%, rgba(248, 245, 240, 0.92) 100%),
                        url("https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80");
          }
          100% {
            background-position: 0% 50%;
            background: radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(186, 230, 253, 0.12) 0%, transparent 50%),
                        linear-gradient(135deg, rgba(248, 245, 240, 0.92) 0%, rgba(224, 242, 254, 0.92) 100%),
                        url("https://images.unsplash.com/photo-1515934751633-56e716a1d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80");
          }
        }

        body {
          margin: 0;
          font-smoothing: antialiased;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 480px) {
          .names-container {
            flex-direction: column;
            align-items: center;
          }

          .and-symbol {
            margin: 0.8rem 0;
            transform: rotate(0deg) !important;
          }

          .underline {
            width: 140px !important;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
