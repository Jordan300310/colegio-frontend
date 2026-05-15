"use client"

import React, { useState } from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import CampoCheckbox from '../componentes/CampoCheckbox'
import CampoSelect from '../componentes/CampoSelect'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import Etiquetas from '../componentes/Etiquetas'
import BarraLateral from '../componentes/BarraLateral'

const PAGE_SIZE = 10

const columnasAsignaciones: TablaColumn[] = [
  { key: 'docente', label: 'Docente Titular' },
  { key: 'curso', label: 'Curso / Sección Asignada' },
  { key: 'fecha', label: 'Fecha Vinculación', className: 'text-center' },
]

type AsignacionData = {
  id: number
  docente: string
  curso: string
  fecha: string
}

const filasAsignaciones: AsignacionData[] = [
  {
    id: 1,
    docente: '[ LIC. ANA RAMÍREZ ]',
    curso: '3RO "A" - LÓGICA DIGITAL',
    fecha: '01/03/2026',
  },
  {
    id: 2,
    docente: '[ ING. CARLOS MENDOZA ]',
    curso: '5TO "ÚNICA" - APIS REST',
    fecha: '15/03/2026',
  },
]

export default function Page() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroDocente, setFiltroDocente] = useState('')
  const [filtroCurso, setFiltroCurso] = useState('')
  const [paginaActual, setPaginaActual] = useState(0)

  const cursosDisponibles = Array.from(new Set(filasAsignaciones.map((fila) => fila.curso))).map((curso) => ({
    label: curso,
    value: curso,
  }))
  const docentesDisponibles = Array.from(new Set(filasAsignaciones.map((fila) => fila.docente))).map((docente) => ({
    label: docente,
    value: docente,
  }))

  const filasFiltradas = filasAsignaciones.filter((fila) => {
    const term = busqueda.trim().toLowerCase()
    const matchesTexto =
      term === '' ||
      String(fila.docente).toLowerCase().includes(term) ||
      String(fila.curso).toLowerCase().includes(term)

    const matchesDocente = filtroDocente === '' || String(fila.docente) === filtroDocente
    const matchesCurso = filtroCurso === '' || String(fila.curso) === filtroCurso

    return matchesTexto && matchesDocente && matchesCurso
  })

  const totalElementos = filasFiltradas.length
  const totalPaginas = Math.max(1, Math.ceil(totalElementos / PAGE_SIZE))
  const inicio = totalElementos === 0 ? 0 : paginaActual * PAGE_SIZE + 1
  const fin = Math.min((paginaActual + 1) * PAGE_SIZE, totalElementos)

  const filasPaginadas = filasFiltradas
    .slice(paginaActual * PAGE_SIZE, paginaActual * PAGE_SIZE + PAGE_SIZE)
    .map((fila) => ({
      ...fila,
      docente: <span className="font-bold uppercase text-gray-900">{fila.docente}</span>,
      curso: <Etiquetas variant="outline">{fila.curso}</Etiquetas>,
      fecha: <span className="text-xs font-bold text-gray-700 uppercase">{fila.fecha}</span>,
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

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 text-gray-900">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase text-gray-900">[ LOGO ]</span>
          <button className="text-black cursor-pointer hover:text-gray-600 transition-all">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-6xl mx-auto w-full pb-20">
          <div className="text-xs font-bold uppercase text-gray-700 mb-6 tracking-widest">
            <a href="#" className="hover:text-black hover:underline cursor-pointer">
              Académico
            </a>
            <i className="fa-solid fa-angle-right mx-2 text-black"></i>
            <span className="text-black border-b-2 border-black">Asignación Docente</span>
          </div>

          <div className="mb-8 border-b-4 border-black pb-4">
            <h1 className="text-3xl font-bold uppercase text-gray-900">Vinculación Académica</h1>
            <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
              Asignar profesores a cursos y secciones
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 md:p-8 mb-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative text-gray-900">
            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black z-10">
              Nueva Asignación Masiva
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
              <div>
                <h2 className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1 text-gray-900">
                  1. Seleccionar Docente
                </h2>

                <div className="mb-6">
                  <CampoTexto
                    field={{
                      type: 'search',
                      name: 'buscarProfesor',
                      label: 'Buscar docente',
                      placeholder: 'BUSCAR PROFESOR...',
                      icon: 'fa-solid fa-search',
                    }}
                  />
                </div>

                <div className="bg-gray-100 border-2 border-black p-4 flex items-center space-x-4 text-gray-900">
                  <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center text-xl">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </div>

                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm text-gray-900">
                      [ ING. CARLOS MENDOZA ]
                    </p>
                    <p className="text-xs font-bold text-gray-700 uppercase">
                      cmendoza@colegio.edu.pe
                    </p>
                  </div>

                  <button className="ml-auto text-xs font-bold uppercase border-b-2 border-black hover:text-gray-600 cursor-pointer transition-all">
                    Cambiar
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold uppercase mb-4 border-b-2 border-dashed border-gray-400 inline-block pb-1 text-gray-900">
                  2. Asignar Secciones
                </h2>

                <div className="border-2 border-black bg-white h-48 overflow-y-auto p-3 space-y-3 text-gray-900">
                  <div className="bg-gray-100 border-2 border-black p-3">
                    <CampoCheckbox
                      field={{
                        type: 'checkbox',
                        name: 'sec1',
                        label: '4TO "B" - JAVA SPRING BOOT',
                      }}
                      value={true}
                    />
                    <p className="text-[10px] font-bold text-gray-700 uppercase ml-7 mt-1">
                      28 Alumnos inscritos
                    </p>
                  </div>

                  <div className="border-2 border-gray-300 p-3 bg-white">
                    <CampoCheckbox
                      field={{
                        type: 'checkbox',
                        name: 'sec2',
                        label: '5TO "ÚNICA" - BASE DE DATOS',
                      }}
                    />
                    <p className="text-[10px] font-bold text-gray-700 uppercase ml-7 mt-1">
                      25 Alumnos inscritos
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-gray-400 bg-gray-50 p-3 opacity-70">
                    <CampoCheckbox
                      field={{
                        type: 'checkbox',
                        name: 'sec3',
                        label: '3RO "A" - LÓGICA DIGITAL',
                        disabled: true,
                      }}
                    />
                    <p className="text-[10px] font-bold text-gray-700 uppercase ml-7 mt-1">
                      Ya asignada a [ Lic. Ana R. ]
                    </p>
                  </div>
                </div>

                <p className="text-[10px] font-bold text-gray-700 uppercase mt-2 text-right">
                  * Puede seleccionar múltiples secciones.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-4 border-black text-right">
              <Boton
                variant="primary"
                size="md"
                className="cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Confirmar Asignación (2 Secciones)
              </Boton>
            </div>
          </div>

          <div className="flex justify-between items-end mb-4 gap-4">
            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
              Directorio de Asignaciones Activas
            </h2>
          </div>

          <div className="bg-white border-2 border-black p-4 mb-8 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarAsignacion',
                  label: 'Buscar asignación',
                  placeholder: 'BUSCAR POR DOCENTE O CURSO... ',
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
                  name: 'docente',
                  label: 'Docente',
                  options: docentesDisponibles,
                }}
                value={filtroDocente}
                onChange={(_, v) => setFiltroDocente(v)}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'curso',
                  label: 'Curso',
                  options: cursosDisponibles,
                }}
                value={filtroCurso}
                onChange={(_, v) => setFiltroCurso(v)}
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

          <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-4 text-gray-900">
            <Tabla
              columns={columnasAsignaciones}
              rows={filasPaginadas}
              renderAction={() => (
                <div className="flex justify-center">
                  <button
                    title="Desvincular Profesor"
                    className="min-w-14 h-8 px-2 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all text-[10px] font-bold uppercase cursor-pointer active:scale-[0.95] text-gray-900"
                  >
                    Del
                  </button>
                </div>
              )}
              className="max-w-none mx-0 space-y-0"
            />

            <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white">
              <span className="text-xs font-bold uppercase text-gray-500">
                {totalElementos > 0
                  ? `Mostrando ${inicio} a ${fin} de ${totalElementos} asignaciones`
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
        </div>
      </main>
    </>
  )
}