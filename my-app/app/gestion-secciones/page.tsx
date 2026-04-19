import React from 'react'

const page = () => {
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
                    <a href="#"
                        className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
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

                <div className="p-8 max-w-7xl mx-auto w-full pb-20">

                    <div className="text-xs font-bold uppercase text-gray-500 mb-6 tracking-widest">
                        <a href="#" className="hover:text-black hover:underline">Administración</a>
                        <i className="fa-solid fa-angle-right mx-2 text-black"></i>
                        <span className="text-black border-b-2 border-black">Carga Masiva</span>
                    </div>

                    <div className="mb-8 border-b-4 border-black pb-4">
                        <h1 className="text-3xl font-bold uppercase">Carga Masiva de Alumnos</h1>
                        <p className="text-gray-600 font-bold uppercase mt-2 text-sm tracking-widest">Importación de registros
                            mediante Excel/CSV (CUS-07)</p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

                        <div className="flex flex-col gap-6">

                            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                                <h2 className="text-lg font-bold uppercase mb-2">Paso 1: Descargar Plantilla</h2>
                                <p className="text-xs font-bold text-gray-500 uppercase mb-4 leading-relaxed">
                                    Asegúrese de utilizar el formato oficial. Las columnas obligatorias son: Nombres, Apellidos,
                                    Correo y Rol.
                                </p>
                                <button
                                    className="w-full sm:w-auto bg-white text-black border-2 border-black px-6 py-2 font-bold uppercase text-sm hover:bg-gray-100 flex items-center justify-center transition-colors">
                                    <i className="fa-solid fa-download mr-2"></i> Plantilla_Alumnos.xlsx
                                </button>
                            </div>

                            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                                <h2 className="text-lg font-bold uppercase mb-4">Paso 2: Subir Archivo</h2>

                                <div
                                    className="dropzone border-4 border-dashed border-gray-400 bg-gray-50 hover:bg-gray-100 hover:border-black transition-all cursor-pointer flex flex-col items-center justify-center p-12 text-center group mb-4">
                                    <i className="fa-solid fa-file-csv text-6xl text-gray-400 group-hover:text-black mb-4"></i>
                                    <p className="font-bold uppercase text-lg mb-1">Arrastre su archivo aquí</p>
                                    <p className="text-xs font-bold text-gray-500 uppercase">O haga clic para examinar su equipo</p>
                                    <div className="mt-6 flex gap-2">
                                        <span
                                            className="bg-gray-200 border border-gray-400 text-gray-600 px-2 py-1 text-[10px] font-bold uppercase">.XLSX</span>
                                        <span
                                            className="bg-gray-200 border border-gray-400 text-gray-600 px-2 py-1 text-[10px] font-bold uppercase">.CSV</span>
                                    </div>
                                </div>

                                <div className="bg-gray-200 border-2 border-black p-3 flex justify-between items-center mb-6">
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-file-excel mr-3 text-xl"></i>
                                        <div>
                                            <p className="font-bold text-sm uppercase truncate max-wxs">nuevos_ingresos_2026.xlsx
                                            </p>
                                            <p className="text-xs text-gray-600 font-bold uppercase">45 KB</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-500 hover:text-black"><i className="fa-solid fa-trash"></i></button>
                                </div>

                                <button
                                    className="w-full bg-black text-white border-2 border-black py-4 font-bold uppercase text-sm tracking-widest hover:bg-gray-800 transition-colors btn-wire shadow-[4px_4px_0_0_rgba(156,163,175,1)] flex items-center justify-center">
                                    <i className="fa-solid fa-gears mr-2"></i> Procesar Archivo
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-100 border-4 border-black p-6 relative">
                            <div
                                className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black z-10">
                                Log de Procesamiento
                            </div>

                            <h2 className="text-xl font-bold uppercase mb-2 border-b-2 border-black pb-2">Reporte de Carga</h2>
                            <p className="text-xs font-bold text-gray-500 uppercase mb-6">Archivo: nuevos_ingresos_2026.xlsx |
                                Procesado a las 14:32 hrs.</p>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-white border-2 border-black p-3 text-center">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Filas Leídas</p>
                                    <p className="text-2xl font-bold">120</p>
                                </div>
                                <div className="bg-white border-2 border-black border-b-4 p-3 text-center">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Registrados</p>
                                    <p className="text-2xl font-bold">118</p>
                                </div>
                                <div className="bg-black text-white border-2 border-black p-3 text-center relative overflow-hidden">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Errores</p>
                                    <p className="text-2xl font-bold relative z-10">2</p>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-dashed border-gray-400 p-4 mb-6 text-center">
                                <p className="font-bold uppercase text-sm mb-2"><i className="fa-solid fa-circle-check mr-1"></i> 118
                                    usuarios creados con éxito.</p>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-4">Las credenciales temporales han sido
                                    generadas (CUS-06).</p>
                                <button
                                    className="bg-white text-black border-2 border-black px-4 py-2 font-bold uppercase text-xs hover:bg-gray-100 transition-colors inline-flex items-center">
                                    <i className="fa-solid fa-file-pdf mr-2"></i> Descargar Credenciales
                                </button>
                            </div>

                            <h3 className="font-bold uppercase text-sm mb-3 bg-black text-white inline-block px-2 py-1">Detalle de
                                Errores (2)</h3>
                            <div className="bg-white border-2 border-black overflow-hidden">
                                <table className="w-full text-left text-xs uppercase font-bold">
                                    <thead>
                                        <tr className="bg-gray-200 border-b-2 border-black">
                                            <th className="p-2 border-r-2 border-black text-center w-12">Fila</th>
                                            <th className="p-2 border-r-2 border-black">Dato Afectado</th>
                                            <th className="p-2">Motivo del Rechazo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b-2 border-gray-300">
                                            <td className="p-2 border-r-2 border-gray-300 text-center">45</td>
                                            <td className="p-2 border-r-2 border-gray-300">jlopez@colegio.edu.pe</td>
                                            <td className="p-2 text-gray-600">Correo Electrónico Duplicado.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border-r-2 border-gray-300 text-center">112</td>
                                            <td className="p-2 border-r-2 border-gray-300">[ Celda Vacía ]</td>
                                            <td className="p-2 text-gray-600">Falta el campo obligatorio: Nombres.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-[10px] font-bold text-gray-500 uppercase mt-4 text-center">
                                Corrija los errores en su archivo local y vuelva a subir únicamente las filas rechazadas.
                            </p>

                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default page
