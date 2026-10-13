import TarjetaRuta from '../../components/TarjetaRuta';
import { rutasAprendizaje } from '../../data/rutasAprendizaje';

export default function Aprender({ progreso }) {
  const { nivelesCompletados, estaDesbloqueado, porcentajeCompletado } = progreso;
  const siguienteRuta = rutasAprendizaje.find((ruta) => (
    !nivelesCompletados.includes(ruta.identificador) && estaDesbloqueado(ruta.identificador)
  ));

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-10">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Tu camino de aprendizaje</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Aprendé creando, nivel a nivel.</h1>
        <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">Empezá por las herramientas y avanzá hasta construir interfaces interactivas con React.</p>
      </header>

      <section className="mt-9 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7" aria-label="Resumen de progreso">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4 text-sm">
            <h2 className="font-semibold text-white">Tu progreso</h2>
            <span className="shrink-0 text-zinc-400">{nivelesCompletados.length} de {rutasAprendizaje.length} niveles</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800" role="progressbar" aria-label="Progreso total" aria-valuemin="0" aria-valuemax="100" aria-valuenow={porcentajeCompletado}>
            <div className="h-full rounded-full bg-violet-300 transition-[width] duration-500" style={{ width: `${porcentajeCompletado}%` }} />
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-400 sm:mt-0 sm:max-w-64">
          {siguienteRuta ? <>Siguiente paso: <span className="font-medium text-white">{siguienteRuta.categoria}</span></> : '¡Completaste todos los niveles!'}
        </p>
      </section>

      <section className="mt-10 sm:mt-14" aria-labelledby="rutas-title">
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">
          <div>
            <h2 id="rutas-title" className="text-xl font-semibold text-white sm:text-2xl">Tu ruta</h2>
            <p className="mt-1 text-sm text-zinc-500">Cada práctica abre la puerta al próximo nivel.</p>
          </div>
          <span className="text-sm text-zinc-500">{porcentajeCompletado}%</span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {rutasAprendizaje.map((ruta) => (
            <TarjetaRuta
              key={ruta.identificador}
              ruta={ruta}
              completada={nivelesCompletados.includes(ruta.identificador)}
              desbloqueada={estaDesbloqueado(ruta.identificador)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
