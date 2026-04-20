import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectService } from '../store/quoteSlice';
import './Contact.css';

const Contact = () => {
  const dispatch = useDispatch();
  const selectedService = useSelector((state) => state.quote.selectedService);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Obtener los datos del formulario
    const formData = new FormData(e.target);
    
    // IMPORTANTE: Aquí debes poner tu Access Key
    formData.append("access_key", "2d52fbd2-cbbe-4ebb-849e-e381d29a0cf9");
    // Asunto personalizado del correo
    formData.append("subject", "NUEVA COTIZACIÓN - TECNICAM");
    // Correo al que el cliente puede responder directamente
    formData.append("replyto", formData.get("email"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          e.target.reset();
        }, 4000);
      } else {
        console.error("Error enviando datos:", data);
        setStatus('idle');
        alert("Ocurrió un error de nuestro lado. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setStatus('idle');
      alert("Error de conexión. Revisa tu internet e intenta de nuevo.");
    }
  };

  return (
    <section id="contacto" className="contact section-padding">
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <h2>¿Listo para asegurar lo tuyo?</h2>
            <p>Déjanos tus datos y un especialista te contactará para agendar una visita técnica sin costo.</p>
            
            <div className="info-items">
              <div className="info-item">
                <MapPin className="icon" />
                <span>Medellín, Antioquia, Colombia</span>
              </div>
              <div className="info-item">
                <Phone className="icon" />
                <span>+57 313 567 8762</span>
              </div>
              <div className="info-item">
                <Mail className="icon" />
                <span>tecnicamcctv@gmail.com</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="Nombre" placeholder="Ej. Juan Pérez" required />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="Telefono" placeholder="Tu número" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="Email" placeholder="ejemplo@correo.com" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Servicio de Interés</label>
              <select 
                id="service" 
                name="Servicio_Interes"
                value={selectedService}
                onChange={(e) => dispatch(selectService(e.target.value))}
              >
                <option value="camaras">Kits de Cámaras (CCTV/IP)</option>
                <option value="redes">Redes de Internet (Wi-Fi/Cableadas)</option>
                <option value="correctivos">Mantenimientos Correctivos</option>
                <option value="mantenimiento">Mantenimiento Preventivo</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={status === 'loading'}
              style={status === 'success' ? { background: 'linear-gradient(135deg, #10b981, #059669)' } : {}}
            >
              {status === 'idle' && <><Send size={18} /> Enviar Solicitud</>}
              {status === 'loading' && <><Loader2 size={18} className="spin" /> Procesando...</>}
              {status === 'success' && <><CheckCircle size={18} /> Enviado con éxito</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
