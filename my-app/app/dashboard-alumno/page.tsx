"use client"

import React, { useState } from 'react'
import Boton from '../componentes/Boton'
import Etiquetas from '../componentes/Etiquetas'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import CampoSelect from '../componentes/CampoSelect'
import CampoTexto from '../componentes/CampoTexto'
import TarjetaEstadistica from '../componentes/TarjetaEstadistica'
import TarjetaModulo from '../componentes/TarjetaModulo'
import BarraLateral from '../componentes/BarraLateral'

const PAGE_SIZE = 10

type CalificacionData = {
  id: number
  evaluacion: string
  modulo: string
  nota: string
  estado: 'Aprobado' | 'Pendiente'
}

const columnas: TablaColumn[] = [
  { key: 'evaluacion', label: 'Evaluación' },
  { key: 'modulo', label: 'Módulo' },
  { key: 'nota', label: 'Nota', className: 'text-center' },
  { key: 'estado', label: 'Estado', className: 'text-center' },
]

const filasDatos: CalificacionData[] = [
  {
    id: 1,
    evaluacion: 'Examen Práctico 1',
    modulo: 'Módulo 1',
    nota: '19 / 20',
    estado: 'Aprobado',
  },
  {
    id: 2,
    evaluacion: 'Test Control de Flujo',
    modulo: 'Módulo 1',
    nota: '18 / 20',
    estado: 'Aprobado',
  },
  {
    id: 3,
    evaluacion: 'Examen Endpoints',
    modulo: 'Módulo 2',
    nota: '--',
    estado: 'Pendiente',
  },
]

