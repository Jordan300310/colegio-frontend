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
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Volver al Tablero</span>
                    </a>
                    <div className="h-0.5 bg-black w-full my-4"></div>
                    <a href="#"
                        className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        <i className="fa-solid fa-user-graduate"></i>
                        <span>Ficha Actual</span>
                    </a>
                </nav>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">

                <div className="p-8 max-w-5xl mx-auto w-full">

                    <div
                        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-4 border-black pb-6">
                        <div className="flex items-center space-x-6">
                            <div className="w-24 h-24 border-4 border-black bg-gray-200 flex items-center justify-center text-4xl">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold uppercase">[ APELLIDO, NOMBRE DEL ALUMNO ]</h1>
                                <p className="text-gray-600 font-bold uppercase mt-1">ID: 2026-AL-042 | Sección: 4to "A"</p>
                                <div className="flex space-x-4 mt-2">
                                    <span className="text-xs bg-black text-white px-2 py-1 font-bold uppercase">Estado:
                                        Activo</span>
                                    <span className="text-xs border-2 border-black px-2 py-1 font-bold uppercase">Última Conexión:
                                        12/04/2026</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex gap-2">
                            <button className="border-2 border-black p-3 hover:bg-black hover:text-white transition-colors"
                                title="Enviar Mensaje">
                                <i className="fa-solid fa-envelope"></i>
                            </button>
                            <button
                                className="bg-black text-white border-2 border-black px-4 py-2 font-bold uppercase text-sm flex items-center">
                                <i className="fa-solid fa-print mr-2"></i> Reporte PDF
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white border-2 border-black p-4 text-center">
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Avance del Curso</p>
                            <p className="text-3xl font-bold">65%</p>
                        </div>
                        <div className="bg-white border-2 border-black p-4 text-center">
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Tiempo Invertido</p>
                            <p className="text-3xl font-bold">12.5 <span className="text-sm">hrs</span></p>
                        </div>
                        <div className="bg-white border-2 border-black p-4 text-center">
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Promedio Notas</p>
                            <p className="text-3xl font-bold">18.5</p>
                        </div>
                        <div className="bg-white border-2 border-black p-4 text-center">
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Lecciones Vistas</p>
                            <p className="text-3xl font-bold">26 / 40</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        <div>
                            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1 mb-6">Historial de
                                Lecciones</h2>
                            <div className="border-l-4 border-black ml-4 space-y-8 pb-4">

                                <div className="relative pl-8">
                                    <div
                                        className="absolute -left-[26px] top-0 w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-check text-sm"></i>
                                    </div>
                                    <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                                        <p className="text-xs font-bold text-gray-500 uppercase">12 ABR 2026 - 14:20</p>
                                        <p className="font-bold uppercase">[ L2: ESTRUCTURAS DE CONTROL ]</p>
                                        <p className="text-xs mt-1">Tiempo en lección: 24 min.</p>
                                    </div>
                                </div>

                                <div className="relative pl-8">
                                    <div
                                        className="absolute -left-[26px] top-0 w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-check text-sm"></i>
                                    </div>
                                    <div className="bg-white border-2 border-black p-4">
                                        <p className="text-xs font-bold text-gray-500 uppercase">10 ABR 2026 - 09:15</p>
                                        <p className="font-bold uppercase">[ L1: CONFIGURACIÓN ENTORNO ]</p>
                                        <p className="text-xs mt-1">Tiempo en lección: 45 min.</p>
                                    </div>
                                </div>

                                <div className="relative pl-8">
                                    <div
                                        className="absolute -left-[26px] top-0 w-10 h-10 bg-gray-200 border-4 border-black border-dashed rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-spinner animate-spin text-sm"></i>
                                    </div>
                                    <div className="bg-gray-100 border-2 border-dashed border-gray-400 p-4">
                                        <p className="text-xs font-bold text-gray-400 uppercase">EN CURSO</p>
                                        <p className="font-bold uppercase text-gray-500">[ L3: PROGRAMACIÓN DE OBJETOS ]</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1 mb-6">Registro de
                                Evaluaciones</h2>
                            <div className="space-y-6">

                                <div className="bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                                    <div className="bg-gray-200 p-3 border-b-2 border-black flex justify-between items-center">
                                        <span className="font-bold uppercase text-sm">Examen: Módulo 1</span>
                                        <span className="font-bold text-lg">19 / 20</span>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs font-bold text-gray-500 uppercase mb-2">Retroalimentación del Docente:
                                        </p>
                                        <div className="bg-gray-50 border-2 border-dotted border-gray-400 p-3 text-sm italic">
                                            "Excelente dominio de los fundamentos de Java. Demostró claridad en el uso de
                                            variables. Continúa así."
                                        </div>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-xs font-bold uppercase">Intentos: 1</span>
                                            <button
                                                className="text-xs font-bold uppercase border-b-2 border-black hover:bg-black hover:text-white transition-all">Ver
                                                Respuestas</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-black overflow-hidden opacity-75">
                                    <div className="bg-gray-100 p-3 border-b-2 border-black flex justify-between items-center">
                                        <span className="font-bold uppercase text-sm text-gray-500">Test: Lógica Básica</span>
                                        <span className="font-bold text-lg text-gray-500">18 / 20</span>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Retroalimentación del Docente:
                                        </p>
                                        <p className="text-sm text-gray-400 italic">Sin comentarios registrados.</p>
                                        <button
                                            className="mt-4 w-full border-2 border-dashed border-black py-2 text-xs font-bold uppercase hover:bg-gray-100 transition-all">
                                            + Agregar Comentario
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10 bg-white border-2 border-black p-6 relative">
                                <div
                                    className="absolute -top-3 left-4 bg-white border-2 border-black px-2 text-sm font-bold uppercase">
                                    Notas de Seguimiento</div>
                                <textarea
                                    className="w-full h-32 border-2 border-dashed border-gray-300 p-3 mt-2 text-sm focus:outline-none focus:border-black"
                                    placeholder="ESCRIBA AQUÍ OBSERVACIONES PARA EL INFORME DE LABOR SOCIAL..."></textarea>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-black text-white px-6 py-2 font-bold uppercase text-sm">Guardar
                                        Nota</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-16 border-t-4 border-black pt-6 flex justify-between items-center mb-10">
                        <button className="flex items-center space-x-2 font-bold uppercase hover:underline">
                            <i className="fa-solid fa-chevron-left"></i> <span>Anterior Estudiante</span>
                        </button>
                        <span className="text-xs font-bold uppercase text-gray-400">Pág. 4 de 32</span>
                        <button className="flex items-center space-x-2 font-bold uppercase hover:underline">
                            <span>Siguiente Estudiante</span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                </div>
            </main>
        </>
    )
}

export default page
