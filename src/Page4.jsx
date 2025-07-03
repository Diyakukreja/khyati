import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Emotions() {
    const Navigate=useNavigate();
    const goToNextPage=()=>{
        Navigate("/page5");
    }
  const [flipped, setFlipped] = useState(Array(9).fill(false));

  const emotions = [
    {
      label: "Sad",
      img: "SADD.jpeg",
      message:
       ` Hey, I know it’s a tough day. Just remember, even clouds can’t hide the sun forever. You are stronger than you feel right now, and better days are coming
         2) Hey why are you sad? You are not supposed to be sad, you are supposed to be happy. 
         who made you sad huh????????`

    },
    {
      label: "Happy",
      img: "Happy.jpeg",
      message:
        "Hold onto this feeling, it’s golden! Your happiness is contagious, so spread it like sunshine ☀️🫶",
    },
    {
      label: "Anxiety",
      img: "Anxiety.jpeg",
      message:
`        Breathe in. Breathe out. You’ve survived 100% of your hardest days. Let this be one more you conquer. I'm right here, cheering silently for you 💛
Calm down , just calm down, nothing is wrong, kanha hai sath mein, kuch bhi nahi hoga.,
`    },
    {
      label: "Scared",
      img: "Scared.jpeg",
      message:
        "It’s okay to be scared. But don’t forget — fear is just excitement without breath. You've got this, even if your hands are shaking 🫂",
    },
    {
      label: "Disgust",
      img: "dosgust.jpeg",
      message:
`            Not everything deserves a reaction. Protect your peace, and remember, you always have the choice to walk away 💅
it would be radhika who made you disgusted.....,
`    },
    {
      label: "Anger",
      img: "Anger.jpeg",
      message:
        "Let that fire in your chest burn bright but not wild. You're allowed to feel, but don’t let it consume your heart. Deep breaths, warrior 🔥",
    },
    {
      label: "Healing",
      img: "Healing.jpeg",
      message:
`        Healing isn’t linear. Every scar is a story of survival. You’re blooming, slowly and beautifully 🌷✨
you are healing, you are healing, you are healing, you are healing, you are healing,
`    },
  ];

  const cardStyle = (index) => ({
    width: '180px',
    height: '230px',
    perspective: '1000px',
    transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (5 + index * 2)}deg)`,
    cursor: 'pointer',
  });

  const innerStyle = (isFlipped) => ({
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
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    backfaceVisibility: 'hidden',
  };

  const frontStyle = (img) => ({
    ...sideStyle,
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

  const backStyle = {
    ...sideStyle,
    
    transform: 'rotateY(180deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#4b2e2e',
  };

  const toggleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  return (
    <>
    <h1>For you when you are not okay....I guess</h1>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      minHeight: '70vh',
      
      padding: '50px 20px',
      fontFamily: `'Dancing Script', cursive`,
    }}>
      {emotions.map((emo, index) => (
        <div
          key={index}
          style={cardStyle(index)}
          onClick={() => toggleFlip(index)}
        >
          <div style={innerStyle(flipped[index])}>
            <div style={frontStyle(emo.img)}></div>
            <div style={backStyle}>{emo.message}</div>
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
            fontSize: "2rem",
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
