import React from 'react'
import Boton from '../componentes/Boton'
import CampoSelect from '../componentes/CampoSelect'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import TarjetaEstadistica from '../componentes/TarjetaEstadistica'

const columnas: TablaColumn[] = [
  { key: 'estudiante', label: 'Estudiante' },
  { key: 'ultimaConexion', label: 'Última Conexión' },
  { key: 'progreso', label: 'Progreso' },
  { key: 'moduloActual', label: 'Módulo Actual' },
]

const filas: TablaRow[] = [
  {
    id: 1,
    estudiante: (
      <div>
        <p className="font-bold uppercase text-black">[ APELLIDO, NOMBRE 1 ]</p>
        <p className="text-xs text-gray-600 font-bold">correo1@colegio.edu.pe</p>
      </div>
    ),
    ultimaConexion: <span className="text-gray-700 font-bold">Hace 15 días</span>,
    progreso: (
      <div className="flex items-center gap-2">
        <span className="font-bold text-black min-w-[40px]">12%</span>
        <div className="w-20 bg-gray-200 h-2 border border-black">
          <div className="bg-black h-full" style={{ width: '12%' }}></div>
        </div>
      </div>
    ),
    moduloActual: (
      <span className="font-bold text-gray-700 uppercase">Mod 1 - Pendiente</span>
    ),
  },
  {
    id: 2,
    estudiante: (
      <div>
        <p className="font-bold uppercase text-black">[ APELLIDO, NOMBRE 2 ]</p>
        <p className="text-xs text-gray-600 font-bold">correo2@colegio.edu.pe</p>
      </div>
    ),
    ultimaConexion: <span className="text-gray-700 font-bold">Hace 7 días</span>,
    progreso: (
      <div className="flex items-center gap-2">
        <span className="font-bold text-black min-w-[40px]">35%</span>
        <div className="w-20 bg-gray-200 h-2 border border-black">
          <div className="bg-black h-full" style={{ width: '35%' }}></div>
        </div>
      </div>
    ),
    moduloActual: (
      <span className="font-bold text-gray-700 uppercase">Mod 2 - Examen Reprobado</span>
    ),
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
          <span className="text-xl font-bold uppercase tracking-widest">[ LOGO ]</span>
        </div>

        <div className="p-6 flex items-center space-x-4 border-b-2 border-dashed border-gray-300">
          <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center">
            <i className="fa-solid fa-chalkboard-user"></i>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-black">[ Nombre Docente ]</p>
            <p className="text-xs text-gray-700 uppercase">Perfil: Profesor</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-users-gear w-5"></i>
            <span>Mis Secciones</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          >
            <i className="fa-solid fa-chart-column w-5"></i>
            <span>Tablero de Avance</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-file-pdf w-5"></i>
            <span>Reportes</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase">[ LOGO ]</span>
          <button className="text-black">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full pb-20">
          <div className="mb-8 border-b-2 border-black pb-4">
            <h1 className="text-3xl font-bold uppercase text-black">Tablero de Avance Grupal</h1>
            <p className="text-gray-700 mt-2 text-sm font-bold uppercase tracking-widest">
              Supervisión de métricas y rendimiento por sección
            </p>
          </div>

          <div className="bg-white border-2 border-black p-6 mb-8 flex flex-col lg:flex-row gap-6 items-end shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="w-full lg:w-1/2">
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                Seleccionar Sección Activa
              </label>
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'seccionActiva',
                  label: ' ',
                  options: [
                    '4TO "A" - TALLER DE PROGRAMACIÓN',
                    '5TO "B" - BASE DE DATOS',
                    '3RO "ÚNICA" - LÓGICA DIGITAL',
                  ],
                }}
              />
            </div>

            <div className="w-full lg:w-1/4">
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                Fecha Inicio
              </label>
              <input
                type="text"
                value="01/03/2026"
                readOnly
                className="w-full border-2 border-black p-3 font-bold uppercase bg-white text-black outline-none"
              />
            </div>

            <div className="w-full lg:w-1/4 flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                  Fecha Fin
                </label>
                <input
                  type="text"
                  value="ACTUALIDAD"
                  readOnly
                  className="w-full border-2 border-black p-3 font-bold uppercase bg-white text-black outline-none"
                />
              </div>

              <Boton variant="primary" size="md">
                Filtrar
              </Boton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TarjetaEstadistica title="Total Alumnos" value="32" icon="fa-solid fa-users" />
            <TarjetaEstadistica title="Promedio Grupo" value="16.4 / 20" icon="fa-solid fa-chart-simple" />
            <TarjetaEstadistica title="Alumnos Rezagados" value="8" icon="fa-solid fa-triangle-exclamation" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <h3 className="font-bold text-lg uppercase mb-6 border-b-2 border-dashed border-gray-400 pb-2 text-black">
                Avance Promedio por Módulo
              </h3>

              <div className="h-56 border-b-2 border-l-2 border-black flex items-end justify-between p-2 pt-8 gap-3">
                <div className="w-full flex flex-col items-center group">
                  <span className="text-xs font-bold mb-1 text-black">95%</span>
                  <div className="w-full bg-black h-[95%] border-2 border-black group-hover:bg-gray-800 transition-colors"></div>
                  <span className="text-xs font-bold mt-2 text-black">MOD 1</span>
                </div>

                <div className="w-full flex flex-col items-center group">
                  <span className="text-xs font-bold mb-1 text-black">70%</span>
                  <div className="w-full bg-black h-[70%] border-2 border-black group-hover:bg-gray-800 transition-colors"></div>
                  <span className="text-xs font-bold mt-2 text-black">MOD 2</span>
                </div>

                <div className="w-full flex flex-col items-center group">
                  <span className="text-xs font-bold mb-1 text-black">45%</span>
                  <div className="w-full bg-gray-400 h-[45%] border-2 border-black border-dashed group-hover:bg-gray-500 transition-colors"></div>
                  <span className="text-xs font-bold mt-2 text-black">MOD 3</span>
                </div>

                <div className="w-full flex flex-col items-center group">
                  <span className="text-xs font-bold mb-1 text-black">10%</span>
                  <div className="w-full bg-gray-200 h-[10%] border-2 border-black border-dashed group-hover:bg-gray-300 transition-colors"></div>
                  <span className="text-xs font-bold mt-2 text-black">MOD 4</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 flex flex-col shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <h3 className="font-bold text-lg uppercase mb-6 border-b-2 border-dashed border-gray-400 pb-2 text-black">
                Estado de la Clase
              </h3>

              <div className="flex-1 flex items-center justify-center gap-8 flex-col sm:flex-row">
                <div className="w-40 h-40 rounded-full border-4 border-black bg-[conic-gradient(black_0_75%,#d1d5db_75%_100%)] shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]"></div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-black border-2 border-black"></div>
                    <div>
                      <p className="font-bold uppercase text-sm text-black">Al Día</p>
                      <p className="text-xs text-gray-700 font-bold">24 Alumnos (75%)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-gray-300 border-2 border-black border-dashed"></div>
                    <div>
                      <p className="font-bold uppercase text-sm text-black">Rezagados</p>
                      <p className="text-xs text-gray-700 font-bold">8 Alumnos (25%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end mb-4 gap-4">
            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
              Atención Prioritaria (Rezagados)
            </h2>

            <button className="text-xs font-bold uppercase border-b-2 border-black hover:text-gray-600 transition-colors text-black">
              Ver todos los alumnos <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>

          <div className="bg-white border-2 border-black overflow-x-auto mb-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <Tabla
              columns={columnas}
              rows={filas}
              renderAction={() => (
                <Boton variant="ghost" size="sm">
                  Ver Ficha
                </Boton>
              )}
              className="max-w-none mx-0 space-y-0"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default page