import { useEffect, useState } from 'react';
import usuarioPrueba from '../data/usuarioPrueba.json';

const CLAVE_SESION = 'skillforge:usuario';

function leerSesionGuardada() {
  try {
    const sesionGuardada = JSON.parse(localStorage.getItem(CLAVE_SESION) ?? 'null');
    if (sesionGuardada?.identificador === usuarioPrueba.identificador) return sesionGuardada;
  } catch {
    // La aplicación también funciona cuando el navegador no permite guardar datos.
  }
  return null;
}

export default function useSesion() {
  const [usuario, establecerUsuario] = useState(leerSesionGuardada);

  useEffect(() => {
    try {
      if (usuario) localStorage.setItem(CLAVE_SESION, JSON.stringify(usuario));
      else localStorage.removeItem(CLAVE_SESION);
    } catch {
      // La sesión simulada sigue activa hasta recargar la página.
    }
  }, [usuario]);

  const iniciarSesion = (correo, contrasena) => {
    const credencialesValidas = correo.trim().toLowerCase() === usuarioPrueba.correo
      && contrasena === usuarioPrueba.contrasena;
    if (!credencialesValidas) return false;

    const { identificador, nombre, correo: correoUsuario, avatar } = usuarioPrueba;
    establecerUsuario({ identificador, nombre, correo: correoUsuario, avatar });
    return true;
  };

  const cerrarSesion = () => establecerUsuario(null);
  return { usuario, iniciarSesion, cerrarSesion };
}
