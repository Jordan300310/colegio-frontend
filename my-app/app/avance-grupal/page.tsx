"use client"

import React, { useEffect, useState } from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import CampoSelect from '../componentes/CampoSelect'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import TarjetaEstadistica from '../componentes/TarjetaEstadistica'
import BarraLateral from '../componentes/BarraLateral'
import { SeccionDetalleResponseData, listarSeccionesSolicitud } from '../../lib/api/login/secciones'
import { obtenerProgresoSeccionSolicitud, ProgresoSeccionResponseData, AlumnoProgresoData } from '../../lib/api/login/progreso'

const PAGE_SIZE = 6

const columnas: TablaColumn[] = [
  { key: 'estudiante', label: 'Estudiante' },
  { key: 'ultimaConexion', label: 'Última Conexión' },
  { key: 'progreso', label: 'Progreso' },
  { key: 'moduloActual', label: 'Módulo Actual' },
]

type RezagadoData = {
  id: number
  estudiante: string
  correo: string
  ultimaConexion: string
  progreso: number
  moduloActual: string
  estado: 'Rezagado' | 'Al Día'
}

const filasDatos: RezagadoData[] = [
  {
    id: 1,
    estudiante: '[ APELLIDO, NOMBRE 1 ]',
    correo: 'correo1@colegio.edu.pe',
    ultimaConexion: 'Hace 15 días',
    progreso: 12,
    moduloActual: 'Mod 1 - Pendiente',
    estado: 'Rezagado',
  },
  {
    id: 2,
    estudiante: '[ APELLIDO, NOMBRE 2 ]',
    correo: 'correo2@colegio.edu.pe',
    ultimaConexion: 'Hace 7 días',
    progreso: 35,
    moduloActual: 'Mod 2 - Examen Reprobado',
    estado: 'Rezagado',
  },
]

