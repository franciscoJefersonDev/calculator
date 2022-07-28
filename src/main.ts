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
})