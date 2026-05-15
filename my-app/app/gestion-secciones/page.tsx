'use client'

import React, { useEffect, useState } from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import CampoSelect from '../componentes/CampoSelect'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import Etiquetas from '../componentes/Etiquetas'
import BarraLateral from '../componentes/BarraLateral'
import {
  CursoDetalleResponseData,
  listarCursosPublicadosSolicitud,
} from '../../lib/api/login/cursos'
import { crearSeccionSolicitud, listarSeccionesSolicitud, SeccionDetalleResponseData } from '../../lib/api/login/secciones'

const PAGE_SIZE = 10

const columnas: TablaColumn[] = [
  { key: 'seccion', label: 'Sección' },
  { key: 'anio', label: 'Año Escolar', className: 'text-center' },
  { key: 'curso', label: 'Curso' },
  { key: 'docente', label: 'Docente' },
  { key: 'alumnos', label: 'Alumnos', className: 'text-center' },
  { key: 'estado', label: 'Estado', className: 'text-center' },
]

const page = () => {
  const [secciones, setSecciones] = useState<SeccionDetalleResponseData[]>([])
  const [seccionVincular, setSeccionVincular] = useState('')
  const [seccionesPage, setSeccionesPage] = useState(0)
  const [seccionesTotalPages, setSeccionesTotalPages] = useState(1)
  const [seccionesTotalElements, setSeccionesTotalElements] = useState(0)
  const [loadingSecciones, setLoadingSecciones] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [filtroCurso, setFiltroCurso] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('')

  const [filtrosAplicados, setFiltrosAplicados] = useState({
    busqueda: '',
    curso: '',
    estado: '',
  })

  const cargarSecciones = async (
    pageNumber = 0,
    filtrosParaUsar?: typeof filtrosAplicados,
  ) => {
    setLoadingSecciones(true)
    setErrorMessage('')

    try {
      const filtros = filtrosParaUsar ?? filtrosAplicados
      const params: Record<string, any> = { page: pageNumber, size: PAGE_SIZE }
      if (filtros.busqueda) params.busqueda = filtros.busqueda
      if (filtros.curso) params.curso = filtros.curso
      if (filtros.estado === 'ACTIVOS') params.activo = true
      if (filtros.estado === 'INACTIVOS') params.activo = false

      const response = await listarSeccionesSolicitud(params, getToken())

      const datos = response.datos
      if (datos && Array.isArray(datos.content)) {
        setSecciones(datos.content)
        setSeccionesTotalPages(datos.totalPages)
        setSeccionesTotalElements(datos.totalElements)
        setSeccionesPage(datos.number)
      } else {
        setSecciones([])
        setSeccionesTotalPages(1)
        setSeccionesTotalElements(0)
        setSeccionesPage(0)
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'No se pudo cargar las secciones disponibles.',
      )
      setSecciones([])
      setSeccionesTotalPages(1)
      setSeccionesTotalElements(0)
      setSeccionesPage(0)
    } finally {
      setLoadingSecciones(false)
    }
  }

  const [cursos, setCursos] = useState<CursoDetalleResponseData[]>([])
  const [nombreGrupo, setNombreGrupo] = useState('')
  const [anioEscolar, setAnioEscolar] = useState('')
  const [cursoSeleccionado, setCursoSeleccionado] = useState('')
  const [loadingCursos, setLoadingCursos] = useState(false)
  const [creatingSeccion, setCreatingSeccion] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getToken = () => {
    if (typeof window === 'undefined') return ''
    return sessionStorage.getItem('token') ?? localStorage.getItem('token') ?? ''
  }

  useEffect(() => {
    const loadCursos = async () => {
      setLoadingCursos(true)
      setErrorMessage('')

      try {
        const response = await listarCursosPublicadosSolicitud({}, getToken())
        const datos = response.datos
        if (datos && Array.isArray(datos.content)) {
          setCursos(datos.content)
        } else {
          setCursos([])
        }
      } catch (error) {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'No se pudo cargar la lista de cursos publicados.',
        )
        setCursos([])
      } finally {
        setLoadingCursos(false)
      }
    }

    loadCursos()
    cargarSecciones(0)
  }, [])

  const handleBuscar = () => {
    const nuevosFiltros = {
      busqueda: busqueda.trim().toLowerCase(),
      curso: filtroCurso,
      estado: filtroEstado,
    }
    setFiltrosAplicados(nuevosFiltros)
    cargarSecciones(0, nuevosFiltros)
  }

  const filas: TablaRow[] = secciones.map((seccion) => ({
    id: seccion.idSeccion,
    seccion: <span className="font-bold uppercase text-gray-900">{seccion.desNombre}</span>,
    anio: <span className="font-bold text-gray-900">{seccion.valAnio}</span>,
    curso: <span className="text-gray-900">{seccion.desCurso}</span>,
    docente: <span className="text-gray-900">{seccion.desProfesor || 'Sin asignar'}</span>,
    alumnos: <span className="font-bold text-gray-900">-</span>,
    estado: seccion.estActivo
      ? <Etiquetas variant="success">Activa</Etiquetas>
      : <Etiquetas variant="warning">Inactiva</Etiquetas>,
  }))

  const inicio = seccionesTotalElements === 0 ? 0 : seccionesPage * PAGE_SIZE + 1
  const fin = Math.min((seccionesPage + 1) * PAGE_SIZE, seccionesTotalElements)

  const paginasVisibles = (() => {
    const total = Math.max(0, seccionesTotalPages)
    const maxVisible = 10

    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i)
    }

    const mitad = Math.floor(maxVisible / 2)
    let start = Math.max(0, seccionesPage - mitad)
    let end = Math.min(total - 1, start + maxVisible - 1)
    start = Math.max(0, end - maxVisible + 1)

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  })()

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== seccionesPage) {
      cargarSecciones(pageNumber)
    }
  }

  const handleCreateSection = async () => {
    setStatusMessage('')
    setErrorMessage('')

    if (!nombreGrupo.trim() || !anioEscolar.trim() || !cursoSeleccionado) {
      setErrorMessage('Complete todos los campos antes de crear la sección.')
      return
    }

    setCreatingSeccion(true)

    try {
      const result = await crearSeccionSolicitud(
        {
          idCurso: Number(cursoSeleccionado),
          idAnioEscolar: Number(anioEscolar),
          desNombre: nombreGrupo.trim(),
        },
        getToken(),
      )

      if (result.exito) {
        setStatusMessage('Sección creada correctamente.')
        setNombreGrupo('')
        setAnioEscolar('')
        setCursoSeleccionado('')
        cargarSecciones(0)
      } else {
        setErrorMessage(result.mensaje || 'No se pudo crear la sección.')
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Ocurrió un error al crear la sección.',
      )
    } finally {
      setCreatingSeccion(false)
    }
  }

  return (
    <>
      <BarraLateral />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 text-gray-900">
        <header className="md:hidden bg-white border-b-2 border-black p-4 flex justify-between items-center">
          <span className="font-bold uppercase text-gray-900">[ LOGO ]</span>
          <button className="text-black cursor-pointer">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>

        <div className="p-8 max-w-6xl mx-auto w-full pb-20">
          <div className="text-xs font-bold uppercase text-gray-700 mb-6 tracking-widest">
            <a href="#" className="hover:text-black hover:underline cursor-pointer">
              Académico
            </a>
            <i className="fa-solid fa-angle-right mx-2 text-black"></i>
            <span className="text-black border-b-2 border-black">Gestión Secciones</span>
          </div>

          <div className="mb-8 border-b-4 border-black pb-4">
            <h1 className="text-3xl font-bold uppercase text-gray-900">Gestión de Secciones</h1>
            <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
              Crear grupos y vincular alumnos a un año escolar
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 md:p-8 mb-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative text-gray-900">
            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black z-10">
              Crear Nueva Sección
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <CampoTexto
                field={{
                  type: 'text',
                  name: 'nombreGrupo',
                  label: 'Nombre del Grupo',
                  placeholder: 'Ej: Taller de Programación - A',
                }}
                value={nombreGrupo}
                onChange={(_, value) => setNombreGrupo(value)}
              />

              <CampoTexto
                field={{
                  type: 'number',
                  name: 'anioEscolar',
                  label: 'Año Escolar',
                  placeholder: 'Ej: 2026',
                }}
                value={anioEscolar}
                onChange={(_, value) => setAnioEscolar(value)}
              />

              <CampoSelect
                field={{
                  type: 'select',
                  name: 'curso',
                  label: 'Curso',
                  options: cursos.map((curso) => ({
                    label: curso.desNombre,
                    value: String(curso.idCurso),
                  })),
                }}
                value={cursoSeleccionado}
                onChange={(_, value) => setCursoSeleccionado(value)}
              />
            </div>

            {loadingCursos ? (
              <div className="mt-4 text-sm text-gray-600">Cargando cursos publicados...</div>
            ) : null}

            {statusMessage ? (
              <div className="mt-4 rounded border border-green-600 bg-green-50 px-4 py-3 text-sm text-green-800">
                {statusMessage}
              </div>
            ) : null}

            {errorMessage ? (
              <div className="mt-4 rounded border border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800">
                {errorMessage}
              </div>
            ) : null}

            <div className="mt-8 pt-6 border-t-4 border-black text-right">
              <Boton
                type="button"
                variant="primary"
                size="md"
                icon={<span className="text-sm">＋</span>}
                onClick={handleCreateSection}
                disabled={creatingSeccion}
              >
                {creatingSeccion ? 'Creando sección...' : 'Crear Nueva Sección'}
              </Boton>
            </div>
          </div>

          <div className="flex justify-between items-end mb-4 gap-4">
            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
              Secciones Disponibles
            </h2>
          </div>

          <div className="mb-8 bg-white border-2 border-black p-4 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarSeccion',
                  label: 'Buscar sección',
                  placeholder: 'BUSCAR POR NOMBRE O CURSO...',
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
                  name: 'curso',
                  label: 'Curso',
                  options: cursos.map((curso) => ({
                    label: curso.desNombre,
                    value: String(curso.idCurso),
                  })),
                }}
                value={filtroCurso}
                onChange={(_, v) => setFiltroCurso(v)}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'estado',
                  label: 'Estado',
                  options: ['ACTIVOS', 'INACTIVOS'],
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

          <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-4 text-gray-900">
            {loadingSecciones ? (
              <div className="p-12 text-center">
                <p className="text-xs font-bold uppercase text-gray-500">Cargando secciones...</p>
              </div>
            ) : (
              <Tabla
                columns={columnas}
                rows={filas}
                renderAction={() => (
                  <div className="flex justify-center gap-2">
                    <button
                      title="Vincular alumnos"
                      className="min-w-13 h-8 px-2 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-[10px] font-bold uppercase cursor-pointer text-gray-900"
                    >
                      Vinc
                    </button>

                    <button
                      title="Editar sección"
                      className="min-w-13 h-8 px-2 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-[10px] font-bold uppercase cursor-pointer text-gray-900"
                    >
                      Edit
                    </button>
                  </div>
                )}
                className="max-w-none mx-0 space-y-0"
              />
            )}

            <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white">
              <span className="text-xs font-bold uppercase text-gray-500">
                {seccionesTotalElements > 0
                  ? `Mostrando ${inicio} a ${fin} de ${seccionesTotalElements} secciones`
                  : 'Sin resultados'}
              </span>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => cargarSecciones(seccionesPage - 1)}
                  disabled={seccionesPage === 0 || loadingSecciones}
                  className="border-2 border-black px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Anterior
                </button>

                {paginasVisibles.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageClick(p)}
                    disabled={loadingSecciones}
                    className={`border-2 px-3 py-1 font-bold text-sm ${p === seccionesPage ? 'bg-black text-white border-black cursor-default' : 'border-black hover:bg-gray-200'}`}
                  >
                    {p + 1}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => cargarSecciones(seccionesPage + 1)}
                  disabled={seccionesPage >= seccionesTotalPages - 1 || loadingSecciones}
                  className="border-2 border-black px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-black mt-10 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative text-gray-900">
            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black">
              Vincular Alumnos
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'seccionVincular',
                  label: 'Seleccionar Sección',
                  options: secciones.map((seccion) => ({
                    value: String(seccion.idSeccion),
                    label: seccion.desNombre,
                  })),
                }}
                value={seccionVincular}
                onChange={(_, value) => setSeccionVincular(value)}
              />

              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarAlumno',
                  label: 'Buscar Alumno',
                  placeholder: 'BUSCAR ALUMNO SIN SECCIÓN...',
                  icon: 'fa-solid fa-search',
                }}
              />
            </div>

            <div className="mt-6 bg-gray-50 border-2 border-dashed border-gray-400 p-4 text-gray-900">
              <p className="text-xs font-bold uppercase text-gray-700 mb-2">
                Alumnos disponibles para vincular
              </p>

              <div className="space-y-2">
                <div className="border-2 border-black bg-white px-4 py-3 font-bold uppercase text-sm text-gray-900">
                  [ ALUMNO 1 ] - alumno1@colegio.edu.pe
                </div>
                <div className="border-2 border-black bg-white px-4 py-3 font-bold uppercase text-sm text-gray-900">
                  [ ALUMNO 2 ] - alumno2@colegio.edu.pe
                </div>
                <div className="border-2 border-black bg-white px-4 py-3 font-bold uppercase text-sm text-gray-900">
                  [ ALUMNO 3 ] - alumno3@colegio.edu.pe
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-4 border-black text-right">
              <Boton
                type="button"
                variant="primary"
                size="md"
                icon={<span className="text-sm">＋</span>}
                onClick={() => { /* Lógica para vincular alumnos a la sección seleccionada */ }}
                disabled={creatingSeccion}
              >
                {creatingSeccion ? 'Vinculando...' : 'Vincular Alumnos'}
              </Boton>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page