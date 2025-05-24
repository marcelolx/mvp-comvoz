import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Health from './pages/Health';
import Medications from './pages/Medications';
import LocationSecurity from './pages/LocationSecurity';
import Insights from './pages/Insights';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between z-10 flex-shrink-0">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="mr-2">🏠</span> ComVóz
          <span className="ml-2 text-xl font-light hidden sm:inline">Monitoramento Inteligente do Idoso</span>
        </h1>
        <span className="text-sm opacity-80 hidden md:inline">Seu Aliado no Cuidado Conectado</span>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-64 bg-white p-4 shadow-lg flex flex-col flex-shrink-0 z-10 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Seções</h2>
            <p className="text-sm text-gray-500 mt-1">Navegue pelas áreas de monitoramento.</p>
          </div>
          <ul className="space-y-2">
            <li>
              <Link to="/" className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 font-medium flex items-center ${location.pathname === '/' ? 'bg-blue-200 text-blue-800' : ''}`}>
                <span className="mr-2">📊</span> Visão Geral
              </Link>
            </li>
            <li>
              <Link to="/saude" className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/saude' ? 'bg-blue-200 text-blue-800' : ''}`}>
                <span className="mr-2">❤️</span> Saúde e Bem-Estar
              </Link>
            </li>
            <li>
              <Link to="/medicamentos" className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/medicamentos' ? 'bg-blue-200 text-blue-800' : ''}`}>
                <span className="mr-2">💊</span> Medicamentos e Lembretes
              </Link>
            </li>
            <li>
              <Link to="/localizacao" className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/localizacao' ? 'bg-blue-200 text-blue-800' : ''}`}>
                <span className="mr-2">📍</span> Localização e Segurança
              </Link>
            </li>
            <li>
              <Link to="/insights" className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/insights' ? 'bg-blue-200 text-blue-800' : ''}`}>
                <span className="mr-2">💡</span> Insights e Recomendações
              </Link>
            </li>
          </ul>
        </nav>

        <main id="content-area" className="flex-1 p-6 overflow-y-auto custom-scroll bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/saude" element={<Health />} />
            <Route path="/medicamentos" element={<Medications />} />
            <Route path="/localizacao" element={<LocationSecurity />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}