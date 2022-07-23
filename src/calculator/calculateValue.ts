import { evaluate } from 'mathjs'
import { data } from './calculator'
export default () =>  {
  try {
    let result = evaluate(
      data.expression.join('')
      .replace(/rad/gi, 'pi/180*')
      .replace(/deg/gi, ''))
      data.result = result.toString()
  } catch (error) {
    data.result = ''
  }
}