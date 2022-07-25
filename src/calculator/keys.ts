import {
  data
} from './calculator'
import format from './format'
import calculateValue from './calculateValue'
import loadHistory from './loadHistory'
const operators_symbols = /\+|\-|\*|\//
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
const comma = () => {
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

const equals = () => {
  const inputExpression = document.querySelector<HTMLInputElement>('.input-expression')!
  const localStorageHistory: any = JSON.parse(
    localStorage.getItem('history') || `[{"expression": [], "display": []}]`
  )
  if(data.expression.length > 0 && data.expression[0] !== '') {
    const newHistory = {
      expression: data.expression,
      display: data.expression_display,
    }
    if(localStorageHistory.filter((item: any) => JSON.stringify(item) === JSON.stringify(newHistory)).length === 0) {
      localStorageHistory.push(newHistory)
      localStorage.setItem('history', JSON.stringify(localStorageHistory))
    }
  }
  if(Number(data.result) < 0) {
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
export { backspace, allClear, comma, parentheses, percentage, equals }
