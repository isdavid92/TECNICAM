import React, { useEffect, useRef } from 'react';
import { Cctv, Wrench, ChevronRight, Wifi, Settings } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectService } from '../store/quoteSlice';
import classNames from 'classnames';
import './Services.css';

const Services = () => {
  const dispatch = useDispatch();
  const selectedService = useSelector((state) => state.quote.selectedService);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = sectionRef.current.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleServiceClick = (serviceId) => {
    dispatch(selectService(serviceId));
    // Optional scroll to contact
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  };

  const serviceData = [
    {
      id: 'camaras',
      title: 'Instalación de Cámaras',
      text: 'Sistemas CCTV Full HD e IP con visión nocturna, adaptados para interior y exterior. Visualiza todo desde tu celular.',
      icon: <Cctv size={32} />,
      delay: '0s'
    },
    {
      id: 'redes',
      title: 'Redes de Internet',
      text: 'Diseño, configuración e instalación de redes cableadas e inalámbricas (Wi-Fi) de alta velocidad, garantizando conectividad estable y segura.',
      icon: <Wifi size={32} />,
      delay: '0.1s'
    },
    {
      id: 'correctivos',
      title: 'Mantenimientos Correctivos',
      text: 'Diagnóstico y reparación ágil de fallas en sistemas de seguridad o redes, asegurando la rápida restauración y operatividad de tus equipos.',
      icon: <Settings size={32} />,
      delay: '0.2s'
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento Preventivo',
      text: 'Servicio técnico especializado para cámaras, grabadores (DVR/NVR) y cableado para asegurar un funcionamiento óptimo continuo.',
      icon: <Wrench size={32} />,
      delay: '0.3s'
    }
  ];

  return (
    <section id="servicios" className="services section-padding" ref={sectionRef}>
      <div className="container section-header fade-up">
        <h2 className="section-title">Nuestros <span className="highlight">Servicios</span></h2>
        <p className="section-desc">Ofrecemos soluciones integrales adaptadas a las necesidades específicas de tu hogar o empresa, utilizando siempre los mejores equipos del mercado.</p>
      </div>
      
      <div className="container services-grid">
        {serviceData.map((service) => (
          <div 
            key={service.id}
            className={classNames('service-card fade-up', { selected: selectedService === service.id })} 
            style={{ animationDelay: service.delay }}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.text}</p>
            <div className="service-link">Seleccionar Cotización <ChevronRight size={16} /></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
