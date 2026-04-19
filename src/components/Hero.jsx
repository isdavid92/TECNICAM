import React, { useEffect, useRef } from 'react';
import { ArrowRight, Video } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = heroRef.current.querySelectorAll('.fade-up, .fade-in-right');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      
      <div className="container hero-content">
        <div className="badge fade-up">Tecnología de Punta 2026</div>
        
        <h1 className="hero-title fade-up" style={{ animationDelay: '0.1s' }}>
          Seguridad Inteligente para <span className="highlight">Tu Tranquilidad</span>
        </h1>
        
        <p className="hero-subtitle fade-up" style={{ animationDelay: '0.2s' }}>
          Sistemas de videovigilancia de alta definición con monitoreo 24/7 en tiempo real desde tu smartphone. Asegura tu hogar y tu negocio con expertos.
        </p>
        
        <div className="hero-cta fade-up" style={{ animationDelay: '0.3s' }}>
          <a href="#contacto" className="btn btn-primary btn-large">
            Solicita tu Asesoría Gratuita
            <ArrowRight size={20} />
          </a>
          <a href="#servicios" className="btn btn-outline btn-large">
            Ver Servicios
          </a>
        </div>
        
        <div className="hero-stats fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Tiempo Activo</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Soporte Técnico</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">4K</span>
            <span className="stat-label">Resolución Máxima</span>
          </div>
        </div>
      </div>
      
      <div className="hero-camera-container fade-in-right">
        {/* Usamos un div redondo temporal para simular la cámara si no importamos la imagen en vite */}
        <div style={{width: '300px', height: '300px', backgroundColor: '#1e293b', borderRadius: '50%', border: '4px solid #00e1ff', boxShadow: '0 0 50px rgba(0, 225, 255, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <div style={{width: '100px', height: '100px', backgroundColor: '#0f172a', borderRadius: '50%', border: '2px solid #334155'}}></div>
        </div>
        
        <div className="glow-orb blue"></div>
        <div className="glow-orb cyan"></div>
        
        <div className="floating-glass-card">
          <div className="card-header">
            <Video className="text-cyan" size={16} />
            <span>Cámara Frontal HD</span>
          </div>
          <div className="card-body">
            <div className="status-indicator">
              <span className="pulse-dot"></span> Grabando
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
