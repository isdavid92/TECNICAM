import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/LOGO.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="logo">
            <img src={logoImg} alt="TECNICAM Logo" style={{ height: '46px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 8px var(--primary-glow))' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '1px' }}>TECNICAM</span>
          </div>
          <p>Tu aliado estratégico en seguridad electrónica y videovigilancia de alta tecnología.</p>
        </div>
        
        <div className="footer-col links">
          <h4>Enlaces Rápidos</h4>
          <a href="/#inicio">Inicio</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#nosotros">Nosotros</a>
        </div>
        
        <div className="footer-col links">
          <h4>Legal</h4>
          <Link to="/terminos">Términos y Condiciones</Link>
          <Link to="/privacidad">Aviso de Privacidad</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 TECNICAM. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