const page = () => {
  const [busqueda, setBusqueda] = useState('')
  const [filtroModulo, setFiltroModulo] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('')
  const [paginaActual, setPaginaActual] = useState(0)
  const [secciones, setSecciones] = useState<SeccionDetalleResponseData[]>([])
  const [seccionActiva, setSeccionActiva] = useState('')
  const [progreso, setProgreso] = useState<ProgresoSeccionResponseData | null>(null)
  const [alumnos, setAlumnos] = useState<AlumnoProgresoData[]>([])
  const [loadingProgreso, setLoadingProgreso] = useState(false)
  const [errorProgreso, setErrorProgreso] = useState('')
  const [fechaInicio, setFechaInicio] = useState('2026-03-01')
  const [fechaFin, setFechaFin] = useState(() => {
    const hoy = new Date()
    return hoy.toISOString().slice(0, 10)
  })

  const getToken = (): string => {
    if (typeof window === 'undefined') return ''
    return sessionStorage.getItem('token') ?? localStorage.getItem('token') ?? ''
  }

  useEffect(() => {
    const cargarSecciones = async () => {
      try {
        const response = await listarSeccionesSolicitud({ page: 0, size: 100 }, getToken())
        const datos = response.datos
        if (datos && Array.isArray(datos.content)) {
          setSecciones(datos.content)
        }
      } catch {
        setSecciones([])
      }
    }

    cargarSecciones()
  }, [])

  const modulosDisponibles = Array.from(new Set(filasDatos.map((fila) => fila.moduloActual)))
  const estadosDisponibles = Array.from(new Set(filasDatos.map((fila) => fila.estado)))
  const promedioPorcentaje = alumnos.length
    ? Number((alumnos.reduce((sum, alumno) => sum + alumno.porcentaje, 0) / alumnos.length).toFixed(1))
    : 0
  const totalRezagados = alumnos.filter((alumno) => alumno.porcentaje < 50).length

  const filasFiltradas = alumnos.filter((fila) => {
    const term = busqueda.trim().toLowerCase()
    const nombreCompleto = `${fila.apellidos} ${fila.nombres}`
    const matchesTexto =
      term === '' ||
      nombreCompleto.toLowerCase().includes(term) ||
      fila.ultimaActividad.toLowerCase().includes(term)

    const matchesModulo = filtroModulo === '' || `${fila.leccionesCompletadas}/${fila.totalLeccionesObligatorias}` === filtroModulo
    const matchesEstado = filtroEstado === '' || (fila.porcentaje < 50 ? 'Rezagado' : 'Al Día') === filtroEstado

    return matchesTexto && matchesModulo && matchesEstado
  })

  const totalElementos = filasFiltradas.length
  const totalPaginas = Math.max(1, Math.ceil(totalElementos / PAGE_SIZE))
  const inicio = totalElementos === 0 ? 0 : paginaActual * PAGE_SIZE + 1
  const fin = Math.min((paginaActual + 1) * PAGE_SIZE, totalElementos)

  const filasPaginadas = filasFiltradas.slice(paginaActual * PAGE_SIZE, paginaActual * PAGE_SIZE + PAGE_SIZE).map((fila) => ({
    id: fila.idAlumno,
    estudiante: (
      <div>
        <p className="font-bold uppercase text-black">[{fila.apellidos} {fila.nombres}]</p>
        <p className="text-xs text-gray-600 font-bold">{fila.ultimaActividad}</p>
      </div>
    ),
    ultimaConexion: <span className="text-gray-700 font-bold">{new Date(fila.ultimaActividad).toLocaleDateString('es-PE')}</span>,
    progreso: (
      <div className="flex items-center gap-2">
        <span className="font-bold text-black min-w-10">{fila.porcentaje}%</span>
        <div className="w-20 bg-gray-200 h-2 border border-black">
          <div className="bg-black h-full" style={{ width: `${fila.porcentaje}%` }}></div>
        </div>
      </div>
    ),
    moduloActual: (
      <span className="font-bold text-gray-700 uppercase">
        {fila.leccionesCompletadas}/{fila.totalLeccionesObligatorias}
      </span>
    ),
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

  const handleBuscar = async () => {
    setPaginaActual(0)
    if (!seccionActiva) return

    setLoadingProgreso(true)
    setErrorProgreso('')
    try {
      const seccion = secciones.find((sec) => sec.desNombre === seccionActiva)
      if (!seccion) {
        setErrorProgreso('Seleccione una sección válida.')
        setProgreso(null)
        setAlumnos([])
        return
      }

      const response = await obtenerProgresoSeccionSolicitud(
        seccion.idSeccion,
        { page: 0, size: PAGE_SIZE, sort: ['porcentaje,desc'] },
        getToken(),
      )

      const datos = response.datos
      if (datos) {
        setProgreso(datos)
        setAlumnos(datos.alumnos.content)
      } else {
        setProgreso(null)
        setAlumnos([])
      }
    } catch (error) {
      setErrorProgreso(
        error instanceof Error
          ? error.message
          : 'No se pudo cargar el progreso de la sección.',
      )
      setProgreso(null)
      setAlumnos([])
    } finally {
      setLoadingProgreso(false)
    }
  }

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== paginaActual) {
      setPaginaActual(pageNumber)
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
          <div className="mb-8 border-b-2 border-black pb-4">
            <h1 className="text-3xl font-bold uppercase text-black">Tablero de Avance Grupal</h1>
            <p className="text-gray-700 mt-2 text-sm font-bold uppercase tracking-widest">
              Supervisión de métricas y rendimiento por sección
            </p>
          </div>

          <div className="bg-white border-2 border-black p-6 mb-8 flex flex-col lg:flex-row gap-6 items-end shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="w-full lg:w-1/2">
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                Seleccionar Sección Activa
              </label>
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'seccionActiva',
                  label: ' ',
                  options: secciones.length > 0 ? secciones.map((seccion) => seccion.desNombre) : ['Cargando secciones...'],
                }}
                value={seccionActiva}
                onChange={(_, v) => setSeccionActiva(v)}
              />
            </div>

            {/* <div className="w-full lg:w-1/4">
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                Fecha Inicio
              </label>
              <input
                type="date"
                value={fechaInicio}
                onChange={(event) => setFechaInicio(event.target.value)}
                className="w-full border-2 border-black p-3 font-bold uppercase bg-white text-black outline-none"
              />
            </div> */}

            <div className="w-full lg:w-1/4 flex gap-4 items-end">
              {/* <div className="flex-1">
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                  Fecha Fin
                </label>
                <input
                  type="date"
                  value={fechaFin}
                  onChange={(event) => setFechaFin(event.target.value)}
                  className="w-full border-2 border-black p-3 font-bold uppercase bg-white text-black outline-none"
                />
              </div> */}

              <Boton variant="primary" size="md" onClick={handleBuscar}>
                Filtrar
              </Boton>
            </div>
            {errorProgreso && (
              <p className="text-xs font-bold uppercase text-red-600 mt-2">
                {errorProgreso}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TarjetaEstadistica
              title="Total Alumnos"
              value={progreso ? String(progreso.alumnos.totalElements) : '0'}
              icon="fa-solid fa-users"
            />
            <TarjetaEstadistica
              title="Promedio Grupo"
              value={progreso ? `${promedioPorcentaje}%` : '0%'}
              icon="fa-solid fa-chart-simple"
            />
            <TarjetaEstadistica
              title="Alumnos Rezagados"
              value={progreso ? String(totalRezagados) : '0'}
              icon="fa-solid fa-triangle-exclamation"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <h3 className="font-bold text-lg uppercase mb-6 border-b-2 border-dashed border-gray-400 pb-2 text-black">
                Avance Promedio por Módulo
              </h3>

              <div className="h-56 border-b-2 border-l-2 border-black flex items-end justify-between p-2 pt-8 gap-3">
                {alumnos.slice(0, 4).map((alumno) => (
                  <div key={alumno.idAlumno} className="w-full flex flex-col items-center group">
                    <span className="text-xs font-bold mb-1 text-black">{alumno.porcentaje}%</span>
                    <div
                      className={`w-full border-2 border-black ${alumno.porcentaje >= 70 ? 'bg-black' : 'bg-gray-400'} group-hover:bg-gray-800 transition-colors`}
                      style={{ height: `${alumno.porcentaje}%` }}
                    />
                    <span className="text-xs font-bold mt-2 text-black">{alumno.apellidos} {alumno.nombres}</span>
                  </div>
                ))}
                {alumnos.length === 0 && (
                  <>
                    <div className="w-full flex flex-col items-center group">
                      <span className="text-xs font-bold mb-1 text-black">95%</span>
                      <div className="w-full bg-black h-[95%] border-2 border-black group-hover:bg-gray-800 transition-colors"></div>
                      <span className="text-xs font-bold mt-2 text-black">MOD 1</span>
                    </div>

                    <div className="w-full flex flex-col items-center group">
                      <span className="text-xs font-bold mb-1 text-black">70%</span>
                      <div className="w-full bg-black h-[70%] border-2 border-black group-hover:bg-gray-800 transition-colors"></div>
                      <span className="text-xs font-bold mt-2 text-black">MOD 2</span>
                    </div>

                    <div className="w-full flex flex-col items-center group">
                      <span className="text-xs font-bold mb-1 text-black">45%</span>
                      <div className="w-full bg-gray-400 h-[45%] border-2 border-black border-dashed group-hover:bg-gray-500 transition-colors"></div>
                      <span className="text-xs font-bold mt-2 text-black">MOD 3</span>
                    </div>

                    <div className="w-full flex flex-col items-center group">
                      <span className="text-xs font-bold mb-1 text-black">10%</span>
                      <div className="w-full bg-gray-200 h-[10%] border-2 border-black border-dashed group-hover:bg-gray-300 transition-colors"></div>
                      <span className="text-xs font-bold mt-2 text-black">MOD 4</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white border-2 border-black p-6 flex flex-col shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <h3 className="font-bold text-lg uppercase mb-6 border-b-2 border-dashed border-gray-400 pb-2 text-black">
                Estado de la Clase
              </h3>

              <div className="flex-1 flex items-center justify-center gap-8 flex-col sm:flex-row">
                <div className="w-40 h-40 rounded-full border-4 border-black bg-[conic-gradient(black_0_75%,#d1d5db_75%_100%)] shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]"></div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-black border-2 border-black"></div>
                    <div>
                      <p className="font-bold uppercase text-sm text-black">Al Día</p>
                      <p className="text-xs text-gray-700 font-bold">24 Alumnos (75%)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-gray-300 border-2 border-black border-dashed"></div>
                    <div>
                      <p className="font-bold uppercase text-sm text-black">Rezagados</p>
                      <p className="text-xs text-gray-700 font-bold">8 Alumnos (25%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end mb-4 gap-4">
            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
              Atención Prioritaria (Rezagados)
            </h2>

            <button className="text-xs font-bold uppercase border-b-2 border-black hover:text-gray-600 transition-colors text-black">
              Ver todos los alumnos <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>

          <div className="bg-white border-2 border-black p-4 mb-8 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarRezagado',
                  label: 'Buscar rezagados',
                  placeholder: 'BUSCAR POR NOMBRE, CORREO O MÓDULO... ',
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

          <div className="bg-white border-2 border-black overflow-hidden mb-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <Tabla
              columns={columnas}
              rows={filasPaginadas}
              renderAction={() => (
                <Boton variant="ghost" size="sm">
                  Ver Ficha
                </Boton>
              )}
              className="max-w-none mx-0 space-y-0"
            />

            <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white">
              <span className="text-xs font-bold uppercase text-gray-500">
                {totalElementos > 0
                  ? `Mostrando ${inicio} a ${fin} de ${totalElementos} alumnos`
                  : 'Sin resultados'}
              </span>

              <div className="flex space-x-2 flex-wrap">
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

export default page