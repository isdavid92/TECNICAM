import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import style from './Legal.module.css';

const Privacidad = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style.container}>
            <button className={style.atrasBtn} onClick={() => navigate(-1)}>
                <ArrowLeft size={20} /> Volver
            </button>
            
            <h1 className={style.titulo}>Aviso de Privacidad - TECNICAM</h1>
            
            <section className={style.content}>
                <h2>1. Responsable del Tratamiento</h2>
                <p>
                    TECNICAM, con domicilio en Medellín, Antioquia, es responsable del tratamiento de sus datos personales, 
                    garantizando la protección de los mismos conforme a la Ley 1581 de 2012 de Protección de Datos Personales.
                </p>

                <h2>2. Finalidad de los Datos</h2>
                <p>
                    Los datos recolectados a través de nuestro sitio web y formularios de contacto se utilizarán para:
                    <ul>
                        <li>Gestionar solicitudes de cotización y servicios técnicos.</li>
                        <li>Brindar soporte técnico y atención al cliente.</li>
                        <li>Informar sobre cambios en nuestros servicios o garantías.</li>
                        <li>Gestión administrativa y contable.</li>
                    </ul>
                </p>

                <h2>3. Seguridad de Acceso Remoto</h2>
                <p>
                    En los servicios de instalación de cámaras, TECNICAM configura el acceso remoto siguiendo protocolos de seguridad. 
                    Es responsabilidad del cliente cambiar sus contraseñas tras la entrega del servicio. TECNICAM no almacena 
                    credenciales de acceso a los sistemas de videovigilancia una vez finalizada la configuración.
                </p>

                <h2>4. Derechos del Titular</h2>
                <p>
                    Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales, así como a revocar la 
                    autorización otorgada para el tratamiento de los mismos, mediante comunicación escrita a nuestros canales oficiales.
                </p>

                <h2>5. Contacto</h2>
                <p>
                    Para cualquier consulta relacionada con su privacidad o el tratamiento de sus datos: 
                    <strong> tecnicamcctv@gmail.com</strong>
                </p>
            </section>
        </div>
    );
};

export default Privacidad;