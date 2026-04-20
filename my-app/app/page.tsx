import BarraLateral from "./componentes/BarraLateral";
import Boton from "./componentes/Boton";
import CampoCheckbox from "./componentes/CampoCheckbox";
import CampoFormulario from "./componentes/CampoFormulario";
import CampoRadio from "./componentes/CampoRadio";
import CampoSelect from "./componentes/CampoSelect";
import CampoTexto from "./componentes/CampoTexto";
import Etiquetas from "./componentes/Etiquetas";
import Tabla from "./componentes/Tabla";
import TarjetaEstadistica from "./componentes/TarjetaEstadistica";
import TarjetaModulo from "./componentes/TarjetaModulo";
import Tarjetas from "./componentes/Tarjetas";
import ZonaArrastre from "./componentes/ZonaArrastre";

const formFields = [
  {
    type: "text",
    name: "nombre",
    label: "Nombre",
    placeholder: "Ingrese su nombre",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "ejemplo@colegio.edu.pe",
  },
]

export default function Home() {
  return (
    <>
      <BarraLateral />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 p-4 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Boton variant="primary" size="md" className="m-0">
            Botón Primario
          </Boton>
          <Boton variant="secondary" size="md" className="m-0">
            Botón Secundario
          </Boton>
          <Boton variant="tertiary" size="md" className="m-0">
            Botón Terciario
          </Boton>
          <Boton variant="ghost" size="md" className="m-0">
            Botón Fantasma
          </Boton>
          <Boton variant="wire" size="md" className="m-0">
            Botón Alambre
          </Boton>
        </div>

        <div className="max-w-4xl">
          <CampoTexto
            field={{
              type: "text",
              name: "nombre",
              label: "Nombre",
              placeholder: "Ingrese su nombre",
            }}
          />
          <CampoCheckbox
            field={{
              type: "checkbox",
              name: "aceptoTerminos",
              label: "Acepto los términos y condiciones",
            }}
          />
          <CampoRadio
            field={{
              type: "radio",
              name: "genero",
              label: "Género",
              cols: 3,
              options: ["Masculino", "Femenino", "Otro"],
            }}
          />
          <CampoSelect
            field={{
              type: "select",
              name: "pais",
              label: "País",
              options: ["Perú", "Chile", "Argentina"],
            }}
          />
          <CampoTexto
            field={{
              type: "text",
              name: "contrasena",
              label: "Contraseña",
              placeholder: "Ingrese su contraseña",
            }}
          />
          <CampoTexto
            field={{
              type: "password",
              name: "contrasena",
              label: "Contraseña",
              placeholder: "Ingrese su contraseña",
            }}
          />
          <CampoTexto
            field={{
              type: "email",
              name: "email",
              label: "Email",
              placeholder: "ejemplo@colegio.edu.pe",
            }}
          />
          <Etiquetas variant="success">Activo</Etiquetas>
          <Etiquetas variant="warning">Pendiente</Etiquetas>
          <Etiquetas variant="danger">Inactivo</Etiquetas>
          <Etiquetas variant="neutral">Alumno</Etiquetas>
          <Etiquetas variant="outline">Docente</Etiquetas>
          <Tabla columns={[{ key: "col1", label: "Columna 1" }, { key: "col2", label: "Columna 2" }]} rows={[{ id: 1, col1: "Dato 1", col2: "Dato 2" }, { id: 2, col1: "Dato 3", col2: "Dato 4" }]} />
          <TarjetaEstadistica
            title="Avance Total"
            value="65%"
            icon="fa-solid fa-chart-line"
          />
          <TarjetaModulo
            status="Activo"
            statusVariant="danger"
            title="[ Módulo ]"
            description="Descripción breve del contenido del módulo."
            buttonLabel="Continuar"
          />
          <ZonaArrastre />
        </div>
      </main>
    </>)
}