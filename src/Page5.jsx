import React, { useState } from 'react';

export default function FriendshipContract() {
  const [friend1, setFriend1] = useState('');
  const [friend2, setFriend2] = useState('');
  const [contractVisible, setContractVisible] = useState(false);
  const [signed, setSigned] = useState(false);

  const contractLines = [
    'We are going to be there for each other, until this world ends.',
    'We are going to share our thoughts no matter what.',
    'Even if I say "leave me", don’t — because I always say bullshit when I’m angry and you know my anger.',
    'I am always before Radhika, sorry but it has to be 😄.',
    'I want to know each and everything about you.',
    'We are going to be there for each other in our hard times.',
    'And you are not going to judge me for whatever crushes I had or will have.',
    'I LOVE YOUUUU 💖',
  ];

  const generateContract = () => {
    if (friend1 && friend2) {
      setContractVisible(true);
      setSigned(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Quicksand", sans-serif',
    padding: '2rem',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#e91e63',
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const inputContainer = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2rem',
  };

  const inputStyle = {
    padding: '0.6rem 1rem',
    border: '2px solid #ffd1dc',
    borderRadius: '10px',
    fontSize: '1rem',
    outline: 'none',
    
    width: '200px',
  };

  const buttonStyle = {
    backgroundColor: '#e91e63',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1rem',
    fontSize: '1rem',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const contractCardStyle = {
    backgroundColor: '#222',
    color: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    width: '90%',
    maxWidth: '700px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    animation: 'fadeIn 0.7s ease-in',
    textAlign: 'left',
  };

  const ulStyle = {
    marginTop: '1rem',
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
  };

  const signBtnStyle = {
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    padding: '0.7rem 1.3rem',
    fontSize: '1rem',
    marginTop: '1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const signedTextStyle = {
    marginTop: '1.5rem',
    fontSize: '1.2rem',
    color: '#7dff94',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🤝 Friendship Contract Generator</h1>

      <div style={inputContainer}>
        <input
          type="text"
          placeholder="Your Name"
          value={friend1}
          onChange={(e) => setFriend1(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Friend's Name"
          value={friend2}
          onChange={(e) => setFriend2(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={generateContract}>
          Generate Contract
        </button>
      </div>

      {contractVisible && (
        <div style={contractCardStyle}>
          <h2 style={{ textAlign: 'center' }}>✨ Official Friendship Contract ✨</h2>
          <p style={{ textAlign: 'center' }}>
            This contract is between <strong>{friend1}</strong> and{' '}
            <strong>{friend2}</strong>.
          </p>
          <p style={{ marginTop: '1rem' }}>
            We hereby agree to the following terms of eternal friendship:
          </p>
          <ul style={ulStyle}>
            {contractLines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>

          {!signed ? (
            <div style={{ textAlign: 'center' }}>
              <button style={signBtnStyle} onClick={() => setSigned(true)}>
                ✍️ Sign the Contract
              </button>
            </div>
          ) : (
            <p style={signedTextStyle}>✅ Signed & sealed with unconditional love  by Khyati & Muskaan💞</p>
          )}
        </div>
      )}
    </div>
  );
}