export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '75px', background: '#000' }}
    >
      {/* Background image with orange color blend */}
      <div
        className="absolute"
        style={{
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgb(245,89,0), rgb(245,89,0)), url('/images/hero-bg.jpg')`,
          backgroundBlendMode: 'color, normal',
          backgroundSize: 'cover',
          backgroundPosition: 'center 8px',
          backgroundColor: '#000',
        }}
      />

      {/* Gradient fade to black at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '107px 107px',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 md:px-10 w-full mx-auto"
        style={{ maxWidth: '710px', paddingTop: '20px', paddingBottom: '20px' }}
      >
        <h1
          className="text-white leading-[1.15] mb-5"
          style={{ fontSize: 'clamp(40px, 5.5vw, 55px)', fontWeight: 700 }}
        >
          Grupo W3: O Ecossistema que mais transforma{' '}
          <span style={{ color: '#F55900' }}>E-commerces</span> no Brasil
        </h1>

        <p
          className="text-white leading-[1.4] mb-4"
          style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 400 }}
        >
          Transformamos vidas através do e-commerce, combinando estratégia,
          execução e tecnologia dentro de um sistema integrado.
        </p>

        {/* Info badges — stacked on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-4">
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 self-center sm:self-auto"
            style={{ background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(38,38,38,0.9)', backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(9px)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#F55900"/>
              <circle cx="12" cy="10" r="3" stroke="#F55900"/>
            </svg>
            <span style={{ color: '#fff', fontSize: 'clamp(10px, 1.2vw, 12px)' }}>Sede física em Blumenau – SC.</span>
          </div>
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 self-center sm:self-auto"
            style={{ background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(38,38,38,0.9)', backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(9px)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#F55900"/>
              <circle cx="9" cy="7" r="4" stroke="#F55900"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#F55900"/>
            </svg>
            <span style={{ color: '#fff', fontSize: 'clamp(10px, 1.2vw, 12px)' }}>Equipe com mais de 30 profissionais.</span>
          </div>
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 self-center sm:self-auto"
            style={{ background: 'rgba(13,13,13,0.85)', border: '1px solid rgba(38,38,38,0.9)', backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(9px)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" stroke="#F55900"/>
              <line x1="2" y1="12" x2="22" y2="12" stroke="#F55900"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#F55900"/>
            </svg>
            <span style={{ color: '#fff', fontSize: 'clamp(10px, 1.2vw, 12px)' }}>Operação nacional.</span>
          </div>
        </div>

        <a
          href="#mentoria-ames"
          className="flex items-center justify-center mt-2 animate-bounce"
          aria-label="Conhecer nossos serviços"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
