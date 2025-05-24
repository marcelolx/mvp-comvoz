import React, { useState } from 'react';
import ChartComponent from '../components/ChartComponent';
import { dataMetrics } from '../data/fictionalData';

const Health = () => {
  const [currentSaudeView, setCurrentSaudeView] = useState('7d');

  const dataSlice = currentSaudeView === '7d' ? dataMetrics.slice(-7) : dataMetrics;
  const labels = dataSlice.map(d => d.date);

  const hrData = dataSlice.map(d => d.hr);
  const stepsData = dataSlice.map(d => d.steps);
  const sleepData = dataSlice.map(d => d.sleep);

  return (
    <section id="saude-content" className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">Saúde e Bem-Estar <span className="ml-2 text-xl">❤️</span></h2>
      <p className="text-gray-600 mb-6">Explore as tendências de saúde do idoso, incluindo batimentos cardíacos, níveis de atividade e qualidade do sono. Acompanhe a evolução para identificar padrões e necessidades de ajuste na rotina.</p>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setCurrentSaudeView('7d')}
          className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${currentSaudeView === '7d' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Últimos 7 Dias
        </button>
        <button
          onClick={() => setCurrentSaudeView('30d')}
          className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${currentSaudeView === '30d' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Últimos 30 Dias
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Batimentos Cardíacos (Média Diária)</h3>
          <ChartComponent type="line" labels={labels} data={hrData} labelText="Batimentos (bpm)" chartId="hrChart" />
        </div>
        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Atividade Diária (Passos)</h3>
          <ChartComponent type="bar" labels={labels} data={stepsData} labelText="Passos Diários" chartId="stepsChart" />
        </div>
        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Qualidade do Sono (Horas)</h3>
          <ChartComponent type="bar" labels={labels} data={sleepData} labelText="Horas de Sono" chartId="sleepChart" />
        </div>
      </div>
    </section>
  );
};

export default Health;