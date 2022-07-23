import { data } from './calculator'
import format from './format'
import calculateValue from './calculateValue'
import utils from './utils'
const isPiOrE = (last_position: any) => {
  // const str = data.expression
  [last_position]
  const isPiOrEOnLastPosition = data.expression[last_position] === 'pi' ||
  data.expression[last_position] === 'e'
  return isPiOrEOnLastPosition
}
export default (buttons: HTMLButtonElement[]) => {
  buttons.forEach((item: HTMLButtonElement) => {
    item.addEventListener('click', ({ target }: any) => {
      const value: string = target.dataset.value
      const last_position = data.expression.length - 1 < 0 ? 0:
      data.expression.length - 1
      const conditionOne = isNaN(Number(data.expression[last_position]))
      if (data.expression[last_position].length === 15 &&
        data.expression[last_position].search(/\./) === -1) {
        // utils.alert('Não é possível inserir mais de 15 dígitos.')
      } else if (data.expression[last_position].length === 16 &&
        data.expression[last_position].search(/\./) > -1) {
        // utils.alert('Não é possível inserir mais de 15 dígitos.')
      } else if (utils.tenDigitsDecimal(data.expression[last_position])) {
        // utils.alert('jjsj')
      } else if(data.isResult && value === '0') {
        data.expression = ['0']
        data.expression_display = ['0']
      }
      else if (conditionOne && data.expression[last_position]
        .search(utils.percentage_parentheses_end) > -1 || isPiOrE(last_position)) {
        data.expression.push('*')
        data.expression.push(value)
        data.expression_display.push('×')
        data.expression_display.push(value)
      } else if (conditionOne && data.expression[last_position] !== ')') {
        data.expression.push(value)
        data.expression_display.push(value)
      } else {
        if (data.expression[last_position] === '0') {
          data.expression[last_position] = value
          data.expression_display[last_position] = value
        } else {
          data.expression[last_position] += value
          data.expression_display[last_position] += value
        }
      }
      data.isResult = false
      calculateValue()
      format()
    })
  })
}