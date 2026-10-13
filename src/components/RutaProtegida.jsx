import { Navigate, useLocation } from 'react-router-dom';

export default function RutaProtegida({ usuario, children }) {
  const ubicacion = useLocation();

  if (!usuario) {
    return <Navigate to="/login" replace state={{ rutaPendiente: ubicacion.pathname }} />;
  }

  return children;
}
