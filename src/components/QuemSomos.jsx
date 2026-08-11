export default function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-black py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex justify-center">
        <div
          className="relative w-full max-w-[858px] rounded-[12px] border border-[#262626] overflow-hidden odm-about"
          style={{ background: 'rgba(255,255,255,0.10)' }}
        >
          {/* Régua laranja: escondida pelo motion.css, que a devolve como
              marcador do próprio título, alinhada ao texto. */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-[#F55900] odm-about__rule" />

          <div className="flex flex-col md:flex-row p-6 md:p-10 gap-6 md:gap-8 odm-about__body">
            {/* Image */}
            <div className="md:w-[387px] flex-shrink-0 odm-about__media">
              <img
                src="/images/quem-somos.webp"
                srcSet="/images/quem-somos-322.webp 322w, /images/quem-somos.webp 387w"
                sizes="(max-width: 767px) calc(100vw - 68px), 387px"
                alt="Grupo W3"
                width="387"
                height="387"
                loading="lazy"
                decoding="async"
                className="w-full md:h-[387px] object-cover rounded-[6px]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center odm-about__text">
              <h2 className="text-[30px] md:text-[35px] font-semibold text-white leading-[1.3] mb-5 md:mb-6 odm-about__title">
                Quem somos
              </h2>
              <p className="text-[#939393] text-[15px] leading-[1.3] odm-about__lead">
                O Ecossistema W3 é um grupo empresarial especializado em aceleração e estruturação de e-commerces.
              </p>
              <p className="text-[#939393] text-[15px] leading-[1.3] mt-4">
                Não somos uma empresa de promessa, somos uma estrutura operacional de resultado e performance. Fundado em 2024, com base estratégica em Blumenau – SC, o grupo nasceu com um objetivo claro: Ser o maior ecossistema de e-commerce do Brasil.
              </p>
              <p className="text-[#939393] text-[15px] leading-[1.3] mt-4">
                Atuamos nacionalmente, atendendo marcas que desejam escalar com margem, previsibilidade e profissionalização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
