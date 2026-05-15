import BarraLateral from "./componentes/BarraLateral";

export default function Home() {
  return (
    <>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-50 p-4 space-y-6">
        <BarraLateral />
        <h1 className="text-2xl font-bold text-gray-800">Componentes UI para Colegios</h1>
      </main>
    </>
  );
}