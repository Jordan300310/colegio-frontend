import React from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import Etiquetas from '../componentes/Etiquetas'

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

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-house w-5"></i>
            <span>Inicio</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          >
            <i className="fa-solid fa-id-badge w-5"></i>
            <span>Mi Perfil</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-gear w-5"></i>
            <span>Preferencias</span>
          </a>
        </nav>

        <div className="p-4 border-t-2 border-black">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2"
          >
            <i className="fa-solid fa-arrow-right-from-bracket w-5"></i>
            <span className="uppercase font-bold text-sm">Cerrar Sesión</span>
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

        <div className="p-8 max-w-6xl mx-auto w-full pb-20">
          <div className="mb-10 border-b-4 border-black pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-3xl font-bold uppercase text-black">Configuración de Perfil</h1>
              <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
                Actualiza tus datos personales y gestiona tu seguridad
              </p>
            </div>

            <div className="hidden sm:block">
              <Etiquetas variant="outline">Rol: Administrador / Docente</Etiquetas>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
              <div className="absolute -top-4 -left-4 bg-white border-2 border-black px-4 py-1 text-sm font-bold uppercase z-10 text-gray-800">
                Información Personal
              </div>

              <div className="flex flex-col items-center mb-8 mt-4">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 border-4 border-black rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <i className="fa-solid fa-user text-6xl text-gray-400"></i>
                  </div>

                  <div className="absolute inset-0 bg-black/80 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fa-solid fa-camera text-white text-xl mb-1"></i>
                    <span className="text-white text-xs font-bold uppercase">Cambiar</span>
                  </div>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CampoTexto
                    field={{
                      type: 'text',
                      name: 'nombres',
                      label: 'Nombres',
                      placeholder: 'Ej. Juan José',
                    }}
                    value="JUAN JOSÉ"
                  />

                  <CampoTexto
                    field={{
                      type: 'text',
                      name: 'apellidos',
                      label: 'Apellidos',
                      placeholder: 'Ej. Pérez Soto',
                    }}
                    value="[ APELLIDOS ]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-800 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    value="juan.jose@colegio.edu.pe"
                    disabled
                    className="w-full border-2 border-dashed border-gray-400 p-3 font-bold text-gray-600 bg-gray-100 cursor-not-allowed outline-none"
                  />
                  <p className="text-[10px] text-gray-500 font-bold uppercase mt-2 text-right">
                    Contacte a soporte para modificar su correo.
                  </p>
                </div>

                <CampoTexto
                  field={{
                    type: 'text',
                    name: 'telefono',
                    label: 'Teléfono / Celular (Opcional)',
                    placeholder: 'Ej. 999 888 777',
                  }}
                />

                <div className="pt-4 border-t-2 border-dashed border-gray-300">
                  <Boton variant="ghost" size="md" fullWidth>
                    Guardar Datos Personales
                  </Boton>
                </div>
              </form>
            </div>

            <div className="bg-gray-100 border-2 border-black p-8 relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute -top-4 -left-4 bg-black text-white border-2 border-black px-4 py-1 text-sm font-bold uppercase z-10">
                Seguridad y Acceso
              </div>

              <div className="mb-6 mt-4 p-4 border-2 border-black bg-white flex items-start space-x-3">
                <i className="fa-solid fa-circle-info text-xl pt-1 text-black"></i>
                <div>
                  <p className="text-sm font-bold uppercase text-black">
                    Último cambio de contraseña
                  </p>
                  <p className="text-xs text-gray-600 font-bold uppercase mt-1">
                    Hace 3 meses (15 Enero 2026)
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-800 mb-2">
                    Contraseña Actual
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full border-2 border-black p-3 pr-10 font-bold bg-white text-gray-800 placeholder:text-gray-400 focus:bg-gray-50 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                      title="Mostrar u ocultar contraseña"
                    >
                      <i className="fa-regular fa-eye"></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-800 mb-2">
                    Nueva Contraseña
                  </label>

                  <div className="relative mb-3">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full border-2 border-black p-3 pr-10 font-bold bg-white text-gray-800 placeholder:text-gray-400 focus:bg-gray-50 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                      title="Mostrar u ocultar contraseña"
                    >
                      <i className="fa-regular fa-eye"></i>
                    </button>
                  </div>

                  <div className="bg-white border-2 border-dashed border-gray-400 p-3">
                    <p className="text-xs font-bold text-gray-700 uppercase mb-2 border-b-2 border-gray-200 pb-1">
                      Requisitos de seguridad
                    </p>

                    <ul className="text-xs font-bold uppercase space-y-1">
                      <li className="text-green-600">
                        <i className="fa-solid fa-check mr-2"></i>
                        Mínimo 8 caracteres
                      </li>
                      <li className="text-gray-500">
                        <i className="fa-solid fa-xmark mr-2"></i>
                        Al menos una mayúscula
                      </li>
                      <li className="text-gray-500">
                        <i className="fa-solid fa-xmark mr-2"></i>
                        Al menos un número
                      </li>
                      <li className="text-gray-500">
                        <i className="fa-solid fa-xmark mr-2"></i>
                        Un símbolo especial (@, #, $, etc.)
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-800 mb-2">
                    Confirmar Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full border-2 border-black p-3 font-bold bg-white text-gray-800 placeholder:text-gray-400 focus:bg-gray-50 focus:outline-none"
                  />
                  <p className="text-[10px] font-bold uppercase mt-2 text-gray-500">
                    La nueva contraseña debe coincidir con la confirmación.
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black mt-6">
                  <Boton variant="primary" size="md" fullWidth>
                    Actualizar Contraseña
                  </Boton>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t-2 border-dashed border-gray-400 pt-4 pb-12 text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Auditoría del sistema: todas las actualizaciones quedan registradas bajo su ID de
              usuario.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default page