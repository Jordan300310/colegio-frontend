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
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase">[ Nombre Docente ]</p>
                        <p className="text-xs text-gray-600 uppercase">Perfil: Profesor</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-4 mt-6">
                    <a href="#"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-users-gear w-5"></i>
                        <span>Mis Secciones</span>
                    </a>
                    <a href="#"
                        className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <i className="fa-solid fa-chart-column w-5"></i>
                        <span>Tablero de Avance</span>
                    </a>
                    <a href="#"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-file-pdf w-5"></i>
                        <span>Reportes (PDF)</span>
                    </a>
                </nav>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">

                <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
                    <span className="font-bold uppercase">[ LOGO ]</span>
                    <button className="text-black"><i className="fa-solid fa-bars text-xl"></i></button>
                </header>

                <div className="p-8 max-w-7xl mx-auto w-full">

                    <div className="mb-8 border-b-2 border-black pb-4">
                        <h1 className="text-3xl font-bold uppercase">Tablero de Avance Grupal</h1>
                        <p className="text-gray-600 mt-2 text-sm uppercase">Supervisión de métricas y rendimiento por sección.</p>
                    </div>

                    <div
                        className="bg-white border-2 border-black p-6 mb-8 flex flex-col lg:flex-row gap-6 items-end shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <div className="w-full lg:w-1/2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Seleccionar
                                Sección Activa</label>
                            <select
                                className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 cursor-pointer focus:outline-none focus:bg-white text-lg">
                                <option>[ 4TO "A" - TALLER DE PROGRAMACIÓN ]</option>
                                <option>5TO "B" - BASE DE DATOS</option>
                                <option>3RO "ÚNICA" - LÓGICA DIGITAL</option>
                            </select>
                        </div>

                        <div className="w-full lg:w-1/4">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Fecha
                                Inicio</label>
                            <input type="text" placeholder="DD/MM/AAAA"
                                className="w-full border-2 border-black p-3 font-bold uppercase focus:outline-none"
                                value="01/03/2026" />
                        </div>

                        <div className="w-full lg:w-1/4 flex gap-4">
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Fecha
                                    Fin</label>
                                <input type="text" placeholder="DD/MM/AAAA"
                                    className="w-full border-2 border-black p-3 font-bold uppercase focus:outline-none"
                                    value="ACTUALIDAD" />
                            </div>
                            <button
                                className="bg-black text-white border-2 border-black px-4 py-3 h-[52px] hover:bg-gray-800 transition-colors self-end"
                                title="Filtrar">
                                <i className="fa-solid fa-filter"></i>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 border-2 border-black">
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-widest">Total Alumnos</p>
                            <p className="text-4xl font-bold">32</p>
                        </div>
                        <div className="bg-white p-6 border-2 border-black">
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-widest">Promedio Grupo</p>
                            <p className="text-4xl font-bold">16.4 <span className="text-sm text-gray-400">/ 20</span></p>
                        </div>
                        <div className="bg-black text-white p-6 border-2 border-black relative overflow-hidden">
                            <i
                                className="fa-solid fa-triangle-exclamation absolute -right-4 -bottom-4 text-6xl text-gray-800 opacity-50"></i>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1 tracking-widest">Alumnos Rezagados</p>
                            <p className="text-4xl font-bold relative z-10">8 <span className="text-lg text-gray-400">riesgo alto</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                        <div className="bg-white border-2 border-black p-6">
                            <h3 className="font-bold text-lg uppercase mb-6 border-b-2 border-dashed border-gray-400 pb-2">Avance
                                Promedio por Módulo</h3>

                            <div className="h-48 border-b-2 border-l-2 border-black flex items-end justify-between p-2 pt-8 gap-2">
                                <div className="w-full flex flex-col items-center group">
                                    <span
                                        className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">95%</span>
                                    <div
                                        className="w-full bg-black h-[95%] border-2 border-black group-hover:bg-gray-800 transition-colors">
                                    </div>
                                    <span className="text-xs font-bold mt-2 truncate max-w-full">MOD 1</span>
                                </div>
                                <div className="w-full flex flex-col items-center group">
                                    <span
                                        className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">70%</span>
                                    <div
                                        className="w-full bg-black h-[70%] border-2 border-black group-hover:bg-gray-800 transition-colors">
                                    </div>
                                    <span className="text-xs font-bold mt-2 truncate max-w-full">MOD 2</span>
                                </div>
                                <div className="w-full flex flex-col items-center group">
                                    <span
                                        className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">45%</span>
                                    <div
                                        className="w-full bg-gray-400 h-[45%] border-2 border-black border-dashed group-hover:bg-gray-500 transition-colors">
                                    </div>
                                    <span className="text-xs font-bold mt-2 truncate max-w-full">MOD 3</span>
                                </div>
                                <div className="w-full flex flex-col items-center group">
                                    <span
                                        className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">10%</span>
                                    <div
                                        className="w-full bg-gray-200 h-[10%] border-2 border-black border-dashed group-hover:bg-gray-300 transition-colors">
                                    </div>
                                    <span className="text-xs font-bold mt-2 truncate max-w-full">MOD 4</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-black p-6 flex flex-col">
                            <h3 className="font-bold text-lg uppercase mb-6 border-b-2 border-dashed border-gray-400 pb-2">Estado de
                                la Clase</h3>

                            <div className="flex-1 flex items-center justify-center gap-8">
                                <div
                                    className="w-40 h-40 rounded-full border-4 border-black pie-chart shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]">
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-black border-2 border-black"></div>
                                        <div>
                                            <p className="font-bold uppercase text-sm">Al Día</p>
                                            <p className="text-xs text-gray-600">24 Alumnos (75%)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-gray-300 border-2 border-black border-dashed"></div>
                                        <div>
                                            <p className="font-bold uppercase text-sm">Rezagados</p>
                                            <p className="text-xs text-gray-600">8 Alumnos (25%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">Atención Prioritaria
                            (Rezagados)</h2>
                        <button
                            className="text-xs font-bold uppercase border-b-2 border-black hover:text-gray-600 transition-colors">
                            Ver todos los alumnos <i className="fa-solid fa-arrow-right ml-1"></i>
                        </button>
                    </div>

                    <div className="bg-white border-2 border-black overflow-x-auto mb-12">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                                <tr className="bg-gray-200 text-black border-b-2 border-black text-xs uppercase tracking-widest">
                                    <th className="px-6 py-4 border-r-2 border-gray-300 font-bold">Estudiante</th>
                                    <th className="px-6 py-4 border-r-2 border-gray-300 font-bold">Última Conexión</th>
                                    <th className="px-6 py-4 border-r-2 border-gray-300 font-bold">Progreso</th>
                                    <th className="px-6 py-4 border-r-2 border-gray-300 font-bold">Módulo Actual</th>
                                    <th className="px-6 py-4 font-bold text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b-2 border-gray-300 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <p className="font-bold uppercase">[ APELLIDO, NOMBRE 1 ]</p>
                                        <p className="text-xs text-gray-500">correo1@colegio.edu.pe</p>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 text-gray-600">Hace 15 días</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold">12%</span>
                                            <div className="w-20 bg-gray-200 h-2 border border-black">
                                                <div className="bg-black h-full" style={{ width: '12%' }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 font-bold text-gray-500 uppercase">MOD 1 -
                                        Pendiente</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            className="border-2 border-black text-xs font-bold uppercase px-3 py-1 hover:bg-black hover:text-white transition-colors">
                                            Ver Ficha
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b-2 border-gray-300 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <p className="font-bold uppercase">[ APELLIDO, NOMBRE 2 ]</p>
                                        <p className="text-xs text-gray-500">correo2@colegio.edu.pe</p>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 text-gray-600">Hace 7 días</td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold">35%</span>
                                            <div className="w-20 bg-gray-200 h-2 border border-black">
                                                <div className="bg-black h-full" style={{ width: '35%' }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300 font-bold text-gray-500 uppercase">MOD 2 -
                                        Examen Reprobado</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            className="border-2 border-black text-xs font-bold uppercase px-3 py-1 hover:bg-black hover:text-white transition-colors">
                                            Ver Ficha
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </>
    )
}

export default page
