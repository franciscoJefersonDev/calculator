import { data } from './calculator'
import format from './format'
import calculateValue from './calculateValue'
import utils from './utils'
import alerts from './alerts'
import loadHistory from './loadHistory'
const operators_symbols = /\+|\-|\*|\//

const isPiOrE = (last_position: any) => {
  ;[last_position]
  const isPiOrEOnLastPosition =
    data.expression[last_position] === 'pi' ||
    data.expression[last_position] === 'e'
  return isPiOrEOnLastPosition
}

const parentheses = () => {
  const last_position = data.expression.length - 1
  const parentheses_opened = data.expression.filter(
    (item) => item.search(/\(/) > -1
  )
  const parentheses_closed = data.expression.filter((item) => item === ')')
  const is_number =
    data.expression[last_position] === ''
      ? false
      : !isNaN(Number(data.expression[last_position]))
  const is_percentage = data.expression[last_position] === '%'
  const is_parentheses_closed = data.expression[last_position] === ')'
  if (data.expression[0] === '') {
    data.expression[0] = '('
    data.expression_display[0] = '('
  } else if (
    (is_number && parentheses_opened.length === parentheses_closed.length) ||
    (is_parentheses_closed &&
      parentheses_opened.length === parentheses_closed.length) ||
    (is_percentage && parentheses_opened.length === parentheses_closed.length)
  ) {
    data.expression.push('*(')
    data.expression_display.push('×(')
  } else if (
    (is_number && parentheses_opened.length > parentheses_closed.length) ||
    is_parentheses_closed ||
    (is_percentage && parentheses_opened.length > parentheses_closed.length)
  ) {
    data.expression.push(')')
    data.expression_display.push(')')
  } else {
    data.expression.push('(')
    data.expression_display.push('(')
  }
  data.isResult = false
  calculateValue()
  format()
}

const dot = () => {
  const last_position = data.expression.length - 1
  if (data.isResult) {
    data.expression = ['']
    data.expression_display = ['']
  }
  if (data.expression[0] === '') {
    data.expression[last_position] += '0.'
    data.expression_display[last_position] += '0.'
  } else if (data.expression[last_position].search(operators_symbols) > -1) {
    data.expression.push('0.')
    data.expression_display.push('0.')
  } else if (data.expression[last_position].search(/\./) < 0) {
    data.expression[last_position] += '.'
    data.expression_display[last_position] += '.'
  }
  data.isResult = false
  calculateValue()
  format()
}

const numbers = (keys: string) => {
  const value: string = keys
  const last_position =
    data.expression.length - 1 < 0 ? 0 : data.expression.length - 1
  const conditionOne = isNaN(Number(data.expression[last_position]))
  if (
    data.expression[last_position].length === 15 &&
    data.expression[last_position].search(/\./) === -1
  ) {
    alerts('Não é possível inserir mais de 15 dígitos.')
  } else if (
    data.expression[last_position].length === 16 &&
    data.expression[last_position].search(/\./) > -1
  ) {
    alerts('Não é possível inserir mais de 15 dígitos.')
  } else if (utils.tenDigitsDecimal(data.expression[last_position])) {
    alerts('Não é possível inserir mais de 10 dígitos depois do ponto decimal.')
  } else if (data.isResult && value === '0') {
    data.expression = ['0']
    data.expression_display = ['0']
  } else if (
    (conditionOne &&
      data.expression[last_position].search(utils.percentage_parentheses_end) >
        -1) ||
    isPiOrE(last_position)
  ) {
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
}

const backspace = () => {
  const last_position = data.expression.length - 1
  const condition = !isNaN(Number(data.expression[last_position]))
  if (condition) {
    let str = data.expression[last_position]
    data.expression[last_position] = str.substr(0, str.length - 1)
    data.expression_display[last_position] = str.substr(0, str.length - 1)
    if (data.expression[last_position] === '') {
      data.expression.pop()
      data.expression_display.pop()
    }
    if (data.expression.length === 0) {
      data.expression[0] = ''
      data.expression_display[0] = ''
    }
  } else {
    if (data.expression[last_position] !== '') {
      data.expression.pop()
      data.expression_display.pop()
    }
    if (data.expression.length === 0) {
      data.expression[0] = ''
      data.expression_display[0] = ''
    }
  }
  data.isResult = false
  calculateValue()
  format()
}

const allClear = () => {
  data.expression = ['']
  data.expression_display = ['']
  data.isResult = false
  calculateValue()
  format()
}

const percentage = () => {
  const last_position = data.expression.length - 1
  if (data.expression[last_position] !== '') {
    if (
      data.expression[last_position].search('%') < 0 &&
      data.expression[last_position].search(operators_symbols) < 0 &&
      data.expression[last_position].search(/\(/) < 0
    ) {
      data.expression.push('%')
      data.expression_display.push('%')
    }
  }
  data.isResult = false
  calculateValue()
  format()
}

const isComma = () => {
  const last_position = data.expression.length - 1
  const str = data.expression[last_position]
  const last_position_str = str.length - 1 < 0 ? 0 : str.length - 1
  const isCommaOnLastPosition = str[last_position_str] === '.'
  return isCommaOnLastPosition
}

const operator = (key: string) => {
  const value: string = key
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
}

const equal = () => {
  const inputExpression =
    document.querySelector<HTMLInputElement>('.input-expression')!
  const localStorageHistory: any = JSON.parse(
    localStorage.getItem('history') || `[{"expression": [], "display": []}]`
  )
  if (data.expression.length > 0 && data.expression[0] !== '') {
    const newHistory = {
      expression: data.expression,
      display: data.expression_display,
    }
    if (
      localStorageHistory.filter(
        (item: any) => JSON.stringify(item) === JSON.stringify(newHistory)
      ).length === 0
    ) {
      localStorageHistory.push(newHistory)
      localStorage.setItem('history', JSON.stringify(localStorageHistory))
    }
  }
  if (Number(data.result) < 0) {
    data.expression_display = ['-', Math.abs(Number(data.result)).toString()]
    data.expression = ['-', Math.abs(Number(data.result)).toString()]
  } else {
    data.expression_display = [data.result]
    data.expression = [data.result]
  }
  data.result = ''
  format()
  inputExpression.classList.add('c-text-primary')
  loadHistory()
}

export default document.addEventListener('keydown', (event: any) => {
  const keyName = event.key
  const expressionDisplayInput = document.querySelector<HTMLInputElement>(
    '.expression-display'
  )
  console.log(keyName)
  console.log(expressionDisplayInput?.scrollLeft)
  expressionDisplayInput?.scrollBy({
    top: 0,
    left: window.innerHeight,
    behavior: 'smooth',
  })
  if (Number(keyName) || keyName === '0') {
    numbers(keyName)
  } else if (keyName === 'Backspace') {
    backspace()
  } else if (keyName === '(' || keyName === ')') {
    parentheses()
  } else if (keyName === '.' || keyName === ',') {
    dot()
  } else if (keyName === 'Delete') {
    allClear()
  } else if (keyName === '%') {
    percentage()
  } else if (
    keyName === '/' ||
    keyName === '*' ||
    keyName === '+' ||
    keyName === '-'
  ) {
    operator(keyName)
  } else if (keyName === 'Enter') {
    equal()
  }
})
