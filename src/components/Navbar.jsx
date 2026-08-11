import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[75px] bg-black/50 backdrop-blur-sm border-b border-[#242424]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo-grupow3.svg" alt="Grupo W3" width="100" height="30" decoding="async" style={{ height: '30px', width: 'auto' }} />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#quem-somos" className="text-[#939393] hover:text-white transition-colors text-[12.6px]">Quem Somos</a>
          <a href="#solucoes" className="text-[#939393] hover:text-white transition-colors text-[12.6px]">Soluções</a>
          <a href="#cases" className="text-[#939393] hover:text-white transition-colors text-[12.6px]">Cases</a>
          <a href="#diferenciais" className="text-[#939393] hover:text-white transition-colors text-[12.6px]">Diferenciais</a>
        </div>

        {/* Desktop CTA */}
        <a
          href="https://api.whatsapp.com/send/?phone=5568992523482&text&type=phone_number&app_absent=0"
          className="hidden md:flex items-center gap-2 bg-[#F55900] text-[#F2F2F2] text-[9.5px] font-bold px-5 py-3 rounded-[9.5px] hover:bg-orange-600 transition-colors uppercase tracking-wide"
        >
          fale conosco
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[75px] left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-[#242424] flex flex-col px-6 py-6 gap-5 odm-mnav">
          <a href="#quem-somos" onClick={() => setMenuOpen(false)} className="text-[#939393] hover:text-white transition-colors text-[15px]">Quem Somos</a>
          <a href="#solucoes" onClick={() => setMenuOpen(false)} className="text-[#939393] hover:text-white transition-colors text-[15px]">Soluções</a>
          <a href="#cases" onClick={() => setMenuOpen(false)} className="text-[#939393] hover:text-white transition-colors text-[15px]">Cases</a>
          <a href="#diferenciais" onClick={() => setMenuOpen(false)} className="text-[#939393] hover:text-white transition-colors text-[15px]">Diferenciais</a>
          <a
            href="https://api.whatsapp.com/send/?phone=5568992523482&text&type=phone_number&app_absent=0"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 text-[#F2F2F2] font-bold uppercase tracking-wide py-[14px] rounded-[11.9px] mt-1"
            style={{ background: 'linear-gradient(90deg, #F55900, #F47917)', fontSize: '11.9px' }}
          >
            fale conosco
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      )}
    </>
  )
}
