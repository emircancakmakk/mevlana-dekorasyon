// WhatsAppButton.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/903323424355', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div style={styles.whatsAppButton} onClick={handleClick}>
      <i className="fab fa-whatsapp" style={styles.icon}></i>
    </div>
  );
};

const styles = {
  whatsAppButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    zIndex: 1000,
  },
  icon: {
    fontSize: '30px',
  },
};
