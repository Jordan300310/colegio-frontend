import React from 'react'
import Boton from '../componentes/Boton'
import CampoRadio from '../componentes/CampoRadio'
import CampoTexto from '../componentes/CampoTexto'
import Etiquetas from '../componentes/Etiquetas'

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <header className="bg-white border-b-4 border-black p-4 sticky top-0 z-50 shadow-[0_4px_0_0_rgba(0,0,0,0.08)] flex justify-between items-center">
        <div className="flex items-center space-x-4 min-w-0">
          <span className="text-2xl font-bold uppercase tracking-widest text-black">[ LOGO ]</span>
          <div className="h-6 w-0.5 bg-black hidden md:block"></div>
          <h1 className="font-bold uppercase hidden md:block truncate max-w-md text-black">
            Evaluación: Módulo 2 - APIs RESTful
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 border-2 border-black px-4 py-2">
            <i className="fa-regular fa-clock text-xl mr-3 text-black animate-pulse"></i>
            <span className="text-2xl font-bold tracking-widest text-black">14:59</span>
          </div>

          <div className="hidden md:block">
            <Boton variant="primary" size="sm">
              Enviar
            </Boton>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 pt-8 pb-20">
          <div className="bg-white border-2 border-dashed border-black p-6 mb-10 relative">
            <div className="absolute -top-3 left-4 bg-white border-2 border-black px-2 text-sm font-bold uppercase text-gray-800">
              Instrucciones
            </div>

            <ul className="text-sm font-bold text-gray-700 space-y-3 uppercase leading-relaxed">
              <li>
                <i className="fa-solid fa-check mr-2 text-black"></i>
                Puntaje mínimo para aprobar: 14 / 20
              </li>
              <li>
                <i className="fa-solid fa-check mr-2 text-black"></i>
                Total de preguntas: 10
              </li>
              <li>
                <i className="fa-solid fa-triangle-exclamation mr-2 text-black"></i>
                El examen se enviará automáticamente si el tiempo llega a cero.
              </li>
            </ul>
          </div>

          <form className="space-y-8">
            <div className="bg-white border-2 border-black p-6 relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute -left-4 -top-4 bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-black">
                1
              </div>

              <div className="mb-4">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest border-b-2 border-gray-300 pb-1">
                  Opción múltiple (2 pts)
                </span>
              </div>

              <p className="font-bold text-lg mb-6 leading-relaxed text-black">
                ¿Cuál es la anotación correcta en Spring Boot para definir un controlador que
                devuelva respuestas directamente en formato JSON?
              </p>

              <CampoRadio
                field={{
                  type: 'radio',
                  name: 'q1',
                  label: 'Selecciona una respuesta',
                  options: [
                    '@Controller',
                    '@RestController',
                    '@ApiService',
                    '@ResponseBody',
                  ],
                  cols: 1,
                }}
                value="@RestController"
              />
            </div>

            <div className="bg-white border-2 border-black p-6 relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute -left-4 -top-4 bg-white text-black w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-black">
                2
              </div>

              <div className="mb-4">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest border-b-2 border-gray-300 pb-1">
                  Verdadero / Falso (2 pts)
                </span>
              </div>

              <p className="font-bold text-lg mb-6 leading-relaxed text-black">
                El patrón de inyección de dependencias en Spring obliga al desarrollador a
                instanciar manualmente las clases usando la palabra reservada{' '}
                <span className="font-mono bg-gray-200 px-1 border border-gray-300">new</span>.
              </p>

              <CampoRadio
                field={{
                  type: 'radio',
                  name: 'q2',
                  label: 'Selecciona una respuesta',
                  options: ['Verdadero', 'Falso'],
                  cols: 2,
                }}
              />
            </div>

            <div className="bg-white border-2 border-black p-6 relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute -left-4 -top-4 bg-white text-black w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-black">
                3
              </div>

              <div className="mb-4">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest border-b-2 border-gray-300 pb-1">
                  Desarrollo corto (4 pts)
                </span>
              </div>

              <p className="font-bold text-lg mb-4 leading-relaxed text-black">
                Escribe la anotación de JPA necesaria para mapear la siguiente clase a una tabla de
                base de datos llamada{' '}
                <span className="font-mono bg-gray-200 px-1 border border-gray-300">cat_usuarios</span>.
              </p>

              <div className="bg-gray-100 border-2 border-black p-4 font-mono text-sm mb-4">
                <p className="text-gray-600 mb-3">// Ingresa la anotación aquí</p>

                <div className="mb-4">
                  <CampoTexto
                    field={{
                      type: 'text',
                      name: 'respuestaJPA',
                      label: 'Respuesta',
                      placeholder: 'Ej: @Entity @Table(name="cat_usuarios")',
                    }}
                  />
                </div>

                <div className="space-y-1 text-black">
                  <p>public class Usuario {'{'}</p>
                  <p className="ml-4">private Long id;</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-12 mb-20 border-t-4 border-black pt-8 text-center">
            <h3 className="font-bold text-xl uppercase mb-2 text-black">¿Has terminado?</h3>
            <p className="text-sm font-bold text-gray-700 uppercase mb-6">
              Revisa tus respuestas antes de enviar. No podrás deshacer esta acción.
            </p>

            <Boton variant="primary" size="lg" iconPosition="right">
              Finalizar y Enviar
            </Boton>
          </div>
        </div>
      </main>

      <div className="hidden fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4">
        <div className="bg-white border-4 border-black p-8 max-w-md w-full text-center relative shadow-[16px_16px_0_0_rgba(255,255,255,0.2)]">
          <i className="fa-solid fa-circle-check text-6xl text-black mb-4"></i>
          <h2 className="text-3xl font-bold uppercase mb-2 text-black">¡Examen Enviado!</h2>

          <div className="border-y-2 border-black py-4 my-4">
            <p className="text-sm font-bold text-gray-700 uppercase mb-1">
              Calificación obtenida
            </p>
            <p className="text-5xl font-bold text-black">
              18 <span className="text-2xl text-gray-500">/ 20</span>
            </p>

            <div className="mt-3">
              <Etiquetas variant="success">Aprobado</Etiquetas>
            </div>
          </div>

          <p className="text-sm font-bold text-gray-700 mb-6 leading-relaxed">
            El módulo 3 ha sido desbloqueado exitosamente en tu ruta de aprendizaje.
          </p>

          <Boton variant="ghost" size="md" fullWidth>
            Volver al Temario
          </Boton>
        </div>
      </div>
    </div>
  )
}

export default page