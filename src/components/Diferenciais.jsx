/* Mesmo tratamento dos pilares de propósito: um desenho por ideia (antes
   "Cultura de métricas" repetia o ícone de "Previsibilidade"), margem de 2px do
   viewBox e ponta arredondada. */
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

const diferenciais = [
  {
    title: 'Fundadores operadores',
    description: 'Liderança que vive a operação diariamente.',
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.2"/>
        <path d="M3.5 20v-1.4A4.6 4.6 0 0 1 8.1 14h1.8a4.6 4.6 0 0 1 4.6 4.6V20"/>
        <path d="M16.2 8.4a3 3 0 0 1 0 5.4"/>
        <path d="M18 20v-1.4a4.6 4.6 0 0 0-1.6-3.5"/>
      </svg>
    )
  },
  {
    title: 'Ecossistema completo',
    description: 'Todas as soluções integradas num só lugar.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3"/>
        <circle cx="5" cy="5" r="2"/>
        <circle cx="19" cy="5" r="2"/>
        <circle cx="12" cy="20" r="2"/>
        <line x1="6.5" y1="6.5" x2="9.9" y2="9.9"/>
        <line x1="17.5" y1="6.5" x2="14.1" y2="9.9"/>
        <line x1="12" y1="15" x2="12" y2="18"/>
      </svg>
    )
  },
  {
    title: 'Time interno estruturado',
    description: 'Mais de 30 profissionais dedicados.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="7" r="3"/>
        <path d="M6.6 20v-1.1a5.4 5.4 0 0 1 10.8 0V20"/>
        <circle cx="4.6" cy="10.6" r="2"/>
        <path d="M2 20v-1.1A3.6 3.6 0 0 1 4.6 15.4"/>
        <circle cx="19.4" cy="10.6" r="2"/>
        <path d="M22 20v-1.1a3.6 3.6 0 0 0-2.6-3.5"/>
      </svg>
    )
  },
  {
    title: 'Tecnologia própria',
    description: 'SaaS em desenvolvimento com IA integrada.',
    icon: (
      <svg {...iconProps}>
        <polyline points="9.2 7.5 4.5 12 9.2 16.5"/>
        <polyline points="14.8 7.5 19.5 12 14.8 16.5"/>
        <line x1="13.2" y1="5" x2="10.8" y2="19"/>
      </svg>
    )
  },
  {
    title: 'Cultura de métricas',
    description: 'Decisões baseadas em dados reais.',
    icon: (
      <svg {...iconProps}>
        <line x1="3" y1="20" x2="21" y2="20"/>
        <line x1="6.5" y1="20" x2="6.5" y2="13"/>
        <line x1="12" y1="20" x2="12" y2="8.5"/>
        <line x1="17.5" y1="20" x2="17.5" y2="4.5"/>
      </svg>
    )
  },
  {
    title: 'Estrutura física',
    description: 'Sede consolidada em Blumenau – SC.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 20.5V9.2L12 4.5l8 4.7v11.3"/>
        <line x1="3" y1="20.5" x2="21" y2="20.5"/>
        <rect x="10.2" y="15" width="3.6" height="5.5" rx="0.6"/>
        <rect x="6.8" y="10.8" width="2.6" height="2.6" rx="0.5"/>
        <rect x="14.6" y="10.8" width="2.6" height="2.6" rx="0.5"/>
      </svg>
    )
  }
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-black py-12 md:py-20 border-t border-[#242424]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#F55900] text-[12px] font-medium uppercase tracking-widest mb-4">Diferencial Competitivo</p>
          <h2 className="text-[30px] md:text-[35px] font-semibold text-white mb-4 max-w-[648px] mx-auto leading-tight">
            Não somos dependentes de uma única solução. Somos um sistema integrado.
          </h2>
          <p className="text-white text-[15px] md:text-[20px] font-normal">O que nos posiciona de forma distinta:</p>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {diferenciais.map((item, index) => (
            <div key={index} className="bg-[#0D0D0D] border border-[#262626] rounded-[11.3px] p-6 odm-pillar">
              <div className="odm-pillar__icon mb-4">
                {item.icon}
              </div>
              <h3 className="text-white text-[19.3px] font-semibold mb-2 leading-tight">{item.title}</h3>
              <p className="text-[#939393] text-[13.6px] leading-[1.3]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
