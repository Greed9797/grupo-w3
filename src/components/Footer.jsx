export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#242424]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full py-5 md:py-0 md:h-[80px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-0">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo-grupow3.svg" alt="Grupo W3" width="107" height="32" loading="lazy" decoding="async" style={{ height: '32px', width: 'auto' }} />
        </div>

        <p className="text-[#939393] text-[12px] font-semibold text-center">
          © 2026 Grupo W3. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
