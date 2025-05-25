import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container max-w-6xl px-4 py-16 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold text-blue-800 md:text-5xl">
              ComVóz
            </h1>
            <p className="mb-6 text-xl text-gray-600 md:text-2xl">
              Monitoramento Inteligente do Idoso
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Nossa solução é um sistema composto por um aplicativo conectado a uma dispositivo inteligente
              que monitora dados como batimentos cardíacos, sono, movimentação e quedas, e envia tudo
              automaticamente para o celular da família, permitindo acompanhamento em tempo real.
            </p>
          </div>
          <div className="flex-1 max-w-xl">
            <img
              src="/homepage.png"
              alt="ComVóz Sistema de Monitoramento"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="mb-4 text-4xl">❤️</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Monitoramento Cardíaco</h3>
            <p className="text-gray-600">Acompanhamento em tempo real dos batimentos cardíacos</p>
          </div>

          <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="mb-4 text-4xl">😴</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Qualidade do Sono</h3>
            <p className="text-gray-600">Análise detalhada dos padrões de sono</p>
          </div>

          <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="mb-4 text-4xl">🚶</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Movimentação</h3>
            <p className="text-gray-600">Monitoramento de atividades e movimentação</p>
          </div>

          <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="mb-4 text-4xl">⚠️</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Detecção de Quedas</h3>
            <p className="text-gray-600">Alerta imediato em caso de quedas</p>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mt-24 mb-24">
          <div className="max-w-3xl p-8 mx-auto bg-white shadow-lg rounded-2xl">
            <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">Veja como você acompanha</h2>
            <p className="mb-6 text-center text-gray-600">
              Experimente nossa plataforma e descubra como é fácil monitorar a saúde e bem-estar do seu familiar.
              Acesse agora mesmo nossa versão demo e veja todos os recursos em funcionamento.
            </p>
            <div className="text-center">
              <Link
                to="/demo"
                className="inline-block w-full px-8 py-4 text-lg font-semibold text-white transition duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl md:w-auto"
              >
                Veja a demonstração
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mt-24 text-center">
          <h2 className="mb-12 text-3xl font-bold text-gray-800">Por que escolher o ComVóz?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="mb-4 text-3xl">🛡️</div>
              <h3 className="mb-3 text-xl font-semibold">Segurança 24/7</h3>
              <p className="text-gray-600">Monitoramento contínuo, 24 horas por dia, 7 dias por semana</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="mb-4 text-3xl">📱</div>
              <h3 className="mb-3 text-xl font-semibold">Fácil de Usar</h3>
              <p className="text-gray-600">Interface intuitiva e notificações em tempo real</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="mb-4 text-3xl">💪</div>
              <h3 className="mb-3 text-xl font-semibold">Independência</h3>
              <p className="text-gray-600">Permite que o idoso mantenha sua independência com segurança</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mt-24">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">O que nossos usuários dizem</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4 text-4xl">👨‍👩‍👧</div>
                <div>
                  <h4 className="font-semibold">Família Silva</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600">"O ComVóz nos deu tranquilidade para cuidar da nossa mãe mesmo quando não estamos presentes. As notificações são precisas e nos mantêm informados."</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4 text-4xl">👵</div>
                <div>
                  <h4 className="font-semibold">Dona Maria</h4>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
              <p className="text-gray-600">"Me sinto mais segura sabendo que meus filhos podem me monitorar. O dispositivo é discreto e não atrapalha minha rotina."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compatible Devices Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mt-24">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Dispositivos Compatíveis</h2>
          <div className="grid gap-8 mb-12 md:grid-cols-2">
            <div className="p-8 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-6">
                <div className="mr-4 text-4xl">⌚</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Smartwatch ComVóz</h3>
                  <p className="text-gray-500">Dispositivo oficial</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Monitoramento 24/7</p>
                    <p className="text-sm text-gray-600">Batimentos cardíacos, sono e movimentação</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Bateria de Longa Duração</p>
                    <p className="text-sm text-gray-600">Até 7 dias de uso contínuo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Resistente à Água</p>
                    <p className="text-sm text-gray-600">Pode ser usado no banho</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Design Ergonômico</p>
                    <p className="text-sm text-gray-600">Confortável para uso prolongado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-6">
                <div className="mr-4 text-4xl">📱</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Aplicativo ComVóz</h3>
                  <p className="text-gray-500">Para família e cuidadores</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Compatível com iOS e Android</p>
                    <p className="text-sm text-gray-600">Funciona em smartphones e tablets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Notificações em Tempo Real</p>
                    <p className="text-sm text-gray-600">Alertas instantâneos via app e SMS</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Histórico Detalhado</p>
                    <p className="text-sm text-gray-600">Acompanhamento de dados e tendências</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Múltiplos Usuários</p>
                    <p className="text-sm text-gray-600">Compartilhe o acesso com a família</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Devices */}
          <div className="mt-12">
            <h3 className="mb-8 text-2xl font-semibold text-center text-gray-800">Também compatível com</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-3xl">⌚</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Apple Watch</h4>
                    <p className="text-sm text-gray-500">Series 4 ou superior</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Monitoramento cardíaco
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Detecção de quedas
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Sincronização automática
                  </li>
                </ul>
              </div>

              <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-3xl">⌚</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Samsung Galaxy Watch</h4>
                    <p className="text-sm text-gray-500">4 ou superior</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Monitoramento cardíaco
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Detecção de quedas
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Sincronização automática
                  </li>
                </ul>
              </div>

              <div className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-3xl">⌚</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Xiaomi Mi Band</h4>
                    <p className="text-sm text-gray-500">6 ou superior</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Monitoramento cardíaco
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Detecção de quedas
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Sincronização automática
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mt-24">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Planos e Preços</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="mb-4 text-xl font-semibold">Básico</h3>
              <div className="mb-6">
                <p className="mb-2 text-3xl font-bold">R$ 39,90<span className="text-lg text-gray-500">/mês</span></p>
                <p className="text-sm text-center text-gray-500">ou R$ 430,92/ano <span className="text-green-600">(10% off)</span></p>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Monitoramento de batimentos
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Monitoramento de pressão
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Alertas por SMS
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Alertas por Push
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Alertas por Ligação
                </li>
                <li className="flex items-center font-semibold text-blue-600">
                  <span className="mr-2 text-blue-600">🎁</span>
                  10% de desconto no plano anual
                </li>
              </ul>
              <a
                href="https://wa.me/5549999464580"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-center text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Começar Agora
              </a>
            </div>

            <div className="p-6 transform scale-105 bg-white border-2 border-blue-500 shadow-md rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Premium</h3>
                <div className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
                  Mais Popular
                </div>
              </div>
              <div className="mb-6">
                <p className="mb-2 text-3xl font-bold">R$ 59,90<span className="text-lg text-gray-500">/mês</span></p>
                <p className="text-sm text-center text-gray-500">ou R$ 646,92/ano <span className="text-green-600">(10% off)</span></p>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Tudo do plano Básico
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  GPS ativo
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Histórico detalhado
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Cerca virtual
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Relatórios completos
                </li>
                <li className="flex items-center font-semibold text-blue-600">
                  <span className="mr-2 text-blue-600">🎁</span>
                  10% de desconto no plano anual
                </li>
              </ul>
              <a
                href="https://wa.me/5549999464580"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-center text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Começar Agora
              </a>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="mb-4 text-xl font-semibold">Familiar</h3>
              <div className="mb-6">
                <p className="mb-2 text-3xl font-bold">R$ 89,90<span className="text-lg text-gray-500">/mês</span></p>
                <p className="text-sm text-center text-gray-500">ou R$ 970,92/ano <span className="text-green-600">(10% off)</span></p>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Tudo do plano Premium
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Até 3 idosos no mesmo plano
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Dashboards compartilhados
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Gerenciamento centralizado
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Suporte prioritário
                </li>
                <li className="flex items-center font-semibold text-blue-600">
                  <span className="mr-2 text-blue-600">🎁</span>
                  10% de desconto no plano anual
                </li>
              </ul>
              <a
                href="https://wa.me/5549999464580"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-center text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Começar Agora
              </a>
            </div>
          </div>

          {/* Custom Plan Button */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-lg text-gray-600">
              Algo não te agradou e está em busca de mais?
            </p>
            <a
              href="https://wa.me/5549999464580"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-semibold text-white transition duration-300 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-xl"
            >
              Plano personalizado - Entrar em contato
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mt-24">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Perguntas Frequentes</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="mb-3 text-xl font-semibold">Como funciona o monitoramento?</h3>
              <p className="text-gray-600">O dispositivo é usado como um relógio ou colar e monitora continuamente os sinais vitais e movimentos, enviando os dados para o aplicativo em tempo real.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="mb-3 text-xl font-semibold">Preciso de internet?</h3>
              <p className="text-gray-600">Sim, o dispositivo precisa de conexão com internet para enviar os dados. Recomendamos uma conexão Wi-Fi estável em casa.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="mb-3 text-xl font-semibold">Como são as notificações?</h3>
              <p className="text-gray-600">As notificações são enviadas por SMS e pelo aplicativo, garantindo que você seja alertado mesmo quando não estiver usando o app.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="mb-3 text-xl font-semibold">Posso testar antes?</h3>
              <p className="text-gray-600">Sim! Oferecemos uma versão demo gratuita por 7 dias para você conhecer todas as funcionalidades.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="p-12 mt-24 text-center text-white bg-blue-600 rounded-2xl">
          <h2 className="mb-6 text-3xl font-bold">Comece a cuidar com mais tranquilidade hoje mesmo</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Experimente gratuitamente por 7 dias e descubra como o ComVóz pode transformar o cuidado com seu familiar
          </p>
          <Link
            to="/demo"
            className="inline-block px-8 py-4 text-lg font-semibold text-blue-600 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl"
          >
            Veja a demonstração
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;