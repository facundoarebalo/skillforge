import { Link } from 'react-router-dom';
import { rutasAprendizaje } from '../../data/rutasAprendizaje';

export default function Perfil({ progreso, usuario }) {
  const { nivelesCompletados, estaDesbloqueado, porcentajeCompletado } = progreso;
  const siguienteRuta = rutasAprendizaje.find((ruta) => (
    !nivelesCompletados.includes(ruta.identificador) && estaDesbloqueado(ruta.identificador)
  ));

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-10">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Tu espacio</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Hola, {usuario.nombre.split(' ')[0]}.</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">Por ahora, tu avance queda guardado en este navegador. Más adelante podemos sumar cuentas para que cada estudiante tenga su propio perfil.</p>
      </header>
      <section className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5" aria-label="Resumen de aprendizaje">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
          <p className="text-sm text-zinc-400">Niveles completados</p>
          <p className="mt-3 text-3xl font-bold text-white">{nivelesCompletados.length}<span className="text-lg font-medium text-zinc-500"> / {rutasAprendizaje.length}</span></p>
        </article>
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
          <p className="text-sm text-zinc-400">Avance total</p>
          <p className="mt-3 text-3xl font-bold text-white">{porcentajeCompletado}<span className="text-lg font-medium text-zinc-500">%</span></p>
        </article>
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
          <p className="text-sm text-zinc-400">Próximo nivel</p>
          <p className="mt-3 text-xl font-semibold text-white">{siguienteRuta?.categoria ?? '¡Ruta completa!'}</p>
        </article>
      </section>
      <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:mt-12 sm:p-7" aria-labelledby="niveles-title">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="niveles-title" className="text-xl font-semibold text-white">Tu recorrido</h2>
            <p className="mt-1 text-sm text-zinc-400">Cada paso te acerca a construir proyectos más completos.</p>
          </div>
          <Link className="inline-flex min-h-11 items-center text-sm font-semibold text-violet-200 hover:text-white" to="/learn">Ver todos los niveles <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
        <ol className="mt-6 divide-y divide-zinc-800">
          {rutasAprendizaje.map((ruta) => {
            const completada = nivelesCompletados.includes(ruta.identificador);
            const desbloqueada = estaDesbloqueado(ruta.identificador);
            return (
              <li key={ruta.identificador} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <span className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold ${completada ? 'bg-emerald-400/10 text-emerald-300' : 'bg-zinc-800 text-zinc-400'}`}>{completada ? '✓' : ruta.nivel}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">{ruta.categoria}</p>
                  <p className="mt-1 text-sm text-zinc-500">{completada ? 'Completado' : desbloqueada ? 'Disponible' : 'Bloqueado'}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
