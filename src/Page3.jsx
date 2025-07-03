import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page3() {
  const navigate = useNavigate();
  const goToNextPage = () => navigate('/page4');

  const [flipped, setFlipped] = useState(Array(10).fill(false));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const messages = [
    "You were always there even when I didn’t ask for help.💛",
    "Every memory with you is a page I want to reread forever. 📖",
    "You saw me at my worst and never left.🌙",
    "You’re the sunshine to my cloudy days. ☀️",
    "With you, silence is comforting.🤍",
    "You gave meaning to my mess.🌼",
    "Forever grateful for your existence. 🌈",
    "You are not just a chapter; you're the whole story. ✨",
    "I'm nothing without you ❤️ - Shivam.",
    "You don't know how much you mean to me. 🤗",
  ];

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isMobile ? '15px' : '30px',
    padding: '20px',
    fontFamily: `'Dancing Script', cursive`,
  };

  const memoryBoxStyle = {
    width: isMobile ? '120px' : '160px',
    height: isMobile ? '120px' : '160px',
    perspective: '1000px',
    cursor: 'pointer',
  };

  const boxInnerStyle = (isFlipped) => ({
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s',
    transform: isFlipped ? 'rotateY(180deg)' : 'none',
  });

  const sideStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    backfaceVisibility: 'hidden',
  };

  const frontStyle = {
    ...sideStyle,
    backgroundColor: '#fff4e6',
    border: '2px dashed #ffd6a5',
  };

  const backStyle = {
    ...sideStyle,
    backgroundColor: '#ffd6a5',
    color: '#5b342e',
    transform: 'rotateY(180deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    textAlign: 'center',
    fontSize: isMobile ? '0.9rem' : '1.1rem',
  };

  const toggleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: isMobile ? '1.5rem' : '2rem' }}>Some beautiful messages for you 🩷</h1>
      <div style={containerStyle}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={memoryBoxStyle}
            onClick={() => toggleFlip(index)}
          >
            <div style={boxInnerStyle(flipped[index])}>
              <div style={frontStyle}></div>
              <div style={backStyle}>{msg}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={goToNextPage}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          fontSize: isMobile ? "1.5rem" : "2rem",
          cursor: "pointer",
          animation: "bounce 1.5s infinite",
          zIndex: 1000
        }}
      >
        ➡️
      </div>
    </>
  );
}