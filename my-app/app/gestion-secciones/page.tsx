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
import { crearSeccionSolicitud } from '../../lib/api/login/secciones'

const columnas: TablaColumn[] = [
  { key: 'seccion', label: 'Sección' },
  { key: 'anio', label: 'Año Escolar', className: 'text-center' },
  { key: 'curso', label: 'Curso' },
  { key: 'docente', label: 'Docente' },
  { key: 'alumnos', label: 'Alumnos', className: 'text-center' },
  { key: 'estado', label: 'Estado', className: 'text-center' },
]

const filas: TablaRow[] = [
  {
    id: 1,
    seccion: <span className="font-bold uppercase text-gray-900">Taller de Programación - A</span>,
    anio: <span className="font-bold text-gray-900">2026</span>,
    curso: <span className="text-gray-900">Lógica Digital</span>,
    docente: <span className="text-gray-900">Lic. Ana Ramírez</span>,
    alumnos: <span className="font-bold text-gray-900">28</span>,
    estado: <Etiquetas variant="success">Activa</Etiquetas>,
  },
  {
    id: 2,
    seccion: <span className="font-bold uppercase text-gray-900">Taller de Programación - B</span>,
    anio: <span className="font-bold text-gray-900">2026</span>,
    curso: <span className="text-gray-900">APIs REST</span>,
    docente: <span className="text-gray-900">Ing. Carlos Mendoza</span>,
    alumnos: <span className="font-bold text-gray-900">25</span>,
    estado: <Etiquetas variant="success">Activa</Etiquetas>,
  },
  {
    id: 3,
    seccion: <span className="font-bold uppercase text-gray-900">Base de Datos - C</span>,
    anio: <span className="font-bold text-gray-900">2026</span>,
    curso: <span className="text-gray-900">Base de Datos</span>,
    docente: <span className="text-gray-900">Sin asignar</span>,
    alumnos: <span className="font-bold text-gray-900">0</span>,
    estado: <Etiquetas variant="warning">Sin alumnos</Etiquetas>,
  },
]

const page = () => {
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
  }, [])

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
<<<<<<< HEAD
      <BarraLateral />
=======
      <aside className="w-64 bg-white border-r-2 border-black flex flex-col hidden md:flex z-10 text-gray-900">
        <div className="p-6 border-b-2 border-black flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-gray-900">
            L
          </div>
          <span className="text-xl font-bold uppercase tracking-widest text-gray-900">[ LOGO ]</span>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-6">
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer">
            <i className="fa-solid fa-house w-5"></i>
            <span>Dashboard</span>
          </a>

          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400 cursor-pointer">
            <i className="fa-solid fa-users-gear w-5"></i>
            <span>Gestión Usuarios</span>
          </a>

          <a href="#" className="flex items-center space-x-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer">
            <i className="fa-solid fa-layer-group w-5"></i>
            <span>Gestión Secciones</span>
          </a>
        </nav>
      </aside>
>>>>>>> 72ce528735e283a6ee3043ef7fc3cce9450235f1

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
<<<<<<< HEAD
                onClick={handleCreateSection}
                disabled={creatingSeccion}
=======
                className="cursor-pointer"
>>>>>>> 72ce528735e283a6ee3043ef7fc3cce9450235f1
              >
                {creatingSeccion ? 'Creando sección...' : 'Crear Nueva Sección'}
              </Boton>
            </div>
          </div>

          <div className="flex justify-between items-end mb-4 gap-4">
            <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1">
              Secciones Disponibles
            </h2>

            <div className="w-64 hidden sm:block">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'filtrar',
                  label: 'Buscar Sección',
                  placeholder: 'BUSCAR SECCIÓN...',
                  icon: 'fa-solid fa-filter',
                }}
              />
            </div>
          </div>

          <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-12 text-gray-900">
            <Tabla
              columns={columnas}
              rows={filas}
              renderAction={() => (
                <div className="flex justify-center gap-2">
                  <button
                    title="Vincular alumnos"
                    className="min-w-[52px] h-8 px-2 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-[10px] font-bold uppercase cursor-pointer text-gray-900"
                  >
                    Vinc
                  </button>

                  <button
                    title="Editar sección"
                    className="min-w-[52px] h-8 px-2 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-[10px] font-bold uppercase cursor-pointer text-gray-900"
                  >
                    Edit
                  </button>
                </div>
              )}
              className="max-w-none mx-0 space-y-0"
            />
          </div>

          <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative text-gray-900">
            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 text-xs font-bold uppercase border-2 border-black">
              Vincular Alumnos
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'seccionVincular',
                  label: 'Seleccionar Sección',
                  options: [
                    'Taller de Programación - A',
                    'Taller de Programación - B',
                    'Base de Datos - C',
                  ],
                }}
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
              <Boton variant="wire" size="md" className="cursor-pointer">
                Guardar / Vincular
              </Boton>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page