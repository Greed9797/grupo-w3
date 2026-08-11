const pillars = [
  {
    title: 'Gerar Previsibilidade',
    description: 'Dados e métricas que eliminam achismos e trazem clareza para o crescimento.',
    icon: (
      <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    )
  },
  {
    title: 'Gerar Margem',
    description: 'Otimização financeira para que cada venda contribua com lucro real.',
    icon: (
      <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    )
  },
  {
    title: 'Gerar Liberdade Estratégica',
    description: 'Autonomia para tomar decisões com base em estrutura sólida.',
    icon: (
      <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    )
  },
  {
    title: 'Estruturar Negócios Reais',
    description: 'Processos, times e sistemas que sustentam a operação a longo prazo.',
    icon: (
      <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <rect x="2" y="7" width="22" height="15" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  {
    title: 'Profissionalizar Operações',
    description: 'Elevar o nível de gestão e execução do seu e-commerce.',
    icon: (
      <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
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
    <div className="bg-[#0D0D0D] border border-[#262626] rounded-[11px] p-6 h-full">
      <div
        className="w-[48px] h-[48px] rounded-[5px] flex items-center justify-center mb-4"
        style={{ background: 'rgb(36,20,12)' }}
      >
        {pillar.icon}
      </div>
      <h3 className="text-white text-[19px] font-semibold mb-3 leading-tight">{pillar.title}</h3>
      <p className="text-[#939393] text-[13.4px] leading-[1.3]">{pillar.description}</p>
    </div>
  )
}
