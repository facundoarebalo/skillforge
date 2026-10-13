import { useEffect, useState } from 'react';
import { rutasAprendizaje } from '../data/rutasAprendizaje';

const CLAVE_PROGRESO = 'skillforge:niveles-completados';

function leerProgresoGuardado() {
  try {
    const progresoGuardado = JSON.parse(localStorage.getItem(CLAVE_PROGRESO) ?? '[]');
    const identificadoresValidos = rutasAprendizaje.map((ruta) => ruta.identificador);
    return Array.isArray(progresoGuardado)
      ? [...new Set(progresoGuardado.filter((identificador) => identificadoresValidos.includes(identificador)))]
      : [];
  } catch {
    return [];
  }
}

export default function useProgreso() {
  const [nivelesCompletados, establecerNivelesCompletados] = useState(leerProgresoGuardado);

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(nivelesCompletados));
    } catch {
      // El aprendizaje sigue disponible aunque el navegador no permita guardar el avance.
    }
  }, [nivelesCompletados]);

  const completarNivel = (identificador) => {
    establecerNivelesCompletados((nivelesActuales) => (
      nivelesActuales.includes(identificador) ? nivelesActuales : [...nivelesActuales, identificador]
    ));
  };

  const estaDesbloqueado = (identificador) => {
    const indiceRuta = rutasAprendizaje.findIndex((ruta) => ruta.identificador === identificador);
    return indiceRuta === 0 || (indiceRuta > 0 && nivelesCompletados.includes(rutasAprendizaje[indiceRuta - 1].identificador));
  };

  const porcentajeCompletado = Math.round((nivelesCompletados.length / rutasAprendizaje.length) * 100);
  return { nivelesCompletados, completarNivel, estaDesbloqueado, porcentajeCompletado };
}
