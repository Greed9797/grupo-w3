const diferenciais = [
  {
    title: 'Fundadores operadores',
    description: 'Liderança que vive a operação diariamente.',
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <path d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        <path d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
      </svg>
    )
  },
  {
    title: 'Ecossistema completo',
    description: 'Todas as soluções integradas num só lugar.',
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <rect x="2" y="2" width="9" height="9" rx="1"/>
        <rect x="13" y="2" width="9" height="5" rx="1"/>
        <rect x="13" y="11" width="9" height="11" rx="1"/>
        <rect x="2" y="15" width="9" height="7" rx="1"/>
      </svg>
    )
  },
  {
    title: 'Time interno estruturado',
    description: 'Mais de 30 profissionais dedicados.',
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: 'Tecnologia própria',
    description: 'SaaS em desenvolvimento com IA integrada.',
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    title: 'Cultura de métricas',
    description: 'Decisões baseadas em dados reais.',
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    )
  },
  {
    title: 'Estrutura física',
    description: 'Sede consolidada em Blumenau – SC.',
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#F55900" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
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
            <div key={index} className="bg-[#0D0D0D] border border-[#262626] rounded-[11.3px] p-6">
              <div
                className="w-[48px] h-[48px] rounded-[5px] flex items-center justify-center mb-4"
                style={{ background: 'rgb(36,20,12)' }}
              >
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
