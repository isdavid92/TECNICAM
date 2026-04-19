import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu, closeMobileMenu } from '../store/uiSlice';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/LOGO.png';
import classNames from 'classnames';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => dispatch(toggleMobileMenu());
  const handleLinkClick = () => dispatch(closeMobileMenu());

  return (
    <header className={classNames('navbar', { scrolled })} id="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logoImg} alt="TECNICAM Logo" style={{ height: '46px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 8px var(--primary-glow))' }} />
          <span>TECNICAM</span>
        </div>

        <nav className="nav-links">
          <a href="/#inicio">Inicio</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#nosotros">Por Qué Elegirnos</a>
          <a href="/#contacto">Contacto</a>
        </nav>

        <div className="nav-actions">
          <a href="/#contacto" className="btn btn-primary">Cotizar Ahora</a>
          <button 
            className="mobile-menu-btn" 
            onClick={handleMenuClick} 
            aria-label="Abrir Menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div className={classNames('mobile-menu', { active: isMobileMenuOpen })}>
        <button 
          className="close-menu-btn" 
          onClick={handleMenuClick} 
          aria-label="Cerrar Menú"
        >
          <X size={28} />
        </button>
        <nav className="mobile-nav-links">
          <a href="/#inicio" onClick={handleLinkClick}>Inicio</a>
          <a href="/#servicios" onClick={handleLinkClick}>Servicios</a>
          <a href="/#nosotros" onClick={handleLinkClick}>Por Qué Elegirnos</a>
          <a href="/#contacto" onClick={handleLinkClick}>Contacto</a>
          <a href="/#contacto" className="btn btn-primary mt-4" onClick={handleLinkClick}>
            Cotizar Ahora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
