import React from 'react'

const page = () => {
    return (
        <>
            <aside className="w-80 bg-gray-50 border-r-2 border-black flex flex-col hidden lg:flex flex-shrink-0 relative z-10">

                <div className="p-4 border-b-2 border-black flex items-center justify-between bg-white">
                    <a href="#" className="text-sm font-bold uppercase hover:underline">
                        <i className="fa-solid fa-arrow-left mr-2"></i>Volver
                    </a>
                    <span className="text-xs font-bold bg-black text-white px-2 py-1">[ CURSO ]</span>
                </div>

                <div className="p-6 border-b-2 border-black bg-gray-200">
                    <h2 className="text-lg font-bold uppercase leading-tight">[ INTRODUCCIÓN A JAVA SPRING BOOT ]</h2>
                    <div className="mt-4 bg-white border-2 border-black h-3 w-full">
                        <div className="bg-black h-full" style={{ width: '25%' }}></div>
                    </div>
                    <p className="text-xs font-bold text-gray-600 mt-2 text-right">25% COMPLETADO</p>
                </div>

                <div className="flex-1 overflow-y-auto">

                    <div className="border-b-2 border-black">
                        <div
                            className="p-4 bg-gray-100 flex justify-between items-center cursor-pointer border-b-2 border-dashed border-gray-400">
                            <span className="font-bold uppercase text-sm">[ MÓDULO 1: FUNDAMENTOS ]</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="bg-white">
                            <a href="#" className="flex items-center p-3 border-b-2 border-gray-200 hover:bg-gray-50 text-gray-500">
                                <i className="fa-solid fa-circle-check text-black mr-3"></i>
                                <span className="text-sm">1. Configuración del Entorno</span>
                                <span className="ml-auto text-xs">5:20</span>
                            </a>
                            <a href="#"
                                className="flex items-center p-3 border-l-4 border-l-black bg-gray-100 font-bold border-b-2 border-gray-200">
                                <i className="fa-solid fa-circle-play mr-3"></i>
                                <span className="text-sm">2. Estructuras de Control</span>
                                <span className="ml-auto text-xs">12:45</span>
                            </a>
                            <a href="#" className="flex items-center p-3 border-b-2 border-gray-200 hover:bg-gray-50 text-gray-800">
                                <i className="fa-regular fa-circle mr-3"></i>
                                <span className="text-sm">3. Programación Orientada a Objetos</span>
                                <span className="ml-auto text-xs">18:10</span>
                            </a>
                        </div>
                    </div>

                    <div className="border-b-2 border-black">
                        <div className="p-4 bg-gray-100 flex justify-between items-center cursor-pointer">
                            <span className="font-bold uppercase text-sm text-gray-500">[ MÓDULO 2: APIS REST ]</span>
                            <i className="fa-solid fa-chevron-right text-gray-500"></i>
                        </div>
                    </div>

                    <div className="p-4 bg-gray-50 flex justify-between items-center opacity-60">
                        <span className="font-bold uppercase text-sm text-gray-500"><i className="fa-solid fa-lock mr-2"></i>[ EXAMEN
                            FINAL ]</span>
                    </div>
                </div>
            </aside>

            <main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-white">

                <header
                    className="lg:hidden border-b-2 border-black p-4 flex justify-between items-center bg-gray-100 sticky top-0 z-20">
                    <button className="font-bold"><i className="fa-solid fa-bars text-xl mr-2"></i>TEMARIO</button>
                    <span className="font-bold uppercase text-sm truncate ml-4">[ CURSO: JAVA SPRING ]</span>
                </header>

                <div className="max-w-4xl mx-auto w-full p-6 md:p-10 pb-32">

                    <div className="text-xs font-bold uppercase text-gray-500 mb-6 tracking-wider">
                        MÓDULO 1 <i className="fa-solid fa-angle-right mx-2"></i> LECCIÓN 2
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold uppercase mb-8 leading-tight">
                        [ Estructuras de Control en Java ]
                    </h1>

                    <div
                        className="w-full aspect-video border-4 border-black bg-gray-200 mb-10 flex flex-col items-center justify-center relative group cursor-pointer shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <i className="fa-solid fa-play text-6xl text-gray-800 group-hover:scale-110 transition-transform"></i>
                        <div className="absolute bottom-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
                            [ REPRODUCTOR DE VIDEO ]
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black text-white text-xs font-bold px-2 py-1">
                            12:45
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-400">
                            <div className="bg-black h-full" style={{ width: '30%' }}></div>
                        </div>
                    </div>

                    <div className="prose max-w-none mb-10 text-justify">
                        <h2 className="text-xl font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1">
                            1. Introducción al tema</h2>
                        <p className="mb-4 text-gray-800 leading-relaxed">
                            Las estructuras de control determinan el flujo de ejecución de un programa. En esta lección,
                            exploraremos cómo utilizar condicionales (if-else) y bucles (for, while) para tomar decisiones y
                            repetir acciones dentro del código.
                        </p>
                        <p className="mb-4 text-gray-800 leading-relaxed">
                            A continuación, se muestra un ejemplo clásico de cómo iterar sobre una lista de elementos aplicando
                            una lógica condicional básica.
                        </p>
                    </div>

                    <div
                        className="border-2 border-black bg-black text-gray-300 p-4 font-mono text-sm mb-10 shadow-[4px_4px_0_0_rgba(156,163,175,1)] relative overflow-x-auto">
                        <div
                            className="absolute top-0 right-0 bg-white text-black font-bold text-xs px-2 py-1 border-b-2 border-l-2 border-black uppercase cursor-pointer hover:bg-gray-200">
                            <i className="fa-regular fa-copy mr-1"></i>Copiar
                        </div>
                        <div className="code-lines mt-4">
                            <div><span className="text-purple-400">public class</span> EjemploFlujo </div>
                            <div> <span className="text-purple-400">public static void</span> <span
                                className="text-blue-300">main</span>(String[] args) </div>
                            <div> <span className="text-purple-400">for</span> (<span className="text-purple-400">int</span> i = <span
                                className="text-yellow-300">1</span>; i = <span className="text-yellow-300">10</span>; i++) </div>
                            <div> <span className="text-purple-400">if</span> (i % <span className="text-yellow-300">2</span> == <span
                                className="text-yellow-300">0</span>) </div>
                            <div> System.out.println(i + <span className="text-green-400">" es par"</span>);</div>
                        </div>
                    </div>

                    <div className="border-2 border-black bg-gray-50 p-6 mb-10 relative">
                        <div className="absolute -top-3 left-4 bg-white border-2 border-black px-2 text-sm font-bold uppercase">
                            Recursos Adjuntos</div>

                        <div className="flex flex-col space-y-3 mt-2">
                            <a href="#"
                                className="flex justify-between items-center p-3 border-2 border-dashed border-gray-400 bg-white hover:border-black transition-colors">
                                <div className="flex items-center">
                                    <i className="fa-regular fa-file-pdf text-2xl mr-4 text-gray-600"></i>
                                    <div>
                                        <p className="font-bold text-sm uppercase">Presentación_Clase2.pdf</p>
                                        <p className="text-xs text-gray-500">Documento PDF - 2.4 MB</p>
                                    </div>
                                </div>
                                <i className="fa-solid fa-download text-xl hover:text-gray-500"></i>
                            </a>

                            <a href="#"
                                className="flex justify-between items-center p-3 border-2 border-dashed border-gray-400 bg-white hover:border-black transition-colors">
                                <div className="flex items-center">
                                    <i className="fa-regular fa-file-code text-2xl mr-4 text-gray-600"></i>
                                    <div>
                                        <p className="font-bold text-sm uppercase">Ejercicios_Practicos.zip</p>
                                        <p className="text-xs text-gray-500">Archivo ZIP - 1.1 MB</p>
                                    </div>
                                </div>
                                <i className="fa-solid fa-download text-xl hover:text-gray-500"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div
                    className="fixed bottom-0 left-0 lg:left-80 right-0 bg-white border-t-4 border-black p-4 z-20 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">

                    <button
                        className="border-2 border-transparent text-gray-600 hover:text-black font-bold uppercase text-sm px-4 py-2 flex items-center transition-colors">
                        <i className="fa-solid fa-arrow-left mr-2"></i> Anterior
                    </button>

                    <button
                        className="bg-black text-white border-2 border-black font-bold uppercase text-sm px-6 py-3 hover:bg-white hover:text-black shadow-[4px_4px_0_0_rgba(156,163,175,1)] transition-all flex items-center">
                        Completar y Continuar <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>

                </div>
            </main>
        </>
    )
}

export default page
