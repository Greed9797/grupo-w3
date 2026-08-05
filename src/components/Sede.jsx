const departments = [
  {
    label: 'Comercial',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    label: 'Entrega',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    )
  },
  {
    label: 'Marketing',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    )
  },
  {
    label: 'Operação estratégica',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    )
  },
  {
    label: 'Liderança',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
]

const photos = ['/images/sede3.webp', '/images/sede1.webp', '/images/sede2.webp', '/images/sede4.webp']

export default function Sede() {
  return (
    <section className="bg-black py-12 md:py-20 border-t border-[#242424]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Text */}
        <div className="text-center max-w-[699px] mx-auto mb-10 md:mb-12">
          <p className="text-[#F55900] text-[12px] font-medium uppercase tracking-widest mb-4">nossa estrutura</p>
          <h2 className="text-[30px] md:text-[35px] font-semibold text-white mb-5 md:mb-6">Nossa sede em Blumenau - SC</h2>
          <p className="text-[#939393] text-[15px] md:text-[20px] leading-[1.3]">
            Com mais de 30 colaboradores, nossa operação está baseada em Blumenau, um dos polos empresariais mais fortes do Sul do Brasil.
          </p>
          <p className="text-[#939393] text-[15px] md:text-[20px] leading-[1.3] mt-4">
            Acreditamos em estrutura física. Acreditamos em time presente. Acreditamos em cultura construída no ambiente. A sede da W3 concentra:
          </p>
        </div>

        {/* Department pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-5 md:mb-6">
          {departments.map((dept, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#0D0D0D] border border-[#262626] rounded-full px-4 md:px-5 py-2 md:py-3">
              {dept.icon}
              <span className="text-white text-[14px] md:text-[15px]">{dept.label}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-[#939393] text-[15px] md:text-[20px] text-center mb-10 md:mb-12">
          Aqui, estratégia não é remota da realidade. Ela nasce da operação diária.
        </p>

        {/* Photo grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div key={i} className="rounded-[9.7px] overflow-hidden h-[180px] md:h-[388px]">
              <img
                src={photo}
                alt={`Sede W3 ${i + 1}`}
                width="306"
                height="388"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-[#F55900]" />
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
    </section>
  )
}
