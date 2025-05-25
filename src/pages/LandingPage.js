import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              ComVóz
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Monitoramento Inteligente do Idoso
            </p>
            <p className="text-lg text-gray-600 mb-8">
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
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Monitoramento Cardíaco</h3>
            <p className="text-gray-600">Acompanhamento em tempo real dos batimentos cardíacos</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">😴</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualidade do Sono</h3>
            <p className="text-gray-600">Análise detalhada dos padrões de sono</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🚶</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Movimentação</h3>
            <p className="text-gray-600">Monitoramento de atividades e movimentação</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Detecção de Quedas</h3>
            <p className="text-gray-600">Alerta imediato em caso de quedas</p>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mt-24 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Veja como você acompanha</h2>
            <p className="text-gray-600 mb-6 text-center">
              Experimente nossa plataforma e descubra como é fácil monitorar a saúde e bem-estar do seu familiar.
              Acesse agora mesmo nossa versão demo e veja todos os recursos em funcionamento.
            </p>
            <div className="text-center">
              <Link
                to="/demo"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
              >
                Veja a demonstração
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Por que escolher o ComVóz?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Segurança 24/7</h3>
              <p className="text-gray-600">Monitoramento contínuo, 24 horas por dia, 7 dias por semana</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Fácil de Usar</h3>
              <p className="text-gray-600">Interface intuitiva e notificações em tempo real</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-3">Independência</h3>
              <p className="text-gray-600">Permite que o idoso mantenha sua independência com segurança</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">O que nossos usuários dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👨‍👩‍👧</div>
                <div>
                  <h4 className="font-semibold">Família Silva</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600">"O ComVóz nos deu tranquilidade para cuidar da nossa mãe mesmo quando não estamos presentes. As notificações são precisas e nos mantêm informados."</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👵</div>
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
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dispositivos Compatíveis</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">⌚</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Smartwatch ComVóz</h3>
                  <p className="text-gray-500">Dispositivo oficial</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Monitoramento 24/7</p>
                    <p className="text-sm text-gray-600">Batimentos cardíacos, sono e movimentação</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Bateria de Longa Duração</p>
                    <p className="text-sm text-gray-600">Até 7 dias de uso contínuo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Resistente à Água</p>
                    <p className="text-sm text-gray-600">Pode ser usado no banho</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Design Ergonômico</p>
                    <p className="text-sm text-gray-600">Confortável para uso prolongado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">📱</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Aplicativo ComVóz</h3>
                  <p className="text-gray-500">Para família e cuidadores</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Compatível com iOS e Android</p>
                    <p className="text-sm text-gray-600">Funciona em smartphones e tablets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Notificações em Tempo Real</p>
                    <p className="text-sm text-gray-600">Alertas instantâneos via app e SMS</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">Histórico Detalhado</p>
                    <p className="text-sm text-gray-600">Acompanhamento de dados e tendências</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
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
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Também compatível com</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">⌚</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Apple Watch</h4>
                    <p className="text-sm text-gray-500">Series 4 ou superior</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Monitoramento cardíaco
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Detecção de quedas
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Sincronização automática
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">⌚</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Samsung Galaxy Watch</h4>
                    <p className="text-sm text-gray-500">4 ou superior</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Monitoramento cardíaco
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Detecção de quedas
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Sincronização automática
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">⌚</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Xiaomi Mi Band</h4>
                    <p className="text-sm text-gray-500">6 ou superior</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Monitoramento cardíaco
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Detecção de quedas
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Sincronização automática
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Planos e Preços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Básico</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Mensal</button>
                  <button className="text-gray-500 hover:text-blue-600">Anual</button>
                </div>
                <p className="text-3xl font-bold mb-2">R$ 99<span className="text-lg text-gray-500">/mês</span></p>
                <p className="text-sm text-gray-500 text-center">ou R$ 1.069/ano <span className="text-green-600">(10% off)</span></p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Monitoramento cardíaco básico
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Detecção de quedas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Botão de Socorro
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  App para família
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Notificações básicas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Suporte por email
                </li>
                <li className="flex items-center text-blue-600 font-semibold">
                  <span className="text-blue-600 mr-2">🎁</span>
                  10% de desconto no plano anual
                </li>
              </ul>
              <Link
                to="/demo"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Começar Agora
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-500 transform scale-105">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Mais Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Intermediário</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Mensal</button>
                  <button className="text-gray-500 hover:text-blue-600">Anual</button>
                </div>
                <p className="text-3xl font-bold mb-2">R$ 299<span className="text-lg text-gray-500">/mês</span></p>
                <p className="text-sm text-gray-500 text-center">ou R$ 3.049/ano <span className="text-green-600">(15% off)</span></p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Tudo do plano Básico
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Análise de sono detalhada
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Relatórios semanais
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Suporte prioritário
                </li>
                <li className="flex items-center text-blue-600 font-semibold">
                  <span className="text-blue-600 mr-2">🎁</span>
                  15% de desconto + Smartwatch ComVóz grátis no plano anual
                </li>
              </ul>
              <Link
                to="/demo"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Começar Agora
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Mensal</button>
                  <button className="text-gray-500 hover:text-blue-600">Anual</button>
                </div>
                <p className="text-3xl font-bold mb-2">R$ 599<span className="text-lg text-gray-500">/mês</span></p>
                <p className="text-sm text-gray-500 text-center">ou R$ 5.750/ano <span className="text-green-600">(20% off)</span></p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Tudo do plano Intermediário
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Atendimento de urgência 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Suporte médico online
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Relatórios personalizados
                </li>
                <li className="flex items-center text-blue-600 font-semibold">
                  <span className="text-blue-600 mr-2">🎁</span>
                  20% de desconto + Smartwatch ComVóz grátis no plano anual
                </li>
              </ul>
              <Link
                to="/demo"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Como funciona o monitoramento?</h3>
              <p className="text-gray-600">O dispositivo é usado como um relógio ou colar e monitora continuamente os sinais vitais e movimentos, enviando os dados para o aplicativo em tempo real.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Preciso de internet?</h3>
              <p className="text-gray-600">Sim, o dispositivo precisa de conexão com internet para enviar os dados. Recomendamos uma conexão Wi-Fi estável em casa.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Como são as notificações?</h3>
              <p className="text-gray-600">As notificações são enviadas por SMS e pelo aplicativo, garantindo que você seja alertado mesmo quando não estiver usando o app.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Posso testar antes?</h3>
              <p className="text-gray-600">Sim! Oferecemos uma versão demo gratuita por 7 dias para você conhecer todas as funcionalidades.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mt-24 text-center bg-blue-600 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Comece a cuidar com mais tranquilidade hoje mesmo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experimente gratuitamente por 7 dias e descubra como o ComVóz pode transformar o cuidado com seu familiar
          </p>
          <Link
            to="/demo"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Veja a demonstração
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 