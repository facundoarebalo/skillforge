import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import usuarioPrueba from '../../data/usuarioPrueba.json';

export default function IniciarSesion({ usuario, alIniciarSesion }) {
  const navegar = useNavigate();
  const ubicacion = useLocation();
  const [correo, establecerCorreo] = useState('');
  const [contrasena, establecerContrasena] = useState('');
  const [mensajeError, establecerMensajeError] = useState('');

  if (usuario) return <Navigate to="/profile" replace />;

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    establecerMensajeError('');
    if (!alIniciarSesion(correo, contrasena)) {
      establecerMensajeError('El correo o la contraseña no coinciden con el usuario de prueba.');
      return;
    }
    navegar(ubicacion.state?.rutaPendiente ?? '/profile', { replace: true });
  };

  const completarCredenciales = () => {
    establecerCorreo(usuarioPrueba.correo);
    establecerContrasena(usuarioPrueba.contrasena);
    establecerMensajeError('');
  };

  return (
    <main className="mx-auto grid min-h-[calc(100vh-4.5rem)] w-full max-w-5xl items-center px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
      <header className="mb-8 lg:mb-0">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Tu espacio de aprendizaje</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Volvé a donde dejaste.</h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">Ingresá para ver tu perfil y seguir el progreso de tus rutas.</p>
      </header>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-8" aria-labelledby="acceso-titulo">
        <h2 id="acceso-titulo" className="text-xl font-semibold text-white">Iniciar sesión</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400">Por ahora, podés entrar con la cuenta local de demostración.</p>
        <form className="mt-6 space-y-5" onSubmit={enviarFormulario}>
          <div>
            <label htmlFor="correo" className="mb-2 block text-sm font-medium text-zinc-200">Correo electrónico</label>
            <input id="correo" name="correo" type="email" autoComplete="username" required value={correo} onChange={(evento) => establecerCorreo(evento.target.value)} className="min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-300 focus:ring-2 focus:ring-violet-300/20" placeholder="tu@correo.com" />
          </div>
          <div>
            <label htmlFor="contrasena" className="mb-2 block text-sm font-medium text-zinc-200">Contraseña</label>
            <input id="contrasena" name="contrasena" type="password" autoComplete="current-password" required value={contrasena} onChange={(evento) => establecerContrasena(evento.target.value)} className="min-h-11 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-300 focus:ring-2 focus:ring-violet-300/20" placeholder="Ingresá tu contraseña" />
          </div>
          {mensajeError && <p className="rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200" role="alert">{mensajeError}</p>}
          <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-violet-300 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200">Ingresar</button>
        </form>

        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-white">¿Querés probar SkillForge?</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">La cuenta es de demostración y se guarda solo en este navegador.</p>
            </div>
            <button type="button" onClick={completarCredenciales} className="min-h-10 shrink-0 rounded-lg border border-zinc-700 px-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300">Usar cuenta demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
