import React from 'react';
import MetricCard from '../components/MetricCard';
import { dataMetrics, dataMedication, dataAlerts } from '../data/fictionalData';

const Dashboard = () => {
  const avgHR = (dataMetrics.slice(-7).reduce((acc, curr) => acc + curr.hr, 0) / 7).toFixed(0);
  const avgSteps = (dataMetrics.slice(-7).reduce((acc, curr) => acc + curr.steps, 0) / 7).toFixed(0);
  const avgAdherence = (dataMedication.slice(-7).reduce((acc, curr) => acc + curr.adherence, 0) / 7).toFixed(0);
  const pendingAlerts = dataAlerts.filter(a => !a.resolved).length;

  return (
    <section id="dashboard-content" className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">Visão Geral do Monitoramento <span className="ml-2 text-xl">📊</span></h2>
      <p className="text-gray-600 mb-6">Esta seção oferece um panorama rápido das principais métricas de saúde, atividade e adesão a medicamentos do idoso nos últimos dias. É um resumo para uma compreensão imediata do bem-estar geral.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          icon="❤️"
          title="Batimentos Cardíacos (Média 7 Dias)"
          value={avgHR}
          unit="bpm"
          description="Média da última semana, indicando estabilidade."
          bgColor="bg-blue-50"
          borderColor="border-blue-200"
          textColor="text-blue-700"
        />
        <MetricCard
          icon="🚶"
          title="Passos Diários (Média 7 Dias)"
          value={avgSteps}
          unit="passos"
          description="Nível de atividade consistente, importante para a mobilidade."
          bgColor="bg-green-50"
          borderColor="border-green-200"
          textColor="text-green-700"
        />
        <MetricCard
          icon="✔️"
          title="Adesão a Medicamentos (Média 7 Dias)"
          value={avgAdherence}
          unit="%"
          description="Taxa de adesão elevada, crucial para o tratamento."
          bgColor="bg-purple-50"
          borderColor="border-purple-200"
          textColor="text-purple-700"
        />
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">Status Recente <span className="ml-2 text-xl">✨</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p className="flex items-center"><span className="text-green-500 text-xl mr-2">●</span> <strong>Último Sono Registrado:</strong> {dataMetrics[dataMetrics.length - 1].sleep} horas ({dataMetrics[dataMetrics.length - 1].date})</p>
          <p className="flex items-center"><span className="text-yellow-500 text-xl mr-2">●</span> <strong>Última Localização Reportada:</strong> Próximo à Sala ({new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })})</p>
          <p className="flex items-center"><span className="text-red-500 text-xl mr-2">●</span> <strong>Alertas Pendentes:</strong> {pendingAlerts > 0 ? 'Sim' : 'Não'} ({pendingAlerts})</p>
          <p className="flex items-center"><span className="text-blue-500 text-xl mr-2">●</span> <strong>Interação por Voz:</strong> Alta frequência nas últimas 24h</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;