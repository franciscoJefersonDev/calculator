import format from "./format"
import calculateValue from "./calculateValue"
import { data } from './calculator'

export default (buttons: HTMLButtonElement[]) => {
  buttons.forEach((item: HTMLButtonElement) => {
    item.addEventListener('click', ({ target }: any) => {
      const value: string = target.dataset.value
      const last_position =
        data.expression.length - 1 < 0 ? 0 : data.expression.length - 1
      const is_number = !isNaN(Number(data.expression[last_position]))
      if (value === 'sqrt') {
        if (data.expression[0] === '') {
          data.expression[0] = 'sqrt('
          data.expression_display[0] = '√('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('sqrt(')
          data.expression_display.push('√(')
        }
      } if (value === 'cbrt') {
        if (data.expression[0] === '') {
          data.expression[0] = 'cbrt('
          data.expression_display[0] = 'cbrt('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('cbrt(')
          data.expression_display.push('cbrt(')
        }
      } else if (value === 'sin') {
        if (data.expression[0] === '') {
          if (!data.deg) {
            data.expression[0] = 'sin(rad'
            data.expression_display[0] = 'sin('
          } else {
            data.expression[0] = 'sin(deg'
            data.expression_display[0] = 'sin('
          }
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          if (!data.deg) {
            data.expression.push('sin(rad')
            data.expression_display.push('sin(')
          } else {
            data.expression.push('sin(deg')
            data.expression_display.push('sin(')
          }
        }
      } else if (value === 'cos') {
        if (data.expression[0] === '') {
          if (!data.deg) {
            data.expression[0] = 'cos(rad'
            data.expression_display[0] = 'cos('
          } else {
            data.expression[0] = 'cos(deg'
            data.expression_display[0] = 'cos('
          }
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          if (!data.deg) {
            data.expression.push('cos(rad')
            data.expression_display.push('cos(')
          } else {
            data.expression.push('cos(deg')
            data.expression_display.push('cos(')
          }
        }
      } else if (value === 'tan') {
        if (data.expression[0] === '') {
          if (!data.deg) {
            data.expression[0] = 'tan(rad'
            data.expression_display[0] = 'tan('
          } else {
            data.expression[0] = 'tan(deg'
            data.expression_display[0] = 'tan('
          }
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          if (!data.deg) {
            data.expression.push('tan(rad')
            data.expression_display.push('tan(')
          } else {
            data.expression.push('tan(deg')
            data.expression_display.push('tan(')
          }
        }
      } else if (value === 'log') {
        if (data.expression[0] === '') {
          data.expression[0] = 'log10('
          data.expression_display[0] = 'log('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('log10(')
          data.expression_display.push('log(')
        }
      } else if (value === 'ln') {
        if (data.expression[0] === '') {
          data.expression[0] = 'log('
          data.expression_display[0] = 'ln('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('log(')
          data.expression_display.push('ln(')
        }
      } else if (value === '1/x') {
        if (data.expression[0] === '') {
          data.expression[0] = '1'
          data.expression.push('/')
          data.expression_display[0] = '1'
          data.expression_display.push('÷')
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('1')
          data.expression.push('/')
          data.expression_display.push('1')
          data.expression_display.push('÷')
        }
      } else if (value === 'x^2') {
        if (
          (data.expression[last_position] !== '' && is_number) ||
          data.expression[last_position] === ')'
        ) {
          data.expression.push('^(')
          data.expression.push('2')
          data.expression.push(')')
          data.expression_display.push('^(')
          data.expression_display.push('2')
          data.expression_display.push(')')
        }
      } else if (value === 'x^y') {
        if (
          (data.expression[last_position] !== '' && is_number) ||
          data.expression[last_position] === ')'
        ) {
          data.expression.push('^(')
          data.expression_display.push('^(')
        }
      } else if (value === 'pi') {
        if (data.expression[0] === '') {
          data.expression[0] = 'pi'
          data.expression_display[0] = 'π'
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('pi')
          data.expression_display.push('π')
        }
      } else if (value === 'e') {
        if (data.expression[0] === '') {
          data.expression[0] = 'e'
          data.expression_display[0] = 'e'
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('e')
          data.expression_display.push('e')
        }
      } else if (value === 'asin') {
        if (data.expression[0] === '') {
          if (!data.deg) {
            data.expression[0] = 'asin(rad'
            data.expression_display[0] = 'asin('
          } else {
            data.expression[0] = 'asin(deg'
            data.expression_display[0] = 'asin('
          }
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          if (!data.deg) {
            data.expression.push('asin(rad')
            data.expression_display.push('asin(')
          } else {
            data.expression.push('asin(deg')
            data.expression_display.push('asin(')
          }
        }
      } else if (value === 'acos') {
        if (data.expression[0] === '') {
          if (!data.deg) {
            data.expression[0] = 'acos(rad'
            data.expression_display[0] = 'acos('
          } else {
            data.expression[0] = 'acos(deg'
            data.expression_display[0] = 'acos('
          }
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          if (!data.deg) {
            data.expression.push('acos(rad')
            data.expression_display.push('acos(')
          } else {
            data.expression.push('acos(deg')
            data.expression_display.push('acos(')
          }
        }
      } else if (value === 'atan') {
        if (data.expression[0] === '') {
          if (!data.deg) {
            data.expression[0] = 'atan(rad'
            data.expression_display[0] = 'atan('
          } else {
            data.expression[0] = 'atan(deg'
            data.expression_display[0] = 'atan('
          }
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          if (!data.deg) {
            data.expression.push('atan(rad')
            data.expression_display.push('atan(')
          } else {
            data.expression.push('atan(deg')
            data.expression_display.push('atan(')
          }
        }
      } else if (value === 'e^x') {
        if (data.expression[0] === '') {
          data.expression[0] = 'e^('
          data.expression_display[0] = 'e^('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('e^(')
          data.expression_display.push('e^(')
        }
      } else if (value === '2^x') {
        if (data.expression[0] === '') {
          data.expression[0] = '2^('
          data.expression_display[0] = '2^('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('2^(')
          data.expression_display.push('2^(')
        }
      } else if (value === 'x^3') {
        if (
          (data.expression[last_position] !== '' && is_number) ||
          data.expression[last_position] === ')'
        ) {
          data.expression.push('^(')
          data.expression.push('3')
          data.expression.push(')')
          data.expression_display.push('^(')
          data.expression_display.push('3')
          data.expression_display.push(')')
        }
      } else if (value === 'abs') {
        if (data.expression[0] === '') {
          data.expression[0] = 'abs('
          data.expression_display[0] = 'abs('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('abs(')
          data.expression_display.push('abs(')
        }
      } else if (value === 'x!') {
        if (
          (data.expression[last_position] !== '' && is_number) ||
          data.expression[last_position] === ')'
        ) {
          data.expression.push('!')
          data.expression_display.push('!')
        }
      } else if (value === 'sinh') {
        if (data.expression[0] === '') {
            data.expression[0] = 'sinh('
            data.expression_display[0] = 'sinh('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
            data.expression.push('sinh(')
            data.expression_display.push('sinh(')
        }
      } else if (value === 'cosh') {
        if (data.expression[0] === '') {
            data.expression[0] = 'cosh('
            data.expression_display[0] = 'cosh('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
            data.expression.push('cosh(')
            data.expression_display.push('cosh(')
        }
      } else if (value === 'tanh') {
        if (data.expression[0] === '') {
            data.expression[0] = 'tanh('
            data.expression_display[0] = 'tanh('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
            data.expression.push('tanh(')
            data.expression_display.push('tanh(')
        }
      } else if (value === 'asinh') {
        if (data.expression[0] === '') {
          data.expression[0] = 'asinh('
          data.expression_display[0] = 'asinh('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('asinh(')
          data.expression_display.push('asinh(')
        }
      } else if (value === 'acosh') {
        if (data.expression[0] === '') {
          data.expression[0] = 'acosh('
          data.expression_display[0] = 'acosh('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('acosh(')
          data.expression_display.push('acosh(')
        }
      } else if (value === 'atanh') {
        if (data.expression[0] === '') {
          data.expression[0] = 'atanh('
          data.expression_display[0] = 'atanh('
        } else {
          const condition = !isNaN(Number(data.expression[last_position]))
          if (
            condition ||
            data.expression[last_position] === 'pi' ||
            data.expression[last_position] === 'e' ||
            data.expression[last_position] === ')'
          ) {
            data.expression.push('*')
            data.expression_display.push('×')
          }
          data.expression.push('atanh(')
          data.expression_display.push('atanh(')
        }
      }
      calculateValue()
      format()
    })
  })
}
