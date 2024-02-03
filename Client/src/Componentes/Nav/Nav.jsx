import { useNavigate } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {

    const navigate = useNavigate();

    return(
        <div className={style.ContNav}>
            <div className={style.Nav}>
                <h2 className={style.h2} onClick={() => navigate('/home')}>Inicio</h2>
                <h2 className={style.h2} onClick={() => navigate('/servicios')}>Servicios</h2>
                <h2 className={style.h2} onClick={() => navigate('/')}>Cotizar servicio</h2>
                <h2 className={style.h2} onClick={() => navigate('/')}>Acerca de TECNICAMcctv</h2>
                <h2 className={style.h2} onClick={() => navigate('/')}>Iniciar sesión</h2>
            </div>
        </div>
    )
};

export default Nav