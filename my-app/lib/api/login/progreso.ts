import { buildHeaders, LoginResponse } from './auth'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const PROGRESO_PATH = '/progreso'

export interface AlumnoProgresoData {
  idAlumno: number
  nombres: string
  apellidos: string
  leccionesCompletadas: number
  totalLeccionesObligatorias: number
  porcentaje: number
  ultimaActividad: string
}

export interface PageableInfo {
  offset: number
  sort: SortDescriptor[]
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

export interface SortDescriptor {
  direction: string
  nullHandling: string
  ascending: boolean
  property: string
  ignoreCase: boolean
}

export interface PaginatedAlumnosData {
  totalPages: number
  totalElements: number
  size: number
  content: AlumnoProgresoData[]
  number: number
  sort: SortDescriptor[]
  numberOfElements: number
  first: boolean
  last: boolean
  pageable: PageableInfo
  empty: boolean
}

export interface ProgresoSeccionResponseData {
  idSeccion: number
  nombreSeccion: string
  idCurso: number
  nombreCurso: string
  totalLeccionesObligatorias: number
  alumnos: PaginatedAlumnosData
}

export interface LeccionDetalleProgreso {
  idLeccion: number
  nombre: string
  obligatoria: boolean
  completada: boolean
  fecCompletado?: string
}

export interface ModuloDetalleProgreso {
  idModulo: number
  nombre: string
  lecciones: LeccionDetalleProgreso[]
}

export interface ProgresoAlumnoCursoResponseData {
  alumno: {
    idAlumno: number
    nombres: string
    apellidos: string
    correo: string
  }
  idCurso: number
  nombreCurso: string
  totalLeccionesObligatorias: number
  leccionesCompletadas: number
  porcentajeAvance: number
  ultimaActividad: string
  modulos: ModuloDetalleProgreso[]
  evaluaciones: unknown[]
}

export interface ProgresoSeccionQuery {
  page?: number
  size?: number
  sort?: string[]
}

export async function obtenerProgresoSeccionSolicitud(
  idSeccion: number,
  query: ProgresoSeccionQuery = {},
  token?: string,
): Promise<LoginResponse<ProgresoSeccionResponseData>> {
  const headers: Record<string, string> = buildHeaders(token)
  const params = new URLSearchParams()

  if (query.page !== undefined) params.append('page', String(query.page))
  if (query.size !== undefined) params.append('size', String(query.size))
  query.sort?.forEach((sortValue) => params.append('sort', sortValue))

  const url = `${BASE_URL}${PROGRESO_PATH}/seccion/${idSeccion}${params.toString() ? `?${params.toString()}` : ''}`

  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Error al obtener progreso de sección: ${response.status} ${response.statusText} - ${errorText}`,
    )
  }

  return response.json()
}

export async function obtenerProgresoAlumnoCursoSolicitud(
  idAlumno: number,
  idCurso: number,
  token?: string,
): Promise<LoginResponse<ProgresoAlumnoCursoResponseData>> {
  const response = await fetch(
    `${BASE_URL}${PROGRESO_PATH}/alumno/${idAlumno}/curso/${idCurso}`,
    {
      method: 'GET',
      headers: buildHeaders(token),
    },
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Error al obtener progreso de alumno en curso: ${response.status} ${response.statusText} - ${errorText}`,
    )
  }

  return response.json()
}
