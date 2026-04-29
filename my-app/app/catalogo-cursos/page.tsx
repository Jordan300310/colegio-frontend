"use client"

import React from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import CampoSelect from '../componentes/CampoSelect'
import Etiquetas from '../componentes/Etiquetas'

const Page = () => {
  return (
    <>
      <aside className="w-64 bg-white border-r-2 border-black flex-col hidden md:flex text-gray-900">
        <div className="p-6 border-b-2 border-black flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-gray-900">
            L
          </div>
          <span className="text-xl font-bold uppercase tracking-widest text-gray-900">[ LOGO ]</span>
        </div>

        <div className="p-6 flex items-center space-x-4 border-b-2 border-dashed border-gray-300">
          <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center text-gray-900">
            <i className="fa-regular fa-user"></i>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-gray-900">[ Nombre Alumno ]</p>
            <p className="text-xs text-gray-700 uppercase font-bold">Sección: 4to "A"</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a href="/mi-progreso" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer transition-all">
            <i className="fa-solid fa-chart-pie w-5"></i>
            <span>Mi Progreso</span>
          </a>

          <a href="/catalogo-cursos" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer hover:bg-black hover:text-white">
            <i className="fa-solid fa-book w-5"></i>
            <span>Catálogo Cursos</span>
          </a>

          <a href="/evaluaciones" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer transition-all">
            <i className="fa-solid fa-calendar-check w-5"></i>
            <span>Evaluaciones</span>
          </a>
        </nav>

        <div className="p-4 border-t-2 border-black">
          <a href="/login" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 cursor-pointer transition-all">
            <i className="fa-solid fa-sign-out-alt w-5"></i>
            <span className="uppercase text-sm font-bold">Cerrar Sesión</span>
          </a>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 text-gray-900">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase text-gray-900">[ LOGO ]</span>
          <button className="text-black cursor-pointer hover:text-gray-600 transition-all">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full pb-20">
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end border-b-2 border-black pb-4">
            <div>
              <h1 className="text-3xl font-bold uppercase text-gray-900">Catálogo de Cursos</h1>
              <p className="text-gray-700 mt-2 text-sm font-bold uppercase tracking-widest">
                Cursos habilitados para tu nivel académico
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8 text-gray-900">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarCurso',
                  label: 'Buscar curso',
                  placeholder: 'BUSCAR CURSO POR NOMBRE O TEMA...',
                  icon: 'fa-solid fa-search',
                }}
              />
            </div>

            <div className="md:w-72">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'categoria',
                  label: 'Categoría',
                  options: ['Frontend', 'Backend', 'Lógica y Algoritmos'],
                }}
              />
            </div>

            <div className="md:w-72">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'orden',
                  label: 'Ordenar por',
                  options: ['Recientes', 'Progreso (Mayor a Menor)', 'Orden Alfabético'],
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-black flex flex-col text-gray-900 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200 group">
              <div className="h-40 border-b-2 border-black bg-gray-200 flex items-center justify-center overflow-hidden relative">
                <i className="fa-solid fa-laptop-code text-4xl text-gray-700 group-hover:scale-110 transition-transform"></i>
                <div className="absolute top-4 right-4">
                  <Etiquetas variant="neutral">Nuevo</Etiquetas>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col text-gray-900">
                <div className="flex justify-between items-center mb-3 gap-2">
                  <Etiquetas variant="outline">Backend / Java</Etiquetas>
                  <span className="text-xs font-bold text-gray-700 uppercase">10 Módulos</span>
                </div>

                <h3 className="font-bold text-xl uppercase mb-2 text-gray-900">
                  Introducción a Java Spring
                </h3>

                <p className="text-sm text-gray-700 mb-6 flex-1 leading-relaxed">
                  Aprende a construir APIs RESTful y fundamentos de programación orientada a
                  objetos aplicados en entornos reales.
                </p>

                <div className="border-t-2 border-dashed border-gray-400 pt-4 flex flex-col gap-3">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase text-gray-700">
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <span>Docente: [ Ing. Carlos M. ]</span>
                  </div>

                  <Boton variant="primary" size="sm" fullWidth className="cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.97]">
                    Ingresar al Curso
                  </Boton>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black flex flex-col text-gray-900 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200 group">
              <div className="h-40 border-b-2 border-black bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <i className="fa-solid fa-code text-4xl text-gray-700 group-hover:scale-110 transition-transform"></i>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-white border-t-2 border-black">
                  <div className="h-full bg-black" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col text-gray-900">
                <div className="flex justify-between items-center mb-3 gap-2">
                  <Etiquetas variant="outline">Frontend / Web</Etiquetas>
                  <Etiquetas variant="warning">45% Avance</Etiquetas>
                </div>

                <h3 className="font-bold text-xl uppercase mb-2 text-gray-900">
                  Fundamentos de HTML & CSS
                </h3>

                <p className="text-sm text-gray-700 mb-6 flex-1 leading-relaxed">
                  Conceptos básicos de maquetación web, estilos, selectores y diseño responsivo
                  sin librerías.
                </p>

                <div className="border-t-2 border-dashed border-gray-400 pt-4 flex flex-col gap-3">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase text-gray-700">
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <span>Docente: [ Lic. Ana R. ]</span>
                  </div>

                  <Boton variant="ghost" size="sm" fullWidth className="cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.97]">
                    Continuar Lección
                  </Boton>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black flex flex-col text-gray-900 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-200 group">
              <div className="h-40 border-b-2 border-black bg-gray-200 flex items-center justify-center overflow-hidden">
                <i className="fa-solid fa-database text-4xl text-gray-700 group-hover:scale-110 transition-transform"></i>
              </div>

              <div className="p-5 flex-1 flex flex-col text-gray-900">
                <div className="flex justify-between items-center mb-3 gap-2">
                  <Etiquetas variant="outline">Bases de Datos</Etiquetas>
                  <span className="text-xs font-bold text-gray-700 uppercase">8 Módulos</span>
                </div>

                <h3 className="font-bold text-xl uppercase mb-2 text-gray-900">
                  Lógica SQL y Relaciones
                </h3>

                <p className="text-sm text-gray-700 mb-6 flex-1 leading-relaxed">
                  Diseño de diagramas Entidad-Relación y consultas estructuradas en PostgreSQL.
                </p>

                <div className="border-t-2 border-dashed border-gray-400 pt-4 flex flex-col gap-3">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase text-gray-700">
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <span>Docente: [ Ing. Carlos M. ]</span>
                  </div>

                  <Boton variant="primary" size="sm" fullWidth className="cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.97]">
                    Ingresar al Curso
                  </Boton>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mb-12">
            <Boton variant="ghost" size="sm" disabled>
              Anterior
            </Boton>

            <span className="font-bold uppercase border-b-2 border-black px-2 text-gray-900">
              Pág. 1 de 1
            </span>

            <Boton variant="ghost" size="sm" disabled>
              Siguiente
            </Boton>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page