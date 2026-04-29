import React from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import CampoSelect from '../componentes/CampoSelect'
import CampoRadio from '../componentes/CampoRadio'
import Etiquetas from '../componentes/Etiquetas'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'

const columnas: TablaColumn[] = [
  { key: 'usuario', label: 'Usuario' },
  { key: 'rol', label: 'Rol Actual' },
  { key: 'estado', label: 'Estado' },
  { key: 'ultimoAcceso', label: 'Último Acceso' },
]

const filas: TablaRow[] = [
  {
    id: 1,
    usuario: (
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 border-2 border-black bg-gray-200 flex items-center justify-center text-gray-900">
          <i className="fa-solid fa-chalkboard-user text-xs"></i>
        </div>
        <div>
          <p className="font-bold uppercase text-base text-gray-900">[ APELLIDO, NOMBRE DOCENTE ]</p>
          <p className="text-xs text-gray-700 font-bold">docente@colegio.edu.pe</p>
        </div>
      </div>
    ),
    rol: <Etiquetas variant="neutral">Docente</Etiquetas>,
    estado: <Etiquetas variant="success">Activo</Etiquetas>,
    ultimoAcceso: <span className="text-xs font-bold text-gray-700 uppercase">Hoy, 08:30 AM</span>,
  },
  {
    id: 2,
    usuario: (
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center text-gray-900">
          <i className="fa-solid fa-user-graduate text-xs"></i>
        </div>
        <div>
          <p className="font-bold uppercase text-base text-gray-900">[ APELLIDO, ALUMNO 1 ]</p>
          <p className="text-xs text-gray-700 font-bold">alumno1@colegio.edu.pe</p>
        </div>
      </div>
    ),
    rol: <Etiquetas variant="neutral">Alumno</Etiquetas>,
    estado: <Etiquetas variant="success">Activo</Etiquetas>,
    ultimoAcceso: <span className="text-xs font-bold text-gray-700 uppercase">Hace 2 días</span>,
  },
  {
    id: 3,
    usuario: (
      <div className="flex items-center space-x-3 opacity-75">
        <div className="w-8 h-8 border-2 border-dashed border-gray-400 bg-gray-200 flex items-center justify-center">
          <i className="fa-solid fa-user-slash text-xs text-gray-600"></i>
        </div>
        <div>
          <p className="font-bold uppercase text-base text-gray-700">[ APELLIDO, ALUMNO 2 ]</p>
          <p className="text-xs text-gray-500 font-bold line-through">alumno2@colegio.edu.pe</p>
        </div>
      </div>
    ),
    rol: <Etiquetas variant="neutral">Alumno</Etiquetas>,
    estado: <Etiquetas variant="danger">Inactivo</Etiquetas>,
    ultimoAcceso: <span className="text-xs font-bold text-gray-500 uppercase">Nunca</span>,
  },
]

