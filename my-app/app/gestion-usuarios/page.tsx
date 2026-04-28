'use client'

import React, { useEffect, useState } from 'react'
import Boton from '../componentes/Boton'
import CampoTexto from '../componentes/CampoTexto'
import CampoSelect from '../componentes/CampoSelect'
import CampoRadio from '../componentes/CampoRadio'
import Etiquetas from '../componentes/Etiquetas'
import Tabla, { TablaColumn, TablaRow } from '../componentes/Tabla'
import BarraLateral from '../componentes/BarraLateral'
import {
  listarUsuariosSolicitud,
  UsuarioRolResponseData,
} from '../../lib/api/login/usuarios'

const PAGE_SIZE = 10

const ETIQUETA_ROL: Record<string, string> = {
  ROL_ADMIN: 'Administrador',
  ROL_PROFESOR: 'Docente',
  ROL_ALUMNO: 'Alumno',
}

const columnas: TablaColumn[] = [
  { key: 'usuario', label: 'Usuario' },
  { key: 'rol', label: 'Rol Actual' },
  { key: 'estado', label: 'Estado' },
  { key: 'fecUltimoAcceso', label: 'Último Acceso' },
]

function getToken(): string {
  if (typeof window === 'undefined') return ''
  return sessionStorage.getItem('token') ?? localStorage.getItem('token') ?? ''
}

