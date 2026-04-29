"use client"

import React from 'react'
import Boton from '../componentes/Boton'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import ZonaArrastre from '../componentes/ZonaArrastre'

const columnasErrores: TablaColumn[] = [
  { key: 'fila', label: 'Fila', className: 'text-center w-16' },
  { key: 'dato', label: 'Dato Afectado' },
  { key: 'motivo', label: 'Motivo del Rechazo' },
]

const filasErrores: TablaRow[] = [
  {
    id: 1,
    fila: <span className="text-gray-900 font-bold">45</span>,
    dato: <span className="text-gray-900 font-bold">jlopez@colegio.edu.pe</span>,
    motivo: <span className="text-gray-700 font-bold">Correo electrónico duplicado.</span>,
  },
  {
    id: 2,
    fila: <span className="text-gray-900 font-bold">112</span>,
    dato: <span className="text-gray-900 font-bold">[ Celda Vacía ]</span>,
    motivo: <span className="text-gray-700 font-bold">Falta el campo obligatorio: Nombres.</span>,
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

          <a href="/carga-masiva" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer transition-all hover:bg-black hover:text-white">
            <i className="fa-solid fa-file-upload w-5"></i>
            <span>Carga Masiva</span>
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

        <div className="p-8 max-w-7xl mx-auto w-full pb-20">
          <div className="text-xs font-bold uppercase text-gray-700 mb-6 tracking-widest">
            <a href="#" className="hover:text-black hover:underline cursor-pointer">
              Administración
            </a>
            <i className="fa-solid fa-angle-right mx-2 text-black"></i>
            <span className="text-black border-b-2 border-black">Carga Masiva</span>
          </div>

          <div className="mb-8 border-b-4 border-black pb-4">
            <h1 className="text-3xl font-bold uppercase text-gray-900">
              Carga Masiva de Alumnos
            </h1>
            <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
              Importación de registros mediante Excel o CSV
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
                <h2 className="text-lg font-bold uppercase mb-2 text-gray-900">
                  Paso 1: Descargar Plantilla
                </h2>
                <p className="text-xs font-bold text-gray-700 uppercase mb-4 leading-relaxed">
                  Asegúrese de utilizar el formato oficial. Las columnas obligatorias son:
                  nombres, apellidos, correo y rol.
                </p>

                <Boton
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97]"
                >
                  Descargar Plantilla
                </Boton>
              </div>

              <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
                <h2 className="text-lg font-bold uppercase mb-4 text-gray-900">
                  Paso 2: Subir Archivo
                </h2>

                <div className="mb-4 text-gray-900">
                  <ZonaArrastre />
                </div>

                <div className="bg-gray-200 border-2 border-black p-3 flex justify-between items-center mb-6 text-gray-900">
                  <div className="flex items-center">
                    <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center mr-3 font-bold text-xs text-gray-900">
                      XLS
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase truncate max-w-xs text-gray-900">
                        nuevos_ingresos_2026.xlsx
                      </p>
                      <p className="text-xs text-gray-700 font-bold uppercase">45 KB</p>
                    </div>
                  </div>

                  <button className="text-gray-700 hover:text-black text-xs font-bold uppercase cursor-pointer transition-all">
                    Quitar
                  </button>
                </div>

                <Boton
                  variant="primary"
                  size="md"
                  fullWidth
                  className="cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.97]"
                >
                  Procesar Archivo
                </Boton>
              </div>
            </div>

            <div className="bg-gray-100 border-4 border-black p-6 relative text-gray-900">
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black z-10">
                Log de Procesamiento
              </div>

              <h2 className="text-xl font-bold uppercase mb-2 border-b-2 border-black pb-2 text-gray-900">
                Reporte de Carga
              </h2>
              <p className="text-xs font-bold text-gray-700 uppercase mb-6">
                Archivo: nuevos_ingresos_2026.xlsx | Procesado a las 14:32 hrs.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white border-2 border-black p-3 text-center text-gray-900">
                  <p className="text-[10px] font-bold text-gray-700 uppercase mb-1">
                    Filas Leídas
                  </p>
                  <p className="text-2xl font-bold text-gray-900">120</p>
                </div>

                <div className="bg-white border-2 border-black border-b-4 p-3 text-center text-gray-900">
                  <p className="text-[10px] font-bold text-gray-700 uppercase mb-1">
                    Registrados
                  </p>
                  <p className="text-2xl font-bold text-gray-900">118</p>
                </div>

                <div className="bg-black text-white border-2 border-black p-3 text-center">
                  <p className="text-[10px] font-bold text-gray-300 uppercase mb-1">Errores</p>
                  <p className="text-2xl font-bold text-white">2</p>
                </div>
              </div>

              <div className="bg-white border-2 border-dashed border-gray-400 p-4 mb-6 text-center text-gray-900">
                <p className="font-bold uppercase text-sm mb-2 text-gray-900">
                  118 usuarios creados con éxito.
                </p>
                <p className="text-xs text-gray-700 font-bold uppercase mb-4">
                  Las credenciales temporales han sido generadas.
                </p>

                <Boton
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97]"
                >
                  Descargar Credenciales
                </Boton>
              </div>

              <h3 className="font-bold uppercase text-sm mb-3 bg-black text-white inline-block px-2 py-1">
                Detalle de Errores (2)
              </h3>

              <div className="bg-white border-2 border-black overflow-hidden text-gray-900">
                <Tabla
                  columns={columnasErrores}
                  rows={filasErrores}
                  className="max-w-none mx-0 space-y-0"
                />
              </div>

              <p className="text-[10px] font-bold text-gray-700 uppercase mt-4 text-center">
                Corrija los errores en su archivo local y vuelva a subir únicamente las filas
                rechazadas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}