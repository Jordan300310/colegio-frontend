import React from 'react'

const page = () => {
    return (
        <>

            <div className="w-full max-w-4xl bg-white border-4 border-black flex flex-col md:flex-row shadow-[16px_16px_0_0_rgba(0,0,0,1)] mb-20 relative">

                <div className="absolute -top-4 -left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase border-2 border-black">
                    Estado 1: Pantalla de Acceso
                </div>

                <div className="w-full md:w-1/2 bg-gray-200 border-b-4 md:border-b-0 md:border-r-4 border-black p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <i className="fa-solid fa-graduation-cap absolute -bottom-10 -left-10 text-9xl text-gray-300 opacity-50"></i>

                    <div className="w-20 h-20 border-4 border-black flex items-center justify-center font-bold text-4xl bg-white mb-6 z-10">
                        L
                    </div>
                    <h1 className="text-3xl font-bold uppercase tracking-widest z-10 mb-2">[ LOGO SISTEMA ]</h1>
                    <p className="text-sm font-bold text-gray-600 uppercase z-10">Plataforma Educativa de Labor Social</p>

                    <div className="mt-12 p-4 border-2 border-dashed border-gray-400 bg-gray-100 z-10 text-xs text-gray-500 font-bold uppercase text-left w-full">
                        <p><i className="fa-solid fa-circle-info mr-2"></i>Acceso exclusivo para:</p>
                        <ul className="list-disc list-inside mt-2 ml-2">
                            <li>Alumnos Matriculados</li>
                            <li>Plana Docente</li>
                            <li>Administración</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
                    <h2 className="text-2xl font-bold uppercase mb-2">Iniciar Sesión</h2>
                    <p className="text-xs font-bold text-gray-500 uppercase mb-8 tracking-widest border-b-2 border-gray-200 pb-4">Ingresa tus credenciales para continuar</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Correo Institucional o Usuario</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                                <input type="email" placeholder="ejemplo@colegio.edu.pe" className="w-full border-2 border-black pl-10 pr-3 py-3 font-bold text-sm outline-none focus:border-dashed focus:bg-gray-50 transition-colors" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-bold uppercase tracking-widest">Contraseña</label>
                                <a href="#recuperacion" className="text-xs font-bold uppercase border-b border-black hover:text-gray-500 transition-colors cursor-pointer">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <input type="password" placeholder="••••••••" className="w-full border-2 border-black pl-10 pr-10 py-3 font-bold text-sm outline-none focus:border-dashed focus:bg-gray-50 transition-colors" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-black">
                                    <i className="fa-regular fa-eye"></i>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="recordar" className="w-4 h-4 accent-black border-2 border-black cursor-pointer" />
                            <label htmlFor="recordar" className="ml-2 text-xs font-bold uppercase cursor-pointer">Mantener sesión iniciada</label>
                        </div>

                        <button type="button" className="w-full bg-black text-white border-2 border-black py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black shadow-[4px_4px_0_0_rgba(156,163,175,1)] transition-all btn-wire mt-4">
                            Ingresar al Sistema <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full max-w-4xl flex items-center my-8 opacity-50">
                <div className="flex-grow border-t-4 border-dashed border-black"></div>
                <span className="mx-4 font-bold uppercase tracking-widest text-sm text-center">Interacción: Al hacer clic en "¿Olvidaste tu contraseña?"</span>
                <div className="flex-grow border-t-4 border-dashed border-black"></div>
            </div>

            <div id="recuperacion" className="w-full max-w-md bg-white border-4 border-black p-8 relative shadow-[16px_16px_0_0_rgba(0,0,0,1)]">

                <div className="absolute -top-4 -right-4 bg-white text-black px-3 py-1 text-xs font-bold uppercase border-2 border-black">
                    Estado 2: Recuperación
                </div>

                <div className="text-center mb-6">
                    <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center text-2xl mx-auto mb-4 bg-gray-100">
                        <i className="fa-solid fa-key"></i>
                    </div>
                    <h2 className="text-2xl font-bold uppercase mb-2">Recuperar Acceso</h2>
                    <p className="text-xs font-bold text-gray-500 uppercase leading-relaxed">
                        Ingresa tu correo electrónico registrado. Te enviaremos un enlace temporal para restablecer tu contraseña.
                    </p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2">Correo Electrónico</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <input type="email" placeholder="Ingresa tu correo..." className="w-full border-2 border-black pl-10 pr-3 py-3 font-bold text-sm outline-none focus:border-dashed focus:bg-gray-50" />
                        </div>
                    </div>

                    <button type="button" className="w-full bg-black text-white border-2 border-black py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors btn-wire">
                        Enviar Instrucciones
                    </button>
                </form>

                <div className="mt-6 text-center border-t-2 border-gray-200 pt-4">
                    <a href="#" className="text-xs font-bold uppercase text-gray-500 hover:text-black transition-colors flex items-center justify-center">
                        <i className="fa-solid fa-arrow-left mr-2"></i> Volver a Iniciar Sesión
                    </a>
                </div>
            </div>

        </>
    )
}

export default page
