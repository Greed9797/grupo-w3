/* Camada de comportamento: reveal no scroll, feedback de press e os dois
   carrosséis (galeria da sede e mural de depoimentos).
   Tudo anima só transform/opacity, por transition (interrompível) em vez de
   keyframes, e degrada para fade de opacidade sob prefers-reduced-motion.
   Os estilos vivem em src/motion.css. */

const REVEAL_MARGIN = '0px 0px -12% 0px'
const STAGGER_MS = 50
const STAGGER_CAP_MS = 250

const ARROW_SVG = {
  prev: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="14.5 5 7.5 12 14.5 19"/></svg>',
  next: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9.5 5 16.5 12 9.5 19"/></svg>',
}

// transform num ancestral quebra position:fixed/sticky dos filhos, então nunca
// revelar uma subárvore que contenha um.
function hasFixedDescendant(el) {
  const kids = el.querySelectorAll('*')
  for (let i = 0; i < kids.length; i++) {
    const pos = getComputedStyle(kids[i]).position
    if (pos === 'fixed' || pos === 'sticky') return true
  }
  return false
}

/* Um componente, dois usos: galeria da sede e mural de depoimentos. Só mudam o
   trilho, a nav e o rótulo — páginas a partir do scroll real, setas, pontos e
   teclado são idênticos. */
function buildCarousel(track, nav, label) {
  if (!track || !nav || nav.children.length) return () => {}

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  track.setAttribute('tabindex', '0')
  track.setAttribute('role', 'group')
  track.setAttribute('aria-label', `${label} — ${track.children.length} itens`)

  /* As paradas são as posições de snap reais dos slides, não frações da largura
     do trilho: dividir por clientWidth dava 3 paradas para 4 cards, e o último
     nunca ganhava ponto próprio. As que passam do fim colapsam na mesma posição
     e são deduplicadas. */
  const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth)

  function stops() {
    const max = maxScroll()
    if (max <= 2) return [0]
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0
    const base = track.getBoundingClientRect().left - track.scrollLeft + pad
    const seen = []
    Array.prototype.forEach.call(track.children, (el) => {
      const pos = Math.min(Math.round(el.getBoundingClientRect().left - base), max)
      // 2px de tolerância: arredondamento de layout não cria ponto duplicado
      if (!seen.some((p) => Math.abs(p - pos) <= 2)) seen.push(pos)
    })
    return seen.sort((a, b) => a - b)
  }

  function current() {
    const list = stops()
    const sl = track.scrollLeft
    let best = 0
    for (let i = 1; i < list.length; i++) {
      if (Math.abs(list[i] - sl) < Math.abs(list[best] - sl)) best = i
    }
    return best
  }

  function goTo(i) {
    const list = stops()
    const clamped = Math.min(Math.max(i, 0), list.length - 1)
    track.scrollTo({ left: list[clamped], behavior: reduce ? 'auto' : 'smooth' })
  }

  const prev = document.createElement('button')
  prev.type = 'button'
  prev.className = 'odm-gal__arrow'
  prev.setAttribute('aria-label', 'Anterior')
  prev.innerHTML = ARROW_SVG.prev

  const next = document.createElement('button')
  next.type = 'button'
  next.className = 'odm-gal__arrow'
  next.setAttribute('aria-label', 'Próximo')
  next.innerHTML = ARROW_SVG.next

  const dots = document.createElement('div')
  dots.className = 'odm-gal__dots'

  nav.appendChild(prev)
  nav.appendChild(dots)
  nav.appendChild(next)

  function renderDots() {
    const n = stops().length
    // Uma página só = nada a paginar: a nav inteira sai de cena em vez de virar enfeite.
    nav.style.display = n < 2 ? 'none' : ''
    while (dots.children.length > n) dots.removeChild(dots.lastChild)
    while (dots.children.length < n) {
      const d = document.createElement('button')
      d.type = 'button'
      d.className = 'odm-gal__dot'
      const index = dots.children.length
      d.addEventListener('click', () => goTo(index))
      dots.appendChild(d)
    }
    Array.prototype.forEach.call(dots.children, (d, i) => {
      d.setAttribute('aria-label', `Ir para o grupo ${i + 1} de ${n}`)
      d.setAttribute('aria-current', i === current() ? 'true' : 'false')
    })
  }

  function sync() {
    const i = current()
    prev.disabled = i <= 0
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    Array.prototype.forEach.call(dots.children, (d, k) => {
      d.setAttribute('aria-current', k === i ? 'true' : 'false')
    })
  }

  prev.addEventListener('click', () => goTo(current() - 1))
  next.addEventListener('click', () => goTo(current() + 1))

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current() + 1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current() - 1) }
  }
  track.addEventListener('keydown', onKeyDown)

  let raf
  const onTrackScroll = () => {
    if (raf) cancelAnimationFrame(raf)
    raf = requestAnimationFrame(sync)
  }
  track.addEventListener('scroll', onTrackScroll)

  // Trocar de breakpoint muda quantos itens cabem — e portanto o nº de páginas.
  const onResize = () => { renderDots(); sync() }
  window.addEventListener('resize', onResize)

  renderDots()
  sync()

  return () => {
    track.removeEventListener('keydown', onKeyDown)
    track.removeEventListener('scroll', onTrackScroll)
    window.removeEventListener('resize', onResize)
    if (raf) cancelAnimationFrame(raf)
    nav.textContent = ''
  }
}

