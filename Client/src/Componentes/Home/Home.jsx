import style from './Home.module.css';
import familia from '../../Assets/Img/familia.png';
import familiaSom from '../../Assets/Img/familiaSombra.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className={style.Home}>
            <div className={style.unoSombra}>
                <h1 className={style.llegoSombra}>Llegó el momento de...</h1>
                <img src={familiaSom} alt="familia" className={style.familiaSom} />
            </div>
            <div className={style.uno}>
                <h1 className={style.llego}>Llegó el momento de...</h1>
                <img src={familia} alt="familia" className={style.familia} />
            </div>
            <div className={style.dosSom}>
                <h1 className={style.vivirSom}>vivir con</h1>
                <h1 className={style.seguridadSom}>seguridad</h1>
                <div className={style.notaSom}>
                    <h2 className={style.conoceSom}>Conoce nuestros</h2>
                    <h2 className={style.serviciosSom}>Servicios</h2>
                </div>
            </div>
            <div className={style.dos}>
                <h1 className={style.vivir}>vivir con</h1>
                <h1 className={style.seguridad}>seguridad</h1>
                <div className={style.nota}>
                    <h2 className={style.conoce}>Conoce nuestros</h2>
                    <h2 className={style.servicios} onClick={() => navigate('/servicios')}>Servicios</h2>
                </div>
            </div>
        </div>
    )
};

export default Home