"use client"

import React, { useEffect, useState } from 'react'
import Boton from '../componentes/Boton'
import CampoSelect from '../componentes/CampoSelect'
import CampoTexto from '../componentes/CampoTexto'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import BarraLateral from '../componentes/BarraLateral'
import { listarSeccionesSolicitud, SeccionDetalleResponseData } from '../../lib/api/login/secciones'

const PAGE_SIZE = 10

type ReporteRecienteData = {
  id: number
  fecha: string
  tipoFiltro: string
  usuario: string
}

const columnas: TablaColumn[] = [
  { key: 'fecha', label: 'Fecha' },
  { key: 'tipoFiltro', label: 'Tipo / Filtro' },
  { key: 'usuario', label: 'Usuario' },
]

const filasDatos: ReporteRecienteData[] = [
  {
    id: 1,
    fecha: '13/04/2026',
    tipoFiltro: 'Grupal - Secc. 4to "A"',
    usuario: 'Prof. [Nombre]',
  },
  {
    id: 2,
    fecha: '12/04/2026',
    tipoFiltro: 'Individual - Alumno [X]',
    usuario: 'Admin [Juan J.]',
  },
]

const page = () => {
  const [busqueda, setBusqueda] = useState('')
  const [filtroTipo, setFiltroTipo] = useState('')
  const [filtroUsuario, setFiltroUsuario] = useState('')
  const [filtroSeccion, setFiltroSeccion] = useState('')
  const [paginaActual, setPaginaActual] = useState(0)
  const [secciones, setSecciones] = useState<SeccionDetalleResponseData[]>([])
  const [loadingSecciones, setLoadingSecciones] = useState(false)
  const [seccionesError, setSeccionesError] = useState('')

  const tiposDisponibles = Array.from(new Set(filasDatos.map((fila) => fila.tipoFiltro)))
  const usuariosDisponibles = Array.from(new Set(filasDatos.map((fila) => fila.usuario)))
  const seccionSeleccionada = secciones.find((sec) => String(sec.idSeccion) === filtroSeccion)

  const filasFiltradas = filasDatos.filter((fila) => {
    const term = busqueda.trim().toLowerCase()
    const matchesTexto =
      term === '' ||
      fila.fecha.toLowerCase().includes(term) ||
      fila.tipoFiltro.toLowerCase().includes(term) ||
      fila.usuario.toLowerCase().includes(term)

    const matchesTipo = filtroTipo === '' || fila.tipoFiltro === filtroTipo
    const matchesUsuario = filtroUsuario === '' || fila.usuario === filtroUsuario
    const matchesSeccion =
      filtroSeccion === '' ||
      (seccionSeleccionada ? fila.tipoFiltro.includes(seccionSeleccionada.desNombre) : true)

    return matchesTexto && matchesTipo && matchesUsuario && matchesSeccion
  })

  const totalElementos = filasFiltradas.length
  const totalPaginas = Math.max(1, Math.ceil(totalElementos / PAGE_SIZE))
  const inicio = totalElementos === 0 ? 0 : paginaActual * PAGE_SIZE + 1
  const fin = Math.min((paginaActual + 1) * PAGE_SIZE, totalElementos)

  const filasPaginadas = filasFiltradas
    .slice(paginaActual * PAGE_SIZE, paginaActual * PAGE_SIZE + PAGE_SIZE)
    .map((fila) => ({
      ...fila,
      fecha: <span className="font-bold italic text-black">{fila.fecha}</span>,
      tipoFiltro: <span className="font-bold uppercase text-black">{fila.tipoFiltro}</span>,
      usuario: <span className="font-bold uppercase text-black">{fila.usuario}</span>,
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

  const getToken = () => {
    if (typeof window === 'undefined') return ''
    return sessionStorage.getItem('token') ?? localStorage.getItem('token') ?? ''
  }

  const cargarSecciones = async () => {
    setLoadingSecciones(true)
    setSeccionesError('')

    try {
      const response = await listarSeccionesSolicitud(
        { page: 0, size: 100 },
        getToken(),
      )
      setSecciones(response.datos?.content ?? [])
    } catch (error) {
      setSeccionesError(
        error instanceof Error
          ? error.message
          : 'No se pudo cargar las secciones disponibles.',
      )
      setSecciones([])
    } finally {
      setLoadingSecciones(false)
    }
  }

  useEffect(() => {
    cargarSecciones()
  }, [])

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
        <div className="p-8 max-w-5xl mx-auto w-full pb-20">
          <div className="mb-10 border-b-4 border-black pb-6">
            <h1 className="text-3xl font-bold uppercase text-black">
              Generador de Reportes Académicos
            </h1>
            <p className="text-gray-700 font-bold uppercase mt-2 text-sm tracking-widest">
              Exportación de datos para informes y seguimiento académico
            </p>
          </div>

          <div className="bg-white border-2 border-black p-8 mb-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold uppercase mb-6 bg-black text-white inline-block px-3 py-1">
              1. Configurar Filtros
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <CampoSelect
                  field={{
                    type: 'select',
                    name: 'seccionGrupo',
                    label: 'Sección / Grupo',
                    options: loadingSecciones
                      ? ['Cargando...']
                      : secciones.map((seccion) => ({
                        label: `${seccion.desNombre} - ${seccion.valAnio}`,
                        value: String(seccion.idSeccion),
                      })),
                  }}
                  value={filtroSeccion}
                  onChange={(_, value) => setFiltroSeccion(value)}
                />
                {seccionesError && (
                  <p className="text-xs text-red-600 font-bold uppercase mt-2">
                    {seccionesError}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-800">
                  Alumno Específico (Opcional)
                </label>
                <select className="w-full border-2 border-black p-3 font-bold uppercase bg-gray-100 focus:bg-white focus:outline-none text-black">
                  <option>[ Todos los Alumnos ]</option>
                  <option>Apellido, Nombre 1</option>
                  <option>Apellido, Nombre 2</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-800">
                  Fecha de Inicio
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/AAAA"
                  defaultValue="01/01/2026"
                  className="w-full border-2 border-black p-3 font-bold uppercase text-black focus:outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2 tracking-widest text-gray-800">
                  Fecha de Fin
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/AAAA"
                  defaultValue="13/04/2026"
                  className="w-full border-2 border-black p-3 font-bold uppercase text-black focus:outline-none bg-white"
                />
              </div>
            </div>

            {/* <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 space-y-3 text-black">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-black border-2 border-black"
                />
                <span className="text-sm font-bold uppercase text-black">
                  Incluir gráficas de rendimiento
                </span>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-black border-2 border-black"
                />
                <span className="text-sm font-bold uppercase text-black">
                  Incluir historial de intentos de examen
                </span>
              </div>
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-black p-8 text-center flex flex-col items-center hover:bg-gray-50 transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 border-2 border-black mb-4 flex items-center justify-center text-3xl text-black">
                <i className="fa-solid fa-file-pdf"></i>
              </div>

              <h3 className="font-bold text-lg uppercase mb-2 text-black">Exportar como PDF</h3>
              <p className="text-xs text-gray-600 uppercase mb-6 font-bold leading-relaxed">
                Ideal para informes impresos y evidencias oficiales.
              </p>

              <Boton variant="wire" size="md" fullWidth>
                Descargar .PDF
              </Boton>
            </div>

            <div className="bg-white border-2 border-black p-8 text-center flex flex-col items-center hover:bg-gray-50 transition-colors shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 border-2 border-black mb-4 flex items-center justify-center text-3xl text-black">
                <i className="fa-solid fa-file-excel"></i>
              </div>

              <h3 className="font-bold text-lg uppercase mb-2 text-black">Exportar como Excel</h3>
              <p className="text-xs text-gray-600 uppercase mb-6 font-bold leading-relaxed">
                Ideal para análisis estadístico y manipulación de datos.
              </p>

              <Boton variant="wire" size="md" fullWidth>
                Descargar .XLSX
              </Boton>
            </div>
          </div>

          <h2 className="text-xl font-bold uppercase mb-4 bg-black text-white inline-block px-3 py-1">
            Reportes Generados Recientemente
          </h2>

          <div className="bg-white border-2 border-black p-4 mb-8 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarReporte',
                  label: 'Buscar reporte',
                  placeholder: 'BUSCAR POR FECHA, TIPO O USUARIO...',
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
                  name: 'tipoFiltro',
                  label: 'Tipo / Filtro',
                  options: tiposDisponibles,
                }}
                value={filtroTipo}
                onChange={(_, v) => setFiltroTipo(v)}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'usuario',
                  label: 'Usuario',
                  options: usuariosDisponibles,
                }}
                value={filtroUsuario}
                onChange={(_, v) => setFiltroUsuario(v)}
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

          <div className="bg-white border-2 border-black overflow-x-auto mb-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-900">
            <Tabla
              columns={columnas}
              rows={filasPaginadas}
              renderAction={() => (
                <Boton variant="ghost" size="sm">
                  Re-descargar
                </Boton>
              )}
              className="max-w-none mx-0 space-y-0"
            />

            <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white">
              <span className="text-xs font-bold uppercase text-gray-500">
                {totalElementos > 0
                  ? `Mostrando ${inicio} a ${fin} de ${totalElementos} reportes`
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

          <div className="border-2 border-dashed border-gray-400 p-4 bg-gray-50 text-xs font-bold text-gray-600 uppercase leading-relaxed">
            Nota: la generación de archivos puede apoyarse en librerías especializadas para PDF y
            Excel. Si el volumen de datos es alto, se recomienda procesar estas solicitudes de
            forma asíncrona.
          </div>
        </div>
      </main>
    </>
  )
}

export default page