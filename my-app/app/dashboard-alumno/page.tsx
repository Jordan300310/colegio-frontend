import React from 'react'

const page = () => {
    return (
        <>
            <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex">
                <div className="p-6 border-b-2 border-black flex items-center space-x-3">
                    <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">L</div>
                    <span className="text-xl font-bold uppercase tracking-widest">[ LOGO ]</span>
                </div>

                <div className="p-6 flex items-center space-x-4 border-b-2 border-dashed border-gray-300">
                    <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase">[ Nombre Alumno ]</p>
                        <p className="text-xs text-gray-600">Perfil: Estudiante</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-4 mt-6">
                    <a href="#" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold">
                        <i className="fa-solid fa-chart-pie w-5"></i>
                        <span>Mi Progreso</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-book w-5"></i>
                        <span>Catálogo Cursos</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-calendar-check w-5"></i>
                        <span>Evaluaciones</span>
                    </a>
                </nav>

                <div className="p-4 border-t-2 border-black">
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2">
                        <i className="fa-solid fa-sign-out-alt w-5"></i>
                        <span className="uppercase text-sm font-bold">Cerrar Sesión</span>
                    </a>
                </div>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">

                <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
                    <span className="font-bold uppercase">[ LOGO ]</span>
                    <button className="text-black"><i className="fa-solid fa-bars text-xl"></i></button>
                </header>

                <div className="p-8 max-w-7xl mx-auto w-full">

                    <div className="mb-8 flex justify-between items-end border-b-2 border-black pb-4">
                        <div>
                            <h1 className="text-3xl font-bold uppercase">Dashboard / Mi Progreso</h1>
                            <p className="text-gray-600 mt-2 text-sm">Visualización de datos de avance y calificaciones.</p>
                        </div>
                        <button className="hidden sm:flex border-2 border-black bg-white px-4 py-2 font-bold hover:bg-gray-200 items-center space-x-2">
                            <i className="fa-solid fa-download"></i>
                            <span className="uppercase text-sm">Exportar PDF</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white p-6 border-2 border-black flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-gray-600 uppercase mb-1">Avance Total</p>
                                <p className="text-4xl font-bold text-black">65%</p>
                            </div>
                            <div className="w-16 h-16 rounded-full border-4 border-black border-dashed flex items-center justify-center">
                                <i className="fa-solid fa-chart-line text-xl"></i>
                            </div>
                        </div>

                        <div className="bg-white p-6 border-2 border-black">
                            <p className="text-sm font-bold text-gray-600 uppercase mb-1">Lecciones</p>
                            <div className="flex items-end space-x-2">
                                <p className="text-4xl font-bold text-black">26</p>
                                <p className="text-lg text-gray-500 font-bold mb-1">/ 40</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 border-2 border-black">
                            <p className="text-sm font-bold text-gray-600 uppercase mb-1">Promedio General</p>
                            <p className="text-4xl font-bold text-black">18.5</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">Ruta de Aprendizaje</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

                        <div className="bg-white border-2 border-black p-5 relative">
                            <div className="absolute top-0 right-0 bg-gray-200 border-b-2 border-l-2 border-black text-xs font-bold px-2 py-1 uppercase">Completado</div>
                            <div className="mb-4 mt-2">
                                <h3 className="font-bold text-lg uppercase">[ Módulo 1 ]</h3>
                                <p className="text-sm text-gray-600">Fundamentos</p>
                            </div>
                            <button className="w-full py-2 border-2 border-black text-sm font-bold uppercase hover:bg-gray-100">Repasar</button>
                        </div>

                        <div className="bg-gray-200 border-4 border-black p-5 relative transform scale-105 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                            <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 uppercase">Activo</div>
                            <div className="mb-4 mt-2">
                                <h3 className="font-bold text-lg uppercase">[ Módulo 2 ]</h3>
                                <p className="text-sm text-gray-800">APIs RESTful</p>
                            </div>
                            <div className="w-full border-2 border-black bg-white h-4 mb-4">
                                <div className="bg-black h-full" style={{ width: '60%' }}></div>
                            </div>
                            <button className="w-full py-2 bg-black text-white text-sm font-bold uppercase hover:bg-gray-800">Continuar</button>
                        </div>

                        <div className="bg-gray-50 border-2 border-dashed border-gray-400 p-5 relative opacity-60">
                            <div className="absolute top-0 right-0 border-b-2 border-l-2 border-gray-400 text-xs font-bold px-2 py-1 uppercase"><i className="fa-solid fa-lock mr-1"></i>Bloqueado</div>
                            <div className="mb-4 mt-2">
                                <h3 className="font-bold text-lg text-gray-600 uppercase">[ Módulo 3 ]</h3>
                                <p className="text-sm text-gray-500">Base de Datos</p>
                            </div>
                            <div className="w-full py-2 border-2 border-gray-300 text-gray-400 text-center text-sm font-bold uppercase">No Disponible</div>
                        </div>

                    </div>

                    <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">Historial de Calificaciones</h2>
                    <div className="bg-white border-2 border-black overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-black border-b-2 border-black text-sm uppercase">
                                    <th className="px-6 py-4 border-r-2 border-black font-bold">Evaluación</th>
                                    <th className="px-6 py-4 border-r-2 border-black font-bold">Módulo</th>
                                    <th className="px-6 py-4 border-r-2 border-black font-bold">Nota</th>
                                    <th className="px-6 py-4 font-bold text-center">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-bold">
                                <tr className="border-b-2 border-gray-300">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">Examen Práctico 1</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">Módulo 1</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">19 / 20</td>
                                    <td className="px-6 py-4 text-center">[ APROBADO ]</td>
                                </tr>
                                <tr className="border-b-2 border-gray-300">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">Test Control de Flujo</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">Módulo 1</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">18 / 20</td>
                                    <td className="px-6 py-4 text-center">[ APROBADO ]</td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">Examen Endpoints</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">Módulo 2</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 text-gray-500">--</td>
                                    <td className="px-6 py-4 text-center text-gray-500">[ PENDIENTE ]</td>
                                </tr>
                            </tbody>
                        </table>
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
