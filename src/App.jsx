import Enrutador from './routes/AppRouter';
import BarraDeNavegacion from './components/Navbar';
import useProgreso from './hooks/useProgreso';
import useSesion from './hooks/useSesion';

export default function Aplicacion() {
  const progreso = useProgreso();
  const sesion = useSesion();

  return (
    <div className="min-h-screen bg-zinc-950">
      <BarraDeNavegacion usuario={sesion.usuario} alCerrarSesion={sesion.cerrarSesion} />
      <Enrutador progreso={progreso} sesion={sesion} />
    </div>
  );
}
