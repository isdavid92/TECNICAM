import { Route, Routes, useLocation } from 'react-router-dom';
import style from './App.module.css';
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Nav from './Componentes/Home/Nav/Nav';

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
      </Routes>
    </div>
  );
}

export default App;
