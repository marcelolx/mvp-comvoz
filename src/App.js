import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Health from './pages/Health';
import Medications from './pages/Medications';
import LocationSecurity from './pages/LocationSecurity';
import Insights from './pages/Insights';
import LandingPage from './pages/LandingPage';

function App() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDemoRoute = location.pathname.startsWith('/demo');

  // If we're not in the demo section, show the landing page
  if (!isDemoRoute) {
    return <LandingPage />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-10 flex items-center justify-between flex-shrink-0 p-4 text-white bg-blue-600 shadow-md">
        <h1 className="flex items-center text-xl font-bold md:text-2xl">
          <Link to="/" className="flex items-center hover:text-blue-100">
            <span className="mr-2">🏠</span> ComVóz
            <span className="hidden ml-2 text-lg font-light md:text-xl sm:inline">Monitoramento Inteligente do Idoso</span>
          </Link>
        </h1>
        <div className="flex items-center">
          <span className="hidden mr-4 text-sm opacity-80 md:inline">Modo Demo</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg md:hidden hover:bg-blue-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <nav className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-white p-4 shadow-lg flex flex-col z-20 transition-transform duration-300 ease-in-out`}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Seções</h2>
            <p className="mt-1 text-sm text-gray-500">Navegue pelas áreas de monitoramento.</p>
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                to="/demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 font-medium flex items-center ${location.pathname === '/demo' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">📊</span> Visão Geral
              </Link>
            </li>
            <li>
              <Link
                to="/demo/saude"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/demo/saude' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">❤️</span> Saúde e Bem-Estar
              </Link>
            </li>
            <li>
              <Link
                to="/demo/medicamentos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/demo/medicamentos' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">💊</span> Medicamentos e Lembretes
              </Link>
            </li>
            <li>
              <Link
                to="/demo/localizacao"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/demo/localizacao' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">📍</span> Localização e Segurança
              </Link>
            </li>
            <li>
              <Link
                to="/demo/insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/demo/insights' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">💡</span> Insights e Recomendações
              </Link>
            </li>
          </ul>
        </nav>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <main id="content-area" className="flex-1 p-4 overflow-y-auto md:p-6 custom-scroll bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/demo" element={<Dashboard />} />
            <Route path="/demo/saude" element={<Health />} />
            <Route path="/demo/medicamentos" element={<Medications />} />
            <Route path="/demo/localizacao" element={<LocationSecurity />} />
            <Route path="/demo/insights" element={<Insights />} />
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