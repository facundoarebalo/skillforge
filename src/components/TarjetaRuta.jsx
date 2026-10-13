import { Link } from 'react-router-dom';

export default function TarjetaRuta({ ruta, completada, desbloqueada }) {
  return (
    <article className={`flex h-full flex-col rounded-2xl border p-5 sm:p-6 ${
      desbloqueada ? 'border-zinc-700 bg-zinc-900 transition-colors hover:border-violet-400/60' : 'border-zinc-800 bg-zinc-900/45'
    }`}>
      <div className="flex items-start justify-between gap-4">
        <span className={`grid size-12 place-items-center rounded-xl text-lg font-bold ${
          completada ? 'bg-emerald-400/10 text-emerald-300' : 'bg-violet-400/10 text-violet-300'
        }`} aria-hidden="true">{ruta.icono}</span>
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
          {completada ? 'Completado' : desbloqueada ? `Nivel ${ruta.nivel} · ${ruta.duracion}` : 'Bloqueado'}
        </span>
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">{ruta.categoria}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">{ruta.titulo}</h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{ruta.descripcion}</p>
      {desbloqueada ? (
        <Link className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-violet-300 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300" to={`/lesson/${ruta.identificador}`}>
          {completada ? 'Repasar nivel' : 'Empezar nivel'}<span className="ml-2" aria-hidden="true">→</span>
        </Link>
      ) : (
        <p className="mt-6 flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-500"><span aria-hidden="true">🔒</span> Completá el nivel anterior</p>
      )}
    </article>
  );
}