function formatFecha(fecha: any): string {
  if (!fecha) return 'Nunca'
  try {
    let d: Date
    // Si el backend envía la fecha como un array de números [yyyy, mm, dd, hh, mm, ss]
    if (Array.isArray(fecha) && fecha.length >= 3) {
      d = new Date(fecha[0], fecha[1] - 1, fecha[2], fecha[3] || 0, fecha[4] || 0, fecha[5] || 0)
    } else {
      d = new Date(fecha)
    }
    if (isNaN(d.getTime())) return String(fecha)
    return d.toLocaleDateString('es-PE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return String(fecha)
  }
}

function usuarioAFila(u: UsuarioRolResponseData): TablaRow {
  const rolLabel = ETIQUETA_ROL[u.rol] ?? u.rol
  const icono = u.rol === 'ROL_ALUMNO' ? 'fa-user-graduate' : u.rol === 'ROL_PROFESOR' ? 'fa-chalkboard-user' : 'fa-user-shield'

  return {
    id: u.idUsuario,
    usuario: (
      <div className={`flex items-center space-x-3 ${!u.activo ? 'opacity-60' : ''}`}>
        <div className={`w-8 h-8 border-2 ${u.activo ? 'border-black bg-gray-200' : 'border-dashed border-gray-400 bg-gray-100'} flex items-center justify-center`}>
          <i className={`fa-solid ${icono} text-xs ${!u.activo ? 'text-gray-400' : ''}`}></i>
        </div>
        <div>
          <p className={`font-bold uppercase text-base ${!u.activo ? 'text-gray-500' : ''}`}>
            {u.apellidos}, {u.nombres}
          </p>
          <p className={`text-xs font-bold ${!u.activo ? 'text-gray-400 line-through' : 'text-gray-500'}`}>
            {u.correo}
          </p>
        </div>
      </div>
    ),
    rol: <Etiquetas variant="neutral">{rolLabel}</Etiquetas>,
    estado: u.activo
      ? <Etiquetas variant="success">Activo</Etiquetas>
      : <Etiquetas variant="danger">Inactivo</Etiquetas>,
    fecUltimoAcceso: (
      <span className={`text-xs font-bold uppercase ${!u.activo ? 'text-gray-400' : 'text-gray-500'}`}>
        {formatFecha(u.fecUltimoAcceso)}
      </span>
    ),
  }
}

const page = () => {
  const [usuarios, setUsuarios] = useState<UsuarioRolResponseData[]>([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [paginaActual, setPaginaActual] = useState(0)
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [totalElementos, setTotalElementos] = useState(0)
  const [busqueda, setBusqueda] = useState('')
  const [filtroRol, setFiltroRol] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('')

  const ROL_MAP: Record<string, string> = {
    ADMINISTRADOR: 'ROL_ADMIN',
    DOCENTE: 'ROL_PROFESOR',
    ALUMNO: 'ROL_ALUMNO',
  }

  const [filtrosAplicados, setFiltrosAplicados] = useState({
    busqueda: '',
    rol: '',
    estado: '',
  })

  const cargarUsuarios = (pagina: number, filtrosParaUsar?: typeof filtrosAplicados) => {
    setCargando(true)
    setError('')

    const filtros = filtrosParaUsar ?? filtrosAplicados

    // Preparamos los parámetros para enviarlos a la API (si el backend soporta los filtros)
    const params: Record<string, any> = { page: pagina, size: PAGE_SIZE }
    if (filtros.busqueda) params.busqueda = filtros.busqueda
    if (filtros.rol) params.rol = filtros.rol
    if (filtros.estado === 'ACTIVOS') params.activo = true
    if (filtros.estado === 'INACTIVOS / BANEADOS') params.activo = false

    listarUsuariosSolicitud(params, getToken())
      .then((res) => {
        const datos = (res.datos ?? res) as typeof res.datos
        if (datos && 'content' in datos) {
          setUsuarios(datos.content)
          setTotalPaginas(datos.totalPages)
          setTotalElementos(datos.totalElements)
          setPaginaActual(datos.number)
        } else {
          setError('No se pudo cargar la lista de usuarios.')
        }
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Error al cargar usuarios.')
      })
      .finally(() => setCargando(false))
  }

  const handleBuscar = () => {
    const nuevosFiltros = {
      busqueda: busqueda.trim().toLowerCase(),
      rol: filtroRol ? ROL_MAP[filtroRol] : '',
      estado: filtroEstado,
    }
    setFiltrosAplicados(nuevosFiltros)
    cargarUsuarios(0, nuevosFiltros)
  }

  const usuariosFiltrados = usuarios.filter((u) => {
    if (
      filtrosAplicados.busqueda &&
      !`${u.nombres} ${u.apellidos} ${u.correo}`.toLowerCase().includes(filtrosAplicados.busqueda)
    )
      return false
    if (filtrosAplicados.rol && u.rol !== filtrosAplicados.rol) return false
    if (filtrosAplicados.estado === 'ACTIVOS' && !u.activo) return false
    if (filtrosAplicados.estado === 'INACTIVOS / BANEADOS' && u.activo) return false
    return true
  })
  const filas: TablaRow[] = usuariosFiltrados.map(usuarioAFila)

  const inicio = paginaActual * PAGE_SIZE + 1
  const fin = Math.min((paginaActual + 1) * PAGE_SIZE, totalElementos)

  const paginasVisibles = Array.from({ length: Math.min(totalPaginas, 5) }, (_, i) => {
    const mitad = 2
    let start = Math.max(0, paginaActual - mitad)
    const end = Math.min(totalPaginas - 1, start + 4)
    start = Math.max(0, end - 4)
    return start + i
  }).filter((p) => p < totalPaginas)

  return (
    <>
      <BarraLateral />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 relative">
        <div className="p-8 max-w-7xl mx-auto w-full pb-20">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-black pb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold uppercase">Gestión de Usuarios</h1>
              <p className="text-gray-600 font-bold uppercase mt-2 text-sm tracking-widest">
                Control de accesos y roles (RBAC)
              </p>
            </div>

            <Boton
              variant="wire"
              size="md"
              icon={<span className="text-sm">＋</span>}
            >
              Nuevo Usuario
            </Boton>
          </div>

          <div className="bg-white border-2 border-black p-4 mb-8 flex flex-col lg:flex-row gap-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <div className="flex-1">
              <CampoTexto
                field={{
                  type: 'search',
                  name: 'buscarUsuario',
                  label: 'Buscar usuario',
                  placeholder: 'BUSCAR POR NOMBRE O CORREO...',
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
                  name: 'rol',
                  label: 'Rol',
                  options: ['ADMINISTRADOR', 'DOCENTE', 'ALUMNO'],
                }}
                value={filtroRol}
                onChange={(_, v) => setFiltroRol(v)}
              />
            </div>

            <div className="w-full lg:w-48">
              <CampoSelect
                field={{
                  type: 'select',
                  name: 'estado',
                  label: 'Estado',
                  options: ['ACTIVOS', 'INACTIVOS / BANEADOS'],
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

          {error && (
            <p className="text-xs font-bold uppercase text-red-600 mb-4">{error}</p>
          )}

          <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            {cargando ? (
              <div className="p-12 text-center">
                <p className="text-xs font-bold uppercase text-gray-500">Cargando usuarios...</p>
              </div>
            ) : (
              <Tabla
                columns={columnas}
                rows={filas}
                renderAction={(row) => {
                  const u = usuariosFiltrados.find((x) => x.idUsuario === row.id)
                  if (!u) return null
                  return (
                    <div className="flex justify-center gap-2">
                      <button
                        title="Editar Rol/Perfil"
                        className="min-w-10.5 h-8 px-2 border-2 border-black font-bold text-[10px] uppercase transition-colors hover:bg-black hover:text-white"
                      >
                        Edit
                      </button>

                      <button
                        title={u.activo ? 'Suspender Cuenta' : 'Activar Cuenta'}
                        className="min-w-10.5 h-8 px-2 border-2 border-black font-bold text-[10px] uppercase transition-colors hover:bg-black hover:text-white"
                      >
                        {u.activo ? 'Off' : 'On'}
                      </button>

                      <button
                        title="Recuperar Credenciales"
                        disabled={!u.activo}
                        className={`min-w-10.5 h-8 px-2 border-2 font-bold text-[10px] uppercase transition-colors ${!u.activo ? 'border-gray-400 text-gray-400 cursor-not-allowed' : 'border-black hover:bg-black hover:text-white'}`}
                      >
                        Key
                      </button>
                    </div>
                  )
                }}
                className="max-w-none mx-0 space-y-0"
              />
            )}

            <div className="p-4 border-t-2 border-black flex items-center justify-between bg-white">
              <span className="text-xs font-bold uppercase text-gray-500">
                {totalElementos > 0
                  ? `Mostrando ${inicio} a ${fin} de ${totalElementos} usuarios`
                  : 'Sin resultados'}
              </span>

              <div className="flex space-x-2">
                <button
                  onClick={() => cargarUsuarios(paginaActual - 1)}
                  disabled={paginaActual === 0 || cargando}
                  className="border-2 border-black px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Anterior
                </button>

                {paginasVisibles.map((p) => (
                  <button
                    key={p}
                    onClick={() => p !== paginaActual && cargarUsuarios(p)}
                    disabled={cargando}
                    className={`border-2 px-3 py-1 font-bold text-sm ${p === paginaActual ? 'bg-black text-white border-black cursor-default' : 'border-black hover:bg-gray-200'}`}
                  >
                    {p + 1}
                  </button>
                ))}

                <button
                  onClick={() => cargarUsuarios(paginaActual + 1)}
                  disabled={paginaActual >= totalPaginas - 1 || cargando}
                  className="border-2 border-black px-3 py-1 font-bold uppercase text-sm hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <div className="hidden fixed inset-0 bg-black bg-opacity-80 z-50 items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white border-4 border-black p-8 max-w-sm w-full shadow-[16px_16px_0_0_rgba(255,255,255,1)] text-center relative">
          <div className="w-16 h-16 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🔑
          </div>

          <h2 className="text-xl font-bold uppercase mb-2">Recuperar Credenciales</h2>

          <p className="text-xs font-bold text-gray-500 uppercase mb-6 leading-relaxed">
            ¿Estás seguro de generar una nueva contraseña temporal para{' '}
            <span className="text-black bg-gray-200 px-1">[ APELLIDO, NOMBRE ]</span>?
          </p>

          <div className="bg-gray-50 border-2 border-dashed border-gray-400 p-3 text-left mb-6">
            <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">
              ℹ Postcondición:
            </p>
            <p className="text-[10px] font-bold uppercase text-black">
              Se enviará un correo automáticamente con la nueva clave. El token actual será invalidado por seguridad.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Boton variant="primary" size="md" fullWidth>
              Generar y Enviar
            </Boton>

            <button
              type="button"
              className="w-full bg-white border-none py-2 font-bold uppercase text-xs text-gray-500 hover:text-black hover:underline transition-all"
            >
              Cancelar Operación
            </button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default page