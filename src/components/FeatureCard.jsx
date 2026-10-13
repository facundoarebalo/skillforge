export default function TarjetaCaracteristica({ titulo, descripcion, icono }) {
    return (
        <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:-translate-y-1 hover:border-zinc-600">
            <div className="text-3xl">
                {icono}
            </div>
            <h3 className="text-xl font-semibold">{titulo}</h3>
            <p className="mt-2 text-zinc-400">{descripcion}</p>
        </article>
    );
}
