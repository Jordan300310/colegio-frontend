import React from 'react'
import Boton from '../componentes/Boton'
import Etiquetas from '../componentes/Etiquetas'

const page = () => {
  return (
    <>
      <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex z-10">
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
            <i className="fa-solid fa-house w-5"></i>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          >
            <i className="fa-solid fa-users-gear w-5"></i>
            <span>Gestión Usuarios</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400"
          >
            <i className="fa-solid fa-file-upload w-5"></i>
            <span>Carga Masiva</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase text-black">[ LOGO ]</span>
          <button className="text-black">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-5xl mx-auto w-full pb-20">
          <div className="text-xs font-bold uppercase text-gray-600 mb-6 tracking-widest">
            <a href="#" className="hover:text-black hover:underline">
              Gestión Usuarios
            </a>
            <i className="fa-solid fa-angle-right mx-2 text-black"></i>
            <span className="text-black border-b-2 border-black">Nuevo Registro</span>
          </div>

          <div className="mb-8 border-b-4 border-black pb-4">
            <h1 className="text-3xl font-bold uppercase text-black">Crear Nuevo Usuario</h1>
            <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
              Registro manual individual
            </p>
          </div>

          <div className="bg-white border-4 border-black p-8 shadow-[16px_16px_0_0_rgba(0,0,0,1)] relative">
            <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black">
              Formulario de Ingreso
            </div>

            <form className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-bold uppercase border-b-2 border-dashed border-gray-400 inline-block pb-1 text-black">
                    1. Datos Personales
                  </h2>
                  <Etiquetas variant="outline">Obligatorio</Etiquetas>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                      Nombres
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Carlos Alberto"
                      className="w-full border-2 border-black p-3 font-bold outline-none transition-colors duration-200 bg-white focus:bg-gray-50 text-black placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Mendoza Ruiz"
                      className="w-full border-2 border-black p-3 font-bold outline-none transition-colors duration-200 bg-white focus:bg-gray-50 text-black placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                    Correo Electrónico Institucional
                  </label>
                  <input
                    type="email"
                    placeholder="ejemplo@colegio.edu.pe"
                    className="w-full border-2 border-black p-3 font-bold outline-none transition-colors duration-200 bg-white focus:bg-gray-50 text-black placeholder:text-gray-500"
                  />

                  <p className="text-[10px] font-bold uppercase mt-2 text-gray-600">
                    El sistema validará que el correo no pertenezca a otra cuenta activa.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-bold uppercase border-b-2 border-dashed border-gray-400 inline-block pb-1 text-black">
                    2. Configuración de Acceso
                  </h2>
                  <Etiquetas variant="neutral">RBAC</Etiquetas>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                      Perfil de Usuario
                    </label>
                    <select className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 focus:bg-white focus:outline-none text-black">
                      <option>[ Seleccione ]</option>
                      <option>ALUMNO</option>
                      <option>DOCENTE</option>
                      <option>ADMINISTRADOR</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 border-2 border-black p-4">
                    <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-black">
                      Gestión de Credenciales
                    </label>

                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="tipoCredencial"
                          defaultChecked
                          className="w-4 h-4 accent-black border-2 border-black"
                        />
                        <span className="text-xs font-bold uppercase text-black">
                          Generar automáticamente
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="tipoCredencial"
                          className="w-4 h-4 accent-black border-2 border-black"
                        />
                        <span className="text-xs font-bold uppercase text-black">
                          Definir manualmente
                        </span>
                      </label>
                    </div>

                    <div className="mt-4 border-t-2 border-dashed border-gray-300 pt-4">
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-black">
                        Contraseña Manual
                      </label>
                      <input
                        type="password"
                        placeholder="ESCRIBA CONTRASEÑA..."
                        disabled
                        className="w-full border-2 border-black p-3 font-bold outline-none transition-colors duration-200 bg-gray-100 text-gray-500 placeholder:text-gray-400 cursor-not-allowed"
                      />

                      <p className="text-[10px] font-bold uppercase mt-2 text-gray-600 leading-relaxed">
                        Si el administrador elige definirla manualmente, esta contraseña será
                        encriptada en el backend antes de guardarse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-black">
                <h2 className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1 text-black">
                  3. Confirmación del Registro
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 border-2 border-black p-4">
                    <p className="text-xs font-bold uppercase text-gray-700 mb-2">
                      Resultado Esperado
                    </p>
                    <ul className="space-y-2 text-sm font-bold uppercase text-black leading-relaxed">
                      <li>• El usuario se registrará si el correo es único.</li>
                      <li>• Se asignará el rol seleccionado.</li>
                      <li>• Se generará o registrará la contraseña definida.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border-2 border-dashed border-gray-400 p-4">
                    <p className="text-xs font-bold uppercase text-gray-700 mb-2">
                      Envío de Credenciales
                    </p>
                    <p className="text-sm font-bold uppercase leading-relaxed text-black">
                      El sistema puede enviar automáticamente las credenciales al correo del
                      usuario recién creado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-end border-t-4 border-black">
                <Boton variant="ghost" size="md">
                  Cancelar
                </Boton>

                <Boton variant="wire" size="md" icon={<span className="text-sm">＋</span>}>
                  Registrar Usuario
                </Boton>
              </div>
            </form>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-black p-4">
              <p className="text-[10px] font-bold uppercase text-gray-700 mb-2">
                Validaciones del Formulario
              </p>
              <p className="text-xs font-bold uppercase leading-relaxed text-black">
                Los campos obligatorios no permitirán el envío si están vacíos o si el correo no
                cumple el formato requerido.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-4">
              <p className="text-[10px] font-bold uppercase text-gray-700 mb-2">
                Seguridad
              </p>
              <p className="text-xs font-bold uppercase leading-relaxed text-black">
                Las credenciales serán protegidas mediante cifrado seguro antes de almacenarse en
                el sistema.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page