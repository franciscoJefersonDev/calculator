import format from "./format"
import calculateValue from "./calculateValue"
import { data } from './calculator'
import { AddManual } from '../components/Ripples'
export default () => {
  const localStorageHistory: any = JSON.parse(
    localStorage.getItem('history') || `[{"expression": [], "display": []}]`
  )
  const historyContent = document.querySelector<HTMLDivElement>('.history .content')!
  historyContent.innerHTML = ''
  localStorageHistory.forEach((item: any) => {
    if(item.expression.length > 0) {
      const li = document.createElement('li')
      li.classList.add('li-ripples')
      item.display.forEach((item: any) => {
        li.textContent += item
      })
      li.addEventListener('click', () => {
        data.expression = item.expression
        data.expression_display = item.display
        calculateValue()
        format()
      })
      historyContent.appendChild(li)
    }
  })
  const liRipples: any = document.querySelectorAll<HTMLElement>('.li-ripples')!
  AddManual(liRipples)
}