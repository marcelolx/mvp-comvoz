import React from 'react';
import ChartComponent from '../components/ChartComponent';
import { dataMedication } from '../data/fictionalData';

const Medications = () => {
  const adherenceLabels = dataMedication.slice(-7).map(d => d.date);
  const adherenceData = dataMedication.slice(-7).map(d => d.adherence);

  const chartOptions = {
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    }
  };

  return (
    <section id="medicamentos-content" className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">Medicamentos e Lembretes <span className="ml-2 text-xl">💊</span></h2>
      <p className="text-gray-600 mb-6">Monitore a adesão do idoso aos medicamentos e acesse o histórico de lembretes e tomadas. A comunicação por voz auxilia na consistência da rotina de medicação.</p>

      <div className="bg-white p-5 rounded-lg shadow border border-gray-200 mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Adesão a Medicamentos (Últimos 7 Dias)</h3>
        <ChartComponent
          type="bar"
          labels={adherenceLabels}
          data={adherenceData}
          labelText="Adesão (%)"
          chartId="adherenceChart"
          options={chartOptions}
        />
      </div>

      <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Histórico de Lembretes e Eventos</h3>
        <p className="text-gray-600 mb-4">Detalhes das interações e eventuais doses perdidas.</p>
        <div className="space-y-4" id="medication-log">
          {dataMedication.slice(-10).reverse().map((item, index) => (
            <div key={index} className="border-b pb-3 mb-3 last:border-b-0 last:pb-0">
              <p className="font-medium text-gray-800">{item.date}: <span className="text-blue-600">{item.adherence}% de Adesão</span></p>
              {item.missed.length > 0 ?
                <p className="text-red-600 text-sm mt-1">💊 Doses Perdidas: {item.missed.join(', ')}</p> :
                <p className="text-green-600 text-sm mt-1">✔️ Todas as doses tomadas.</p>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Medications;