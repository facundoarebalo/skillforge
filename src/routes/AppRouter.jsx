import { Route, Routes } from 'react-router-dom';

import Inicio from '../pages/Home/Home';
import Aprender from '../pages/Learn/Learn';
import Leccion from '../pages/Lesson/Lesson';
import Perfil from '../pages/Profile/Profile';
import IniciarSesion from '../pages/Login/Login';
import RutaProtegida from '../components/RutaProtegida';

export default function Enrutador({ progreso, sesion }) {
  return (
    <Routes>
      <Route path="/" element={<Inicio usuario={sesion.usuario} />} />
      <Route path="/learn" element={<RutaProtegida usuario={sesion.usuario}><Aprender progreso={progreso} /></RutaProtegida>} />
      <Route path="/lesson/:rutaId" element={<RutaProtegida usuario={sesion.usuario}><Leccion progreso={progreso} /></RutaProtegida>} />
      <Route path="/login" element={<IniciarSesion usuario={sesion.usuario} alIniciarSesion={sesion.iniciarSesion} />} />
      <Route path="/profile" element={<RutaProtegida usuario={sesion.usuario}><Perfil progreso={progreso} usuario={sesion.usuario} /></RutaProtegida>} />
    </Routes>
  );
}
