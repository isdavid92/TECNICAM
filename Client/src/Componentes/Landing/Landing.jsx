import style from './Landing.module.css';
import logo from '../../Assets/Img/logo.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className={style.Landing}>
            <div className={style.info}>
                <h1 className={style.bienvenido}>BIENVENIDO</h1>
                <img src={logo} className={style.logo} />
                <h3 className={style.seguridad}>Seguridad electrónica a tu alcance...</h3>
            </div>
            <div className={style.divBoton} >
                <div className={style.boton} onClick={() => navigate('/home')}>Iniciar</div>
            </div>
        </div>
    )
};

export default Landing