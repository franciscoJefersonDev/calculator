import {
  data,
  expression_display,
  display_result,
} from './calculator'
import {
  default as keys
  } from './keys.js'
  export default {
    operators_symbols: /\+|\-|\*|\//,
    percentage_parentheses_end: /\%|\)/,
    tenDigitsDecimal(str: string) {
      const lastPosition = data.expression.length - 1 < 0 ? 0:
      data.expression.length - 1
      const index = str.search(/\./)
      let decimals
      if (index >= 0) {
        decimals = str.substring(index, str.length - 1)
        decimals = decimals ? decimals.length: 0
      }
      if (data.expression[lastPosition].length < 16 &&
        decimals === 10) {
        return true
      } else {
        return false
      }
    },
    
    alert(msg) {
      const innerAlerts = document.querySelector('.inner-alerts')
      const div = document.createElement('div')
      div.classList.add('alert', 'alert-warning')
      div.setAttribute('role', 'alert')
      div.textContent = msg
      if (innerAlerts.querySelector('.alert') === null) {
        innerAlerts.append(div)
        div.animate(
          [{
            opacity: 0
          },
            {
              opacity: 1
            }],
          {
            duration: 400, fill: 'forwards'
          }
        )
        setTimeout(() => {
          div.animate(
            [{
              opacity: 1
            },
              {
                opacity: 0
              }],
            {
              duration: 400, fill: 'forwards'
            }
          )
          setTimeout(() => {
            div.remove()
          }, 400)
        }, 1500)
      }
    },
  }