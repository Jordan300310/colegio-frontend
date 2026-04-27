import React from 'react'
import Boton from '../componentes/Boton'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'

const columnas: TablaColumn[] = [
  { key: 'fecha', label: 'Fecha' },
  { key: 'tipoFiltro', label: 'Tipo / Filtro' },
  { key: 'usuario', label: 'Usuario' },
]

const filas: TablaRow[] = [
  {
    id: 1,
    fecha: <span className="font-bold italic text-black">13/04/2026</span>,
    tipoFiltro: <span className="font-bold uppercase text-black">Grupal - Secc. 4to "A"</span>,
    usuario: <span className="font-bold uppercase text-black">Prof. [Nombre]</span>,
  },
  {
    id: 2,
    fecha: <span className="font-bold italic text-black">12/04/2026</span>,
    tipoFiltro: <span className="font-bold uppercase text-black">Individual - Alumno [X]</span>,
    usuario: <span className="font-bold uppercase text-black">Admin [Juan J.]</span>,
  },
]

const page = () => {
  return (
    <>
      <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex">
        <div className="p-6 border-b-2 border-black flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">
            L
          </div>
          <span className="text-xl font-bold uppercase tracking-widest text-black">[ LOGO ]</span>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-house"></i>
            <span>Inicio</span>
          </a>

          <div className="h-0.5 bg-gray-300 w-full my-4"></div>

          <a
            href="#"
            className="flex items-center space-x-3 bg-black text-white px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(156,163,175,1)]"
          >
            <i className="fa-solid fa-file-export"></i>
            <span>Generar Reportes</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-clock-rotate-left"></i>
            <span>Historial</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
        <div className="p-8 max-w-5xl mx-auto w-full pb-20">
          <div className="mb-10 border-b-4 border-black pb-6">
            <h1 className="text-3xl font-bold uppercase text-black">
              Generador de Reportes Académicos
            </h1>
            <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
              Exportación de datos para informes y seguimiento académico
            </p>
          </div>

          <div className="bg-white border-2 border-black p-8 mb-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold uppercase mb-6 bg-black text-white inline-block px-3 py-1">
              1. Configurar Filtros
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-800">
                  Sección / Grupo
                </label>
                <select className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 focus:bg-white focus:outline-none text-black">
                  <option>[ Todas las Secciones ]</option>
                  <option>4to "A" - Primer Semestre</option>
                  <option>5to "B" - Segundo Semestre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-800">
                  Alumno Específico (Opcional)
                </label>
                <select className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 focus:bg-white focus:outline-none text-black">
                  <option>[ Todos los Alumnos ]</option>
                  <option>Apellido, Nombre 1</option>
                  <option>Apellido, Nombre 2</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-800">
                  Fecha de Inicio
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/AAAA"
                  defaultValue="01/01/2026"
                  className="w-full border-2 border-black p-3 font-bold uppercase text-black focus:outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-800">
                  Fecha de Fin
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/AAAA"
                  defaultValue="13/04/2026"
                  className="w-full border-2 border-black p-3 font-bold uppercase text-black focus:outline-none bg-white"
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 space-y-3 text-black">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-black border-2 border-black"
                />
                <span className="text-sm font-bold uppercase text-black">
                  Incluir gráficas de rendimiento
                </span>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-black border-2 border-black"
                />
                <span className="text-sm font-bold uppercase text-black">
                  Incluir historial de intentos de examen
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-black p-8 text-center flex flex-col items-center hover:bg-gray-50 transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 border-2 border-black mb-4 flex items-center justify-center text-3xl text-black">
                <i className="fa-solid fa-file-pdf"></i>
              </div>

              <h3 className="font-bold text-lg uppercase mb-2 text-black">Exportar como PDF</h3>
              <p className="text-xs text-gray-600 uppercase mb-6 font-bold leading-relaxed">
                Ideal para informes impresos y evidencias oficiales.
              </p>

              <Boton variant="wire" size="md" fullWidth>
                Descargar .PDF
              </Boton>
            </div>

            <div className="bg-white border-2 border-black p-8 text-center flex flex-col items-center hover:bg-gray-50 transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 border-2 border-black mb-4 flex items-center justify-center text-3xl text-black">
                <i className="fa-solid fa-file-excel"></i>
              </div>

              <h3 className="font-bold text-lg uppercase mb-2 text-black">Exportar como Excel</h3>
              <p className="text-xs text-gray-600 uppercase mb-6 font-bold leading-relaxed">
                Ideal para análisis estadístico y manipulación de datos.
              </p>

              <Boton variant="wire" size="md" fullWidth>
                Descargar .XLSX
              </Boton>
            </div>
          </div>

          <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">
            Reportes Generados Recientemente
          </h2>

          <div className="bg-white border-2 border-black overflow-x-auto mb-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <Tabla
              columns={columnas}
              rows={filas}
              renderAction={() => (
                <Boton variant="ghost" size="sm">
                  Re-descargar
                </Boton>
              )}
              className="max-w-none mx-0 space-y-0"
            />
          </div>

          <div className="border-2 border-dashed border-gray-400 p-4 bg-gray-50 text-xs font-bold text-gray-600 uppercase leading-relaxed">
            Nota: la generación de archivos puede apoyarse en librerías especializadas para PDF y
            Excel. Si el volumen de datos es alto, se recomienda procesar estas solicitudes de
            forma asíncrona.
          </div>
        </div>
      </main>
    </>
  )
}

export default page