const page = () => {
  const [busqueda, setBusqueda] = useState('')
  const [filtroModulo, setFiltroModulo] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('')
  const [paginaActual, setPaginaActual] = useState(0)

  const modulosDisponibles = Array.from(new Set(filasDatos.map((fila) => fila.modulo))).map((modulo) => ({
    label: modulo,
    value: modulo,
  }))

  const estadosDisponibles = Array.from(new Set(filasDatos.map((fila) => fila.estado))).map((estado) => ({
    label: estado,
    value: estado,
  }))

  const filasFiltradas = filasDatos.filter((fila) => {
    const term = busqueda.trim().toLowerCase()
    const matchesTexto =
      term === '' ||
      fila.evaluacion.toLowerCase().includes(term) ||
      fila.modulo.toLowerCase().includes(term)

    const matchesModulo = filtroModulo === '' || fila.modulo === filtroModulo
    const matchesEstado = filtroEstado === '' || fila.estado === filtroEstado

    return matchesTexto && matchesModulo && matchesEstado
  })

  const totalElementos = filasFiltradas.length
  const totalPaginas = Math.max(1, Math.ceil(totalElementos / PAGE_SIZE))
  const inicio = totalElementos === 0 ? 0 : paginaActual * PAGE_SIZE + 1
  const fin = Math.min((paginaActual + 1) * PAGE_SIZE, totalElementos)

  const filasPaginadas = filasFiltradas
    .slice(paginaActual * PAGE_SIZE, paginaActual * PAGE_SIZE + PAGE_SIZE)
    .map((fila) => ({
      id: fila.id,
      evaluacion: <span className="font-bold text-black">{fila.evaluacion}</span>,
      modulo: <span className="text-black">{fila.modulo}</span>,
      nota: <span className="font-bold">{fila.nota}</span>,
      estado: fila.estado === 'Aprobado'
        ? <Etiquetas variant="success">Aprobado</Etiquetas>
        : <Etiquetas variant="warning">Pendiente</Etiquetas>,
    }))

  const paginasVisibles = (() => {
    const total = Math.max(0, totalPaginas)
    const maxVisible = 10

    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i)
    }

    const mitad = Math.floor(maxVisible / 2)
    let start = Math.max(0, paginaActual - mitad)
    let end = Math.min(total - 1, start + maxVisible - 1)
    start = Math.max(0, end - maxVisible + 1)

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  })()

  const handleBuscar = () => {
    setPaginaActual(0)
  }

  const handlePageClick = (pagina: number) => {
    if (pagina !== paginaActual) {
      setPaginaActual(pagina)
    }
  }

  return (
    <>
      <BarraLateral />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase">[ LOGO ]</span>
          <button className="text-black">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full pb-20">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black pb-4 gap-4">
            <div>
              <h1 className="text-3xl font-bold uppercase text-black">Mi Progreso</h1>
              <p className="text-gray-700 mt-2 text-sm font-bold uppercase tracking-widest">
                Visualización de avance general, módulos y calificaciones
              </p>
            </div>

            <div className="hidden sm:block">
              <Etiquetas variant="neutral">Progreso actual: 65%</Etiquetas>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <TarjetaEstadistica
              title="Avance Total"
              value="65%"
              icon="fa-solid fa-chart-line"
            />

            <TarjetaEstadistica
              title="Lecciones Completadas"
              value="26 / 40"
              icon="fa-solid fa-book-open"
            />

            <TarjetaEstadistica
              title="Promedio General"
              value="18.5"
              icon="fa-solid fa-award"
            />
          </div>

          <div className="mb-10 bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
                Resumen Visual del Curso
              </h2>

              <p className="text-xs font-bold uppercase text-gray-700">
                Aún no alcanzas el 100% para habilitar la descarga de constancia.
              </p>
            </div>

            <div className="w-full border-2 border-black bg-gray-100 h-6">
              <div className="bg-black h-full" style={{ width: '65%' }}></div>
            </div>

            <div className="flex justify-between mt-2 text-xs font-bold uppercase text-gray-700">
              <span>Inicio</span>
              <span>65% completado</span>
              <span>Meta: 100%</span>
            </div>
          </div>

          <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">
            Ruta de Aprendizaje
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <TarjetaModulo
              status="Completado"
              statusVariant="success"
              title="[ Módulo 1 ]"
              description="Fundamentos de programación y estructuras de control."
              buttonLabel="Repasar"
              className="[&_button]:bg-black [&_button]:text-white [&_button]:cursor-pointer [&_button]:hover:bg-white [&_button]:hover:text-black [&_button]:transition-all"
            />

            <div className="bg-gray-200 border-4 border-black p-5 relative transform scale-105 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
                En curso
              </div>

              <div className="mb-4 mt-2">
                <h3 className="font-bold text-lg uppercase text-black">[ Módulo 2 ]</h3>
                <p className="text-sm text-gray-800 font-bold">APIs RESTful</p>
              </div>

              <div className="w-full border-2 border-black bg-white h-4 mb-2">
                <div className="bg-black h-full" style={{ width: '60%' }}></div>
              </div>

              <p className="text-[10px] font-bold uppercase text-gray-700 mb-4">
                60% completado
              </p>

              <button className="w-full border-2 border-black bg-black text-white py-2 text-sm font-bold uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">
                Continuar
              </button>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-400 p-5 relative opacity-70">
              <div className="absolute top-0 right-0 border-b-2 border-l-2 border-gray-400 text-xs font-bold px-2 py-1 uppercase text-gray-600">
                Bloqueado
              </div>

              <div className="mb-4 mt-2">
                <h3 className="font-bold text-lg text-gray-700 uppercase">[ Módulo 3 ]</h3>
                <p className="text-sm text-gray-600 font-bold">Base de Datos</p>
              </div>

              <div className="w-full py-2 border-2 border-gray-300 text-gray-500 text-center text-sm font-bold uppercase bg-white">
                Disponible al completar módulo anterior
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">
            Historial de Calificaciones
          </h2>

          <div className="bg-white border-2 border-black p-4 mb-8 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarCalificacion',
                  label: 'Buscar calificaciones',
                  placeholder: 'BUSCAR POR EVALUACIÓN O MÓDULO...',
                  icon: 'fa-solid fa-search',
                }}
                value={busqueda}
                onChange={(_, v) => setBusqueda(v)}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'modulo',
                  label: 'Módulo',
                  options: modulosDisponibles,
                }}
                value={filtroModulo}
                onChange={(_, v) => setFiltroModulo(v)}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'estado',
                  label: 'Estado',
                  options: estadosDisponibles,
                }}
                value={filtroEstado}
                onChange={(_, v) => setFiltroEstado(v)}
              />
            </div>

            <div className="flex items-end">
              <Boton
                variant="primary"
                size="md"
                icon={<i className="fa-solid fa-magnifying-glass text-xs"></i>}
                onClick={handleBuscar}
              >
                Buscar
              </Boton>
            </div>
          </div>

          <div className="bg-white border-2 border-black overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-4">
            <Tabla
              columns={columnas}
              rows={filasPaginadas}
              className="max-w-none mx-0 space-y-0"
            />

            <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white">
              <span className="text-xs font-bold uppercase text-gray-500">
                {totalElementos > 0
                  ? `Mostrando ${inicio} a ${fin} de ${totalElementos} calificaciones`
                  : 'Sin resultados'}
              </span>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handlePageClick(paginaActual - 1)}
                  disabled={paginaActual === 0}
                  className="border-2 border-black px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Anterior
                </button>

                {paginasVisibles.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageClick(p)}
                    className={`border-2 px-3 py-1 font-bold text-sm ${p === paginaActual ? 'bg-black text-white border-black cursor-default' : 'border-black hover:bg-gray-200'}`}
                  >
                    {p + 1}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => handlePageClick(paginaActual + 1)}
                  disabled={paginaActual >= totalPaginas - 1}
                  className="border-2 border-black px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white border-2 border-dashed border-gray-400 p-5 text-center">
            <p className="text-xs font-bold uppercase text-gray-700 leading-relaxed">
              Si completas todos los módulos y alcanzas el 100% de progreso, el sistema podrá
              habilitar la descarga de tu constancia o diploma.
            </p>
          </div>

          <footer className="mt-12 pt-6 border-t-2 border-black text-center text-sm font-bold uppercase text-gray-600 mb-8">
            [ FOOTER DEL SISTEMA ]
          </footer>
        </div>
      </main>
    </>
  )
}

export default page