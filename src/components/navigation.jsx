import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="menu" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src="img/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="nav-wrapper">
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setIsOpen(false)}>Hakkımızda</a>
            <a href="#products" onClick={() => setIsOpen(false)}>Ürünler</a>
            <a href="#gallery" onClick={() => setIsOpen(false)}>Galeri</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>İletişim</a>
          </div>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};