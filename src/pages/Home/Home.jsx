import { Link, useNavigate } from 'react-router-dom';
import Boton from '../../components/Button';
import TarjetaCaracteristica from '../../components/FeatureCard';
import { caracteristicas } from '../../data/caracteristicas';

const temas = ['HTML', 'CSS', 'JavaScript', 'React', 'Visual Studio Code'];

export default function Inicio({ usuario }) {
  const navegar = useNavigate();
  const irAAprender = () => {
    if (usuario) {
      navegar('/learn');
      return;
    }

    navegar('/login', { state: { rutaPendiente: '/learn' } });
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-16 pt-20 text-white sm:px-8 sm:pt-32">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Aprendé haciendo</p>
      <h1 className="mt-4 text-center text-5xl font-bold tracking-tight sm:text-7xl">SkillForge</h1>
      <p className="mt-4 max-w-xl text-center text-base leading-7 text-zinc-400 sm:text-lg">Aprendé programación desde cero. Dominá cada concepto construyendo proyectos reales.</p>
      <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <Boton alHacerClick={irAAprender} variante="principal">{usuario ? 'Continuar aprendiendo' : 'Comenzar a aprender'}</Boton>
      </div>
      {!usuario && <Link to="/login" className="mt-4 inline-flex min-h-10 items-center text-sm font-medium text-violet-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">o probá la cuenta demo <span className="ml-2" aria-hidden="true">→</span></Link>}
      <ul className="mt-6 flex flex-wrap justify-center gap-2.5" aria-label="Temas de aprendizaje">
        {temas.map((tema) => <li key={tema} className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400">{tema}</li>)}
      </ul>
      <section className="mt-16 w-full sm:mt-20" aria-labelledby="caracteristicas-title">
        <h2 id="caracteristicas-title" className="text-center text-2xl font-bold sm:text-3xl">¿Por qué SkillForge?</h2>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-6">
          {caracteristicas.map((caracteristica) => <TarjetaCaracteristica key={caracteristica.titulo} {...caracteristica} />)}
        </div>
      </section>
    </main>
  );
}
