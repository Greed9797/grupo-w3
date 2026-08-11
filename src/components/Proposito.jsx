/* Ícones refeitos: os antigos vazavam do viewBox (maleta com width 22 em 24),
   deixavam traço órfão (capelo) ou repetiam o mesmo desenho em seções
   diferentes. Todos com 2px de margem do viewBox e ponta arredondada. */
const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#F55900',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const pillars = [
  {
    title: 'Gerar Previsibilidade',
    description: 'Dados e métricas que eliminam achismos e trazem clareza para o crescimento.',
    icon: (
      <svg {...iconProps}>
        <polyline points="3 16.5 9 10.5 13 14.5 21 6.5"/>
        <polyline points="15 6.5 21 6.5 21 12.5"/>
      </svg>
    )
  },
  {
    title: 'Gerar Margem',
    description: 'Otimização financeira para que cada venda contribua com lucro real.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9"/>
        <line x1="8.5" y1="15.5" x2="15.5" y2="8.5"/>
        <circle cx="9" cy="9" r="1.4"/>
        <circle cx="15" cy="15" r="1.4"/>
      </svg>
    )
  },
  {
    title: 'Gerar Liberdade Estratégica',
    description: 'Autonomia para tomar decisões com base em estrutura sólida.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9"/>
        <polygon points="15.6 8.4 13.4 13.4 8.4 15.6 10.6 10.6"/>
      </svg>
    )
  },
  {
    title: 'Estruturar Negócios Reais',
    description: 'Processos, times e sistemas que sustentam a operação a longo prazo.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="8" width="18" height="12" rx="2"/>
        <path d="M8.5 8V6.2A2.2 2.2 0 0 1 10.7 4h2.6a2.2 2.2 0 0 1 2.2 2.2V8"/>
        <line x1="3" y1="13" x2="21" y2="13"/>
      </svg>
    )
  },
  {
    title: 'Profissionalizar Operações',
    description: 'Elevar o nível de gestão e execução do seu e-commerce.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 4 3 8.8l9 4.8 9-4.8-9-4.8Z"/>
        <path d="M6.5 11.2V16c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4.8"/>
      </svg>
    )
  },
]

export default function Proposito() {
  return (
    <section className="bg-black py-12 md:py-20 border-t border-[#242424]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#F55900] text-[12px] font-medium uppercase tracking-widest mb-4">nosso propósito</p>
          <h2 className="text-[30px] md:text-[35px] font-semibold text-white mb-4">
            Transformar vidas através do e-commerce.
          </h2>
          <p className="text-white text-[15px] md:text-[20px] font-normal">Não apenas aumentar faturamento. Transformar significa:</p>
        </div>

        {/* Cards — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {pillars.slice(0, 3).map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-4">
          {pillars.slice(3, 5).map((pillar, index) => (
            <div key={index} className="lg:w-[calc((100%-2*16px)/3)]">
              <PillarCard pillar={pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({ pillar }) {
  return (
    <div className="bg-[#0D0D0D] border border-[#262626] rounded-[11px] p-6 h-full odm-pillar">
      {/* Sem a caixa 48×48 marrom (rgb(36,20,12)) — cor fora da paleta e
          assinatura do feature-grid genérico. O ícone fica solto e maior. */}
      <div className="odm-pillar__icon mb-4">
        {pillar.icon}
      </div>
      <h3 className="text-white text-[19px] font-semibold mb-3 leading-tight">{pillar.title}</h3>
      <p className="text-[#939393] text-[13.4px] leading-[1.3]">{pillar.description}</p>
    </div>
  )
}
