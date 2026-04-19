import React from 'react'

function page() {
    return (
        <>
            <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex z-10">
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
                        className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-users-gear w-5"></i>
                        <span>Gestión Usuarios</span>
                    </a>
                    <div className="h-0.5 bg-gray-300 w-full my-2"></div>
                    <a href="#"
                        className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <i className="fa-solid fa-chalkboard-user w-5"></i>
                        <span>Asignación Docente</span>
                    </a>
                    <a href="#"
                        className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-layer-group w-5"></i>
                        <span>Gestión Secciones</span>
                    </a>
                </nav>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">

                <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
                    <span className="font-bold uppercase">[ LOGO ]</span>
                    <button className="text-black"><i className="fa-solid fa-bars text-xl"></i></button>
                </header>

                <div className="p-8 max-w-6xl mx-auto w-full pb-20">

                    <div className="text-xs font-bold uppercase text-gray-500 mb-6 tracking-widest">
                        <a href="#" className="hover:text-black hover:underline">Académico</a>
                        <i className="fa-solid fa-angle-right mx-2 text-black"></i>
                        <span className="text-black border-b-2 border-black">Asignación Docente</span>
                    </div>

                    <div className="mb-8 border-b-4 border-black pb-4">
                        <h1 className="text-3xl font-bold uppercase">Vinculación Académica</h1>
                        <p className="text-gray-600 font-bold uppercase mt-2 text-sm tracking-widest">Asignar profesores a cursos y
                            secciones (CUS-09)</p>
                    </div>

                    <div className="bg-white border-4 border-black p-6 md:p-8 mb-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative">
                        <div
                            className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black z-10">
                            Nueva Asignación Masiva
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">

                            <div>
                                <h2
                                    className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1">
                                    1. Seleccionar Docente</h2>

                                <div className="relative mb-6">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
                                        <i className="fa-solid fa-search"></i>
                                    </div>
                                    <input type="text" placeholder="BUSCAR PROFESOR..."
                                        className="w-full border-2 border-black pl-10 pr-3 py-3 font-bold uppercase text-sm outline-none focus:bg-gray-50" />
                                </div>

                                <div className="bg-gray-100 border-2 border-black p-4 flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center text-xl">
                                        <i className="fa-solid fa-chalkboard-user"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase tracking-widest text-sm">[ ING. CARLOS MENDOZA ]</p>
                                        <p className="text-xs font-bold text-gray-500 uppercase">cmendoza@colegio.edu.pe</p>
                                    </div>
                                    <button
                                        className="ml-auto text-xs font-bold uppercase border-b-2 border-black hover:text-gray-500">Cambiar</button>
                                </div>
                            </div>

                            <div>
                                <h2
                                    className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1">
                                    2. Asignar Secciones</h2>

                                <div className="border-2 border-black bg-white h-48 overflow-y-auto custom-scroll p-0">
                                    <label
                                        className="flex items-center p-3 border-b-2 border-gray-200 hover:bg-gray-50 cursor-pointer bg-gray-100">
                                        <input type="checkbox" className="w-5 h-5 accent-black border-2 border-black mr-4" checked />
                                        <div>
                                            <p className="font-bold uppercase text-sm">4TO "B" - JAVA SPRING BOOT</p>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase">28 Alumnos inscritos</p>
                                        </div>
                                    </label>

                                    <label
                                        className="flex items-center p-3 border-b-2 border-gray-200 hover:bg-gray-50 cursor-pointer">
                                        <input type="checkbox" className="w-5 h-5 accent-black border-2 border-black mr-4" />
                                        <div>
                                            <p className="font-bold uppercase text-sm">5TO "ÚNICA" - BASE DE DATOS</p>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase">25 Alumnos inscritos</p>
                                        </div>
                                    </label>

                                    <label
                                        className="flex items-center p-3 border-b-2 border-gray-200 bg-gray-50 cursor-not-allowed opacity-60">
                                        <input type="checkbox" className="w-5 h-5 border-2 border-gray-400 mr-4" disabled />
                                        <div>
                                            <p className="font-bold uppercase text-sm text-gray-600">3RO "A" - LÓGICA DIGITAL</p>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase">Ya asignada a [ Lic. Ana R.
                                                ]</p>
                                        </div>
                                    </label>
                                </div>

                                <p className="text-[10px] font-bold text-gray-500 uppercase mt-2 text-right">
                                    * Puede seleccionar múltiples secciones (Flujo A1).
                                </p>
                            </div>

                        </div>

                        <div className="mt-8 pt-6 border-t-4 border-black text-right">
                            <button type="button"
                                className="bg-black text-white border-2 border-black px-8 py-3 font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors btn-wire">
                                Confirmar Asignación (2 Secciones) <i className="fa-solid fa-link ml-2"></i>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">Directorio de
                            Asignaciones Activas</h2>

                        <div className="relative w-64 hidden sm:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
                                <i className="fa-solid fa-filter text-xs"></i>
                            </div>
                            <input type="text" placeholder="FILTRAR TABLA..."
                                className="w-full border-2 border-black pl-8 pr-2 py-2 font-bold uppercase text-xs outline-none" />
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-12">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-gray-200 text-black border-b-4 border-black uppercase text-xs tracking-widest">
                                    <th className="px-6 py-4 font-bold border-r-2 border-gray-400">Docente Titular</th>
                                    <th className="px-6 py-4 font-bold border-r-2 border-gray-400">Curso / Sección Asignada</th>
                                    <th className="px-6 py-4 font-bold border-r-2 border-gray-400 text-center">Fecha Vinculación
                                    </th>
                                    <th className="px-6 py-4 font-bold text-center">Desvincular</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b-2 border-gray-300 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r-2 border-gray-300 font-bold uppercase">
                                        [ LIC. ANA RAMÍREZ ]
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase">3RO "A" - LÓGICA
                                            DIGITAL</span>
                                    </td>
                                    <td
                                        className="px-6 py-4 border-r-2 border-gray-300 text-center text-xs font-bold text-gray-500 uppercase">
                                        01/03/2026
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            className="w-8 h-8 border-2 border-black hover:bg-black hover:text-white transition-colors"
                                            title="Romper Relación (A2)">
                                            <i className="fa-solid fa-link-slash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b-2 border-gray-300 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-r-2 border-gray-300 font-bold uppercase">
                                        [ ING. CARLOS MENDOZA ]
                                    </td>
                                    <td className="px-6 py-4 border-r-2 border-gray-300">
                                        <span
                                            className="bg-gray-200 border-2 border-black px-2 py-1 text-xs font-bold uppercase">5TO
                                            "ÚNICA" - APIS REST</span>
                                    </td>
                                    <td
                                        className="px-6 py-4 border-r-2 border-gray-300 text-center text-xs font-bold text-gray-500 uppercase">
                                        15/03/2026
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            className="w-8 h-8 border-2 border-black hover:bg-black hover:text-white transition-colors"
                                            title="Romper Relación (A2)">
                                            <i className="fa-solid fa-link-slash"></i>
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
