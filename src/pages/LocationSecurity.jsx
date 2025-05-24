import React from 'react';
import { dataAlerts } from '../data/fictionalData';

const LocationSecurity = () => {
  return (
    <section id="localizacao-content" className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">Localização e Segurança <span className="ml-2 text-xl">📍</span></h2>
      <p className="text-gray-600 mb-6">Acompanhe a última localização registrada do idoso e visualize o histórico de alertas de segurança. A ComVóz proporciona tranquilidade sabendo onde e como o idoso está.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center justify-center text-center">
          <span className="text-6xl mb-4">🏡</span>
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Última Localização Registrada</h3>
          <p className="text-4xl font-bold text-blue-800">Sala</p>
          <p className="text-lg text-blue-600 mt-2">{new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
          <p className="text-sm text-blue-500 mt-4">Localização atualizada automaticamente via sensores ComVóz.</p>
        </div>
        <div className="bg-red-50 p-5 rounded-lg shadow-sm border border-red-200">
          <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center"><span className="mr-2 text-2xl">🚨</span> Alertas Recentes</h3>
          <p className="text-gray-600 mb-4">Lista dos últimos alertas de segurança emitidos e seu status de resolução.</p>
          <div className="space-y-3">
            {dataAlerts.map(alert => (
              <div key={alert.id} className={`p-3 rounded-lg flex items-center border ${alert.resolved ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'}`}>
                <span className={`text-xl mr-3 ${alert.resolved ? 'text-green-600' : 'text-red-600'}`}>{alert.resolved ? '✅' : '⚠️'}</span>
                <div>
                  <p className="font-medium text-gray-800">{alert.type} <span className="text-sm text-gray-600">({alert.time.split(' ')[0]})</span></p>
                  <p className={`text-sm ${alert.resolved ? 'text-green-700' : 'text-red-700'}`}>{alert.resolved ? 'Resolvido' : 'Pendente'}</p>
                  <button className="text-blue-600 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => alert(alert.details)}>Ver Detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSecurity;