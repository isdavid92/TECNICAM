import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import style from './Legal.module.css'; // Asumiendo que creas este CSS

const Terminos = () => {
    const navigate = useNavigate();

    // Efecto para que la página siempre cargue desde arriba
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style.container}>
            <button className={style.atrasBtn} onClick={() => navigate(-1)}>
                <ArrowLeft size={20} /> Volver
            </button>
            
            <h1 className={style.titulo}>Términos y Condiciones - TECNICAM</h1>
            
            <section className={style.content}>
                <h2>1. Descripción del Servicio</h2>
                <p>
                    TECNICAM ofrece servicios de seguridad electrónica, instalación de sistemas de videovigilancia (CCTV e IP), 
                    mantenimiento técnico y soluciones de conectividad.
                </p>

                <h2>2. Prestación del Servicio</h2>
                <p>
                    Toda instalación se realiza bajo estándares técnicos de calidad. El cliente es responsable de facilitar 
                    el acceso a las áreas de trabajo y proporcionar las condiciones eléctricas necesarias.
                </p>

                <h2>3. Garantías</h2>
                <p>
                    Nuestros equipos cuentan con garantía por defectos de fábrica. No se cubren daños por descargas eléctricas, 
                    manipulación por personal no autorizado o mal uso del sistema.
                </p>

                <h2>4. Pagos</h2>
                <p>
                    Los términos de pago se especifican en cada cotización formal. La propiedad de los equipos se transfiere 
                    completamente al cliente una vez se haya liquidado el total del servicio.
                </p>

                <h2>5. Propiedad Intelectual</h2>
                <p>
                    El software de monitoreo remoto es propiedad de sus respectivos desarrolladores. TECNICAM brinda 
                    la configuración para su uso personal o empresarial según las leyes vigentes.
                </p>

                <h2>6. Privacidad</h2>
                <p>
                    La información suministrada por el cliente se utilizará exclusivamente para la gestión de servicios 
                    técnicos y administrativos, garantizando la confidencialidad de los datos de acceso a sus cámaras.
                </p>

                <h2>7. Contacto</h2>
                <p>
                    Para dudas técnicas o legales: <strong>tecnicamcctv@gmail.com</strong>
                </p>
            </section>
        </div>
    );
};

export default Terminos;