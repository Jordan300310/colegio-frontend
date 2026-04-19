import React from 'react'

const page = () => {
    return (
        <>
            <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex">
                <div className="p-6 border-b-2 border-black flex items-center space-x-3">
                    <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">L</div>
                    <span className="text-xl font-bold uppercase tracking-widest">[ LOGO ]</span>
                </div>

                <nav className="flex-1 px-4 space-y-4 mt-6">
                    <a href="#"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-house w-5"></i>
                        <span>Dashboard</span>
                    </a>
                    <a href="#"
                        className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <i className="fa-solid fa-users-gear w-5"></i>
                        <span>Gestión Usuarios</span>
                    </a>
                    <a href="#"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-file-upload w-5"></i>
                        <span>Carga Masiva</span>
                    </a>
                </nav>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">

                <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
                    <span className="font-bold uppercase">[ LOGO ]</span>
                    <button className="text-black"><i className="fa-solid fa-bars text-xl"></i></button>
                </header>

                <div className="p-8 max-w-4xl mx-auto w-full pb-20">

                    <div className="text-xs font-bold uppercase text-gray-500 mb-6 tracking-widest">
                        <a href="#" className="hover:text-black hover:underline">Gestión Usuarios</a>
                        <i className="fa-solid fa-angle-right mx-2 text-black"></i>
                        <span className="text-black border-b-2 border-black">Nuevo Registro</span>
                    </div>

                    <div className="mb-8 border-b-4 border-black pb-4">
                        <h1 className="text-3xl font-bold uppercase">Crear Nuevo Usuario</h1>
                        <p className="text-gray-600 font-bold uppercase mt-2 text-sm tracking-widest">Registro manual individual
                            (CUS-06)</p>
                    </div>

                    <div className="bg-white border-4 border-black p-8 shadow-[16px_16px_0_0_rgba(0,0,0,1)] relative">

                        <div
                            className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black">
                            Formulario de Ingreso
                        </div>

                        <form className="space-y-8">

                            <div>
                                <h2
                                    className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1">
                                    <i className="fa-regular fa-address-card mr-2"></i> 1. Datos Personales</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                                    <div>
                                        <label
                                            className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nombres
                                            <span className="text-black">*</span></label>
                                        <input type="text" placeholder="EJ: CARLOS ALBERTO"
                                            className="w-full border-2 border-black p-3 font-bold uppercase bg-white focus:bg-gray-50 focus:outline-none"
                                            required />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Apellidos
                                            <span className="text-black">*</span></label>
                                        <input type="text" placeholder="EJ: MENDOZA RUIZ"
                                            className="w-full border-2 border-black p-3 font-bold uppercase bg-white focus:bg-gray-50 focus:outline-none"
                                            required />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Correo
                                        Electrónico Institucional <span className="text-black">*</span></label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <input type="email" placeholder="EJ: ALUMNO@COLEGIO.EDU.PE"
                                            className="w-full border-2 border-black pl-10 pr-3 py-3 font-bold uppercase text-sm outline-none focus:border-dashed focus:bg-gray-50"
                                            required />
                                    </div>
                                    <p className="text-[10px] font-bold uppercase mt-1 hidden"><i
                                        className="fa-solid fa-triangle-exclamation mr-1"></i> El correo ya está registrado.</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t-2 border-black">
                                <h2
                                    className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1">
                                    <i className="fa-solid fa-shield-halved mr-2"></i> 2. Configuración de Acceso</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                                    <div>
                                        <label
                                            className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Perfil
                                            de Usuario (RBAC) <span className="text-black">*</span></label>
                                        <select
                                            className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 focus:bg-white focus:outline-none cursor-pointer">
                                            <option value="" disabled selected>[ SELECCIONE UN ROL ]</option>
                                            <option value="alumno">ALUMNO</option>
                                            <option value="docente">DOCENTE</option>
                                            <option value="admin">ADMINISTRADOR</option>
                                        </select>
                                    </div>

                                    <div className="bg-gray-50 border-2 border-black p-4 relative">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-black mb-4">Gestión
                                            de Credenciales</label>

                                        <div className="space-y-3">
                                            <label className="flex items-start cursor-pointer group">
                                                <input type="radio" name="password_type"
                                                    className="mt-1 w-4 h-4 accent-black border-2 border-black mr-3" checked />
                                                <div>
                                                    <span className="font-bold uppercase text-sm group-hover:underline">Generar
                                                        Automáticamente</span>
                                                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">El sistema
                                                        creará una clave segura y la enviará por correo.</p>
                                                </div>
                                            </label>

                                            <div className="border-t-2 border-dashed border-gray-300 my-2"></div>

                                            <label className="flex items-start cursor-pointer group">
                                                <input type="radio" name="password_type"
                                                    className="mt-1 w-4 h-4 accent-black border-2 border-black mr-3" />
                                                <div className="w-full">
                                                    <span
                                                        className="font-bold uppercase text-sm text-gray-600 group-hover:text-black transition-colors">Definir
                                                        Manualmente</span>
                                                    <input type="text" placeholder="ESCRIBA CONTRASEÑA..." disabled
                                                        className="w-full border-2 border-dashed border-gray-400 p-2 mt-2 font-bold uppercase bg-gray-200 text-gray-400 cursor-not-allowed" />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-end border-t-4 border-black">
                                <button type="button"
                                    className="bg-white text-black border-2 border-black px-8 py-3 font-bold uppercase text-sm hover:bg-gray-100 transition-colors">
                                    Cancelar
                                </button>
                                <button type="button"
                                    className="bg-black text-white border-2 border-black px-10 py-3 font-bold uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors btn-wire shadow-[4px_4px_0_0_rgba(156,163,175,1)] flex items-center justify-center">
                                    <i className="fa-solid fa-user-plus mr-2"></i> Registrar Usuario
                                </button>
                            </div>

                        </form>
                    </div>

                    <div className="mt-8 text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <p>Validación de Frontend: Los campos obligatorios (*) no permitirán el envío del formulario si están
                            vacíos.</p>
                        <p>La contraseña ingresada manualmente será encriptada (BCrypt) en el backend antes de guardarse.</p>
                    </div>

                </div>
            </main>

        </>
    )
}

export default page
