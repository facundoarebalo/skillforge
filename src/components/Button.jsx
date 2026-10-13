export default function Boton({ children, variante = 'secundario', alHacerClick }) {
  const estilosBase = 'min-h-11 rounded-lg border-2 border-zinc-600 px-4 py-2 transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300';

  const variantes = {
    principal: 'bg-zinc-800',
    secundario: '',
  };

  return (
    <button onClick={alHacerClick} className={`${estilosBase} ${variantes[variante] ?? variantes.secundario}`} type="button">
      {children}
    </button>
  );
}
