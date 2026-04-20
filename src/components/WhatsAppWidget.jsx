import React from 'react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  // Número actualizado del cliente
  const phoneNumber = "573135678762"; 
  const message = "Hola TECNICAM, estoy interesado en sus servicios de seguridad y me gustaría recibir más información.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-widget"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="wa-icon"
      >
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.215.58 4.364 1.68 6.26l-1.613 5.867 6.002-1.575a11.96 11.96 0 0 0 5.962 1.587h.005c6.645 0 12.03-5.385 12.03-12.03 0-3.22-1.254-6.246-3.532-8.525A11.97 11.97 0 0 0 12.031 0zm0 22.015h-.005a9.98 9.98 0 0 1-5.086-1.39l-.364-.216-3.776.99.998-3.682-.236-.375a9.966 9.966 0 0 1-1.522-5.31 10.024 10.024 0 0 1 10.02-10.02c2.673 0 5.184 1.042 7.073 2.932a10.005 10.005 0 0 1 2.932 7.086c-.001 5.531-4.502 10.02-10.034 10.02zm5.502-7.519c-.302-.152-1.782-.879-2.06-.98-.276-.1-.479-.15-.68.151-.202.302-.779.98-.955 1.18-.176.202-.352.226-.654.075-.302-.15-1.272-.47-2.423-1.498-.897-.801-1.503-1.79-1.68-2.091-.176-.302-.018-.465.133-.615.135-.134.301-.352.452-.528.15-.175.201-.301.301-.502.1-.201.05-.377-.025-.528-.075-.15-.68-1.637-.932-2.242-.244-.593-.494-.512-.68-.521l-.578-.01c-.201 0-.528.076-.804.377-.276.302-1.055 1.03-1.055 2.511 0 1.482 1.08 2.914 1.23 3.115.15.201 2.122 3.24 5.14 4.542 2.213.953 2.87.854 3.931.706 1.066-.148 3.42-1.396 3.902-2.748.483-1.353.483-2.511.338-2.75-.145-.238-.548-.388-.85-.54z" fill="currentColor"/>
      </svg>
    </a>
  );
};

export default WhatsAppWidget;
