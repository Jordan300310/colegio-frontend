"use client"

import { useState } from 'react'
import Boton from '../componentes/Boton'
import CampoSelect from '../componentes/CampoSelect'
import Etiquetas from '../componentes/Etiquetas'
import TarjetaEstadistica from '../componentes/TarjetaEstadistica'
import BarraLateral from '../componentes/BarraLateral'
import { obtenerProgresoAlumnoCursoSolicitud, ProgresoAlumnoCursoResponseData } from '../../lib/api/login/progreso'

const alumnosDisponibles = [
  { idAlumno: 1, label: '[ APELLIDO, NOMBRE 1 ]' },
  { idAlumno: 2, label: '[ APELLIDO, NOMBRE 2 ]' },
]

const cursosDisponibles = [
  { idCurso: 101, label: 'Java Básico' },
  { idCurso: 102, label: 'Programación Avanzada' },
]

const page = () => {
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState('')
  const [cursoSeleccionado, setCursoSeleccionado] = useState('')
  const [detalleProgreso, setDetalleProgreso] = useState<ProgresoAlumnoCursoResponseData | null>(null)
  const [loadingDetalle, setLoadingDetalle] = useState(false)
  const [errorDetalle, setErrorDetalle] = useState('')

  const getToken = (): string => {
    if (typeof window === 'undefined') return ''
    return sessionStorage.getItem('token') ?? localStorage.getItem('token') ?? ''
  }

  const handleFiltrar = async () => {
    setErrorDetalle('')
    if (!alumnoSeleccionado || !cursoSeleccionado) {
      setErrorDetalle('Seleccione alumno y curso antes de filtrar.')
      return
    }

    setLoadingDetalle(true)
    try {
      const response = await obtenerProgresoAlumnoCursoSolicitud(
        Number(alumnoSeleccionado),
        Number(cursoSeleccionado),
        getToken(),
      )
      setDetalleProgreso(response.datos ?? null)
    } catch (error) {
      setErrorDetalle(
        error instanceof Error
          ? error.message
          : 'Error al cargar el detalle de progreso.',
      )
      setDetalleProgreso(null)
    } finally {
      setLoadingDetalle(false)
    }
  }

  const progresoAlumno = detalleProgreso

  return (
    <>
      <BarraLateral />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50">
        <div className="p-8 max-w-6xl mx-auto w-full pb-20">
          <div className="bg-white border-2 border-black p-6 mb-8 flex flex-col lg:flex-row gap-6 items-end shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="w-full lg:w-1/3">
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                Seleccionar Alumno
              </label>
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'alumno',
                  label: ' ',
                  options: alumnosDisponibles.map((alumno) => ({
                    label: alumno.label,
                    value: String(alumno.idAlumno),
                  })),
                }}
                value={alumnoSeleccionado}
                onChange={(_, v) => setAlumnoSeleccionado(v)}
              />
            </div>

            <div className="w-full lg:w-1/3">
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                Seleccionar Curso
              </label>
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'curso',
                  label: ' ',
                  options: cursosDisponibles.map((curso) => ({
                    label: curso.label,
                    value: String(curso.idCurso),
                  })),
                }}
                value={cursoSeleccionado}
                onChange={(_, v) => setCursoSeleccionado(v)}
              />
            </div>

            <div className="w-full lg:w-1/4 flex gap-4 items-end">
              <Boton variant="primary" size="md" onClick={handleFiltrar}>
                {loadingDetalle ? 'Cargando...' : 'Filtrar'}
              </Boton>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-4 border-black pb-6 gap-4">
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 border-4 border-black bg-gray-200 flex items-center justify-center text-4xl flex-shrink-0">
                <i className="fa-solid fa-user text-black"></i>
              </div>

              <div>
                <h1 className="text-3xl font-bold uppercase text-black">
                  [ APELLIDO, NOMBRE DEL ALUMNO ]
                </h1>
                <p className="text-gray-700 font-bold uppercase mt-1">
                  ID: 2026-AL-042 | Sección: 4to "A"
                </p>

                <div className="flex flex-wrap gap-3 mt-3">
                  <Etiquetas variant="success">Estado: Activo</Etiquetas>
                  <Etiquetas variant="outline">Última conexión: 12/04/2026</Etiquetas>
                </div>
              </div>
            </div>

            <div className="mt-2 md:mt-0 flex gap-2">
              <Boton variant="ghost" size="sm">
                Mensaje
              </Boton>

              <Boton variant="primary" size="sm">
                Reporte PDF
              </Boton>
            </div>
          </div>

          {errorDetalle && (
            <p className="text-xs font-bold uppercase text-red-600 mt-2">
              {errorDetalle}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <TarjetaEstadistica
              title="Avance del Curso"
              value={progresoAlumno ? `${progresoAlumno.porcentajeAvance}%` : '0%'}
              icon="fa-solid fa-chart-line"
            />
            <TarjetaEstadistica
              title="Tiempo Invertido"
              value={progresoAlumno ? 'N/A' : '0 hrs'}
              icon="fa-solid fa-clock"
            />
            <TarjetaEstadistica
              title="Promedio Notas"
              value={progresoAlumno ? 'N/A' : '0'}
              icon="fa-solid fa-award"
            />
            <TarjetaEstadistica
              title="Lecciones Vistas"
              value={progresoAlumno ? `${progresoAlumno.leccionesCompletadas} / ${progresoAlumno.totalLeccionesObligatorias}` : '0 / 0'}
              icon="fa-solid fa-book-open"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1 mb-6">
                Historial de Lecciones
              </h2>

              <div className="border-l-4 border-black ml-4 space-y-8 pb-4">
                <div className="relative pl-8">
                  <div className="absolute -left-[26px] top-0 w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-check text-sm text-black"></i>
                  </div>

                  <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <p className="text-xs font-bold text-gray-600 uppercase">{progresoAlumno ? new Date(progresoAlumno.ultimaActividad).toLocaleDateString('es-PE') : '12 ABR 2026'} - 14:20</p>
                    <p className="font-bold uppercase text-black">{progresoAlumno ? progresoAlumno.nombreCurso : 'L2: Estructuras de Control'}</p>
                    <p className="text-xs mt-1 text-gray-700 font-bold uppercase">
                      Tiempo en lección: 24 min.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-[26px] top-0 w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-check text-sm text-black"></i>
                  </div>

                  <div className="bg-white border-2 border-black p-4">
                    <p className="text-xs font-bold text-gray-600 uppercase">10 ABR 2026 - 09:15</p>
                    <p className="font-bold uppercase text-black">L1: Configuración Entorno</p>
                    <p className="text-xs mt-1 text-gray-700 font-bold uppercase">
                      Tiempo en lección: 45 min.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-[26px] top-0 w-10 h-10 bg-gray-200 border-4 border-black border-dashed rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-spinner animate-spin text-sm text-black"></i>
                  </div>

                  <div className="bg-gray-100 border-2 border-dashed border-gray-400 p-4">
                    <p className="text-xs font-bold text-gray-500 uppercase">En curso</p>
                    <p className="font-bold uppercase text-gray-700">L3: Programación de Objetos</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase bg-black text-white inline-block px-3 py-1 mb-6">
                Registro de Evaluaciones
              </h2>

              <div className="space-y-6">
                <div className="bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <div className="bg-gray-200 p-3 border-b-2 border-black flex justify-between items-center">
                    <span className="font-bold uppercase text-sm text-black">Examen: Módulo 1</span>
                    <span className="font-bold text-lg text-black">19 / 20</span>
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-bold text-gray-600 uppercase mb-2">
                      Retroalimentación del Docente
                    </p>

                    <div className="bg-gray-50 border-2 border-dotted border-gray-400 p-3 text-sm italic text-gray-800">
                      "Excelente dominio de los fundamentos de Java. Demostró claridad en el uso de
                      variables. Continúa así."
                    </div>

                    <div className="mt-4 flex justify-between items-center gap-4">
                      <span className="text-xs font-bold uppercase text-black">Intentos: 1</span>
                      <button className="text-xs font-bold uppercase border-b-2 border-black hover:bg-black hover:text-white transition-all px-1 text-black">
                        Ver Respuestas
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-black overflow-hidden opacity-80">
                  <div className="bg-gray-100 p-3 border-b-2 border-black flex justify-between items-center">
                    <span className="font-bold uppercase text-sm text-gray-700">Test: Lógica Básica</span>
                    <span className="font-bold text-lg text-gray-700">18 / 20</span>
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-bold text-gray-600 uppercase mb-2">
                      Retroalimentación del Docente
                    </p>
                    <p className="text-sm text-gray-600 italic">Sin comentarios registrados.</p>

                    <button className="mt-4 w-full border-2 border-dashed border-black py-2 text-xs font-bold uppercase hover:bg-gray-100 transition-all text-black">
                      + Agregar Comentario
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-white border-2 border-black p-6 relative">
                <div className="absolute -top-3 left-4 bg-white border-2 border-black px-2 text-sm font-bold uppercase text-gray-800">
                  Notas de Seguimiento
                </div>

                <textarea
                  className="w-full h-32 border-2 border-dashed border-gray-300 p-3 mt-2 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-black"
                  placeholder="ESCRIBA AQUÍ OBSERVACIONES PARA EL INFORME DE LABOR SOCIAL..."
                ></textarea>

                <div className="flex justify-end mt-4">
                  <Boton variant="primary" size="sm">
                    Guardar Nota
                  </Boton>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t-4 border-black pt-6 flex justify-between items-center mb-10 gap-4">
            <button className="flex items-center space-x-2 font-bold uppercase hover:underline text-black">
              <i className="fa-solid fa-chevron-left"></i>
              <span>Anterior Estudiante</span>
            </button>

            <span className="text-xs font-bold uppercase text-gray-500">Pág. 4 de 32</span>

            <button className="flex items-center space-x-2 font-bold uppercase hover:underline text-black">
              <span>Siguiente Estudiante</span>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default page