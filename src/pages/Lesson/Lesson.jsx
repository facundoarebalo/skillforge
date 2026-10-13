import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { rutasAprendizaje } from '../../data/rutasAprendizaje';

export default function Leccion({ progreso }) {
  const { rutaId } = useParams();
  const navegar = useNavigate();
  const ruta = rutasAprendizaje.find((elemento) => elemento.identificador === rutaId);

  if (!ruta || !progreso.estaDesbloqueado(ruta.identificador) || !ruta.practica) {
    return <Navigate to="/learn" replace />;
  }

  const completarPractica = () => {
    progreso.completarNivel(ruta.identificador);
    navegar('/learn');
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
      <Link to="/learn" className="inline-flex min-h-10 items-center text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"><span className="mr-2" aria-hidden="true">←</span> Volver a la ruta</Link>
      <header className="mt-8 border-b border-zinc-800 pb-8 sm:mt-10 sm:pb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Nivel {ruta.nivel} · {ruta.categoria}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">{ruta.titulo}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">{ruta.practica.descripcion}</p>
      </header>
      <section className="mt-8 sm:mt-10" aria-labelledby="pasos-title">
        <h2 id="pasos-title" className="text-xl font-semibold text-white sm:text-2xl">Manos a la obra</h2>
        <ol className="mt-5 space-y-3">
          {ruta.practica.pasos.map((paso, indice) => (
            <li key={paso} className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-violet-300/10 text-sm font-semibold text-violet-200">{indice + 1}</span>
              <p className="pt-1 text-sm leading-6 text-zinc-300">{paso}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113] sm:mt-10" aria-labelledby="ejemplo-title">
        <div className="border-b border-zinc-800 px-4 py-3 sm:px-5"><h2 id="ejemplo-title" className="text-sm font-medium text-zinc-300">Ejemplo de index.html</h2></div>
        <pre className="overflow-x-auto p-4 text-xs leading-6 text-violet-100 sm:p-6 sm:text-sm"><code>{ruta.practica.codigo}</code></pre>
      </section>
      <aside className="mt-8 rounded-xl border border-violet-300/20 bg-violet-300/5 p-5 sm:mt-10 sm:p-6">
        <p className="text-sm font-semibold text-violet-200">¿Terminaste la práctica?</p>
        <p className="mt-2 text-sm leading-6 text-zinc-400">Cuando abras tu primera página y veas el mensaje, marcá el nivel como completado para desbloquear HTML.</p>
        <button className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 sm:w-auto" onClick={completarPractica} type="button">Marcar nivel como completado</button>
      </aside>
    </main>
  );
}
