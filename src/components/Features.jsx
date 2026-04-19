import React, { useEffect, useRef } from 'react';
import { Check, Zap, Smartphone } from 'lucide-react';
import './Features.css';

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = sectionRef.current.querySelectorAll('.fade-in-left, .fade-in-right');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="nosotros" className="features section-padding bg-darker" ref={sectionRef}>
      <div className="container features-layout">
        <div className="features-content fade-in-left">
          <h2 className="section-title">Por Qué Elegir <span className="highlight">TECNICAM</span></h2>
          <p className="section-desc">Más de 10 años de experiencia instalando confianza y asegurando el bienestar de miles de familias y negocios locales.</p>
          
          <ul className="features-list">
            <li>
              <div className="feature-bullet">
                <Check className="text-cyan" />
              </div>
              <div className="feature-details">
                <strong>Garantía Extendida</strong>
                <span>Equipos de marcas líderes mundiales con soporte completo.</span>
              </div>
            </li>
            <li>
              <div className="feature-bullet">
                <Zap className="text-cyan" />
              </div>
              <div className="feature-details">
                <strong>Instalación Rápida y Limpia</strong>
                <span>Técnicos calificados que respetan la estética de tus espacios.</span>
              </div>
            </li>
            <li>
              <div className="feature-bullet">
                <Smartphone className="text-cyan" />
              </div>
              <div className="feature-details">
                <strong>Control en tu Mano</strong>
                <span>Configuramos las apps en tus dispositivos móviles antes de irnos.</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="features-image fade-in-right">
          <div className="glass-container">
            <div className="app-ui-mockup">
              <div className="mockup-header">App TECNICAM</div>
              <div className="mockup-cam-grid">
                <div className="mockup-cam" style={{ backgroundImage: "url('/cam_entrada.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="cam-label">Entrada Principal</div>
                  <div className="rec-dot"></div>
                </div>
                <div className="mockup-cam" style={{ backgroundImage: "url('/cam_jardin.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="cam-label">Jardín</div>
                  <div className="rec-dot"></div>
                </div>
                <div className="mockup-cam" style={{ backgroundImage: "url('/cam_garage.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="cam-label">Garage</div>
                  <div className="rec-dot"></div>
                </div>
                <div className="mockup-cam" style={{ backgroundImage: "url('/cam_oficina.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="cam-label">Oficina</div>
                  <div className="rec-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
