import { data } from './calculator'
export default {
  operators_symbols: /\+|\-|\*|\//,
  percentage_parentheses_end: /\%|\)/,
  tenDigitsDecimal(str: string) {
    const lastPosition =
      data.expression.length - 1 < 0 ? 0 : data.expression.length - 1
    const index = str.search(/\./)
    let decimals
    if (index >= 0) {
      decimals = str.substring(index, str.length - 1)
      decimals = decimals ? decimals.length : 0
    }
    if (data.expression[lastPosition].length < 16 && decimals === 10) {
      return true
    } else {
      return false
    }
  },
}
