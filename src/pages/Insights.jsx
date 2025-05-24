import React from 'react';
import Accordion from '../components/Accordion';
import { dataInsights } from '../data/fictionalData';

const Insights = () => {
  return (
    <section id="insights-content" className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-3xl font-bold text-gray-700 mb-4 flex items-center">Insights e Recomendações <span className="ml-2 text-xl">💡</span></h2>
      <p className="text-gray-600 mb-6">Obtenha análises aprofundadas sobre os dados de monitoramento e receba recomendações personalizadas para otimizar o cuidado e o bem-estar do idoso.</p>

      <div className="space-y-6">
        <div className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center"><span className="mr-2">📈</span> Padrões Observados</h3>
          <p className="text-gray-600 mb-4">Identificamos tendências e comportamentos importantes na rotina do idoso.</p>
          {dataInsights.patterns.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              bgColor="bg-blue-100"
              borderColor="border-blue-200"
              textColor="text-blue-800"
            >
              {item.text}
            </Accordion>
          ))}
        </div>

        <div className="bg-green-50 p-5 rounded-lg shadow-sm border border-green-200">
          <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center"><span className="mr-2">🗣️</span> Feedback de Cuidadores</h3>
          <p className="text-gray-600 mb-4">O que outros cuidadores e familiares estão dizendo sobre os benefícios do ComVóz.</p>
          {dataInsights.caregiverFeedback.map((item, index) => (
            <Accordion
              key={index}
              title={item.name}
              bgColor="bg-green-100"
              borderColor="border-green-200"
              textColor="text-green-800"
            >
              "{item.text}"
            </Accordion>
          ))}
        </div>

        <div className="bg-purple-50 p-5 rounded-lg shadow-sm border border-purple-200">
          <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center"><span className="mr-2">⚙️</span> Dicas ComVóz</h3>
          <p className="text-gray-600 mb-4">Sugestões e boas práticas para otimizar o uso do aplicativo e o cuidado diário.</p>
          {dataInsights.comvozTips.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              bgColor="bg-purple-100"
              borderColor="border-purple-200"
              textColor="text-purple-800"
            >
              {item.text}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;