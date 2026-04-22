import React from 'react'
import Etiquetas from '../componentes/Etiquetas'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import TarjetaEstadistica from '../componentes/TarjetaEstadistica'
import TarjetaModulo from '../componentes/TarjetaModulo'

const columnas: TablaColumn[] = [
  { key: 'evaluacion', label: 'Evaluación' },
  { key: 'modulo', label: 'Módulo' },
  { key: 'nota', label: 'Nota', className: 'text-center' },
  { key: 'estado', label: 'Estado', className: 'text-center' },
]

const filas: TablaRow[] = [
  {
    id: 1,
    evaluacion: 'Examen Práctico 1',
    modulo: 'Módulo 1',
    nota: <span className="font-bold">19 / 20</span>,
    estado: <Etiquetas variant="success">Aprobado</Etiquetas>,
  },
  {
    id: 2,
    evaluacion: 'Test Control de Flujo',
    modulo: 'Módulo 1',
    nota: <span className="font-bold">18 / 20</span>,
    estado: <Etiquetas variant="success">Aprobado</Etiquetas>,
  },
  {
    id: 3,
    evaluacion: 'Examen Endpoints',
    modulo: 'Módulo 2',
    nota: <span className="text-gray-500 font-bold">--</span>,
    estado: <Etiquetas variant="warning">Pendiente</Etiquetas>,
  },
]

const page = () => {
  return (
    <>
      <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex z-10">
        <div className="p-6 border-b-2 border-black flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">
            L
          </div>
          <span className="text-xl font-bold uppercase tracking-widest">[ LOGO ]</span>
        </div>

        <div className="p-6 flex items-center space-x-4 border-b-2 border-dashed border-gray-300">
          <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center">
            <i className="fa-regular fa-user"></i>
          </div>
          <div>
            <p className="text-sm font-bold uppercase">[ Nombre Alumno ]</p>
            <p className="text-xs text-gray-700 uppercase">Perfil: Estudiante</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a
            href="#"
            className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          >
            <i className="fa-solid fa-chart-pie w-5"></i>
            <span>Mi Progreso</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-book w-5"></i>
            <span>Catálogo Cursos</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-calendar-check w-5"></i>
            <span>Evaluaciones</span>
          </a>
        </nav>

        <div className="p-4 border-t-2 border-black">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2"
          >
            <i className="fa-solid fa-sign-out-alt w-5"></i>
            <span className="uppercase text-sm font-bold">Cerrar Sesión</span>
          </a>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase">[ LOGO ]</span>
          <button className="text-black">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full pb-20">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black pb-4 gap-4">
            <div>
              <h1 className="text-3xl font-bold uppercase text-black">Mi Progreso</h1>
              <p className="text-gray-700 mt-2 text-sm font-bold uppercase tracking-widest">
                Visualización de avance general, módulos y calificaciones
              </p>
            </div>

            <div className="hidden sm:block">
              <Etiquetas variant="neutral">Progreso actual: 65%</Etiquetas>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <TarjetaEstadistica
              title="Avance Total"
              value="65%"
              icon="fa-solid fa-chart-line"
            />

            <TarjetaEstadistica
              title="Lecciones Completadas"
              value="26 / 40"
              icon="fa-solid fa-book-open"
            />

            <TarjetaEstadistica
              title="Promedio General"
              value="18.5"
              icon="fa-solid fa-award"
            />
          </div>

          <div className="mb-10 bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
                Resumen Visual del Curso
              </h2>

              <p className="text-xs font-bold uppercase text-gray-700">
                Aún no alcanzas el 100% para habilitar la descarga de constancia.
              </p>
            </div>

            <div className="w-full border-2 border-black bg-gray-100 h-6">
              <div className="bg-black h-full" style={{ width: '65%' }}></div>
            </div>

            <div className="flex justify-between mt-2 text-xs font-bold uppercase text-gray-700">
              <span>Inicio</span>
              <span>65% completado</span>
              <span>Meta: 100%</span>
            </div>
          </div>

          <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">
            Ruta de Aprendizaje
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <TarjetaModulo
              status="Completado"
              statusVariant="success"
              title="[ Módulo 1 ]"
              description="Fundamentos de programación y estructuras de control."
              buttonLabel="Repasar"
            />

            <div className="bg-gray-200 border-4 border-black p-5 relative transform scale-105 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
                En curso
              </div>

              <div className="mb-4 mt-2">
                <h3 className="font-bold text-lg uppercase text-black">[ Módulo 2 ]</h3>
                <p className="text-sm text-gray-800 font-bold">APIs RESTful</p>
              </div>

              <div className="w-full border-2 border-black bg-white h-4 mb-2">
                <div className="bg-black h-full" style={{ width: '60%' }}></div>
              </div>

              <p className="text-[10px] font-bold uppercase text-gray-700 mb-4">
                60% completado
              </p>

              <button className="w-full border-2 border-black bg-black text-white py-2 text-sm font-bold uppercase hover:bg-white hover:text-black transition-colors">
                Continuar
              </button>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-400 p-5 relative opacity-70">
              <div className="absolute top-0 right-0 border-b-2 border-l-2 border-gray-400 text-xs font-bold px-2 py-1 uppercase text-gray-600">
                Bloqueado
              </div>

              <div className="mb-4 mt-2">
                <h3 className="font-bold text-lg text-gray-700 uppercase">[ Módulo 3 ]</h3>
                <p className="text-sm text-gray-600 font-bold">Base de Datos</p>
              </div>

              <div className="w-full py-2 border-2 border-gray-300 text-gray-500 text-center text-sm font-bold uppercase bg-white">
                Disponible al completar módulo anterior
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">
            Historial de Calificaciones
          </h2>

          <div className="bg-white border-2 border-black overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <Tabla
              columns={columnas}
              rows={filas}
              className="max-w-none mx-0 space-y-0"
            />
          </div>

          <div className="mt-8 bg-white border-2 border-dashed border-gray-400 p-5 text-center">
            <p className="text-xs font-bold uppercase text-gray-700 leading-relaxed">
              Si completas todos los módulos y alcanzas el 100% de progreso, el sistema podrá
              habilitar la descarga de tu constancia o diploma.
            </p>
          </div>

          <footer className="mt-12 pt-6 border-t-2 border-black text-center text-sm font-bold uppercase text-gray-600 mb-8">
            [ FOOTER DEL SISTEMA ]
          </footer>
        </div>
      </main>
    </>
  )
}

export default page