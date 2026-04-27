import React from 'react'
import Boton from '../componentes/Boton'

const page = () => {
  return (
    <>
      <aside className="w-80 bg-gray-50 border-r-2 border-black hidden lg:flex flex-col flex-shrink-0 relative z-10">
        <div className="p-4 border-b-2 border-black flex items-center justify-between bg-white">
          <a href="#" className="text-sm font-bold uppercase text-black hover:underline">
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Volver
          </a>
          <span className="text-xs font-bold bg-black text-white px-2 py-1 uppercase">
            Curso
          </span>
        </div>

        <div className="p-6 border-b-2 border-black bg-gray-200">
          <h2 className="text-lg font-bold uppercase leading-tight text-black">
            Introducción a Java Spring Boot
          </h2>

          <div className="mt-4 bg-white border-2 border-black h-3 w-full">
            <div className="bg-black h-full" style={{ width: '25%' }}></div>
          </div>

          <p className="text-xs font-bold text-gray-700 mt-2 text-right uppercase">
            25% completado
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="border-b-2 border-black">
            <div className="p-4 bg-gray-100 flex justify-between items-center border-b-2 border-dashed border-gray-400">
              <span className="font-bold uppercase text-sm text-black">
                Módulo 1: Fundamentos
              </span>
              <i className="fa-solid fa-chevron-down text-black"></i>
            </div>

            <div className="bg-white">
              <a
                href="#"
                className="flex items-center gap-3 p-3 border-b-2 border-gray-200 hover:bg-gray-50 text-gray-700"
              >
                <i className="fa-solid fa-circle-check text-black"></i>
                <span className="text-sm font-bold">1. Configuración del Entorno</span>
                <span className="ml-auto text-xs font-bold">5:20</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 p-3 border-l-4 border-l-black bg-gray-100 border-b-2 border-gray-200 text-black"
              >
                <i className="fa-solid fa-circle-play"></i>
                <span className="text-sm font-bold">2. Estructuras de Control</span>
                <span className="ml-auto text-xs font-bold">12:45</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 p-3 border-b-2 border-gray-200 hover:bg-gray-50 text-gray-800"
              >
                <i className="fa-regular fa-circle"></i>
                <span className="text-sm font-bold">3. Programación Orientada a Objetos</span>
                <span className="ml-auto text-xs font-bold">18:10</span>
              </a>
            </div>
          </div>

          <div className="border-b-2 border-black">
            <div className="p-4 bg-gray-100 flex justify-between items-center">
              <span className="font-bold uppercase text-sm text-gray-600">
                Módulo 2: APIs REST
              </span>
              <i className="fa-solid fa-chevron-right text-gray-600"></i>
            </div>
          </div>

          <div className="p-4 bg-gray-50 flex justify-between items-center opacity-70">
            <span className="font-bold uppercase text-sm text-gray-600">
              <i className="fa-solid fa-lock mr-2"></i>
              Examen Final
            </span>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-white">
        <header className="lg:hidden border-b-2 border-black p-4 flex justify-between items-center bg-gray-100 sticky top-0 z-20">
          <button className="font-bold text-black uppercase">
            <i className="fa-solid fa-bars text-xl mr-2"></i>
            Temario
          </button>
          <span className="font-bold uppercase text-sm truncate ml-4 text-black">
            Curso: Java Spring
          </span>
        </header>

        <div className="max-w-4xl mx-auto w-full p-6 md:p-10 pb-40">
          <div className="text-xs font-bold uppercase text-gray-600 mb-6 tracking-wider">
            Módulo 1 <i className="fa-solid fa-angle-right mx-2"></i> Lección 2
          </div>

          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-8 leading-tight text-black">
            Estructuras de Control en Java
          </h1>

          <div className="w-full aspect-video border-4 border-black bg-gray-200 mb-10 flex flex-col items-center justify-center relative group cursor-pointer shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <i className="fa-solid fa-play text-6xl text-gray-800 group-hover:scale-110 transition-transform"></i>

            <div className="absolute bottom-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
              Reproductor de Video
            </div>

            <div className="absolute bottom-4 right-4 bg-black text-white text-xs font-bold px-2 py-1">
              12:45
            </div>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-400">
              <div className="bg-black h-full" style={{ width: '30%' }}></div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1 text-black">
              1. Introducción al tema
            </h2>

            <p className="mb-4 text-gray-800 leading-relaxed text-justify">
              Las estructuras de control determinan el flujo de ejecución de un programa. En esta
              lección, exploraremos cómo utilizar condicionales como if y else, además de bucles
              como for y while, para tomar decisiones y repetir acciones dentro del código.
            </p>

            <p className="mb-4 text-gray-800 leading-relaxed text-justify">
              A continuación, se muestra un ejemplo clásico de cómo iterar sobre una lista de
              elementos aplicando una lógica condicional básica.
            </p>
          </section>

          <div className="border-2 border-black bg-black text-gray-200 p-4 font-mono text-sm mb-10 shadow-[4px_4px_0_0_rgba(156,163,175,1)] relative overflow-x-auto">
            <div className="absolute top-0 right-0 bg-white text-black font-bold text-xs px-2 py-1 border-b-2 border-l-2 border-black uppercase hover:bg-gray-200 cursor-pointer">
              Copiar
            </div>

            <div className="mt-6 space-y-1">
              <div>
                <span className="text-purple-300">public class</span> EjemploFlujo {'{'}
              </div>
              <div className="ml-4">
                <span className="text-purple-300">public static void</span>{' '}
                <span className="text-blue-300">main</span>(String[] args) {'{'}
              </div>
              <div className="ml-8">
                <span className="text-purple-300">for</span> (
                <span className="text-purple-300">int</span> i ={' '}
                <span className="text-yellow-300">1</span>; i {'<='}{' '}
                <span className="text-yellow-300">10</span>; i++)
              </div>
              <div className="ml-8">
                <span className="text-purple-300">if</span> (i %{' '}
                <span className="text-yellow-300">2</span> =={' '}
                <span className="text-yellow-300">0</span>) {'{'}
              </div>
              <div className="ml-12">
                System.out.println(i + <span className="text-green-300">" es par"</span>);
              </div>
              <div className="ml-8">{'}'}</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="border-2 border-black bg-gray-50 p-6 mb-10 relative">
            <div className="absolute -top-3 left-4 bg-white border-2 border-black px-2 text-sm font-bold uppercase text-black">
              Recursos Adjuntos
            </div>

            <div className="flex flex-col space-y-3 mt-2">
              <a
                href="#"
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-3 border-2 border-dashed border-gray-400 bg-white hover:border-black transition-colors"
              >
                <div className="flex items-center">
                  <i className="fa-regular fa-file-pdf text-2xl mr-4 text-gray-700"></i>
                  <div>
                    <p className="font-bold text-sm uppercase text-black">
                      Presentacion_Clase2.pdf
                    </p>
                    <p className="text-xs text-gray-600 font-bold">
                      Documento PDF - 2.4 MB
                    </p>
                  </div>
                </div>

                <Boton variant="ghost" size="sm">
                  Descargar
                </Boton>
              </a>

              <a
                href="#"
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-3 border-2 border-dashed border-gray-400 bg-white hover:border-black transition-colors"
              >
                <div className="flex items-center">
                  <i className="fa-regular fa-file-code text-2xl mr-4 text-gray-700"></i>
                  <div>
                    <p className="font-bold text-sm uppercase text-black">
                      Ejercicios_Practicos.zip
                    </p>
                    <p className="text-xs text-gray-600 font-bold">
                      Archivo ZIP - 1.1 MB
                    </p>
                  </div>
                </div>

                <Boton variant="ghost" size="sm">
                  Descargar
                </Boton>
              </a>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 lg:left-80 right-0 bg-white border-t-4 border-black p-4 z-20 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
          <Boton variant="ghost" size="sm">
            Anterior
          </Boton>

          <Boton variant="primary" size="md">
            Completar y Continuar
          </Boton>
        </div>
      </main>
    </>
  )
}

export default page