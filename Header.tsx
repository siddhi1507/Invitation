import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        background:
          "linear-gradient(135deg, rgba(223, 182, 151, 0.95) 0%, rgba(194, 140, 106, 0.95) 25%, rgba(139, 111, 78, 0.95) 50%, rgba(82, 67, 50, 0.95) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        position: "relative",
        overflow: "hidden",
        boxShadow:
          "inset 0 0 200px rgba(139, 111, 78, 0.4), 0 20px 60px rgba(0, 0, 0, 0.5)",
        borderBottom: "4px solid rgba(255, 255, 255, 0.3)",
        minHeight: "55vh",
      }}
    >
      {/* Elegant Floating Petals */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            background: `linear-gradient(45deg, ${
              ["#f8fafc", "#fef7cd", "#fde68a", "#f3e8ff", "#fce7f3"][
                Math.floor(Math.random() * 5)
              ]
            }, rgba(255, 255, 255, 0.8))`,
            width: `${Math.random() * 15 + 8}px`,
            height: `${Math.random() * 15 + 8}px`,
            borderRadius: `${Math.random() * 50 + 30}% ${
              Math.random() * 50 + 30
            }% ${Math.random() * 50 + 30}% ${Math.random() * 50 + 30}%`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.7,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `floatPetals ${
              Math.random() * 8 + 6
            }s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
            filter: "drop-shadow(0 3px 8px rgba(139, 111, 78, 0.3))",
            boxShadow: "inset 0 1px 3px rgba(255, 255, 255, 0.5)",
          }}
        />
      ))}

      {/* Decorative Corner Flourishes */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          fontSize: "3rem",
          color: "#f8fafc",
          opacity: 0.6,
          animation: "gentleGlow 3s ease-in-out infinite",
          textShadow: "0 0 20px rgba(248, 250, 252, 0.5)",
        }}
      >
        ❈
      </div>
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          fontSize: "3rem",
          color: "#f8fafc",
          opacity: 0.6,
          animation: "gentleGlow 3s ease-in-out infinite 1s",
          textShadow: "0 0 20px rgba(248, 250, 252, 0.5)",
        }}
      >
        ❈
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          fontSize: "3rem",
          color: "#f8fafc",
          opacity: 0.6,
          animation: "gentleGlow 3s ease-in-out infinite 2s",
          textShadow: "0 0 20px rgba(248, 250, 252, 0.5)",
        }}
      >
        ❈
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          fontSize: "3rem",
          color: "#f8fafc",
          opacity: 0.6,
          animation: "gentleGlow 3s ease-in-out infinite 0.5s",
          textShadow: "0 0 20px rgba(248, 250, 252, 0.5)",
        }}
      >
        ❈
      </div>

      {/* Premium Geometric Shapes */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "120px",
          height: "120px",
          border: "3px solid rgba(248, 250, 252, 0.2)",
          transform: "rotate(45deg)",
          animation: "slowRotate 20s linear infinite",
          borderRadius: "20px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "8%",
          width: "80px",
          height: "80px",
          border: "2px solid rgba(248, 250, 252, 0.15)",
          borderRadius: "50%",
          animation: "slowRotate 25s linear infinite reverse",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Elegant Decorative Line Above Title */}
        <div
          style={{
            width: "200px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #f8fafc, transparent)",
            margin: "0 auto 2rem",
            position: "relative",
            animation: "slideIn 1.8s ease-out",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "14px",
              height: "14px",
              background: "#f8fafc",
              borderRadius: "50%",
              boxShadow: "0 0 20px rgba(248, 250, 252, 0.6)",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
            margin: 0,
            color: "#f8fafc",
            textShadow:
              "4px 4px 12px rgba(82, 67, 50, 0.8), 0 0 30px rgba(248, 250, 252, 0.3)",
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 300,
            lineHeight: 1.1,
            animation: "luxuryFadeIn 2s ease-out",
            letterSpacing: "3px",
            position: "relative",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-35px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2.5rem",
              color: "#fef7cd",
              animation: "delicateFloat 4s ease-in-out infinite",
              textShadow: "0 0 25px rgba(254, 247, 205, 0.8)",
            }}
          >
            ✧
          </span>
          Engagement Ceremony
          <span
            style={{
              position: "absolute",
              bottom: "-35px",
              right: "50%",
              transform: "translateX(50%)",
              fontSize: "2.5rem",
              color: "#fef7cd",
              animation: "delicateFloat 4s ease-in-out infinite 2s",
              textShadow: "0 0 25px rgba(254, 247, 205, 0.8)",
            }}
          >
            ✧
          </span>
        </h1>

        {/* Elegant Decorative Line Below Title */}
        <div
          style={{
            width: "150px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #f8fafc, transparent)",
            margin: "2rem auto",
            animation: "slideIn 2s ease-out 0.5s",
            opacity: 0.7,
          }}
        />

        <p
          style={{
            fontSize: "clamp(1.5rem, 4.5vw, 2.2rem)",
            marginTop: "2rem",
            color: "#f8fafc",
            fontFamily: "'Cormorant Garamond', 'Lora', serif",
            fontWeight: 400,
            fontStyle: "italic",
            textShadow: "3px 3px 8px rgba(82, 67, 50, 0.6)",
            animation: "luxuryFadeInUp 2.2s ease-out 0.6s forwards",
            opacity: 0,
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
            letterSpacing: "1px",
          }}
        >
          Hamare parivaar ki khushi mein shamil hoiye
        </p>

        {/* Family Invitation Message */}
        <div
          style={{
            marginTop: "3rem",
            opacity: 0,
            animation: "luxuryFadeInUp 2.5s ease-out 1s forwards",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "15px",
            padding: "2.5rem 2rem",
            maxWidth: "800px",
            margin: "3rem auto 0",
            boxShadow: "0 8px 32px rgba(82, 67, 50, 0.3)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
              color: "#f8fafc",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              lineHeight: 1.8,
              margin: "0 0 1.5rem 0",
              textShadow: "2px 2px 6px rgba(82, 67, 50, 0.6)",
            }}
          >
            आपकी उपस्थिति हमारे लिए अत्यंत महत्वपूर्ण है
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2.8vw, 1.3rem)",
              color: "rgba(248, 250, 252, 0.9)",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              lineHeight: 1.7,
              margin: "0 0 1.5rem 0",
              textShadow: "1px 1px 4px rgba(82, 67, 50, 0.5)",
            }}
          >
            Your presence will make this occasion more special
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
              color: "rgba(248, 250, 252, 0.85)",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.6,
              margin: 0,
              textShadow: "1px 1px 4px rgba(82, 67, 50, 0.5)",
            }}
          >
            कृपया अपना आशीर्वाद देकर इस पावन अवसर को यादगार बनाएं
          </p>
        </div>


        {/* Premium Quote Section */}
        <div
          style={{
            marginTop: "3rem",
            opacity: 0,
            animation: "luxuryFadeIn 2.5s ease-out 1.2s forwards",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(248, 250, 252, 0.8)",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              letterSpacing: "1px",
              textShadow: "1px 1px 4px rgba(82, 67, 50, 0.5)",
              margin: 0,
            }}
          >
            "Do dilon ka milna, do parivaaron ka ek hona"
          </p>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "rgba(248, 250, 252, 0.5)",
              margin: "1rem auto",
            }}
          />
        </div>
      </div>

      {/* Premium CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');

        @keyframes floatPetals {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-30vh) rotate(90deg) scale(1.1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-60vh) rotate(180deg) scale(0.9);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-90vh) rotate(270deg) scale(1.2);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg) scale(1);
            opacity: 0;
          }
        }

        @keyframes luxuryFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes luxuryFadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes delicateFloat {
          0% {
            transform: translateX(-50%) translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-50%) translateY(-15px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(0) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes gentleGlow {
          0% {
            transform: scale(1);
            opacity: 0.6;
            text-shadow: 0 0 20px rgba(248, 250, 252, 0.5);
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
            text-shadow: 0 0 30px rgba(248, 250, 252, 0.8);
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
            text-shadow: 0 0 20px rgba(248, 250, 252, 0.5);
          }
        }

        @keyframes premiumPulse {
          0% {
            box-shadow: 0 10px 40px rgba(82, 67, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 15px 50px rgba(82, 67, 50, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          100% {
            box-shadow: 0 10px 40px rgba(82, 67, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes luxuryBounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 200px;
          }
        }

        @keyframes slowRotate {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(405deg);
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @media (max-width: 768px) {
          header {
            padding: 6rem 1.5rem;
            min-height: 90vh;
          }
        }

        @media (max-width: 480px) {
          header {
            padding: 4rem 1rem;
            min-height: 80vh;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;