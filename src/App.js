import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Health from './pages/Health';
import Medications from './pages/Medications';
import LocationSecurity from './pages/LocationSecurity';
import Insights from './pages/Insights';
import {
  ActivityData,
  CapacitorHealthkit,
  OtherData,
  QueryOutput,
  SampleNames,
  SleepData,
} from '@perfood/capacitor-healthkit';

const READ_PERMISSIONS = ['calories', 'stairs', 'activity', 'steps', 'distance', 'duration', 'weight', 'stepCount'];

function App() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const requestAuthorization = async () => {
    try {
      await CapacitorHealthkit.requestAuthorization({
        all: [''],
        read: READ_PERMISSIONS,
        write: [''],
      });
    } catch (error) {
      console.error('[HealthKitService] Error getting Authorization:', error);
    }
  };

  const getActivityData = async (startDate, endDate = new Date()) => {
    try {
      const queryOptions = {
        sampleName: SampleNames.STEP_COUNT,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        limit: 1,
      };

      return await CapacitorHealthkit.queryHKitSampleType(queryOptions);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  useEffect(() => {
    requestAuthorization().then(() => {
      getActivityData({
        startDate: new Date('2025-05-23'),
        endDate: new Date('2025-05-24'),
      }).then((data) => {
        window.alert("Total de passos: " + data.resultData[0].value);
      });
    });
  }, []);


  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between z-10 flex-shrink-0">
        <h1 className="text-xl md:text-2xl font-bold flex items-center">
          <span className="mr-2">🏠</span> ComVóz
          <span className="ml-2 text-lg md:text-xl font-light hidden sm:inline">Monitoramento Inteligente do Idoso</span>
        </h1>
        <div className="flex items-center">
          <span className="text-sm opacity-80 hidden md:inline mr-4">Seu Aliado no Cuidado Conectado</span>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-500"
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
            <p className="text-sm text-gray-500 mt-1">Navegue pelas áreas de monitoramento.</p>
          </div>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 font-medium flex items-center ${location.pathname === '/' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">📊</span> Visão Geral
              </Link>
            </li>
            <li>
              <Link 
                to="/saude" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/saude' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">❤️</span> Saúde e Bem-Estar
              </Link>
            </li>
            <li>
              <Link 
                to="/medicamentos" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/medicamentos' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">💊</span> Medicamentos e Lembretes
              </Link>
            </li>
            <li>
              <Link 
                to="/localizacao" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/localizacao' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">📍</span> Localização e Segurança
              </Link>
            </li>
            <li>
              <Link 
                to="/insights" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200 flex items-center ${location.pathname === '/insights' ? 'bg-blue-200 text-blue-800' : ''}`}
              >
                <span className="mr-2">💡</span> Insights e Recomendações
              </Link>
            </li>
          </ul>
        </nav>

        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <main id="content-area" className="flex-1 p-4 md:p-6 overflow-y-auto custom-scroll bg-gray-50">
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