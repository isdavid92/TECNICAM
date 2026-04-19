import React, { useEffect, useRef } from 'react';
import { Check, Zap, Smartphone as Device, ArrowLeft, Settings, Film, Camera, Mic, Video, ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
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

  const cameras = [
    { label: 'Entrada Principal', image: '/cam_entrada.png', percent: '14%' },
    { label: 'Jardín', image: '/cam_jardin.png', percent: '13%' },
    { label: 'Garage', image: '/cam_garage.png', percent: '13%' },
    { label: 'Oficina', image: '/cam_oficina.png', percent: '14%' },
  ];

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
                <Device className="text-cyan" />
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
              <div className="mockup-toolbar">
                <button className="mockup-icon"><ArrowLeft size={18} /></button>
                <span className="mockup-title">App TECNICAM</span>
                <button className="mockup-icon"><Settings size={18} /></button>
              </div>

              <div className="mockup-cam-grid">
                {cameras.map(cam => (
                  <div key={cam.label} className="mockup-cam" style={{ backgroundImage: `url('${cam.image}')` }}>
                    <div className="cam-bottom">
                      <span>{cam.label}</span>
                    </div>
                    <div className="rec-dot"></div>
                  </div>
                ))}
              </div>

              <div className="mockup-controls">
                <button className="control-button"><Film size={18} /></button>
                <button className="control-button"><Camera size={18} /></button>
                <button className="control-button control-button--active"><Mic size={24} /></button>
                <button className="control-button"><Video size={18} /></button>
                <button className="control-button"><ImageIcon size={18} /></button>
              </div>
              <div className="mockup-control-arrow">
                <ChevronDown size={22} />
              </div>
              <div className="mockup-alert">
                <div className="alert-left">
                  <span className="alert-icon">🗓</span>
                  <span>Mensaje de alarma</span>
                </div>
                <button className="alert-expand"><ChevronUp size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
