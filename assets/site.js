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

const profiles = document.querySelectorAll('.profile-grid .profile')

if (profiles.length && 'IntersectionObserver' in window) {
  const profileObserver = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue
      target.classList.add('profile-enter')
      profileObserver.unobserve(target)
    }
  }, { rootMargin: '0px 0px 40px 0px' })

  profiles.forEach((profile) => profileObserver.observe(profile))
}
