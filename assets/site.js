const menuButton = document.querySelector('.nav-toggle')
const navigation = document.querySelector('.nav-links')

if (menuButton && navigation) {
  document.documentElement.classList.add('js')

  function toggleMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open))
    menuButton.textContent = open ? 'Cerrar' : 'Menú'
    navigation.classList.toggle('is-open', open)
  }

  menuButton.addEventListener('click', () => {
    toggleMenu(menuButton.getAttribute('aria-expanded') !== 'true')
  })

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) toggleMenu(false)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      toggleMenu(false)
      menuButton.focus()
    }
  })

  window.matchMedia('(max-width: 820px)').addEventListener('change', () => {
    toggleMenu(false)
  })
}

const currentYear = document.querySelector('.current-year')
if (currentYear) currentYear.textContent = String(new Date().getFullYear())

const scrollItems = document.querySelectorAll(
  '#servicios .section-head, #servicios .service-card, .profile-grid .profile'
)

if (scrollItems.length && 'IntersectionObserver' in window) {
  const scrollObserver = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue
      target.classList.add('scroll-enter')
      scrollObserver.unobserve(target)
    }
  }, { rootMargin: '0px 0px -20px 0px' })

  scrollItems.forEach((item) => scrollObserver.observe(item))
}
