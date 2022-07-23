const data = {
  expression: [''],
  expression_display: [''],
  display: '',
  result: '',
  deg: false,
  mathContainer: 1,
  isResult: false,
}
const expression_display = document.querySelector<HTMLInputElement>('.expression-display')!
const display_result = document.querySelector<HTMLInputElement>('.display-result')!
export {
  data,
  expression_display,
  display_result,
}