const body = document.body
export default class {
  constructor(dropdowns: HTMLDivElement[]) {
    dropdowns.forEach((item: HTMLDivElement) => {
      const activator = item.querySelector<HTMLButtonElement>('.dropdown__button')!
      activator.addEventListener('click', (event: any) => {
        event.stopPropagation()
        const widthScreen: number = window.innerWidth
        const heightScreen: number = window.innerHeight
        const targetData: any = event.target.getBoundingClientRect()
        const percentageWidthScreen = (targetData.x * 100) / widthScreen
        const percentageHeightScreen = (targetData.y * 100) / heightScreen
        const menu = item.querySelector<HTMLUListElement>('.dropdown__menu')!
        if(percentageWidthScreen <= 50) {
          menu.style.left = '0'
        } else {
          menu.style.right = '0'
        }
        if(percentageHeightScreen <= 50) {
          menu.style.top = '0'
        } else {
          menu.style.bottom = '0'
        }
        menu.style.display = 'flex'
      })
    })
    body.addEventListener('click', () =>{
      dropdowns.forEach((item: HTMLDivElement) => {
        const menu = item.querySelector<HTMLUListElement>('.dropdown__menu')!
        menu.style.display = 'none'
      })
    })
  }
}