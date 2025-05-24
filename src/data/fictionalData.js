const days = Array.from({length: 30}, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (29 - i));
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
});

export const dataMetrics = days.map((day, i) => ({
  date: day,
  hr: Math.floor(60 + Math.random() * 20),
  steps: Math.floor(1500 + Math.random() * 3000),
  sleep: parseFloat((6 + Math.random() * 3).toFixed(1))
}));

export const dataMedication = days.map((day, i) => ({
  date: day,
  adherence: Math.min(100, Math.floor(70 + Math.random() * 30)),
  missed: Math.random() < 0.2 ? ['Manhã'] : (Math.random() < 0.1 ? ['Noite'] : [])
}));

export const dataAlerts = [
  { id: 1, type: 'Queda Detectada', time: '2025-05-22 10:30', resolved: true, details: 'Sensor de movimento detectou impacto. Idoso respondeu ao chamado de voz e informou estar bem.' },
  { id: 2, type: 'Fora da Área Segura', time: '2025-05-21 14:15', resolved: false, details: 'Idoso saiu da zona de segurança definida. Notificação enviada ao cuidador primário.' },
  { id: 3, type: 'Atividade Incomum', time: '2025-05-20 03:00', resolved: true, details: 'Padrão de sono interrompido. Monitoramento de voz ativado, idoso conversou com Alexa e voltou a dormir.' },
  { id: 4, type: 'Bateria Baixa (Dispositivo)', time: '2025-05-19 08:45', resolved: true, details: 'Bateria do dispositivo de monitoramento em nível crítico. Carga recomendada.' },
];

export const dataInsights = {
  patterns: [
      { title: 'Melhora da Qualidade do Sono', text: 'Observou-se um aumento gradual na duração do sono médio, passando de 6.5 para 7.8 horas nas últimas 4 semanas. Isso pode estar relacionado à nova rotina de exercícios leves implementada.' },
      { title: 'Picos de Atividade Noturna Reduzidos', text: 'Os registros mostram uma diminuição significativa de movimentos e interrupções durante a madrugada, indicando um sono mais contínuo e reparador. A comunicação por voz tem sido eficaz em tranquilizar o idoso em caso de despertares noturnos.' },
      { title: 'Adesão Consistente a Medicamentos', text: 'A adesão aos medicamentos tem se mantido acima de 90% nos últimos 30 dias, especialmente para as doses da manhã e da noite, demonstrando a eficácia dos lembretes de voz da ComVóz.' }
  ],
  caregiverFeedback: [
      { name: 'Dona Alice (Filha)', text: 'A ComVóz trouxe uma paz de espírito enorme. Saber que minha mãe está sendo monitorada e que posso receber alertas me deixa muito mais tranquila, e ela adora conversar com a Alexa para os lembretes!' },
      { name: 'Sr. Roberto (Neto)', text: 'É incrível como a plataforma é fácil de usar. Consigo ver rapidamente como meu avô está se sentindo e se ele tomou os remédios. A comunicação por voz é um diferencial!' }
  ],
  comvozTips: [
      { title: 'Personalize os Lembretes de Voz', text: 'Ajuste o tom e o conteúdo dos lembretes para que se pareçam mais com uma conversa amigável, aumentando a probabilidade de adesão.' },
      { title: 'Crie Rotinas de Atividade Leve', text: 'Estabeleça metas diárias de passos ou pequenos exercícios e use os alertas de voz para incentivar o idoso a se movimentar, sempre com segurança.' },
      { title: 'Defina Zonas Seguras de Localização', text: 'Utilize o recurso de geocercas para definir áreas de segurança. Receba alertas imediatos se o idoso sair dessas zonas, garantindo uma resposta rápida em caso de desorientação.' }
  ]
};