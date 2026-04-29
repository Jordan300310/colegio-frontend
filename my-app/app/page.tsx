"use client";

import BarraLateral from "./componentes/BarraLateral";
import Boton from "./componentes/Boton";
import TarjetaModulo from "./componentes/TarjetaModulo";
import TarjetaEstadistica from "./componentes/TarjetaEstadistica";
import Tabla from "./componentes/Tabla";
import Etiquetas from "./componentes/Etiquetas";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BarraLateral />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 p-6 space-y-6 text-gray-800">

        {/* 🔹 HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard General</h1>
          <p className="text-gray-600">
            Bienvenido al sistema educativo - Panel principal
          </p>
        </div>

        {/* 🔹 BOTONES PRINCIPALES */}
        <div className="flex flex-wrap gap-4">

          <Link href="/gestion-usuarios">
            <Boton className="cursor-pointer transition-all hover:scale-[1.05] active:scale-[0.97]" variant="primary">
              Gestionar Usuarios
            </Boton>
          </Link>

          <Link href="/registro-usuarios">
            <Boton className="cursor-pointer transition-all hover:scale-[1.05] active:scale-[0.97]" variant="secondary">
              Registrar Usuario
            </Boton>
          </Link>

          <Link href="/carga-masiva">
            <Boton className="cursor-pointer transition-all hover:scale-[1.05] active:scale-[0.97]" variant="tertiary">
              Carga Masiva
            </Boton>
          </Link>

          <Link href="/catalogo-cursos">
            <Boton className="cursor-pointer transition-all hover:scale-[1.05] active:scale-[0.97]" variant="ghost">
              Ver Catálogo
            </Boton>
          </Link>

          <Link href="/generador-reportes">
            <Boton className="cursor-pointer transition-all hover:scale-[1.05] active:scale-[0.97]" variant="wire">
              Generar Reporte
            </Boton>
          </Link>

        </div>

        {/* 🔹 TARJETAS ESTADÍSTICAS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TarjetaEstadistica title="Usuarios Activos" value="120" icon="fa-solid fa-users" />
          <TarjetaEstadistica title="Cursos" value="8" icon="fa-solid fa-book" />
          <TarjetaEstadistica title="Progreso Promedio" value="65%" icon="fa-solid fa-chart-line" />
          <TarjetaEstadistica title="Reportes Generados" value="15" icon="fa-solid fa-file" />
        </div>

        {/* 🔹 MÓDULOS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <TarjetaModulo
            status="Activo"
            statusVariant="success"
            title="Gestión de Usuarios"
            description="Administrar roles, permisos y accesos"
            buttonLabel="Ingresar"
          />

          <TarjetaModulo
            status="Activo"
            statusVariant="warning"
            title="Carga Masiva"
            description="Subir alumnos mediante Excel/CSV"
            buttonLabel="Subir Archivo"
          />

          <TarjetaModulo
            status="Activo"
            statusVariant="danger"
            title="Catálogo de Cursos"
            description="Visualizar cursos disponibles"
            buttonLabel="Ver Cursos"
          />

          <TarjetaModulo
            status="Activo"
            statusVariant="neutral"
            title="Progreso del Alumno"
            description="Ver avance y calificaciones"
            buttonLabel="Ver Progreso"
          />

          <TarjetaModulo
            status="Activo"
            statusVariant="outline"
            title="Reportes"
            description="Generar reportes PDF/Excel"
            buttonLabel="Generar"
          />

        </div>

        {/* 🔹 TABLA */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Lista de Usuarios</h2>

          <Tabla
            columns={[
              { key: "nombre", label: "Nombre" },
              { key: "correo", label: "Correo" },
              { key: "rol", label: "Rol" },
              { key: "estado", label: "Estado" },
            ]}
            rows={[
              {
                id: 1,
                nombre: "Juan Pérez",
                correo: "juan@colegio.edu.pe",
                rol: "Alumno",
                estado: <Etiquetas variant="success">Activo</Etiquetas>,
              },
              {
                id: 2,
                nombre: "Ana Torres",
                correo: "ana@colegio.edu.pe",
                rol: "Docente",
                estado: <Etiquetas variant="warning">Pendiente</Etiquetas>,
              },
            ]}
          />
        </div>

      </main>
    </>
  );
}