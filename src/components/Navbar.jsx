import { NavLink, Link, useNavigate } from 'react-router-dom';

const clasesEnlace = ({ isActive }) => `min-h-10 inline-flex items-center text-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 ${isActive ? 'font-semibold text-white' : 'text-zinc-400'}`;

export default function BarraDeNavegacion({ usuario, alCerrarSesion }) {
    const navegar = useNavigate();
    const cerrarSesion = () => {
        alCerrarSesion();
        navegar('/', { replace: true });
    };

    return (
        <nav className="border-b border-zinc-800 bg-zinc-900" aria-label="Navegación principal">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 py-3 sm:px-6 sm:py-4">
                <Link to="/" className="inline-flex min-h-10 items-center text-lg font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">⚒️ SkillForge</Link>
                <div className="flex items-center gap-4 sm:gap-6">
                    <NavLink to="/" end className={clasesEnlace}>Inicio</NavLink>
                    {usuario ? (
                        <>
                            <NavLink to="/profile" className={clasesEnlace}>Perfil</NavLink>
                            <button type="button" onClick={cerrarSesion} className="min-h-10 text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">Salir</button>
                        </>
                    ) : (
                        <NavLink to="/login" className={clasesEnlace}>Ingresar</NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
}