export function initMotion() {
  const root = document.getElementById('root')
  if (!root || !('IntersectionObserver' in window)) return () => {}

  const teardown = []

  teardown.push(
    buildCarousel(document.querySelector('.odm-gal'), document.querySelector('.odm-gal__nav'), 'Galeria da sede'),
  )
  teardown.push(
    buildCarousel(document.querySelector('.odm-wall'), document.querySelector('.odm-wall__nav'), 'Depoimentos em vídeo'),
  )

  const sections = Array.prototype.slice.call(root.querySelectorAll('section'))
  const units = []

  // slice(1): o hero já está na tela na chegada. Animar o que o leitor está
  // olhando ao carregar adiciona latência, não significado.
  sections.slice(1).forEach((section) => {
    if (hasFixedDescendant(section)) return
    section.classList.add('odm-reveal')
    units.push({ el: section, delay: 0 })

    let grid = null
    const candidates = section.querySelectorAll('div')
    for (let i = 0; i < candidates.length; i++) {
      if (getComputedStyle(candidates[i]).display === 'grid' && candidates[i].children.length > 1) {
        grid = candidates[i]
        break
      }
    }
    if (!grid) return

    Array.prototype.slice.call(grid.children).forEach((card, i) => {
      card.classList.add('odm-reveal')
      units.push({ el: card, delay: Math.min(i * STAGGER_MS, STAGGER_CAP_MS) })
    })
  })

  document.querySelectorAll('#root a[href], #root button').forEach((el) => el.classList.add('odm-press'))

  if (!units.length || !sections.length) {
    return () => teardown.forEach((fn) => fn())
  }

  /* Num flick rápido o observer pode nunca amostrar um bloco enquanto ele cruza
     o viewport, e aí ele ficaria invisível para sempre. A rede de segurança não
     anima nada, só adiciona classe, e se remove sozinha quando todos apareceram. */
  function sweepPassed() {
    let pending = 0
    units.forEach((u) => {
      if (u.el.classList.contains('odm-in')) return
      if (u.el.getBoundingClientRect().bottom < 0) u.el.classList.add('odm-in')
      else pending++
    })
    return pending
  }

  let ticking = false
  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      if (!sweepPassed()) window.removeEventListener('scroll', onScroll)
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const unit = units.filter((u) => u.el === entry.target)[0]
        if (unit && unit.delay) entry.target.style.transitionDelay = `${unit.delay}ms`
        entry.target.classList.add('odm-in')
        io.unobserve(entry.target)
      })
      sweepPassed()
    },
    { rootMargin: REVEAL_MARGIN, threshold: 0.01 },
  )

  /* Sem failsafe por timer: um timer não distingue "observer quebrado" de
     "leitor ainda não rolou", e revelar tudo num prazo apaga a animação de quem
     lê o hero primeiro. Em vez disso, provar que o observer dispara antes de
     esconder qualquer coisa — o hero está sempre intersectando no load, então é
     sentinela confiável. Se o callback nunca roda, .odm-armed nunca entra e
     todo elemento simplesmente fica visível. */
  const sentinel = new IntersectionObserver((entries, obs) => {
    if (!entries.some((e) => e.isIntersecting)) return
    obs.disconnect()
    document.documentElement.classList.add('odm-armed')
    units.forEach((u) => io.observe(u.el))
  })
  sentinel.observe(sections[0])

  return () => {
    window.removeEventListener('scroll', onScroll)
    io.disconnect()
    sentinel.disconnect()
    document.documentElement.classList.remove('odm-armed')
    units.forEach((u) => {
      u.el.classList.remove('odm-reveal', 'odm-in')
      u.el.style.removeProperty('transition-delay')
    })
    teardown.forEach((fn) => fn())
  }
}
