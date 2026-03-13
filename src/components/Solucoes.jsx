const CheckIcon = () => (
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
    <polyline points="1,5 5,9 13,1" stroke="#F55900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
)

const BrainIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
    <path d="M17.6 6.5a3 3 0 0 0 .4-1.375"/>
    <path d="M6 6.5a3 3 0 0 1-.4-1.375"/>
    <path d="M3.48 10.9a4 4 0 0 1 .585-.4"/>
    <path d="M19.94 10.5a4 4 0 0 1 .585.4"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>
)

const TrendingUpIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
)

const ShoppingBagIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
)

const DollarIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const DashboardIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1"/>
    <rect width="7" height="5" x="14" y="3" rx="1"/>
    <rect width="7" height="9" x="14" y="12" rx="1"/>
    <rect width="7" height="5" x="3" y="16" rx="1"/>
  </svg>
)

const services = [
  {
    icon: <BrainIcon />,
    logo: '/images/logo-mentoria.svg',
    logoH: 20,
    title: 'Mentoria AMES',
    description: 'Estruturação estratégica para donos de E-commerce que já faturam e querem escalar com margem, com o Método utilizado pra sair do zero ao 3º maior ecommerce de moda infantil do Brasil, focando em 3 pilares:',
    bullets: [
      { bold: 'Resultado:', rest: ' mais vendas' },
      { bold: 'Eficiência:', rest: ' mais lucro' },
      { bold: 'Continuidade:', rest: ' recompra e ainda mais lucro' },
    ],
    cta: 'Conhecer a Mentoria AMES',
  },
  {
    icon: <TrendingUpIcon />,
    logo: '/images/logo-trafego.svg',
    logoH: 26,
    title: 'W3 Tráfego Pago',
    description: 'Gestão estratégica de mídia, que vai além de "apertar botões" e analisa sua venda ponta a ponta, com foco em:',
    bullets: [
      { rest: 'Custo de mídia controlado' },
      { rest: 'Escala sustentável' },
      { rest: 'Estrutura de funil' },
      { rest: 'ROAS consistente' },
      { rest: 'Otimizações de conversão' },
    ],
    cta: 'Conhecer a W3 Tráfego Pago',
  },
  {
    icon: <ShoppingBagIcon />,
    logo: '/images/logo-marketplace.svg',
    logoH: 22,
    title: 'W3 Marketplace',
    description: 'Mesmo com produto e estratégia, pode faltar braço na sua operação, e foi com essa necessidade que estruturamos a W3 Gestão de Marketplaces. Nosso time de especialista estrutura anúncios e campanhas nos principais marketplaces do Brasil, incluindo:',
    bullets: [
      { rest: 'Mercado Livre' },
      { rest: 'Shopee' },
      { rest: 'Shein' },
      { rest: 'TEMU' },
    ],
    cta: 'Conhecer a W3 Marketplace',
  },
  {
    icon: <DollarIcon />,
    logo: '/images/logo-pagamentos.svg',
    logoH: 25,
    title: 'W3 Pagamentos',
    description: 'Nascida de uma parceria estratégica com Appmax, a W3 pagamentos é a solução com maior performance de aprovação de pedidos para ecommerce do brasil. Na w3 pagamentos você garante:',
    bullets: [
      { rest: 'A mais alta taxa de aprovação do mercado' },
      { rest: 'Estrutura de checkout transparente otimizada' },
      { rest: 'Recuperação de carrinho com IA' },
    ],
    cta: 'Conhecer a W3 Pagamentos',
  },
  {
    icon: <DashboardIcon />,
    logo: '/images/logo-saas.svg',
    logoH: 19,
    title: 'SaaS W3',
    description: 'Tecnologia própria com lançamento previsto para o primeiro trimestre de 2026. Toda a inteligência do ecossistema a um clique de distância.',
    bullets: [
      { rest: 'Dashboard de gestão' },
      { rest: 'CRM de influenciadoras' },
      { rest: 'Calculadora de margem' },
      { rest: 'IA integrada' },
      { rest: 'Implementação do método W3 pra escalar suas vendas' },
    ],
    cta: 'Conhecer o SaaS W3',
    badge: 'Em desenvolvimento',
  },
]

export default function Solucoes() {
  const firstRow = services.slice(0, 3)
  const secondRow = services.slice(3, 5)

  return (
    <section id="solucoes" className="bg-black py-12 md:py-20 border-t border-[#242424]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#F55900] text-[12px] font-medium uppercase tracking-widest mb-4">Nossas Soluções</p>
          <h2 className="text-[30px] md:text-[35px] font-semibold text-white mb-4">Soluções do Ecossistema W3</h2>
          <p className="text-[#939393] text-[15px] md:text-[20px] max-w-[577px] mx-auto leading-[1.3]">
            Somos um modelo integrado por unidades estratégicas que garantem 100% do resultado do seu ecommerce
          </p>
        </div>

        {/* Row 1 — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {firstRow.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Row 2 — 1 col mobile, 2 col tablet, 2 centered desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-4">
          {secondRow.map((service, index) => (
            <div key={index} className="lg:w-[calc((100%-2*16px)/3)]">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="relative bg-[#0D0D0D] border border-[#262626] rounded-[9px] p-6 flex flex-col h-full">
      {/* Badge */}
      {service.badge && (
        <div
          className="absolute -top-3 right-4 text-white text-[11px] font-bold px-4 py-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, #F55900, #F47917)' }}
        >
          {service.badge}
        </div>
      )}

      {/* Icon box + Brand logo */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-[4.5px]"
          style={{ width: '43px', height: '43px', background: '#141414' }}
        >
          {service.icon}
        </div>
        <img
          src={service.logo}
          alt={service.title}
          style={{ height: `${service.logoH}px`, width: 'auto' }}
        />
      </div>

      {/* Card title */}
      <h3 className="text-white text-[20px] font-semibold mb-3 leading-tight">{service.title}</h3>

      {/* Description */}
      <p className="text-[#939393] text-[12px] leading-[1.3] mb-4">{service.description}</p>

      {/* Bullets */}
      <ul className="space-y-[10px] mb-5 flex-1">
        {service.bullets.map((bullet, i) => (
          <li key={i} className="text-[#939393] text-[12px] flex items-start gap-2" style={{ lineHeight: '22.5px' }}>
            <span className="flex-shrink-0 mt-[5px]"><CheckIcon /></span>
            <span>
              {bullet.bold && <span className="text-white font-semibold">{bullet.bold}</span>}
              {bullet.rest}
            </span>
          </li>
        ))}
      </ul>

      {/* Orange link */}
      <a href="#contato" className="text-[#F55900] text-[12px] font-semibold mb-3 flex items-center gap-1 hover:opacity-80 transition-opacity">
        {service.cta} →
      </a>

      {/* CTA Button */}
      <a
        href="#contato"
        className="flex items-center justify-center gap-2 text-[#F2F2F2] font-bold uppercase tracking-wide py-[14px] rounded-[10.9px] transition-opacity hover:opacity-90 mt-auto"
        style={{ background: 'linear-gradient(90deg, #F55900, #F47917)', fontSize: '10.86px' }}
      >
        {service.cta}
        <ArrowIcon />
      </a>
    </div>
  )
}
