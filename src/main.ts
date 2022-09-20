import 'swiper/css'
import 'swiper/css/pagination'
import './style.scss'
import './components/history'
import './components/outputInput'
import './components/controls'
import './components/Dropdown'
import './components/ButtonAnimated'
import './components/Ripples'
document.addEventListener('DOMContentLoaded', () => {
  const heightScreen = window.innerHeight
  const widthScreen = window.innerWidth
  if (heightScreen > widthScreen) {
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
  window.addEventListener('resize', () => {
    const heightScreen = window.innerHeight
    const widthScreen = window.innerWidth
    if (heightScreen > widthScreen) {
      document
        .querySelector<HTMLDivElement>('.controls')
        ?.classList.remove('none')
      document.querySelector<HTMLDivElement>('.history')?.classList.add('none')
    } else {
      document
        .querySelector<HTMLDivElement>('.controls')
        ?.classList.remove('none')
      document
        .querySelector<HTMLDivElement>('.history')
        ?.classList.remove('none')
    }
  })
  window.addEventListener('orientationchange', () => {
    const heightScreen = window.innerHeight
    const widthScreen = window.innerWidth
    if (heightScreen > widthScreen) {
      document
        .querySelector<HTMLDivElement>('.controls')
        ?.classList.remove('none')
      document.querySelector<HTMLDivElement>('.history')?.classList.add('none')
    } else {
      document
        .querySelector<HTMLDivElement>('.controls')
        ?.classList.remove('none')
      document
        .querySelector<HTMLDivElement>('.history')
        ?.classList.remove('none')
    }
  })
})
