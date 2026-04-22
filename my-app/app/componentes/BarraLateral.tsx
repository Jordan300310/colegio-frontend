import React from 'react'

const BarraLateral = () => {
    return (
        <>
            <aside className="w-full max-w-sm bg-white border-2 border-black flex flex-col">
                <div className="p-6 border-b-2 border-black flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold">L</div>
                    <div>
                        <p className="text-sm font-bold uppercase">[ LOGO ]</p>
                        <p className="text-xs text-gray-500 uppercase">Subtítulo</p>
                    </div>
                </div>

                <div className="p-6 flex items-center gap-4 border-b-2 border-dashed border-gray-300">
                    <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase">[ Nombre ]</p>
                        <p className="text-xs text-gray-600 uppercase">Perfil</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-3">
                    <a href="#"
                        className="flex items-center gap-3 bg-gray-200 border-2 border-black text-black px-4 py-3 font-bold uppercase">Principal</a>
                    <a href="#"
                        className="flex items-center gap-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">Opción
                        1</a>
                    <a href="#"
                        className="flex items-center gap-3 text-gray-600 hover:text-black px-4 py-2 border-2 border-transparent hover:border-dashed hover:border-gray-400">Opción
                        2</a>
                </nav>

                <div className="p-4 border-t-2 border-black">
                    <a href="#"
                        className="flex items-center gap-3 text-gray-600 hover:text-black px-4 py-2 uppercase font-bold">
                        <i className="fa-solid fa-sign-out-alt"></i>
                        Cerrar Sesión
                    </a>
                </div>
            </aside>
        </>

    )
}

export default BarraLateral