import { data } from './calculator'
import format from './format.js'
import calculateValue from './calculateValue'
const operators_symbols = /\+|\-|\*|\//

const isComma = () => {
  const last_position = data.expression.length - 1
  const str = data.expression[last_position]
  const last_position_str = str.length - 1 < 0 ? 0 : str.length - 1
  const isCommaOnLastPosition = str[last_position_str] === '.'
  return isCommaOnLastPosition
}
export default (buttons: HTMLButtonElement[]) => {
  buttons.forEach((item: HTMLButtonElement) => {
    item.addEventListener('click', ({ target }: any) => {
      const value: string = target.dataset.value
      const last_position =
        data.expression.length - 1 < 0 ? 0 : data.expression.length - 1
      const noOperatorMD = /\(/
      if (
        data.expression[last_position] === '' ||
        (data.expression[last_position].search(noOperatorMD) > -1 &&
          data.expression[last_position] !== '-')
      ) {
        if (value === '-') {
          if (data.expression[0] === '') {
            data.expression[0] = value
            data.expression_display[0] = value
          } else {
            data.expression.push(value)
            data.expression_display.push(value)
          }
        }
        console.log(data.expression[last_position].search(noOperatorMD))
      } else if (data.expression[last_position].search(noOperatorMD) < 0) {
        if (
          data.expression[last_position].search(operators_symbols) < 0 &&
          !isComma()
        ) {
          data.expression.push(value + '')
          data.expression_display.push(
            value.replace(/\*/gi, '×').replace(/\//gi, '÷') + ''
          )
        } else {
          if (
            data.expression.length > 1 &&
            !isComma() &&
            data.expression[last_position - 1].search(noOperatorMD) < 0
          ) {
            data.expression[last_position] = value
            data.expression_display[last_position] = value
              .replace(/\*/gi, '×')
              .replace(/\//gi, '÷')
          }
        }
      }
      calculateValue()
      format()
    })
  })
}