const page = () => {
  return (
    <>
      <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex z-10 text-gray-900">
        <div className="p-6 border-b-2 border-black flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-gray-900">
            L
          </div>
          <span className="text-xl font-bold uppercase tracking-widest text-gray-900">[ LOGO ]</span>
        </div>

        <div className="p-6 flex items-center space-x-4 border-b-2 border-dashed border-gray-300">
          <div className="w-10 h-10 border-2 border-black bg-gray-200 flex items-center justify-center text-gray-900">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <div>
            <p className="text-xs font-bold uppercase truncate text-gray-900">[ ADMIN ]</p>
            <p className="text-[10px] text-gray-700 font-bold uppercase">Sistemas</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer">
            <i className="fa-solid fa-house w-5"></i>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer">
            <i className="fa-solid fa-users-gear w-5"></i>
            <span>Gestión Usuarios</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer">
            <i className="fa-solid fa-file-upload w-5"></i>
            <span>Carga Masiva</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 relative text-gray-900">
        <div className="p-8 max-w-7xl mx-auto w-full pb-20">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold uppercase text-gray-900">Gestión de Usuarios</h1>
              <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
                Control de accesos y roles (RBAC)
              </p>
            </div>

            <Boton variant="wire" size="md" icon={<span className="text-sm">＋</span>} className="cursor-pointer">
              Nuevo Usuario
            </Boton>
          </div>

          <div className="bg-white border-2 border-black p-4 mb-8 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarUsuario',
                  label: 'Buscar usuario',
                  placeholder: 'BUSCAR POR NOMBRE O CORREO...',
                  icon: 'fa-solid fa-search',
                }}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'rol',
                  label: 'Rol',
                  options: ['ADMINISTRADOR', 'DOCENTE', 'ALUMNO'],
                }}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'estado',
                  label: 'Estado',
                  options: ['ACTIVOS', 'INACTIVOS / BANEADOS'],
                }}
              />
            </div>
          </div>

          <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <Tabla
              columns={columnas}
              rows={filas}
              renderAction={(row, rowIndex) => (
                <div className="flex justify-center gap-2">
                  <button
                    title="Editar Rol/Perfil"
                    className={`min-w-[42px] h-8 px-2 border-2 font-bold text-[10px] uppercase transition-colors cursor-pointer ${
                      rowIndex === 2
                        ? 'border-gray-400 text-gray-500 hover:border-black hover:text-black'
                        : 'border-black text-gray-900 hover:bg-black hover:text-white'
                    }`}
                  >
                    Edit
                  </button>

                  <button
                    title={rowIndex === 2 ? 'Activar Cuenta' : 'Suspender Cuenta'}
                    className={`min-w-[42px] h-8 px-2 border-2 font-bold text-[10px] uppercase transition-colors cursor-pointer ${
                      rowIndex === 2
                        ? 'border-black text-black hover:bg-black hover:text-white'
                        : 'border-black text-gray-900 hover:bg-black hover:text-white'
                    }`}
                  >
                    {rowIndex === 2 ? 'On' : 'Off'}
                  </button>

                  <button
                    title="Recuperar Credenciales"
                    className={`min-w-[42px] h-8 px-2 border-2 font-bold text-[10px] uppercase transition-colors ${
                      rowIndex === 2
                        ? 'border-gray-400 text-gray-500 cursor-not-allowed'
                        : 'border-black text-gray-900 hover:bg-black hover:text-white cursor-pointer'
                    }`}
                    disabled={rowIndex === 2}
                  >
                    Key
                  </button>
                </div>
              )}
              className="max-w-none mx-0 space-y-0"
            />

            <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white text-gray-900">
              <span className="text-xs font-bold uppercase text-gray-700">
                Mostrando 1 a 10 de 150 usuarios
              </span>

              <div className="flex space-x-2">
                <button className="border-2 border-gray-300 text-gray-400 px-3 py-1 font-bold uppercase text-sm cursor-not-allowed">
                  Anterior
                </button>
                <button className="bg-black text-white border-2 border-black px-3 py-1 font-bold text-sm">
                  1
                </button>
                <button className="border-2 border-black text-gray-900 px-3 py-1 font-bold text-sm hover:bg-gray-200 cursor-pointer">
                  2
                </button>
                <button className="border-2 border-black text-gray-900 px-3 py-1 font-bold text-sm hover:bg-gray-200 cursor-pointer">
                  3
                </button>
                <button className="border-2 border-black text-gray-900 px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200 cursor-pointer">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="hidden fixed inset-0 bg-black bg-opacity-80 z-50 items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-[16px_16px_0_0_rgba(255,255,255,1)] relative text-gray-900">
          <button className="absolute top-4 right-4 text-2xl hover:text-gray-500 cursor-pointer text-gray-900">×</button>

          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6 text-gray-900">
            Editar Usuario
          </h2>

          <div className="mb-6 p-3 bg-gray-100 border-2 border-black text-sm text-gray-900">
            <p className="font-bold uppercase text-gray-900">[ APELLIDO, ALUMNO 1 ]</p>
            <p className="text-xs text-gray-700 font-bold">alumno1@colegio.edu.pe</p>
          </div>

          <form className="space-y-6">
            <CampoSelect
              field={{
                type: 'select',
                name: 'rolEditar',
                label: 'Asignar Rol (RBAC)',
                options: ['ALUMNO', 'DOCENTE', 'ADMINISTRADOR'],
              }}
              value="ALUMNO"
            />

            <CampoRadio
              field={{
                type: 'radio',
                name: 'estadoCuenta',
                label: 'Estado de la Cuenta',
                options: ['Activo', 'Inactivo (Suspender)'],
                cols: 2,
              }}
              value="Activo"
            />

            <div className="pt-4 flex gap-4">
              <Boton variant="ghost" size="md" fullWidth className="cursor-pointer">
                Cancelar
              </Boton>

              <Boton variant="primary" size="md" fullWidth className="cursor-pointer">
                Guardar Cambios
              </Boton>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden fixed inset-0 bg-black bg-opacity-80 z-50 items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white border-4 border-black p-8 max-w-sm w-full shadow-[16px_16px_0_0_rgba(255,255,255,1)] text-center relative text-gray-900">
          <div className="w-16 h-16 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🔑
          </div>

          <h2 className="text-xl font-bold uppercase mb-2 text-gray-900">Recuperar Credenciales</h2>

          <p className="text-xs font-bold text-gray-700 uppercase mb-6 leading-relaxed">
            ¿Estás seguro de generar una nueva contraseña temporal para{' '}
            <span className="text-black bg-gray-200 px-1">[ APELLIDO, NOMBRE ]</span>?
          </p>

          <div className="bg-gray-50 border-2 border-dashed border-gray-400 p-3 text-left mb-6">
            <p className="text-[10px] font-bold text-gray-700 uppercase mb-1">
              ℹ Postcondición:
            </p>
            <p className="text-[10px] font-bold uppercase text-black">
              Se enviará un correo automáticamente con la nueva clave. El token actual será invalidado por seguridad.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Boton variant="primary" size="md" fullWidth className="cursor-pointer">
              Generar y Enviar
            </Boton>

            <button
              type="button"
              className="w-full bg-white border-none py-2 font-bold uppercase text-xs text-gray-700 hover:text-black hover:underline transition-all cursor-pointer"
            >
              Cancelar Operación
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page