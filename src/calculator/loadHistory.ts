import format from "./format"
import calculateValue from "./calculateValue"
import { data } from './calculator'
export default () => {
  const localStorageHistory: any = JSON.parse(
    localStorage.getItem('history') || `[{}]`
  )
  const historyContent = document.querySelector<HTMLDivElement>('.history .content')!
  historyContent.innerHTML = ''
  localStorageHistory.forEach((item: any) => {
    const li = document.createElement('li')
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
  })
}