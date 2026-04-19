import React from 'react'

const page = () => {
    return (
        <>
            <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex z-10">
                <div className="p-6 border-b-2 border-black flex items-center space-x-3">
                    <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">L</div>
                    <span className="text-xl font-bold uppercase tracking-widest">[ LOGO ]</span>
                </div>

                <div className="p-6 flex items-center space-x-4 border-b-2 border-dashed border-gray-300">
                    <div className="w-10 h-10 border-2 border-black bg-gray-200 flex items-center justify-center">
                        <i className="fa-solid fa-user-tie"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase truncate">[ ADMIN ]</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Sistemas</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-4 mt-6">
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-house w-5"></i>
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <i className="fa-solid fa-users-gear w-5"></i>
                        <span>Gestión Usuarios</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-file-upload w-5"></i>
                        <span>Carga Masiva</span>
                    </a>
                </nav>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 relative">

                <div className="p-8 max-w-7xl mx-auto w-full pb-20">

                    <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-6 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold uppercase">Gestión de Usuarios</h1>
                            <p className="text-gray-600 font-bold uppercase mt-2 text-sm tracking-widest">Control de accesos y roles (RBAC)</p>
                        </div>
                        <button className="bg-black text-white border-2 border-black px-6 py-3 font-bold uppercase text-sm flex items-center hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0_0_rgba(156,163,175,1)] btn-wire">
                            <i className="fa-solid fa-plus mr-2"></i> Nuevo Usuario
                        </button>
                    </div>

                    <div className="bg-white border-2 border-black p-4 mb-8 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
                                <i className="fa-solid fa-search"></i>
                            </div>
                            <input type="text" placeholder="BUSCAR POR NOMBRE O CORREO..." className="w-full border-2 border-black pl-10 pr-3 py-3 font-bold text-sm outline-none focus:border-dashed focus:bg-gray-50" />
                        </div>

                        <select className="w-full lg:w-48 border-2 border-black p-3 font-bold uppercase text-sm bg-gray-100 focus:outline-none cursor-pointer">
                            <option>[ TODOS LOS ROLES ]</option>
                            <option>ADMINISTRADOR</option>
                            <option>DOCENTE</option>
                            <option>ALUMNO</option>
                        </select>

                        <select className="w-full lg:w-48 border-2 border-black p-3 font-bold uppercase text-sm bg-gray-100 focus:outline-none cursor-pointer">
                            <option>[ TODOS LOS ESTADOS ]</option>
                            <option>ACTIVOS</option>
                            <option>INACTIVOS / BANEADOS</option>
                        </select>
                    </div>

                    <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-black text-white border-b-4 border-black uppercase text-xs tracking-widest">
                                    <th className="px-6 py-4 font-bold border-r-2 border-gray-700">Usuario</th>
                                    <th className="px-6 py-4 font-bold border-r-2 border-gray-700">Rol Actual</th>
                                    <th className="px-6 py-4 font-bold border-r-2 border-gray-700">Estado</th>
                                    <th className="px-6 py-4 font-bold border-r-2 border-gray-700">Último Acceso</th>
                                    <th className="px-6 py-4 font-bold text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">

                                <tr className="border-b-2 border-gray-300 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 border-2 border-black bg-gray-200 flex items-center justify-center"><i className="fa-solid fa-chalkboard-user text-xs"></i></div>
                                            <div>
                                                <p className="font-bold uppercase text-base">[ APELLIDO, NOMBRE DOCENTE ]</p>
                                                <p className="text-xs text-gray-500 font-bold">docente@colegio.edu.pe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span className="bg-gray-200 border-2 border-black px-2 py-1 text-xs font-bold uppercase">Docente</span>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase"><i className="fa-solid fa-circle text-[8px] mr-1"></i> Activo</span>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 text-xs font-bold text-gray-500 uppercase">Hoy, 08:30 AM</td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <button className="w-8 h-8 border-2 border-black hover:bg-black hover:text-white transition-colors" title="Editar Rol">
                                            <i className="fa-solid fa-user-pen"></i>
                                        </button>
                                        <button className="w-8 h-8 border-2 border-black hover:bg-black hover:text-white transition-colors" title="Restablecer Credenciales">
                                            <i className="fa-solid fa-key"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr className="border-b-2 border-gray-300 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center"><i className="fa-solid fa-user-graduate text-xs"></i></div>
                                            <div>
                                                <p className="font-bold uppercase text-base">[ APELLIDO, ALUMNO 1 ]</p>
                                                <p className="text-xs text-gray-500 font-bold">alumno1@colegio.edu.pe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span className="border-b-2 border-black text-xs font-bold uppercase">Alumno</span>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase"><i className="fa-solid fa-circle text-[8px] mr-1"></i> Activo</span>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 text-xs font-bold text-gray-500 uppercase">Hace 2 días</td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <button className="w-8 h-8 border-2 border-black hover:bg-black hover:text-white transition-colors" title="Editar Rol">
                                            <i className="fa-solid fa-user-pen"></i>
                                        </button>
                                        <button className="w-8 h-8 border-2 border-black hover:bg-black hover:text-white transition-colors" title="Restablecer Credenciales">
                                            <i className="fa-solid fa-key"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr className="border-b-2 border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors opacity-75">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 border-2 border-dashed border-gray-400 bg-gray-200 flex items-center justify-center"><i className="fa-solid fa-user-slash text-xs text-gray-500"></i></div>
                                            <div>
                                                <p className="font-bold uppercase text-base text-gray-600">[ APELLIDO, ALUMNO 2 ]</p>
                                                <p className="text-xs text-gray-400 font-bold line-through">alumno2@colegio.edu.pe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span className="text-xs font-bold uppercase text-gray-500">Alumno</span>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span className="border-2 border-dashed border-gray-400 text-gray-500 px-2 py-1 text-xs font-bold uppercase">Inactivo</span>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 text-xs font-bold text-gray-400 uppercase">Nunca</td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <button className="w-8 h-8 border-2 border-gray-400 text-gray-400 hover:border-black hover:text-black transition-colors" title="Editar Rol">
                                            <i className="fa-solid fa-user-pen"></i>
                                        </button>
                                        <button className="w-8 h-8 border-2 border-gray-400 text-gray-400 cursor-not-allowed" title="No se puede restablecer credenciales a usuario inactivo" disabled>
                                            <i className="fa-solid fa-key"></i>
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white">
                            <span className="text-xs font-bold uppercase text-gray-500">Mostrando 1 a 10 de 150 usuarios</span>
                            <div className="flex space-x-2">
                                <button className="border-2 border-gray-300 text-gray-400 px-3 py-1 font-bold uppercase text-sm cursor-not-allowed">Anterior</button>
                                <button className="bg-black text-white border-2 border-black px-3 py-1 font-bold text-sm">1</button>
                                <button className="border-2 border-black px-3 py-1 font-bold text-sm hover:bg-gray-200">2</button>
                                <button className="border-2 border-black px-3 py-1 font-bold text-sm hover:bg-gray-200">3</button>
                                <button className="border-2 border-black px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200">Siguiente</button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <div className="hidden fixed inset-0 bg-black bg-opacity-80 z-50 items-center justify-center p-4 backdrop-blur-sm">
                <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-[16px_16px_0_0_rgba(255,255,255,1)] relative">

                    <button className="absolute top-4 right-4 text-2xl hover:text-gray-500"><i className="fa-solid fa-xmark"></i></button>

                    <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">Editar Usuario</h2>

                    <div className="mb-6 p-3 bg-gray-100 border-2 border-black text-sm">
                        <p className="font-bold uppercase">[ APELLIDO, ALUMNO 1 ]</p>
                        <p className="text-xs text-gray-600 font-bold">alumno1@colegio.edu.pe</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-600">Asignar Rol (RBAC)</label>
                            <select className="w-full border-2 border-black p-3 font-bold uppercase outline-none focus:bg-gray-50 cursor-pointer">
                                <option>ALUMNO</option>
                                <option>DOCENTE</option>
                                <option>ADMINISTRADOR</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-600">Estado de la Cuenta</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center cursor-pointer">
                                    <input type="radio" name="estado" className="w-5 h-5 accent-black border-2 border-black mr-2" checked />
                                    <span className="font-bold uppercase text-sm">Activo</span>
                                </label>
                                <label className="flex items-center cursor-pointer text-gray-500">
                                    <input type="radio" name="estado" className="w-5 h-5 accent-black border-2 border-black mr-2" />
                                    <span className="font-bold uppercase text-sm">Inactivo (Suspender)</span>
                                </label>
                            </div>
                        </div>

                        <div className="pt-4 flex gap-4">
                            <button type="button" className="flex-1 bg-white border-2 border-black py-3 font-bold uppercase text-sm hover:bg-gray-100 transition-colors">Cancelar</button>
                            <button type="button" className="flex-1 bg-black text-white border-2 border-black py-3 font-bold uppercase text-sm hover:bg-gray-800 transition-colors shadow-[4px_4px_0_0_rgba(156,163,175,1)]">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="hidden fixed inset-0 bg-black bg-opacity-80 z-50 items-center justify-center p-4 backdrop-blur-sm">
                <div className="bg-white border-4 border-black p-8 max-w-sm w-full shadow-[16px_16px_0_0_rgba(255,255,255,1)] text-center relative">

                    <div className="w-16 h-16 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        <i className="fa-solid fa-key"></i>
                    </div>

                    <h2 className="text-xl font-bold uppercase mb-2">Restablecer Accesos</h2>

                    <p className="text-xs font-bold text-gray-500 uppercase mb-6 leading-relaxed">
                        ¿Estás seguro de generar una nueva contraseña temporal para <span className="text-black bg-gray-200 px-1">[ APELLIDO, NOMBRE ]</span>?
                    </p>

                    <div className="bg-gray-50 border-2 border-dashed border-gray-400 p-3 text-left mb-6">
                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-1"><i className="fa-solid fa-circle-info mr-1"></i> Postcondición:</p>
                        <p className="text-[10px] font-bold uppercase text-black">Se enviará un correo automáticamente con la nueva clave. El token actual será invalidado por seguridad.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button type="button" className="w-full bg-black text-white border-2 border-black py-3 font-bold uppercase text-sm hover:bg-gray-800 transition-colors shadow-[4px_4px_0_0_rgba(156,163,175,1)]">
                            Generar y Enviar
                        </button>
                        <button type="button" className="w-full bg-white border-none py-2 font-bold uppercase text-xs text-gray-500 hover:text-black hover:underline transition-all">
                            Cancelar Operación
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page
