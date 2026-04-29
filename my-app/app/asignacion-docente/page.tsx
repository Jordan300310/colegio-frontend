"use client"

import React from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import CampoCheckbox from '../componentes/CampoCheckbox'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import Etiquetas from '../componentes/Etiquetas'

const columnasAsignaciones: TablaColumn[] = [
  { key: 'docente', label: 'Docente Titular' },
  { key: 'curso', label: 'Curso / Sección Asignada' },
  { key: 'fecha', label: 'Fecha Vinculación', className: 'text-center' },
]

const filasAsignaciones: TablaRow[] = [
  {
    id: 1,
    docente: <span className="font-bold uppercase text-gray-900">[ LIC. ANA RAMÍREZ ]</span>,
    curso: <Etiquetas variant="outline">3RO "A" - LÓGICA DIGITAL</Etiquetas>,
    fecha: <span className="text-xs font-bold text-gray-700 uppercase">01/03/2026</span>,
  },
  {
    id: 2,
    docente: <span className="font-bold uppercase text-gray-900">[ ING. CARLOS MENDOZA ]</span>,
    curso: <Etiquetas variant="neutral">5TO "ÚNICA" - APIS REST</Etiquetas>,
    fecha: <span className="text-xs font-bold text-gray-700 uppercase">15/03/2026</span>,
  },
]

export default function Page() {
  return (
    <>
      <aside className="w-64 bg-white border-r-2 border-black flex-col hidden md:flex z-10 text-gray-900">
        <div className="p-6 border-b-2 border-black flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-gray-900">
            L
          </div>
          <span className="text-xl font-bold uppercase tracking-widest text-gray-900">[ LOGO ]</span>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a href="/" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer transition-all">
            <i className="fa-solid fa-house w-5"></i>
            <span>Dashboard</span>
          </a>

          <a href="/gestion-usuarios" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer transition-all">
            <i className="fa-solid fa-users-gear w-5"></i>
            <span>Gestión Usuarios</span>
          </a>

          <div className="h-0.5 bg-gray-300 w-full my-2"></div>

          <a href="/asignacion-docente" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer transition-all hover:bg-black hover:text-white">
            <i className="fa-solid fa-chalkboard-user w-5"></i>
            <span>Asignación Docente</span>
          </a>

          <a href="/gestion-secciones" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer transition-all">
            <i className="fa-solid fa-layer-group w-5"></i>
            <span>Gestión Secciones</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 text-gray-900">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase text-gray-900">[ LOGO ]</span>
          <button className="text-black cursor-pointer hover:text-gray-600 transition-all">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-6xl mx-auto w-full pb-20">
          <div className="text-xs font-bold uppercase text-gray-700 mb-6 tracking-widest">
            <a href="#" className="hover:text-black hover:underline cursor-pointer">
              Académico
            </a>
            <i className="fa-solid fa-angle-right mx-2 text-black"></i>
            <span className="text-black border-b-2 border-black">Asignación Docente</span>
          </div>

          <div className="mb-8 border-b-4 border-black pb-4">
            <h1 className="text-3xl font-bold uppercase text-gray-900">Vinculación Académica</h1>
            <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
              Asignar profesores a cursos y secciones
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 md:p-8 mb-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative text-gray-900">
            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black z-10">
              Nueva Asignación Masiva
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
              <div>
                <h2 className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1 text-gray-900">
                  1. Seleccionar Docente
                </h2>

                <div className="mb-6">
                  <CampoTexto
                    field={{
                      type: 'search',
                      name: 'buscarProfesor',
                      label: 'Buscar docente',
                      placeholder: 'BUSCAR PROFESOR...',
                      icon: 'fa-solid fa-search',
                    }}
                  />
                </div>

                <div className="bg-gray-100 border-2 border-black p-4 flex items-center space-x-4 text-gray-900">
                  <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center text-xl">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </div>

                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm text-gray-900">
                      [ ING. CARLOS MENDOZA ]
                    </p>
                    <p className="text-xs font-bold text-gray-700 uppercase">
                      cmendoza@colegio.edu.pe
                    </p>
                  </div>

                  <button className="ml-auto text-xs font-bold uppercase border-b-2 border-black hover:text-gray-600 cursor-pointer transition-all">
                    Cambiar
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1 text-gray-900">
                  2. Asignar Secciones
                </h2>

                <div className="border-2 border-black bg-white h-48 overflow-y-auto p-3 space-y-3 text-gray-900">
                  <div className="bg-gray-100 border-2 border-black p-3">
                    <CampoCheckbox
                      field={{
                        type: 'checkbox',
                        name: 'sec1',
                        label: '4TO "B" - JAVA SPRING BOOT',
                      }}
                      value={true}
                    />
                    <p className="text-[10px] font-bold text-gray-700 uppercase ml-7 mt-1">
                      28 Alumnos inscritos
                    </p>
                  </div>

                  <div className="border-2 border-gray-300 p-3 bg-white">
                    <CampoCheckbox
                      field={{
                        type: 'checkbox',
                        name: 'sec2',
                        label: '5TO "ÚNICA" - BASE DE DATOS',
                      }}
                    />
                    <p className="text-[10px] font-bold text-gray-700 uppercase ml-7 mt-1">
                      25 Alumnos inscritos
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-gray-400 bg-gray-50 p-3 opacity-70">
                    <CampoCheckbox
                      field={{
                        type: 'checkbox',
                        name: 'sec3',
                        label: '3RO "A" - LÓGICA DIGITAL',
                        disabled: true,
                      }}
                    />
                    <p className="text-[10px] font-bold text-gray-700 uppercase ml-7 mt-1">
                      Ya asignada a [ Lic. Ana R. ]
                    </p>
                  </div>
                </div>

                <p className="text-[10px] font-bold text-gray-700 uppercase mt-2 text-right">
                  * Puede seleccionar múltiples secciones.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-4 border-black text-right">
              <Boton
                variant="primary"
                size="md"
                className="cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Confirmar Asignación (2 Secciones)
              </Boton>
            </div>
          </div>

          <div className="flex justify-between items-end mb-4 gap-4">
            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
              Directorio de Asignaciones Activas
            </h2>

            <div className="w-64 hidden sm:block">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'filtrarTabla',
                  label: 'Filtrar',
                  placeholder: 'FILTRAR TABLA...',
                  icon: 'fa-solid fa-filter',
                }}
              />
            </div>
          </div>

          <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-12 text-gray-900">
            <Tabla
              columns={columnasAsignaciones}
              rows={filasAsignaciones}
              renderAction={() => (
                <div className="flex justify-center">
                  <button
                    title="Desvincular Profesor"
                    className="min-w-[56px] h-8 px-2 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all text-[10px] font-bold uppercase cursor-pointer active:scale-[0.95] text-gray-900 hover:text-white"
                  >
                    Del
                  </button>
                </div>
              )}
              className="max-w-none mx-0 space-y-0"
            />
          </div>
        </div>
      </main>
    </>
  )
}