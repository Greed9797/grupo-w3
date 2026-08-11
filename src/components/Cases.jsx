const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <line x1="2" y1="2" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="2" x2="2" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
    <polyline points="1,5 5,9 13,1" stroke="#F55900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PlayIcon = () => (
  <svg width="17" height="19" viewBox="0 0 17 19" fill="currentColor" aria-hidden="true">
    <path d="M16 7.77a2 2 0 0 1 0 3.46L3 18.9A2 2 0 0 1 0 17.17V1.83A2 2 0 0 1 3 .1z"/>
  </svg>
)

/* Depoimentos em vídeo. Os posters já trazem a legenda queimada no pixel, por
   isso nenhum figcaption por cima. Cada card abre o Short em nova aba. */
const depoimentos = [
  { poster: '/images/depoimento-1.webp', href: 'https://www.youtube.com/shorts/TqbCf0wx0Bo', alt: 'aumentou em 50% a conta do Mercado Livre' },
  { poster: '/images/depoimento-2.webp', href: 'https://www.youtube.com/shorts/3A67zFdPMjY', alt: 'crescimento de 100% mês a mês' },
  { poster: '/images/depoimento-3.webp', href: 'https://www.youtube.com/shorts/6oZ7ZuU7ASs', alt: 'aumentou a receita em mais de R$ 3 milhões' },
  { poster: '/images/depoimento-4.webp', href: 'https://www.youtube.com/shorts/ChJJWCSxh3I', alt: 'totalmente adaptável ao meu nicho' },
]

export default function Cases() {
  return (
    <section id="cases" className="bg-black py-12 md:py-20 border-t border-[#242424]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Header 1 */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[#F55900] text-[12px] font-medium uppercase tracking-widest mb-4">cases</p>
          <h2 className="text-[30px] md:text-[35px] font-semibold text-white">Resultados Reais. Operação Interna.</h2>
        </div>

        {/* Ame Kids card */}
        <div
          className="relative mx-auto rounded-[12px] border border-[#262626] overflow-hidden mb-12 md:mb-16 flex flex-col md:flex-row odm-case"
          style={{ background: 'rgba(255,255,255,0.10)', maxWidth: '858px' }}
        >
          {/* Image */}
          <div className="flex-shrink-0 flex items-center justify-center p-6 md:p-0 md:pl-[42px] md:pt-[48px] md:pb-[48px]">
            <img
              src="/images/amekids.webp"
              alt="Ame Kids"
              width="387"
              height="387"
              loading="lazy"
              decoding="async"
              className="w-full md:w-[387px] md:h-[387px] object-cover rounded-[6px]"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-6 pb-8 md:pb-0 md:pl-[53px] md:pr-[42px]">
            <h3 className="text-white text-[25px] md:text-[30px] font-semibold mb-4">Ame Kids</h3>
            <p className="text-[#939393] text-[15px] leading-[1.3] mb-5">
              A Ame Kids, cofundada por Leonardo Ames, é um dos maiores e-commerces de moda infantil do Brasil.
            </p>
            <ul className="space-y-[10px] mb-5">
              {['Múltiplos 7 dígitos anuais', 'Estrutura multi-canal', 'Operação validada na prática', 'Base real para o método AMES'].map((item, i) => (
                <li key={i} className="text-[#939393] text-[15px] flex items-center gap-3 leading-[1.3]">
                  <span className="flex-shrink-0"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#939393] text-[15px] leading-[1.3]">
              O que ensinamos é aplicado diariamente na operação. Não é teoria. É validação real.
            </p>
          </div>
        </div>

        {/* Mural de depoimentos em vídeo */}
        <h2 id="video-wall-title" className="odm-wall__heading">O que falam sobre nós</h2>
        <div className="odm-wall" aria-labelledby="video-wall-title">
          {depoimentos.map((item) => (
            <figure key={item.href} className="odm-wall__item">
              <img src={item.poster} alt={`Depoimento de cliente: ${item.alt}`} loading="lazy" decoding="async" />
              <span className="odm-wall__play" aria-hidden="true"><PlayIcon /></span>
              {/* Área de clique = card inteiro. Fica acima do poster e do play,
                  mas o play continua visível porque o link não tem fundo. */}
              <a
                className="odm-wall__link"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Assistir depoimento no YouTube: ${item.alt}`}
              />
            </figure>
          ))}
        </div>
        {/* Nav do mural: só aparece no mobile, onde o grid vira carrossel */}
        <div className="odm-gal__nav odm-wall__nav" />

        {/* Header 2 */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[30px] md:text-[35px] font-semibold text-white">Caso de Escala Estruturada</h2>
        </div>

        {/* Painel único dividido por dentro (motion.css): dois cards com 340 e
            350px e raio 13.8 brigavam com o card do case acima. */}
        <div className="flex flex-col md:flex-row justify-center gap-4 odm-compare">
          {/* Problems */}
          <div className="bg-[#0D0D0D] border border-[#262626] rounded-[13.8px] p-8 w-full md:w-[340px]">
            <h3 className="text-white text-[20px] md:text-[22px] font-normal mb-6 leading-[1.3]">
              Cliente do segmento de E-commerce que já faturava, mas enfrentava:
            </h3>
            <ul className="space-y-[14px]">
              {['Margem comprimida', 'Dependência de tráfego', 'Falta de previsibilidade'].map((item, i) => (
                <li key={i} className="text-[#939393] text-[15px] md:text-[16px] flex items-center gap-3 leading-[1.3]">
                  <span className="flex-shrink-0"><XIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-[#0D0D0D] border border-[#262626] rounded-[13.8px] p-8 w-full md:w-[350px]">
            <h3 className="text-white text-[20px] md:text-[22px] font-normal mb-6 leading-[1.3]">
              Após implementação do método e estruturação:
            </h3>
            <ul className="space-y-[14px]">
              {['Reorganização financeira', 'Estrutura multi-canal', 'Melhoria em ROAS', 'Escala com controle de margem'].map((item, i) => (
                <li key={i} className="text-[#939393] text-[15px] md:text-[16px] flex items-center gap-3 leading-[1.3]">
                  <span className="flex-shrink-0"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <p className="text-[#939393] text-[15px] md:text-[20px] text-center mt-10 md:mt-12 leading-[1.3]">
          O diferencial não foi “crescer rápido”. Foi crescer com estrutura.
        </p>
      </div>
    </section>
  )
}
