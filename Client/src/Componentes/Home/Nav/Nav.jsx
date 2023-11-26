import style from './Nav.module.css';

const Nav = () => {
    return(
        <div className={style.ContNav}>
            <div className={style.Nav}>
                <h2 className={style.h2}>Inicio</h2>
                <h2 className={style.h2}>Servicios</h2>
                <h2 className={style.h2}>Cotizar servicio</h2>
                <h2 className={style.h2}>Acerca de TECNICAMcctv</h2>
                <h2 className={style.h2}>Iniciar sesión</h2>
            </div>
        </div>
    )
};

export default Nav