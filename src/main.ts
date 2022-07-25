import 'swiper/css'
import 'swiper/css/pagination'
import './style.scss'
import './components/history'
import './components/outputInput'
import './components/controls'
import './components/Dropdown'
import './components/ButtonAnimated'
import './components/Ripples'
import Init from './Init'
import Swiper, { Pagination } from 'swiper'
document.addEventListener('DOMContentLoaded', () => {
  if (window.screen.orientation.angle === 0) {
    document
      .querySelector<HTMLDivElement>('.controls')
      ?.classList.remove('none')
    document.querySelector<HTMLDivElement>('.history')?.classList.add('none')
  } else {
    document
      .querySelector<HTMLDivElement>('.controls')
      ?.classList.remove('none')
    document.querySelector<HTMLDivElement>('.history')?.classList.remove('none')
  }
  window.addEventListener('orientationchange', (event: any) => {
    const angle: number = event.target.screen.orientation.angle
    if (angle === 0) {
      document
        .querySelector<HTMLDivElement>('.controls')
        ?.classList.remove('none')
      document.querySelector<HTMLDivElement>('.history')?.classList.add('none')
    } else {
      document
        .querySelector<HTMLDivElement>('.controls')
        ?.classList.remove('none')
      document.querySelector<HTMLDivElement>('.history')?.classList.remove('none')
    }
  })
  
  const switchToggleTheme = document.querySelector<HTMLInputElement>
  (
    '.switch-toggle-theme input'
  )!
  const localStorageConfig: any = JSON.parse(
    localStorage.getItem('config') || `{"darkMode": false}`
  )
  new Init({ localStorageConfig, switchToggleTheme })
})

new Swiper('.mySwiper', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    },
  },
  modules: [Pagination],
})