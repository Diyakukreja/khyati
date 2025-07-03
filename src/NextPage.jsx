
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MemoryWall() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNextPage = () => {
    navigate("/page3");
  };

  const photos = [
    { src: "/Pic1.png" },
    { src: "/Pic2.png" },
    { src: "/Pic3.png" },
    { src: "/Pic4.png" },
    { src: "/Pic5.png" },
    { src: "/Pic6.png" }
  ];

  const styles = {
    page: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      minHeight: '100vh',
      fontFamily: `'Dancing Script', cursive`,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gridGap: isMobile ? '5vh' : '20vh',
      padding: isMobile ? '20px' : '60px',
      flex: 1,
      justifyItems: 'center'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '14px',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      width: isMobile ? '80%' : '230px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      border: '1px solid #eee'
    },
    image: {
      width: '100%',
      borderRadius: '10px'
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {photos.map((photo, index) => (
          <div key={index} style={styles.card}>
            <img src={photo.src} alt="memory" style={styles.image} />
          </div>
        ))}
      </div>
      <div style={{
        fontSize: isMobile ? '5vh' : '9vh',
        fontFamily: `'Dancing Script', cursive`,
        color: '#fff',
        textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
        padding: '20px',
        textAlign: 'center'
      }}>
        My <br />
        Beautiful <br />
        Human <br />
        Being 💫 <br />
        <div style={{ fontSize: isMobile ? '2vh' : '3vh' }}>🌸✨💛🌈🥹</div>
        <button 
          onClick={goToNextPage}
          style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            cursor: 'pointer',
            animation: 'bounce 1.5s infinite',
            background: 'transparent',
            border: 'none',
            color: 'white',
            marginTop: '20px'
          }}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}