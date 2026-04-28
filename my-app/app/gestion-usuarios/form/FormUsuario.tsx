import Boton from "@/app/componentes/Boton"
import CampoRadio from "@/app/componentes/CampoRadio"
import CampoSelect from "@/app/componentes/CampoSelect"

const FormUsuario = () => {
    return (
        <div className=" fixed inset-0 bg-black bg-opacity-80 z-50 items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-[16px_16px_0_0_rgba(255,255,255,1)] relative">
                <button className="absolute top-4 right-4 text-2xl hover:text-gray-500">
                    ×
                </button>

                <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
                    Editar Usuario
                </h2>

                <div className="mb-6 p-3 bg-gray-100 border-2 border-black text-sm">
                    <p className="font-bold uppercase">[ APELLIDO, ALUMNO 1 ]</p>
                    <p className="text-xs text-gray-600 font-bold">alumno1@colegio.edu.pe</p>
                </div>

                <form className="space-y-6">
                    <CampoSelect
                        field={{
                            type: 'select',
                            name: 'rolEditar',
                            label: 'Asignar Rol (RBAC)',
                            options: ['ALUMNO', 'DOCENTE', 'ADMINISTRADOR'],
                        }}
                        value="ALUMNO"
                    />

                    <CampoRadio
                        field={{
                            type: 'radio',
                            name: 'estadoCuenta',
                            label: 'Estado de la Cuenta',
                            options: ['Activo', 'Inactivo (Suspender)'],
                            cols: 2,
                        }}
                        value="Activo"
                    />

                    <div className="pt-4 flex gap-4">
                        <Boton variant="ghost" size="md" fullWidth>
                            Cancelar
                        </Boton>

                        <Boton variant="primary" size="md" fullWidth>
                            Guardar Cambios
                        </Boton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormUsuario
