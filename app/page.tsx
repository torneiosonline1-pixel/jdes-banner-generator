'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between py-4 mb-8 bg-white rounded-lg shadow-sm px-6">
          <div className="text-2xl font-bold text-blue-600">JDES Academy</div>
          <div className="text-gray-600">Banner Generator</div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Criar Banner</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nome do Jogador</label>
                <input
                  type="text"
                  placeholder="Digite o nome do jogador"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Categoria</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Selecione a categoria</option>
                  <option>U7</option>
                  <option>U9</option>
                  <option>U11</option>
                  <option>U13</option>
                  <option>U15</option>
                </select>
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                Gerar Banner
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Prévia</h2>
            <div className="w-full bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-500">Sua prévia aparecerá aqui</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
