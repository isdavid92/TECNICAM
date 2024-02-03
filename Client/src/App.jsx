import { Route, Routes, useLocation } from 'react-router-dom';
import style from './App.module.css';
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Nav from './Componentes/Nav/Nav';
import Servicios from './Componentes/Servicios/Servicios';

function App() {

  const { pathname } = useLocation();

  return (
    <div className={style.App}>
      {
        pathname !== '/' && <Nav/>
      }
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
      </Routes>
    </div>
  );
}

export default App;
