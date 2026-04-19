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
                        <p className="text-xs text-gray-600 uppercase">Sección: 4to "A"</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-4 mt-6">
                    <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">
                        <i className="fa-solid fa-chart-pie w-5"></i>
                        <span>Mi Progreso</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all">
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

                    <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end border-b-2 border-black pb-4">
                        <div>
                            <h1 className="text-3xl font-bold uppercase">Catálogo de Cursos</h1>
                            <p className="text-gray-600 mt-2 text-sm uppercase">Cursos habilitados para tu nivel académico.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1 flex">
                            <div className="bg-gray-200 border-y-2 border-l-2 border-black p-3 flex items-center justify-center">
                                <i className="fa-solid fa-search"></i>
                            </div>
                            <input type="text" placeholder="BUSCAR CURSO POR NOMBRE O TEMA..." className="w-full border-2 border-black p-3 focus:outline-none focus:bg-gray-100 font-bold uppercase placeholder-gray-500" />
                        </div>

                        <select className="border-2 border-black p-3 font-bold uppercase bg-white cursor-pointer focus:outline-none">
                            <option>[ TODAS LAS CATEGORÍAS ]</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Lógica y Algoritmos</option>
                        </select>

                        <select className="border-2 border-black p-3 font-bold uppercase bg-white cursor-pointer focus:outline-none">
                            <option>[ ORDENAR POR: RECIENTES ]</option>
                            <option>Progreso (Mayor a Menor)</option>
                            <option>Orden Alfabético</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">

                        <div className="bg-white border-2 border-black flex flex-col hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200 group">
                            <div className="h-40 border-b-2 border-black bg-gray-200 flex items-center justify-center overflow-hidden relative">
                                <i className="fa-solid fa-laptop-code text-4xl text-gray-500 group-hover:scale-110 transition-transform"></i>
                                <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
                                    Nuevo
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold uppercase bg-gray-200 border-2 border-black px-2 py-1">Backend / Java</span>
                                    <span className="text-xs font-bold text-gray-600"><i className="fa-solid fa-layer-group"></i> 10 Módulos</span>
                                </div>
                                <h3 className="font-bold text-xl uppercase mb-2">[ Introducción a Java Spring ]</h3>
                                <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3">Aprende a construir APIs RESTful y fundamentos de programación orientada a objetos aplicados en entornos reales.</p>

                                <div className="border-t-2 border-dashed border-gray-400 pt-4 flex flex-col gap-3">
                                    <div className="flex items-center space-x-2 text-xs font-bold uppercase text-gray-600">
                                        <i className="fa-solid fa-chalkboard-user"></i>
                                        <span>Docente: [ ING. CARLOS M. ]</span>
                                    </div>
                                    <button className="w-full bg-black text-white border-2 border-black py-2 text-sm font-bold uppercase hover:bg-white hover:text-black transition-colors">
                                        Ingresar al Curso
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-black flex flex-col hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200 group">
                            <div className="h-40 border-b-2 border-black bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                <i className="fa-solid fa-code text-4xl text-gray-500 group-hover:scale-110 transition-transform"></i>
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-white border-t-2 border-black">
                                    <div className="h-full bg-black" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold uppercase bg-gray-200 border-2 border-black px-2 py-1">Frontend / Web</span>
                                    <span className="text-xs font-bold text-black bg-gray-200 px-2 py-1">45% Avance</span>
                                </div>
                                <h3 className="font-bold text-xl uppercase mb-2">[ Fundamentos de HTML & CSS ]</h3>
                                <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3">Conceptos básicos de maquetación web, estilos, selectores y diseño responsivo sin librerías.</p>

                                <div className="border-t-2 border-dashed border-gray-400 pt-4 flex flex-col gap-3">
                                    <div className="flex items-center space-x-2 text-xs font-bold uppercase text-gray-600">
                                        <i className="fa-solid fa-chalkboard-user"></i>
                                        <span>Docente: [ LIC. ANA R. ]</span>
                                    </div>
                                    <button className="w-full bg-white text-black border-2 border-black py-2 text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">
                                        Continuar Lección
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-black flex flex-col hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200 group">
                            <div className="h-40 border-b-2 border-black bg-gray-200 flex items-center justify-center overflow-hidden">
                                <i className="fa-solid fa-database text-4xl text-gray-500 group-hover:scale-110 transition-transform"></i>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold uppercase bg-gray-200 border-2 border-black px-2 py-1">Bases de Datos</span>
                                    <span className="text-xs font-bold text-gray-600"><i className="fa-solid fa-layer-group"></i> 8 Módulos</span>
                                </div>
                                <h3 className="font-bold text-xl uppercase mb-2">[ Lógica SQL y Relaciones ]</h3>
                                <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3">Diseño de diagramas Entidad-Relación y consultas estructuradas en PostgreSQL.</p>

                                <div className="border-t-2 border-dashed border-gray-400 pt-4 flex flex-col gap-3">
                                    <div className="flex items-center space-x-2 text-xs font-bold uppercase text-gray-600">
                                        <i className="fa-solid fa-chalkboard-user"></i>
                                        <span>Docente: [ ING. CARLOS M. ]</span>
                                    </div>
                                    <button className="w-full bg-black text-white border-2 border-black py-2 text-sm font-bold uppercase hover:bg-white hover:text-black transition-colors">
                                        Ingresar al Curso
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center space-x-4 mb-12">
                        <button className="border-2 border-gray-400 text-gray-400 px-4 py-2 font-bold uppercase cursor-not-allowed">Anterior</button>
                        <span className="font-bold uppercase border-b-2 border-black px-2">Pág. 1 de 1</span>
                        <button className="border-2 border-gray-400 text-gray-400 px-4 py-2 font-bold uppercase cursor-not-allowed">Siguiente</button>
                    </div>

                </div>
            </main>
        </>
    )
}

export default page
