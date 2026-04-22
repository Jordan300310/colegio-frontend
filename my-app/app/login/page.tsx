import React from 'react'
import Boton from '../componentes/Boton'
import Etiquetas from '../componentes/Etiquetas'

const page = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="w-full bg-white border-4 border-black flex flex-col lg:flex-row shadow-[16px_16px_0_0_rgba(0,0,0,1)] overflow-hidden">
          <div className="w-full lg:w-1/2 bg-gray-200 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-10 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 border-4 border-black flex items-center justify-center font-bold text-4xl bg-white mb-6">
              L
            </div>

            <h1 className="text-3xl font-bold uppercase tracking-widest mb-3 text-[color:var(--primary)]">
              [ LOGO SISTEMA ]
            </h1>

            <p className="text-sm font-bold text-gray-800 uppercase">
              Plataforma educativa de labor social
            </p>

            <div className="mt-10 p-5 border-2 border-dashed border-gray-400 bg-gray-100 text-xs text-gray-800 font-bold uppercase text-left w-full max-w-md">
              <p className="mb-3">Acceso habilitado para:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Alumnos matriculados</li>
                <li>Plana docente</li>
                <li>Administración</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <Etiquetas variant="neutral">Alumno</Etiquetas>
              <Etiquetas variant="neutral">Docente</Etiquetas>
              <Etiquetas variant="outline">Administrador</Etiquetas>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-10 bg-white">
            <h2 className="text-2xl font-bold uppercase mb-2 text-black">Iniciar Sesión</h2>
            <p className="text-xs font-bold text-gray-700 uppercase mb-8 tracking-widest border-b-2 border-gray-200 pb-4">
              Ingresa tus credenciales para continuar
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                  Correo Institucional o Usuario
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
                    <i className="fa-regular fa-envelope"></i>
                  </div>

                  <input
                    type="email"
                    placeholder="ejemplo@colegio.edu.pe"
                    className="w-full border-2 border-black pl-10 pr-3 py-3 font-bold text-sm outline-none focus:border-dashed focus:bg-gray-50 transition-colors text-black placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-black">
                    Contraseña
                  </label>

                  <a
                    href="#recuperacion"
                    className="text-xs font-bold uppercase border-b border-black text-black hover:text-gray-600 transition-colors self-start sm:self-auto"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
                    <i className="fa-solid fa-lock"></i>
                  </div>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full border-2 border-black pl-10 pr-10 py-3 font-bold text-sm outline-none focus:border-dashed focus:bg-gray-50 transition-colors text-black placeholder:text-gray-500"
                  />

                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-black"
                    title="Mostrar u ocultar contraseña"
                  >
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </div>

                <p className="text-[10px] font-bold uppercase mt-2 text-gray-700 leading-relaxed">
                  Puedes visualizar u ocultar la contraseña antes de enviar el formulario.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="recordar"
                  className="w-4 h-4 accent-black border-2 border-black cursor-pointer"
                />
                <label
                  htmlFor="recordar"
                  className="text-xs font-bold uppercase cursor-pointer text-black hover:text-gray-700 transition-colors"
                >
                  Mantener sesión iniciada
                </label>
              </div>

              <Boton variant="wire" size="lg" fullWidth>
                Ingresar al Sistema
              </Boton>

              <div className="bg-gray-50 border-2 border-dashed border-gray-300 p-4">
                <p className="text-[10px] font-bold uppercase text-gray-700 mb-2">
                  Validaciones esperadas
                </p>
                <ul className="space-y-1 text-xs font-bold uppercase text-gray-800">
                  <li>• No permitir campos vacíos.</li>
                  <li>• Verificar credenciales registradas.</li>
                  <li>• Bloquear acceso si la cuenta está inactiva.</li>
                </ul>
              </div>
            </form>
          </div>
        </div>

        <div id="recuperacion" className="max-w-4xl mx-auto mt-12">
          <div className="bg-white border-4 border-black p-8 shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
            <div className="text-center mb-6">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center text-2xl mx-auto mb-4 bg-gray-100">
                🔑
              </div>

              <h2 className="text-2xl font-bold uppercase mb-2 text-black">
                Recuperar Acceso
              </h2>

              <p className="text-xs font-bold text-gray-700 uppercase leading-relaxed max-w-2xl mx-auto">
                Ingresa tu correo registrado. El sistema enviará un enlace temporal para
                restablecer tu contraseña y recuperar el acceso a la plataforma.
              </p>
            </div>

            <form className="space-y-6 max-w-3xl mx-auto">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                  Correo Electrónico Registrado
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
                    <i className="fa-regular fa-envelope"></i>
                  </div>

                  <input
                    type="email"
                    placeholder="ejemplo@colegio.edu.pe"
                    className="w-full border-2 border-black pl-10 pr-3 py-3 font-bold text-sm outline-none focus:border-dashed focus:bg-gray-50 transition-colors text-black placeholder:text-gray-500"
                  />
                </div>
              </div>

              <Boton variant="primary" size="lg" fullWidth>
                Enviar Instrucciones
              </Boton>
            </form>

            <div className="mt-6 border-t-2 border-gray-200 pt-4 text-center">
              <a
                href="#"
                className="text-xs font-bold uppercase text-gray-700 hover:text-black transition-colors inline-flex items-center"
              >
                <span className="mr-2">←</span> Volver a Iniciar Sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page