import { data } from './calculator'
export default () => {
  const expression_display = document.querySelector<HTMLInputElement>(
    '.expression-display'
  )!
  const display_result =
    document.querySelector<HTMLInputElement>('.display-result')!
  expression_display.value = ''
  expression_display.classList.remove('c-text-primary')
  data.expression_display.forEach((item) => {
    const number = Number(item)
    if (
      (!isNaN(number) && number !== 0) ||
      (item.search(/\./) > -1 && item.search(/\e/) < 0)
    ) {
      if (item.search(/\./) > -1) {
        const [integer, decimal] = item.split('.')
        expression_display.value +=
          Number(integer).toLocaleString('pt-BR', {
            maximumFractionDigits: 10,
          }) +
          ',' +
          decimal
      } else {
        expression_display.value += number.toLocaleString('pt-BR', {
          maximumFractionDigits: 10,
        })
      }
    } else {
      expression_display.value += item
    }
  })
  try {
    const is_small_number = data.result.search(/\e/) < 0
    if (is_small_number && data.result !== '') {
      display_result.value = Number(data.result).toLocaleString('pt-BR', {
        maximumFractionDigits: 10,
      })
    } else {
      display_result.value = data.result.replace(/\./gi, ',')
    }
  } catch (error) {
    display_result.value = ''
  }
  expression_display.focus()
  console.log(expression_display.value.trim().length)
  if (expression_display.value.trim().length <= 19) {
    expression_display.style.fontSize = '3em'
  } else if (
    expression_display.value.trim().length > 19 &&
    expression_display.value.trim().length <= 39
  ) {
    expression_display.style.fontSize = '2.5em'
  } else if (expression_display.value.trim().length > 39) {
    expression_display.style.fontSize = '2em'
  }
}
