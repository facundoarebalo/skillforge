export const rutasAprendizaje = [
  {
    identificador: 'vscode', nivel: 0, categoria: 'Herramientas', titulo: 'Prepará tu espacio de trabajo',
    descripcion: 'Conocé Visual Studio Code y organizá los archivos de tu primer proyecto.', duracion: '20 min', icono: '⌘',
    practica: {
      descripcion: 'Creá una carpeta, abrila en Visual Studio Code y mostrá tu primer mensaje en el navegador.',
      pasos: [
        'Creá una carpeta llamada mi-primera-pagina y abrila en Visual Studio Code.',
        'Dentro de la carpeta, creá un archivo llamado index.html.',
        'Escribí una estructura HTML básica con un título que diga “Hola, SkillForge”.',
        'Abrí el archivo en el navegador y comprobá que se vea el título.',
      ],
      codigo: '<!doctype html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Mi primera página</title>\n  </head>\n  <body>\n    <h1>Hola, SkillForge</h1>\n  </body>\n</html>',
    },
  },
  { identificador: 'html', nivel: 1, categoria: 'HTML', titulo: 'Construí la estructura con HTML', descripcion: 'Organizá el contenido con etiquetas semánticas, enlaces, imágenes y formularios.', duracion: '45 min', icono: '</>' },
  { identificador: 'css', nivel: 2, categoria: 'CSS', titulo: 'Dale estilo con CSS', descripcion: 'Convertí una página simple en una experiencia visual clara y adaptable.', duracion: '60 min', icono: '✳' },
  { identificador: 'javascript', nivel: 3, categoria: 'JavaScript', titulo: 'Sumá interactividad con JavaScript', descripcion: 'Usá variables, funciones y eventos para responder a las acciones del usuario.', duracion: '90 min', icono: 'JS' },
  { identificador: 'react', nivel: 4, categoria: 'React', titulo: 'Creá interfaces con React', descripcion: 'Dividí la interfaz en componentes y conectalos con props y estado.', duracion: '90 min', icono: '⚛' },
];
