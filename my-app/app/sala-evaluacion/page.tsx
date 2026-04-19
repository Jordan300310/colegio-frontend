import React from 'react'

const page = () => {
    return (
        <>
            <header
                className="bg-white border-b-4 border-black p-4 sticky top-0 z-50 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold uppercase tracking-widest">[ LOGO ]</span>
                    <div className="h-6 w-0.5 bg-black hidden md:block"></div>
                    <h1 className="font-bold uppercase hidden md:block truncate max-w-md">
                        EVALUACIÓN: MÓDULO 2 - APIS RESTFUL
                    </h1>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-gray-200 border-2 border-black px-4 py-2">
                        <i className="fa-regular fa-clock text-xl mr-3 animate-pulse"></i>
                        <span className="text-2xl font-bold tracking-widest">14:59</span>
                    </div>
                    <button
                        className="hidden md:block bg-black text-white border-2 border-black font-bold uppercase px-6 py-2 hover:bg-gray-800 transition-colors">
                        Enviar
                    </button>
                </div>
            </header>

            <main className="flex-1 w-full max-w-3xl mx-auto p-4 md:p-8 pt-8">

                <div className="bg-white border-2 border-dashed border-black p-6 mb-10 relative">
                    <div className="absolute -top-3 left-4 bg-gray-100 border-2 border-black px-2 text-sm font-bold uppercase">
                        Instrucciones</div>
                    <ul className="text-sm font-bold text-gray-600 space-y-2 uppercase">
                        <li><i className="fa-solid fa-check mr-2"></i> Puntaje mínimo para aprobar: 14 / 20</li>
                        <li><i className="fa-solid fa-check mr-2"></i> Total de preguntas: 10</li>
                        <li><i className="fa-solid fa-triangle-exclamation mr-2"></i> El examen se enviará automáticamente si el
                            tiempo llega a cero.</li>
                    </ul>
                </div>

                <form className="space-y-8">

                    <div className="bg-white border-2 border-black p-6 relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <div
                            className="absolute -left-4 -top-4 bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-black">
                            1
                        </div>
                        <div className="mb-4">
                            <span
                                className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b-2 border-gray-300 pb-1">Opción
                                Múltiple (2 pts)</span>
                        </div>
                        <p className="font-bold text-lg mb-6 leading-relaxed">
                            ¿Cuál es la anotación correcta en Spring Boot para definir un controlador que devuelva respuestas
                            directamente en formato JSON (REST)?
                        </p>
                        <div className="space-y-3">
                            <label
                                className="flex items-center p-3 border-2 border-gray-300 hover:border-black hover:bg-gray-50 cursor-pointer transition-colors">
                                <input type="radio" name="q1" value="a" className="mr-4" />
                                <span className="font-bold font-mono text-sm">@Controller</span>
                            </label>
                            <label
                                className="flex items-center p-3 border-2 border-black bg-gray-100 cursor-pointer transition-colors">
                                <input type="radio" name="q1" value="b" className="mr-4" checked />
                                <span className="font-bold font-mono text-sm">@RestController</span>
                                <i className="fa-solid fa-pen ml-auto text-gray-400"></i> </label>
                            <label
                                className="flex items-center p-3 border-2 border-gray-300 hover:border-black hover:bg-gray-50 cursor-pointer transition-colors">
                                <input type="radio" name="q1" value="c" className="mr-4" />
                                <span className="font-bold font-mono text-sm">@ApiService</span>
                            </label>
                            <label
                                className="flex items-center p-3 border-2 border-gray-300 hover:border-black hover:bg-gray-50 cursor-pointer transition-colors">
                                <input type="radio" name="q1" value="d" className="mr-4" />
                                <span className="font-bold font-mono text-sm">@ResponseBody</span>
                            </label>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black p-6 relative">
                        <div
                            className="absolute -left-4 -top-4 bg-white text-black w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-black">
                            2
                        </div>
                        <div className="mb-4">
                            <span
                                className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b-2 border-gray-300 pb-1">Verdadero
                                / Falso (2 pts)</span>
                        </div>
                        <p className="font-bold text-lg mb-6 leading-relaxed">
                            El patrón de inyección de dependencias en Spring obliga al desarrollador a instanciar manualmente
                            las clases usando la palabra reservada <span className="font-mono bg-gray-200 px-1">new</span>.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <label
                                className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 hover:border-black cursor-pointer text-center">
                                <input type="radio" name="q2" value="true" className="mb-2" />
                                <span className="font-bold uppercase">Verdadero</span>
                            </label>
                            <label
                                className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 hover:border-black cursor-pointer text-center">
                                <input type="radio" name="q2" value="false" className="mb-2" />
                                <span className="font-bold uppercase">Falso</span>
                            </label>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black p-6 relative">
                        <div
                            className="absolute -left-4 -top-4 bg-white text-black w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-black">
                            3
                        </div>
                        <div className="mb-4">
                            <span
                                className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b-2 border-gray-300 pb-1">Desarrollo
                                Corto (4 pts)</span>
                        </div>
                        <p className="font-bold text-lg mb-4 leading-relaxed">
                            Escribe la anotación de JPA necesaria para mapear la siguiente clase a una tabla de base de datos
                            llamada <span className="font-mono bg-gray-200 px-1">cat_usuarios</span>.
                        </p>
                        <div className="bg-gray-100 border-2 border-black p-4 font-mono text-sm mb-4">
                            <p className="text-gray-500">// Ingresa la anotación aquí</p>
                            <input type="text" placeholder="Ej: @Entity..."
                                className="w-full bg-white border-b-2 border-black p-2 my-2 outline-none focus:border-dashed focus:bg-gray-50 font-bold" />
                            <p>public class Usuario </p>
                            <p className="ml-4">private Long id;</p>
                            <p></p>
                        </div>
                    </div>

                </form>

                <div className="mt-12 mb-20 border-t-4 border-black pt-8 text-center">
                    <h3 className="font-bold text-xl uppercase mb-2">¿Has terminado?</h3>
                    <p className="text-sm font-bold text-gray-500 uppercase mb-6">Revisa tus respuestas antes de enviar. No podrás
                        deshacer esta acción.</p>
                    <button type="button"
                        className="w-full md:w-auto px-12 py-4 bg-black text-white font-bold text-xl uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_0_rgba(156,163,175,1)]">
                        Finalizar y Enviar <i className="fa-solid fa-paper-plane ml-2"></i>
                    </button>
                </div>

            </main>

            <div className="hidden fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4">
                <div
                    className="bg-white border-4 border-black p-8 max-w-md w-full text-center relative shadow-[16px_16px_0_0_rgba(255,255,255,0.2)]">
                    <i className="fa-solid fa-circle-check text-6xl text-black mb-4"></i>
                    <h2 className="text-3xl font-bold uppercase mb-2">¡Examen Enviado!</h2>
                    <div className="border-y-2 border-black py-4 my-4">
                        <p className="text-sm font-bold text-gray-500 uppercase mb-1">Calificación Obtenida</p>
                        <p className="text-5xl font-bold">18 <span className="text-2xl text-gray-400">/ 20</span></p>
                        <div
                            className="inline-block bg-black text-white font-bold px-4 py-1 uppercase mt-3 text-sm tracking-widest">
                            Aprobado
                        </div>
                    </div>
                    <p className="text-sm font-bold text-gray-600 mb-6">El Módulo 3 ha sido desbloqueado exitosamente en tu ruta de
                        aprendizaje.</p>
                    <button
                        className="w-full bg-white border-2 border-black text-black font-bold uppercase py-3 hover:bg-black hover:text-white transition-colors">
                        Volver al Temario
                    </button>
                </div>
            </div>
        </>
    )
}

export default page
