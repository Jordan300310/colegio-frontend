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
                        <i className="fa-solid fa-house"></i>
                        <span>Inicio</span>
                    </a>
                    <div className="h-0.5 bg-gray-300 w-full my-4"></div>
                    <a href="#"
                        className="flex items-center space-x-3 bg-black text-white px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(156,163,175,1)]">
                        <i className="fa-solid fa-file-export"></i>
                        <span>Generar Reportes</span>
                    </a>
                    <a href="#"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        <span>Historial</span>
                    </a>
                </nav>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">

                <div className="p-8 max-w-4xl mx-auto w-full">

                    <div className="mb-10 border-b-4 border-black pb-6">
                        <h1 className="text-3xl font-bold uppercase">Generador de Reportes Académicos</h1>
                        <p className="text-gray-600 font-bold uppercase mt-2 text-sm italic">
                            [ Módulo de Exportación de Datos para Informe de Labor Social ]
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black p-8 mb-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h2 className="text-xl font-bold uppercase mb-6 bg-black text-white inline-block px-3 py-1">
                            1. Configurar Filtros
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-500">Sección /
                                    Grupo</label>
                                <select
                                    className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 focus:bg-white focus:outline-none">
                                    <option>[ TODAS LAS SECCIONES ]</option>
                                    <option>4TO "A" - PRIMER SEMESTRE</option>
                                    <option>5TO "B" - SEGUNDO SEMESTRE</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-500">Alumno
                                    Específico (Opcional)</label>
                                <select
                                    className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 focus:bg-white focus:outline-none">
                                    <option>[ TODOS LOS ALUMNOS ]</option>
                                    <option>APELLIDO, NOMBRE 1</option>
                                    <option>APELLIDO, NOMBRE 2</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-500">Fecha de
                                    Inicio</label>
                                <input type="text" placeholder="DD/MM/AAAA"
                                    className="w-full border-2 border-black p-3 font-bold uppercase focus:outline-none"
                                    value="01/01/2026" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-500">Fecha de
                                    Fin</label>
                                <input type="text" placeholder="DD/MM/AAAA"
                                    className="w-full border-2 border-black p-3 font-bold uppercase focus:outline-none"
                                    value="13/04/2026" />
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-black border-2 border-black" checked />
                                <span className="text-sm font-bold uppercase">Incluir Gráficas de Rendimiento</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer mt-3">
                                <input type="checkbox" className="w-5 h-5 accent-black border-2 border-black" />
                                <span className="text-sm font-bold uppercase">Incluir Historial de Intentos de Examen</span>
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                        <div
                            className="bg-white border-2 border-black p-8 text-center flex flex-col items-center hover:bg-gray-50 transition-colors group cursor-pointer shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
                            <div
                                className="w-16 h-16 border-2 border-black mb-4 flex items-center justify-center text-3xl group-hover:bg-black group-hover:text-white transition-all">
                                <i className="fa-solid fa-file-pdf"></i>
                            </div>
                            <h3 className="font-bold text-lg uppercase mb-2">Exportar como PDF</h3>
                            <p className="text-xs text-gray-500 uppercase mb-6 font-bold">Ideal para informes impresos y evidencias
                                oficiales.</p>
                            <button
                                className="w-full border-4 border-black py-3 font-bold uppercase text-sm bg-white hover:bg-black hover:text-white transition-all btn-wire">
                                Descargar .PDF
                            </button>
                        </div>

                        <div
                            className="bg-white border-2 border-black p-8 text-center flex flex-col items-center hover:bg-gray-50 transition-colors group cursor-pointer shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
                            <div
                                className="w-16 h-16 border-2 border-black mb-4 flex items-center justify-center text-3xl group-hover:bg-black group-hover:text-white transition-all">
                                <i className="fa-solid fa-file-excel"></i>
                            </div>
                            <h3 className="font-bold text-lg uppercase mb-2">Exportar como Excel</h3>
                            <p className="text-xs text-gray-500 uppercase mb-6 font-bold">Ideal para análisis estadístico y
                                manipulación de datos.</p>
                            <button
                                className="w-full border-4 border-black py-3 font-bold uppercase text-sm bg-white hover:bg-black hover:text-white transition-all btn-wire">
                                Descargar .XLSX
                            </button>
                        </div>

                    </div>

                    <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">Reportes Generados
                        Recientemente</h2>
                    <div className="bg-white border-2 border-black overflow-hidden mb-12">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-gray-200 border-b-2 border-black uppercase font-bold">
                                    <th className="px-6 py-4 border-r-2 border-black">Fecha</th>
                                    <th className="px-6 py-4 border-r-2 border-black">Tipo / Filtro</th>
                                    <th className="px-6 py-4 border-r-2 border-black">Usuario</th>
                                    <th className="px-6 py-4 text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold uppercase text-xs">
                                <tr className="border-b-2 border-gray-300">
                                    <td className="px-6 py-4 border-r-2 border-gray-300 italic">13/04/2026</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">GRUPAL - SECC. 4TO "A"</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">PROF. [NOMBRE]</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            className="border-b-2 border-black hover:text-gray-500 transition-colors">RE-DESCARGAR</button>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 border-r-2 border-gray-300 italic">12/04/2026</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">INDIVIDUAL - ALUMNO [X]</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">ADMIN [JUAN J.]</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            className="border-b-2 border-black hover:text-gray-500 transition-colors">RE-DESCARGAR</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="border-2 border-dashed border-gray-400 p-4 bg-gray-50 text-xs font-bold text-gray-500">
                        [ NOTA: LA GENERACIÓN DE ARCHIVOS UTILIZA LIBRERÍAS iTEXT (PDF) Y APACHE POI (EXCEL).
                        SE RECOMIENDA PROCESAR ESTAS PETICIONES DE FORMA ASÍNCRONA SI EL VOLUMEN DE DATOS ES ALTO. ]
                    </div>

                </div>
            </main>
        </>
    )
}

export default page
