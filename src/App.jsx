import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TypewriterText({ text, speed = 100, fontSize = '1.2rem' }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <h3 style={{ color: "#fff", marginTop: "20px", fontWeight: 400, fontSize }}>{displayedText}</h3>;
}

export default function App() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNextPage = () => {
    navigate("/page2");
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url('./sunflower1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: isMobile ? '10px' : '20px',
        position: 'relative',
      }}
    >
      <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: '0.5rem' }}>To My Best Friend</h1>
      <TypewriterText 
        text="Every petal, like every memory — beautiful, gentle, and blooming with you 🌻" 
        speed={70}
        fontSize={isMobile ? '1rem' : '1.2rem'}
      />

      
      <div
        onClick={goToNextPage}
        style={{
          position: "absolute",
          bottom: "30px",
          fontSize: isMobile ? "1.5rem" : "2rem",
          cursor: "pointer",
          animation: "bounce 1.5s infinite",
        }}
      >
        ⬇️
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
