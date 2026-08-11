export default function CTA() {
  return (
    <section id="contato" className="bg-black py-12 md:py-20 border-t border-[#242424]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="bg-[#080808] rounded-[13.8px] py-12 md:py-16 px-6 md:px-10 text-center max-w-[551px] mx-auto">
          <h2 className="text-[30px] md:text-[50px] font-semibold text-white leading-[1.3] mb-8 md:mb-10 max-w-[551px] mx-auto">
            {/* Sem os dois-pontos a maiúscula deixa de fazer sentido em pt-BR;
                o card interno é neutralizado em motion.css e o título fecha em
                2 linhas em vez de deixar "Estrutura." órfã na terceira. */}
            O Ecossistema W3 representa <span style={{ color: '#F55900' }}>estrutura.</span>
          </h2>

          <a
            href="https://api.whatsapp.com/send/?phone=5568992523482&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#F2F2F2] font-bold uppercase tracking-wide transition-opacity hover:opacity-90 w-full md:w-auto justify-center"
            style={{
              background: 'linear-gradient(90deg, #F55900, #F47917)',
              borderRadius: '13.79px',
              paddingTop: '18px',
              paddingBottom: '18px',
              paddingLeft: '39px',
              paddingRight: '35px',
              gap: '10.63px',
              fontSize: '13.8px',
            }}
          >
            quero conhecer o grupo w3
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
